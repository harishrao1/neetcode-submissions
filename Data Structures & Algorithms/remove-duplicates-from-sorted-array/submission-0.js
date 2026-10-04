class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let start = 1;

        for (let second = 1; second < nums.length; second++) {
            if (nums[second] !== nums[start - 1]) {
                nums[start] = nums[second];
                start++;
            }
        }
        return start;
    }
}
