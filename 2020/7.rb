sampleInput = "
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
"
# Parse input into array of hashes
#[ {"light red" : { bright white, muted yellow }} ]

# make an array of winning bags (shiny gold only to begin)

def build_bag_of_bags(array_of_bags)
  bags = Hash.new
  array_of_bags.each do
   # look in the bag and see if any children are in the winning bags array. if so, move this bag to the winners array
   # do this for the children too 


