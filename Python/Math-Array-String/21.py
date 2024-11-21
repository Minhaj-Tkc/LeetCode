# 2180. Count Integers With Even Digit Sum

# class Solution:
#     def countEven(self, num: int) -> int:
#         count = 0
#         for i in range(2, num + 1):
#             temp = i              # Save the original value of i
#             digit_sum = 0
#             while temp > 0:
#                 digit_sum += temp % 10
#                 temp //= 10       # Reduce the number
#             if digit_sum % 2 == 0:
#                 count += 1
#         return count


# Optimized Python Code:
class Solution:
    def countEven(self, num: int) -> int:
        count = 0
        for x in range(2, num + 1):
            digit_sum = sum(int(digit) for digit in str(x)) 
            if digit_sum % 2 == 0:
                count += 1
        return count


sol = Solution()
output = sol.countEven(4)
print(output)



# One Liner Solution
# class Solution:
#     def countEven(self, num: int) -> int:
#         count = sum(1 for x in range(1, num + 1) if sum(int(digit) for digit in str(x)) % 2 == 0)
#         return count