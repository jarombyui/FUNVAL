import React from 'react'

export const Calculator = ({ children }) => {
  return (
        <div className="calculator">
            {children} 
        </div>
    )
}

/*el children: permite que podamos pasar componentes dentro de un componente*/