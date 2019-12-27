$(function(){
    $("body").css({opacity:'0'});
    setTimeout(function(){
        $("body").stop().animate({opacity:'1'},1000);
    },3000);
});





setTimeout(ConcertoDialogController.load, 3);


複数ajaxの為、intervalしたい


実行後はsessiionStorageに記憶



