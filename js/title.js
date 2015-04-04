var scrollVal = 0;

var layer0 = document.getElementById("layer-0");
var layer1 = document.getElementById("layer-1");
var layer2 = document.getElementById("layer-2");
var layer3 = document.getElementById("layer-3");
var layer4 = document.getElementById("layer-4");

function parallaxy()
{   
    offset4 = (scrollVal * 0.3);
	offset3 = (scrollVal * 0.2);
	offset2 = (scrollVal * 0.1);
	offset1 = 0;
	offset0 = 0;

	layer0.style.webkitTransform = "translate3d(" + offset0 + "px, " + scrollVal + "px, 0)";
	layer0.style.MozTransform = "translate3d(" + offset0 + "px, " + scrollVal + "px, 0)";
	layer0.style.msTransform = "translateY(" + offset0 + "px)";
	layer0.style.OTransform = "translate3d(" + offset0 + "px, " + scrollVal + "px, 0)";
	layer0.style.transform = "translate3d(" + offset0 + "px, " + scrollVal + "px, 0)";

	layer1.style.webkitTransform = "translate3d(" + offset1 + "px, " + scrollVal + "px, 0)";
	layer1.style.MozTransform = "translate3d(" + offset1 + "px, " + scrollVal + "px, 0)";
	layer1.style.msTransform = "translateY(" + offset1 + "px)";
	layer1.style.OTransform = "translate3d(" + offset1 + "px, " + scrollVal + "px, 0)";
	layer1.style.transform = "translate3d(" + offset1 + "px, " + scrollVal + "px, 0)";

	layer2.style.webkitTransform = "translate3d(" + offset2 + "px, " + scrollVal + "px, 0)";
	layer2.style.MozTransform = "translate3d(" + offset2 + "px, " + scrollVal + "px, 0)";
	layer2.style.msTransform = "translateY(" + offset2 + "px)";
	layer2.style.OTransform = "translate3d(" + offset2 + "px, " + scrollVal + "px, 0)";
	layer2.style.transform ="translate3d(" + offset2 + "px, " + scrollVal + "px, 0)";

	layer3.style.webkitTransform = "translate3d(" + offset3 + "px, " + scrollVal + "px, 0)";
	layer3.style.MozTransform = "translate3d(" + offset3 + "px, " + scrollVal + "px, 0)";
	layer3.style.msTransform = "translateY(" + offset3 + "px)";
	layer3.style.OTransform = "translate3d(" + offset3 + "px, " + scrollVal + "px, 0)";
	layer3.style.transform = "translate3d(" + offset3 + "px, " + scrollVal + "px, 0)";
    
    layer4.style.webkitTransform = "translate3d(" + offset4 + "px, " + scrollVal + "px, 0)";
	layer4.style.MozTransform = "translate3d(" + offset4 + "px, " + scrollVal + "px, 0)";
	layer4.style.msTransform = "translateY(" + offset4 + "px)";
	layer4.style.OTransform = "translate3d(" + offset4 + "px, " + scrollVal + "px, 0)";
	layer4.style.transform = "translate3d(" + offset4 + "px, " + scrollVal + "px, 0)";
}


function scrollHandler(e)
{
	scrollVal = Math.max(window.pageYOffset,0);
    if (scrollVal <= 2000) parallaxy();
}

document.addEventListener('scroll', scrollHandler, false);