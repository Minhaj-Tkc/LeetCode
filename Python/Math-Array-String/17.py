# 2833. Furthest Point From Origin


# class Solution:
#     def furthestDistanceFromOrigin(self, moves: str) -> int:
#         L, R, _ = 0, 0, 0
#         max_distance = 0
        
#         for move in moves:
#             if move == 'L':
#                 L += 1
#             elif move == 'R':
#                 R += 1
#             elif move == '_':
#                 _ += 1
            
        
#         if L < R:
#             max_distance = (R + _) - L
#         else:
#             max_distance = (L + _) - R
            
#         return max_distance


class Solution:
    def furthestDistanceFromOrigin(self, moves: str) -> int:
        L = moves.count("L") 
        R = moves.count("R") 
        _ = moves.count("_") 
            
        if L < R:
            return (R + _) - L
        else:
            return (L + _) - R
            

sol = Solution()
output = sol.furthestDistanceFromOrigin("LLRRRR")
print(output)