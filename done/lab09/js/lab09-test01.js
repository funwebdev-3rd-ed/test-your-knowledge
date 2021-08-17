document.getElementById('thumb-list').style.border = "solid 1px #CCCCCC";

document.querySelector('#msg').value = document.querySelector('.box fieldset p').textContent;

const images = document.querySelectorAll('#thumb-list img');
for (let img of images) {
    img.style.boxShadow = "6px 5px 20px 1px rgba(0,0,0,0.22)";
}

