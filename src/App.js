// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Card from './Components/card';
import { getPosts } from './api';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Entertainment from './Pages/Entertainment';
import Business from './Pages/Business';
// import Health from './Pages/Cricket';
import Search from './Pages/Search';
import Cricket from './Pages/Cricket';
import Technology from './Pages/Technology';
// import { StickyNavbar } from './Components/SomeNew/navbar2';
function App() {

  // const [data, setData] = useState(null);

  // useEffect(()=>{
  //   getPosts().then((posts) => setData(posts.articles));
  // })


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/entertainment' element={<Entertainment/>}></Route>
          <Route exact path='/business' element={<Business/>}></Route>
          <Route exact path='/cricket' element={<Cricket/>}></Route>
          <Route exact path='/search' element={<Search/>}></Route>
          <Route exact path='/technology' element={<Technology/>}></Route>

        </Routes>

      </Router>
      

      {/* <div>
        <div style={{height: "70px"}}> </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data ? data.map((e)=> <Card title={e.title} image = {e.urlToImage} description= {e.content} url = {e.url}/>) : <p>Data Loading</p>}
      </div>
      
    </div> */}
      
      
      
      
      
      
    </div>
  );
}

export default App;
