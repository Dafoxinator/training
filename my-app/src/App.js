import './App.css';
import React from 'react';

import Post from './Post/post';
import AxiosGetDemo from './Axios/AxiosGetDemo';
import AxiosPost from './Axios/AxiosPost';
import AxiosUpdate from './Axios/AxiosUpdate';
import ToDoList from './List/ToDoList';
import ClickCounter from './ClickCounter';
import TextInput from './TextInput';
import MyContext from './myContext';
import AxiosDelete from './Axios/AxiosDelete';

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
