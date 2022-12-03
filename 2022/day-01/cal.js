const fs = require('fs');

const getCalories = () => {
    fs.readFile('input.txt', 'utf8', (err, data) => {
      if (err) {
            console.error(err);
            return;
        }

        const caloriesSummedUp = 
            data 
            .split('\n\n')
            .map(x => x.split('\n')
            .reduce((a,b) => Number(a) + Number(b)))
            .map(c => Number(c))
            .sort((a,b) => a < b ? 1 : a > 0 ? -1 : 0)

        const getMostCalories = caloriesSummedUp.slice(0, 1)
        const getSumOfTopThree = caloriesSummedUp.slice(0, 3).reduce((a,b) => a + b)

        console.log('The Most Calories:', getMostCalories)
        console.log('This is the total of the top three:', getSumOfTopThree)
    });
}

getCalories();