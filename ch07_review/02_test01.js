// id / password 결과값을 변수에 대입
const loginId = document.getElementById('login-id');
const loginPassword = document.getElementById('login-password');
const signUpButton = document.getElementById('sign-up-btn');

// 처음 페이지에 들어갔을 때 localstorage를 참조해서 기존 로그인 데이터 가지고 오기
const logins = JSON.parse(localStorage.getItem('logins')) || [];

// 회원가입 정보를 localstorage에 저장
function saveLogins() {
  localStorage.setItem('logins', JSON.stringify(logins));
}

// 회원가입
function addSignUp() {
  const idText = loginId.value.trim();
  const passwordText = loginPassword.value.trim();

  if(idText === '' || passwordText === '') {
    alert('아이디 / 비밀번호를 입력하세요!');
    return;
  }

  const newLogins = {
    id : idText,
    password : passwordText,
  };

  logins.push(newLogins);

  loginId.value = '';
  loginPassword.value = '';

  saveLogins();
}

signUpButton.addEventListener('click', addSignUp);