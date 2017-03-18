-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 18 Mars 2017 à 11:39
-- Version du serveur :  5.6.26
-- Version de PHP :  5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `election`
--

-- --------------------------------------------------------

--
-- Structure de la table `candidat`
--

CREATE TABLE IF NOT EXISTS `candidat` (
  `idCandidat` varchar(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `parti` varchar(100) NOT NULL,
  `lienPhoto` varchar(100) NOT NULL,
  `lienPhotoParti` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `candidat`
--

INSERT INTO `candidat` (`idCandidat`, `nom`, `parti`, `lienPhoto`, `lienPhotoParti`) VALUES
('1', 'Benoit Hamon', 'PS', 'img/hamon.jpg', 'img/ps-logo.jpg'),
('2', 'Emmanuel Macron', 'En Marche !', 'img/macron.jpg', 'img/en-marche.jpeg'),
('3', 'François Fillon', 'Les Républicains', 'img/fillon.jpg', 'img/lr.jpg'),
('4', 'Jean-Luc Mélanchon', 'Front de Gauche', 'img/JLM.jpg', 'img/Logo_frontdegauche.jpg'),
('5', 'Marine Le Pen', 'Front National', 'img/Marine.Le_.Pen_.jpg', 'img/fn.png'),
('6', 'Nicolas Dupont-Aignan', 'Debout la France', 'img/dupont.jpg', 'img/deboutlaFrance.png'),
('7', 'François Asselineau', 'Union Populaire Républicaine', 'img/François_ASSELINEAU.jpg', 'img/logo-upr.jpg'),
('8', 'Philippe Poutou', 'NPA', 'img/poutou.jpg', 'img/Logo_NPA.png'),
('9', 'Nathalie Arthaud', 'Lutte Ouvrière', 'img/Artaud.png', 'img/Lutte_ouvrière.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `idUser` varchar(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`idUser`, `login`, `password`, `name`, `surname`, `email`) VALUES
('1', 'thomas', 'toto', 'Thomas', 'de Lagoutine', 'thomasdelagoutine@gmail.com'),
('5dc3d849-ff', 'thomas3', '123', 'de Lagoutine', 'Thomas', 'thomasdelagoutine@gmail.com'),
('693483fd-01', 'thomas2', 'undefined', 'undefined', 'Thomas', 'undefined'),
('d9a73199-61', 'olivier', '123', 'de Lagoutine', 'Olivier', 'thomasdelagoutine@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `vote`
--

CREATE TABLE IF NOT EXISTS `vote` (
  `idVote` varchar(11) NOT NULL,
  `pourcentage` float NOT NULL,
  `idCandidat` varchar(11) NOT NULL,
  `idUser` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `vote`
--

INSERT INTO `vote` (`idVote`, `pourcentage`, `idCandidat`, `idUser`) VALUES
('064f5800-d1', 10, '3', '5dc3d849-ff'),
('1c9ff7a4-48', 10, '7', '693483fd-01'),
('2177f123-38', 10, '5', '1'),
('232132b9-6b', 10, '2', '1'),
('36e01907-ba', 10, '9', '5dc3d849-ff'),
('3cda0166-8e', 10, '4', 'd9a73199-61'),
('456866a4-05', 10, '8', '1'),
('478816ff-af', 10, '2', '693483fd-01'),
('4a69d42a-ba', 10, '5', 'd9a73199-61'),
('633c1385-dc', 10, '3', '1'),
('66490e4f-dc', 10, '8', '5dc3d849-ff'),
('6705bf23-cf', 10, '8', 'd9a73199-61'),
('7248fbc0-cb', 10, '5', '5dc3d849-ff'),
('79c3ae89-96', 10, '3', 'd9a73199-61'),
('834b00b5-ef', 10, '5', '693483fd-01'),
('8a21a27a-52', 10, '6', '693483fd-01'),
('8f9327be-2f', 10, '9', 'd9a73199-61'),
('8ff36baa-e6', 10, '1', 'd9a73199-61'),
('940ce613-36', 10, '9', '693483fd-01'),
('95b91f70-4b', 10, '1', '1'),
('a2c91cb5-00', 10, '9', '1'),
('a397b5fc-47', 10, '3', '693483fd-01'),
('a8c869e8-20', 10, '6', '5dc3d849-ff'),
('aca0f708-84', 10, '4', '693483fd-01'),
('b1d20a31-f7', 10, '2', 'd9a73199-61'),
('b6718733-3c', 10, '4', '5dc3d849-ff'),
('b6ba8c4e-cf', 10, '1', '5dc3d849-ff'),
('bf572a72-9d', 10, '7', '5dc3d849-ff'),
('c429c19a-82', 10, '6', 'd9a73199-61'),
('c4e018d6-66', 10, '1', '693483fd-01'),
('cf85a563-5b', 10, '6', '1'),
('d1dae305-23', 10, '4', '1'),
('d7e5775c-ac', 10, '7', '1'),
('e22c683e-fc', 10, '2', '5dc3d849-ff'),
('edaed8c0-e3', 10, '8', '693483fd-01'),
('f892f70d-f9', 10, '7', 'd9a73199-61');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `candidat`
--
ALTER TABLE `candidat`
  ADD PRIMARY KEY (`nom`,`parti`,`lienPhoto`,`lienPhotoParti`,`idCandidat`),
  ADD UNIQUE KEY `idCandidat_2` (`idCandidat`),
  ADD KEY `idCandidat` (`idCandidat`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idUser_2` (`idUser`),
  ADD KEY `idUser` (`idUser`);

--
-- Index pour la table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`idVote`),
  ADD UNIQUE KEY `idVote` (`idVote`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idCandidat` (`idCandidat`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
