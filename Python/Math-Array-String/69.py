# 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers


class Solution:
    def minPartitions(self, n: str) -> int:
       return max(int(digit) for digit in n) 

sol = Solution()
output = sol.minPartitions("32")
print(output) # Output: 3