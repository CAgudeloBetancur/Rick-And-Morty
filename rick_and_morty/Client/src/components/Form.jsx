import { useEffect, useState} from "react";
import validation from "../validation";

const Form = ({login}) => {

  const [userData,setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors,setErrors] = useState({});
  const [nomElem,setNomElem] = useState('');
  const [existErr,setExistErr] = useState(false);

  useEffect(()=> {
    validation(nomElem,errors,setErrors,userData,setExistErr);
  },[userData,existErr])

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })
    setNomElem(e.target.name);
    // validation(e.target.name,errors,setErrors,userData);
  }

  let [animClass,setAnimClass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimClass(' animated');
  };
  
  const handleAnimationEnd = () => {
    login(userData);
    setAnimClass('');
  }

  const claseDisabled = !errors.password || !errors.email || existErr ? ' loginDisabled' : '';

  return (
    <div className="formCont">
      <form className="form">
          <h3 className="formTitle">Login</h3>

          { errors.email && errors.email.map((x,i) => {
              return(
                <p key={i} className="formError">{x}</p>
              )
            })
          }

          { errors.password && errors.password.map((x,i) => {
              return (
                <p key={i} className="formError">{x}</p>
              )
            })
          }

          <label className="formLabel">Email:</label>
          <input
            autoFocus
            className="formInput"
            type="email" 
            value={userData.email}
            name="email"
            onChange={handleChange}
            placeholder="Correo"
          />


          <label className="formLabel">Password:</label>
          <input
            className="formInput"
            type="password" 
            value={userData.password}
            name="password"
            onChange={handleChange}
            placeholder="Clave"
          />


          <button 
            className={`formBtn${claseDisabled}${animClass}`}  
            onClick={handleSubmit}
            disabled={existErr}
            onAnimationEnd={handleAnimationEnd}
          >Ingresar</button> 
      </form>
    </div>
  )
}

export default Form;