# 1952. Three Divisors

class Solution:
    def isThree(self, n: int) -> bool:
        count = 0
        for i in range(2, int(n/2)+1 ):
            if n % i == 0:
                count += 1
        return True if count == 1 else False
        

sol = Solution()
for i in range(1000):
    output = sol.isThree(i)
    if output:
        print(f"{i} : {output}")


# class Solution:
#     def isThree(self, n: int) -> bool:
#         return sum(n % i == 0 for i in range(1, n+1)) == 3 


# Optimized Approach
# class Solution:
#     def isThree(self, n: int) -> bool:
#         # Check if n is a perfect square
#         root = int(n ** 0.5)
#         if root * root != n:
#             return False
        
#         # Check if the square root of n is a prime number
#         for i in range(2, root):
#             if root % i == 0:
#                 return False
#         return root > 1