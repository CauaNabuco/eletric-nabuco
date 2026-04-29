$('.projeto-card').on('click', function(){

    let img = $(this).data('img');
    let desc = $(this).data('desc');

    $('#modal-img').attr('src', img);
    $('#modal-desc').text(desc);

    $('#modal-projeto').fadeIn();
});

$('#fechar-modal').on('click', function(){
    $('#modal-projeto').fadeOut();
});

$('#modal-projeto').on('click', function(e){
    if(e.target.id === 'modal-projeto'){
        $(this).fadeOut();
    }
});
