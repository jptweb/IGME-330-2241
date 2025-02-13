//App.js

import "./styles.css";
import Smiley from "./Smiley";
import Message from "./Message";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen Hello!</h2>
      <Smiley />
      <Message text="Hello" />
    </div>
  );
}


//Message.js
export default function Message(props) {
  return <h3>{props.text}</h3>;
}




//Smiley.js
export default function Smiley() {
  return <div>:-p</div>;
}
