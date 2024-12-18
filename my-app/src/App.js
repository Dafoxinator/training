import './App.css';
import React from 'react';

import Post from './post';
import AxiosGetDemo from './AxiosGetDemo';
import AxiosPost from './AxiosPost';
import AxiosUpdate from './AxiosUpdate';
import ToDoList from './ToDoList';
import ClickCounter from './ClickCounter';
import TextInput from './TextInput';
import MyContext from './myContext';
import AxiosDelete from './AxiosDelete';

function App() {
  const sharedData='This is some shared Data';
  return (
    <MyContext.Provider value={sharedData}>
      <div>
        <AxiosPost></AxiosPost>
        <AxiosUpdate></AxiosUpdate>
        <AxiosDelete></AxiosDelete>
        <AxiosGetDemo></AxiosGetDemo>

      </div>
    </MyContext.Provider>
      //<AxiosGetDemo></AxiosGetDemo>
    /*<Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path='/sdc' element={<stateDemoComponent/>}/>
      </Routes>
    </Router>*/
  );
};

export default App;
