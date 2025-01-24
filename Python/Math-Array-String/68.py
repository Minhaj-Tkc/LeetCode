# 442. Find All Duplicates in an Array

from typing import List

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        result = []
        for num in nums:
            index = abs(num) - 1
            if nums[index] < 0:
                result.append(abs(num))
            else:
                nums[index] = -nums[index]

        return result
    

sol = Solution()
output = sol.findDuplicates([1,3,5,4,5])
print(output) # Output: [5]