import styled from '@emotion/styled';
import ItemIcon, { ItemIconProps } from './ItemIcon';
import { StyledComponentProps } from '../global';
import { bps } from '../styles';

type PanelSocialsProps = {
  items?: Array<ItemIconProps>;
}

const PanelSocialsContainer = styled.div<StyledComponentProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 37px 0 0 154px;
  
  .item{
    flex: 0 0 45%;
  }

  ${bps.mobile} {
    margin: 24px 0 0;
    
    .item {
      flex: 0 0 100%;
    }
    .item + .item {
      margin-top: 16px;
    }
  }
`;

const PanelSocials = ({ items }: PanelSocialsProps) => {
  if (!items) {
    return null;
  }

  return (
    <PanelSocialsContainer>
      {items.map((item: ItemIconProps) => (
        <ItemIcon key={item.id} {...item} />
      ))}
    </PanelSocialsContainer>
  );
};

export default PanelSocials;
