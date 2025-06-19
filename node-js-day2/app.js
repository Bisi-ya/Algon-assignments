function sayHello(name){
    console.log('Hello'+name );
}
sayHello('Bithu');
console.log(window);
setTimeout();
clearTimeout();
setInterval();*/
console.log(module);
const logger=require('./logger');
console.log(logger);
logger.log('message');
logger('message');
const path = require('node:path');
var pathObj=path.parse(__filename);
console.log(pathObj);
const os=require('node:os');
const freeMemory=os.freemem();
const totalMemory=os.totalmem();
console.log(`Total memory ${totalMemory}`);
console.log(`Free memory ${freeMemory}`);*
const fs=require('node:fs');
const files=fs.readdirSync('./');
const files=fs.readdir('$',function(err,files){
    if(err) console.log("Error",err);
     else console.log('Result',files);   
});
console.log(files); 
// events module
const EventEmiiter = require('events');
const Logger=require('./logger');
const logger=new Logger();
logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
})
logger.log('message');
//Raise an event
//emitter.emit('messageLogged',{id:1,url:'https://'});


