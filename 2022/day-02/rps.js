const fs = require('fs');

// Keep track of Scores
const scores = { win: 6, draw: 3, lose: 0 };
// Part Two Shapes
const shapes = { rock: 1, paper: 2, scissors: 3 }

const getCheatSheetResults = () => 
    // Read input.txt file
    fs.readFile('input.txt', 'utf8', (err, data) => {
                if(err) {
                    console.error(err);
                    return;
                }
                // Deconstruct Scores
                const { win, draw, lose } = scores;
                // Part Two Shapes
                const { rock, paper, scissors } = shapes;

                // Cheat Sheet Decoded
                const cheatSheetWithNumbers = 
                    data
                    .split('\n')
                    .map((a) =>
                        a
                            .replace(/[AX]/g, '1')
                            .replace(/[BY]/g, '2')
                            .replace(/[CZ]/g, '3')
                    )

                // Calculate scores - PART ONE
                const cheatSheetWithResults = 
                        cheatSheetWithNumbers
                            .map(round => {
                                    const elf = Number(round[0]);
                                    const myPlay = Number(round[2]);
                                    // Switch statement to determine win or lose of match
                                    switch(elf) {
                                        case 1: 
                                            if(myPlay === 2) {
                                                return win + myPlay
                                            } else if(myPlay === 3) {
                                                return lose + myPlay
                                            } else if(myPlay === elf) {
                                                return draw + myPlay
                                            }
                                            break;
                                        case 2: 
                                            if(myPlay === 3) {
                                                return win + myPlay
                                            } else if(myPlay === 1) {
                                                return lose + myPlay
                                            } else if(myPlay === elf) {
                                                return draw + myPlay
                                            }
                                            break;
                                        case 3: 
                                            if(myPlay === 1) {
                                                return win + myPlay
                                            } else if(myPlay === 2) {
                                                return lose + myPlay
                                            } else if(myPlay === elf) {
                                                return draw + myPlay
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                    
                                })
                                .reduce((a,b) => a + b);

                // Show results with rules from STEP TWO
                const cheatSheetIfIWasPatient = 
                        cheatSheetWithNumbers
                            .map(round => {
                                const elf = Number(round[0]);
                                const myGuide = round[2];
                                switch(elf) {
                                    case 1: 
                                        if(myGuide === '1') {
                                            return lose + scissors
                                        } else if(myGuide === '2') {
                                            return draw + rock
                                        } else if(myGuide === '3') {
                                            return win + paper
                                        }
                                        break;
                                    case 2:
                                        if(myGuide === '1') {
                                            return lose + rock
                                        } else if(myGuide === '2') {
                                            return draw + paper
                                        } else if(myGuide === '3') {
                                            return win + scissors
                                        }
                                        break;
                                    case 3:
                                        if(myGuide === '1') {
                                            return lose + paper
                                        } else if(myGuide === '2') {
                                            return draw + scissors
                                        } else if(myGuide === '3') {
                                            return win + rock
                                        }
                                        break;
                                    default: 
                                        break;
                                }
                            })    
                            .reduce((a,b) => a + b);
                            

                // PART ONE SOLUTION
                console.log(cheatSheetWithResults, 'Step One Total');

                // PART TWO SOLUTION
                console.log(cheatSheetIfIWasPatient, 'Step Two Total');
            }
        )

getCheatSheetResults();