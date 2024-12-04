# 557. Reverse Words in a String III

# class Solution:
#     def reverseWords(self, s: str) -> str:
#         # Split the sentence into words
#         words = s.split()
#         # Select the first k words and join them with spaces
#         arr = []
#         for word in words:
#             arr.append(word[::-1])

#         return " ".join(arr)
    
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(word[::-1] for word in s.split())

    

sol = Solution()
output = sol.reverseWords("Let's take LeetCode contest")
print(output)