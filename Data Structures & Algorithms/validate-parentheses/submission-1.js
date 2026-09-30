class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
         const bracketMap = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const char of s) {
            if (char in bracketMap) {
                const topElement = stack.length > 0 ? stack.pop() : "#";

                if (bracketMap[char] !== topElement) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
