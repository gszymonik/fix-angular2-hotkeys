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
export { Hotkey };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjItaG90a2V5cy8iLCJzb3VyY2VzIjpbImxpYi9ob3RrZXkubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7SUFpQ0k7Ozs7Ozs7OztPQVNHO0lBQ0gsZ0JBQW1CLEtBQXdCLEVBQVMsUUFBa0YsRUFDbkgsT0FBa0IsRUFBUyxXQUErQixFQUFTLE1BQWUsRUFDbEYsVUFBb0I7UUFGcEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUEwRTtRQUNuSCxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNsRixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBZSxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksRUFBRSxDQUFDO0lBQ3pDLENBQUM7SUE5Q00sZ0JBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixJQUFNLEdBQUcsR0FBUTtZQUNiLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxRQUFRO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxLQUFLLEVBQUUsUUFBUTtZQUNmLEVBQUUsRUFBRSxRQUFRO1lBQ1osSUFBSSxFQUFFLFFBQVE7WUFDZCxxREFBcUQ7WUFDckQsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLFFBQVEsQ0FBTSxJQUFJO1NBQ2hDLENBQUM7UUFDRixJQUFNLFVBQVUsR0FBYSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLDZDQUE2QztZQUM3QyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO2lCQUM3QjtxQkFBTTtvQkFDSCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO2lCQUMxQjthQUNKO1lBRUQsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQW9CRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBRXZCLElBQU0sUUFBUSxHQUFhLElBQUksQ0FBQyxLQUFzQixDQUFDO2dCQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2dCQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO2FBQ25DO1lBQ0QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBQ0wsYUFBQztBQUFELENBQUMsQUE5REQsSUE4REMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEV4dGVuZGVkS2V5Ym9hcmRFdmVudCBleHRlbmRzIEtleWJvYXJkRXZlbnQge1xuICAgIHJldHVyblZhbHVlOiBib29sZWFuOyAvLyBJRSByZXR1cm5WYWx1ZVxufVxuXG5leHBvcnQgY2xhc3MgSG90a2V5IHtcbiAgICBwcml2YXRlIGZvcm1hdHRlZEhvdGtleTogc3RyaW5nW107XG5cbiAgICBzdGF0aWMgc3ltYm9saXplKGNvbWJvOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBtYXA6IGFueSA9IHtcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdcXHUyMzE4JywgICAgICAgLy8g4oyYXG4gICAgICAgICAgICBzaGlmdDogJ1xcdTIxRTcnLCAgICAgICAgIC8vIOKHp1xuICAgICAgICAgICAgbGVmdDogJ1xcdTIxOTAnLCAgICAgICAgICAvLyDihpBcbiAgICAgICAgICAgIHJpZ2h0OiAnXFx1MjE5MicsICAgICAgICAgLy8g4oaSXG4gICAgICAgICAgICB1cDogJ1xcdTIxOTEnLCAgICAgICAgICAgIC8vIOKGkVxuICAgICAgICAgICAgZG93bjogJ1xcdTIxOTMnLCAgICAgICAgICAvLyDihpNcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXG4gICAgICAgICAgICAncmV0dXJuJzogJ1xcdTIzQ0UnLCAgICAgIC8vIOKPjlxuICAgICAgICAgICAgYmFja3NwYWNlOiAnXFx1MjMyQicgICAgICAvLyDijKtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tYm9TcGxpdDogc3RyaW5nW10gPSBjb21iby5zcGxpdCgnKycpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tYm9TcGxpdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gdHJ5IHRvIHJlc29sdmUgY29tbWFuZCAvIGN0cmwgYmFzZWQgb24gT1M6XG4gICAgICAgICAgICBpZiAoY29tYm9TcGxpdFtpXSA9PT0gJ21vZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvciAmJiB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ01hYycpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29tYm9TcGxpdFtpXSA9ICdjb21tYW5kJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21ib1NwbGl0W2ldID0gJ2N0cmwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tYm9TcGxpdFtpXSA9IG1hcFtjb21ib1NwbGl0W2ldXSB8fCBjb21ib1NwbGl0W2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbWJvU3BsaXQuam9pbignICsgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBIb3RrZXkgZm9yIE1vdXNldHJhcCBiaW5kaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29tYm8gICAgICAgbW91c2V0cmFwIGtleSBiaW5kaW5nXG4gICAgICogQHBhcmFtIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGZvciB0aGUgaGVscCBtZW51XG4gICAgICogQHBhcmFtIGNhbGxiYWNrICAgIG1ldGhvZCB0byBjYWxsIHdoZW4ga2V5IGlzIHByZXNzZWRcbiAgICAgKiBAcGFyYW0gYWN0aW9uICAgICAgdGhlIHR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciAoZm9yIG1vdXNldHJhcClcbiAgICAgKiBAcGFyYW0gYWxsb3dJbiAgICAgYW4gYXJyYXkgb2YgdGFnIG5hbWVzIHRvIGFsbG93IHRoaXMgY29tYm8gaW4gKCdJTlBVVCcsICdTRUxFQ1QnLCBhbmQvb3IgJ1RFWFRBUkVBJylcbiAgICAgKiBAcGFyYW0gcGVyc2lzdGVudCAgaWYgdHJ1ZSwgdGhlIGJpbmRpbmcgaXMgcHJlc2VydmVkIHVwb24gcm91dGUgY2hhbmdlc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21ibzogc3RyaW5nIHwgc3RyaW5nW10sIHB1YmxpYyBjYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBjb21ibzogc3RyaW5nKSA9PiBFeHRlbmRlZEtleWJvYXJkRXZlbnQgfCBib29sZWFuLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBhbGxvd0luPzogc3RyaW5nW10sIHB1YmxpYyBkZXNjcmlwdGlvbj86IHN0cmluZyB8IEZ1bmN0aW9uLCBwdWJsaWMgYWN0aW9uPzogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBwZXJzaXN0ZW50PzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNvbWJvID0gKEFycmF5LmlzQXJyYXkoY29tYm8pID8gY29tYm8gOiBbY29tYm8gYXMgc3RyaW5nXSk7XG4gICAgICAgIHRoaXMuYWxsb3dJbiA9IGFsbG93SW4gfHwgW107XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbiB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgZm9ybWF0dGVkKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1hdHRlZEhvdGtleSkge1xuXG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZTogc3RyaW5nW10gPSB0aGlzLmNvbWJvIGFzIEFycmF5PHN0cmluZz47XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VxdWVuY2VbaV0gPSBIb3RrZXkuc3ltYm9saXplKHNlcXVlbmNlW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9ybWF0dGVkSG90a2V5ID0gc2VxdWVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGVkSG90a2V5O1xuICAgIH1cbn1cbiJdfQ==