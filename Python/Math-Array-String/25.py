# 1816. Truncate Sentence

class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        # Split the sentence into words
        words = s.split()
        print(words)
        # Select the first k words and join them with spaces
        return " ".join(words[:k])



sol = Solution()
output = sol.truncateSentence("Hello how are you Contestant", 4)
print(output)