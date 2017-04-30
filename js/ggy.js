(function(){
    $(document).ready(function(){
    var allToggle =  $(".toggle-parent");
    for(var j = 0; j<allToggle.length; j++){
        console.log($(allToggle[j]).find('.toggle-item').length)
        if($(allToggle[j]).find('.toggle-item').length<=6){
            $(allToggle[j]).find('.show-more').hide();
        }
    }
    $(".show-more").click(function(event){
         event.preventDefault();
        $(this).closest('.toggle-parent').find('.toggle-item').removeClass('hide');
        $(this).closest('.toggle-parent').find('.show-less').removeClass('hide');
        $(this).addClass('hide');
    });
    $(".show-less").click(function(event){
        event.preventDefault();
        var dom = $(this).closest('.toggle-parent').find('.toggle-item');
        for(var i = 6; i<dom.length; i++){
            $(dom[i]).addClass('hide');
        }
        $(this).closest('.toggle-parent').find('.show-more').removeClass('hide');
        $(this).addClass('hide');
    });
});
})()