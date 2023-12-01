<?php
require "koneksi.php";
if($method === "GET"){
    $sql ="SELECT * FROM data_inventaris";
    $result = $conn -> query($sql);

    if($result -> num_rows > 0){
        $data_inventaris = array();
        while ($row = $result -> fetch_assoc()){
            $data_inventaris[] = $row;
        }
    }
    echo json_encode($data_inventaris);
}
else{
    echo "Data Kosong";
}
