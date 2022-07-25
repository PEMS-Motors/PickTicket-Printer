const { Console } = require("console");
const fs = require('fs');

// make a new logger
module.exports = {
        logger: async function(data, data2){
        fs.createWriteStream(global.logNormal, data + ' ' + data2);        
        }
};