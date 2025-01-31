import React from 'react'

const UserContext = React.createContext()

export default UserContext;


//Context kya hota hai, major ek chiz dega provider. Context kya hota hai ek variable to provide kar raha hai. So har ek context provider hota hai. 
//UserContext bhi apne aap mai ek provider hota hai
// UserContext ek under sab component ko wrap karte hai
/*e.g.  <UserContext>
            <Login />
            <Card>
                <Data/>
            </Card>            
          </UserContext>
        */

// UserContext wrapper ho gaya. Abhi uske under ke sab component ko UserContext ka access mil jayega




