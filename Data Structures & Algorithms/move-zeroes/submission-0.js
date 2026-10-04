class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let first = 0;
        
        for (let second = 0; second < nums.length; second++) {
            if (nums[second] !== 0) {
                // swap 
                let temp = nums[second];
                nums[second] = nums[first];
                nums[first] = temp;
                first++
            }
        }
    }
}
