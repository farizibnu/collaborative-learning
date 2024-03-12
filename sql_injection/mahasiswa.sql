-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Mar 11, 2024 at 03:39 AM
-- Server version: 11.2.2-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cole`
--

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id_mhs` int(11) NOT NULL,
  `nama` varchar(32) DEFAULT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `location` text DEFAULT NULL,
  `about` longtext DEFAULT NULL,
  `kampus` varchar(50) DEFAULT NULL,
  `jurusan` varchar(50) DEFAULT NULL,
  `semester` int(11) DEFAULT NULL,
  `token` longtext DEFAULT NULL,
  `profile_url` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id_mhs`, `nama`, `username`, `email`, `password`, `tanggal_lahir`, `location`, `about`, `kampus`, `jurusan`, `semester`, `token`,`profile_url`) VALUES
(1, 'Ghani', 'Kadal Ganteng', 'alghani63@gmail.com', 'alghani26', '2003-05-26', 'Cimahi', 'CAPEKKK', 'POLBAN', 'Teknik Informatika', 6, NULL, NULL),
(2, 'fariz ibnu', 'ibnu', 'ibnu@gmail.com', '123', '2003-05-26', NULL, 'Lorem Ipsum2', 'POLBAN', 'Teknik Informatika', 6, NULL, NULL),
(3, 'fariz Rahman', 'bond', 'bond@gmail.com', '123', '2003-05-26', NULL, 'Lorem Ipsum3', 'POLBAN', 'Teknik Informatika', 6, NULL, NULL),
(4, 'fadhil radja', 'abuy', 'abuy@gmail.com', '123', '2003-05-26', NULL, 'Lorem Ipsum4', 'POLBAN', 'Teknik Informatika', 6, NULL, NULL),
(5, 'Raihan Shidqi', 'ehan', 'han@gmail.com', '123', '2003-05-26', NULL, 'Lorem Ipsum5', 'POLBAN', 'Teknik Informatika', 6, NULL, NULL),
(19, 'KOKO', 'KokoMUACH', 'koko123@gmail.com', 'koko123', '2003-05-26', 'Bandung', 'LOREM IPSUM BLA FSAFAS', 'Poiteknik Negeri Bandung', 'Teknik Informatika', 6, NULL, NULL),
(20, 'Test Non Exists', 'BLABLOPBLSO', 'sdadadad@gmail.com', 'koko123', '2003-05-26', 'Bandung', 'LOREM IPSUM DOLOR SI AMET', 'Poiteknik Negeri Bandung', 'Teknik Informatika', 6, NULL, NULL),
(21, NULL, 'Coba Non Exists3', 'CNE3@gmail.com', 'kokokiki', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id_mhs`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id_mhs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
