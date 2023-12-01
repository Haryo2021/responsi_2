<?php

require "koneksi.php";

//read data
$method = $_SERVER["REQUEST_METHOD"];

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

//Add
if ($method === "POST"){
    $data = json_decode(file_get_contents("php://input"), true);
    $nama_barang = $data ["nama_barang"];
    $jumlah_barang = $data["jumlah_barang"];
    $status = $data["status"];

    $sql = "INSERT INTO data_inventaris(nama_barang, jumlah_barang, status) VALUES ('$nama_barang', '$jumlah_barang', '$status')";
    if($conn -> query($sql) === TRUE){
        $data['pesan'] = 'data Inventaris berhasil ditambahkan';
    }
    else{
        $data['pesan'] = 'Error: '.$sql.$conn->error;
    }
    echo json_encode($data);
}

//Update Inventaris
if ($method === "PUT"){
    $data = json_decode(file_get_contents("php://input"), true);
    $nama_barang = $data ["nama_barang"];
    $jumlah_barang = $data["jumlah_barang"];
    $status = $data["status"];

    $sql = "UPDATE data_inventaris SET nama_barang='$nama_barang', jumlah_barang='$jumlah_barang', status='$status' WHERE id_barang='$id_barang'";
    if($conn -> query($sql) === TRUE){
        $data['pesan'] = 'Inventaris berhasil Update';
    }
    else{
        $data['pesan'] = 'Error: '.$sql.$conn->error;
    }
}

//Hapus inevntars
if($method === "DELETE"){
    $id = $_GET["id_barang"];

    $sql = "DELETE FROM data_inventaris WHERE id = $id";
    if($conn -> query($sql) === TRUE){
        $data['Inventaris Berhasil Dihapus'];
    }
    else{
        $data['pesan'] = 'Error: '.$sql.$conn->error;
    }
}
?>