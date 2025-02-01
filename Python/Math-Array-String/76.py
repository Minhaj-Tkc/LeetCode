# 2351. First Letter to Appear Twice

class Solution:
    def repeatedCharacter(self, s: str) -> str:
        seen = set()
        for char in s:
            if char in seen:
                return char
            seen.add(char)
        return ""  # This won't be reached as per the problem constraints

sol = Solution()
output = sol.repeatedCharacter("abccbaacz")
print(output)  # Output: c