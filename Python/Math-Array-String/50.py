# 66. Plus One

from typing import List

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        n = len(digits)
    
        # Traverse the array from the last digit
        for i in range(n - 1, -1, -1):
            print(i)
            if digits[i] < 9:
                # If the digit is less than 9, increment it and return the list
                digits[i] += 1
                return digits
            # If the digit is 9, set it to 0
            digits[i] = 0
        
        # If all digits are 9, add 1 at the beginning of the list
        return [1] + digits

sol = Solution()
output = sol.plusOne([9,9,9,9])
print(output) # Output: 6