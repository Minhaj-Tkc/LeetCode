# 191. Number of 1 Bits

# class Solution:
#     def hammingWeight(self, n: int) -> int:
#         """
#         Returns the number of set bits in the binary representation of n.
#         """
#         count = 0
#         while n:
#             count += n & 1  # Increment count if the least significant bit is set
#             n >>= 1         # Right-shift n by 1 to check the next bit
#         return count

class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')

sol = Solution()
output = sol.hammingWeight(11)
print(output)