
const ok =document.querySelector(".hamburger");
        ok.addEventListener("click", function(){
          console.log("clicked")
           let navBar=document.querySelector(".nav-bar");
            navBar.classList.toggle(".active");
        });


const employee = (username, password) => {

  this.username = username;
  this.password = password;

  return (
    {
      username,
      password,
    }
  );
};

let employeeList = [
  employee('dc@dc', 'dckobhooklagi'),
  employee('anand@ayush', 'anandkobhooklagi'),
  employee('manroop@kaur', 'manroopkobhooklagi'),
  employee('aarav@bhaiya', 'aaravkobhooklagi'),
  employee('palak', 'palakisbest'),
]



function checkCredentials(usern, passwd) {
  for(let i = 0;  i < employeeList.length; i++) {
    let us = employeeList[i].username;
    let ps = employeeList[i].password;

    if(us == usern && passwd == ps) return true;
  }
  return false;
}

function loginEmployee() {
  let usernameInput = document.querySelector('input[type="email"]').value;
  let passwordInput = document.querySelector('input[type="password"]').value;
  
    console.log(usernameInput + " is usern")
    console.log(passwordInput + " is passwd")

  if(checkCredentials(usernameInput, passwordInput)) {
    let a = document.createElement('a');
    a.setAttribute('href', 'database.html');
    a.click();
  }
  else {
    alert('Incorrect Credentials')
  }
}


