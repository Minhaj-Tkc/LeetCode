# 367. Valid Perfect Square

class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num < 0:
            return False
        
        x = num
        # Iterative Refinement (Newton's Method)
        while x * x > num:
            x = (x + num // x) // 2
        return x * x == num


sol = Solution()
output = sol.isPerfectSquare(36)
print(output)