sample_input = """light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags."""


# make a dictionary 
bags = {}

# split input into lines
lines = sample_input.split('\n')
print(lines)

# for each line of the input, determine the outer and inner bags
for line in lines:
  outer = line.split('bags')[0].replace(" ", "")
  inner = line.split("contain")[1].replace(" ", "").split(',')
  print(outer, inner)
  # add the bags to the dictionary
  bags[outer] = inner

print(bags)