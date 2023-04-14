// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { GithubProvider } from './context/github/GithubContext';

export default function App() {
  return (
    <div className='App-header'>
      <GithubProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>

        </Router>
      </GithubProvider>
    </div>

  )
}