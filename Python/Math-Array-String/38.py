# 704. Binary Search

from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1  # Initialize the search range
    
        while left <= right:
            mid = (left + right) // 2  # Find the middle index
            if nums[mid] == target:   # If the middle element is the target
                return mid
            elif nums[mid] < target: # Target lies in the right half
                left = mid + 1
            else:                    # Target lies in the left half
                right = mid - 1
        
        return -1  # If target is not found


sol = Solution()
output = sol.search([-1,0,3,5,9,12], 9)
print(output)