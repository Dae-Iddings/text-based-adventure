document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('#start-button');
    let input = document.querySelector('#name-input');
    this.addEventListener('click', function() {
        console.log(input.value);
    })
})