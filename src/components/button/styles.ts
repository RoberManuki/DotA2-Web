import styled from 'styled-components';
import { darken, shade } from 'polished';

export const Container = styled.button`
  background: ${darken(0.4, '#FFFACD')};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.4, darken(0.1, '#FFFACD'))};
  }
`;
