class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let start = 0;
        let end = cleaned.length - 1;

        while (start < end) {
            if (cleaned[start] !== cleaned[end]) {
                return false;
            }
            start++;
            end--
        }
        return true;
    }
}
