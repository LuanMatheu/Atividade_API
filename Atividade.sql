CREATE DATABASE prova;

CREATE TABLE Usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);


CREATE TABLE Contatos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  endereco VARCHAR(200),
  telefone VARCHAR(20),
  instagram VARCHAR(100),
  linkedin VARCHAR(100),
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);


CREATE TABLE ExperienciaProfissional (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  nome_empresa VARCHAR(100) NOT NULL,
  inicio_trabalho DATE NOT NULL,
  fim_trabalho DATE,
  trabalho_atual TINYINT(1) DEFAULT 0,
  cargo VARCHAR(100),
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);


CREATE TABLE Escolaridade (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  instituicao_nome VARCHAR(100) NOT NULL,
  curso_nome VARCHAR(100) NOT NULL,
  ano_conclusao INT,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);


CREATE TABLE AtividadesExtracurriculares (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  nome_atividade VARCHAR(100) NOT NULL,
  detalhes VARCHAR(200),
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);


CREATE TABLE Certificacoes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  nome_certificacao VARCHAR(100) NOT NULL,
  instituicao VARCHAR(100),
  data_termino DATE,
  FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);
