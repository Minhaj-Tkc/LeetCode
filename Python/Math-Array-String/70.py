# 169. Majority Element

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        count = 0

        # Phase 1: Find a candidate
        for num in nums:
            if count == 0:
                candidate = num
            count += 1 if num == candidate else -1

        # Phase 2: Verify the candidate (optional in this problem, as majority element is guaranteed to exist)
        return candidate
    

sol = Solution()
output = sol.majorityElement([3, 2, 3])
print(output) # Output: 3