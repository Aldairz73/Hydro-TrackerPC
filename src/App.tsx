import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/formStyles.css' // Importa el archivo de estilos
import Header from './components/Header'
import Navbar from './components/Navbar' // Importa el componente Navbar
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import Exercises from './pages/Exercises' // Importa el componente Exercises
import AddExercise from './pages/AddExercise' // Importa el componente AddExercise

function App() {
  return (
    <Router>
      <Navbar /> {/* Usa el componente Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/add-user" element={<PrivateRoute><AddUser /></PrivateRoute>} />
        <Route path="/exercises" element={<PrivateRoute><Exercises /></PrivateRoute>} />
        <Route path="/add-exercise" element={<PrivateRoute><AddExercise /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
