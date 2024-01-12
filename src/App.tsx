import Navbar from './components/ui/navigation/NavBar';
import './App.css';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';


function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
    </ThemeProvider>
    </div>
  );
}

export default App;