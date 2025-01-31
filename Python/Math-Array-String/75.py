# 387. First Unique Character in a String


class Solution:
    def firstUniqChar(self, s: str) -> int:
        char_count = {}

        # Count frequency of each character
        for char in s:
            char_count[char] = char_count.get(char, 0) + 1

        # Find the first non-repeating character
        for index, char in enumerate(s):
            if char_count[char] == 1:
                return index

        return -1
    
sol = Solution()
output = sol.firstUniqChar("leetcode")
print(output)  # Output: 0