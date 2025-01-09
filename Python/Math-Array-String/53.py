# Python file


class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        def count_set_bits(n):
            # Count the number of set bits (1's) in the binary representation of n
            return bin(n).count('1')
        
        total_sum = 0
        
        for i, num in enumerate(nums):
            if count_set_bits(i) == k:
                total_sum += num
                
        return total_sum