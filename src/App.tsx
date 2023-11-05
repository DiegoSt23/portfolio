import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'diego-react-delta-ui';
import { Main } from './layouts';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App
