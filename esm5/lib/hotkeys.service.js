import { __decorate, __param, __values } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Hotkey } from './hotkey.model';
import { Subject } from 'rxjs';
import { HotkeyOptions } from './hotkey.options';
import 'mousetrap';
import * as i0 from "@angular/core";
import * as i1 from "./hotkey.options";
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
    HotkeysService.ɵprov = i0.ɵɵdefineInjectable({ factory: function HotkeysService_Factory() { return new HotkeysService(i0.ɵɵinject(i1.HotkeyOptions)); }, token: HotkeysService, providedIn: "root" });
    HotkeysService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(HotkeyOptions))
    ], HotkeysService);
    return HotkeysService;
}());
export { HotkeysService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItaG90a2V5cy8iLCJzb3VyY2VzIjpbImxpYi9ob3RrZXlzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxXQUFXLENBQUM7OztBQUtuQjtJQVFJLHdCQUEyQyxPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVBsRSxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRTdCLHFCQUFnQixHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXZDLGNBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFHaEQsMERBQTBEO1FBQzFELFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFVBQUMsS0FBb0IsRUFBRSxPQUFvQixFQUFFLEtBQWEsRUFBRSxRQUFrQjtZQUM3RyxnRUFBZ0U7WUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDN0QsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSyxTQUFpQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FDZixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixJQUFJLEdBQUcsRUFDcEMsVUFBUyxDQUFnQjtnQkFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQ1osRUFBRSxFQUNGLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLElBQUksNEJBQTRCLENBQ3JFLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQ2YsS0FBSyxFQUNMLFVBQVMsQ0FBZ0I7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDWixDQUFDLG9CQUFvQixDQUFDLEVBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLElBQUkscUJBQXFCLENBQ3RFLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxNQUF5QixFQUFFLGFBQXNCOztRQUFyRCxpQkFrQ0M7UUFqQ0csSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQzs7Z0JBQzFCLEtBQWtCLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBckIsSUFBTSxHQUFHLG1CQUFBO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFXLENBQUMsQ0FBQztpQkFDckQ7Ozs7Ozs7OztZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQWdCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxNQUFpQixDQUFDLEtBQUssRUFBRSxVQUFDLEtBQW9CLEVBQUUsS0FBYTtZQUM5RSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFFekIsb0VBQW9FO1lBQ3BFLHdEQUF3RDtZQUN4RCxJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFNLE1BQU0sR0FBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQWdCLENBQUMsQ0FBQyx3QkFBd0I7Z0JBQ3ZHLElBQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRXZELDhFQUE4RTtnQkFDOUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDNUQsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDeEI7cUJBQU0sSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNDLE1BQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDdkYsOEdBQThHO29CQUM5RyxhQUFhLEdBQUcsS0FBSyxDQUFDO2lCQUN6QjthQUNKO1lBRUQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsT0FBUSxNQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDbEU7UUFDTCxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxNQUEwQjs7UUFDN0IsSUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUU7O2dCQUNULEtBQWtCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNCLElBQU0sR0FBRyxXQUFBO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO2lCQUN6Qzs7Ozs7Ozs7O1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs7Z0JBQ3ZCLEtBQWtCLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBckIsSUFBTSxHQUFHLG1CQUFBO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO2lCQUN6Qzs7Ozs7Ozs7O1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFFLE1BQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEQsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLEtBQXlCOztRQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQzs7Z0JBQzFCLEtBQWtCLElBQUEsVUFBQSxTQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtvQkFBcEIsSUFBTSxHQUFHLGtCQUFBO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO2lCQUN0Qzs7Ozs7Ozs7O1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjs7WUFDRCxLQUFxQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QixJQUFNLE1BQU0sV0FBQTtnQkFDYixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUM1QyxPQUFPLE1BQU0sQ0FBQztpQkFDakI7YUFDSjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHFDQUFxQztJQUNyQyw4QkFBSyxHQUFMLFVBQU0sTUFBMEI7O1FBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQzs7Z0JBQzFCLEtBQWtCLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtvQkFBckIsSUFBTSxHQUFHLG1CQUFBO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO2lCQUN4Qzs7Ozs7Ozs7O1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBZ0IsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsZ0NBQU8sR0FBUCxVQUFRLE1BQTBCOztRQUM5QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixJQUFNLElBQUksR0FBYSxFQUFFLENBQUM7O2dCQUMxQixLQUFrQixJQUFBLFdBQUEsU0FBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7b0JBQXJCLElBQU0sR0FBRyxtQkFBQTtvQkFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFXLENBQUMsQ0FBQztpQkFDMUM7Ozs7Ozs7OztZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFnQixDQUFDLENBQUM7UUFDbkUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHFDQUFxQztJQUNyQyw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sbUNBQVUsR0FBbEIsVUFBbUIsTUFBYztRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dEQTVKWSxNQUFNLFNBQUMsYUFBYTs7O0lBUnhCLGNBQWM7UUFIMUIsVUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztRQVNlLFdBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO09BUnpCLGNBQWMsQ0FxSzFCO3lCQTlLRDtDQThLQyxBQXJLRCxJQXFLQztTQXJLWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3RrZXkgfSBmcm9tICcuL2hvdGtleS5tb2RlbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIb3RrZXlPcHRpb25zLCBJSG90a2V5T3B0aW9ucyB9IGZyb20gJy4vaG90a2V5Lm9wdGlvbnMnO1xuaW1wb3J0ICdtb3VzZXRyYXAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEhvdGtleXNTZXJ2aWNlIHtcbiAgICBob3RrZXlzOiBIb3RrZXlbXSA9IFtdO1xuICAgIHBhdXNlZEhvdGtleXM6IEhvdGtleVtdID0gW107XG4gICAgbW91c2V0cmFwOiBNb3VzZXRyYXBJbnN0YW5jZTtcbiAgICBjaGVhdFNoZWV0VG9nZ2xlOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgcHJpdmF0ZSBwcmV2ZW50SW4gPSBbJ0lOUFVUJywgJ1NFTEVDVCcsICdURVhUQVJFQSddO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIb3RrZXlPcHRpb25zKSBwcml2YXRlIG9wdGlvbnM6IElIb3RrZXlPcHRpb25zKSB7XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHMsSlNVbnVzZWRMb2NhbFN5bWJvbHNcbiAgICAgICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb21ibzogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MgXCJtb3VzZXRyYXBcIiB0aGVuIG5vIG5lZWQgdG8gc3RvcFxuICAgICAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSAmJiBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tb3VzZXRyYXAgPSBuZXcgKE1vdXNldHJhcCBhcyBhbnkpKCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVDaGVhdFNoZWV0KSB7XG4gICAgICAgICAgICB0aGlzLmFkZChuZXcgSG90a2V5KFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGVhdFNoZWV0SG90a2V5IHx8ICc/JyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihfOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlYXRTaGVldFRvZ2dsZS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5jaGVhdFNoZWV0RGVzY3JpcHRpb24gfHwgJ1Nob3cgLyBoaWRlIHRoaXMgaGVscCBtZW51JyxcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jaGVhdFNoZWV0Q2xvc2VFc2MpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKG5ldyBIb3RrZXkoXG4gICAgICAgICAgICAgICAgJ2VzYycsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oXzogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWF0U2hlZXRUb2dnbGUubmV4dChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIFsnSE9US0VZUy1DSEVBVFNIRUVUJ10sXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNoZWF0U2hlZXRDbG9zZUVzY0Rlc2NyaXB0aW9uIHx8ICdIaWRlIHRoaXMgaGVscCBtZW51JyxcbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBhZGQoaG90a2V5OiBIb3RrZXkgfCBIb3RrZXlbXSwgc3BlY2lmaWNFdmVudD86IHN0cmluZyk6IEhvdGtleSB8IEhvdGtleVtdIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaG90a2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcDogSG90a2V5W10gPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGhvdGtleSkge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaCh0aGlzLmFkZChrZXksIHNwZWNpZmljRXZlbnQpIGFzIEhvdGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZShob3RrZXkpO1xuICAgICAgICB0aGlzLmhvdGtleXMucHVzaChob3RrZXkgYXMgSG90a2V5KTtcbiAgICAgICAgdGhpcy5tb3VzZXRyYXAuYmluZCgoaG90a2V5IGFzIEhvdGtleSkuY29tYm8sIChldmVudDogS2V5Ym9hcmRFdmVudCwgY29tYm86IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgbGV0IHNob3VsZEV4ZWN1dGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgY2FsbGJhY2sgaXMgZXhlY3V0ZWQgZGlyZWN0bHkgYGhvdGtleS5nZXQoJ3cnKS5jYWxsYmFjaygpYFxuICAgICAgICAgICAgLy8gdGhlcmUgd2lsbCBiZSBubyBldmVudCwgc28ganVzdCBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldDogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQpIGFzIEhUTUxFbGVtZW50OyAvLyBzcmNFbGVtZW50IGlzIElFIG9ubHlcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTmFtZTogc3RyaW5nID0gdGFyZ2V0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgaGFzIGEgbW91c2V0cmFwIGNsYXNzLCBhbmQgc2tpcCBjaGVja2luZyBwcmV2ZW50SW4gaWYgc29cbiAgICAgICAgICAgICAgICBpZiAoKCcgJyArIHRhcmdldC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyBtb3VzZXRyYXAgJykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRFeGVjdXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldmVudEluLmluZGV4T2Yobm9kZU5hbWUpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgKGhvdGtleSBhcyBIb3RrZXkpLmFsbG93SW4ubWFwKGFsbG93ID0+IGFsbG93LnRvVXBwZXJDYXNlKCkpLmluZGV4T2Yobm9kZU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBleGVjdXRlIGNhbGxiYWNrIGlmIHRoZSBldmVudCB3YXMgZmlyZWQgZnJvbSBpbnNpZGUgYW4gZWxlbWVudCBsaXN0ZWQgaW4gcHJldmVudEluIGJ1dCBub3QgaW4gYWxsb3dJblxuICAgICAgICAgICAgICAgICAgICBzaG91bGRFeGVjdXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvdWxkRXhlY3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaG90a2V5IGFzIEhvdGtleSkuY2FsbGJhY2suYXBwbHkodGhpcywgW2V2ZW50LCBjb21ib10pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0V2ZW50KTtcbiAgICAgICAgcmV0dXJuIGhvdGtleTtcbiAgICB9XG5cbiAgICByZW1vdmUoaG90a2V5PzogSG90a2V5IHwgSG90a2V5W10pOiBIb3RrZXkgfCBIb3RrZXlbXSB7XG4gICAgICAgIGNvbnN0IHRlbXA6IEhvdGtleVtdID0gW107XG4gICAgICAgIGlmICghaG90a2V5KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLmhvdGtleXMpIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGhpcy5yZW1vdmUoa2V5KSBhcyBIb3RrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaG90a2V5KSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgaG90a2V5KSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKHRoaXMucmVtb3ZlKGtleSkgYXMgSG90a2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maW5kSG90a2V5KGhvdGtleSBhcyBIb3RrZXkpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5ob3RrZXlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLm1vdXNldHJhcC51bmJpbmQoKGhvdGtleSBhcyBIb3RrZXkpLmNvbWJvKTtcbiAgICAgICAgICAgIHJldHVybiBob3RrZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZ2V0KGNvbWJvPzogc3RyaW5nIHwgc3RyaW5nW10pOiBIb3RrZXkgfCBIb3RrZXlbXSB7XG4gICAgICAgIGlmICghY29tYm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29tYm8pKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wOiBIb3RrZXlbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgY29tYm8pIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGhpcy5nZXQoa2V5KSBhcyBIb3RrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBob3RrZXkgb2YgdGhpcy5ob3RrZXlzKSB7XG4gICAgICAgICAgICBpZiAoaG90a2V5LmNvbWJvLmluZGV4T2YoY29tYm8gYXMgc3RyaW5nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhvdGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gICAgcGF1c2UoaG90a2V5PzogSG90a2V5IHwgSG90a2V5W10pOiBIb3RrZXkgfCBIb3RrZXlbXSB7XG4gICAgICAgIGlmICghaG90a2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXVzZSh0aGlzLmhvdGtleXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhvdGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXA6IEhvdGtleVtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBob3RrZXkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGhpcy5wYXVzZShrZXkpIGFzIEhvdGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZShob3RrZXkpO1xuICAgICAgICB0aGlzLnBhdXNlZEhvdGtleXMucHVzaChob3RrZXkgYXMgSG90a2V5KTtcbiAgICAgICAgcmV0dXJuIGhvdGtleTtcbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG4gICAgdW5wYXVzZShob3RrZXk/OiBIb3RrZXkgfCBIb3RrZXlbXSk6IEhvdGtleSB8IEhvdGtleVtdIHtcbiAgICAgICAgaWYgKCFob3RrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVucGF1c2UodGhpcy5wYXVzZWRIb3RrZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShob3RrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wOiBIb3RrZXlbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgaG90a2V5KSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKHRoaXMudW5wYXVzZShrZXkpIGFzIEhvdGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5wYXVzZWRIb3RrZXlzLmluZGV4T2YoaG90a2V5IGFzIEhvdGtleSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChob3RrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGF1c2VkSG90a2V5cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5tb3VzZXRyYXAucmVzZXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRIb3RrZXkoaG90a2V5OiBIb3RrZXkpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5ob3RrZXlzLmluZGV4T2YoaG90a2V5KTtcbiAgICB9XG59XG5cbiJdfQ==