//for hamburger-menu button for mobile-view//
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
//multiple-slideshows for review//
let slideIndex = [1,1];
let slideId = ['mySlides1']
    showSlides(1,0);
    showSlides(1,1);
function plusSlides(n, no){
    showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no){
    let i;
    let x = document.getElementsByClassName(slideId[no])
if(n > x.length){
    slideIndex[no] = 1}
if(n < 1){
    slideIndex[no] = x.length}
  for(i=0; i<x.length; i++){
    x[i].style.display = 'none'
  }
  x[slideIndex[no]-1].style.display = 'block'
}
//multiple-slideshows end//
/*const changeBackground = document.getElementsByClassName(fa-moon)
  changeBackground.addEventListener('click', function(){
  changeBackground.classList.toggle('darkmode')
    }*/
//darkmode function//
function myFunction() {
  let element = document.body
  element.classList.toggle('darkmode')
}

//message to Email by Formspree//
 window.addEventListener("DOMContentLoaded", function() {
  //get the form elements defined to your html
  var form = document.getElementById("my-form")
  var status = document.getElementById("status")
  //success and error functions for after the form is submitted
  function success(){
    form.reset();
    status.classList.toogle('success')
    status.innerHTML = "Thanks!"
  }
  function error(){
    status.classList.toggle('error')
    status.innerHTML = "Ooops!! There was a problem."
  } 
  //handle the form submission event
  form.addEventListener("submit", function(ev) {
      ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  })
})
 //helper function for sending on AJAX request
function ajax(method, url, data, success, error){
   var xhr = new XMLHttpRequest();
   xhr.open (method, url);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function (){
     if (xhr.readyState !== XMLHttpRequest.DONE) return;
     if(xhr.status === 200) {
       success(xhr.response, xhr.responseType);
     } else {
       error(xhr.status, xhr.response, xhr.responseType);
     }
   };
   xhr.send(data);
}
//Project Ends//