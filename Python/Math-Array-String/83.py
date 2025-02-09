# 26. Remove Duplicates from Sorted Array

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        # Initialize a pointer for the unique elements
        k = 1  # Start from index 1 since the first element is always unique

        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:  # Check if the current number is different from the previous one
                nums[k] = nums[i]  # Move the unique number forward
                k += 1  # Increment the unique counter

        return k
    
sol = Solution()
output = sol.removeDuplicates([1,1,2])
print(output)  # Output: 2