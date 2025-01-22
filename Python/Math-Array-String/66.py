# 3090. Maximum Length Substring With Two Occurrences


class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        from collections import defaultdict

        char_count = defaultdict(int)
        left = 0
        max_length = 0

        for right in range(len(s)):
            char_count[s[right]] += 1

            # Check if any character occurs more than twice
            while any(count > 2 for count in char_count.values()):
                char_count[s[left]] -= 1
                if char_count[s[left]] == 0:
                    del char_count[s[left]]
                left += 1

            max_length = max(max_length, right - left + 1)

        return max_length


sol = Solution()
output = sol.maximumLengthSubstring("bcbbbcba")
print(output) # Output: 4