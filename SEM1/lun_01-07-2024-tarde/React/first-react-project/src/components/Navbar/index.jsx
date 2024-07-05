import React from "react"

export const Navbar = () => {
  const options = [
      "Experiencia", 
      "Certificados", 
      "Educacion", 
      "Proyectos"
  ]

  return (
    <nav>
      <ul>
        {
            options.map((option) => 
                <li key={option} >{option}</li>
            )
        }
      </ul>
    </nav>
  )
}
