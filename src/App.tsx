import styled from "styled-components";
import { HomePage } from "./containers/HomePage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const App = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
};
