# 520. Detect Capital


class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if word.isupper():
            return True
        # Check if all letters are lowercase
        elif word.islower():
            return True
        # Check if only the first letter is uppercase
        elif word[0].isupper() and word[1:].islower():
            return True
        # If none of the conditions are met
        else:
            return False
        

sol = Solution()
output = sol.detectCapitalUse("USA")
print(output)