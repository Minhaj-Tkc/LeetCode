# 2413. Smallest Even Multiple

# Solution 1: Bit manipulation
class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        return n if n % 2 == 0 else n << 1 

# The expression n << 1 is a bitwise left shift operation

sol = Solution()
output = sol.smallestEvenMultiple(5)
print(output)



# class Solution:
#     def smallestEvenMultiple(self, n: int) -> int:
#         return n if n % 2 == 0 else n * 1 


# class Solution:
#     def smallestEvenMultiple(self, n: int) -> int:
#             if n % 2 == 0:
#                 return n
#             else:
#                 return n * 2