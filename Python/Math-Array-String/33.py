# 1351. Count Negative Numbers in a Sorted Matrix

from typing import List

class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        count = 0
        for row in grid:
            # Use binary search to find the first negative number in each row
            left, right = 0, len(row) - 1
            while left <= right:
                mid = (left + right) // 2
                if row[mid] < 0:
                    right = mid - 1
                else:
                    left = mid + 1
            # All elements from `left` to the end of the row are negative
            count += len(row) - left
        return count
    

sol = Solution()
output = sol.countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])
print(output)
