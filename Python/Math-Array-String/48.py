# 2108. Find First Palindromic String in the Array

from typing import List

class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if word == word[::-1]:  # Check if the word is the same forward and backward
                return word
        return ""  # Return an empty string if no palindrome is found
    

sol = Solution()
output = sol.firstPalindrome(["abc", "car", "ada", "racecar", "cool"])
print(output) # Output = ada