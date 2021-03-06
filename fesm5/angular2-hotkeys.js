import { __values, __decorate, __param } from 'tslib';
import { InjectionToken, Inject, ɵɵdefineInjectable, ɵɵinject, Injectable, ElementRef, Input, Directive, Component, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import 'mousetrap';
import { CommonModule } from '@angular/common';

var Hotkey = /** @class */ (function () {
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
    function Hotkey(combo, callback, allowIn, description, action, persistent) {
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
    Hotkey.symbolize = function (combo) {
        var map = {
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
        var comboSplit = combo.split('+');
        for (var i = 0; i < comboSplit.length; i++) {
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
    };
    Object.defineProperty(Hotkey.prototype, "formatted", {
        get: function () {
            if (!this.formattedHotkey) {
                var sequence = this.combo;
                for (var i = 0; i < sequence.length; i++) {
                    sequence[i] = Hotkey.symbolize(sequence[i]);
                }
                this.formattedHotkey = sequence;
            }
            return this.formattedHotkey;
        },
        enumerable: true,
        configurable: true
    });
    return Hotkey;
}());

var HotkeyOptions = new InjectionToken('HotkeyOptions');

var HotkeysService = /** @class */ (function () {
    function HotkeysService(options) {
        this.options = options;
        this.hotkeys = [];
        this.pausedHotkeys = [];
        this.cheatSheetToggle = new Subject();
        this.preventIn = ['INPUT', 'SELECT', 'TEXTAREA'];
        // noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
        Mousetrap.prototype.stopCallback = function (event, element, combo, callback) {
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
    HotkeysService.prototype.add = function (hotkey, specificEvent) {
        var e_1, _a;
        var _this = this;
        if (Array.isArray(hotkey)) {
            var temp = [];
            try {
                for (var hotkey_1 = __values(hotkey), hotkey_1_1 = hotkey_1.next(); !hotkey_1_1.done; hotkey_1_1 = hotkey_1.next()) {
                    var key = hotkey_1_1.value;
                    temp.push(this.add(key, specificEvent));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (hotkey_1_1 && !hotkey_1_1.done && (_a = hotkey_1.return)) _a.call(hotkey_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return temp;
        }
        this.remove(hotkey);
        this.hotkeys.push(hotkey);
        this.mousetrap.bind(hotkey.combo, function (event, combo) {
            var shouldExecute = true;
            // if the callback is executed directly `hotkey.get('w').callback()`
            // there will be no event, so just execute the callback.
            if (event) {
                var target = (event.target || event.srcElement); // srcElement is IE only
                var nodeName = target.nodeName.toUpperCase();
                // check if the input has a mousetrap class, and skip checking preventIn if so
                if ((' ' + target.className + ' ').indexOf(' mousetrap ') > -1) {
                    shouldExecute = true;
                }
                else if (_this.preventIn.indexOf(nodeName) > -1 &&
                    hotkey.allowIn.map(function (allow) { return allow.toUpperCase(); }).indexOf(nodeName) === -1) {
                    // don't execute callback if the event was fired from inside an element listed in preventIn but not in allowIn
                    shouldExecute = false;
                }
            }
            if (shouldExecute) {
                return hotkey.callback.apply(_this, [event, combo]);
            }
        }, specificEvent);
        return hotkey;
    };
    HotkeysService.prototype.remove = function (hotkey) {
        var e_2, _a, e_3, _b;
        var temp = [];
        if (!hotkey) {
            try {
                for (var _c = __values(this.hotkeys), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var key = _d.value;
                    temp.push(this.remove(key));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return temp;
        }
        if (Array.isArray(hotkey)) {
            try {
                for (var hotkey_2 = __values(hotkey), hotkey_2_1 = hotkey_2.next(); !hotkey_2_1.done; hotkey_2_1 = hotkey_2.next()) {
                    var key = hotkey_2_1.value;
                    temp.push(this.remove(key));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (hotkey_2_1 && !hotkey_2_1.done && (_b = hotkey_2.return)) _b.call(hotkey_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return temp;
        }
        var index = this.findHotkey(hotkey);
        if (index > -1) {
            this.hotkeys.splice(index, 1);
            this.mousetrap.unbind(hotkey.combo);
            return hotkey;
        }
        return null;
    };
    HotkeysService.prototype.get = function (combo) {
        var e_4, _a, e_5, _b;
        if (!combo) {
            return this.hotkeys;
        }
        if (Array.isArray(combo)) {
            var temp = [];
            try {
                for (var combo_1 = __values(combo), combo_1_1 = combo_1.next(); !combo_1_1.done; combo_1_1 = combo_1.next()) {
                    var key = combo_1_1.value;
                    temp.push(this.get(key));
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (combo_1_1 && !combo_1_1.done && (_a = combo_1.return)) _a.call(combo_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return temp;
        }
        try {
            for (var _c = __values(this.hotkeys), _d = _c.next(); !_d.done; _d = _c.next()) {
                var hotkey = _d.value;
                if (hotkey.combo.indexOf(combo) > -1) {
                    return hotkey;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return null;
    };
    // noinspection JSUnusedGlobalSymbols
    HotkeysService.prototype.pause = function (hotkey) {
        var e_6, _a;
        if (!hotkey) {
            return this.pause(this.hotkeys);
        }
        if (Array.isArray(hotkey)) {
            var temp = [];
            try {
                for (var hotkey_3 = __values(hotkey), hotkey_3_1 = hotkey_3.next(); !hotkey_3_1.done; hotkey_3_1 = hotkey_3.next()) {
                    var key = hotkey_3_1.value;
                    temp.push(this.pause(key));
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (hotkey_3_1 && !hotkey_3_1.done && (_a = hotkey_3.return)) _a.call(hotkey_3);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return temp;
        }
        this.remove(hotkey);
        this.pausedHotkeys.push(hotkey);
        return hotkey;
    };
    // noinspection JSUnusedGlobalSymbols
    HotkeysService.prototype.unpause = function (hotkey) {
        var e_7, _a;
        if (!hotkey) {
            return this.unpause(this.pausedHotkeys);
        }
        if (Array.isArray(hotkey)) {
            var temp = [];
            try {
                for (var hotkey_4 = __values(hotkey), hotkey_4_1 = hotkey_4.next(); !hotkey_4_1.done; hotkey_4_1 = hotkey_4.next()) {
                    var key = hotkey_4_1.value;
                    temp.push(this.unpause(key));
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (hotkey_4_1 && !hotkey_4_1.done && (_a = hotkey_4.return)) _a.call(hotkey_4);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return temp;
        }
        var index = this.pausedHotkeys.indexOf(hotkey);
        if (index > -1) {
            this.add(hotkey);
            return this.pausedHotkeys.splice(index, 1);
        }
        return null;
    };
    // noinspection JSUnusedGlobalSymbols
    HotkeysService.prototype.reset = function () {
        this.mousetrap.reset();
    };
    HotkeysService.prototype.findHotkey = function (hotkey) {
        return this.hotkeys.indexOf(hotkey);
    };
    HotkeysService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [HotkeyOptions,] }] }
    ]; };
    HotkeysService.ɵprov = ɵɵdefineInjectable({ factory: function HotkeysService_Factory() { return new HotkeysService(ɵɵinject(HotkeyOptions)); }, token: HotkeysService, providedIn: "root" });
    HotkeysService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(HotkeyOptions))
    ], HotkeysService);
    return HotkeysService;
}());

var HotkeysDirective = /** @class */ (function () {
    function HotkeysDirective(hotkeysService, elementRef) {
        this.hotkeysService = hotkeysService;
        this.elementRef = elementRef;
        this.hotkeysList = [];
        this.oldHotkeys = [];
        this.mousetrap = new Mousetrap(this.elementRef.nativeElement); // Bind hotkeys to the current element (and any children)
    }
    HotkeysDirective.prototype.ngOnInit = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.hotkeys), _c = _b.next(); !_c.done; _c = _b.next()) {
                var hotkey = _c.value;
                var combo = Object.keys(hotkey)[0];
                var hotkeyObj = new Hotkey(combo, hotkey[combo]);
                var oldHotkey = this.hotkeysService.get(combo);
                if (oldHotkey !== null) { // We let the user overwrite callbacks temporarily if you specify it in HTML
                    this.oldHotkeys.push(oldHotkey);
                    this.hotkeysService.remove(oldHotkey);
                }
                this.hotkeysList.push(hotkeyObj);
                this.mousetrap.bind(hotkeyObj.combo, hotkeyObj.callback);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    HotkeysDirective.prototype.ngOnDestroy = function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.hotkeysList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var hotkey = _c.value;
                this.mousetrap.unbind(hotkey.combo);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.hotkeysService.add(this.oldHotkeys);
    };
    HotkeysDirective.ctorParameters = function () { return [
        { type: HotkeysService },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], HotkeysDirective.prototype, "hotkeys", void 0);
    HotkeysDirective = __decorate([
        Directive({
            selector: '[hotkeys]',
            providers: [HotkeysService]
        })
    ], HotkeysDirective);
    return HotkeysDirective;
}());

var HotkeysCheatsheetComponent = /** @class */ (function () {
    function HotkeysCheatsheetComponent(hotkeysService) {
        this.hotkeysService = hotkeysService;
        this.helpVisible = false;
        this.title = 'Keyboard Shortcuts:';
    }
    HotkeysCheatsheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.hotkeysService.cheatSheetToggle.subscribe(function (isOpen) {
            if (isOpen !== false) {
                _this.hotkeys = _this.hotkeysService.hotkeys.filter(function (hotkey) { return hotkey.description; });
            }
            if (isOpen === false) {
                _this.helpVisible = false;
            }
            else {
                _this.toggleCheatSheet();
            }
        });
    };
    HotkeysCheatsheetComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    HotkeysCheatsheetComponent.prototype.toggleCheatSheet = function () {
        this.helpVisible = !this.helpVisible;
    };
    HotkeysCheatsheetComponent.ctorParameters = function () { return [
        { type: HotkeysService }
    ]; };
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
    return HotkeysCheatsheetComponent;
}());

var HotkeyModule = /** @class */ (function () {
    function HotkeyModule() {
    }
    HotkeyModule_1 = HotkeyModule;
    // noinspection JSUnusedGlobalSymbols
    HotkeyModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HotkeyModule_1,
            providers: [
                HotkeysService,
                { provide: HotkeyOptions, useValue: options }
            ]
        };
    };
    var HotkeyModule_1;
    HotkeyModule = HotkeyModule_1 = __decorate([
        NgModule({
            declarations: [HotkeysDirective, HotkeysCheatsheetComponent],
            imports: [CommonModule],
            exports: [HotkeysDirective, HotkeysCheatsheetComponent]
        })
    ], HotkeyModule);
    return HotkeyModule;
}());

/*
 * Public API Surface of angular2-hotkeys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Hotkey, HotkeyModule, HotkeyOptions, HotkeysCheatsheetComponent, HotkeysDirective, HotkeysService };
//# sourceMappingURL=angular2-hotkeys.js.map
