import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import Exercises from './pages/Exercises';
import AddExercise from './pages/AddExercise';
import Register from './pages/Register';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './App.css';
import './styles/formStyles.css';

function App() {
    useEffect(() => {
        // Agregar registros de Alessio y Aldair
        localStorage.setItem('Alessio', JSON.stringify({ goal: 3, progress: 0 }));
        localStorage.setItem('Aldair', JSON.stringify({ goal: 2, progress: 0 }));
    }, []);

    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
                <Route path="/add-user" element={<PrivateRoute><AddUser /></PrivateRoute>} />
                <Route path="/exercises" element={<PrivateRoute><Exercises /></PrivateRoute>} />
                <Route path="/add-exercise" element={<PrivateRoute><AddExercise /></PrivateRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
