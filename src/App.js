import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import NavBar from './components/NavBar';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import FruitsPage from './pages/FruitsPage/FruitsPage'


function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  const fetchState = async () => {
    try {
      const response = await fetch('/api/test')
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
          <Route path="/fruits" element={<FruitsPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage/>} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
