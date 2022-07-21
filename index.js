// Copyright 2020 - 2022 Precision Electric Motor Sales

const fs = require('fs');
const config = require('./config.js');
const sendEmail = require('./modules/email.js');

// Start email timer
var startEmailTimer = sendEmail.command_sendEmail;
// Set some globals to call in other files
global.globalTimer = setTimeout(startEmailTimer, 1800000); // 30 min timer to trigger alert email
global.globalDay = new Date().getDay(); // Current day 0-6 (0 = sunday monday = 1)
global.globalHours = new Date().getHours(); // Current hours of the 0-23  (0 = midnight 1am = 1)
// Restart the timer after it reaches the end
restartTimer = function () {
    global.globalTimer = setTimeout(startEmailTimer, 1800000); // 30 min timer to trigger alert email
};


function startMonitors(){
/*****************************************************
 *             Bring Over Location Commands          *
 ****************************************************/
 const ca = require('./commands/ca.js'); const csh = require('./commands/csh.js');
 const ct = require('./commands/ct.js'); const emw = require('./commands/emw.js');
 const fl = require('./commands/fl.js'); const il = require('./commands/il.js');
 const md = require('./commands/md.js'); const mi = require('./commands/mi.js');
 const mn = require('./commands/mn.js'); const mo = require('./commands/mo.js');
 const tx = require('./commands/tx.js');  
 
 /*****************************************************
  *             Start Scanning Folders                *
  ****************************************************/
 
 // Log to console the actual path we are starting to scan then start 
 // To scan that folder after.
 if (config.liveLocation.MI == 'true'){
 console.log("Started to Monitor " + config.hotFolder.MI); mi.command_mi(0);}
 if (config.liveLocation.IL == 'true'){
 console.log("Started to Monitor " + config.hotFolder.IL); il.command_il(0);}
 if (config.liveLocation.SC == 'true'){
 console.log("Started to Monitor " + config.hotFolder.SC); sc.command_sc(0);}
 if (config.liveLocation.MO == 'true'){
 console.log("Started to Monitor " + config.hotFolder.MO); mo.command_mo(0);}
 if (config.liveLocation.CA == 'true'){
 console.log("Started to Monitor " + config.hotFolder.CA); ca.command_ca(0);}
 if (config.liveLocation.TX == 'true'){
 console.log("Started to Monitor " + config.hotFolder.TX); tx.command_tx(0);}
 if (config.liveLocation.MN == 'true'){
 console.log("Started to Monitor " + config.hotFolder.MN); mn.command_mn(0);}
 if (config.liveLocation.CT == 'true'){
 console.log("Started to Monitor " + config.hotFolder.CT); ct.command_ct(0);}
 if (config.liveLocation.MD == 'true'){
 console.log("Started to Monitor " + config.hotFolder.MD); md.command_md(0);}
 if (config.liveLocation.FL == 'true'){
 console.log("Started to Monitor " + config.hotFolder.FL); fl.command_fl(0);}
 if (config.liveLocation.CSH == 'true'){
 console.log("Started to Monitor " + config.hotFolder.CSH); csh.command_csh(0);}
 if (config.liveLocation.EMW == 'true'){
 console.log("Started to Monitor " + config.hotFolder.EMW); emw.command_emw(0);}
}

startMonitors();