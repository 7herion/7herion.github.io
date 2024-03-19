import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar.component';
import HomePage from './pages/home/Home.component';
import HistoryPage from './pages/history/History.component';
import DetailsPage from './pages/details/Details.component';

function App() {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <div className="App">
      <Navbar title="HOHOHO" page={currentPage} navigate={setCurrentPage} />
      {currentPage === "home" &&
        <HomePage />
      }
      {currentPage === "history" &&
        <HistoryPage />
      }
      {currentPage === "details" &&
        <DetailsPage />
      }
    </div>
  );
}

export default App;
