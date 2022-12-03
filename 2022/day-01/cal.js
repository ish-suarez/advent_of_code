const getCalories = () => {

    // Reading File input.txt
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // Sort calories into arrays.
        const caloriesSummedUp = 
            data 
            .split('\n\n')
            .map(x => x.split('\n')
            .reduce((a,b) => Number(a) + Number(b)))
            .map(c => Number(c))
            .sort((a,b) => a < b ? 1 : a > 0 ? -1 : 0)

        // Returns Most Calories
        const getMostCalories = caloriesSummedUp.slice(0, 1)
        // Sum of top three calorie groups
        const getSumOfTopThree = caloriesSummedUp.slice(0, 3).reduce((a,b) => a + b)

        // Will display the greatest amount of calories and the sum of the top three most amount of calories.
        console.log('The Most Calories:', getMostCalories)
        console.log('This is the total of the top three:', getSumOfTopThree)
    });
}

getCalories();