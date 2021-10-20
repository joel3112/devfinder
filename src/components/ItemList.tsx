import styled from '@emotion/styled';
import { StyledComponentProps } from '../global';
import { bps } from '../styles';

type ItemListProps = {
  title: string;
  subtitle: string;
  description?: string;
}

const ItemListContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: inherit;

  section {
    max-width: 300px;
  }
  .title {
    color: ${({ theme }) => `${theme.colors.heading}`};
    font-size: ${({ theme }) => `${theme.fontSizes.large}`};
    font-weight: ${({ theme }) => `${theme.fontWeight.semibold}`};
    height: 39px;
    margin-bottom: 2px;
  }
  .subtitle {
    font-size: ${({ theme }) => `${theme.fontSizes.small}`};
    color: ${({ theme }) => `${theme.colors.primary}`};
  }
  .text {
    font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
    color: ${({ theme }) => `${theme.colors.secondary}`};
  }

  ${bps.mobile} {
    flex-direction: column;

    .title {
      font-size: ${({ theme }) => `${theme.fontSizes.small}`};
      height: 24px;
    }
    .subtitle {
      font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
    }
    .text {
      font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};      
    }
  }
`;

const ItemList = ({ title, subtitle, description }: ItemListProps) => {
  return (
    <ItemListContainer>
      <section>
        <label className="title ellipsis">{title}</label>
        <label className="subtitle">{subtitle}</label>
      </section>
      <span className="text">{description}</span>
    </ItemListContainer>
  );
};

export default ItemList;
