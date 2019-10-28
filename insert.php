<?php  
set_time_limit(0);
try {

 
  $DBH = new PDO("mysql:dbname=sunfra;host=localhost", 'root', 'password' );

  $DBH->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
    echo $e->getMessage();
}

// print_r($_POST);die();
$data= $_POST;
if(!empty($data)){
	$username = $data['username'];
	$emailid = $data['emailid'];
	$firstname = $data['firstname'];
	$lastname = $data['lastname'];
	$password = $data['password'];
	$address = $data['address'];
	$address2 = $data['address2'];
	$city = $data['city'];
	$state = $data['state'];
	$pincode = $data['pincode'];
	$country = $data['country'];
	$mobileno = $data['mobileno'];
	$website = $data['website'];

	$stmt = $DBH->prepare("INSERT INTO useregistration(username,emailid,firstname,lastname,password,address1,address2,city,state,pincode,country,mobileno,website) VALUES (?, ?, ?, ?, ?,?,?,?,?,?,?,?,?)");
			
			$stmt->bindParam(1, $username);
			$stmt->bindParam(2, $emailid);
			$stmt->bindParam(3, $firstname);
			$stmt->bindParam(4, $lastname);
			$stmt->bindParam(5, $password);
			#$stmt->bindParam(3, $newcode);
			$stmt->bindParam(6, $address);
			$stmt->bindParam(7, $address2);
			$stmt->bindParam(8, $city);
			$stmt->bindParam(9, $state);
			$stmt->bindParam(10, $pincode);
			$stmt->bindParam(11, $country);
			$stmt->bindParam(12, $mobileno);
			$stmt->bindParam(13, $website);

			$stmt->execute();

			echo "1"; die();

}else{
	return false;
}


?>