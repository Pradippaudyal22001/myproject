let fnamefromstorage = localStorage.getItem('fname');
let lnamefromstorage = localStorage.getItem('lname');
console.log(fnamefromstorage);
console.log(lnamefromstorage);
let title = document.getElementById('title-id');
title.innerText = title.innerText + " " + fnamefromstorage +' '+lnamefromstorage;