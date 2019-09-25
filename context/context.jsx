import React, { Component, createContext } from 'react';

const rootContext = createContext()
const Provider = rootContext.Provider

const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            render() {
                return (
                    <Provider>
                        <Children />
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider