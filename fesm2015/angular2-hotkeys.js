import { __decorate, __param } from 'tslib';
import { InjectionToken, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, Input, Directive, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import 'mousetrap';
import { CommonModule } from '@angular/common';

class Hotkey {
    /**
     * Creates a new Hotkey for Mousetrap binding
     *
     * @param combo       mousetrap key binding
     * @param description description for the help menu
     * @param callback    method to call when key is pressed
     * @param action      the type of event to listen for (for mousetrap)
     * @param allowIn     an array of tag names to allow this combo in ('INPUT', 'SELECT', and/or 'TEXTAREA')
     * @param persistent  if true, the binding is preserved upon route changes
     */
    constructor(combo, callback, allowIn, description, action, persistent) {
        this.combo = combo;
        this.callback = callback;
        this.allowIn = allowIn;
        this.description = description;
        this.action = action;
        this.persistent = persistent;
        this.combo = (Array.isArray(combo) ? combo : [combo]);
        this.allowIn = allowIn || [];
        this.description = description || '';
    }
    static symbolize(combo) {
        const map = {
            command: '\u2318',
            shift: '\u21E7',
            left: '\u2190',
            right: '\u2192',
            up: '\u2191',
            down: '\u2193',
            // tslint:disable-next-line:object-literal-key-quotes
            'return': '\u23CE',
            backspace: '\u232B' // ⌫
        };
        const comboSplit = combo.split('+');
        for (let i = 0; i < comboSplit.length; i++) {
            // try to resolve command / ctrl based on OS:
            if (comboSplit[i] === 'mod') {
                if (window.navigator && window.navigator.platform.indexOf('Mac') >= 0) {
                    comboSplit[i] = 'command';
                }
                else {
                    comboSplit[i] = 'ctrl';
                }
            }
            comboSplit[i] = map[comboSplit[i]] || comboSplit[i];
        }
        return comboSplit.join(' + ');
    }
    get formatted() {
        if (!this.formattedHotkey) {
            const sequence = this.combo;
            for (let i = 0; i < sequence.length; i++) {
                sequence[i] = Hotkey.symbolize(sequence[i]);
            }
            this.formattedHotkey = sequence;
        }
        return this.formattedHotkey;
    }
}

const HotkeyOptions = new InjectionToken('HotkeyOptions');

let HotkeysService = class HotkeysService {
    constructor(options) {
        this.options = options;
        this.hotkeys = [];
        this.pausedHotkeys = [];
        this.cheatSheetToggle = new Subject();
        this.preventIn = ['INPUT', 'SELECT', 'TEXTAREA'];
        // noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
        Mousetrap.prototype.stopCallback = (event, element, combo, callback) => {
            // if the element has the class "mousetrap" then no need to stop
            if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
                return false;
            }
            return (element.contentEditable && element.contentEditable === 'true');
        };
        this.mousetrap = new Mousetrap();
        if (!this.options.disableCheatSheet) {
            this.add(new Hotkey(this.options.cheatSheetHotkey || '?', function (_) {
                this.cheatSheetToggle.next();
            }.bind(this), [], this.options.cheatSheetDescription || 'Show / hide this help menu'));
        }
        if (this.options.cheatSheetCloseEsc) {
            this.add(new Hotkey('esc', function (_) {
                this.cheatSheetToggle.next(false);
            }.bind(this), ['HOTKEYS-CHEATSHEET'], this.options.cheatSheetCloseEscDescription || 'Hide this help menu'));
        }
    }
    add(hotkey, specificEvent) {
        if (Array.isArray(hotkey)) {
            const temp = [];
            for (const key of hotkey) {
                temp.push(this.add(key, specificEvent));
            }
            return temp;
        }
        this.remove(hotkey);
        this.hotkeys.push(hotkey);
        this.mousetrap.bind(hotkey.combo, (event, combo) => {
            let shouldExecute = true;
            // if the callback is executed directly `hotkey.get('w').callback()`
            // there will be no event, so just execute the callback.
            if (event) {
                const target = (event.target || event.srcElement); // srcElement is IE only
                const nodeName = target.nodeName.toUpperCase();
                // check if the input has a mousetrap class, and skip checking preventIn if so
                if ((' ' + target.className + ' ').indexOf(' mousetrap ') > -1) {
                    shouldExecute = true;
                }
                else if (this.preventIn.indexOf(nodeName) > -1 &&
                    hotkey.allowIn.map(allow => allow.toUpperCase()).indexOf(nodeName) === -1) {
                    // don't execute callback if the event was fired from inside an element listed in preventIn but not in allowIn
                    shouldExecute = false;
                }
            }
            if (shouldExecute) {
                return hotkey.callback.apply(this, [event, combo]);
            }
        }, specificEvent);
        return hotkey;
    }
    remove(hotkey) {
        const temp = [];
        if (!hotkey) {
            for (const key of this.hotkeys) {
                temp.push(this.remove(key));
            }
            return temp;
        }
        if (Array.isArray(hotkey)) {
            for (const key of hotkey) {
                temp.push(this.remove(key));
            }
            return temp;
        }
        const index = this.findHotkey(hotkey);
        if (index > -1) {
            this.hotkeys.splice(index, 1);
            this.mousetrap.unbind(hotkey.combo);
            return hotkey;
        }
        return null;
    }
    get(combo) {
        if (!combo) {
            return this.hotkeys;
        }
        if (Array.isArray(combo)) {
            const temp = [];
            for (const key of combo) {
                temp.push(this.get(key));
            }
            return temp;
        }
        for (const hotkey of this.hotkeys) {
            if (hotkey.combo.indexOf(combo) > -1) {
                return hotkey;
            }
        }
        return null;
    }
    // noinspection JSUnusedGlobalSymbols
    pause(hotkey) {
        if (!hotkey) {
            return this.pause(this.hotkeys);
        }
        if (Array.isArray(hotkey)) {
            const temp = [];
            for (const key of hotkey) {
                temp.push(this.pause(key));
            }
            return temp;
        }
        this.remove(hotkey);
        this.pausedHotkeys.push(hotkey);
        return hotkey;
    }
    // noinspection JSUnusedGlobalSymbols
    unpause(hotkey) {
        if (!hotkey) {
            return this.unpause(this.pausedHotkeys);
        }
        if (Array.isArray(hotkey)) {
            const temp = [];
            for (const key of hotkey) {
                temp.push(this.unpause(key));
            }
            return temp;
        }
        const index = this.pausedHotkeys.indexOf(hotkey);
        if (index > -1) {
            this.add(hotkey);
            return this.pausedHotkeys.splice(index, 1);
        }
        return null;
    }
    // noinspection JSUnusedGlobalSymbols
    reset() {
        this.mousetrap.reset();
    }
    findHotkey(hotkey) {
        return this.hotkeys.indexOf(hotkey);
    }
};
HotkeysService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [HotkeyOptions,] }] }
];
HotkeysService.ɵprov = ɵɵdefineInjectable({ factory: function HotkeysService_Factory() { return new HotkeysService(ɵɵinject(HotkeyOptions)); }, token: HotkeysService, providedIn: "root" });
HotkeysService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(HotkeyOptions))
], HotkeysService);

let HotkeysDirective = class HotkeysDirective {
    constructor(hotkeysService, elementRef) {
        this.hotkeysService = hotkeysService;
        this.elementRef = elementRef;
        this.hotkeysList = [];
        this.oldHotkeys = [];
        this.mousetrap = new Mousetrap(this.elementRef.nativeElement); // Bind hotkeys to the current element (and any children)
    }
    ngOnInit() {
        for (const hotkey of this.hotkeys) {
            const combo = Object.keys(hotkey)[0];
            const hotkeyObj = new Hotkey(combo, hotkey[combo]);
            const oldHotkey = this.hotkeysService.get(combo);
            if (oldHotkey !== null) { // We let the user overwrite callbacks temporarily if you specify it in HTML
                this.oldHotkeys.push(oldHotkey);
                this.hotkeysService.remove(oldHotkey);
            }
            this.hotkeysList.push(hotkeyObj);
            this.mousetrap.bind(hotkeyObj.combo, hotkeyObj.callback);
        }
    }
    ngOnDestroy() {
        for (const hotkey of this.hotkeysList) {
            this.mousetrap.unbind(hotkey.combo);
        }
        this.hotkeysService.add(this.oldHotkeys);
    }
};
HotkeysDirective.ctorParameters = () => [
    { type: HotkeysService },
    { type: ElementRef }
];
__decorate([
    Input()
], HotkeysDirective.prototype, "hotkeys", void 0);
HotkeysDirective = __decorate([
    Directive({
        selector: '[hotkeys]',
        providers: [HotkeysService]
    })
], HotkeysDirective);

let HotkeysCheatsheetComponent = class HotkeysCheatsheetComponent {
    constructor(hotkeysService) {
        this.hotkeysService = hotkeysService;
        this.helpVisible = false;
        this.title = 'Keyboard Shortcuts:';
    }
    ngOnInit() {
        this.subscription = this.hotkeysService.cheatSheetToggle.subscribe((isOpen) => {
            if (isOpen !== false) {
                this.hotkeys = this.hotkeysService.hotkeys.filter(hotkey => hotkey.description);
            }
            if (isOpen === false) {
                this.helpVisible = false;
            }
            else {
                this.toggleCheatSheet();
            }
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    toggleCheatSheet() {
        this.helpVisible = !this.helpVisible;
    }
};
HotkeysCheatsheetComponent.ctorParameters = () => [
    { type: HotkeysService }
];
__decorate([
    Input()
], HotkeysCheatsheetComponent.prototype, "title", void 0);
HotkeysCheatsheetComponent = __decorate([
    Component({
        selector: 'hotkeys-cheatsheet',
        template: "<div class=\"cfp-hotkeys-container fade\" [ngClass]=\"{'in': helpVisible}\" style=\"display:none\">\n    <div class=\"cfp-hotkeys\">\n        <h4 class=\"cfp-hotkeys-title\">{{ title }}</h4>\n        <table>\n            <tbody>\n            <tr *ngFor=\"let hotkey of hotkeys\">\n                <td class=\"cfp-hotkeys-keys\">\n                    <span *ngFor=\"let key of hotkey.formatted\" class=\"cfp-hotkeys-key\">{{ key }}</span>\n                </td>\n                <td class=\"cfp-hotkeys-text\">{{ hotkey.description }}</td>\n            </tr>\n            </tbody>\n        </table>\n        <div class=\"cfp-hotkeys-close\" (click)=\"toggleCheatSheet()\">&#215;</div>\n    </div>\n</div>\n",
        styles: [".cfp-hotkeys-container{display:table!important;position:fixed;width:100%;height:100%;top:0;left:0;color:#333;font-size:1em;background-color:rgba(255,255,255,.9)}.cfp-hotkeys-container.fade{z-index:-1024;visibility:hidden;opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.cfp-hotkeys-container.fade.in{z-index:10002;visibility:visible;opacity:1}.cfp-hotkeys-title{font-weight:700;text-align:center;font-size:1.2em}.cfp-hotkeys{width:100%;height:100%;display:table-cell;vertical-align:middle}.cfp-hotkeys table{margin:auto;color:#333}.cfp-content{display:table-cell;vertical-align:middle}.cfp-hotkeys-keys{padding:5px;text-align:right}.cfp-hotkeys-key{display:inline-block;color:#fff;background-color:#333;border:1px solid #333;border-radius:5px;text-align:center;margin-right:5px;box-shadow:inset 0 1px 0 #666,0 1px 0 #bbb;padding:5px 9px;font-size:1em}.cfp-hotkeys-text{padding-left:10px;font-size:1em}.cfp-hotkeys-close{position:fixed;top:20px;right:20px;font-size:2em;font-weight:700;padding:5px 10px;border:1px solid #ddd;border-radius:5px;min-height:45px;min-width:45px;text-align:center}.cfp-hotkeys-close:hover{background-color:#fff;cursor:pointer}@media all and (max-width:500px){.cfp-hotkeys{font-size:.8em}}@media all and (min-width:750px){.cfp-hotkeys{font-size:1.2em}}"]
    })
], HotkeysCheatsheetComponent);

var HotkeyModule_1;
let HotkeyModule = HotkeyModule_1 = class HotkeyModule {
    // noinspection JSUnusedGlobalSymbols
    static forRoot(options = {}) {
        return {
            ngModule: HotkeyModule_1,
            providers: [
                HotkeysService,
                { provide: HotkeyOptions, useValue: options }
            ]
        };
    }
};
HotkeyModule = HotkeyModule_1 = __decorate([
    NgModule({
        declarations: [HotkeysDirective, HotkeysCheatsheetComponent],
        imports: [CommonModule],
        exports: [HotkeysDirective, HotkeysCheatsheetComponent]
    })
], HotkeyModule);

/*
 * Public API Surface of angular2-hotkeys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Hotkey, HotkeyModule, HotkeyOptions, HotkeysCheatsheetComponent, HotkeysDirective, HotkeysService };
//# sourceMappingURL=angular2-hotkeys.js.map
