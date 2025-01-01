# 643. Maximum Average Subarray I

from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
                # Calculate the sum of the first 'k' elements
                current_sum = sum(nums[:k])
                max_sum = current_sum

                # Slide the window through the rest of the array
                for i in range(k, len(nums)):
                    current_sum = current_sum + nums[i] - nums[i - k]
                    max_sum = max(max_sum, current_sum)

                # Return the maximum average
                return max_sum / k
    

sol = Solution()
output = sol.findMaxAverage([1,12,-5,-6,50,3], k = 4) # Output = 12.75
print(output)