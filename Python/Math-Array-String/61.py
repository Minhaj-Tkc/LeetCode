# 2011. Final Value of Variable After Performing Operations

from typing import List

class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        X = 0  # Initialize X to 0
        for operation in operations:
            if operation in ("++X", "X++"):
                X += 1
            elif operation in ("--X", "X--"):
                X -= 1
        return X
    

sol = Solution()
output = sol.finalValueAfterOperations(["--X", "X++", "X++"])
print(output) # # Output: 1