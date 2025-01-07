# 2864. Maximum Odd Binary Number

class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        # Count the number of 1s and 0s in the string
        ones = s.count('1')
        zeros = s.count('0')
        
        # To form the maximum number, place all the '1's (except one) in the front
        # The last digit must be '1' to make the number odd
        # Place all '0's in between
        return '1' * (ones - 1) + '0' * zeros + '1'
    

sol = Solution()
output = sol.maximumOddBinaryNumber("010")
# output = sol.maximumOddBinaryNumber("000011010")
print(output) # Output: 001