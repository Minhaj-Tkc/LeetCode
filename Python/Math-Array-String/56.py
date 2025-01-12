# 136. Single Number

from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num  # XOR each number with the result
            print(result)
        return result
    

sol = Solution()
output = sol.singleNumber([2, 3, 2, 3, 1, 4, 4])
print(output) # Output: [1, -1, 0]