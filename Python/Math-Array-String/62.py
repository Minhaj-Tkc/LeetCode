# 2828. Check if a String Is an Acronym of Words

from typing import List

class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        # Generate the acronym by concatenating the first character of each word in `words`
        acronym = ''.join(word[0] for word in words)
        # Check if the generated acronym matches the string `s`
        return acronym == s
    

sol = Solution()
output = sol.isAcronym(["alice","bob","charlie"], "abc")
print(output) # # Output: True