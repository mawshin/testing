$(function() {
console.log('script loaded');
    var hash = $(location).attr('hash');
    var hash2 = window.location.href.split('#')[0]

    console.log(hash);
    console.log(hash2);
});