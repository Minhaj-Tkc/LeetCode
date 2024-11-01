# 1. Two Sum


from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l = len(nums)
        for i in range(l - 1):
            for j in  range(i+1, l):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return [] # No solution found


sol = Solution()
output = sol.twoSum([2,7,11, 15], 17)
print(output)


# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         numMap = {}
#         l = len(nums)

#         for i in range(l):
#             numMap[nums[i]] = i

#         # Find the complement
#         for i in range(l):
#             complement = target - nums[i]
#             if complement in numMap and numMap[complement] != i:
#                 return [i, numMap[complement]]

#         return []  # No solution found





