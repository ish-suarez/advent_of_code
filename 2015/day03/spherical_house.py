startingAt = (0, 0)
santaCoordinates = [startingAt]
robotCoordinates = [startingAt]

def filterOutDuplicatesAndFindSum(listOfCoordinates):
    return len(set(listOfCoordinates))

def filterOutDuplicatesFromBothCoordinates(list1, list2):
    return len(set(list1 + list2))


x, y = 0,0
for index, step in enumerate(open('data.txt').readline()):
    
    if index % 2 == 0:
        if step == '^':
            y += 1
        if step == 'v':
            y -= 1
        if step == '>':
            x += 1
        if step == '<':
            x -= 1
        santaCoordinates.append((x, y))

x, y = 0, 0
for index, step in enumerate(open('data.txt').readline()):
    if index % 2 != 0:
        if step == '^':
            y += 1
        if step == 'v':
            y -= 1
        if step == '>':
            x += 1
        if step == '<':
            x -= 1
        robotCoordinates.append((x, y))

santa, robot = filterOutDuplicatesAndFindSum(santaCoordinates), filterOutDuplicatesAndFindSum(robotCoordinates)

print(f"Total number of houses that received at least one gift from santa: {santa}")
print(f"Total number of houses that received at least one gift form robot santa: {robot}")
print(f"Total houses that received at least one present: {filterOutDuplicatesFromBothCoordinates(santaCoordinates, robotCoordinates)}")