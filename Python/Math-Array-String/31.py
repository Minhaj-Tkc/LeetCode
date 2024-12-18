# 1528. Shuffle String

from typing import List

class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        # Create a list to hold the shuffled characters
        shuffled = [''] * len(s)
        
        # Place each character at the correct index
        for i, char in enumerate(s):
            shuffled[indices[i]] = char
        
        # Join the list into a single string and return
        return ''.join(shuffled)
    
sol = Solution()
output = sol.restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
print(output)