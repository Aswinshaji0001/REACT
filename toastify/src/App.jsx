import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div className="mains">
    <div className='main'>
      <button className="button-53" onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
    </div>
  )
}

  export default App;
