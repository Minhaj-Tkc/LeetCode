# 977. Squares of a Sorted Array

from typing import List

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        # Initialize two pointers and a result array
        left, right = 0, len(nums) - 1
        result = [0] * len(nums)
        index = len(nums) - 1  # Position to place the largest square

        while left <= right:
            left_square = nums[left] ** 2
            right_square = nums[right] ** 2
            
            if left_square > right_square:
                result[index] = left_square
                left += 1
            else:
                result[index] = right_square
                right -= 1
            
            index -= 1

        return result


sol = Solution()
output = sol.sortedSquares([-4,-1,0,3,10])
print(output) # # Output: [0, 1, 9, 16, 100]