import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetNotes } from '../../actions/notesActions'
import NotesItem from './NotesItem'

const NotesList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncGetNotes())
    },[])

    const {notes}  = useSelector((state) => {
        return state
    })
    
  return (
    <div>
        {
            notes.data.length === 0 ? (
                <>
                    <p> No notes found </p>
                    <p> Add your first note</p>
                </>
            ) : (
                <>
                    <h2> My Notes - {notes.data.length}</h2>
                    {
                        notes.data.map((note) => {
                            return <NotesItem key={note._id} note = {note} />
                        })
                    }
                </>
            )
        }
    </div>
  )
}

export default NotesList