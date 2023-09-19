import logo from './logo.svg';
import './App.css';
import RealEstateList from './components/real-estate-list/RealEstateList';
import AllRealEstateList from './components/allListAppartaments/AllListappartaments';
import Header from './components/blocks/Header/Header';
import Menu from './components/blocks/Menu/Menu';
import Main from './components/blocks/Main/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Main/>
      {/* <div className='container'>
      <AllRealEstateList/>
      </div> */}
    {/* <AllRealEstateList/> */}
     {/* <RealEstateList/> */}
    </div>
  );
}

export default App;
