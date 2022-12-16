const fs = require('fs');

const radioProtocol = () => {
    fs.readFile('input.txt', 'utf8', (err, data) => {
        if(err) {
            console.log(err)
        }
        
        const startOfPacket = [4].map( w => { 
            // loop though four indexes 
            for (i=w; ;i++) {
                // return the last character of the unique fours position 
                if (new Set(data.slice(i-w, i)).size === w) return i;
            }
        });

        const startOfMessage = [14].map(w => {
            for(i=w; ;i++) {
                // return the last character of the unique fourteen position 
                if(new Set(data.slice(i-w, i)).size === w) return i;
            }
        });

        console.log(startOfPacket, 'start-of-packet');
        console.log(startOfMessage, 'start-of-message');
    });
}
radioProtocol();
