const l = document.querySelector('#ad');
l.addEventListener('click', function(e) {
    unselectElements()
    if (e.target.tagName == "LI") {
        e.target.classList.add('ad')
         
    }

});

function unselectElements(){
    const l = document.querySelector('#ad').querySelectorAll('.ad');
    for(k of l){
        k.classList.remove('ad');
    }
}