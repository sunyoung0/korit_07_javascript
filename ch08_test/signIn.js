const loginId = document.getElementById('login-id');
const loginPassword = document.getElementById('login-password');
const signInButton = document.getElementById('sign-in-btn');

const logins = JSON.parse(localStorage.getItem('logins')) || [];

function checkSignIn() {
  // input 창에 입력한 아이디 / 비밀번호
  const idText = loginId.value.trim();
  const passwordText = loginPassword.value.trim();
  
  let isLogin = false;

  if(idText === '' || passwordText === '') {
    alert('아이디 / 비밀번호를 입력하세요!');
    return;
  }
  
  logins.forEach((login) => {
    if(login.username === idText && login.password === passwordText) {
      isLogin = true;
    } 
  });

  if(isLogin) {
    alert("로그인 성공");
  } else {
    alert("로그인 실패");
  }
}

signInButton.addEventListener('click', checkSignIn);