// Copyright 2020 - 2022 Precision Electric Motor Sales

const fs = require('fs');
const config = require('./config.js');

if (config.deployment.Production == 'true'){ 
    global.logNormal = config.logs.normal;
    global.logError = config.logs.error;
}else{ 
    global.logNormal = config.devlogs.normal;
    global.logError = config.devlogs.error;
}



function startMonitors(){
/*****************************************************
 *             Bring Over Location Commands          *
 ****************************************************/
 const ca = require('./locations/ca.js'); const csh = require('./locations/csh.js');
 const ct = require('./locations/ct.js'); const emw = require('./locations/emw.js');
 const fl = require('./locations/fl.js'); const il = require('./locations/il.js');
 const md = require('./locations/md.js'); const mi = require('./locations/mi.js');
 const mn = require('./locations/mn.js'); const mo = require('./locations/mo.js');
 const tx = require('./locations/tx.js'); const sc = require('./locations/sc.js');
 
 /*****************************************************
  *             Start Scanning Folders                *
  ****************************************************/
 
 // Log to console the actual path we are starting to scan then start 
 // To scan that folder after. Starts an interval of 6 seconds to run that function


 if (config.liveLocation.MI == 'true'){
    console.log("Started to Monitor " + config.hotFolder.MI); setInterval(() => { mi.monitor_mi(); }, 6000);}
 if (config.liveLocation.IL == 'true'){
    console.log("Started to Monitor " + config.hotFolder.IL); setInterval(() => { il.monitor_il(); }, 6000);}
 if (config.liveLocation.SC == 'true'){
    console.log("Started to Monitor " + config.hotFolder.SC); setInterval(() => { sc.monitor_sc(); }, 6000);}
 if (config.liveLocation.MO == 'true'){
    console.log("Started to Monitor " + config.hotFolder.MO); setInterval(() => { mo.monitor_mo(); }, 6000);}
 if (config.liveLocation.CA == 'true'){
    console.log("Started to Monitor " + config.hotFolder.CA); setInterval(() => { ca.monitor_ca(); }, 6000);}
 if (config.liveLocation.TX == 'true'){
    console.log("Started to Monitor " + config.hotFolder.TX); setInterval(() => { tx.monitor_tx(); }, 6000);}
 if (config.liveLocation.MN == 'true'){
    console.log("Started to Monitor " + config.hotFolder.MN); setInterval(() => { mn.monitor_mn(); }, 6000);}
 if (config.liveLocation.CT == 'true'){
    console.log("Started to Monitor " + config.hotFolder.CT); setInterval(() => { ct.monitor_ct(); }, 6000);}
 if (config.liveLocation.MD == 'true'){
    console.log("Started to Monitor " + config.hotFolder.MD); setInterval(() => { md.monitor_md(); }, 6000);}
 if (config.liveLocation.FL == 'true'){
    console.log("Started to Monitor " + config.hotFolder.FL); setInterval(() => { fl.monitor_fl(); }, 6000);}
 if (config.liveLocation.CSH == 'true'){
    console.log("Started to Monitor " + config.hotFolder.CSH); setInterval(() => { csh.monitor_csh(); }, 6000);}
 if (config.liveLocation.EMW == 'true'){
    console.log("Started to Monitor " + config.hotFolder.EMW); setInterval(() => { emw.monitor_emw(); }, 6000);}

}

startMonitors();