import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: flex-start;
`;

export const Content = styled.div`
  position: fixed;
  color: black;
  height: 100vh;
  z-index: 2000;
  left: 0;
  top: 0;
  background: white;
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #E0E4E7;
  justify-content: flex-start;
  align-items: flex-start;
  transition: 50s ease-in;

  @media (min-width: 640px) {
    
  }

`;
