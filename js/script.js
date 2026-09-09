// Roda depois que toda a página carregou
$(document).ready(function () {

    // ===== FUNCIONALIDADE 1: Scroll suave do botão "Ver ofertas" até Categorias =====
    $('.banner__botao').on('click', function (evento) {
        evento.preventDefault(); // impede o link de "pular" direto
        $('html, body').animate({
            scrollTop: $('.categorias').offset().top
        }, 600); // 600ms de duração da animação
    });

    // ===== FUNCIONALIDADE 2: Toast ao clicar em "Ver produto" =====
    $('.produto-card__botao').on('click', function (evento) {
        evento.preventDefault();
        mostrarToast('Produto adicionado aos favoritos!');
    });

    function mostrarToast(mensagem) {
        const $toast = $('#toast');
        $toast.text(mensagem);
        $toast.addClass('toast--visivel');

        setTimeout(function () {
            $toast.removeClass('toast--visivel');
        }, 2500); // some depois de 2,5 segundos
    }

    // ===== FUNCIONALIDADE 3: Validação do formulário de login =====
    $('.login__form').on('submit', function (evento) {
        evento.preventDefault(); // impede o envio real (não temos backend)

        const email = $('#email').val().trim();
        const senha = $('#senha').val().trim();
        const $mensagem = $('#loginMensagem');

        // limpa classes de mensagens anteriores
        $mensagem.removeClass('login__mensagem--erro login__mensagem--sucesso');

        if (email === '' || senha === '') {
            $mensagem.text('Preencha e-mail e senha para continuar.');
            $mensagem.addClass('login__mensagem--erro');
            return;
        }

        if (senha.length < 6) {
            $mensagem.text('A senha precisa ter pelo menos 6 caracteres.');
            $mensagem.addClass('login__mensagem--erro');
            return;
        }

        // Se passou nas validações:
        $mensagem.text('Login realizado com sucesso! Redirecionando...');
        $mensagem.addClass('login__mensagem--sucesso');

        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1200);
    });

});