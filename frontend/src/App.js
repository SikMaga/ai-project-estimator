import { useState } from "react";

function App() {

  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);

  const estimateProject = async () => {

    const response = await fetch("http://127.0.0.1:8000/estimate",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({description})
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{padding:"40px"}}>

      <h1>AI Project Estimator</h1>

      <textarea
        rows="4"
        style={{width:"400px"}}
        placeholder="Describe your project"
        onChange={(e)=>setDescription(e.target.value)}
      />

      <br/><br/>

      <button onClick={estimateProject}>
        Estimate
      </button>

      <pre>{JSON.stringify(result,null,2)}</pre>

    </div>
  );
}

export default App;