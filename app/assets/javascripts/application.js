//Scroll suave
const ItensMenu = document.querySelectorAll('nav a[href^="#"]')

ItensMenu.forEach( props => {
    props.addEventListener('click', scrollToIdonClick )
})

function scrollToIdonClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    let to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 80,
        behavior: "smooth" 
    })
}

//Menu transparente
$(window).scroll(() => {
    if($(document).scrollTop() > 50){
        $('nav').addClass('--bgNavBar--color')
    }else {
        $('nav').removeClass('--bgNavBar--color')
    }
})


// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require_tree .bb