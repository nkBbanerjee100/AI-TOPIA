"use client"
// import React from 'react'
import { SessionProvider, useSession } from 'next-auth/react'
// const Provider = ({ children }) => {
//     return (
//         <SessionProvider >
//             {children}
//         </SessionProvider>
//     )
// }

// export default Provider 

export default function Provider({ children }) {
    // const session = useSession();
    return (

        <SessionProvider >
            {children}
        </SessionProvider>
    );
}
