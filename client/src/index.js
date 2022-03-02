import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import "@/assets/main.css";
import 'react-quill/dist/quill.snow.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />,
    </BrowserRouter>,
    document.getElementById('app')
);
