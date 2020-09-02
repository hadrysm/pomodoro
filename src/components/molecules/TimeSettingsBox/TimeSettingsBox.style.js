import styled from 'styled-components';
import { Headline } from 'components/atoms/Headline/Headline.style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeadline = styled(Headline)`
  text-transform: capitalize;
`;
