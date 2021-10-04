import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { StyledComponentProps } from './global';
import Header from './components/Header';
import Search from './components/Search';
import { bps } from './styles';
import { getThemeMode } from './utils/helpers';
import './App.css';

const AppContainer = styled.div<StyledComponentProps>`
  background-color: ${(props) => `${props.theme.bgColors.primary}`};

  ${bps.mobile} {
    .App-container {
      height: 100vh;
      justify-content: initial;
      padding: 30px 0;
    }
  }
`;

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(Boolean(localStorage.getItem('darkMode')));

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  const handleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <AppContainer className={`App theme-${getThemeMode(darkMode)}`}>
      <div className="App-container">
        <header className="App-header">
          <Header darkMode={darkMode} onChangeDarkMode={handleDarkMode} />
        </header>

        <nav className="App-nav">
          <Search query="" onSubmit={handleSubmit} />
        </nav>

        <main className="App-main">

        </main>
      </div>
    </AppContainer>
  );
};

export default App;
