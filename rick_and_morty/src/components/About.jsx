import { useEffect } from "react";

const About = ({agrupar}) => {

  useEffect(() => {
    agrupar(0,true);
  },[])

  return(
    <h1>Esto es mi About</h1>
  ) 
}

export default About;