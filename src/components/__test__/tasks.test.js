import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './components/tasks.js';
import { render, screen } from '@testing-library/react';
//import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tasks></Tasks>, div);
})
