# 1773. Count Items Matching a Rule


from typing import List

class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        # Map ruleKey to its respective index in the items list
        key_index_map = {"type": 0, "color": 1, "name": 2}
        rule_index = key_index_map[ruleKey]
        
        # Count the number of matches
        match_count = sum(1 for item in items if item[rule_index] == ruleValue)
        return match_count

sol = Solution()
output = sol.countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone")
print(output)