const toggle = document.querySelector('.sidebar');
// const show = document.querySelector('.nav-below')


toggle.addEventListener('click', function () {
    let x = document.getElementById('myDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none'
    }
});

//     if (show.style.display === 'none') {
//         show.style.display = 'block';
//     } else {
//         show.style.display = 'none'
//     }
// });



