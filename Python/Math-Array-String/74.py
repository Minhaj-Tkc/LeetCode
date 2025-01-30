# 2215. Find the Difference of Two Arrays

from typing import List

class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        set1, set2 = set(nums1), set(nums2)
        return [list(set1 - set2), list(set2 - set1)]
    

sol = Solution()
output = sol.findDifference([1,2,3], [2,4,6])
print(output) # Output: [[1, 3], [4, 6]]