
// VARIÁVEIS PARA RELATÓRIOS

// total de links analisados
let totalLinks = 0;

// total de links seguros
let linksSeguros = 0;

// total de links suspeitos
let linksSuspeitos = 0; 3

// histórico de links analisados
let historicoLinks = [];


// -=- ADICIONA FUNÇÃO AOS BOTÕES -=-

document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(".button");
    const areaStatus = document.getElementById("status");
    const areaNoticias = document.getElementById("noticias");

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const texto = botao.textContent.trim().toLowerCase();

            //  -=-  HEADER  -=-
            if (texto.includes("inicio")) {

                areaNoticias.style.display = "block";

                areaStatus.innerHTML = `
                    <div id="status">

                `;
            }




            //  -=-  RELATÓRIOS  -=-



            else if (texto.includes("relat")) {

                areaNoticias.style.display = "none";

                let linhas = "";

                // gera histórico automaticamente
                historicoLinks.forEach(item => {

                    linhas += `
<tr>
    <td class="link-cell" title="${item.link}">${item.link}</td>
    <td class="${item.status === "Seguro" ? "seguro" : "suspeito"}">
        ${item.status}
    </td>
    <td>${item.data}</td>
</tr>
`;

                });

                areaStatus.innerHTML = `

            <!--  parte  visivel do  código  -->

        <div class="reportCard">

            <div class="card-header">
                <span>Relatórios de Segurança</span>
            </div>

            <div class="card-body">

                <div class="report-stats">

                <!--  Mostra o total de link análisados  -->

                    <div class="stat-box">
                        <h3>Links analisados</h3>
                        <p>${totalLinks}</p>
                    </div>

                <!-- mostra os links "seguros" -->

                    <div class="stat-box">
                        <h3>Seguros</h3>
                        <p class="seguro">${linksSeguros}</p>
                    </div>

                <!-- Mostra os links "suspeitos" -->

                    <div class="stat-box">
                        <h3>Suspeitos</h3>
                        <p class="suspeito">${linksSuspeitos}</p>
                    </div>

                </div>

                <!-- Históricos de links -->

                <div class="report-history">

                    <h3>Histórico</h3>

                    <table>

                        <tr>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Data</th>
                        </tr>

                        ${linhas}

                    </table>

                </div>

            </div>

        </div>
    `;
            }




            // -=- PROTOCOLOS -=-



            else if (texto.includes("protocolo")) {

                areaNoticias.style.display = "none";

                areaStatus.innerHTML = `

        <div class="card">

            <div class="card-header">
                <span>Protocolos de Segurança</span>
            </div>

            <div class="card-proto">

                <!-- BOTÕES DE SITUAÇÃO -->
                <div class="proto-botoes">

                    <button onclick="mostrarProtocolo('hack')">Conta hackeada</button>

                    <button onclick="mostrarProtocolo('compra')">Compra em site falso</button>

                    <button onclick="mostrarProtocolo('virus')">Vírus ou malware</button>

                    <button onclick="mostrarProtocolo('golpe')">Suspeita de golpe</button>

                </div>

                <!-- AQUI APARECE O PROTOCOLO -->
                <div id="resultadoProtocolo" class="resultado-protocolo">

                    <p>Selecione uma situação para ver o protocolo de segurança.</p>

                </div>

            </div>

        </div>
    `;
            }

        });

    });

});



// -=- FUNÇÃO PARA MOSTRAR OS PROTOCOLOS



function mostrarProtocolo(tipo) {

    const area = document.getElementById("resultadoProtocolo");

    // protocolo para conta hackeada
    if (tipo === "hack") {

        area.innerHTML = `
         <h3>Conta Hackeada</h3>
        
            <p>1. Alterar imediatamente a senha:
            Caso haja suspeita de invasão, a primeira ação recomendada é trocar a senha da conta afetada. 
            Utilize uma senha forte contendo letras maiúsculas, minúsculas, números e caracteres especiais.</p>

            <p>2. Ativar autenticação em dois fatores:
            Sempre que possível, habilite a verificação em duas etapas para adicionar uma camada extra de segurança no acesso à conta.</p>

            <p>3. Encerrar sessões desconhecidas:
            Verifique se existem dispositivos conectados que você não reconhece e finalize essas sessões imediatamente.</p>

            <p>4. Entrar em contato com o suporte da plataforma:
            Informe o ocorrido para que a empresa responsável pela conta possa investigar atividades suspeitas e ajudar na recuperação.</p>
        
        `;
    }

    // protocolo compra em site falso
    else if (tipo === "compra") {

        area.innerHTML = `
             <h3>Compra em Site Falso</h3>

            <p>1. Contatar o banco ou operadora do cartão:
            Caso a compra tenha sido realizada com cartão ou transferência bancária, entre em contato imediatamente com a instituição financeira.</p>

            <p>2. Solicitar bloqueio ou cancelamento da transação: 
            Muitas instituições conseguem interromper ou contestar pagamentos suspeitos quando o aviso é feito rapidamente.</p>

            <p>3. Registrar uma ocorrência: 
            Em situações de fraude, é recomendado registrar um boletim de ocorrência para documentar o caso.</p>

            <p>4. Monitorar movimentações financeiras:
            Após o incidente, acompanhe extratos e notificações bancárias para identificar possíveis movimentações não autorizadas.</p>
        `;
    }

    // protocolo vírus
    else if (tipo === "virus") {

        area.innerHTML = `
             <h3>Vírus ou Malware</h3>
            
            <p>1. Desconectar o dispositivo da internet:
            Isso pode impedir que o software malicioso continue enviando dados ou se espalhando pela rede.</p>

            <p>2. Executar um antivírus atualizado:
            Utilize um programa de segurança confiável para realizar uma varredura completa no sistema.</p>

            <p>3. Remover arquivos suspeitos:
            Caso o antivírus identifique ameaças, siga as instruções para remover ou colocar os arquivos em quarentena.</p>

            <p>4. Atualizar o sistema e senhas:
            Após eliminar o vírus, atualize o sistema operacional e altere as senhas utilizadas no dispositivo.</p>
            
        `;
    }

    // protocolo suspeita de golpe
    else if (tipo === "golpe") {

        area.innerHTML = `
           <h3>Suspeita de Golpe</h3>

            <p>1. Não clicar em links desconhecidos:
            Golpistas frequentemente utilizam links falsos para roubar dados pessoais ou financeiros.</p>

            <p>2. Verificar a autenticidade da mensagem:
            Confirme se o remetente realmente pertence à empresa ou instituição mencionada.</p>

            <p>3. Bloquear o contato suspeito: 
            Caso a mensagem tenha sido enviada por redes sociais ou aplicativos de mensagens, bloqueie o número ou perfil.</p>

            <p>4. Denunciar na plataforma:
            Utilize os mecanismos de denúncia disponíveis no aplicativo ou site para ajudar a evitar que outras pessoas sejam vítimas.</p>
        `;
    }

}


