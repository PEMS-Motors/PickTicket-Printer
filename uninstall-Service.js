var Service = require('node-windows').Service;
var svc = new Service({
    name:'Pems Pickticket Software',
    description: 'Pickticket printing software coded in javascript by: Travis Finch',
    script: 'E:\\Pems-Pickticket-Printer\\index.js'
});

svc.on('uninstall', function(){
    console.log('Uninsatlled service');
})

svc.uninstall();