
CREATE DATABASE IF NOT EXISTS `tasklistdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `tasklistdb`;

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `task` (`id`, `title`, `description`, `status`) VALUES
	(1, 'Go shopping', 'Buy some groceries from the store', 'TODO'),
	(2, 'Gym session', 'Gym session planned for 10-09-2018. Be sure to bring along my towel and gatorade', 'BUSY'),
	(3, 'Build a Task list app', 'Build a Task List application with Angualr5, Spring Boot, Java and MySQLdb', 'DONE');

