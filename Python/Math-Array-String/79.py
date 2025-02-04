# 2441. Largest Positive Integer That Exists With Its Negative

from typing import List

class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        num_set = set(nums)  # Store numbers in a set for quick lookup
        max_k = -1  # Initialize max_k as -1
        
        for num in nums:
            if num > 0 and -num in num_set:  # Check if -num exists
                max_k = max(max_k, num)  # Update max_k if num is larger
        
        return max_k
    
sol = Solution()
output = sol.findMaxK([-1,2,-3,3])
print(output)  # Output: 3