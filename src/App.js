import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ContactForm from './components/ContactForm';
import './App.css';

// This is the main App component
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <ContactForm />
    </div>
  );
}

export default App;
