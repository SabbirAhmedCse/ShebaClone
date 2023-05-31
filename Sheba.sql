
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

IF NOT EXISTS (SELECT
    *
  FROM INFORMATION_SCHEMA.TABLES
  WHERE TABLE_NAME = 'UserTypes')
BEGIN
  CREATE TABLE UserTypes (
    Id int NOT NULL PRIMARY KEY IDENTITY (1, 1),
    Type nvarchar(50) Not Null
  );
  PRINT 'UserTypes Table Created Succesfully.'
END
ELSE
BEGIN
  PRINT 'UserTypes Table already exist.'
END
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
    Gender nvarchar(10) not NULL,
    DateOfBirth date not NULL,
    City nvarchar(100) NULL,
    Area nvarchar(100) NULL,
    Address nvarchar(200) NULL,
	Expert nvarchar(20) NULL,
    IsAvailable bit Not Null DEFAULT 1,
    CreateAt date not Null,
    UpdateAt date Null,
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
    CreateAt date,
    UpdateAt date Null,
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
    Image nvarchar(100) Null,
    CreateAt date Null,
    UpdateAt date Null,
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
	MechanicId bigint NOT NULL FOREIGN KEY REFERENCES Users (Id),
    ServiceDate date Not Null,
    CreateBy bigint NOT NULL FOREIGN KEY REFERENCES Users (Id),
    CreateAt date NOT Null,
    UpdateBy bigint  NULL FOREIGN KEY REFERENCES Users (Id),
    UpdateAt date Null,
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
    CreateAt date NOT Null,
    UpdateBy bigint NULL FOREIGN KEY REFERENCES Users (Id),
    UpdateAt date Null,
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


-- insert  data for all tables.

USE [Sheba]
GO

INSERT INTO [Users]([Type],[Name],[Email],[Password],[MobileNumber],[Gender],[DateOfBirth],
			[City],[Area],[Address],[Expert],[IsAvailable],[CreateAt])
     VALUES ('Admin','Sabbir ahmed','sabbir.cse.18@gmail.com'
           ,'sabbir'
           ,'01639527363'
           ,'Male'
           ,'1997-07-15'
           ,'Dhaka'
           ,'Sector-13'
           ,'Road-20, House-61'
           ,'All'
           ,1
           ,'1997-07-15')
GO
