# --- Day 10: Adapter Array ---
# Patched into the aircraft's data port, you discover weather forecasts of a massive tropical storm. Before you can figure out whether it will impact your vacation plans, however, your device suddenly turns off!

# Its battery is dead.

# You'll need to plug it in. There's only one problem: the charging outlet near your seat produces the wrong number of jolts. Always prepared, you make a list of all of the joltage adapters in your bag.

# Each of your joltage adapters is rated for a specific output joltage (your puzzle input). Any given adapter can take an input 1, 2, or 3 jolts lower than its rating and still produce its rated output joltage.

# In addition, your device has a built-in joltage adapter rated for 3 jolts higher than the highest-rated adapter in your bag. (If your adapter list were 3, 9, and 6, your device's built-in adapter would be rated for 12 jolts.)

# Treat the charging outlet near your seat as having an effective joltage rating of 0.

# Since you have some time to kill, you might as well test all of your adapters. Wouldn't want to get to your resort and realize you can't even charge your device!

# If you use every adapter in your bag at once, what is the distribution of joltage differences between the charging outlet, the adapters, and your device?

# For example, suppose that in your bag, you have adapters with the following joltage ratings:

# 16
# 10
# 15
# 5
# 1
# 11
# 7
# 19
# 6
# 12
# 4
# With these adapters, your device's built-in joltage adapter would be rated for 19 + 3 = 22 jolts, 3 higher than the highest-rated adapter.

# Because adapters can only connect to a source 1-3 jolts lower than its rating, in order to use every adapter, you'd need to choose them like this:

# The charging outlet has an effective rating of 0 jolts, so the only adapters that could connect to it directly would need to have a joltage rating of 1, 2, or 3 jolts. Of these, only one you have is an adapter rated 1 jolt (difference of 1).
# From your 1-jolt rated adapter, the only choice is your 4-jolt rated adapter (difference of 3).
# From the 4-jolt rated adapter, the adapters rated 5, 6, or 7 are valid choices. However, in order to not skip any adapters, you have to pick the adapter rated 5 jolts (difference of 1).
# Similarly, the next choices would need to be the adapter rated 6 and then the adapter rated 7 (with difference of 1 and 1).
# The only adapter that works with the 7-jolt rated adapter is the one rated 10 jolts (difference of 3).
# From 10, the choices are 11 or 12; choose 11 (difference of 1) and then 12 (difference of 1).
# After 12, only valid adapter has a rating of 15 (difference of 3), then 16 (difference of 1), then 19 (difference of 3).
# Finally, your device's built-in adapter is always 3 higher than the highest adapter, so its rating is 22 jolts (always a difference of 3).
# In this example, when using every adapter, there are 7 differences of 1 jolt and 5 differences of 3 jolts.

# Here is a larger example:

# 28
# 33
# 18
# 42
# 31
# 14
# 46
# 20
# 48
# 47
# 24
# 23
# 49
# 45
# 19
# 38
# 39
# 11
# 1
# 32
# 25
# 35
# 8
# 17
# 7
# 9
# 4
# 2
# 34
# 10
# 3
# In this larger example, in a chain that uses all of the adapters, there are 22 differences of 1 jolt and 10 differences of 3 jolts.

# Find a chain that uses all of your adapters to connect the charging outlet to your device's built-in adapter and count the joltage differences between the charging outlet, the adapters, and your device. What is the number of 1-jolt differences multiplied by the number of 3-jolt differences?

sample_input = """28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3"""

f = open('10data.txt', 'r')
full_puzzle_input = f.read()

def to_int(n):
  return int(n)

split_input = full_puzzle_input.split("\n")
# print(split_input)
parsed_input = [to_int(x) for x in split_input]
parsed_input.sort()

init = 0
ones = 0
threes = 1

for x in parsed_input:
  if x - init == 1:
    ones += 1
  if x - init == 3:
    threes += 1
  init = x

print(ones * threes)  


# --- Part Two ---

