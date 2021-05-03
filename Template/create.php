
<?php
session_start();
include("constants.php");

//this file will save the user input from create.html into the database.
$username = Constants::USERNAME;
$host = Constants::HOST;
$database = Constants::DATABASE;
$password = Constants::PASSWORD;

$mysqli = new mysqli($host, $username, $password, $database); 

// Check connection
if ($mysqli->connect_error) 
{
  die("Connection failed: " . $mysqli->connect_error);
}
else 
{
  //echo "Connected successfully";
}


$brandName =  mysqli_real_escape_string($mysqli,$_POST['bname']);
$missionStatement =  mysqli_real_escape_string($mysqli, $_POST['mStatement']);
$font =  mysqli_real_escape_string($mysqli, $_POST['input-font']); 
//$icon =  mysqli_real_escape_string($mysqli, $_POST['icon']); 
$primaryColor=  mysqli_real_escape_string($mysqli, $_POST['color1']); 
$secondaryColor=  mysqli_real_escape_string($mysqli, $_POST['color2']); 

//image only saves PNG files
$logo = addslashes(file_get_contents($_FILES['img']['tmp_name'])); //SQL Injection defence!

//inserting into the database
$query1 = "insert into user_info (brandName) value ('$brandName')";
$row1= $mysqli->query($query1); 

$query = "insert into template (brandName, missionStatement, font, color1, color2, logo) values ('$brandName', '$missionStatement', '$font', '$primaryColor', '$secondaryColor', '$logo')";
$row = $mysqli->query($query); 

$_SESSION['brandName'] = $brandName;

header("Location: ../newTemplate.html"); 
//exit();

?>