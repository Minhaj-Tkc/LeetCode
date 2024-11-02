# 2235. Add Two Integers

class Solution:
    def sum(self, num1: int, num2: int) -> int:
        return num1 + num2

solution = Solution()

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: ")) 

result = solution.sum(num1, num2)

print(f"The sum of {num1} and {num2} is {result}.")