// Data kaise access hota hai wol Profile.jsx mai hai


import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  //value fetch karne ke liye useContext use karte hai
const {user} = useContext(UserContext)   // {'user' kaha se aaya hai. Wo aaya hai, 'UserContextProvider.jsx' mai 'const [user, setUser] = useState(null)' mention kiya hai waha se ye aaya hai.}  

 

//   return (
//     <div>Profile</div>
//   )

/*Above code use karne ki second method niche hai using conditional rendering */

    if(!user) return <div>please login</div>
    return <div>Welcome {user.username} and my password is {user.password}</div>
}

export default Profile