function init() {
    console.log(localStorage.getItem('fname'))

    // sign out
    // localStorage.setItem('fname', null);
    // localStorage.setItem('lname', null);
}

init();


function loginaction() {
    let fname = document.getElementById('fname-id');
    let lname = document.getElementById('lname-id');
    let password = document.getElementById('pw-id');
    let confirmpassword = document.getElementById('cpw-id');
    let errormsg = document.getElementById('error-msg');

    if (fname.value.trim() == "") {
        errormsg.classList.add('show');
        errormsg.innerText = `Please Enter Firstname`;
        setTimeout(() => {
            errormsg.classList.remove('show');
        }, 3000);
    } else if (lname.value.trim() == "") {
        errormsg.classList.add('show');
        errormsg.innerText = `Please Enter Lastname`;
        setTimeout(() => {
            errormsg.classList.remove('show');
        }, 3000);
    } else if (password.value.trim() == "" || confirmpassword.value.trim() == "") {
        errormsg.classList.add('show');
        errormsg.innerText = `Please Enter Password`;
        setTimeout(() => {
            errormsg.classList.remove('show');
        }, 3000);
    } else if (password.value == confirmpassword.value) {
        localStorage.setItem('fname', fname.value);
        localStorage.setItem('lname', lname.value);
        window.location.href = 'welcome.html'
    } else {
        errormsg.classList.add('show');
        errormsg.innerText = 'Password Incorrect';

        setTimeout(() => {
            errormsg.classList.remove('show');
        }, 3000);
    }

}


//  Daymode and Nightmode 
let nightMode = document.getElementById('nightmode-id');
let dayMode = document.getElementById('daymode-id');
let navbar= document.getElementById('nav-bar')

function nightmode() {

    nightMode.style.backgroundColor = 'skyblue';
    dayMode.style.backgroundColor = "skyblue";
    navbar.style.backgroundColor='skyblue';

    document.body.style.backgroundColor = 'skyblue';


}

function daymode() {
    nightMode.style.backgroundColor = 'black';
    dayMode.style.backgroundColor = "black";
    navbar.style.backgroundColor='black';

    document.body.style.backgroundColor = 'black';
}

//backbutton
function loginbackbutton(){
    console.log("Here")
    window.history.go(-1); 
    return false;
}
