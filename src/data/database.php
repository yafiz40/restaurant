<?php require 'connection.php';
	if ($_GET['keyword'] == 'tables') {
		$data = [];
		$query = mysqli_query($conn, "SELECT * FROM tables");
		while($row = mysqli_fetch_row($query)){
			array_push($data,$row[1]);
		}
		echo json_encode($data);
	}else if ($_GET['keyword'] == "orders") {
		echo "string2";
	}
 ?>