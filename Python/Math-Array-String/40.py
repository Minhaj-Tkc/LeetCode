# 1678. Goal Parser Interpretation


class Solution:
    def interpret(self, command: str) -> str:
        # Replace "()" with "o"
        command = command.replace("()", "o")
        # Replace "(al)" with "al"
        command = command.replace("(al)", "al")
        return command
    

sol = Solution()
output = sol.interpret("G()(al)")
print(output)