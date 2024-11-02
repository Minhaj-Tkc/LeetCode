# 3028. Ant on the Boundary

from typing import List

class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        total_sum = 0
        count = 0
        
        for num in nums:
            total_sum += num
            if total_sum == 0:
                count += 1
                
        return count


sol = Solution()
output = sol.returnToBoundaryCount([-3, 3, -3])
print(output)



     
    

