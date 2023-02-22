
	let events = require('events');
    let eventEmitter = new events.EventEmitter();
    
    let arr = [27,85,34,47,11,38,99,2];
    
    function printArr(arr) {
            console.log("\nArray: "+ arr);
    }
    
    function sortArr(arr) {
            arr.sort(function(n1,n2) {return n1-n2});
            console.log('Sorted array: ' + arr)
    }
    
    function reverseArr(arrRev) {
            arrRev.reverse();
            console.log('Reverse array: ' + arrRev)
    }
    
    function searchArr(arr, item) {
            let present = false;
            arr.forEach((element, index) => {
                if (element === item) {
                console.log('Item ' + item + ' is present in the array at position ' 
    + (index+1));
                    present = true;
                }
            });
            if(!present) {
                console.log('Item ' + item + ' is not present in the array');
            }
    }
    
    eventEmitter.on('sortEvent', printArr);
    eventEmitter.on('sortEvent', sortArr);
    eventEmitter.on('reverseEvent', printArr);
    eventEmitter.on('reverseEvent', reverseArr);
    eventEmitter.on('searchEvent', printArr);
    eventEmitter.on('searchEvent', searchArr);
    
    eventEmitter.emit('sortEvent', arr);
    eventEmitter.emit('reverseEvent', arr);
    eventEmitter.emit('searchEvent', arr, 38);
    eventEmitter.emit('searchEvent', arr, 98);
    