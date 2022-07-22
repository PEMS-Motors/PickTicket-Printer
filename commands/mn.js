// Copyright 2013 - 2020 George H. Slaterpryce III
// Copyright 2020 - 2022 Precision Electric Motor Sales

const config = require('../config.js');
const sendEmail = require('../modules/email.js');
const documentPrint = require('../events/print.js');
const documentMove = require('../events/move.js');
const path = require('path');
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
    command_mi: function () {        
        var dirwatch = require("../modules/DirectoryWatcher.js");
        var startEmailTimer = sendEmail.command_sendEmail;
        
        // Create a monitor object that will watch a directory
        // and all it's sub-directories (recursive) in this case
        // we'll assume you're on a windows machine with a folder 
        // named "sim" on your c: drive.
        // should work on both linux and windows, update the path
        // to some appropriate test directory of your own.
        // you can monitor only a single folder and none of its child
        // directories by simply changing the recursive parameter to
        // to false
        if (config.deployment.Production == 'true') {
            var Monitor = new dirwatch.DirectoryWatcher(hotFolderPath, true);
        }else{
            var Monitor = new dirwatch.DirectoryWatcher(devhotFolderPath, true);
        }

        // start the monitor and have it check for updates
        // every 6 seconds.
        Monitor.start(6000);
        
        /*
        // Log to the console when a file is removed
        Monitor.on("fileRemoved", function (filePath) {
            console.log("File Deleted: " + filePath);
        });

        // Log to the console when a folder is removed
        Monitor.on("folderRemoved", function (folderPath) {
            console.log("Folder Removed: " + folderPath);
        });

        // log to the console when a folder is added
        Monitor.on("folderAdded", function (folderPath) {
            console.log(folderPath);
        });

        // Log to the console when a file is changed.

        Monitor.on("fileChanged", function (fileDetail, changes) {
            for (var key in changes) {
                console.log("File Changed: " + fileDetail.fullPath);
                console.log("  + " + key + " changed...");
                console.log("    - From: " + ((changes[key].baseValue instanceof Date) ? changes[key].baseValue.toISOString() : changes[key].baseValue));
                console.log("    - To  : " + ((changes[key].comparedValue instanceof Date) ? changes[key].comparedValue.toISOString() : changes[key].comparedValue));
            }

        });
        */

        // log to the console when a file is added.
        Monitor.on("fileAdded", function (fileDetail) {
            
            // Production paths
            const hotPath = path.join(hotFolderPath + '\\' + fileDetail.fileName)
            const coldPath = path.join(coldFolderPath + '\\' + fileDetail.fileName)
            const safePath = path.join(safeFolderPath + '\\' + fileDetail.fileName)

            // Development paths
            const devhotPath = path.join(devhotFolderPath + '\\' + fileDetail.fileName)
            const devcoldPath = path.join(devcoldFolderPath + '\\' + fileDetail.fileName)
            const devsafePath = path.join(devsafeFolderPath + '\\' + fileDetail.fileName)

            clearTimeout(globalTimer);
            //console.log('Just reset the Email timer back to 0');
            console.log("File Name:", fileDetail.fileName, ' Has just been added to hot folder!');
            if (config.deployment.Production == 'true') {
                documentPrint.filePrint(hotFolderPath, fileDetail.fileName, printer);
                documentMove.fileMove(hotPath, coldPath, safePath);
            }else{
                documentPrint.filePrint(devhotFolderPath, fileDetail.fileName, devprinter);
                documentMove.fileMove(devhotPath, devcoldPath, devsafePath);
            }
            global.globalTimer = setTimeout(startEmailTimer, 1800000); // 30 min timer to trigger alert email
            //console.log('Just started a new 30m Timer!');
        });

        if (config.deployment.Production == 'true') {
            console.log("MN Scanning has started in production enviroment!");
        }else{
            console.log("MN Scanning has started in development enviroment!");
        }
        
    }
};