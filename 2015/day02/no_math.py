paperNeeded = 0
ribbonNeeded = 0

for x in open('data.txt'):
    l, w, h = map(int, x.split('x'))
    surfaceArea = 2*l*w + 2*w*h + 2*h*l
    totalVolume = (l*w*h)
    smallestSide = min(l,w,h)
    secondSmallestSide = sorted([l,w,h])[1]
    
    paperNeeded += surfaceArea + min(l*w, w*h, h*l)
    ribbonNeeded += smallestSide*2 + secondSmallestSide*2 + totalVolume

print(f"Paper Needed for gifts: {paperNeeded}")  
print(f"Paper Needed for Ribbon: {ribbonNeeded}")