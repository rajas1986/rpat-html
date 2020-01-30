// $(function(){

//     function equalHeight(){ 
//         var heightArray = $(".sameHeight").map( function(){
//             return  $(this).height();
//         }).get(); 
//         var maxHeight = Math.max.apply( Math, heightArray);
//             $(".sameHeight").height(maxHeight);
//         } 
//     equalHeight();
// });

/*$(function() {
    if (window.matchMedia("(min-width: 1000px)").matches) { 
		    equalHeight();
     } 
}); */

$(document).ready(function(){
	$(".clickReview").click(function(){
	  $(this).parent(".revies").toggleClass("orange");
	});        
});

function equalHeight(){ 
	var heightArray = $(".sameHeight:visible").map( function(){
	    return  $(this).height();
	}).get(); 
	var maxHeight = Math.max.apply( Math, heightArray);
    $(".sameHeight:visible").height(maxHeight);
}