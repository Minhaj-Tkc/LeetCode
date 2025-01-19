# 389. Find the Difference


class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        result = 0
        for char in s + t:  # Concatenate s and t and iterate through all characters
            result ^= ord(char)  # XOR the ASCII values of the characters
        return chr(result)  # Convert the resulting ASCII value back to a character
    

sol = Solution()
output = sol.findTheDifference("abcd", "abcde")
print(output) # # Output: e