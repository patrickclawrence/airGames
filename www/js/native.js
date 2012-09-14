
function onDeviceReady(){
	alert('the device is now ready!');
}

var native = {
	TABS : ['NATIVE', 'AIRGAMES'],
	currentTab: undefined,	
	switchTabs: function (){
		
	/*	window.plugins.childBrowser.showWebPage('http://www.airgames.com',
            { 
            	showLocationBar: false,
            	showAddress: false,
            	showNavigationbar: false
        });	    	
	*/
	},

	bindEvents: function(){
		//document.getElementById('native').onclick = native.switchTabs;
		//document.getElementById('community').onclick = native.switchTabs;
	},
	switchTabs: function(tab){
		console.log(tab)
		if(tab != native.currentTab){			
			native.currentTab = tab;
			native.loadTab();
		}
	},
	loadTab: function(){
		switch (native.currentTab){
			case native.TABS[0]:				
				jQuery('#nativeContent').css('display', 'inline');
				jQuery('#gamesContent').css('display', 'none');
				break;
			case native.TABS[1]:				
				showWebPage("http://airgames.com", {showNavigationbar: false, showAddress: false, showWebPage: false, showLocationBar: false});
				jQuery('#gamesContent').css('display', 'inline');
				jQuery('#nativeContent').css('display', 'none');
				break;
			default:
				console.log('You are now in content ' + native.currentTab);
		}
	}
};

document.addEventListener("deviceready", function(){
	native.currentTab = native.TABS[0];
	native.bindEvents();	
}, false);
/*
jQuery(document).ready(function(){
	native.currentTab = native.TABS[0];
	native.bindEvents();	
});
*.




