/*
 * Copyright (c) 2016 Milan Kyncl
 * Licensed under the MIT license.
 *
 * jquery.copy-to-clipboard plugin
 * https://github.com/mmkyncl/jquery-copy-to-clipboard
 *
 */

$.fn.CopyToClipboard = function() {
    var textToCopy = false;
    if(this.is('select') || this.is('a') || this.is('input')){
        textToCopy = this.val();
    }else {
        textToCopy = this.text();
    }
    CopyToClipboard(textToCopy);
};

function CopyToClipboard( val ){
    var hiddenClipboard = $('#_hiddenClipboard_');
    if(!hiddenClipboard.length){
        $('body').append('<a style="position:relative;top: -9999px;" id="_hiddenClipboard_"></a>');
        hiddenClipboard = $('#_hiddenClipboard_');
    }
    hiddenClipboard.html(val);
    hiddenClipboard.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
}

$(function(){
    $('[data-clipboard-target]').each(function(){
        $(this).click(function() {
            $($(this).data('clipboard-target')).CopyToClipboard();
        });
    });
    $('[data-clipboard-text]').each(function(){
        $(this).click(function(){
            CopyToClipboard($(this).data('clipboard-text'));
        });
    });
});