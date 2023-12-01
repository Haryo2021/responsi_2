<?php
require "koneksi.php";
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