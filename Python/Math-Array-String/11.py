# 1979. Find Greatest Common Divisor of Array


from typing import List

class Solution:
    def findGCD(self, nums: List[int]) -> int:
        mn = min(nums)
        mx = max(nums)
        for i in range(1, mn+1):
            if mn % i == 0 and mx % i == 0:
                gcd = i
        return gcd
    

sol = Solution()
nums = [3,3]
output = sol.findGCD(nums)
print(output)


# import math
# class Solution:
#     def findGCD(self, nums: List[int]) -> int:
#         mn = min(nums)
#         mx = max(nums)
#         gcd = math.gcd(mn, mx)
#         return gcd