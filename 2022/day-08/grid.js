// const data = require('fs').readFileSync('input.txt', 'utf8');

// const grid = 
//         data
//             .split('\n')
//             .map(i => i.split('').map(Number))
//             .reduce(( a, b, y, d) => {
//                 const h = d.map(i => i[y]);
//                 console.log(h)
//             })
            

// const grid = data.split('\n').filter(i => i != '');




            // .map(a => a.map(b => {
            //     console.log(a[0], b[0])
            // }))




    // console.log(grid[0])

// console.log(grid)


// part1

// $0.innerText.split('\n').filter(n=>n).map(n=>[...n].map(Number)).reduce((a,b,y,d)=> {
//     const h=d.map(l=>l[y]);
//     h.forEach((v,x,b) => (b.slice(0,x).every(a => a<v) || b.slice(x+1).every(a=> a<v)) && a.add(y+100*x));
//     b.forEach((v,x,b) => (b.slice(0,x).every(a => a<v) || b.slice(x+1).every(a => a<v)) && a.add(x+100*y));
//     return a;
// },new Set()).size;
// part2

// $0.innerText.split('\n').filter(n=>n).map(n=>[...n].map(Number)).flatMap((v,y,a) => v.map((cv, x) => {
//     const h=a.map(l=>l[x]);
//     return [v.slice(0, x).reverse(), v.slice(x+1), h.slice(0, y).reverse(), h.slice(y+1)]
//         .map(s => s.findIndex(c => c >= cv)+1 || s.length).reduce((a,b)=>a*b);
// })).reduce((a,b)=>Math.max(a,b));