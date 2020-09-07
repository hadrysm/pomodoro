import styled from 'styled-components';

export const Icon = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 1rem;
  background-image: url(${({ iconImage }) => iconImage});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
`;
