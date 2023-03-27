CREATE TABLE clients (
	client_id serial4 NOT NULL,
	nome varchar(120) NOT NULL,
	email varchar(60) NOT NULL,
	telefone varchar(20) NOT NULL,
	data_de_registro date NOT NULL,
	CONSTRAINT clients_email_key UNIQUE (email),
	CONSTRAINT clients_pkey PRIMARY KEY (client_id),
	CONSTRAINT clients_telefone_key UNIQUE (telefone)
);
CREATE TABLE contacts (
	contact_id serial4 NOT NULL,
	client_id int4 NOT NULL,
	nome varchar(120) NOT NULL,
	email varchar(60) NOT NULL,
	telefone varchar(20) NOT NULL,
	data_de_registro date NOT NULL,
	CONSTRAINT contacts_email_key UNIQUE (email),
	CONSTRAINT contacts_pkey PRIMARY KEY (contact_id),
	CONSTRAINT contacts_telefone_key UNIQUE (telefone)
);