/* write functions that define the action for each event */
function showTip() {
	var sidTip
	sidTip = document.getElementById("sidTip");//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip.style.display = "inline";//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTip() { //this function hides the tool tip
	var sidTip;
	//first, get access to the tool tip HTML element
	sidTip = document.getElementById("sidTip");//obtain access to the HTML tool tip element using id "
	//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
	sidTip.style.display = "none";
}


/*Password --------------------------------------------------------------------------------------------------------------------*/
/* write functions that define the action for each event */
function showTipPassword() {
	var sidTipPassword
	sidTipPassword = document.getElementById("sidTipPassword");//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTipPassword.style.display = "inline";//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTipPassword() { //this function hides the tool tip
	var sidTipPassword;
	//first, get access to the tool tip HTML element
	sidTipPassword = document.getElementById("sidTipPassword");//obtain access to the HTML tool tip element using id "
	//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
	sidTipPassword.style.display = "none";
}

function init() {/* the init function links functions to appropriate events of corresponding HTML elements */
	/* create a variable named sid */
	var sid
	/* get access to the HTML element by its id "sid" and link it to sid */
	sid = document.getElementById("sid")
	/* link function showTip to the onmouseover event of sid */
	sid.onmouseover = showTip;
	/* link function hideTip to the onmouseout event of sid */
	sid.onmouseout = hideTip;

	/* create a variable named sid */
	var sid2
	/* get access to the HTML element by its id "sid" and link it to sid */
	sid2 = document.getElementById("Password")
	/* link function showTip to the onmouseover event of sid */
	sidPassword.onmouseover = showTipPassword;
	/* link function hideTip to the onmouseout event of sid */
	sidPassword.onmouseout = hideTipPassword;

}
/* link function init to the onload event of the window so that function init will be called when the page is loaded */
window.onload = init;
