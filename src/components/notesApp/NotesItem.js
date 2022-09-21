import React, { useState } from "react";
import { useDispatch } from "react-redux";
import EditNote from "./EditNote";
import { asyncRemoveNote, asyncShowNote } from "../../actions/notesActions";

const NotesItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const { note } = props;

  const dispatch = useDispatch()

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRemove = () => {
    const confirmRemove = window.confirm('Are you sure?')
    if(confirmRemove){
      dispatch(asyncRemoveNote(note._id))
    }
  }

  const handleShow = () => {
    dispatch(asyncShowNote(note._id))
  }

  return (
    <div>
      {toggle ? (
        <>
          <EditNote note = {note} handleToggle = {handleToggle}/>
          <button onClick = {handleToggle}> cancel </button>
        </>
      ) : (
        <>
          <h3 onClick={handleShow}> {note.title} </h3>
          <button onClick={handleRemove}> remove </button>
          <button onClick={handleToggle}> edit </button>
        </>
      )}
    </div>
  );
};

export default NotesItem;
