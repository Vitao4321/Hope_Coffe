<!doctype html>
<html lang="pt-BR">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hope Coffee</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <!-- Bootstrap core CSS -->
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <!-- Favicons -->
  <link rel="icon" href="img/1.png" type="image/x-icon">
  <link rel="shortcut icon" href="img/1.png" type="image/x-icon">

  <link rel="stylesheet" type="text/css" href="style.css">

  <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
    rel="stylesheet">

</head>

<body>
  <!---HOME--->
  <section class="home" id="home">
    <div class="home-text">
      <h1>HOPE COFFEE<br><span>Seja nosso <br>Membro</span></h1>
      <p>O lugar ideal para apaixonados em café</p>
    </div>
  </section>

  <header>
    <div class="img-navlist">
      <img src="../img/4.png">
    </div>
    <a href="#" class="logo">Hope Coffee</a>
    <ul class="navlist">
      <li><a href="../index.html">Home</a></li>
      <li><a href="../produtos.html">Produtos</a></li>
      <li><a href="../index.html">Promoções</a></li>
      <li><a href="index.php?page=novo">Cadastro de usuarios</a></li>
      <li><a href="index.php?page=listar">Listar usuarios</a></li>
    </ul>

    <div class="header-icons">
      <a href="carrinho.html"><i class='bx bx-cart'></i></a>
      <div class="bx bx-menu" id="menu-icon"></div>
    </div>

  </header>

  <section>
    <div class="container">
      <div class="col-md-5">
        <?php

        include("config.php");

        switch (@$_REQUEST["page"]) {
          case "novo":
            include("novo_usuario.php");
            break;
          case "listar":
            include("listar_usuario.php");
            break;
          case "salvar":
            include("salvar_usuario.php");
            break;
          case "editar":
            include("editar_usuario.php");
            break;
          default:
            print "<h1>Bem Vindos!</h1>";
        }
        ?>
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>

  <script src="script.js"></script>
</body>

</html>