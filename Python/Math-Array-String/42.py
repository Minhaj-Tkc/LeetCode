# 268. Missing Number

from typing import List

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        expected_sum = n * (n + 1) // 2
        actual_sum = sum(nums)
        return expected_sum - actual_sum
    

sol = Solution()
output = sol.missingNumber([3,0,1])
print(output)