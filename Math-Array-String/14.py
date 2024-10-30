# 2974. Minimum Number Game


from typing import List
    

class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        nums.sort()
        i = 1
        while i < len(nums):
            nums[i], nums[i-1] = nums[i-1], nums[i]
            i += 2
        return nums


sol = Solution()
output = sol.numberGame([5,4,2,3])
print(output)


# class Solution:
#     def numberGame(self, nums: List[int]) -> List[int]:
#         arr = []
#         for i in range(len(nums)//2):
#             alice = min(nums)
#             nums.remove(alice)
#             bob = min(nums)
#             nums.remove(bob)
#             arr.append(bob)
#             arr.append(alice)
#         return arr



# class Solution:
#     def numberGame(self, nums: List[int]) -> List[int]:
#         nums.sort()
#         arr = []
#         while len(nums) > 0:
#             alice = nums.pop(0) 
#             bob = nums.pop(0)
#             arr.append(bob) 
#             arr.append(alice) 
#         return arr