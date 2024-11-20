# 2535. Difference Between Element Sum and Digit Sum of an Array

from typing import List

# class Solution:
#     def differenceOfSum(self, nums: List[int]) -> int:
        
#         d_sum = 0
#         e_sum = 0

#         def find_e_sum(num):

#             sum_of_digits = 0
#             while num > 0:
#                 digit = num % 10
#                 sum_of_digits += digit
#                 num = num // 10
#             return sum_of_digits
        
#         for i in nums:
#             d_sum += i
#             e_sum += find_e_sum(i)

#         return d_sum - e_sum


class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        e_sum = 0
        d_sum = 0
        for i in range(len(nums)):
                e_sum += nums[i]
                while(nums[i] != 0):
                        d_sum += nums[i]%10
                        nums[i] = nums[i]//10
                
        return abs(d_sum - e_sum)                

sol = Solution()
output = sol.differenceOfSum([1,2,3,4])
print(output)