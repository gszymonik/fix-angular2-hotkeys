import { __decorate } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Hotkey } from './hotkey.model';
import { HotkeysService } from './hotkeys.service';
import 'mousetrap';
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
export { HotkeysDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyMi1ob3RrZXlzLyIsInNvdXJjZXMiOlsibGliL2hvdGtleXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQXlCLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLFdBQVcsQ0FBQztBQU1uQixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU96QixZQUFvQixjQUE4QixFQUFVLFVBQXNCO1FBQTlELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFIMUUsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyx5REFBeUQ7SUFDNUgsQ0FBQztJQUVELFFBQVE7UUFDSixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDL0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLFNBQVMsR0FBVyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxTQUFTLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFXLENBQUM7WUFDbkUsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFLEVBQUUsNEVBQTRFO2dCQUNsRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDekM7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBRUosQ0FBQTs7WUF6QnVDLGNBQWM7WUFBc0IsVUFBVTs7QUFOekU7SUFBUixLQUFLLEVBQUU7aURBQWdHO0FBRC9GLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDOUIsQ0FBQztHQUNXLGdCQUFnQixDQWdDNUI7U0FoQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4dGVuZGVkS2V5Ym9hcmRFdmVudCwgSG90a2V5IH0gZnJvbSAnLi9ob3RrZXkubW9kZWwnO1xuaW1wb3J0IHsgSG90a2V5c1NlcnZpY2UgfSBmcm9tICcuL2hvdGtleXMuc2VydmljZSc7XG5pbXBvcnQgJ21vdXNldHJhcCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2hvdGtleXNdJyxcbiAgICBwcm92aWRlcnM6IFtIb3RrZXlzU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgSG90a2V5c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBob3RrZXlzOiB7IFtjb21ibzogc3RyaW5nXTogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBjb21ibzogc3RyaW5nKSA9PiBFeHRlbmRlZEtleWJvYXJkRXZlbnQgfVtdO1xuXG4gICAgcHJpdmF0ZSBtb3VzZXRyYXA6IE1vdXNldHJhcEluc3RhbmNlO1xuICAgIHByaXZhdGUgaG90a2V5c0xpc3Q6IEhvdGtleVtdID0gW107XG4gICAgcHJpdmF0ZSBvbGRIb3RrZXlzOiBIb3RrZXlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBob3RrZXlzU2VydmljZTogSG90a2V5c1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLm1vdXNldHJhcCA9IG5ldyBNb3VzZXRyYXAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpOyAvLyBCaW5kIGhvdGtleXMgdG8gdGhlIGN1cnJlbnQgZWxlbWVudCAoYW5kIGFueSBjaGlsZHJlbilcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgZm9yIChjb25zdCBob3RrZXkgb2YgdGhpcy5ob3RrZXlzKSB7XG4gICAgICAgICAgICBjb25zdCBjb21ibyA9IE9iamVjdC5rZXlzKGhvdGtleSlbMF07XG4gICAgICAgICAgICBjb25zdCBob3RrZXlPYmo6IEhvdGtleSA9IG5ldyBIb3RrZXkoY29tYm8sIGhvdGtleVtjb21ib10pO1xuICAgICAgICAgICAgY29uc3Qgb2xkSG90a2V5OiBIb3RrZXkgPSB0aGlzLmhvdGtleXNTZXJ2aWNlLmdldChjb21ibykgYXMgSG90a2V5O1xuICAgICAgICAgICAgaWYgKG9sZEhvdGtleSAhPT0gbnVsbCkgeyAvLyBXZSBsZXQgdGhlIHVzZXIgb3ZlcndyaXRlIGNhbGxiYWNrcyB0ZW1wb3JhcmlseSBpZiB5b3Ugc3BlY2lmeSBpdCBpbiBIVE1MXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRIb3RrZXlzLnB1c2gob2xkSG90a2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdGtleXNTZXJ2aWNlLnJlbW92ZShvbGRIb3RrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3RrZXlzTGlzdC5wdXNoKGhvdGtleU9iaik7XG4gICAgICAgICAgICB0aGlzLm1vdXNldHJhcC5iaW5kKGhvdGtleU9iai5jb21ibywgaG90a2V5T2JqLmNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBmb3IgKGNvbnN0IGhvdGtleSBvZiB0aGlzLmhvdGtleXNMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNldHJhcC51bmJpbmQoaG90a2V5LmNvbWJvKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvdGtleXNTZXJ2aWNlLmFkZCh0aGlzLm9sZEhvdGtleXMpO1xuICAgIH1cblxufVxuIl19