
<?php 

//this file retrieves the information stored in the database
//it also holds the css styling used in newTemplate.html

//echo 'hello';
session_start();
include("constants.php");

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
  echo "Connected successfully";
}

$user = $_SESSION['brandName'];
//$brandName= "hello"; 
//retirveing the color 1
$query = "select color1 from template where brandName = '$user' ";
$result = $mysqli->query($query);
$row = $result->fetch_assoc();
$color1 = $row['color1'];

//retirveing the color 2
$query1 = "select color2 from template where brandName = '$user' ";
$result1 = $mysqli->query($query1);
$row1 = $result1->fetch_assoc();
$color2 = $row1['color2'];

//retireving the brand name
$query2 = "select brandName from template where brandName = '$user' ";
$result2 = $mysqli->query($query2);
$row2 = $result2->fetch_assoc();
$brandName = $row2['brandName'];

//retireving the font
$query3 = "select font from template where brandName = '$user'";
$result3 = $mysqli->query($query3);
$row3 = $result3->fetch_assoc();
$font = $row3['font'];


//retireving the mission statement
$query4 = "select missionStatement from template where brandName = '$user'";
$result4 = $mysqli->query($query4);
$row4 = $result4->fetch_assoc();
$missionStatement = $row4['missionStatement'];

//retireving the image

$query5 = "select logo from template where brandName = '$user'";
$result5 = $mysqli->query($query5);
$row5 = $result5->fetch_assoc();
$logo = $row5['logo'];
//$img = file_get_contents($_FILES[$logo]['tmp_name']); 
$img = base64_encode( $logo );
//testing
$brand = "Brad";
$c = 'yellow';
$green = '#008400';
$image = 'sb1.png';
echo $c ;


//echo $missionStatement;
//echo '<img src="data:image/png;base64, ' . base64_encode( $logo->load() ). ' " />';
//echo ' <img src="data:image/jpeg;base64,'.base64_encode($row5['logo']).'"/>';
// $row5['NAME'].   class="caption" <div ><h3> </h3> .  '</div>'
header('Content-type: text/css,image/png; charset: UTF-8');  //necessary 
//echo $logo;
//header('Content-type: image/jpeg');
//echo "<td>" .
//" <img src = 'data:image/png;base64," .base64_encode($row['logo'])." 'width = '100px' height='100px'/ >" . " </td>" ;



//include("newTemplate.html"); // colors do not appear or font
?>

<style>



.page1 {

  background-color: <?= $color1 ?>; 
  border-color: blue;
  width: 350px;
  height: 150px;
  padding: 0px;
  right: -500px;
  float: right;
  top: -150px;
  margin: 10;
  

}

@import url('https://fonts.googleapis.com/css2?family=Acme&family=Anton&family=Antonio:wght@600&family=Oswald&family=Roboto:wght@100family=Arsenal&family=Capriola&display=swap');
.fontChosen{
  font-family: <?= $font?>, sans-serif; 
  display: flex;
  border-color: brown;
  align-items: center;
  justify-content: center;
  color: black;
  height: 100px;
}

.page2 {

  color: <?= $color2 ?> ; 

}

.page3 {

  color: <?= $color1 ?> ; 
}


.brandingGuidelinesStyle {

background-color: <?= $color1 ?>;
font-family: <?= $font?>, sans-serif; 
text-align: center;


}

.overviewStyle
{
  font-family: <?= $font?>, sans-serif; 
  color: <?= $color1 ?>;
}

.missionStatementStyle::before{
  font-family: <?= $font?>, sans-serif; 
  color: <?= $color1 ?>;
  content: "<?php echo $missionStatement?>"
}

.tableOfContentsStyle{
  color: <?= $color1 ?>;
  font-family: <?= $font?>, sans-serif; 

}

.listStyles{
  color: <?= $color2 ?>;
  font-family: <?= $font?>, sans-serif; 
}

.logoPageStyle{
  background-color: <?= $color1 ?>;
  page-break-after: always
  
}

.logoWordStyle{
  font-family: <?= $font?>, sans-serif; 
}

.primaryLogoStyle{
  font-family: <?= $font?>, sans-serif; 
  color: <?= $color1 ?>;

}

.fontStyle{
  font-family: <?= $font?>, sans-serif; 
  color: <?= $color1 ?>;
}

.fontChosenStyle::before{
  font-family: '<?= $font?>', sans-serif; 
  color: <?= $color1 ?>;
  content: "<?php echo $font?>"
}

.fontSecondaryStyle{
  font-family: <?= $font?>, sans-serif; 

}

.secondaryColor{
  background-color: <?= $color2 ?>;

}

.primaryColor{
  background-color: <?= $color1 ?>;

}

.imageStyle{
  width: 300px;
  height: 300px;
  background-image: url(' data:image/png;base64 , <?= $img ?> ');
  background-repeat: no-repeat;
  background-size: contain;
}

 </style>


 