
      const userPass =null;
      const retypePass =null;
      const btnLogin = document.querySelector('#btnLogin');
      function checkCredentials(){
      const pass = document.getElementById('pass').null;
      const retype = document.getElementById('retype').null;

    if (pass == retypePass){
        alert ("Successfully Login!");
    }
    
    else {
      alert("Request unable to process.")
    }
}

btnLogin.addEventListener('click', checkCredentials);
