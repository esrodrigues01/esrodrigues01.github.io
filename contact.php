<?php
// Conexão com o banco de dados
$servername = '177.64.226.66'; // Nome do servidor MySQL
$username = 'externo'; // Seu nome de usuário MySQL
$password = 'A0g8a4g1@'; // Sua senha MySQL
$dbname = 'site'; // Nome do banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Recebendo os dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];

// Preparando e executando a query SQL
$sql = "INSERT INTO contato(nome, email, telefone, mensagem) VALUES ('$nome', '$email', '$telefone', '$mensagem')";

if ($conn->query($sql) === TRUE) {
    echo "."
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

// Fechando a conexão com o banco de dados
$conn->close();
?>
