
--DROP DATABASE Sheba

USE [master]
IF NOT EXISTS (SELECT
    name
  FROM master.sys.databases
  WHERE name = 'Sheba')
BEGIN
  CREATE DATABASE Sheba
  PRINT 'Sheba Database Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'Sheba Database Already Exist.'
END
GO

USE [Sheba]

--IF NOT EXISTS (SELECT
--    *
--  FROM INFORMATION_SCHEMA.TABLES
--  WHERE TABLE_NAME = 'UserTypes')
--BEGIN
--  CREATE TABLE UserTypes (
--    Id int NOT NULL PRIMARY KEY IDENTITY (1, 1),
--    Type nvarchar(50) Not Null
--  );
--  PRINT 'UserTypes Table Created Succesfully.'
--END
--ELSE
--BEGIN
--  PRINT 'UserTypes Table already exist.'
--END
GO

IF NOT EXISTS (SELECT
    *
  FROM INFORMATION_SCHEMA.TABLES
  WHERE TABLE_NAME = 'Users')
BEGIN
  CREATE TABLE Users (
    Id bigint NOT NULL PRIMARY KEY IDENTITY (1000, 1),
    Type nvarchar(10) NOT NULL,
    Name nvarchar(100) Not NULL,
    Email nvarchar(100) Not NULL,
    Password nvarchar(50) Not NULL,
    MobileNumber nvarchar(20) Not NULL,
    Gender nvarchar(10) Not NULL,
    DateOfBirth date Not NULL,
    City nvarchar(100) NULL,
    Area nvarchar(100) NULL,
    Address nvarchar(200) NULL,
	Expert int NULL,
    IsAvailable bit Not Null DEFAULT 1,
    CreateAt DateTime Not Null,
    UpdateAt DateTime Null,
    IsActive BIT Not Null DEFAULT 1,
    IsDelete BIT Not Null DEFAULT 0
  );
  PRINT 'Users Table Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'Users Table already exist.'
END
GO

IF NOT EXISTS (SELECT
    *
  FROM INFORMATION_SCHEMA.TABLES
  WHERE TABLE_NAME = 'ServiceCategories')
BEGIN
  Create TABLE ServiceCategories (
    Id int NOT NULL PRIMARY KEY IDENTITY (1, 1),
    CategoryName nvarchar(100) Not Null,
    CreateBy bigint NOT NULL FOREIGN KEY REFERENCES Users (Id),
    CreateAt DateTime NOT Null,
    UpdateBy bigint  NULL FOREIGN KEY REFERENCES Users (Id),
    UpdateAt DateTime Null,
    IsActive bit  DEFAULT 1,
    IsDelete bit  DEFAULT 0 
  );

  PRINT 'ServiceCategories Table Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'ServiceCategories Table already exist.'
END
GO

IF NOT EXISTS (SELECT
    *
  FROM INFORMATION_SCHEMA.TABLES
  WHERE TABLE_NAME = 'Services')
BEGIN
  CREATE TABLE Services (
    Id int NOT NULL PRIMARY KEY IDENTITY (1, 1),
    ServicesCategoryId int NOT NULL FOREIGN KEY REFERENCES ServiceCategories (Id),
    SubCategory nvarchar(100) Null,
    Description nvarchar(300) Not Null,
	Price Money Null,
    ImageUrl nvarchar(100) Null,
    CreateBy bigint NOT NULL FOREIGN KEY REFERENCES Users (Id),
    CreateAt DateTime NOT Null,
    UpdateBy bigint  NULL FOREIGN KEY REFERENCES Users (Id),
    UpdateAt DateTime Null,
    IsActive bit DEFAULT 1,
    IsDelete bit DEFAULT 0
  );

  PRINT 'Services Table Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'Services Table already exist.'
END
GO

IF NOT EXISTS (SELECT
    *
  FROM INFORMATION_SCHEMA.TABLES
  WHERE TABLE_NAME = 'ServiceRequests')
