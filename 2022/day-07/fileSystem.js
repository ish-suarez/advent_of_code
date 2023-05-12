const fs = require('fs');

const [ dir, ls, cd, back ] = [ 'dir', '$ ls', '$ cd', '$ cd ..' ];

class fileSystem {
    constructor() {
        this.tree = {}
        this.workingDirectory = []
        // const { tree = {}, workingDirectory = [] } = this;
        // return tree, workingDirectory;
    }

    addFilesOrDirectories(item) {
        let currentDirectory = workingDirectory.reduce((currentDirectory, d) => currentDirectory[d], tree);
        currentDirectory[item[1]] = !NaN(item[0]) ? Number(item[0]) : {}
    }

    changeDirectory(directory) {
        switch(directory) {
            case '/':
                workingDirectory = [];
                break;
            case '..': 
                workingDirectory.pop()
                break;
            default:
                workingDirectory.push(directory)
                break;
        }
    }
}

const files = () => {
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
        }
        
        const instructions = data.split('\n');

        tree = new fileSystem();

        for (let i = 0; i < instructions.length; i++) {
            let splitData = instructions[i].split(' ');
            if(splitData[0].includes('$')) {
                if (splitData[1].includes('cd')) {
                    tree.changeDirectory(splitData[2])
                }
            } else {
                tree.addFilesOrDirectories(splitData)
            }
            

            console.log(splitData)

        }
        // let directory = {}
        // let location = []

        // const files = data.split('\n')

        // for (i = 0; i < files.length; i++) {
        //     const currentPositon = files.splice
        //     if (files[i].startsWith(cd)) console.log(files[i])
        // }


    })
}

files();


// $ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k