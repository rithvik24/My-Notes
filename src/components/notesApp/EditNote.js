import React from 'react'
import { useDispatch } from 'react-redux'
import NotesForm from './NotesForm'
import { asyncEditNote } from '../../actions/notesActions'

const EditNote = (props) => {
    const { note, handleToggle } = props
    
    const dispatch = useDispatch()

    const formSubmit = (formData) => {
      dispatch(asyncEditNote(formData,handleToggle))
    }

  return (
    <div>
        <NotesForm id = {note._id} title = {note.title} body = {note.body} formSubmit = {formSubmit}/>
    </div>
  )
}

export default EditNote