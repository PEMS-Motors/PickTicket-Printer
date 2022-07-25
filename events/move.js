const fs = require('fs');
const increment = require('add-filename-increment');
const pemsLogs = require('../events/logs.js');

module.exports = {
  fileMove: async function(hotPath, coldPath, safePath){
        if (fs.existsSync(coldPath)){
          incrementFileName = increment(coldPath);
          
          fs.readFile(hotPath, 'utf-8', (err, data) => {
            fs.writeFile(safePath, data, err => {
              //console.error(err);
            });
          });
          
          while(fs.existsSync(incrementFileName)){
            incrementFileName = increment(incrementFileName)            
          }

          fs.readFile(hotPath, 'utf-8', (err, data) =>{
            fs.writeFile(incrementFileName, data, err =>{
              //console.error(err);
            });
          })
    
        }else{
          fs.readFile(hotPath, 'utf-8', (err, data) =>{
            fs.writeFile(safePath, data, err =>{
              //console.error(err);
            });
          })

          fs.readFile(hotPath, 'utf-8', (err, data) =>{
            fs.writeFile(coldPath, data, err =>{
              //console.error(err);
            });
          })
          
        }
        fs.unlink(hotPath, (err) => {
          if (err)
        });
      }
}
