import React,{useState} from 'react'

const NotesForm = (props) => { 
    const { formSubmit , title: noteTitle , body: noteBody , id , handleToggle} = props
    const [ title, setTitle ] = useState(noteTitle ? noteTitle : '')
    const [ body, setBody ] = useState(noteBody ? noteBody : '')
    
    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'title'){
            setTitle(e.target.value)
        }else if(attr === 'body'){
            setBody(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id : id,
            title : title,
            body : body
        }
        const handleReset = () => {
            setTitle('')
            setBody('')
        }
        formSubmit(formData,handleReset)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Title' name='title' value={title} onChange={handleChange}/>
            <br/>
            <textarea type='text' placeholder='Body' name='body' value={body} onChange={handleChange}></textarea>
            <br/>
            <input type='submit' value='save'/>
        </form>
    </div>
  )
}

export default NotesForm