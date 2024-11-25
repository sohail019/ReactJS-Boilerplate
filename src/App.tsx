import { useContext } from 'react';
import './App.css';
import { Button, Container, Typography } from '@mui/material';
import { ThemeContext } from './context/theme-context';
import Navbar from './components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import ErrorBoundaryComponent from './components/errors/error-boundary';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleMode } from './store/slices/theme-slice';
// import { RootState } from './store/store';

function App() {
  //* Redux Theme Handling
  // const mode = useSelector((state: RootState) => state.theme.mode);
  // const dispatch = useDispatch();

  // const handleToggleTheme = () => {
  //   dispatch(toggleMode());
  // };

  //* Context API Theme Handling
  // const themeContext = useContext(ThemeContext);
  // if (!themeContext) {
  //   throw new Error('ThemeContext must be used within a ThemeProviderWrapper');
  // }

  // const { mode, toggleMode } = themeContext;
  return (
    <>
    <Navbar />
    <ErrorBoundaryComponent>
    <Outlet />
    </ErrorBoundaryComponent>
    <Footer />
    </>
  );
}

export default App;
