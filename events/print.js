const path = require('path');
const fs = require('fs');
const { execSync} = require('child_process');

module.exports = {
    filePrint: function(hotFolder, fileName, printer){
        execSync('COPY  ' + '/b /z /v ' + '"' + hotFolder + '\\' + fileName + '"' + ' ' + '"'+ printer + '"', (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
              }                    
              console.log(`Printing pickticket ${stdout}`);
              process.exit(0)
            }
        )
    }
}