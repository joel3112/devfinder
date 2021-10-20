import styled from '@emotion/styled';
import { MouseEventProp, StyledComponentProps } from '../global';
import { getThemeMode } from '../utils/helpers';

type HeaderProps = {
  darkMode: boolean;
  onChangeDarkMode?: MouseEventProp;
}

const HeaderContainer = styled.div<StyledComponentProps>`
  color: ${({ theme }) => `${theme.colors.heading}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 38px;

  button {
    color: currentColor;
    font-family: 'Space Mono';
    font-size: 15px;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    background: none;
    opacity: 0.6;
    cursor: pointer;

    :hover {
      opacity: 1;
    }
  }
  img {
    margin-left: 16px;
    min-width: 20px;
    height: 20px;
  }
`;

const Header = ({ darkMode, onChangeDarkMode }: HeaderProps) => {
  const themeMode = getThemeMode(!darkMode);

  return (
    <HeaderContainer>
      <h1>devfinder</h1>
      <button onClick={onChangeDarkMode}>
        {themeMode.toUpperCase()}
        <img src={`/assets/icon-${themeMode}.svg`} />
      </button>
    </HeaderContainer>
  );
};

export default Header;
