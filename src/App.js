
import './App.css';
import Prueba from './Prueba'
import Profile from './Profile'



const App = ()=> {

  const user = {
    name: "Jaime",
    admin: false,
    unreadMes: 7
  }

  const animals = ['dog', 'cat', 'bat']

  return (
    <div className="App">
      <Profile user={user} animals={animals} />
      <Prueba />
    </div>
  );
}

export default App;



// res.render('contacts.hbs', {data: {name: 'Jaime', lastName: 'Jacobo'}})

//name="Jaime"
// lastName="Jacobo"