# 2190. Most Frequent Number Following Key In an Array

from typing import List

class Solution:
    def mostFrequent(self, nums: List[int], key: int) -> int:
        from collections import defaultdict

        # Dictionary to count occurrences of targets following the key
        count = defaultdict(int)

        for i in range(len(nums) - 1):
            if nums[i] == key:
                count[nums[i + 1]] += 1

        # Find the target with the maximum count
        return max(count, key=count.get)
    

sol = Solution()
output = sol.mostFrequent([1,100,200,1,100], 1)
print(output) # Output: 3