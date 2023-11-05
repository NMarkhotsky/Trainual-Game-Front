import { styled } from 'styled-components';

export const BackDrop = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  background: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  width: 598px;
  min-height: 225px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 32px 48px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
`;

export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  top: 16px;
  right: 16px;

  position: absolute;

  line-height: 0;

  background: transparent;
`;

export const Content = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 16px;

  width: 100%;
`;

export const ButtonCancel = styled.button`
  width: 96px;
  height: 36px;

  border-radius: 100px;
  border: 1px solid #6a28ea;
  background-color: #fff;
  color: #6a28ea;
`;

export const ButtonCreate = styled.button`
  width: 96px;
  height: 36px;
  margin-top: 32px;

  border-radius: 100px;
  border: 1px solid #6a28ea;
  background-color: #6a28ea;
  color: #fff;
`;
