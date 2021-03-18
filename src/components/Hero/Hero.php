<?php
session_start();

include("../constants.php");

$username = Constants::USERNAME;
$host = Constants::HOST;
$database = Constants::DATABASE;
$password = Constants::PASSWORD;

//connecting to the database
$mysqli = new mysqli($host, $username, $password, $database);

//$userEmail = $_SESSION['email'];

$userEmail = "test@gmail.com"; //this is just to make sure I know we have the email... THIS IS NOT GOOD TO KEEP THOUGH

//displaying the user's information onto their homepage
$result = $mysqli->query("select firstName from user_information where email = '$userEmail'");
$info = $result->fetch_assoc();
$first = $info["firstName"];

$result = $mysqli->query("select lastName from user_information where email = '$userEmail'");
$info = $result->fetch_assoc();
$last = $info["lastName"];

$result = $mysqli->query("select membershipStatus from user_information where email = '$userEmail'");
$info = $result->fetch_assoc();
$memberStatus = $info["membershipStatus"];


$_SESSION['first'] = $first;

$dateInfo = $mysqli->query("select startDate, endDate, currentStatus from booking where ownerEmail = '$userEmail'");

include("../view/index.html");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP| MySQL | React.js | Axios Example</title>
    <script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <!-- Load Babel Compiler -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

</head>
<body>
</body>
</html>