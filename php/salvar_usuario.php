<?php
    switch ($_REQUEST["acao"]) {
        case 'cadastrar':
            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);
            $data_nasc = $_POST["data_nasc"];

            $sql = "INSERT INTO usuarios (nome, email, senha, data_nasc) VALUES ('{$nome}', '{$email}', '{$senha}', '{$data_nasc}')";

            $res = $conn->query($sql);

            if ($res === TRUE) {
                echo "<script>alert('Cadastro bem-sucedido!'); </script>";
                echo "<script>location.href='?page=listar'; </script>";
            } else {
                echo "<script>alert('Erro ao cadastrar '); </script>";
                echo "<script>location.href='?page=listar'; </script>";
            }           
            break;
        
        case 'editar':
            $nome = $_POST["nome"];
            $email = $_POST["email"];
            $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT);
            $data_nasc = $_POST["data_nasc"];

            $sql = "UPDATE usuarios SET 
                        nome='{$nome}',
                        email='{$email}',
                        senha='{$senha}',
                        data_nasc='{$data_nasc}' 
                    WHERE
                        id=".$_REQUEST["id"];

            $res = $conn->query($sql);

            if ($res === TRUE) {
                echo "<script>alert('Editado com sucesso!'); </script>";
                echo "<script>location.href='?page=listar'; </script>";
            } else {
                echo "<script>alert('Nao foi possivel editar'); </script>" . $conn->error;
                echo "<script>location.href='?page=listar'; </script>";
            }
            break;

        case 'excluir':
            $sql = "DELETE FROM usuarios WHERE id =".$_REQUEST["id"];

            $res = $conn->query($sql);

            if ($res === TRUE) {
                echo "<script>alert('Excluido com sucesso!'); </script>";
                echo "<script>location.href='?page=listar'; </script>";
            } else {
                echo "<script>alert('Nao foi possivel excluir'); </script>" . $conn->error;
                echo "<script>location.href='?page=listar'; </script>";
            }
            break;
            
    }
?>
