# 3000. Maximum Area of Longest Diagonal Rectangle

from typing import List
import math

class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:
        max_diagonal = 0
        max_area = 0
        
        for length, width in dimensions:
            diagonal = math.sqrt(length**2 + width**2)
            area = length * width
            
            if diagonal > max_diagonal or (diagonal == max_diagonal and area > max_area):
                max_diagonal = diagonal
                max_area = area
                
        return max_area
    
sol = Solution()
output = sol.areaOfMaxDiagonal([[9,3],[8,6]])
print(output)