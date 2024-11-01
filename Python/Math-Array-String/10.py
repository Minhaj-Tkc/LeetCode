# 2427. Number of Common Factors

class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        count = 0
        for i in range(1, min(a, b) + 1):
            if not a % i and not b % i :
            # if a % i == 0 and b % i == 0:
                count += 1
        return count
    

sol = Solution()
output = sol.commonFactors(25, 30)
print(output)