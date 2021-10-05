import { useLocation } from 'wouter';
import styled from '@emotion/styled';
import { useDarkMode } from './hooks/useDarkMode';
import { useLoadUser } from './hooks/useLoadUser';
import Spinner from './components/Spinner';
import Header from './components/Header';
import Search from './components/Search';
import PanelResult from './components/PanelResult';
import PanelUser from './components/PanelUser';
import { StyledComponentProps } from './global';
import { getThemeMode, queryParams } from './utils/helpers';
import { bps } from './styles';
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
  const [darkMode, handleDarkMode] = useDarkMode();  
  const [location, setLocation] = useLocation();
  const { q = '' } = queryParams();
  const { user, loading } = useLoadUser(q);
  
  const handleSubmit = (searchText: string) => {
    let searchLocation = `${location}?q=${searchText}`;
    setLocation(searchLocation);
  };

  const mainTemplate = () => {
    if (loading) {
      return <Spinner show={loading} />;
    }

    return (
      <>
        {!q && <PanelResult message="Search the username" />}
        {q && !user && <PanelResult message="No results, try again later" error={!Boolean(user)} />}
        {q && user && <PanelUser user={user} />}
      </>
    );
  };

  return (
    <AppContainer className={`App theme-${getThemeMode(darkMode)}`}>
      <div className="App-container">
        <header className="App-header">
          <Header darkMode={darkMode} onChangeDarkMode={handleDarkMode} />
        </header>

        <nav className="App-nav">
          <Search query={q} onSubmit={handleSubmit} />
        </nav>

        <main className="App-main">
          {mainTemplate()}
        </main>
      </div>
    </AppContainer>
  );
};

export default App;
