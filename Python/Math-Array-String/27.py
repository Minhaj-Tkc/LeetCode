# 2706. Buy Two Chocolates

from typing import List

class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        # Sort the prices array
        prices.sort()
        
        # Initialize variables
        min_sum = float('inf')  # To track the minimum sum of valid pairs
        leftover = money  # Default leftover if no valid pair exists
        
        # Iterate over all pairs
        for i in range(len(prices)):
            for j in range(i + 1, len(prices)):
                total_cost = prices[i] + prices[j]
                if total_cost <= money:
                    if total_cost < min_sum:
                        min_sum = total_cost
                        leftover = money - total_cost
                else:
                    break  # Since prices are sorted, no need to check further
        
        return leftover



sol = Solution()
output = sol.buyChoco([98,54,6,34,66,63,52,39], 62)
print(output)