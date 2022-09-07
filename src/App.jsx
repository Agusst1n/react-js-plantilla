import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { AgendaProvider } from './context/AgendaContext';
import { WorkTeamProvider } from './context/WorkTeamContext';


import { Stack } from '@chakra-ui/react'
import Team from './pages/Team/Team';

function App() {
  return (
    <Stack w='100%' h="100%" bg='RGBA(0, 0, 0, 0.80)' justify="center" align="center">
      <BrowserRouter>
        <AgendaProvider>
          <WorkTeamProvider>
            <Navbar/>
            <Routes>
              <Route path="/register" element={<Register />} /> 
              <Route path="/login" element={<Login />} />          
              <Route path="/" element={<Home />} />
              <Route path="/team/:id" element={<Team/>} />
            </Routes>
          </WorkTeamProvider>
        </AgendaProvider>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
