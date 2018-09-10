
CREATE DATABASE IF NOT EXISTS `tasklistdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `tasklistdb`;

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `task` (`id`, `description`, `status`) VALUES
	(1, 'Buy some groceries from the store', 'TODO'),
	(2, 'Gym session planned for today. Be sure to bring along a towel and gatorade!', 'TODO'),
	(3, 'Important meeting today @work. Be sure to wear a three piece suit!', 'TODO'),
	(4, 'Meeting some friends over for dinner', 'DONE'),
	(5, 'Build a Task List application with Java, Spring Boot, Angular v5 and MySQLdb', 'DONE');


