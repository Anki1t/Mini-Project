$(document).ready(function(){
$('#Comment').click(function(){
    var input = $('#input').val();
$('.box').append(input + '<br>');
$('#input').val('');
$('.box-container').slidedown();
});

$('#cancel').click(function(){
    $('#input').val('');
});
$('#delete').click(function(){
    $('.box').text('');
    $('.box-container').slideup();
});

});