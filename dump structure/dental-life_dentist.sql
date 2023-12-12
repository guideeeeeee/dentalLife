-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dental-life
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dentist`
--

DROP TABLE IF EXISTS `dentist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dentist` (
  `plab` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `tel` int DEFAULT NULL,
  `IDLine` varchar(255) DEFAULT NULL,
  `tservice` varchar(255) NOT NULL,
  `S_exper` varchar(45) DEFAULT NULL,
  `CenClinic` int DEFAULT NULL,
  `language` varchar(45) DEFAULT NULL,
  `gYear1` varchar(45) DEFAULT NULL,
  `gYear2` varchar(45) DEFAULT NULL,
  `gYear3` varchar(45) DEFAULT NULL,
  `gS_exper1` varchar(45) DEFAULT NULL,
  `gS_exper2` varchar(45) DEFAULT NULL,
  `gS_exper3` varchar(45) DEFAULT NULL,
  `university1` varchar(45) DEFAULT NULL,
  `university2` varchar(45) DEFAULT NULL,
  `university3` varchar(45) DEFAULT NULL,
  `wduration1` varchar(45) DEFAULT NULL,
  `wduration2` varchar(45) DEFAULT NULL,
  `wduration3` varchar(45) DEFAULT NULL,
  `wduration4` varchar(45) DEFAULT NULL,
  `wduration5` varchar(45) DEFAULT NULL,
  `wS_exper1` varchar(45) DEFAULT NULL,
  `wS_exper2` varchar(45) DEFAULT NULL,
  `wS_exper3` varchar(45) DEFAULT NULL,
  `wS_exper4` varchar(45) DEFAULT NULL,
  `wS_exper5` varchar(45) DEFAULT NULL,
  `wlocation1` varchar(45) DEFAULT NULL,
  `wlocation2` varchar(45) DEFAULT NULL,
  `wlocation3` varchar(45) DEFAULT NULL,
  `wlocation4` varchar(45) DEFAULT NULL,
  `wlocation5` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `ImgDoc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`plab`),
  KEY `ID_Clinic` (`CenClinic`),
  CONSTRAINT `ID_Clinic` FOREIGN KEY (`CenClinic`) REFERENCES `clinic` (`ID_Clinic`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-12 20:46:42
