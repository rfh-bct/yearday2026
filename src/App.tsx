import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Page from './Page';
import { pageContents } from './pageContent';

function PageWrapper() {
  const { pageId } = useParams<{ pageId: string }>();
  const id = parseInt(pageId || '1');
  const pageData = pageContents[id] || pageContents[1];

  return <Page pageId={id} pageData={pageData} />;
}

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        {Array.from({ length: 9 }, (_, i) => i + 1).map((pageNum) => (
          <Link
            key={pageNum}
            to={`/page/${pageNum}`}
            className="nav-link"
          >
            Side {pageNum}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Page pageId={1} pageData={pageContents[1]} />} />
          <Route path="/page/:pageId" element={<PageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;