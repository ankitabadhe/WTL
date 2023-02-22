let interval = setInterval(function(){
    console.log('Hello');
},500);

let timeout = setTimeout(function(){
    clearInterval(interval);
    console.log('Hello was executed 10 times');
},5500);
