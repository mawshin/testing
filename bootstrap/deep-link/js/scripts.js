$(function() {

function pageLoad() {
    /*var hash = $(location).attr('hash');

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
    	
    	return false;
    }*/
    var origHash = $(location).attr('href');

    var hash = origHash.substring(origHash.indexOf('?')+1);
    console.log(origHash.indexOf('?'));

    $('.sections').hide();

    if(origHash.indexOf('?') !== -1) {
        $('#' + hash).show();
    } else {
        return false;
    }
    
    //console.log(hash2);
}
 
pageLoad();   

// $(window).on('hashchange', function(e){
//     // Your Code goes here
// console.log('URL has been updated');
//     pageLoad();
// });



$('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    var origHash = $(location).attr('href');
    var url = '';
    //console.log($(this).data('hash'));
    if($(this).data('hash') === undefined) {
        url = origHash.split('?')[0];
    } else if(origHash.indexOf('?') !== -1) {
        url = origHash.split('?')[0] + '?' + $(this).data('hash');
    } else {
        url = origHash + '?' + $(this).data('hash');
    } 
    //console.log(url);

    window.history.pushState({}, '', url);
    pageLoad();
});

});