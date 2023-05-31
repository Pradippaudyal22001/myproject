let menubar= document.getElementById('header-right');
window.addEventListener('resize' ,function(){
    if(this.window.innerWidth < 600) {
        menubar.classList.add('display-none')
    }else{
        menubar.classList.remove('display-none')
    }
})

function showHideMenu(){
    
    menubar.classList.toggle("display-none")

}