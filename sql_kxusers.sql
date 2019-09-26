CREATE TABLE `kxusers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int(10) unsigned NOT NULL DEFAULT '0',
  `role_id` int(10) unsigned NOT NULL,
  `username` varchar(128) NOT NULL,
  `usrpass` varchar(64)  NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createdby` varchar(50) NOT NULL DEFAULT 'Nepoznato',
  `comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `roleid_ind` (`role_id`),
  KEY `customerid_ind2` (`customer_id`),
  CONSTRAINT `kxusers_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `kxrole` (`id`),
  CONSTRAINT `kxusers_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `kxcustomer` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


insert into kxusers (customer_id,role_id,username) VALUES(1,1,"adod");
insert into kxusers (customer_id,role_id,username) VALUES(1,1,"dzugec");
insert into kxusers (customer_id,role_id,username) VALUES(1,5,"alen@laremial.de");
insert into kxusers (customer_id,role_id,username) VALUES(1,5,"zugecd@gmail.com");


