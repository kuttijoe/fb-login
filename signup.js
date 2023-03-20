let form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("welcome");

    let fname=document.querySelector('#fname').value;
    let sname=document.querySelector('#sname').value;
    let email=document.querySelector('#email').value;
    let psw=document.querySelector('#psw').value;
    let gender=document.querySelector('.abs').value;
    let result=document.querySelector('.result');

    localStorage.setItem('Name',fname);
    localStorage.setItem('SurName',sname);
    localStorage.setItem('Email',email);
    localStorage.setItem('Password',psw);

    if(fname==="" || !(isNaN(fname))){
        result.innerHTML="please enter the correct first name";
    }
    else if(sname==="" || !(isNaN(sname))){
        result.innerHTML="please enter the correct sur name";
    }
    else if(email==="" || isNaN(email)){
        result.innerHTML="please enter the phone number";
    }
    else if(psw===""){
        result.innerHTML="please enter the password";
    }
    else{
        result.innerHTML="sign in successful";
        result.style.color="green";
    }

});