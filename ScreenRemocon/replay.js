var getMainDiv = function(){
	var a = document.createElement("div");
	//a.style.visibility = "hidden";
	a.innerHTML = '<div dir="ltr" id="kbda"><div id="kbd_0"/></div>';
	a.style.position = 'absolute';
	a.style.top = '100px';
	a.style.left = '100px';
	a.setAttribute("id", "kbd");
	a.className = "outerbox";
	
	return a;
};

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : 116 });
}

var setKeyboardLayer = function(){
	$("#kbd_0").html('<table style="margin-left:auto;margin-right:auto;empty-cells:show;border-collapse:collapse" border="0" cellspacing="0" cellpadding="1px"><tbody><tr align="center"><tr>Virtual Remote</tr><div id="kbd_mka" style="display:block"><table border="0" cellspacing="0" cellpadding="0" style="border:none;background-color:#ebeef8">	<td style="margin:0;width:24px"><input type="button" class="goog-button goog-button-fixed" id="K_RED" value="RED"></td><td style="margin:0;width:24px"><input type="button" class="goog-button goog-button-fixed" id="K_BLUE" value="BLUE"></td><td style="margin:0;width:24px"><input type="button" class="goog-button goog-button-fixed" id="K_YELLOW" value="YELLOW"></td><td style="margin:0;width:24px"><input type="button" class="goog-button goog-button-fixed" id="K_GREEN" value="GREEN"></td></tr></tbody></table></table>');
	$("#K_BLUE").click(function(){ 
		//jQuery.event.trigger({ type : 'keydown', which : "e".charCodeAt(0) });		
	});
	$("#K_RED").click(function(){ 
		//jQuery.event.trigger({ type : 'keypress', which : "e".charCodeAt(0) });		
		//jQuery.event.trigger({ type : 'keydown', which : 40 });
		//simulateKeyPress("e");
		
		var press = jQuery.Event("keydown");
		press.ctrlKey = false;
		//press.which = 116;
		press.which = 40;
		//$(document).trigger(press);
		$("input").trigger(press);
	});
	$("#K_YELLOW").click(function(){ 
		alert('nike');
	});
	$("#K_GREEN").click(function(){ 
		alert('nike');
	});
};

function addListeners(){
    document.getElementById('kbd').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
    var div = document.getElementById('kbd');
  div.style.position = 'absolute';
  div.style.top = e.clientY + 'px';
  div.style.left = e.clientX + 'px';
}

var pollingCheckAndSeek = function(){
    $('body').append(getMainDiv());
	setKeyboardLayer();
	addListeners();
};


setTimeout(function(){
    pollingCheckAndSeek();
}, 1000);
