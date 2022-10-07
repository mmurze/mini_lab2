import {
  setFormValue, submitSignUpForm, validatePassword, validateEmail,
  formValidation, getValidationStatus, formValues, validatePassword, submitSignInForm
} from "./utils.js"

// Выписываем все айдишники HTMl-элементов в константы для переиспользования
const first_name_id = 'first_name'
const last_name_id = 'last_name'
const password_id = 'password'
const password_id_repeat = 'password-repeat'
const email_id = 'email'
const passwordd_id = 'passwordd'
const emaill_id = 'emaill'


const sign_in_link_id = 'sign_in_link'
const sign_up_link_id = 'sign_up_link'
const sign_in_form_id = 'sign_in_form'
const sign_up_form_id = 'sign_up_form'
const sign_in_btn_id = 'sign_in_btn'
const sign_up_btn_id = 'sign_up_btn'

const first_name = document.getElementById(first_name_id);
const last_name = document.getElementById(last_name_id);
const password = document.getElementById(password_id);
const password_repeat = document.getElementById(password_id_repeat);
const email = document.getElementById(email_id);
const passwordd = document.getElementById(passwordd_id);
const emaill= document.getElementById(emaill_id);


first_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации
last_name.oninput = (e) => setFormValue(first_name_id, e.target.value)  // Установить значение без валидации
email.oninput = (e) => setFormValue(email_id, e.target.value, validateEmail) // Установить значение с валидацией

password.oninput = (e) => {
  setFormValue(password_id, e.target.value, validatePassword)
  if(formValidation.password)
    password.style.borderBottom = "1px solid green";
  else
    password.style.borderBottom = "1px solid red";
}

password_repeat.oninput = (e) => {
  if (e.target.value === formValues.password)
    password_repeat.style.borderBottom = "1px solid green";
  else
    password_repeat.style.borderBottom = "1px solid red";
}


passwordd.oninput = (e) =>{
  if (/*formValidation.emaill && */emaill.value !== "" && passwordd.value !== ""){
    document.getElementById('sign_in_btn').disabled  = false;
  }
  else document.getElementById('sign_in_btn').disabled = true;
}

emaill.oninput = (e) =>{
  setFormValue(emaill_id, e.target.value, validateEmail)
  if (/*formValidation.emaill && */emaill.value !== "" && passwordd.value !== ""){
    document.getElementById(sign_in_btn_id).disabled = false;
  }
  else document.getElementById(sign_in_btn_id).disabled = true;
}


// Меняем стили объекта DOM дерева. Это позволяет скрыть форму регистрации и показать форму авторизации
// Объект формы не исключается из DOM дерева, а просто становистя невидимым
const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = "none"
  document.getElementById(sign_in_form_id).style.display = ""
}

const switch_to_sign_up = document.getElementById(sign_up_link_id);
switch_to_sign_up.onclick = (e) => {
  document.getElementById(sign_up_form_id).style.display = ""
  document.getElementById(sign_in_form_id).style.display = "none"
}



// При нажатии кнопки в форме по умолчанию происходит перезагрузка страницы.
// Чтобы отключить его, нужно отменить стандартное поведение события
const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  e.preventDefault()
  submitSignUpForm()
}

const sign_in_btn = document.getElementById(sign_in_btn_id);
sign_in_btn.onclick = (e) => {
  e.preventDefault()
  submitSignInForm()
}
