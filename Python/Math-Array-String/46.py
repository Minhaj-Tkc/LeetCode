# 2129. Capitalize the Title


class Solution:
    def capitalizeTitle(self, title: str) -> str:
        # Split the title into words
        words = title.split()
        
        # Process each word based on its length
        capitalized_words = []
        for word in words:
            if len(word) <= 2:
                # If the word length is 1 or 2, make it lowercase
                capitalized_words.append(word.lower())
            else:
                # If the word length is greater than 2, capitalize the first letter and lowercase the rest
                capitalized_words.append(word[0].upper() + word[1:].lower())
        
        # Join the processed words back into a single string
        return " ".join(capitalized_words)
    

sol = Solution()
output = sol.capitalizeTitle("capiTalIze tHe titLe") 
print(output)