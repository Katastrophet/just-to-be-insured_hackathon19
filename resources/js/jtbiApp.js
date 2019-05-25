var jtbiApp = jtbiApp || (function() {
    let jtbiModel, jtbiView, jtbiController, that = {};

    function init() {
	   	window.addEventListener('load', function () {
	   		//setTimeout(function(){ startView.showAll(); }, 300);
		}, false);
        
        jtbiModel = jtbiApp.jtbiModel({
	        
        });
        jtbiModel.init();
        
		jtbiView = jtbiApp.jtbiView({
	        startPage: document.querySelector("div#name_container"),
        });
        jtbiView.init();
        
        jtbiController = jtbiApp.jtbiController({
	        nameInput: document.querySelector("div#name_container input#name"),
	        genderInput: document.querySelectorAll("div.gender_container i.gender"),
	        continueButton: document.querySelector("button.continue")
        });
        jtbiController.init();
		
		registerEvents();

		/**INIT**/
		}
		

	    function registerEvents() {
	        /*Callbackfunktionen hier anders benennen als im Controller!*/
	        jtbiController.addEventListener("continue", continueButtonClickedApp);
	        jtbiController.addEventListener("genderSelected", genderSelectedApp);
	        //startController.addEventListener("firstStartButtonClicked", onFirstStartButtonClickedApp);
	        //startController.addEventListener("preStartButtonClicked", onPreStartButtonClickedApp);
	    }
	    
	    function continueButtonClickedApp(event){
		    jtbiView.hideStart();
	    }
	    
	    function genderSelectedApp(event){
		    console.log(event.target);
		    jtbiView.selectGender(event.target);
	    }


    


    that.init = init;
    return that;
}());