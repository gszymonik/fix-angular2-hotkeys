import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HotkeysDirective } from './hotkeys.directive';
import { HotkeysCheatsheetComponent } from './hotkeys-cheatsheet/hotkeys-cheatsheet.component';
import { CommonModule } from '@angular/common';
import { HotkeyOptions } from './hotkey.options';
import { HotkeysService } from './hotkeys.service';
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
export { HotkeyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWhvdGtleXMvIiwic291cmNlcyI6WyJsaWIvaG90a2V5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQWtCLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBT25EO0lBQUE7SUFXQSxDQUFDO3FCQVhZLFlBQVk7SUFDckIscUNBQXFDO0lBQzlCLG9CQUFPLEdBQWQsVUFBZSxPQUE0QjtRQUE1Qix3QkFBQSxFQUFBLFlBQTRCO1FBQ3ZDLE9BQU87WUFDSCxRQUFRLEVBQUcsY0FBWTtZQUN2QixTQUFTLEVBQUc7Z0JBQ1IsY0FBYztnQkFDZCxFQUFDLE9BQU8sRUFBRyxhQUFhLEVBQUUsUUFBUSxFQUFHLE9BQU8sRUFBQzthQUNoRDtTQUNKLENBQUM7SUFDTixDQUFDOztJQVZRLFlBQVk7UUFMeEIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsMEJBQTBCLENBQUM7WUFDNUQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLDBCQUEwQixDQUFDO1NBQzFELENBQUM7T0FDVyxZQUFZLENBV3hCO0lBQUQsbUJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvdGtleXNEaXJlY3RpdmUgfSBmcm9tICcuL2hvdGtleXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEhvdGtleXNDaGVhdHNoZWV0Q29tcG9uZW50IH0gZnJvbSAnLi9ob3RrZXlzLWNoZWF0c2hlZXQvaG90a2V5cy1jaGVhdHNoZWV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSG90a2V5T3B0aW9ucywgSUhvdGtleU9wdGlvbnMgfSBmcm9tICcuL2hvdGtleS5vcHRpb25zJztcbmltcG9ydCB7IEhvdGtleXNTZXJ2aWNlIH0gZnJvbSAnLi9ob3RrZXlzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0hvdGtleXNEaXJlY3RpdmUsIEhvdGtleXNDaGVhdHNoZWV0Q29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbSG90a2V5c0RpcmVjdGl2ZSwgSG90a2V5c0NoZWF0c2hlZXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvdGtleU1vZHVsZSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAgIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IElIb3RrZXlPcHRpb25zID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEhvdGtleU1vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGUgOiBIb3RrZXlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnMgOiBbXG4gICAgICAgICAgICAgICAgSG90a2V5c1NlcnZpY2UsXG4gICAgICAgICAgICAgICAge3Byb3ZpZGUgOiBIb3RrZXlPcHRpb25zLCB1c2VWYWx1ZSA6IG9wdGlvbnN9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19