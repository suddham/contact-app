import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";


import './App.css';


function App() {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactCard />
      <ContactList />
    </div>
  );
}

export default App;