# To completely determine whether you have enough adapters, you'll need to figure out how many different ways they can be arranged. Every arrangement needs to connect the charging outlet to your device. The previous rules about when adapters can successfully connect still apply.

# The first example above (the one that starts with 16, 10, 15) supports the following arrangements:

# (0), 1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19, (22)
# (0), 1, 4, 5, 6, 7, 10, 12, 15, 16, 19, (22)
# (0), 1, 4, 5, 7, 10, 11, 12, 15, 16, 19, (22)
# (0), 1, 4, 5, 7, 10, 12, 15, 16, 19, (22)
# (0), 1, 4, 6, 7, 10, 11, 12, 15, 16, 19, (22)
# (0), 1, 4, 6, 7, 10, 12, 15, 16, 19, (22)
# (0), 1, 4, 7, 10, 11, 12, 15, 16, 19, (22)
# (0), 1, 4, 7, 10, 12, 15, 16, 19, (22)
# (The charging outlet and your device's built-in adapter are shown in parentheses.) Given the adapters from the first example, the total number of arrangements that connect the charging outlet to your device is 8.

# The second example above (the one that starts with 28, 33, 18) has many arrangements. Here are a few:

# (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
# 32, 33, 34, 35, 38, 39, 42, 45, 46, 47, 48, 49, (52)

# (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
# 32, 33, 34, 35, 38, 39, 42, 45, 46, 47, 49, (52)

# (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
# 32, 33, 34, 35, 38, 39, 42, 45, 46, 48, 49, (52)

# (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
# 32, 33, 34, 35, 38, 39, 42, 45, 46, 49, (52)

# (0), 1, 2, 3, 4, 7, 8, 9, 10, 11, 14, 17, 18, 19, 20, 23, 24, 25, 28, 31,
# 32, 33, 34, 35, 38, 39, 42, 45, 47, 48, 49, (52)

# (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
# 46, 48, 49, (52)

# (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
# 46, 49, (52)

# (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
# 47, 48, 49, (52)

# (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
# 47, 49, (52)

# (0), 3, 4, 7, 10, 11, 14, 17, 20, 23, 25, 28, 31, 34, 35, 38, 39, 42, 45,
# 48, 49, (52)
# In total, this set of adapters can connect the charging outlet to your device in 19208 distinct arrangements.

# You glance back down at your bag and try to remember why you brought so many adapters; there must be more than a trillion valid ways to arrange them! Surely, there must be an efficient way to count the arrangements.

# What is the total number of distinct ways you can arrange the adapters to connect the charging outlet to your device?


# take in the sorted array. start at the lowest number. call check function on each value within one, two or three of the current value. whenever you reach the end of the array (highest value) add to the number of configs.

# this solution works but is too slow for the data set size (how do I calculate ON ??).  
# def config_checker(arr, i = 0, count = 0):
#   maxi = max(arr)
#   next = [x for x in arr if x > i and x <= i + 3 ]
#   for x in next:
#     if x == maxi:
#       print(x)
#       count += 1
#     else:
#       count += config_checker(arr, x) 
 
#   return count

# print(config_checker(parsed_input))

# thanks Bradley Sward on youtube (https://www.youtube.com/watch?v=eeYanhLamjg&ab_channel=BradleySward) for explaining the solv e on this and teaching me some tricks on the way
data = [int(x) for x in full_puzzle_input.split("\n")]

# add baseline of 0 and max value (laptop) to the list and sort
data.append(0)
data.append(max(data) + 3)
data.sort()

# make a list to hold path values 
paths = [0] * (max(data) + 1)
# set value of 0 to 1 (we have visited this number, we start here)
paths [0] = 1
print(paths)

# starting at one, incrementing by one and going all the way up to max - check if either of the three preceding values appear in the dataset. if they do add their path value to the path value of the current index. 
for i in range(1, max(data) + 1):
  for x in range(1, 4):
    if (i - x) in data:
      paths[i] += paths[i - x]

print("part 2 solution is " + str(paths[-1]))

  



