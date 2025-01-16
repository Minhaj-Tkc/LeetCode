# 2540. Minimum Common Value

from typing import List

class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        # Initialize two pointers
        i, j = 0, 0

        # Traverse through both arrays
        while i < len(nums1) and j < len(nums2):
            # If we find a common element, return it
            if nums1[i] == nums2[j]:
                return nums1[i]
            # Move the pointer in the smaller element's array
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1

        # If no common element is found, return -1
        return -1
    

sol = Solution()
output = sol.getCommon([1, 2, 3], [2, 4])
print(output) # # Output: 2