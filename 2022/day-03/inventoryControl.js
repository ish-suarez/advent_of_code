const fs = require('fs');

const getErrors = () => {


    fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err) {
            console.log(err)
        }
    
        // Returns new array of found duplicates
        const findDuplicates = (arr) =>{
            const firstArray = arr[0];
            const duplicateCharacters =  [
                ...new Set(
                    firstArray.filter(
                        a => arr.map(b => b.includes(a)).filter(a => !a).length === 0
                    )
                )
            ][0];
            return duplicateCharacters
        } 

        // Returns the priority Value of each found duplicate
        const getPriorityValues = (priority) => {
            const upperCaseLimit = 65;
            const lowerCaseLimit = 96;

            return priority.charCodeAt(0) <= 90 ?
                priority.charCodeAt(0) - upperCaseLimit + 27  : priority.charCodeAt(0) - lowerCaseLimit
        }

        const splitData = 
            data
                .split('\n')
                .map(inventory => inventory.split(''))
                .map(item => {
                    const half = item.length / 2;
                    const frontHalf = item.slice(0, half);
                    const backHalf = item.slice(half);
                    return [frontHalf, backHalf];
                })
                .map(findDuplicates)
                .map(getPriorityValues)
                .reduce((a, b) => a + b)
            
        console.log(splitData)
    })
}

getErrors()