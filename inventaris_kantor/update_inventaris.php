<?php
require "koneksi.php";
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