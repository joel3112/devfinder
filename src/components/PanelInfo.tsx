import styled from '@emotion/styled';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ItemList from './ItemList';
import Avatar from './Avatar';
import { StyledComponentProps } from '../global';
import { bps } from '../styles';
import { formattedDate } from '../utils/helpers';

type PanelInfoProps = {
  date: string;
  description: string;
  image: string;
  name: string;
  username: string;
}

const PanelInfoContainer = styled.div<StyledComponentProps>`
  height: inherit;
  width: 100%;
  overflow: hidden;

  .avatar {
    float: left;
    margin-right: 37px;
  }
  .description {
    clear: both;
    display: block;
    margin-top: 20px;
    font-size: ${({ theme }) => `${theme.fontSizes.small}`};
    color: ${({ theme }) => `${theme.colors.description}`};
    flex: 0 0 100%;
  }

  ${bps.mobile} {
    .avatar {
      margin: 0 19px 33px 0;
    }
    .description {
      font-size: ${({ theme }) => `${theme.fontSizes.xxsmall}`};
    }
  }
`;

const PanelInfo = ({ image, username, name, date, description }: PanelInfoProps) => {
  const isMobile = useMediaQuery(bps.mobile) && description;

  if (!username) {
    return null;
  }

  return (
    <PanelInfoContainer>
      <Avatar image={image} size={isMobile ? 70 : 117} />
      <section>
        <ItemList 
          title={name} 
          subtitle={`@${username}`} 
          description={`Joined ${formattedDate(date)}`} />
        {!isMobile && <span className="description">{description}</span>}
      </section>
      {isMobile && <span className="description">{description}</span>}
    </PanelInfoContainer>
  );
};

export default PanelInfo;
