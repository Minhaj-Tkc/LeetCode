# 283. Move Zeroes

from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        non_zero_index = 0  # Pointer for the position of the next non-zero element

        # Move all non-zero elements to the front
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[non_zero_index], nums[i] = nums[i], nums[non_zero_index]
                non_zero_index += 1

        # return nums


sol = Solution()
output = sol.moveZeroes([0,1,0,3,12])
print(output)  # Output: [1, 3, 12, 0, 0]