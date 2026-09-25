class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        function binarySearch (nums, target, isSearchingLeft){
            let left = 0;
            let right = nums.length - 1;
            let index = -1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (nums[mid] > target) {
                    right = mid - 1;
                } else if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    index = mid;
                    if (isSearchingLeft) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
            }
            return index;
        }

        const start = binarySearch(nums, target, true);
        const end = binarySearch(nums, target, false);
        return [start, end];
    }
}
