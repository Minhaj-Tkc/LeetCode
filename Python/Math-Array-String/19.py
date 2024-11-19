# 1281. Subtract the Product and Sum of Digits of an Integer


class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        product = 1
        sum_of_digits = 0
        while n > 0:
            digit = n % 10
            product *= digit
            sum_of_digits += digit
            n = n // 10
        return product - sum_of_digits
    
sol = Solution()
output = sol.subtractProductAndSum(5123)
print(output)