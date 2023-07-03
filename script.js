function gerarqrcode()
{
    var conteudo = document.getElementById('imagemqrcode').value;
    var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
    var imagemqrcode = GoogleCharts + conteudo;
    document.getElementById('imagem').src = imagemqrcode;
}