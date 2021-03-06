export interface ExtendedKeyboardEvent extends KeyboardEvent {
    returnValue: boolean;
}
export declare class Hotkey {
    combo: string | string[];
    callback: (event: KeyboardEvent, combo: string) => ExtendedKeyboardEvent | boolean;
    allowIn?: string[];
    description?: string | Function;
    action?: string;
    persistent?: boolean;
    private formattedHotkey;
    static symbolize(combo: string): string;
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
    constructor(combo: string | string[], callback: (event: KeyboardEvent, combo: string) => ExtendedKeyboardEvent | boolean, allowIn?: string[], description?: string | Function, action?: string, persistent?: boolean);
    get formatted(): string[];
}
