sample_input = """light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags."""


# make a dictionary and a gold bags counter
bags = {}
gold_bags = 0

# split input into lines
lines = sample_input.split('\n')

# for each line of the input, determine the outer and inner bags
for line in lines:
  outer = line.split('bags')[0].replace(" ", "")
  bags[outer] = []
  # parse the inner bags and determine how many of each there are. 
  inner = line.split("contain")[1].replace("bags", "").replace("bag", "").replace(" ", "").replace(".", "").split(',')
  for bag in inner:
    bags[outer].append((
      bag[0] , bag[1:]
    ))

  # add the bags to the dictionary

print(bags)

# recursive function to be called on shinygold bag. have a counter set to zero. increments the counter by how many bags are inside the bag AND calls itself on bags inside

bag_count = 0

def bag_counter(bag):
  for inner_bag in bag:
    if inner_bag[0] != 'n':
      global bag_count
      count = int(inner_bag[0])
      color = inner_bag[1]
      bag_count += count + (count * bag_counter(bags[color]))
  

    
# run bag checker function on each bag in the dictionary. increment the counter if it returns true


bag_counter(bags["shinygold"])

print(bag_count)

