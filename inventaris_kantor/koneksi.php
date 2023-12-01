<?php
$servername = "localhost";
$database = "inventaris_kantor";
$username = "root";
$password = "";

$conn = mysqli_connect($servername, $username, $password, $database);

if(!$conn){
    die("Koneksi Gagal: ". mysqli_connect_error());
}

echo "Koneksi berhasil";
mysqli_close($conn);
?>