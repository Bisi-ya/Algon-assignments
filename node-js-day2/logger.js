const EventEmitter =require('events');
//const emitter =new EventEmitter();
var url='http://mylogger.io/log';


//console.log(__filename);

class Logger extends EventEmitter{
log(message){
    console.log(message);
    this.emit('messageLogged',{id:1,url:'https://'});
}
}

module.exports=Logger;
