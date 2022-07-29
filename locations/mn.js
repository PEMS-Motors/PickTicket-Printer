// Copyright 2020 - 2022 Precision Electric Motor Sales

const config = require('../config.js');
const documentPrint = require('../events/print.js');
const fs  = require('fs');
const processFileName = require('../events/processFileName.js');

// Production settings
const hotFolderPath = config.hotFolder.MN;
const coldFolderPath = config.coldFolder.MN;
const safeFolderPath = config.safeFolder.MN;
const printer = config.whsPrinters.MN;
// Development settings
const devhotFolderPath = config.devhotFolder.MN;
const devcoldFolderPath = config.devcoldFolder.MN;
const devsafeFolderPath = config.devsafeFolder.MN;
const devprinter = config.devwhsPrinters.MN;

module.exports = {
    monitor_mi: function (file) {
        if (config.deployment.Production == true){
            const picktickets = fs.readdirSync(hotFolderPath, (file));

            picktickets.forEach(
                pickticket => {         
                    var finalTicketName = processFileName.process(pickticket,coldFolderPath);                  
                    fs.renameSync(hotFolderPath + '\\' + pickticket, hotFolderPath + '\\' + finalTicketName);
                    this.processFolder(finalTicketName);
                }
            );

        }else{
            const picktickets = fs.readdirSync(devhotFolderPath, (file));

            picktickets.forEach(
                pickticket => {         
                    var finalTicketName = processFileName.process(pickticket,devcoldFolderPath);                 
                    fs.renameSync(devhotFolderPath + '\\' + pickticket, devhotFolderPath + '\\' + finalTicketName);
                    this.processFolder(finalTicketName);
                }
            );
        }
    },

    processFolder: function(ticketName) {
            if (config.deployment.Production == true){
                
                try {
                    documentPrint.filePrint(hotFolderPath, ticketName, printer);

                    fs.copyFileSync(hotFolderPath + '\\' + ticketName, coldFolderPath + '\\' + ticketName);
                    fs.copyFileSync(hotFolderPath + '\\' + ticketName, safeFolderPath + '\\' + ticketName);
                    console.log(ticketName + ' Has just been coppied to safe folder and cold folder.');

                    fs.unlinkSync(hotFolderPath + '\\' + ticketName);
                    console.log(ticketName + ' Was just removed from the hot folder.');
                } catch(err) {
                    console.log(err.code);
                }

            }else{

                try {
                    documentPrint.filePrint(devhotFolderPath, ticketName, devprinter);

                    fs.copyFileSync(devhotFolderPath + '\\' + ticketName, devcoldFolderPath + '\\' + ticketName);
                    fs.copyFileSync(devhotFolderPath + '\\' + ticketName, devsafeFolderPath + '\\' + ticketName);
                    console.log(ticketName + ' Has just been coppied to safe folder and cold folder.');

                    fs.unlinkSync(devhotFolderPath + '\\' + ticketName);
                    console.log(ticketName + ' Was just removed from the hot folder.');
                } catch(err) {
                    console.log(err.code);
                }

            }

    }        
};