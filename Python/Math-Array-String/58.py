# 1313. Decompress Run-Length Encoded List

from typing import List

class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(0, len(nums), 2):
            freq = nums[i]
            val = nums[i + 1]
            result.extend([val] * freq)
        return result
    

sol = Solution()
output = sol.decompressRLElist([1, 2, 3, 4])
print(output) # # Output: [2, 4, 4, 4]