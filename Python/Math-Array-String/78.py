# 771. Jewels and Stones

class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        jewel_set = set(jewels)  # Convert jewels to a set for O(1) lookups
        return sum(stone in jewel_set for stone in stones)  # Count how many stones are in the jewel set
    
sol = Solution()
output = sol.numJewelsInStones("aA", "aAAbbbb")
print(output)  # Output: 3