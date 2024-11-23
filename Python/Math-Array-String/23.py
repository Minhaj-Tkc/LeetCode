# 507. Perfect Number

# Only 5 perfect Number exist until 10^8
# class Solution:
#     def checkPerfectNumber(self, num: int) -> bool:
#         return num in [6,28,496,8128,33550336]

class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        if num <= 1:
            return False
        
        divisor_sum = 1  # Start with 1 because 1 is a divisor of every number
        # Check divisors up to sqrt(n)
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:  # If i is a divisor
                divisor_sum += i
                if i != num // i:  # Add the complement divisor if it's not the same
                    divisor_sum += num // i
        
        return divisor_sum == num


sol = Solution()
output = sol.checkPerfectNumber(28)
print(output)