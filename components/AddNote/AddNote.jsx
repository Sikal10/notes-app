import styles from "./AddNote.module.css";
import {useState} from "react";

const AddNote = ({addNote}) => {
    const [noteText, setNoteText] = useState("");

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }

    const handleSaveNote = () => {
        addNote(noteText);
        setNoteText("");
    }

    const characterLimit = 200;

    return (
        <div className={styles.addNote}>
                <textarea
                    className={styles.textArea}
                    placeholder={"Type to add a note..."}
                    name="" id="" cols="10" rows="8"
                    value={noteText}
                    onChange={handleChange}

                >
                </textarea>

            <div className={styles.bottom}>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveNote} className={styles.save}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;