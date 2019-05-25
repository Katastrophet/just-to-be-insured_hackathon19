//TODO: on window resize
jtbiApp.jtbiController = (function(elements) {

    let that = {}, events = [];

    function init() {
        elements.continueButton.addEventListener("click", continueButtonClicked);
        addEventListenerToGender();
    }
    
    function addEventListenerToGender(){
	    let genderArray = Array.prototype.slice.call(elements.genderInput);
		for (let i = 0; i < genderArray.length; i++) {
	      genderArray[i].addEventListener("click", genderSelected);
	    }
    }
    
    function genderSelected(event){
        emit({
            type: "genderSelected",
            target: event.target,
        });	    
    }
    
    function continueButtonClicked(event) {
        emit({
            type: "continue",
            target: event.target,
        });
    }
    
    function addEventListener(type, callback) {
        events[type] = callback;
    }

    function emit(event) {
        let type = event["type"],
            callback = events[type];
        callback(event);
    }

	that.addEventListener = addEventListener;
    that.init = init;
    return that;
});