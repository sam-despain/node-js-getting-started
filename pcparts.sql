CREATE TABLE cpu (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	cores int NOT NULL,
	clock float NOT NULL,
	price float NOT NULL
);
INSERT INTO cpu (cores, clock, price) VALUES (2, 2.5, 11.99);
INSERT INTO cpu (cores, clock, price) VALUES (2, 3.0, 24.99);
INSERT INTO cpu (cores, clock, price) VALUES (2, 3.5, 89.99);
INSERT INTO cpu (cores, clock, price) VALUES (2, 4.0, 159.99);
INSERT INTO cpu (cores, clock, price) VALUES (4, 2.5, 39.99);
INSERT INTO cpu (cores, clock, price) VALUES (4, 3.0, 99.99);
INSERT INTO cpu (cores, clock, price) VALUES (4, 3.5, 139.99);
INSERT INTO cpu (cores, clock, price) VALUES (4, 4.0, 169.99);
INSERT INTO cpu (cores, clock, price) VALUES (6, 2.5, 49.99);
INSERT INTO cpu (cores, clock, price) VALUES (6, 3.0, 149.99);
INSERT INTO cpu (cores, clock, price) VALUES (6, 3.5, 169.99);
INSERT INTO cpu (cores, clock, price) VALUES (8, 2.5, 99.99);
INSERT INTO cpu (cores, clock, price) VALUES (8, 3.0, 149.99);
INSERT INTO cpu (cores, clock, price) VALUES (8, 3.5, 259.99);
INSERT INTO cpu (cores, clock, price) VALUES (8, 4.0, 399.99);

CREATE TABLE cooler (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	type varchar(255) UNIQUE NOT NULL,
	price float NOT NULL
);
INSERT INTO cooler (type, price) VALUES ('Passive', 14.99);
INSERT INTO cooler (type, price) VALUES ('Air', 29.99);
INSERT INTO cooler (type, price) VALUES ('Liquid', 59.99);

CREATE TABLE motherboard (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	type varchar(255) UNIQUE NOT NULL,
	price float NOT NULL
);
INSERT INTO motherboard (type, price) VALUES ('ATX', 114.99);
INSERT INTO motherboard (type, price) VALUES ('Micro-ATX', 99.99);
INSERT INTO motherboard (type, price) VALUES ('Mini-ITX', 84.99);

CREATE TABLE ram (
	size int PRIMARY KEY UNIQUE NOT NULL,
	price float NOT NULL
);
INSERT INTO ram (size, price) VALUES (2, 9.99);
INSERT INTO ram (size, price) VALUES (4, 14.99);
INSERT INTO ram (size, price) VALUES (8, 24.99);
INSERT INTO ram (size, price) VALUES (16, 39.99);
INSERT INTO ram (size, price) VALUES (32, 89.99);
INSERT INTO ram (size, price) VALUES (64, 239.99);

CREATE TABLE storage (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	type varchar(4) NOT NULL,
	size int NOT NULL,
	price float NOT NULL
);
INSERT INTO storage (type, size, price) VALUES ('SSD', 32, 19.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 64, 24.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 128, 29.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 256, 39.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 512, 59.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 1024, 99.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 2048, 199.99);
INSERT INTO storage (type, size, price) VALUES ('SSD', 4096, 459.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 32, 9.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 64, 11.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 128, 14.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 256, 19.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 512, 24.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 1024, 34.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 2048, 44.99);
INSERT INTO storage (type, size, price) VALUES ('HDD', 4096, 79.99);

CREATE TABLE gpu (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	cores int NOT NULL,
	clock float NOT NULL,
	ram int NOT NULL,
	price float NOT NULL
);
INSERT INTO gpu (cores, clock, ram, price) VALUES (512, 1000, 4, 399.99);
INSERT INTO gpu (cores, clock, ram, price) VALUES (1024, 1250, 6, 599.99);
INSERT INTO gpu (cores, clock, ram, price) VALUES (2048, 1500, 8, 999.99);
INSERT INTO gpu (cores, clock, ram, price) VALUES (4096, 1750, 16, 1499.99);

CREATE TABLE casing (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	type varchar(255) UNIQUE NOT NULL,
	price float NOT NULL
);
INSERT INTO casing (type, price) VALUES ('ATX Full-tower', 119.99);
INSERT INTO casing (type, price) VALUES ('ATX Mid-tower', 39.99);
INSERT INTO casing (type, price) VALUES ('ATX Micro-tower', 89.99);
INSERT INTO casing (type, price) VALUES ('Micro-ATX Mid-tower', 69.99);
INSERT INTO casing (type, price) VALUES ('Micro-ATX Mini-tower', 49.99);
INSERT INTO casing (type, price) VALUES ('Mini-ITX', 99.99);

CREATE TABLE psu (
	wattage int PRIMARY KEY UNIQUE NOT NULL,
	price float NOT NULL
);
INSERT INTO psu (wattage, price) VALUES (450, 29.99);
INSERT INTO psu (wattage, price) VALUES (500, 39.99);
INSERT INTO psu (wattage, price) VALUES (550, 49.99);
INSERT INTO psu (wattage, price) VALUES (600, 59.99);
INSERT INTO psu (wattage, price) VALUES (650, 64.99);
INSERT INTO psu (wattage, price) VALUES (700, 74.99);
INSERT INTO psu (wattage, price) VALUES (750, 79.99);
INSERT INTO psu (wattage, price) VALUES (800, 99.99);
INSERT INTO psu (wattage, price) VALUES (850, 119.99);
INSERT INTO psu (wattage, price) VALUES (900, 129.99);
INSERT INTO psu (wattage, price) VALUES (950, 149.99);
INSERT INTO psu (wattage, price) VALUES (1000, 199.99);

CREATE TABLE monitor (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	resolution varchar(5) NOT NULL,
	refresh int NOT NULL,
	price float NOT NULL
);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1080p', 60, 79.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1080p', 120, 149.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1080p', 144, 199.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1080p', 240, 299.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1440p', 60, 159.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1440p', 120, 259.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1440p', 144, 399.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('1440p', 240, 549.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('4K', 60, 249.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('4K', 120, 449.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('4K', 144, 799.99);
INSERT INTO monitor (resolution, refresh, price) VALUES ('4K', 240, 1499.99);

CREATE TABLE os (
	id serial PRIMARY KEY UNIQUE NOT NULL,
	name varchar(255) UNIQUE NOT NULL,
	price float NOT NULL
);
INSERT INTO os (name, price) VALUES ('Windows 7', 79.99);
INSERT INTO os (name, price) VALUES ('Windows 8', 99.99);
INSERT INTO os (name, price) VALUES ('Windows 10', 119.99);
INSERT INTO os (name, price) VALUES ('Linux Debian', 0);
INSERT INTO os (name, price) VALUES ('Linux Ubuntu', 0);
INSERT INTO os (name, price) VALUES ('Linux Red Hat', 0);