const { execSync} = require('child_process');

module.exports = {
    filePrint: function(hotFolder, fileName, printer){
        execSync('COPY  ' + '/b /z /v ' + '"' + hotFolder + '\\' + fileName + '"' + ' ' + '"'+ printer + '"', (err) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return;
              }                    
            process.exit(0)
            }
        )
    }
}