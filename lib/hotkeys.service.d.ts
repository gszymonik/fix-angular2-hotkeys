import { Hotkey } from './hotkey.model';
import { Subject } from 'rxjs';
import { IHotkeyOptions } from './hotkey.options';
import 'mousetrap';
import { MousetrapInstance } from 'mousetrap';
import * as ɵngcc0 from '@angular/core';
export declare class HotkeysService {
    private options;
    hotkeys: Hotkey[];
    pausedHotkeys: Hotkey[];
    mousetrap: MousetrapInstance;
    cheatSheetToggle: Subject<any>;
    private preventIn;
    constructor(options: IHotkeyOptions);
    add(hotkey: Hotkey | Hotkey[], specificEvent?: string): Hotkey | Hotkey[];
    remove(hotkey?: Hotkey | Hotkey[]): Hotkey | Hotkey[];
    get(combo?: string | string[]): Hotkey | Hotkey[];
    pause(hotkey?: Hotkey | Hotkey[]): Hotkey | Hotkey[];
    unpause(hotkey?: Hotkey | Hotkey[]): Hotkey | Hotkey[];
    reset(): void;
    private findHotkey;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HotkeysService, never>;
}

//# sourceMappingURL=hotkeys.service.d.ts.map