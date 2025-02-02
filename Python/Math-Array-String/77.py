# 1832. Check if the Sentence Is Pangram

class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) == 26
    
sol = Solution()
output = sol.checkIfPangram("abccbaacz")
print(output)  # Output: False