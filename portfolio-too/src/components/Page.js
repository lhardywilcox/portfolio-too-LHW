import React from 'react';
import Content from './Content';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function setContent({ currentPage }) {

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage.name === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage.name === 'Contact') {
      return <Contact />;
    }
    if (currentPage.name === 'Resume') {
      return <Resume />;
    }
    if (currentPage.name === "About Me") {
      return <About />;
    }
  };

  return (
    <div>
      <h2>
        {currentPage.name}
      </h2>
      <Content>{renderPage()}</Content>
    </div>
  );
}

export default setContent;
