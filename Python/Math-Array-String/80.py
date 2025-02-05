# 1512. Number of Good Pairs

from typing import Counter, List

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = Counter(nums)  # Count occurrences of each number
        good_pairs = sum((val * (val - 1)) // 2 for val in count.values())  # Compute pairs
        return good_pairs
    

sol = Solution()
output = sol.numIdenticalPairs([1,1,1,1])
print(output)  # Output: 6