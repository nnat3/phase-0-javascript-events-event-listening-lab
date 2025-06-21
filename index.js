function addingEventListener(click) {
    const input = document.querySelector('input#button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}
