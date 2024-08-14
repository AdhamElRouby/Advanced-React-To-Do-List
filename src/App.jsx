import Header from './Header/Header.jsx';
import Loader from './Loader/Loader.jsx';
import AddItem from './AddItem/AddItem.jsx';
import SearchItem from './SearchItem/SearchItem.jsx';
import Content from './Content/Content.jsx';
import Footer from './Footer/Footer.jsx';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Header title="To Do List" />
      <AddItem />
      <SearchItem />
      <main>
        {isLoading ? <Loader /> : <Content />}
        <ToastContainer className="toast" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
