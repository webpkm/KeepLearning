(function ($) {
    $.fn.fontSizeAdustable = function( options ) {
        var settings = $.extend({
        	useCookie: true,
        	defaultFontSize: 14,
        	cookieName: "DEFAULT_FONT_SIZE",
        	restoreButton: true,
        	restoreConfirm: true,
        	restoreConfirmMessage: "Are you sure to restore the font settings (Yes/No)",
        	alreadyRestoreMessage: "Already on default setting!",
        	incraseFontSizeStep:1,
        	buttonsIcons:true,
        	buttonText:true
        }, options );
        
 		var controls = function (settings){
 			var restoreButton = '<button type="button" id="restore">Restore</button>';
 			console.log(settings);
 			return '<div class="fontSizeAdustableControl pull-right"><button type="button" id="increase">+</button><button type="button" id="decrease">-</button>'+(settings.restoreButton?restoreButton:"")+'</div>';	
 		};
 		
 		$(document).on("click", ".fontSizeAdustableControl button", function(){
 			var t = $(this);
 			var font_size = parseInt($("body").css("font-size"));
 			if (t.attr("id") == "increase") {
 				font_size++;
 			}
 			else if (t.attr("id") == "restore") {
 				if(settings.restoreConfirm) {
	 				if(font_size == settings.defaultFontSize) {
	 					alert(settings.alreadyRestoreMessage);
	 					return;
	 				}
 				}
 				var confirm = settings.restoreConfirm ? window.confirm(settings.restoreConfirmMessage) : true;
 				if(confirm) {
 					font_size = settings.defaultFontSize;
 				}
 			}
 			else {
 				font_size--
 			}
 			setFontSize(font_size);
 		});
 		
 		// set the font size and apply it for the body 
 		var setFontSize = function (font_size){
 			$("body").css("font-size", font_size+"px");
 			settings.useCookie?cookieSetFontSize(font_size):"";
 		}
 		
 		// store the current font size in cookie
 		var cookieSetFontSize = function(font_size){
 			if(font_size == settings.cookieName) {
 				$.removeCookie(settings.cookieName);
 			}
 			$.cookie(settings.cookieName, font_size, { path: '/', expires: 7 });
 		}
 		
 		// append the controlls for increase, decrease and restore
        $(this).prepend(controls(settings));
        
        if(settings.useCookie) {
        	
        	// self invoking function to apply the cookie font size value
	        (function (settings) {
	        	if($.cookie(settings.cookieName) !== "undefined"){
		    		setFontSize($.cookie(settings.cookieName));
		    	}
	        })(settings);
        }
        return this;
    };
}(jQuery));