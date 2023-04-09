import React, { useState } from 'react'

const Context = React.createContext({})

export const Provider = ({ children }) => {
    const [name, setName] = React.useState('')
    const [role, setRole] = React.useState('')
    const [uid, setUid] = useState('')

    return (
        <Context.Provider
            value={{
                name,
                setName,
                role,
                setRole,
                uid,
                setUid,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context
