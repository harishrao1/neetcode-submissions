class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start = self.binarySearch(nums, target, True)
        end = self.binarySearch(nums, target, False)
        return [start, end]

    def binarySearch(self, nums, target, isSearchingLeft):
        left = 0
        right = len(nums) - 1
        index = -1

        while left <= right:
            mid = (left + right) // 2
            if nums[mid] > target:
                right = mid - 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                index = mid
                if isSearchingLeft:
                    right = mid - 1
                else:
                    left = mid + 1
        return index
