$(function() {

function pageLoad() {
    var hash = $(location).attr('hash');
    //var hash2 = window.location.href.split('#')[0];

    hash = hash.substring(1, hash.length);
console.log(typeof hash);

console.log(hash);
    if(hash === 'test') {
console.log(1);
	$('.sections').hide();
	$('#' + hash).addClass('maw').show();
    } else if(hash === 'world-cup') {
console.log(2);
	$('.sections').hide();
	$('#' + hash).addClass('maw').show();
    } else {
console.log(3);
	$('.sections').hide();
	// line below will add the the hashtag to the back of the URL
	// location.hash = 'blah';
	
	return false;
    }

    
    //console.log(hash2);
}
 
pageLoad();   

$(window).on('hashchange', function(e){
    // Your Code goes here
console.log('URL has been updated');
    pageLoad();
});

$('.nav-link').click(function() {
    location.hash = $(this).data('hash');
console.log('id is ' + $(this).data('hash'));
});

});