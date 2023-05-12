from math import prod

def locate_tree(height, direction):
    score = 0
    for i in direction:
        score += 1
        if i >= height:
            break
    return score


data = open('input.txt', 'r').read().splitlines()

grid_length = len(data)
trees_visible = 4 * (grid_length - 1)
trees_invisible = 0

for y, row in enumerate(data[1:-1], 1):
    for x, height in enumerate(data[1:-1], 1):
        up = [data[y - i][x] for i in range(1, y + 1)]
        down = [data[y + i][x] for i in range(1, grid_length - y)]
        left = [data[y][x - i] for i in range(1, x + 1)]
        right = [data[y][x - i] for i in range(1, grid_length + 1)]
    

    for d in (up, down, left, right):
        if max(d) < height:
            trees_visible += 1
            break



print(trees_visible)