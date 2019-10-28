
var username = localStorage.getItem("username");
$('#username').val(username);
var email = localStorage.getItem("email");
$('#emailid').val(email);
var lastname = localStorage.getItem("lastname");
$('#lastname').val(lastname);
var firstname = localStorage.getItem("firstname");
$('#firstname').val(firstname);


$('#nxtbtn').on('click',function(){

$('.errormsg').html('');
	var username = $('#username').val();
	var email = $('#emailid').val();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var password = $('#password').val();
	var cnfpassword = $('#cnfpassword').val();

	$('.errormsg').append(validateBasicForm())
	localStorage.setItem("username", username);
	localStorage.setItem("email", email);
	localStorage.setItem("firstname", firstname);
	localStorage.setItem("lastname", lastname);
	
	if(validateBasicForm()==''){
		$('#add_details').removeClass('hide');
	}
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateBasicForm(){

	var username = $('#username').val();
	var email = $('#emailid').val();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var password = $('#password').val();
	var cnfpassword = $('#cnfpassword').val();
	var returnmsg= '';

	if(username==""){
		// alert("Enter username");
		returnmsg +="Enter username";
	}
	
	if(!validateEmail(email)){
		//alert("Enter Email ID");
		returnmsg +="Enter Valid Email ID";
	}

	if(firstname==""){
		// alert("Enter firstname");
		returnmsg +=" <br/>Enter firstname";
	}
	
	if(lastname==""){
		// alert("Enter lastname");
		returnmsg +=" <br/>Enter lastname";
	}

	if(password==""){
		// alert("Enter password");

		returnmsg +=" <br/>Enter password";
	}
	if(cnfpassword==""){
		//alert("Enter cnfpassword");
		returnmsg +=" <br/>Enter cnfpassword";
	}

	if(password != cnfpassword ){
		// alert("");
		returnmsg +=" <br/>confirm password not matching with password";
	}
	return returnmsg;
}



function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

function validateAdditionalForm(){

	var address = $('#address').val();
	var address2 = $('#address2').val();
	var city = $('#city').val();
	var state = $('#state').val();
	var pincode = $('#pincode').val();
	var country = $('#country').val();
	var website = $('#website').val();
	var mobileno = $('#mobileno').val();
	var returnmsg= '';


	if(address==""){
		// alert("Enter username");
		returnmsg +="Enter Address1";
	}
	if(address2==""){
		//alert("Enter Email ID");
		returnmsg +="Enter address2";
	}

	if(city==""){
		// alert("Enter firstname");
		returnmsg +=" <br/>Enter city";
	}
	
	if(state==""){
		// alert("Enter lastname");
		returnmsg +=" <br/>Enter state";
	}

	if(pincode==""){
		// alert("Enter password");

		returnmsg +=" <br/>Enter pincode";
	}
	if(country==""){
		//alert("Enter cnfpassword");
		returnmsg +=" <br/>Enter country";
	}
	if(mobileno==""){
		//alert("Enter cnfpassword");
		returnmsg +=" <br/>Enter mobileno and it should be digit ";
	}
	if(mobileno.length > 10 || mobileno.length < 10 ){
		//alert("Enter cnfpassword");
		returnmsg +=" <br/>Enter mobileno and it should be ten digit";
	}

	if(!isUrlValid(website)){
		returnmsg +=" <br/>Please enter correct website detail";
	}

	return returnmsg;
}

$('#regbtn').on('click',function(){
	$('.errormsg').html('');
var basicvalid= validateBasicForm();
var addrvalid = validateAdditionalForm();
if(basicvalid=='' && addrvalid==''){

	var data= $("#registerfrm").serialize();

	// console.log(data); return false;
	$.ajax({
		url:"insert.php",
		method:"POST",
		data:data,
		datatype:'json',
		async:false,

		success: function(response){

			if(response=='1'){
				$('.succmsg').append(' Record Updated Successfully');
				$('.fields').val('');
				localStorage.clear();
				// localStorage.removeItem('username');
				// localStorage.removeItem('email');
				// localStorage.removeItem('firstname');
				// localStorage.removeItem('lastname');
			}
		}

	});
}else{
$('.errormsg').append(basicvalid);
$('.errormsg').append(addrvalid);
}


	

});







