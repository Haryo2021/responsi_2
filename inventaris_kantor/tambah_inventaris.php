<?php
require "koneksi.php";
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