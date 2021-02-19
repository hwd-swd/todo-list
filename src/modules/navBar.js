let toggleNav=function(e){
    let navBar = document.querySelector('.projectsContainer');
    if(navBar.style.width=='250px'||navBar.style.width==''){
        navBar.style.width="0px";
        navBar.style.padding='0';
    }
    else{
        navBar.style.width="250px";
        navBar.style.padding='1rem';
    }
};

let menuDOM = function(){
    let menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click',toggleNav);
}

export {menuDOM}