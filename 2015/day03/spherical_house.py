x, y = 0, 0
visited = 1
startingAt = (0, 0)
coordinates = [startingAt]
receivedOneGift = []

for step in open('data.txt').readline():
    if step == '^':
        y += 1
    if step == 'v':
        y -= 1
    if step == '>':
        x += 1
    if step == '<':
        x -= 1
    coordinates.append((x, y))
    
print(len(set(coordinates)))