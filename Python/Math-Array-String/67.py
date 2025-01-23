# 2273. Find Resultant Array After Removing Anagrams

from typing import List

class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        i = 1  # Start checking from the second word
        while i < len(words):
            if sorted(words[i - 1]) == sorted(words[i]):  # Check if two adjacent words are anagrams
                words.pop(i)  # Remove the current word
            else:
                i += 1  # Move to the next word
        return words
    

sol = Solution()
output = sol.removeAnagrams(["abba","baba","bbaa","cd","cd"])
print(output) # Output: ['abba', 'cd']