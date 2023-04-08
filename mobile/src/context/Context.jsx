import React from 'react'

const Context = React.createContext({})

export const Provider = ({ children }) => {
    const [name, setName] = React.useState('')
    const [role, setRole] = React.useState('')

    return (
        <Context.Provider
            value={{
                name,
                setName,
                role,
                setRole,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context
