const fs = require('fs');

module.exports = {
    fileMove: async function(hotPath, coldPath, safePath){
      fs.copyFile(hotPath, safePath, function (err) {
        if (err)
          throw err;
      

        fs.readFile(hotPath, function (err, data){
          if (err) 
            throw err;

            fs.writeFile(coldPath, data, function (err) {
              if (err) 
                throw err;
            });

            fs.unlink(hotPath, function (err) {
              if (err)
                throw err;
            });          
          });
        });
    }
}