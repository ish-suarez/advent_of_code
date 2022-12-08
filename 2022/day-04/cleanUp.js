const fs = require('fs')

const decodeData = () => {
    fs.readFile('input.txt', 'utf8', (err, data) =>{
        if (err) {
            console.error(err);
            return;
        }

        const numbers = (front, back) => new Array(back - front + 1).fill().map((d, i) => i + front)

        const getNumbers = assignedNumbers => {
            const [front, back] = assignedNumbers.split('-').map(Number)
            return numbers(front, back)
        }

        const fullyContained = (firstElf, secondElf) =>
            firstElf.filter(firstSections => secondElf.includes(firstSections)).length === firstElf.length 
            || 
            secondElf.filter(secondSections => firstElf.includes(secondSections)).length === secondElf.length

        const duplicateContained = (firstElf, secondElf) =>
            firstElf.filter(firstSections => secondElf.includes(firstSections)).length > 0
            || 
            secondElf.filter(secondSections => firstElf.includes(secondSections)).length > 0

        const assignmentsThatOverlap = 
            data
                .split('\n')
                .map(item => item.split(','))
                .map(section => section.map(getNumbers))
                .filter(tasks => fullyContained(tasks[0], tasks[1])).length
            

        const assignmentsThatIntersect = 
            data
                .split('\n')
                .map(item => item.split(','))
                .map(section => section.map(getNumbers))
                .filter(tasks => duplicateContained(tasks[0], tasks[1])).length 

            

        console.log(assignmentsThatOverlap, 'Assignments that overlap.')
        console.log(assignmentsThatIntersect, 'Assignments that intersect.')
    });
    
}

decodeData()