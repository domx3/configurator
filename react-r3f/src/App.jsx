import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  


  const setToast = (text) => {
    toast(text)
  }

  return (
    <>
          <Navbar />
      
        
          <Hero
        
          />
          <Footer />
        
        
       

      <div className='text-black'>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    </>
  )
}

export default App
