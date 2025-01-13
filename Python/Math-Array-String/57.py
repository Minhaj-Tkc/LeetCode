# 2574. Left and Right Sum Differences

from typing import List

class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n = len(nums)
        leftSum = [0] * n
        rightSum = [0] * n
        answer = [0] * n

        # Calculate leftSum
        for i in range(1, n):
            leftSum[i] = leftSum[i - 1] + nums[i - 1]

        # Calculate rightSum
        for i in range(n - 2, -1, -1):
            rightSum[i] = rightSum[i + 1] + nums[i + 1]

        # Calculate answer
        for i in range(n):
            answer[i] = abs(leftSum[i] - rightSum[i])

        return answer
    

sol = Solution()
output = sol.leftRightDifference([10, 4, 8, 3])
print(output) # # Output: [15, 1, 11, 22]