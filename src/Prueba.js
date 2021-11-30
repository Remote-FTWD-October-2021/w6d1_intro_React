import "./Prueba.css";

//FUNCTIONAL COMPONENT

const Prueba = () => {
  const name = "Jaime";
  const salute = `Bienvenido, ${name}`;

  const greeting = <h2>Hello everyone!</h2>;

  return (
    <div className="Prueba">
      <p>Mi primer componente 👻</p>
      <p className="blue">Bienvenidos al curso de React</p>
      <p>{name}</p>
      <p>{salute}</p>
    </div>
  );
};

export default Prueba;

//CLASS COMPONENT
// import React from 'react'

// class Prueba extends React.Component {
//   render(){
//     return <p>Mi primer componente 👻</p>
//   }
// }

// export default Prueba
