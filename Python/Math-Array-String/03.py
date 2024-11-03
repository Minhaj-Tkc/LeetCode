# 2469. Convert the Temperature

from typing import List

class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        return [celsius + 273.15 , celsius * 1.80 + 32.00]
    

celsius = 36.50

sol = Solution()
result = sol.convertTemperature(celsius)

print(result) # [309.65, 97.7]