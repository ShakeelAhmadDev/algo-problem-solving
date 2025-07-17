# 🔥 JavaScript/TypeScript Hash Table Problems

This list contains handpicked algorithm problems that are best solved using hash tables like `Map`, `Set`, or `{}` in JS/TS.

---

## 🟢 Easy

### 1. Two Sum
**Problem**: Given an array and a target, return indices of two numbers that add up to the target.

**Examples**:
- Input: `nums = [2, 7, 11, 15], target = 9` → Output: `[0, 1]`
- Input: `nums = [3, 2, 4], target = 6` → Output: `[1, 2]`

---

### 2. Find Duplicates
**Problem**: Return all elements that appear more than once in an array.

**Examples**:
- Input: `[1, 3, 2, 3, 4, 1]` → Output: `[3, 1]`
- Input: `[5, 5, 5, 5]` → Output: `[5]`

---

### 3. Isomorphic Strings
**Problem**: Check if two strings follow the same character mapping pattern.

**Examples**:
- Input: `s = "egg", t = "add"` → Output: `true`
- Input: `s = "foo", t = "bar"` → Output: `false`

---

### 4. Intersection of Two Arrays
**Problem**: Return the common elements between two arrays (only unique results).

**Examples**:
- Input: `nums1 = [1, 2, 2, 1], nums2 = [2, 2]` → Output: `[2]`
- Input: `nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]` → Output: `[4, 9]`

---

## 🟡 Medium

### 5. Longest Substring Without Repeating Characters
**Problem**: Find the length of the longest substring with all unique characters.

**Examples**:
- Input: `"abcabcbb"` → Output: `3`
- Input: `"bbbbb"` → Output: `1`

---

### 6. Group Anagrams
**Problem**: Group a list of strings into anagram groups.

**Examples**:
- Input: `["eat", "tea", "tan", "ate", "nat", "bat"]` → Output: `[["eat","tea","ate"],["tan","nat"],["bat"]]`
- Input: `[""]` → Output: `[[""]]`

---

### 7. Top K Frequent Elements
**Problem**: Return the k most frequent elements in an array.

**Examples**:
- Input: `nums = [1,1,1,2,2,3], k = 2` → Output: `[1, 2]`
- Input: `nums = [4, 4, 4, 5, 5, 6], k = 1` → Output: `[4]`

---

### 8. Subarray Sum Equals K
**Problem**: Find the number of subarrays whose sum equals k.

**Examples**:
- Input: `nums = [1,1,1], k = 2` → Output: `2`
- Input: `nums = [1,2,3], k = 3` → Output: `2`

---

### 9. Continuous Subarray Sum
**Problem**: Check if the array has a subarray (length ≥ 2) with a sum that's a multiple of k.

**Examples**:
- Input: `nums = [23, 2, 4, 6, 7], k = 6` → Output: `true`
- Input: `nums = [23, 2, 6, 4, 7], k = 13` → Output: `false`

---

## 🔴 Hard

### 10. Longest Consecutive Sequence
**Problem**: Find the length of the longest consecutive elements sequence in an unsorted array.

**Examples**:
- Input: `[100, 4, 200, 1, 3, 2]` → Output: `4`
- Input: `[0,3,7,2,5,8,4,6,0,1]` → Output: `9`

---

### 11. Minimum Window Substring
**Problem**: Find the smallest window in a string that contains all characters of another string.

**Examples**:
- Input: `s = "ADOBECODEBANC", t = "ABC"` → Output: `"BANC"`
- Input: `s = "a", t = "a"` → Output: `"a"`

---

### 12. Word Pattern II
**Problem**: Return true if a string follows a given pattern using a one-to-one mapping.

**Examples**:
- Input: `pattern = "abba", str = "dog cat cat dog"` → Output: `true`
- Input: `pattern = "abba", str = "dog cat cat fish"` → Output: `false`

---

### 13. Count Distinct Elements in Every Window of Size K
**Problem**: For every sliding window of size k, count distinct numbers.

**Examples**:
- Input: `arr = [1,2,1,3,4,2,3], k = 4` → Output: `[3, 4, 4, 3]`
- Input: `arr = [1,1,1,1], k = 2` → Output: `[1, 1, 1]`

---

### 14. Smallest Substring of All Characters (Airbnb)
**Problem**: Find the smallest substring in S that contains all characters of T.

**Examples**:
- Input: `S = "figehaeci", T = "aei"` → Output: `"aeci"`
- Input: `S = "abcde", T = "ce"` → Output: `"cde"`

---

> ✅ All problems can be solved with JavaScript/TypeScript using `Map`, `Set`, or `{}` for hash tables.
