const elemWithMeasure = function(element){ //这是个函数
//获取元素相对浏览器视口的横向距离
	const leftInView = function(element){
　　　　let actualLeft = element.offsetLeft;
　　　　let current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualLeft += current.offsetLeft;
　　　　　　current = current.offsetParent;
　　　　}
		/*
　　　　if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollLeft=document.body.scrollLeft;
　　　　} else {
　　　　　　var elementScrollLeft=document.documentElement.scrollLeft; 
　　　　}
		*/
		let elementScrollLeft=document.body.scrollLeft;

　　　　return actualLeft-elementScrollLeft;
　　}

	//获取元素相对浏览器视口的纵向距离
　　const topInView = function(element){
		let actualTop = element.offsetTop;
　　　　let current = element.offsetParent;

　　　　while (current !== null){
　　　　　　actualTop += current. offsetTop;
　　　　　　current = current.offsetParent;
　　　　}
		/*
　　　　 if (document.compatMode == "BackCompat"){
　　　　　　var elementScrollTop=document.body.scrollTop;
　　　　} else {
　　　　　　var elementScrollTop=document.documentElement.scrollTop; 
　　　　}*/
		let elementScrollTop=document.body.scrollTop;
　　　　return actualTop-elementScrollTop;
　　}
	//获得元素的整个宽度
	const elemWidth = function(element){
		return element.offsetWidth;
	}
	//获得元素的整个高度
	const elemHeight = function(element){
		return element.offsetHeight;
	}

	return {
		leftInView:leftInView(element),//这些都是Number，可以直接使用
		topInView:topInView(element),
		width:elemWidth(element),
		height:elemHeight(element)
	}
};

const clientWithMeasure = (function(){//这是个对象
	return {
		width: screen.width,
		height: screen.height
	}
})();
export {elemWithMeasure,clientWithMeasure};