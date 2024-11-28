# 1108. Defanging an IP Address

class Solution:
    def defangIPaddr(self, address: str) -> str:
        return ''.join(['[.]' if char == "." else char for char in address])
    
    
sol = Solution()
address = "255.100.50.0"
output = sol.defangIPaddr(address)
print(output)


# Using replace method
# class Solution:
#     def defangIPaddr(self, address: str) -> str:
#         return address.replace('.', '[.]')


# Using if else
# class Solution:
#     def defangIPaddr(self, address: str) -> str:
#         s = ''
#         for i in address:
#             if i == '.': s+='[.]'
#             else: s+=i
#         return s