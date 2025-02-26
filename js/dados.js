function enviar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511947431188';

    const text = `Olá, meu nome é ${nome}, mensagem: ${mensagem}.`;
    const msgFormatada = encodeURIComponent(text);

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    window.open(url, '_blank'); 
}