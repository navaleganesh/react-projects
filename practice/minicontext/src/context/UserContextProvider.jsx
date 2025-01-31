    import React, { useState } from "react";
    import UserContext from "./UserContext";

    //Create UserContextProvider
    const UserContextProvider = ({children}) => {
    //children:-  App ke pass jo bhi props aa rahe hai usko as it is pass karo. children koi magical nahi hota. Ye ek div hota hai waise hi raheta hai. children ek generic name hai jo bhi app ke paas ata usko as it is pass karo.

    const [user, setUser] = useState(null) // Provider se value access karne ke liye variable create karna padega.

    return(

        
        // children:- ke under ho sakta hai <Card /> component aaye. Ho sakta hai <Dashboard /> aa jaye.

        // UserContext.Provider : Iske through wrap karna padega(Jo file ka name rakhoge usi name se wrap karo)    


        <>
            
            <UserContext.Provider value={{user, setUser}}>

            {children}  

            </UserContext.Provider>
                    
        </> 
        //<UserContext.Provider value={{user, setUser}}>   value mai jo variable create kiya uske access aayega. wo kuch bhi ho sakta hai. Yaha pai object liya hai.
    )


    }

    export default UserContextProvider