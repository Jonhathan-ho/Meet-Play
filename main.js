$(document).ready(function(){
    $('.btn-navigation').click(function(){
        $(this).find('.menuOuvert').toggleClass('tog');
        $(this).find('.menuFermer').toggleClass('hide');

        $('.navigation').toggleClass('isOpen');
    });
});