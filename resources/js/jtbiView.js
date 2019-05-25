//TODO: on window resize
jtbiApp.jtbiView = (function(elements) {

    let that = {}, events = [];

    function init() {
        //tileArray = Array.prototype.slice.call(elements.activeMeGrid.querySelectorAll("div.tile"));
    }
    
	function hideStart(){
		elements.startPage.classList.add("inactive");
	}
	
	function selectGender(target){
		let parentEl = target.parentNode;
		if(parentEl.querySelector(".selected")){
			parentEl.querySelector(".selected").classList.remove("selected");
		}
		target.classList.add("selected");
	}

	that.selectGender = selectGender;
	that.hideStart = hideStart;
    that.init = init;
    return that;
});