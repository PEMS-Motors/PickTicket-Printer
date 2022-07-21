const fs = require('fs');

module.exports = {
    fileMove: async function(hotPath, coldPath){
         fs.rename(hotPath, coldPath, function(err) {
            if (err)
              throw err
            console.log("Successfully moved the file!")
          })
    }
}