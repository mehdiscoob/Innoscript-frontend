import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ArticlePage from "./pages/ArticlePage";
import Header from './components/Header';
import Footer from "./components/Footer";
import PersonalizedNewsFeedPage from "./pages/PersonalizedNewsFeedPage";
import {Box} from "@mui/material";
import PreferenceFromPage from "./pages/PreferenceFromPage";

const App: React.FC = () => {
    return (
        <Box className="App" sx={{minHeight: '100vh', display: 'flex',
            flexDirection: 'column'}}>
            <Header/>
            <Routes>
                <Route path="/" element={<ArticlePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/articles" element={<ArticlePage/>}/>
                <Route path="/personalized-feed" element={<PersonalizedNewsFeedPage/>}/>
                <Route path="/preference-from" element={<PreferenceFromPage/>}/>
            </Routes>
            <Footer/>
        </Box>
    );
}

export default App;
