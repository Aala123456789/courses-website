/* page loader*/
window.addEventListener('load', function() {
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none"
    }, 600);
})


function testmonialSlider() {
    const carousel = document.getElementById('carouselExampleControls');
    if (carousel) {

        carousel.addEventListener('slide.bs.carousel', function() {
            const activeItem = document.querySelector('.active');

            document.querySelector('.js-img').src =
                activeItem.getAttribute('data-js-tesmonial-img')
        })
    }

}
testmonialSlider();
/* cource modal*/
function courcePreviewVideo() {
    const courcePerviewModal = document.querySelector('.js-cource-perview-modal');
    if (courcePerviewModal) {
        courcePerviewModal.addEventListener('show.bs.modal', function() {
            this.querySelector(".js-cource-perview-video").play();
            this.querySelector(".js-cource-perview-video").currentTime = 0;

        })
        courcePerviewModal.addEventListener('hide.bs.modal', function() {
            this.querySelector(".js-cource-perview-video").pause();
        })
    }

}
courcePreviewVideo();

/*----------------------------------
         header menu
----------------------------------*/

/*----------------------------------
          style switcher
----------------------------------*/
function styleSwitcherToggler() {
    const styleSwitcher = document.querySelector(".js-style-switcher"),
        styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click", function() {
        styleSwitcher.classList.toggle('open');
        this.querySelector('i').classList.toggle('fa-times')
    })
}
styleSwitcherToggler();
/*          
theme color
*/
let themeColor = document.querySelectorAll('.js-theme-color-item');
themeColor.forEach(color => {

    color.addEventListener('click', () => {

        localStorage.setItem("theme-color", color.getAttribute('data-js-theme-color'))
        changeColor()
    });
    let dataColor = color.getAttribute('data-js-theme-color');

    function changeColor() {
        document.querySelector(':root').style.setProperty('--main-color', dataColor);

    }

    if (localStorage.getItem('theme-color') !== null) {
        document.querySelector(':root').style.setProperty('--main-color', localStorage.getItem('theme-color'))

    }




})



/*-----------
dark mode----*/
function darkMode() {
    const darkModeCheckBox = document.querySelector(".js-dark-mode");
    darkModeCheckBox.addEventListener("click", function() {
        if (darkModeCheckBox.checked) {
            localStorage.setItem("dark-mode", true)
        } else {
            localStorage.setItem("dark-mode", false)

        }
        themeMode()
    })

    function themeMode() {
        if (localStorage.getItem('dark-mode') === "false") {
            document.body.classList.remove("dark-mode")
        } else {
            document.body.classList.add("dark-mode")

        }
    }
    //عشان لما اعمل ريفريش تكون البيانات متخزنه
    if (localStorage.getItem('dark-mode') !== null) {
        themeMode();
    }
    //عشان لو انا اخترت الدارك مود واعمل ريفريش يبقي زرار الدارك مود متشيك
    if (document.body.classList.contains("dark-mode")) {
        darkModeCheckBox.checked = true
    }
}
darkMode()
    /*function darkM() {
        const darkModeCheckBox = document.querySelector(".js-dark-mode");
        darkModeCheckBox.addEventListener("click",function () {
            document.body.classList.toggle("dark-mode")
        })
        
        
    }
    darkM()*/
    /*-----------
glass mode----*/
function glassMode() {
    const glassModeCheckBox = document.querySelector(".js-glass-effect");
    const mainWrapper = document.querySelector('.main');
    glassModeCheckBox.addEventListener("click", function() {
        if (glassModeCheckBox.checked) {

            localStorage.setItem("glass-mode", true)
        } else {
            localStorage.setItem("glass-mode", false)

        }
        glassMode()
    })

    function glassMode() {
        if (localStorage.getItem('glass-mode') === "false") {
            document.body.classList.remove("glass-mode");
            document.body.classList.remove("glass-dark");

            mainWrapper.classList.remove('wrapper')
        } else {
            document.body.classList.add("glass-mode");
            mainWrapper.classList.add('wrapper');
            document.body.classList.add("glass-dark");




        }
    }
    //عشان لما اعمل ريفريش تكون البيانات متخزنه
    if (localStorage.getItem('glass-mode') !== null) {
        glassMode();
    }
    //عشان لو انا اخترت الدارك مود واعمل ريفريش يبقي زرار الدارك مود متشيك
    if (document.body.classList.contains("glass-mode")) {
        glassModeCheckBox.checked = true
    }
}
glassMode();


document.querySelector('.navbar-toggler').addEventListener('click', function() {
    console.log(offf)

});