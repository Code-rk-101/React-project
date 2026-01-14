import './App.css'
import ContactForm from './components/contactForm'
import ContactImage from './components/contactImage'
import ContactMessage from './components/contactMessage'
import Header from './components/header'

function App() {

  return (
    <>
      <Header/> 
      <div className='container'>
        <div className="message">
        <ContactMessage/>
        </div>
        <div className="contact-container">
          <ContactForm/>
          <ContactImage/>
        </div>
      </div>
    </>
  )
}

export default App
