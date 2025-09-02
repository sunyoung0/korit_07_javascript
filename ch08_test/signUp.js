const loginId = document.getElementById('login-id');
const loginPassword = document.getElementById('login-password');
const signUpButton = document.getElementById('sign-up-btn');

const logins = JSON.parse(localStorage.getItem('logins')) || [];

function saveLogins() {
  localStorage.setItem('logins', JSON.stringify(logins));
}

function signUp() {
  const idText = loginId.value.trim();
  const passwordText = loginPassword.value.trim();

  if(idText === '' || passwordText === '') {
    alert('아이디 / 비밀번호를 입력하세요!');
    return;
  }

  const newLogins = {
    username : idText,
    password : passwordText,
  };

  logins.push(newLogins);

  loginId.value = '';
  loginPassword.value = '';

  saveLogins();

  alert('회원가입 성공! 로그인 페이지로 이동합니다.');

  window.location.href = './signIn.html';
}

signUpButton.addEventListener('click', signUp);