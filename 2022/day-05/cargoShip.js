const fs = require('fs');

const cargoShip = () => {

    // Read file and get data
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err) {
            if (err) {
                console.error(err);
                return;
            }
        }

        // Deconstruct data for stacks and containers
        const [stacks, instructions ] = data.split('\n\n');
        const [containers, stackNumbers] = stacks.split('\n\n');

        
        // Get Just the stacks of containers
        const getOrganizedStacks = 
            containers
                .split('\n')
                .slice(0, -1)
        
        // Match strings and make new array using data
        let rows = getOrganizedStacks
            .map((line) => {
                let eachStack = [...line.matchAll(/[A-Z]|    /g)];
                return eachStack.map(m => m[0]);
            });
        
        // Organize columns to be stacked horizontally
        const organizeColumns = 
            rows[0]
                .map((_, i) => rows.map(row => row[i])
                .filter(e => e != '    ')
                .reverse()
            )

        const readInstructions = ([howManyToMove, from, toStack]) => {
            let stackToMove = [];
            for (let i = 0; i < howManyToMove; i++ ) {
                let liftedStack = organizeColumns[from - 1].pop();
                stackToMove.push(liftedStack);
            }

            // organizeColumns[toStack - 1] = [...organizeColumns[toStack -1], ...stackToMove.reverse()]; // Answer for part Two

            organizeColumns[toStack - 1] = [...organizeColumns[toStack -1], ...stackToMove]; // Answer for Part One, Comment me out for part two

        }
        
        let steps = 
            instructions
                .split('\n')
                .map(line => {
                    if (line === "") return
                    let l =  line.match(/move (\d+) from (\d+) to (\d+)/)
                    const instructionsIntoNumbers = l.map(s => Number(s))
                    return instructionsIntoNumbers.slice(1,4)
                })
                .map(readInstructions)
        
        for (let i in organizeColumns) {
            console.log(organizeColumns[i].slice(-1))
        }
    })
}

cargoShip();