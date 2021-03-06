import { __decorate, __values } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Hotkey } from './hotkey.model';
import { HotkeysService } from './hotkeys.service';
import 'mousetrap';
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
export { HotkeysDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1ob3RrZXlzLyIsInNvdXJjZXMiOlsibGliL2hvdGtleXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQXlCLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLFdBQVcsQ0FBQztBQU1uQjtJQU9JLDBCQUFvQixjQUE4QixFQUFVLFVBQXNCO1FBQTlELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIMUUsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyx5REFBeUQ7SUFDNUgsQ0FBQztJQUVELG1DQUFRLEdBQVI7OztZQUNJLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTlCLElBQU0sTUFBTSxXQUFBO2dCQUNiLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLElBQU0sU0FBUyxHQUFXLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFXLENBQUM7Z0JBQ25FLElBQUksU0FBUyxLQUFLLElBQUksRUFBRSxFQUFFLDRFQUE0RTtvQkFDbEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUQ7Ozs7Ozs7OztJQUNMLENBQUM7SUFFRCxzQ0FBVyxHQUFYOzs7WUFDSSxLQUFxQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsV0FBVyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFsQyxJQUFNLE1BQU0sV0FBQTtnQkFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkF2Qm1DLGNBQWM7Z0JBQXNCLFVBQVU7O0lBTnpFO1FBQVIsS0FBSyxFQUFFO3FEQUFnRztJQUQvRixnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzlCLENBQUM7T0FDVyxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXh0ZW5kZWRLZXlib2FyZEV2ZW50LCBIb3RrZXkgfSBmcm9tICcuL2hvdGtleS5tb2RlbCc7XG5pbXBvcnQgeyBIb3RrZXlzU2VydmljZSB9IGZyb20gJy4vaG90a2V5cy5zZXJ2aWNlJztcbmltcG9ydCAnbW91c2V0cmFwJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbaG90a2V5c10nLFxuICAgIHByb3ZpZGVyczogW0hvdGtleXNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIGhvdGtleXM6IHsgW2NvbWJvOiBzdHJpbmddOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGNvbWJvOiBzdHJpbmcpID0+IEV4dGVuZGVkS2V5Ym9hcmRFdmVudCB9W107XG5cbiAgICBwcml2YXRlIG1vdXNldHJhcDogTW91c2V0cmFwSW5zdGFuY2U7XG4gICAgcHJpdmF0ZSBob3RrZXlzTGlzdDogSG90a2V5W10gPSBbXTtcbiAgICBwcml2YXRlIG9sZEhvdGtleXM6IEhvdGtleVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvdGtleXNTZXJ2aWNlOiBIb3RrZXlzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMubW91c2V0cmFwID0gbmV3IE1vdXNldHJhcCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7IC8vIEJpbmQgaG90a2V5cyB0byB0aGUgY3VycmVudCBlbGVtZW50IChhbmQgYW55IGNoaWxkcmVuKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBvZiB0aGlzLmhvdGtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJvID0gT2JqZWN0LmtleXMoaG90a2V5KVswXTtcbiAgICAgICAgICAgIGNvbnN0IGhvdGtleU9iajogSG90a2V5ID0gbmV3IEhvdGtleShjb21ibywgaG90a2V5W2NvbWJvXSk7XG4gICAgICAgICAgICBjb25zdCBvbGRIb3RrZXk6IEhvdGtleSA9IHRoaXMuaG90a2V5c1NlcnZpY2UuZ2V0KGNvbWJvKSBhcyBIb3RrZXk7XG4gICAgICAgICAgICBpZiAob2xkSG90a2V5ICE9PSBudWxsKSB7IC8vIFdlIGxldCB0aGUgdXNlciBvdmVyd3JpdGUgY2FsbGJhY2tzIHRlbXBvcmFyaWx5IGlmIHlvdSBzcGVjaWZ5IGl0IGluIEhUTUxcbiAgICAgICAgICAgICAgICB0aGlzLm9sZEhvdGtleXMucHVzaChvbGRIb3RrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG90a2V5c1NlcnZpY2UucmVtb3ZlKG9sZEhvdGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmhvdGtleXNMaXN0LnB1c2goaG90a2V5T2JqKTtcbiAgICAgICAgICAgIHRoaXMubW91c2V0cmFwLmJpbmQoaG90a2V5T2JqLmNvbWJvLCBob3RrZXlPYmouY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGZvciAoY29uc3QgaG90a2V5IG9mIHRoaXMuaG90a2V5c0xpc3QpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2V0cmFwLnVuYmluZChob3RrZXkuY29tYm8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG90a2V5c1NlcnZpY2UuYWRkKHRoaXMub2xkSG90a2V5cyk7XG4gICAgfVxuXG59XG4iXX0=