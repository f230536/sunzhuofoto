var intro = document.getElementById('intro')
var title = document.getElementById('title')
var topic = document.getElementById('topic')
var subtitle = document.getElementById('subtitle')
var img_select_btn = document.querySelectorAll('.clearfix.colelem.img-next')
// var img_next_btn = img_select_btn.querySelectorAll('a')[1]
// var img_prev_btn = img_select_btn.querySelectorAll('a')[0]

var images = document.getElementById('image-container').querySelectorAll('img')
var img_btns = document.getElementById('image-container').querySelectorAll('div')
// console.log(img_select_btn.querySelectorAll('a'))

document.getElementById("next").addEventListener("click", clickOnNext);
for (var i= 0; i < img_btns.length; ++i)
{	
	img_select_btn[i].querySelectorAll('a')[1].addEventListener('click',clickOnNext)
	img_select_btn[i].querySelectorAll('a')[0].addEventListener('click',clickOnPrevious)
}


function clickOnNext(){
	console.log('Next page')
	console.log(intro.className)
	if( intro.className.indexOf('show') > -1)
	{
		intro.className = intro.className.replace('show', 'hide' )
		topic.className+='hide'
		unfade(img_select_btn[0])
		if (images.length!= 0){
			console.log("NONE")
			unfade(images[0])
		}
		document.getElementById("next").className +='hide'
		console.log('ADD Event')
		

	}
		// intro.className = 'hide'
	else
	{
		var pass = false
		for (var i = 0 ; i < images.length; ++i )
		{
			console.log('FAIL')
			if(images[i].className.indexOf('show') > -1 && i != images.length-1)
			{

				fade(images[i])
				setTimeout(function() {
					img_select_btn[i].className= img_btns[i].className.replace('show','hide')	
					images[i].className = images[i].className.replace('show', 'hide')
					unfade(images[i+1])
					img_select_btn[i+1].className= img_btns[i+1].className.replace('hide','show')

				},600);
				break
			}	
		}
	}
}

function clickOnPrevious(){
	console.log('Previous page')

	console.log(intro.className)
	
	var pass = false
	for (var i = images.length-1 ; i >=0; --i )
	{
		console.log(i)
		if(images[i].className.indexOf('show') > -1 && i != 0)
		{
			fade(images[i])
			setTimeout(function() {
				img_select_btn[i].className= img_btns[i].className.replace('show','hide')	
				images[i].className = images[i].className.replace('show', 'hide')
				unfade(images[i-1])
				img_select_btn[i-1].className= img_btns[i+1].className.replace('hide','show')
			},600);
			break
		}	
	}
	
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 25);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.opacity = op;
    element.className =element.className.replace('hide', 'show')
    // element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        // alert("here");
    }, 25);
}