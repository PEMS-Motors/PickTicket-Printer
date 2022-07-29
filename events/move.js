const fs = require('fs');
const increment = require('add-filename-increment');
//const pemsLogs = require('../events/logs.js');

module.exports = {
  fileMove: async function(hotPath, coldPath, safePath){
        if (fs.existsSync(coldPath)){
          incrementFileName = increment(coldPath);

          while(fs.existsSync(incrementFileName)){
            incrementFileName = increment(incrementFileName)            
          }

          fs.readFile(incrementFileName, 'utf-8', (err, data) => {
            fs.writeFile(safePath, data, err => {              
              console.log('Sent copy to safe folder: ', incrementFileName);
            });
          });

          fs.readFile(hotPath, 'utf-8', (err, data) =>{
            fs.writeFile(incrementFileName, data, err =>{
              console.log('Sent copy to cold folder: ', incrementFileName);
            });
          })
    
        }else{
          fs.readFile(hotPath, 'utf-8', (err, data) =>{
            fs.writeFile(safePath, data, err =>{
              console.log('Sent copy to safe folder: ', hotPath);
            });
          })

          fs.readFile(hotPath, 'utf-8', (err, data) =>{
            fs.writeFile(coldPath, data, err =>{
              console.log('Sent copy to cold folder: ', hotPath);
            });
          })
          
        }

        fs.unlink(hotPath, (err) => {
          if (err)
            console.log(err);
          console.log('Deleted from hot folder: ', hotPath);
        });
      }
}
