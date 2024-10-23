# 2455. Average Value of Even Numbers That Are Divisible by Three

from typing import List

class Solution:
    def averageValue(self, nums: List[int]) -> int:
        count = 0
        sum = 0
        for i in nums:
            if i % 6 == 0:
                count += 1
                sum += i
        return 0 if sum == 0 else sum//count 



sol = Solution()
# output = sol.averageValue([9,3,8,4,2,5,3,8,6,1])
# output = sol.averageValue([1,2,4,7,10])
output = sol.averageValue([1,3,6,10,12,18, 24, 30])
print(output)



# class Solution:
#     def averageValue(self, nums: List[int]) -> int:
#         res = [i for i in nums if (i % 6 == 0)]
#         return 0 if len(res) == 0 else sum(res) // len(res)




