# 217. Contains Duplicate


from typing import List
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # Create a set to track seen elements
        seen = set()
        
        # Iterate through the list
        for num in nums:
            if num in seen:
                return True  # Found a duplicate
            seen.add(num)  # Add the number to the set
        
        return False  # No duplicates found
    

sol = Solution()
output = sol.containsDuplicate([1, 2, 3, 4, 2])
print(output) # # Output: True