# 961. N-Repeated Element in Size 2N Array

from typing import List

class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        seen = set()
        for num in nums:
            if num in seen:
                return num
            seen.add(num)


sol = Solution()
output = sol.repeatedNTimes([1,2,3,3])
print(output) # Output: 3