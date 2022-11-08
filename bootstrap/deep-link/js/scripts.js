$(function() {
console.log('script loaded');
    var hash = $(location).attr('hash');
    var hash2 = window.location.href.split('#')[0];

    hash = hash.substring(1, hash.length);

    if(hash === 'test') {
	$('#' + hash).show();
    } else if(hash === 'world-cup') {
	$('#' + hash).show();
    } else {
	return false;
    }

    console.log(hash);
    console.log(hash2);
});