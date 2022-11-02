import React from 'react';
import {
  Link, Route, Routes, useLocation,
} from 'react-router-dom';
import SinglePage from '../SinglePage';

const About = () => {
  const { pathname } = useLocation();
  // console.log(pathname)
  return (
    <div>
      <ul>
        <li>
          <Link to={`${pathname}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${pathname}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${pathname}/:slug`} element={<SinglePage />} />
      </Routes>
    </div>
  );
};
export default About;
