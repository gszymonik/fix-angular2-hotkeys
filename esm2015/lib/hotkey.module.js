var HotkeyModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HotkeysDirective } from './hotkeys.directive';
import { HotkeysCheatsheetComponent } from './hotkeys-cheatsheet/hotkeys-cheatsheet.component';
import { CommonModule } from '@angular/common';
import { HotkeyOptions } from './hotkey.options';
import { HotkeysService } from './hotkeys.service';
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
export { HotkeyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXIyLWhvdGtleXMvIiwic291cmNlcyI6WyJsaWIvaG90a2V5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFrQixNQUFNLGtCQUFrQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU9uRCxJQUFhLFlBQVksb0JBQXpCLE1BQWEsWUFBWTtJQUNyQixxQ0FBcUM7SUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUEwQixFQUFFO1FBQ3ZDLE9BQU87WUFDSCxRQUFRLEVBQUcsY0FBWTtZQUN2QixTQUFTLEVBQUc7Z0JBQ1IsY0FBYztnQkFDZCxFQUFDLE9BQU8sRUFBRyxhQUFhLEVBQUUsUUFBUSxFQUFHLE9BQU8sRUFBQzthQUNoRDtTQUNKLENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQTtBQVhZLFlBQVk7SUFMeEIsUUFBUSxDQUFDO1FBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsMEJBQTBCLENBQUM7UUFDNUQsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLDBCQUEwQixDQUFDO0tBQzFELENBQUM7R0FDVyxZQUFZLENBV3hCO1NBWFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIb3RrZXlzRGlyZWN0aXZlIH0gZnJvbSAnLi9ob3RrZXlzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIb3RrZXlzQ2hlYXRzaGVldENvbXBvbmVudCB9IGZyb20gJy4vaG90a2V5cy1jaGVhdHNoZWV0L2hvdGtleXMtY2hlYXRzaGVldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhvdGtleU9wdGlvbnMsIElIb3RrZXlPcHRpb25zIH0gZnJvbSAnLi9ob3RrZXkub3B0aW9ucyc7XG5pbXBvcnQgeyBIb3RrZXlzU2VydmljZSB9IGZyb20gJy4vaG90a2V5cy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtIb3RrZXlzRGlyZWN0aXZlLCBIb3RrZXlzQ2hlYXRzaGVldENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW0hvdGtleXNEaXJlY3RpdmUsIEhvdGtleXNDaGVhdHNoZWV0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlNb2R1bGUge1xuICAgIC8vIG5vaW5zcGVjdGlvbiBKU1VudXNlZEdsb2JhbFN5bWJvbHNcbiAgICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBJSG90a2V5T3B0aW9ucyA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxIb3RrZXlNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlIDogSG90a2V5TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzIDogW1xuICAgICAgICAgICAgICAgIEhvdGtleXNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHtwcm92aWRlIDogSG90a2V5T3B0aW9ucywgdXNlVmFsdWUgOiBvcHRpb25zfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==