var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('myEvent',()=>{
  	  console.log("First Event");
});

var myEventHandler = ()=>{
 	   console.log('Hello Events');
}
eventEmitter.on('myEvent',myEventHandler);

var fun = (msg) => {
 	   console.log('Message from function: '+msg);
};

eventEmitter.on('myEvent',fun);

eventEmitter.emit('myEvent',"Event occurred");

console.log('Default max listener for eventEmitter is : ',eventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(20);

console.log('Default max listener for eventEmitter is : ',eventEmitter.getMaxListeners());

let msg = function() {
  	  console.log('Hello World');
}

var fun = function() {
   	 console.log('Message from function: '+msg);
};

eventEmitter.addListener('myEvent',fun)

console.log(eventEmitter.listeners('myEvent'));
console.log('\n"myEvent" Listener Count: '+eventEmitter.listenerCount('myEvent'));

eventEmitter.removeAllListeners('myEvent');
console.log('\nRemoved All Listeners');
console.log('\n"myEvent" Listener Count: '+eventEmitter.listenerCount('myEvent'));
