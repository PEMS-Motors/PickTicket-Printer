const path = require('path');
const fs = require('fs');
const { execSync} = require('child_process');

module.exports = {
    fileMove: function(hotFolder, fileName, coldFolder){
        //execSync('MOVE  ' + '"' + hotFolder + '\\' + fileName + '"', '"' + coldFolder + '\\' + fileName + '"', (err, stdout, stderr) => {
        execSync('MOVE ' + '"' + hotFolder + '\\' + fileName + '"', '"' + coldFolder + '"', (err, stdout, stderr) => {  
            if (err) {
                console.error(`exec error: ${err}`);
                return;
              }                    
              console.log(`Starting the copy of pickticket ${stdout}`);
              process.exit(0)
            }
        )
    }
}