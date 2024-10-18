# 1929. Concatenation of Array

from typing import List

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        return nums + nums # Concatenate the list with itself


# Test the function
sol = Solution()
nums = [1, 2, 3]
result = sol.getConcatenation(nums)
print(result)  # Output: [1, 2, 3, 1, 2, 3]



# class Solution:
#     def getConcatenation(self, nums: List[int]) -> List[int]:
#         return nums * 2  # Repeat the list twice
    

# class Solution:
#     def getConcatenation(self, nums: List[int]) -> List[int]:
#         nums.extend(nums)  # Extend the list with itself
#         return nums


# class Solution:
#     def getConcatenation(self, nums: List[int]) -> List[int]:
#         n = len(nums)
#         result = [0] * (2 * n)  # Create a new list of size 2n
#         for i in range(n):
#             result[i] = nums[i]      # Copy the first part
#             result[i + n] = nums[i]  # Copy the second part
#         return result


# class Solution:
#     def getConcatenation(self, nums: List[int]) -> List[int]:
#         result = []
#         for num in nums:
#             result.append(num)  # Add each element from nums
#         for num in nums:
#             result.append(num)  # Add each element again
#         return result