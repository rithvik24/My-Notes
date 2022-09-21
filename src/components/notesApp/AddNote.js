import React from 'react'
import { useDispatch } from 'react-redux'
import NotesForm from './NotesForm'
import { asyncAddNote } from '../../actions/notesActions'

const AddNote = () => {
    const dispatch = useDispatch()

    const formSubmit  = (formData,handleReset) => {
        dispatch(asyncAddNote(formData,handleReset))
    }

  return (
    <div>
        <h2> Add Note </h2>
        <NotesForm formSubmit = {formSubmit}/>
    </div>
  )
}

export default AddNote