// FUNÇÃO PRINCIPAL DE VERIFICAÇÃO DE LINK

function verificarlink() {

    // pega o campo onde o usuário digitou o link
    const input = document.getElementById("linkinput");

    // remove espaços e deixa tudo minúsculo
    const link = input.value.trim().toLowerCase();



    // -==- VERIFICA SE O CAMPO ESTÁ VAZIO -==-


    if (link === "") {
        alert("Digite um link para verificar.");
        return;
    }



    //  DEFINE STATUS PADRÃO


    // por padrão o link começa como seguro
    let status = "Seguro";



    //   VERIFICA FORMATO DO LINK


    if (!link.startsWith("http://") && !link.startsWith("https://")) {

        status = "Suspeito";
        alert("⚠ Link suspeito: formato inválido.");
    }



    //   BLOQUEIO DE SITES DE APOSTA


    const apostas = [
        "bet", "casino", "aposta", "bet365",
        "pixbet", "1xbet", "betano", "betfair"
    ];

    apostas.forEach(palavra => {

        if (link.includes(palavra)) {
            status = "Suspeito";
            alert("⚠ Site de apostas detectado.");
        }

    });



    //   PALAVRAS USADAS EM GOLPES


    const palavrasGolpe = [
        "login",
        "gratis",
        "promo",
        "pix",
        "urgente",
        "oferta",
        "bonus",
        "ganhe",
        "premio",
        "resgate",
        "desconto"
    ];

    palavrasGolpe.forEach(palavra => {

        if (link.includes(palavra)) {
            status = "Suspeito";
            alert("⚠ Possível tentativa de golpe detectada.");
        }

    });



    //   DETECÇÃO DE ENCURTADORES


    const encurtadores = [
        "bit.ly",
        "tinyurl",
        "t.co",
        "goo.gl",
        "is.gd",
        "cutt.ly"
    ];

    encurtadores.forEach(encurtador => {

        if (link.includes(encurtador)) {
            status = "Suspeito";
            alert("⚠ Link encurtado detectado.");
        }

    });



    //   DOMÍNIOS SUSPEITOS


    const dominiosSuspeitos = [
        ".xyz",
        ".top",
        ".click",
        ".gq",
        ".work",
        ".zip",
        ".country"
    ];

    dominiosSuspeitos.forEach(dominio => {

        if (link.includes(dominio)) {
            status = "Suspeito";
            alert("⚠ Domínio considerado de alto risco.");
        }

    });



    //   VERIFICA TAMANHO DO LINK


    if (link.length > 120) {

        status = "Suspeito";
        alert("⚠ Link muito longo. Pode esconder parâmetros maliciosos.");
    }



    //   ANALISA QUANTIDADE DE NÚMEROS


    const numeros = link.match(/[0-9]/g);

    if (numeros && numeros.length > 6) {

        status = "Suspeito";
        alert("⚠ Link com muitos números. Pode ser gerado automaticamente.");
    }



    //   RESULTADO FINAL


    if (status === "Seguro") {

        linksSeguros++;
        alert("✅ Link aparentemente seguro.");

    } else {

        linksSuspeitos++;
    }

    // incrementa total analisado
    totalLinks++;



    //   SALVAR NO HISTÓRICO


    const data = new Date().toLocaleDateString();

    historicoLinks.unshift({
        link: link,
        status: status,
        data: data
    });

    // ATUALIZA RELATÓRIOS AUTOMATICAMENTE
    function atualizarRelatorios(){

    const total = document.querySelector(".stat-box:nth-child(1) p");
    const seguros = document.querySelector(".stat-box:nth-child(2) p");
    const suspeitos = document.querySelector(".stat-box:nth-child(3) p");

    // se o relatório não estiver aberto, não faz nada
    if(!total) return;

    total.textContent = totalLinks;
    seguros.textContent = linksSeguros;
    suspeitos.textContent = linksSuspeitos;

}

    // mantém apenas os 5 últimos registros
    if (historicoLinks.length > 5) {
        historicoLinks.pop();
    }
    atualizarRelatorios();

}