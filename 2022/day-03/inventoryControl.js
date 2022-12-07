const fs = require('fs');

const getErrors = () => {
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err) {
            console.log(err)
        }
    
        // Returns new array of found duplicates
        const findDuplicates = (arr) => {
            const firstArray = arr[0];
            const duplicateCharacters =  [
                ...new Set(
                    firstArray.filter(
                        a => arr.map(b => b.includes(a)).filter(a => !a).length === 0
                    )
                )
            ][0];
            return duplicateCharacters;
        } 

        // Returns the priority Value of each found duplicate
        const getPriorityValues = priority => {
            const upperCaseLimit = 65;
            const lowerCaseLimit = 96;

            return priority.charCodeAt(0) <= 90 ?
                priority.charCodeAt(0) - upperCaseLimit + 27 : priority.charCodeAt(0) - lowerCaseLimit
        }

        // Get front and back half of each rucksack
        const getFrontAndBackHalf = ruckSackItems => {
            const half = ruckSackItems.length / 2;
            const frontHalf = ruckSackItems.slice(0, half);
            const backHalf = ruckSackItems.slice(half);
            const newArray = [ frontHalf, backHalf ];
            return newArray;
        }

        // Divide data into groups of three
        const divideByGroupsOfThree = group => {
            const elfInGroup = 3;
            let res = [];
            for(let i = 0; i < group.length; i += elfInGroup) {
                res.push(group.slice(i, i + elfInGroup));
            }
            return res;
        }

        // Part One
        const findPrioritiesAndReturnSum = 
            data
                .split('\n')
                .map(inventory => inventory.split(''))
                .map(getFrontAndBackHalf)
                .map(findDuplicates)
                .map(getPriorityValues)
                .reduce((a, b) => a + b)
        
        // Part Two
        const findPrioritiesOfGroupsOfThree = 
            divideByGroupsOfThree( data.split('\n').map(item => item.split('')))
                .map(findDuplicates)
                .map(getPriorityValues)
                .reduce((a, b) => a + b)


        console.log(findPrioritiesAndReturnSum, 'Is the priority total.')

        console.log(findPrioritiesOfGroupsOfThree, 'Is the priority total for groups of three')


    })
}

getErrors()