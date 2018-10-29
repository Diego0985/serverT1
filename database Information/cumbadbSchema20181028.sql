-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cumbadb
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `mensaje` (
  `idMensaje` int(11) NOT NULL AUTO_INCREMENT,
  `contenido` varchar(120) NOT NULL,
  PRIMARY KEY (`idMensaje`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (1,'Hola'),(2,'Como'),(3,'Estas'),(4,'Que'),(5,'mas'),(6,'perro');
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruta`
--

DROP TABLE IF EXISTS `ruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ruta` (
  `idRuta` int(11) NOT NULL AUTO_INCREMENT,
  `origen` varchar(100) NOT NULL,
  `destino` varchar(100) NOT NULL,
  `latitudOrigen` varchar(10) NOT NULL,
  `longitudOrigen` varchar(10) NOT NULL,
  `latitudDestino` varchar(10) NOT NULL,
  `longitudDestino` varchar(10) NOT NULL,
  `fechaInicio` datetime NOT NULL,
  `fechaFin` datetime NOT NULL,
  `tiempoViaje` int(11) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `numeroUsuarios` int(11) NOT NULL,
  `rutaActiva` int(11) DEFAULT NULL,
  PRIMARY KEY (`idRuta`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruta`
--

LOCK TABLES `ruta` WRITE;
/*!40000 ALTER TABLE `ruta` DISABLE KEYS */;
INSERT INTO `ruta` VALUES (1,'Chilibulo','EPN','-0.233095','-78.533019','-0.210297 ','-78.488628','2018-10-12 00:00:00','2019-03-20 00:00:00',60,'Ruta Sin paradas','Chilibulo-EPN',4,NULL),(2,'Centro Historico','EPN','-0.225074 ','-78.512031','-0.210297 ','-78.488628','2018-09-20 00:00:00','2019-03-20 00:00:00',20,'Ruta con 1 parada en la Alameda','Centro-EPN',2,NULL),(3,'Carapungo','EPN','-0.107872 ','-78.447461','-0.210297 ','-78.488628','2018-11-15 00:00:00','2019-03-20 00:00:00',90,'Ruta sin paradas','Carapungo-EPN',4,NULL);
/*!40000 ALTER TABLE `ruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipovehiculo`
--

DROP TABLE IF EXISTS `tipovehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tipovehiculo` (
  `idTipoVehiculo` int(11) NOT NULL AUTO_INCREMENT,
  `categoriaVehiculo` varchar(45) NOT NULL,
  PRIMARY KEY (`idTipoVehiculo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipovehiculo`
--

LOCK TABLES `tipovehiculo` WRITE;
/*!40000 ALTER TABLE `tipovehiculo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipovehiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `fechaNacimiento` datetime NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `direccion` varchar(250) NOT NULL,
  `email` varchar(45) NOT NULL,
  `nombreUsuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `esConductor` int(11) NOT NULL,
  `esAdministrador` int(11) NOT NULL,
  `foto` longblob,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Andres','Baus','1995-08-12 00:00:00','022 254-218','Leopoldo Benítez S/N y Gustavo Domínguez ','andres.baus@epn.edu.ec','abausl','Atest@1234','Hola soy Andrés',1,1,NULL),(2,'Diego','Llerena','1995-08-05 00:00:00','042835825','Ciudadela Entre Ríos, Av. La Puntilla Nº28-29 y Río Guayas','diego.llerena@epn.edu.ec','dllerenar','Atest@1234','Hola soy Diego',1,1,NULL),(3,'Goku','Sanchez','1990-10-12 00:00:00','2999800','Jorge Washington E5-11 y Juan Leon Mera Edf Chavez ','nubevoladora90@gmail.com','gsanchez','Atest@1234','Hola, soy Goku',0,0,NULL),(4,'Francisco','Garcia','1989-12-01 00:00:00','399 5800','Av. Amazonas N35-89 y Juan Pablo Sanz piso 6 y7 ','fgarciam@agenciapostal.gob.ec','fgarcia','Atest@1234v','Hola, soy Pancho',1,0,NULL),(5,'Matias','Fernandez','1990-02-04 00:00:00','998637439','Gaspar de Villaroel E10-121 y 6 de Diciembre ','mfer@gmail.com','mfernande','Atest@1234v','Hola, soy Matias',0,0,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariomensaje`
--

DROP TABLE IF EXISTS `usuariomensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuariomensaje` (
  `idUsuarioMensaje` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `idMensaje` int(11) NOT NULL,
  `fechaMensaje` datetime NOT NULL,
  PRIMARY KEY (`idUsuarioMensaje`),
  KEY `idMensaje_idx` (`idMensaje`),
  KEY `idUsuario_idx` (`idUsuario`),
  CONSTRAINT `idMensaje` FOREIGN KEY (`idMensaje`) REFERENCES `mensaje` (`idmensaje`),
  CONSTRAINT `idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariomensaje`
--

LOCK TABLES `usuariomensaje` WRITE;
/*!40000 ALTER TABLE `usuariomensaje` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuariomensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioruta`
--

DROP TABLE IF EXISTS `usuarioruta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarioruta` (
  `idUsuarioRuta` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `idRuta` int(11) NOT NULL,
  `esConductor` int(11) NOT NULL,
  `fechaPublicacion` datetime DEFAULT NULL,
  PRIMARY KEY (`idUsuarioRuta`),
  KEY `fk_UsuarioRuta_1_idx` (`idUsuario`),
  KEY `fk_UsuarioRuta_2_idx` (`idRuta`),
  CONSTRAINT `fk_UsuarioRuta_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE,
  CONSTRAINT `fk_UsuarioRuta_2` FOREIGN KEY (`idRuta`) REFERENCES `ruta` (`idruta`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioruta`
--

LOCK TABLES `usuarioruta` WRITE;
/*!40000 ALTER TABLE `usuarioruta` DISABLE KEYS */;
INSERT INTO `usuarioruta` VALUES (1,1,2,1,NULL),(2,2,3,1,NULL),(3,4,1,1,NULL),(4,3,2,0,NULL),(5,5,1,0,NULL),(6,3,1,0,NULL),(7,5,2,0,NULL);
/*!40000 ALTER TABLE `usuarioruta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vehiculo` (
  `idVehiculo` int(11) NOT NULL AUTO_INCREMENT,
  `numeroPlaca` varchar(10) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `año` int(11) NOT NULL,
  `numeroAsientos` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idVehiculo`),
  KEY `fk_Vehículo_1_idx` (`idUsuario`),
  CONSTRAINT `fk_Vehículo_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idusuario`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
INSERT INTO `vehiculo` VALUES (1,'AAB-0123	','3','Mazda',2018,5,1),(2,'PEB-0001','Rio','Kia',2016,5,2),(3,'GXA-0100','Uno','Fiat',1995,5,3);
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-28 19:39:36
