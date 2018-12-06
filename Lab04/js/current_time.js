var customPrototype = Object.create(HTMLButtonElement.prototype);

customPrototype.getTime = function(){
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    return datetime;
}

class CustomTimer extends HTMLElement {
    constructor() {
        super();
        var currentdate = new Date(); 
        var datetime =  currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        document.close();
        document.write(datetime);
    }
}
    customElements.define('custom-timer', CustomTimer);