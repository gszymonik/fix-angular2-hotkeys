(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('mousetrap'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular2-hotkeys', ['exports', '@angular/core', 'rxjs', 'mousetrap', '@angular/common'], factory) :
    (global = global || self, factory(global['angular2-hotkeys'] = {}, global.ng.core, global.rxjs, null, global.ng.common));
}(this, (function (exports, core, rxjs, mousetrap, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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

    var HotkeyOptions = new core.InjectionToken('HotkeyOptions');

    var HotkeysService = /** @class */ (function () {
        function HotkeysService(options) {
            this.options = options;
            this.hotkeys = [];
            this.pausedHotkeys = [];
            this.cheatSheetToggle = new rxjs.Subject();
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
            { type: undefined, decorators: [{ type: core.Inject, args: [HotkeyOptions,] }] }
        ]; };
        HotkeysService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function HotkeysService_Factory() { return new HotkeysService(core["ɵɵinject"](HotkeyOptions)); }, token: HotkeysService, providedIn: "root" });
        HotkeysService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(0, core.Inject(HotkeyOptions))
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
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], HotkeysDirective.prototype, "hotkeys", void 0);
        HotkeysDirective = __decorate([
            core.Directive({
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
            core.Input()
        ], HotkeysCheatsheetComponent.prototype, "title", void 0);
        HotkeysCheatsheetComponent = __decorate([
            core.Component({
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
            core.NgModule({
                declarations: [HotkeysDirective, HotkeysCheatsheetComponent],
                imports: [common.CommonModule],
                exports: [HotkeysDirective, HotkeysCheatsheetComponent]
            })
        ], HotkeyModule);
        return HotkeyModule;
    }());

    exports.Hotkey = Hotkey;
    exports.HotkeyModule = HotkeyModule;
    exports.HotkeyOptions = HotkeyOptions;
    exports.HotkeysCheatsheetComponent = HotkeysCheatsheetComponent;
    exports.HotkeysDirective = HotkeysDirective;
    exports.HotkeysService = HotkeysService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-hotkeys.umd.js.map
