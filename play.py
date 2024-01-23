class Solution:
    def isPalindrome(self, x: int) -> bool:
        return True if str(x) == str(x)[::-1] else False
        
# solution = Solution()
# user_input = input("Put a number: ")

# if solution.isPalindrome(user_input):
#     print("It's a palindrome")
# else:
#     print("It's not a palindrome")
    
class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if len(strs) == 0:
            return ""

        common_prefix = strs[0]

        for i in range(1, len(strs) - 1): 
            current_string = strs[i]

            for j in range(0, min(len(common_prefix), len(current_string))):
                if common_prefix[j] != current_string[j]:
                    common_prefix = common_prefix[0:j]
                    break

            if common_prefix == "":
                break

        return common_prefix

lcp_instance = Solution()
strs = ["flower","flow","flight"]
print(lcp_instance.longestCommonPrefix(strs))

