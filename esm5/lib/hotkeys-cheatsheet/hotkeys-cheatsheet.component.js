import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { HotkeysService } from '../hotkeys.service';
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
export { HotkeysCheatsheetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5cy1jaGVhdHNoZWV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWhvdGtleXMvIiwic291cmNlcyI6WyJsaWIvaG90a2V5cy1jaGVhdHNoZWV0L2hvdGtleXMtY2hlYXRzaGVldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRcEQ7SUFPSSxvQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTmxELGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ1gsVUFBSyxHQUFHLHFCQUFxQixDQUFDO0lBTXZDLENBQUM7SUFFTSw2Q0FBUSxHQUFmO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUN0RSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2FBQ25GO1lBRUQsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUNsQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRU0scURBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQzs7Z0JBekJtQyxjQUFjOztJQUx6QztRQUFSLEtBQUssRUFBRTs2REFBK0I7SUFGOUIsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsNnNCQUFrRDs7U0FFckQsQ0FBQztPQUNXLDBCQUEwQixDQWlDdEM7SUFBRCxpQ0FBQztDQUFBLEFBakNELElBaUNDO1NBakNZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3RrZXkgfSBmcm9tICcuLi9ob3RrZXkubW9kZWwnO1xuaW1wb3J0IHsgSG90a2V5c1NlcnZpY2UgfSBmcm9tICcuLi9ob3RrZXlzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaG90a2V5cy1jaGVhdHNoZWV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG90a2V5cy1jaGVhdHNoZWV0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ob3RrZXlzLWNoZWF0c2hlZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvdGtleXNDaGVhdHNoZWV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGhlbHBWaXNpYmxlID0gZmFsc2U7XG4gICAgQElucHV0KCkgdGl0bGUgPSAnS2V5Ym9hcmQgU2hvcnRjdXRzOic7XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBob3RrZXlzOiBIb3RrZXlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaG90a2V5c1NlcnZpY2U6IEhvdGtleXNTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuaG90a2V5c1NlcnZpY2UuY2hlYXRTaGVldFRvZ2dsZS5zdWJzY3JpYmUoKGlzT3BlbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT3BlbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdGtleXMgPSB0aGlzLmhvdGtleXNTZXJ2aWNlLmhvdGtleXMuZmlsdGVyKGhvdGtleSA9PiBob3RrZXkuZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVscFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDaGVhdFNoZWV0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZUNoZWF0U2hlZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGVscFZpc2libGUgPSAhdGhpcy5oZWxwVmlzaWJsZTtcbiAgICB9XG59XG4iXX0=