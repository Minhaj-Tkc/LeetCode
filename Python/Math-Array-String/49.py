# 2114. Maximum Number of Words Found in Sentences

from typing import List

class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        return max(len(sentence.split()) for sentence in sentences)
    

sol = Solution()
output = sol.mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])
print(output) # Output: 6