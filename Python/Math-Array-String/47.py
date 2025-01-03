# 1317. Convert Integer to the Sum of Two No-Zero Integers


from typing import List

class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        def is_no_zero(num):
            # Check if a number is a No-Zero integer
            return '0' not in str(num)
        
        for a in range(1, n):
            b = n - a
            if is_no_zero(a) and is_no_zero(b):
                return [a, b]

sol = Solution()
output = sol.getNoZeroIntegers(11)
print(output)