var jtbiApp = jtbiMeApp || (function() {
    let jtbiModel, jtbiView, jtbiController, that = {};

    function init() {
	   	window.addEventListener('load', function () {
	   		setTimeout(function(){ startView.showAll(); }, 300);
		}, false);
        
        jtbiModel = jtbiApp.jtbiModel({
	        
        });
        jtbiModel.init();
        
        startController = ActiveMeApp.startController({
	        preStartButton: document.querySelector("div#pre-start-button"),
	        firstStartButton: document.querySelector("span#start-neu"),
            startButton: document.querySelector("#start-button"),
            mannButton: document.querySelector("div.mann"),
            frauButton: document.querySelector("div.frau"),
            nameInput: document.querySelector("input#name"),
            backArrow: document.querySelector(".start span.arrow"),
            firstBackArrow: document.querySelector(".first-page span.arrow"),
            
        });
        startController.init();


        contentController = ActiveMeApp.contentController({
	        tabLinks: document.querySelectorAll("ul.nav li.nav-item a"),
            closeButtons: document.querySelectorAll("div.grid-item div.firstlvl-close-button"),
            menuItemCloseButtons: document.querySelectorAll("div.hambu-menu div.firstlvl-close-button"),
            tinyContent: document.querySelectorAll("div.tinycontent div.app"),
            tinyContentCloseButton: document.querySelectorAll("div.tinycontent.text div.close-button"),
            bodyPoints: document.querySelectorAll("div.koerper div.punkt")
        })
        contentController.init();






/**INIT**/

    function registerEvents() {
        /*Callbackfunktionen hier anders benennen als im Controller!*/
        startController.addEventListener("startButtonClicked", onStartButtonClickedApp);
        startController.addEventListener("firstStartButtonClicked", onFirstStartButtonClickedApp);
        startController.addEventListener("preStartButtonClicked", onPreStartButtonClickedApp);
    }


    


    that.init = init;
    return that;
}());