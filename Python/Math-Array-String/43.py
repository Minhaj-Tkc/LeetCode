# 2544. Alternating Digit Sum


class Solution:
    def alternateDigitSum(self, n: int) -> int:
        # Convert the number to a string to access each digit
        digits = str(n)
        total = 0
        
        # Iterate through the digits with their indices
        for i, digit in enumerate(digits):
            if i % 2 == 0:  # Even index (0-based), positive sign
                total += int(digit)
            else:  # Odd index, negative sign
                total -= int(digit)
        
        return total
    

sol = Solution()
output = sol.alternateDigitSum(521) # output = 4
print(output)