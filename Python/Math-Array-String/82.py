# 3005. Count Elements With Maximum Frequency

from collections import Counter
from typing import List

class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        # Step 1: Count the frequency of each element
        freq = Counter(nums)
        
        # Step 2: Find the maximum frequency
        max_freq = max(freq.values())
        
        # Step 3: Sum the frequencies of elements with the maximum frequency
        total = sum(count for count in freq.values() if count == max_freq)
        
        return total
    
sol = Solution()
output = sol.maxFrequencyElements([1,1,3,2,3])
print(output)  # Output: 4