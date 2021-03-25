import './App.css';
import { ValidateComponent } from "./component/Validate";
import { SomeComponent } from "./component/SomeComponent";
import {useRef} from "react";

function App() {
  const ref = useRef(null);
  return (
    <div className="App">
      <ValidateComponent>
        <SomeComponent>
          <hr/>
          2 component
          <ValidateComponent ref={ref} />
        </SomeComponent>
        <SomeComponent>
          <hr/>
          3 component
          <ValidateComponent  ref={ref}>
            <hr/>
            4 component
            <ValidateComponent  ref={ref}/>
          </ValidateComponent>
        </SomeComponent>
        <hr/>
        5 component
        <ValidateComponent  ref={ref}/>
      </ValidateComponent >
    </div>
  );
}

export default App;
