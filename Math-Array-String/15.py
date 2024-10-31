# 709. To Lower Case


# class Solution:
#     def toLowerCase(self, s: str) -> str:
#         return s.lower()


class Solution:
    def toLowerCase(self, s: str) -> str:
        lower_str = ""
        for char in s:
            ascii_value = ord(char)
            if 65 <= ascii_value <= 90:
                lower_str = lower_str + chr(ascii_value + 32)
            else:
                lower_str = lower_str + char
        return lower_str


sol = Solution()
output = sol.toLowerCase("LOVELY")
print(output)