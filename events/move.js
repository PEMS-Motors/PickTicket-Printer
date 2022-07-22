const fs = require('fs');
const increment = require('add-filename-increment');

module.exports = {
  fileMove: async function(hotPath, coldPath, safePath){
        if (fs.existsSync(coldPath)){
          incrementFileName = increment(coldPath);

          fs.copyFile(hotPath, safePath, (err) => {
            if (err)
            console.log(" Error found:", err);
          })          
          
          while(fs.existsSync(incrementFileName)){
            incrementFileName = increment(incrementFileName)            
          }

          fs.copyFile(hotPath, incrementFileName, (err) => {
            if (err)
                console.log("Error Found:", err);
          })

          console.log('File Name: ', incrementFileName, ' Has just been moved!');
    
        }else{
          fs.copyFile(hotPath, safePath, (err) => {
            if (err)
            console.log(" Error found:", err);
          })

          fs.copyFile(hotPath, coldPath, (err) => {
            if (err)
                console.log("Error Found:", err);

          })
          console.log
          
        }
        fs.unlink(hotPath, (err) => {
          if (err)
            console.log("Error Found:", err);
        });
      }
}
