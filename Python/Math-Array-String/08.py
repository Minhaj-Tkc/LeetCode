# 1614. Maximum Nesting Depth of the Parentheses


class Solution:
    def maxDepth(self, s: str) -> int:
        leftCount = 0
        maxDepth = 0
        for i in s:
            if i == '(':
                leftCount += 1
                maxDepth = max(maxDepth, leftCount)
            elif i == ')':
                leftCount -= 1    
        return maxDepth
            

sol = Solution()
output = sol.maxDepth("(1)+((2))+(((3)))")
print(output)


# using match    
# class Solution:
#     def maxDepth(self, s: str) -> int:
#         leftCount = 0
#         maxDepth = 0
#         for i in s:
#             match i:
#                 case "(":
#                     leftCount += 1
#                     maxDepth = max(maxDepth, leftCount)  
#                 case ")":
#                     leftCount -= 1
#         return maxDepth


# using accumulate
# from itertools import accumulate
# class Solution:
#     def maxDepth(self, s: str) -> int:
#         return max(accumulate((i == '(') - (i == ')') for i in s))
