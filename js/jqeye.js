// Invoke jqEye method when the page is loaded.
jQuery(document).ready(function() {
    jQuery("#ellipse28  div.pupil28").jqEye({shape: "ellipse", width:155, height:60});
    jQuery("#ellipse29  div.pupil29").jqEye({shape: "ellipse", width:100, height:60});
    jQuery("#ellipse30  div.pupil30").jqEye({shape: "ellipse", width:100, height:30});
    jQuery("#ellipse31  div.pupil31").jqEye({shape: "ellipse", width:200, height:10});
    jQuery("#ellipse32  div.pupil32").jqEye({shape: "ellipse", width:120, height:29});
    jQuery("#ellipse33  div.pupil33").jqEye({shape: "ellipse", width:90, height:10});
    jQuery("#ellipse34  div.pupil34").jqEye({shape: "ellipse", width:155, height:40});
    jQuery("#ellipse35  div.pupil35").jqEye({shape: "ellipse", width:100, height:60});
    jQuery("#ellipse36  div.pupil36").jqEye({shape: "ellipse", width:100, height:30});
    jQuery("#ellipse37  div.pupil37").jqEye({shape: "ellipse", width:200, height:10});
    jQuery("#ellipse38  div.pupil38").jqEye({shape: "ellipse", width:120, height:29});
    jQuery("#ellipse39  div.pupil39").jqEye({shape: "ellipse", width:90, height:10});
	jQuery("#ellipse40  div.pupil40").jqEye({shape: "ellipse", width:155, height:40});
    jQuery("#ellipse41  div.pupil41").jqEye({shape: "ellipse", width:100, height:60});
    jQuery("#ellipse42  div.pupil42").jqEye({shape: "ellipse", width:100, height:30});
    jQuery("#ellipse43  div.pupil43").jqEye({shape: "ellipse", width:200, height:10});
    jQuery("#ellipse44  div.pupil44").jqEye({shape: "ellipse", width:120, height:29});
    jQuery("#ellipse45  div.pupil45").jqEye({shape: "ellipse", width:90, height:10});
	jQuery("#ellipse46  div.pupil46").jqEye({shape: "ellipse", width:155, height:40});
    jQuery("#ellipse47  div.pupil47").jqEye({shape: "ellipse", width:100, height:60});
    jQuery("#ellipse48  div.pupil48").jqEye({shape: "ellipse", width:100, height:30});
    jQuery("#ellipse49  div.pupil49").jqEye({shape: "ellipse", width:200, height:10});
    jQuery("#ellipse50  div.pupil50").jqEye({shape: "ellipse", width:120, height:29});
    jQuery("#ellipse51  div.pupil51").jqEye({shape: "ellipse", width:90, height:10});
	jQuery("#ellipse52  div.pupil52").jqEye({shape: "ellipse", width:155, height:40});
    jQuery("#ellipse53  div.pupil53").jqEye({shape: "ellipse", width:100, height:60});
    jQuery("#ellipse54  div.pupil54").jqEye({shape: "ellipse", width:100, height:30});
    jQuery("#ellipse55  div.pupil55").jqEye({shape: "ellipse", width:200, height:10});
    jQuery("#ellipse56  div.pupil56").jqEye({shape: "ellipse", width:120, height:29});
    jQuery("#ellipse57  div.pupil57").jqEye({shape: "ellipse", width:90, height:10});
    jQuery("#ellipse58  div.pupil58").jqEye({shape: "ellipse", width:100, height:30});
    jQuery("#ellipse59  div.pupil59").jqEye({shape: "ellipse", width:200, height:50});
    jQuery("#ellipse60  div.pupil60").jqEye({shape: "ellipse", width:120, height:29});
    jQuery("#ellipse61  div.pupil61").jqEye({shape: "ellipse", width:90, height:10});
  $(window).scroll(function(e){
    parallaxScroll();
    });
     
    function parallaxScroll(){
        var scrolled = $(window).scrollLeft();
        $('#para-front').css('left',(0-(scrolled*.05))+'px');
        $('#para-mid').css('left',(0-(scrolled*.25))+'px');
        $('#para-back').css('left',(0-(scrolled*.45))+'px');
    }
 }); 
$('.eye').hover(function(){
    $(this).effect( "shake", { direction: "left", distance: 500});
    $(this).children(':nth-child(1)').addClass('smallpupil');
})


// $('.eye').click(function(){
//     $(this).effect("clip", {direction: "vertical"}, 1000 );
// })
// $('.eye').on('click', function(){
//    $('.closing').slideDown(600);
//    console.log('addedclick');
// })
$('.eye').mouseout(function(){
    $(this).children(':nth-child(1)').removeClass('smallpupil');
})


// jqEye plugin's definition
/*! jqEyes v1.02 | (c) 2014 Jose F. Maldonado | http://www.gnu.org/licenses/lgpl-3.0.txt */
!function(t){t.fn.jqEye=function(i){function e(t,i,e,h){var a={x:t,y:i};return t>e/2&&(a.x=e/2),-e/2>t&&(a.x=-e/2),i>h/2&&(a.y=h/2),-h/2>i&&(a.y=-h/2),a}function h(t,i,e){var h={x:t,y:i};if(t*t+i*i>e*e)if(0!==t){var a=i/t;h.x=Math.sqrt(e*e/(a*a+1)),h.x=t>0?h.x:-h.x,h.y=Math.abs(a*h.x),h.y=i>0?h.y:-h.y}else h.y=i>0?e:-e;return h}function a(t,i,e,h){var a={x:t,y:i};if(t*t/(e*e)+i*i/(h*h)>1)if(0!==t){var s=i/t;a.x=Math.sqrt(1/(1/(e*e)+s*s/(h*h))),a.x=t>0?a.x:-a.x,a.y=Math.abs(s*a.x),a.y=i>0?a.y:-a.y}else a.y=i>0?h:-h;return a}function s(t,i,a,s,r){var n={x:t,y:i},f=a/2-r,o=s/2-r;if(Math.abs(t)>f&&Math.abs(i)>o){var y=h(Math.abs(t)-f,Math.abs(i)-o,r);n.x=t>0?y.x+f:-(y.x+f),n.y=i>0?y.y+o:-(y.y+o)}else n=e(t,i,a,s);return n}var r=t.extend({shape:"circle",radius:20,width:40,height:40},i);return this.each(function(){var i=t(this),n=t(this).position().left+t(this).width()/2,f=t(this).position().top+t(this).height()/2,o=t(this).offset().left+t(this).width()/2,y=t(this).offset().top+t(this).height()/2;t(document).mousemove(function(x){var c=x.clientX,u=x.clientY,l=c-o+t(window).scrollLeft(),d=u-y+t(window).scrollTop();if("rectangle"===r.shape){var v=e(l,d,r.width,r.height);l=v.x,d=v.y}if("circle"===r.shape){var p=h(l,d,r.radius);l=p.x,d=p.y}if("ellipse"===r.shape){var w=a(l,d,r.width/2,r.height/2);l=w.x,d=w.y}if("rounded rectangle"===r.shape){var g=s(l,d,r.width,r.height,r.radius);l=g.x,d=g.y}l=l+n-i.width()/2,d=d+f-i.height()/2,i.css({left:l,top:d})})})}}(jQuery);