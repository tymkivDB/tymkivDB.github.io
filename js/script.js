var procentX, procentY, width;
	var elements1 = document.getElementsByClassName('image-container first');
	var elements2 = document.getElementsByClassName('image-container second');
	var elements3 = document.getElementsByClassName('image-container third');
	window.addEventListener('mousemove', function(e) {
		width = document.documentElement.clientWidth;
		height = document.documentElement.clientHeight;
		procentX = 100 * e.clientX / width;
		procentY = 100 * e.clientY / height;
		procentX = procentX - 50;
		procentY = procentY - 50;
		//console.log(procent);
		for(var i = 0; i< elements1.length;i++){
			elements1[i].style.transform = "translate(" + procentX/10 + 'px,' +  procentY/10 + 'px)';
		}
		for(var i = 0; i< elements2.length;i++){
			elements2[i].style.transform = "translate(" + procentX/5 + 'px,' +  procentY/5 + 'px)';
		}
		for(var i = 0; i< elements3.length;i++){
			elements3[i].style.transform = "translate(" + procentX/3 + 'px,' +  procentY/3 + 'px)';
		}
	});