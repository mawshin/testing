$(function() {
console.log('script loaded');
    var hash = $(location).attr('hash');
    var hash2 = window.location.href.split('#')[0];

    hash.substring(1, hash.length);

    console.log(hash);
    console.log(hash2);
});