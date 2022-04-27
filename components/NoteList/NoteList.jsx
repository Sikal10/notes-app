import styles from "./notelist.module.css";
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

const NoteList = ({addNote, notes, deleteNote}) => {
    return (
        <div className={styles.noteList}>
            {notes.map((note, index) => <Note note={note} key={index} deleteNote={deleteNote} />)}
            <AddNote addNote={addNote} />
        </div>
    );
};

export default NoteList;