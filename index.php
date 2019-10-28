<html>
<head>
<title>  santosh</title>
<style type="text/css">
	
.hide{ display:none; }

.fields {margin:10px;}
.btn {margin:10px;}
.errormsg {color:red;}
.succmsg {color:green;}
</style>
</head>
<body>
	
<form  name ="registerfrm" id = "registerfrm" method ="post">

	<div id="basic_details">
		<h1> Basic Details</h1>
		<div class= "errormsg"></div>
		<div class= "succmsg"></div>

		<label> Username</label> 
		<input type= "text" class="fields" name="username" id= "username" />
		<br/>
		<label> Email</label> 
		<input type= "text" class="fields" name="emailid" id= "emailid" />
		<br/>
		<label> FirstName</label> 
		<input type= "text" class="fields" name="firstname" id= "firstname" />
		<br/>
		<label> LastName</label> 
		<input type= "text" class="fields" name="lastname" id= "lastname" />
		<br/>
		<label> Password</label> 
		<input type= "Password" class="fields" name="password" id= "password" />
		<br/>
		<label> ConfirmPassword</label> 
		<input type= "Password" class="fields" name="cnfpassword" id= "cnfpassword" />
	</div>
<input type ="button" class="nxtbtn" id="nxtbtn" value="Next" />
<hr>
	<div id="add_details" class="hide">
		<h1> Additional Details</h1>
		<label> Address </label>
		<input type ="textbox" class="fields" id="address" name="address" placeholder="addressline2"/>
		<input type ="textbox" class="fields" id="address2" name="address2" placeholder="addressline2" />

		<input type ="textbox" class="fields" id="city" name="city" placeholder="city" />
		<input type ="textbox" class="fields" id="state" name="state" placeholder="state" />
		<input type ="textbox" class="fields" id="pincode" name="pincode" placeholder="Postal/Zip code" />

		<select class="fields country" id ="country" name ="country">
			
			<option value="India">India</option>
		</select>
		<br/>
		<label> Phone No </label>
		<input type ="number" class="fields" id="mobileno" name="mobileno" maxlength="10" placeholder="Mobile NO" />

		<label> Website  </label>
		<input type ="textbox" class="fields" id="website" name="website" placeholder="website" />
		<br/>
	
	</div>
<br/><br/>
<input type ="button" class="btn prev" id="prev" value = "Previous" /> 
<input type ="button" class="btn regbtn" id="regbtn" value ="register" /> 
</form>

</body>
<script type="text/javascript" src="jQuery_v3.4.1.js"> </script>
<!-- <script type="text/javascript" src="jquery.validate.min.js"> </script> -->
<script type="text/javascript" src="main.js"> </script>

</html>