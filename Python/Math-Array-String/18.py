# 9. Palindrome Number

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:  # Negative numbers are not palindromes
            return False
        reversed_x = str(x)[::-1]
        return str(x) == reversed_x

    

sol = Solution()
output = sol.isPalindrome(-121)
print(output)