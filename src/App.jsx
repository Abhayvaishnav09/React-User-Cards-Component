import UserCard from "../components/UserCard"
import "./App.css";


const App = ()=>{
  return (
    <div className="card-container">
      <UserCard name='Abhay Vaishnav' Desc='this is Abhay 1' 
      style={{'border-radius':"10px"}}/>
      <UserCard name='Atri Vaishnav' Desc='this is virti 2'
      style={{'border-radius':"10px"}}/>
      <UserCard name='Vaishnav' Desc='this is vaishnav 3' 
      style={{'border-radius':"10px"}}/>
    </div>
  )
}


export default App
