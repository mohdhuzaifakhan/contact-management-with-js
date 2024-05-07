import logo from './logo.svg';
import { useState } from 'react'
import ContactsForm from './components/ContactsForm'
import ContactView from './components/ContactView';
import Home from './Home'
import './App.css';
import MapAndCharts from './MapAndCharts';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import NavigationButton from './components/NavigationButton'



function App() {
  const [open, setOpen] = useState(true)
  return (
    <>
      {/* <CustomeSidebar /> */}
      <div className='flex'>
        <Sidebar open={open} setOpen={setOpen} />
        <div className='fixed top-3 left-2 h-8 w-8 rounded-full'>
          <NavigationButton open={open} setOpen={setOpen} />
        </div>
        <div className='w-full'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/maps' element={<MapAndCharts />} />
            <Route exact path='/user/:id' element={<ContactView />} />
            <Route exact path='/create-contact' element={<ContactsForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
