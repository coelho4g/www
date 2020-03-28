img = document.querySelector('img')
img.onclick = function(){
    src = img.getAttribute('src')
    if(src === 'images/lamp.jpg'){
        img.setAttribute('src', 'images/broken.jpg')
    }else{
        img.setAttribute('src', 'images/lamp.jpg')
    }
}