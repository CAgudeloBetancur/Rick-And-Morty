const validation = (el,er,setEr,dt,setExistErr) => {
    if(el === "email") {

      let errEmail = [
        '• Este campo no puede estar vacio',
        '• Formato no valido',
        '• No debe tener más de 35 caracteres'];

      let emailFormat = /([a-zA-Z]+[0-9]*)@{1}([a-z]+[0-9]*)\.{1}[a-z]/.test(dt.email);

      if(dt.email.length === 0) {
        errEmail.splice(1,2);
        setExistErr(true);
      } else if(emailFormat && dt.email.length > 35) {
        errEmail.splice(0,2);
        setExistErr(true);
      } else if(!emailFormat && dt.email.length > 35) {
        errEmail.shift();
        setExistErr(true);
      } else if(!emailFormat){
        errEmail.shift();
        errEmail.pop();
        setExistErr(true);
      } else{
        errEmail = [];
        setExistErr(false);
      }
      setEr({
        ...er,
        email : errEmail
      })
    } else if(el === "password") {

      let errPassword = [
        '• Este campo no puede estar vacío',
        '• Debe tener al menos un número',
        '• Debe tener entre 6 y 10 caracteres'
      ];

      const passwordFormat = /([a-zA-z]*[0-9]+)/.test(dt.password);
      const lengthComp = !((dt.password.length) < 6 ||(dt.password.length) > 10) 

      if( !lengthComp && !passwordFormat) {
        errPassword.shift();
        setExistErr(true);
      } else if (!lengthComp && passwordFormat ){
        errPassword.splice(0,2);
        setExistErr(true);
      } else if (lengthComp && !passwordFormat) {
        errPassword.shift();
        errPassword.pop();
        setExistErr(true);
      } else {
        errPassword = [];
        setExistErr(false);
      }

      setEr({
        ...er,
        password : errPassword
      })
    }  
}

export default validation;