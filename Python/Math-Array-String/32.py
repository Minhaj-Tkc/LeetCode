# 2154. Keep Multiplying Found Values by Two


from typing import List

class Solution:
    def findFinalValue(self, nums: List[int], original: int) -> int:
        # Convert nums to a set for O(1) lookup time
        nums_set = set(nums)
        # Keep checking and multiplying original as long as it's found in nums_set
        while original in nums_set:
            original *= 2
        
        return original


sol = Solution()
output = sol.findFinalValue([5,3,6,1,12], 3)
print(output)