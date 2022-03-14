import React from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './components/TaskForm.js';
import { render, screen } from '@testing-library/react';
//import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const form = document.createElement("form");
  ReactDOM.render(<TaskForm></TaskForm>, form);
})
