import styles from "./home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import NoteList from "../NoteList/NoteList";
import {useState} from "react";
import {nanoid} from "nanoid";

const data = [
    {
        id: nanoid(),
        text: "This is my first note.",
        date: "20/04/2022"
    },
    {
        id: nanoid(),
        text: "This is my second note.",
        date: "22/04/2022"
    },
    {
        id: nanoid(),
        text: "This is my third note.",
        date: "24/04/2022"
    }
]

const Home = () => {
    const [notes, setNotes] = useState(data);
    const [searchText, setSearchText] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const addNote = (text) => {
        const date = new Date();

        const newNote = {
            id: 4,
            text,
            date: date.toLocaleDateString()
        }

        const newNotes = [...notes, newNote];
        setNotes(newNotes);

    }

    const filteredNotes = notes.filter((note, index) => note.text.toLowerCase().includes(searchText));

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    const toggleModeHandler = () => setDarkMode(!darkMode);

    return (
        <div className={`${darkMode && styles.dark}`}>
           <div className={styles.container}>
               <div className={styles.top}>
                   <h2>Notes</h2>

                   <button onClick={toggleModeHandler} className={styles.button}>{darkMode ? "Light" : "Dark"}</button>
               </div>

               <SearchBar setSearchText={setSearchText} />

               <NoteList notes={filteredNotes} addNote={addNote} deleteNote={deleteNote} />

           </div>
        </div>
    );
};

export default Home;