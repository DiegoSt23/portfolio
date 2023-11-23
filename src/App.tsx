import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'diego-react-delta-ui';
import { Main } from './layouts';

const App = () => {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <ThemeProvider>
          <Main />
        </ThemeProvider>
      </ParallaxProvider>
    </BrowserRouter>
  );
};

export default App
