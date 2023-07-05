let form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let phone=document.querySelector('#phone').value;
    let pass=document.querySelector('#psw').value;
    let result=document.querySelector('.result');
	let results=document.querySelector('.result-2');

    // if(phone==="" || isNaN(phone)){
    //     result.innerHTML="please enter the phone number";
    // }
    // else if(pass===""){
    //     result.innerHTML="please enter the password";
    // }
    // else{
    //     result.innerHTML="Login successful";
    //     result.style.color="green";
    // }

    // localStorage.setItem('Phone',phone);
    // localStorage.setItem('login Password',psw);

    let gphone=localStorage.getItem('Email');
    let gpsw=localStorage.getItem('Password');

    if(phone===gphone && pass===gpsw){
        results.innerHTML="Log In Successful";
    }
	else if(phone===""){
        result.innerHTML="please enter the phone number";
    }
	else if(pass===""){
        result.innerHTML="please enter the password";
    }
    

});