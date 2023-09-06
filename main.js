
// zzzzzzzzzzzzz  Nav bar

const navAnim = () => {
    let menu = document.querySelector('.nav_bars')
    let navItem = document.querySelector('.nav_item')
    let navList = document.querySelectorAll('.nav_list')



    menu.addEventListener('click', () => {
        navItem.classList.toggle('active_bar')
        navList.forEach((list, index) => {
            if (list.style.animation) {
                list.style.animation = ''
            }

            else {
                list.style.animation = `matrix 0.4s ease forwards ${index / 7 + 0.45}s`
            }
        })
        menu.classList.toggle('toggle')


    })
}


navAnim()

// zzzzzzzzzzzzzzz  Nav hover



let navLink = document.querySelectorAll('.nav_link')
let nav = document.getElementById('nav')

for (let i = 0; i < navLink.length; i++) {
    const navLinks = navLink[i];

    navLinks.addEventListener('mousemove', hover)
    navLinks.addEventListener('mouseout', hoverOver)

    function hover() {
        nav.style.boxShadow = '-1px -4px 16px var(--hover)'

    }
    function hoverOver() {
        nav.style.boxShadow = '-1px -4px 16px var(--tex)'

    }


}


// zzzzzzzzzzzzzzzzzzzzz  banner


let icon = document.querySelectorAll('.icons')
let headerText = document.querySelectorAll('.header__text')



for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', () => {
        for (let k = 0; k < icon.length; k++) {
            headerText[k].classList.remove('active_tex')
        }
        headerText[i].classList.add('active_tex')
    })
}



// zzzzzzzzzzzzzzzzzzzzzzz



function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
   }

   function fadeOut(){
    setInterval(loader, 3000);
   }

   window.onload = fadeOut()




//    zzzzzzzzzzzzzzz -=about
