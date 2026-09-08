import {EventEmitter} from "node:events";

function createDomElement(){
    const emitter = new EventEmitter();
    return{
        addEventListener(eventName , callback){
        emitter.on(eventName , callback);
        },
        removeEventListener(eventName , callback){
            emitter.off(eventName , callback);
        },
        dispatchEvent(event){
            emitter.emit(event.type,event);
        },
    };
}
const button = createDomElement();
button.addEventListener('Click' , ()=>{
    console.log("Button clicked")
})

button.dispatchEvent({
    type : "Click",  
});
function handleClick(event) {
    console.log(button clicked!` );
    console.log(`Event Type: ${event,type}`);
    console.log(`message: ${event.detail}`);
    } 
    button.dispatchEvent({
      type : "save"
    });
    button.addEventListner("save" , handleclick);