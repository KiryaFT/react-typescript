import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <div>
      <h1>Page with information</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab sequi odio dicta aperiam eum est quasi, laborum optio necessitatibus soluta earum, similique accusamus saepe quo magnam assumenda quos iusto?</p>
      <button className="btn" onClick={() => history.push('/')}>Back to TasksList</button>
    </div>
  )
}
