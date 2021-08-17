document.addEventListener('DOMContentLoaded', function () {
   
    const panels = document.querySelectorAll('.panel');
    for (let p of panels) {
        p.addEventListener('click', function () {
            console.log('clicked');
            this.classList.toggle('open');
        })
    }
    
    
});