import React from 'react'
import NotesContainer from './NotesContainer'
import AddNote from './AddNote'

const NotesApp = (props) => {
  return (
    <div>
        <NotesContainer/>
        <AddNote/>
    </div>
  )
}

export default NotesApp