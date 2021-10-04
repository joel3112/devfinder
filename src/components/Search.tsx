import styled from '@emotion/styled';
import { useForm } from '../hooks/useForm';
import Button from './Button';
import Input from './Input';
import { FormEventProp, UnknownObject } from '../global';
import { bps } from '../styles';

interface SearchProps {
  query: string,
  onSubmit: (x: UnknownObject) => void;
};

const SearchContainer = styled.div`
  border-radius: ${({ theme }) => `${theme.borderRadius.medium}`};
  background-color: ${({ theme }) => `${theme.bgColors.secondary}`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px 0 32px;

  form {
    border-radius: ${({ theme }) => `${theme.borderRadius.small}`};
    box-shadow: ${({ theme }) => `${theme.boxShadows.type1}`};
    width: 100%;
    max-width: 790px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    min-width: 24px;
    height: 24px;
    margin-right: 16px;
  }

  ${bps.mobile} {
    padding: 0 7px 0 16px;

    img {
      min-width: 20px;
      height: 20px;
      margin-right: 0;
    }
  }
`;

const Search = ({ query = '', onSubmit }: SearchProps) => {
  const [{ searchText }, handleInputChange] = useForm({ searchText: query });

  const handleSubmit: FormEventProp = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit({ searchText });
    }
  };

  return (
    <SearchContainer>
      <img src="/assets/icon-search.svg" />
      <form onSubmit={handleSubmit}>
        <Input 
          name="searchText" 
          placeholder="Search GitHub username..." 
          onChange={handleInputChange} 
          value={searchText} />
        <Button type="submit">Search</Button>
      </form>
    </SearchContainer>
  );
};

export default Search;
