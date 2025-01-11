# 1304. Find N Unique Integers Sum up to Zero


from typing import List

class Solution:
    def sumZero(self, n: int) -> List[int]:
        result = []
        # Add pairs of positive and negative numbers
        for i in range(1, n // 2 + 1):
            result.append(i)
            result.append(-i)
        # If n is odd, add 0 to the array
        if n % 2 != 0:
            result.append(0)
        return result


sol = Solution()
output = sol.sumZero(3)
print(output) # Output: [1, -1, 0]