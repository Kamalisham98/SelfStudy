-- CREATE DATABASE
CREATE DATABASE penjualan;

-- USING DATABASE
USE penjualan; 

-- CREATE TABLES
CREATE TABLE pemasok (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE barang (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL,
     harga DECIMAL NOT NULL,
     id_pemasok BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_pemasok) REFERENCES pemasok(id)
);

CREATE TABLE pelanggan (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE transaksi (
    id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
    id_barang BIGINT UNSIGNED NOT NULL,
    id_pelanggan BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_barang) REFERENCES barang(id),
    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id),
    waktu DATETIME DEFAULT now() NOT NULL,
    jumlah INT NOT NULL,
    total DECIMAL NOT NULL
);

-- EDIT TABLE ON BARANG
ALTER TABLE barang 
	MODIFY name VARCHAR(255) NOT NULL UNIQUE;

-- INSERT DATA INTO TABLE
INSERT INTO pelanggan (nama) Values
	("Kamal"),
	("Isham");

INSERT INTO pelanggan (nama) VALUES
	("Riko"),
	("Dedi"),
	("Amril");
	
INSERT INTO pemasok (nama) VALUES
	("Yoga"),
	("Fikri"),
	("Karina");

INSERT INTO barang (nama,harga,id_pemasok) VALUES
	("Pepsoden", 14500, 1),
	("Bango", 10000, 2),
	("Pantine", 27500, 1);

INSERT INTO transaksi (id_barang,id_pelanggan,jumlah, total) Values
	(1,1,10, 145000),
	(2,3,5,50000),
	(3,2,2,55000);

-- SELECT
SELECT * FROM pelanggan p; 

SELECT * FROM pemasok p ;

SELECT * FROM barang b ;

SELECT * FROM  transaksi t ;

-- SELECT USING WHERE AND ORDER BY
SELECT 
	t.id,
	t.id_barang,
	t.waktu, 
	b.nama nama_barang,
	b.harga,
	t.jumlah,
	t.total 
FROM transaksi t join barang b 
on t.id_barang = b.id 
where jumlah < 6 
ORDER BY total DESC ;

--  DELETE INSTANCE IN TABLE
DELETE FROM pemasok WHERE id>=3;

-- DELETE TABLE
DROP TABLE transaksi;

-- UPDATE DATA
UPDATE barang SET harga =13400 where nama = "Bango light"; 

UPDATE barang SET harga  = 21000 WHERE id = 4;

-- SELECT LIMIT
SELECT * FROM barang b LIMIT 4; 

-- SELECT JOIN
SELECT * FROM transaksi t 
JOIN barang b on t.id_barang = b.id 
JOIN pelanggan p ON t.id_pelanggan =p.id;
