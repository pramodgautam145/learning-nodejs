//Publisher

const EventEmitter = require("events").EventEmitter;
function GetCount(maxCount){
    let e  = new EventEmitter();
    setTimeout(()=>{
        e.emit("count",1)
    },1000)
    
    return e;

}

//Subscriber

const evt = GetCount(3);
evt.on("count",currCount =>{
 console.log({currCount})
})