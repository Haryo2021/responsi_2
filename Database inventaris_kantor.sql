USE inventaris_kantor;

CREATE TABLE data_inventaris(
id_barang INT PRIMARY KEY AUTO_INCREMENT,
nama_barang VARCHAR(250),
jumlah_barang VARCHAR(250),
STATUS VARCHAR(250)
)

SELECT * FROM data_inventaris;

CREATE TABLE login(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(250),
PASSWORD VARCHAR(250)
)

SELECT * FROM login;