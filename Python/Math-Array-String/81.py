# 575. Distribute Candies

from typing import List

class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        return min(len(set(candyType)), len(candyType) // 2)
    

sol = Solution()
output = sol.distributeCandies([1,1,3,2])
print(output)  # Output: 2