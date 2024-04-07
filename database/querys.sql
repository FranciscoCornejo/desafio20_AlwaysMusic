create table musicos 
(id serial primary key, 
nombre varchar(50) not null,
rut varchar(50) unique not null,
curso varchar(50) not null,
nivel varchar(50) not null
);