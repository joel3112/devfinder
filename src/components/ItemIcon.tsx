import styled from '@emotion/styled';
import { StyledComponentProps } from '../global';
import { bps } from '../styles';
import { isValidateUrl } from '../utils/helpers';

export type ItemIconProps = {
  id: string;
  value: string;
}

const ItemIconContainer = styled.div<StyledComponentProps>`
  font-size: ${({ theme }) => `${theme.fontSizes.xsmall}`};
  line-height: ${({ theme }) => `${theme.lineHeight.xsmall}`};
  color: ${({ theme }) => `${theme.colors.description}`};
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 15px;

  .image {
    display: flex;
    align-items: center;
    width: 20px;
    margin-right: 16px;
  }
  &[disabled] {
    opacity: 0.4;
  }
  img {
    height: 20px;
  }
  .url {
    cursor: pointer;
  }
  .url:hover {
    text-decoration: underline;
  }

  ${bps.mobile} {
    margin-bottom: 5px;
  }
`;

const ItemIcon = ({ id, value }: ItemIconProps) => {
  const onclickItem = () => {
    if (isValidateUrl(value)) {
      window.open(value, '_blank');
    }
  };

  return (
    <ItemIconContainer className="item" disabled={!Boolean(value)}>
      <div className="image">
        <img src={`/assets/icon-${id}.svg`} />
      </div>
      <span className={isValidateUrl(value) ? 'url' : ''} onClick={onclickItem}>
        {value || 'Not Available'}
      </span>
    </ItemIconContainer>
  );
};

export default ItemIcon;
