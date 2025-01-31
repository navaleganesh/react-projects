// Data kaise send karenge wo Login.jsx mai hai


import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
const [username, setUserName] = useState('')
const [password, setPassword] = useState('')

//value fetch karne ke liye useContext use karte hai
const {setUser} = useContext(UserContext)   // {setUser kaha se aaya hai. Wo aaya hai, 'UserContextProvider.jsx' mai 'const [user, setUser] = useState(null)' mention kiya hai waha se ye aaya hai.}



// Yaha se data send kiya hai
  const handleSubmit =(e) =>{
    e.preventDefault()
    setUser({username, password})
  }  
  
  
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange ={(e)=> setUserName(e.target.value)}
        placeholder='Username'  />
        {" "}
        <input 
        value={password}
        onChange ={(e)=> setPassword(e.target.value)}
        type="password" placeholder='Password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login