$('#apri-menu').click(function() {
    $('#menu-mobile').addClass('d-flex');
});
$('#chiudi-menu').click(function() {
    $('#menu-mobile').removeClass('d-flex');
});
$('#torna-su').click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
$('#bottone-invia').click(function(){
    $('#invia-messaggio').addClass('nascondi-form');
    $('.risposta-messaggio').removeClass('risposta-messaggio');
});