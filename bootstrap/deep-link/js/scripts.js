$(function() {

function pageLoad() {
    var hash = $(location).attr('hash');
    //var hash2 = window.location.href.split('#')[0];

    hash = hash.substring(1, hash.length);

    if(hash === 'test') {
	$('.sections').hide();
	$('#' + hash).show();
    } else if(hash === 'world-cup') {
	$('.sections').hide();
	$('#' + hash).show();
    } else {
	$('.sections').hide();
	// line below will add the the hashtag to the back of the URL
	// location.hash = 'blah';
	
	return false;
    }

    console.log(hash);
    console.log(hash2);
}
 
pageLoad();   

$(window).on('hashchange', function(e){
    // Your Code goes here
    pageLoad();
});

$('.nav-link').click(function() {
    location.hash = $(this).attr('id');
    pageLoad();
});

});