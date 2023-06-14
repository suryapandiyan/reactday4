//  import logo from './logo.svg';
//  import './App.css';

//working with array List
function Note({note}){
  return(
    <li>{note.content}</li>)
  
}

function App({notes}) {
  // const{notes}= props;
  // console.log({notes.map(note=><li>{note.content}</li>)})
  return (
    <div><h1>React Day 3</h1>
    <ul>
      {notes.map(note=>
      <Note key={note.id} note={note}/>
      )}
    </ul>




    </div>
  )
}

export default App;
