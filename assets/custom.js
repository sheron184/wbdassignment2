//functions
function login(){
	var password = "1234";
	var username = "sheron";

	var userpsswd = document.getElementById("psswd").value;
	var uname = document.getElementById("uname").value;

	if(userpsswd == password && uname == username){
		document.cookie = `logged_in=${uname}; expires=Thu, 7 Dec 2022 12:00:00 UTC`;
		window.location.replace("manageallstudents.html");
	}else{
		document.querySelector(".error").innerHTML = "Invalid Username Or Password!";
	}
}
window.addEventListener('load',function(){
	if(document.cookie != ""){
		window.location.replace("manageallstudents.html");
	}
	//elements define
	let loginForm = document.getElementById("loginForm");
	let clear = document.getElementById("clear");
	//actions
	loginForm.addEventListener('submit',function(e){
		e.preventDefault();
		var inputs = loginForm.querySelectorAll("input");
		empty = 0;
		inputs.forEach(input=>{ 
			if(input.value == ""){ 
				empty++;
			}
		});
		if(empty==0){
			login();
		}else{
			document.querySelector(".error").innerHTML = "Please fill all feilds!";
		}
	});
	clear.addEventListener('click',function(){
		document.getElementById("psswd").value = "";
		document.getElementById("uname").value = "";
	});
});