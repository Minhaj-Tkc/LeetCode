# 1662. Check If Two String Arrays are Equivalent

from typing import List

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        # Concatenate all the strings in each array
        str1 = ''.join(word1)
        str2 = ''.join(word2)
        
        # Compare the concatenated strings
        return str1 == str2
    


sol = Solution()
output = sol.arrayStringsAreEqual(["ab", "c"], ["a", "bc"])
print(output)