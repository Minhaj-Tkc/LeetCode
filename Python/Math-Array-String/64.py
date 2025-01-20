# 2965. Find Missing and Repeated Values

from typing import List

class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        total_numbers = n * n
        flat_list = [num for row in grid for num in row]
        
        # Create a count array to track the frequency of each number
        count = [0] * (total_numbers + 1)
        for num in flat_list:
            count[num] += 1
        
        # Find the repeated (a) and missing (b) numbers
        a = b = -1
        for i in range(1, total_numbers + 1):
            if count[i] == 2:
                a = i
            elif count[i] == 0:
                b = i
        
        return [a, b]
    

sol = Solution()
output = sol.findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])
print(output) # # Output: [9, 5]