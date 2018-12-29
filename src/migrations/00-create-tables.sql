CREATE TABLE public.tb_dono (
	id serial NOT NULL,
	nome varchar(50) NOT NULL,
	ativo bool NOT NULL DEFAULT true
);
