def findFloor(input_data):
    floor = 0
    instructions = 1
    
    for x in input_data:
        if x == ")":
            floor -= 1
        elif x == "(":
            floor += 1
        if floor == -1:
            print(f"Floor: {floor}\nPosition: {instructions} is the position Santa reached the basement.")
            break
        instructions = instructions + 1
            
    # print(f"{floor} is the final floor.")
    
    
data = open('data.txt', 'r').read()

findFloor(data)