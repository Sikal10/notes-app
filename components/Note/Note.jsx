import styles from "./note.module.css";

const Note = ({note, deleteNote}) => {
    return (
        <div className={styles.noteContainer}>
            <div className={styles.top}>
                <span>{note.text}</span>
            </div>


            <div className={styles.bottom}>
                <small>{note.date}</small>

                <span style={{cursor: "pointer"}} onClick={() => deleteNote(note.id)} className={styles.delete}>X</span>
            </div>
        </div>
    );
};

export default Note;