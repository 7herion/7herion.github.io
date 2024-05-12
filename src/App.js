import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar.component';
import HomePage, { HOME_PAGE_TITLE } from './pages/home/Home.component';
import HistoryPage, { HISTORY_PAGE_TITLE } from './pages/history/History.component';
import DetailsPage, { DETAILS_PAGE_TITLE } from './pages/details/Details.component';

function App() {
  const [currentPage, setCurrentPage] = React.useState("home");

  function getNavbarTitle(currentPage) {
    switch (currentPage) {
      case "home":
        return HOME_PAGE_TITLE;
      case "history":
        return HISTORY_PAGE_TITLE;
      case "details":
        return DETAILS_PAGE_TITLE;
      default:
        return HOME_PAGE_TITLE;
    }
  }

  return (
    <div className="App">
      <Navbar title={getNavbarTitle(currentPage)} page={currentPage} navigate={setCurrentPage} />
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
