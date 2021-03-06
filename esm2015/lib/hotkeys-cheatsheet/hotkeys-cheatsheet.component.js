import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { HotkeysService } from '../hotkeys.service';
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
export { HotkeysCheatsheetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy1jaGVhdHNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWhvdGtleXMvIiwic291cmNlcyI6WyJsaWIvaG90a2V5cy1jaGVhdHNoZWV0L2hvdGtleXMtY2hlYXRzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRcEQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFPbkMsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTmxELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsVUFBSyxHQUFHLHFCQUFxQixDQUFDO0lBTXZDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzFFLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkY7WUFFRCxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQzNCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVNLGdCQUFnQjtRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0NBQ0osQ0FBQTs7WUExQnVDLGNBQWM7O0FBTHpDO0lBQVIsS0FBSyxFQUFFO3lEQUErQjtBQUY5QiwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5Qiw2c0JBQWtEOztLQUVyRCxDQUFDO0dBQ1csMEJBQTBCLENBaUN0QztTQWpDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG90a2V5IH0gZnJvbSAnLi4vaG90a2V5Lm1vZGVsJztcbmltcG9ydCB7IEhvdGtleXNTZXJ2aWNlIH0gZnJvbSAnLi4vaG90a2V5cy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvdGtleXMtY2hlYXRzaGVldCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hvdGtleXMtY2hlYXRzaGVldC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG90a2V5cy1jaGVhdHNoZWV0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlzQ2hlYXRzaGVldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBoZWxwVmlzaWJsZSA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHRpdGxlID0gJ0tleWJvYXJkIFNob3J0Y3V0czonO1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgaG90a2V5czogSG90a2V5W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvdGtleXNTZXJ2aWNlOiBIb3RrZXlzU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmhvdGtleXNTZXJ2aWNlLmNoZWF0U2hlZXRUb2dnbGUuc3Vic2NyaWJlKChpc09wZW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpc09wZW4gIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3RrZXlzID0gdGhpcy5ob3RrZXlzU2VydmljZS5ob3RrZXlzLmZpbHRlcihob3RrZXkgPT4gaG90a2V5LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlbHBWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2hlYXRTaGVldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVDaGVhdFNoZWV0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmhlbHBWaXNpYmxlID0gIXRoaXMuaGVscFZpc2libGU7XG4gICAgfVxufVxuIl19