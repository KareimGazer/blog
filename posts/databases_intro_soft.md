---
title: Databases
subtitle: A Soft Introduction
date: 2025-01-20
author: '@KareimGazer'
lastUpdated: true
next:
  text: 'Building Great Data Products: Part 1 — The Data'
  link: './Building_Great_Data_Products_Part_1_The_Data'
prev:
  text: 'The Kiss Principle'
  link: './The_KISS_Principle'
---

> What are databases, SQL, DBMS, RDBMS? let's findout!

---

## DBs

Databases (DBs) are just the data stored on the hard disk but in an efficient way using complex data structures and algorithms to store the data in the smallest amount and get the data in the fastest way possible.

## DBMS

As with the Linux shell which is the software interface to the operating system. the database management system (DBMS) is the software interface to the database. it gives us a shell that we can write commands into but unlike the Linux shell in which we type 'Bash' scripts into we type SQL instead; to tell the database which data do we want exactly.

## SQL

SQL stands for Structured Query Language is a standardized programming language used to manage and manipulate relational databases. It is the primary language used for querying, inserting, updating, and deleting data in relational databases, as well as for creating and modifying the database structure itself.

Here are the key components of SQL:

- **Data Query Language (DQL):** Used to query data from the database. 
The most common command is SELECT.

- **Data Manipulation Language (DML):** Used to insert, update, and delete data.

- **Data Definition Language (DDL):** Used to define or alter the structure of the database, such as creating, altering, or dropping tables.

- **Data Control Language (DCL):** Used to control access to the data, like granting and revoking permissions.

- **Transaction Control Language (TCL):** Used to manage transactions in the database, ensuring data integrity.

## RDBMS

RDBMS which stands for Relational Database Management System is some kind of database that has tables (called relations) with each entry has an ID (something exactly like the national ID if you wish used to uniquely identify that entry) called the *Primary key* to uniquely identify that entry (piece of data). but this entry may also have a foreign key which is just another ID of another entry that lives in another table so we can associate entries together and build relations between them. Hence, the name *relational*.

## Normalization
In RDBMS there is a technique called *Normalization* which is used to eleminate redundancy between tables in the database so we can store as little data as needed to save space and increase performance.

---
These are the basics that you need to know! ;)
