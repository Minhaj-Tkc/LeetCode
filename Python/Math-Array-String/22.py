# 3099. Harshad Number

class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        sum = 0
        num = x
        while num > 0:
            sum += num % 10
            num //= 10
        
        if x % sum == 0:
            return sum
        else:
            return -1 


sol = Solution()
output = sol.sumOfTheDigitsOfHarshadNumber(22)
print(output)