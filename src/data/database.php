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
		$id = $_GET['id'];
		$data = [];
		if ($id > 0) {
			$query = mysqli_query($conn, "SELECT * FROM orders WHERE id > $id");
			if (mysqli_num_rows($query) > 0) {
				while($row = mysqli_fetch_row($query)){
					array_push($data,$row);
				}
				sort($data);
			}
		}else{
			$query = mysqli_query($conn, "SELECT * FROM orders");
			while($row = mysqli_fetch_row($query)){
				array_push($data,$row);
			}
			sort($data);
		}
		echo json_encode($data);
	}else if ($_GET['keyword'] == 'already') {
		$id = $_GET['id'];
		$query = mysqli_query($conn, "SELECT * FROM orders WHERE meja=$id");
		while($row = mysqli_fetch_row($query)){
			$foodName = $row[1];
			$portion = $row[2];
			$price = $row[3];
			$table = $row[4];
			mysqli_query($conn, "INSERT INTO waiters VALUES (null,'$foodName', '$portion', '$price', '$table')");
		}

		mysqli_query($conn, "DELETE FROM orders WHERE meja=$id");
	}else if ($_GET['keyword'] == 'waiter') {
		$id = $_GET['id'];
		$data = [];
		if ($id > 0) {
			$query = mysqli_query($conn, "SELECT * FROM waiters WHERE id > $id");
			if (mysqli_num_rows($query) > 0) {
				while($row = mysqli_fetch_row($query)){
					array_push($data,$row);
				}
				sort($data);
			}
		}else{
			$query = mysqli_query($conn, "SELECT * FROM waiters");
			while($row = mysqli_fetch_row($query)){
				array_push($data,$row);
			}
			sort($data);
		}
		echo json_encode($data);
	}else if ($_GET['keyword'] == 'delivery') {
		$id = $_GET['id'];
		mysqli_query($conn, "DELETE FROM waiters WHERE meja=$id");
	}else if ($_GET['keyword'] == 'unordered') {
		$id = $_GET['id'];
		mysqli_query($conn, "UPDATE tables SET status = 'unordered' WHERE id=$id");
	}
 ?>