BEGIN
  CREATE TABLE ServiceRequests (
    Id bigint NOT NULL PRIMARY KEY IDENTITY (1, 1),
    ServiceId int NOT NULL FOREIGN KEY REFERENCES Services (Id),
    Description nvarchar(300) Null,
    ServiceStatus nvarchar(20) Null,
    MechanicStatus nvarchar(20) Null,
	MechanicId bigint NULL FOREIGN KEY REFERENCES Users (Id),
    ServiceDate date Not Null,
    CreateBy bigint NOT NULL FOREIGN KEY REFERENCES Users (Id),
    CreateAt DateTime NOT Null,
    UpdateBy bigint  NULL FOREIGN KEY REFERENCES Users (Id),
    UpdateAt DateTime Null,
    IsActive bit Not Null DEFAULT 1,
    IsDelete bit Not Null DEFAULT 0
  );

  PRINT 'ServiceRequests Table Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'ServiceRequests Table already exist.'
END
GO

IF NOT EXISTS (SELECT
    *
  FROM INFORMATION_SCHEMA.TABLES
  WHERE TABLE_NAME = 'RejectReasons')
BEGIN
  CREATE TABLE RejectReasons (
    Id bigint NOT NULL PRIMARY KEY IDENTITY (1, 1),
    ServiceRequestId bigint NOT NULL FOREIGN KEY REFERENCES ServiceRequests (Id),
    Reason nvarchar(300) Not Null,
    CreateBy bigint NOT NULL FOREIGN KEY REFERENCES Users (Id),
    CreateAt DateTime NOT Null,
    UpdateBy bigint NULL FOREIGN KEY REFERENCES Users (Id),
    UpdateAt DateTime Null,
    IsActive bit Not Null DEFAULT 1,
    IsDelete bit Not Null DEFAULT 0
  );
  PRINT 'RejectReasons Table Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'RejectReasons Table already exist.'
END

GO


/*Insert data for Users table*/

INSERT INTO [dbo].[Users] VALUES ('admin','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','2023/06/15','Dhaka','Sector-13','Road-20, House-61',1,1,'2023/06/15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Sojib ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','2023/06/15','Dhaka','Sector-13','Road-20, House-61',1,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Ispahan ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',2,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Delowar ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',1,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Shiam ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',2,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Shanto ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',2,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',1,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',2,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',3,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('mechanic','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',3,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);
INSERT INTO [Users] VALUES ('customer','Sabbir ahmed','sabbir.cse.18@gmail.com','sabbir','01639527363',
'Male','1997-07-15','Dhaka','Sector-13','Road-20, House-61',Null,1,'1997-07-15',Null,1,0);

/*Insert data for Service Categories table*/

INSERT INTO [dbo].[ServiceCategories] VALUES('Electric',1000,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceCategories] VALUES('Electronics',1000,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceCategories] VALUES('Furniture',1000,getDate(),Null,Null,1,0);


/*Insert data for Services table*/

INSERT INTO [dbo].[Services] VALUES (1,'Fan','Everything',500,'img/fan', 1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[Services] VALUES (1,'Light','Everything',200,'img/light', 1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[Services] VALUES (2,'Refrigerator','Everything',1000,'img/refrigerator', 1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[Services] VALUES (2,'AC','Everything',700,'img/ac', 1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[Services] VALUES (2,'TV','Everything',400,'img/tv', 1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[Services] VALUES (3,'Door','Everything',600,'img/door', 1000,getDate(),Null,Null,1,0)

/*Insert data for ServiceRequests table*/

INSERT INTO [dbo].[ServiceRequests] VALUES (1,'Suddenly Fan is not working.',Null,Null,Null,'2023/06/15',1010,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceRequests] VALUES (2,'Suddenly Light Off',Null,Null,Null,'2023/06/17',1011,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceRequests] VALUES (3,'Refrigerator do not create ice.',Null,Null,Null,'2023/06/16',1012,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceRequests] VALUES (4,'When start Ac then create noise',Null,Null,Null,'2023/06/19',1013,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceRequests] VALUES (5,'Tv display is flickering',Null,Null,Null,'2023/06/20',1015,getDate(),Null,Null,1,0);
INSERT INTO [dbo].[ServiceRequests] VALUES (6,'Door is not closing',Null,Null,Null,'2023/06/25',1015,getDate(),Null,Null,1,0)

/*Insert data for Reject resons table*/

INSERT INTO [dbo].[RejectReasons] VALUES (1,'This service mechanic is not available',1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[RejectReasons] VALUES (1,'This service mechanic is not available',1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[RejectReasons] VALUES (1,'This service mechanic is not available',1000,getDate(),Null,Null,1,0)
INSERT INTO [dbo].[RejectReasons] VALUES (1,'This service mechanic is not available',1000,getDate(),Null,Null,1,0)