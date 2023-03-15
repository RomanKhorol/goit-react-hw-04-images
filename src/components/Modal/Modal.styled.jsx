import styled from '@emotion/styled';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Window = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  border-radius: 3px;
`;
