import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 101;
`;

export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  width: calc(100vw - 5em);
  height: calc(100vh - 5em);
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  font-size: 1.1em;

  background-color: rgba(100, 100, 100, 0.7);
  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 0.4em;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ModalHeader = styled.header`
  text-align: right;
  padding: 10px;
  color: #aaa;
`;

export const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
`;

export const ExitIcon = styled.div`
  cursor: pointer;
  display: block;
  margin-left: auto;
  padding: 10px;
  ${Line}:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  ${Line}:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }
  ${Line}:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
