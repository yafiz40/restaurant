<?php require 'connection.php';
	if ($_GET['keyword'] == 'tables') {
		$data = [];
		$query = mysqli_query($conn, "SELECT * FROM tables");
		while($row = mysqli_fetch_row($query)){
			array_push($data,$row[1]);
		}
		echo json_encode($data);
	}else if ($_GET['keyword'] == "reserve") {
		$id = $_GET['id'];
		mysqli_query($conn, "UPDATE tables SET status = 'ordered' WHERE id=$id");
	}else if ($_GET['keyword'] == "orders") {
		$food = json_decode(utf8_encode($_GET['order']),true);
		for ($i=0; $i < count($food); $i++) { 
			$name = array_keys($food)[$i];
            $price = $food[array_keys($food)[$i]][0];
            $portion = $food[array_keys($food)[$i]][1];
            $table = $_GET['table'];
			mysqli_query($conn, "INSERT INTO orders VALUES (null,'$name', '$portion', '$price', '$table')");
		}
	}else if ($_GET['keyword'] == 'kitchen') {
		$data = [];
		$query = mysqli_query($conn, "SELECT * FROM orders");
		while($row = mysqli_fetch_row($query)){
			array_push($data,$row);
		}
		echo json_encode($data);
	}
 ?>