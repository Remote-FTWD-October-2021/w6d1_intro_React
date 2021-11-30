const Profile = (props)=>{

  const {user, animals} = props

  return(
    <div>
      <h2>Hola, {user.name}!</h2>
      <p>Tienes ({user.unreadMes}) mensajes sin leer</p>
      <p>Uno de mis animales favoritos es {animals[2]}</p>
    </div>
  )
}

export default Profile

// import React from "react";

// class Profile extends React.Component {

//   render() {
//     const {user, animals} = this.props

//     return (
//       <div>
//         <h2>Hola, {user.name}!</h2>
//         <p>Tienes ({user.unreadMes}) mensajes sin leer</p>
//         <p>Uno de mis animales favoritos es {animals[2]}</p>
//       </div>
//     );
//   }
// }


// export default Profile