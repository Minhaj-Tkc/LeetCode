# 1385. Find the Distance Value Between Two Arrays

from typing import List

class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        count = 0
        for num1 in arr1:
            is_valid = True
            for num2 in arr2:
                if abs(num1 - num2) <= d:
                    is_valid = False
                    break
            if is_valid:
                count += 1
        return count