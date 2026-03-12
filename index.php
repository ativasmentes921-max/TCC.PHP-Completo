<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Cidadão Alerta </title>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./css/style.css">


</head>

<body>

    <!-- header  -->
    <header class=" header ">

        <img src="./img/cidadãoAlerta-removebg-preview.png" alt="Logotipo do Site" class="img">
        <div class="title">
            <br>
            <br>
            <h1> Cidadão Alerta: </h1>
            <h2> Seu Guia Digital </h2>
            <br>

        </div>

    </header>


    <div class="container">
        <div id="menu1">

            <!-- sistema de libras -->


            <div vw class="enabled">
                <div vw-access-button class="active"></div>
                <div vw-plugin-wrapper>
                    <div class="vw-plugin-top-wrapper"></div>
                </div>
            </div>


            <!-- inicio da web -->

            <div class="botoes">
                <nav id="botoes">
                    <button class="button"> Inicio </button>
                    <button class="button"> relatórios </button>
                    <button class="button"> protocolos </button>
                </nav>
            </div>



            <!-- barra de verificação de status -->
            <div id="status">
                
            </div>
            



            <?php

            // inicio do PHP
            $noticias = [
                ["categoria" => "ciber", "titulo" => "Vulnerabilidade em aplicativo financeiro corrigida", "data" => "21/02/2026 • Patch crítico"],
                ["categoria" => "Alerta", "titulo" => "Atenção: aumento de golpes via ligação 0800 falsa", "data" => "20/02/2026 • Boletim"]
            ];
            ?>

            <div id="noticias">

                <div class="news-card">
                    <!-- Mantém o layout centralizado -->
                    <div class="not">

                        <div class="not">Notícias de Segurança - atualizando agora</div>
                        <br>

                        <!-- Container externo do scroll -->
                        <div class="animate-scroll">
                            <?php foreach ($noticias as $noticia): ?>
                                <div class="news-card">
                                    <div class="news-category"><?php echo $noticia['categoria']; ?></div>
                                    <div class="news-title"><?php echo $noticia['titulo']; ?></div>
                                    <div class="news-date"><?php echo $noticia['data']; ?></div>
                                </div>
                            <?php endforeach; ?>



                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- lista de golpes mais frequentes -->

        <div id=menu2>

            <div id="feed">
                <div class="live-header">
                    <h2>feed em tempo real</h2>

                </div>
                <section class="live-card">
                    <p>golpes mais comuns (2026)</p>
                    <br>
                    <ol>
                        <p><strong>1. Gmail falso </p>
                        <br>
                        <p><strong>2. clonagem de voz </p>
                        <br>
                        <p><strong>3. Pix Agendado </p>
                    </ol>


            </div>

            <hr>
            <br>
            <!-- verificador de links -->
            <div class="verificador">
                <h2>verificar link suspeito</h2>
                <br>
                <p>cole o link que você deseja verificar</p>
            </div>
            <br>

            <div class="verificador-box">
                <input type="text"
                    type="text"
                    id="linkinput"
                    placeholder="Ex: https://site-suspeito.com">
                <button onclick="verificarlink()"> verificar </button>
            </div>
            </section>
        </div>

    </div>




    <div class="rodape">
        <footer>
            <span> © 2026 - Cidadão Alerta | Desenvolvido por: Mentes Ativas | @mentes_ativass (instagram) </span>
            <img src="./img/mentesAtiva-fundoCerto.png" alt=" Logotipo da Squad" class="imgRodape">
        </footer>
    </div>
</body>

<!-- parte de libras -->
<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
<script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
</script>

<!-- chamando o javaScript-->

<script src="./js/script.js"></script>

</html>