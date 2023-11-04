import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 416px;
  margin: 150px auto;
  padding: 40px 25px;

  border-radius: 5px;
  border: 1px solid #e3e3e3;

  background-color: #ffffff;
`;

export const Logo = styled.img`
  width: 180px;
  height: 80px;

  margin: 0 auto;
`;

export const Title = styled.p`
  margin-top: 36px;
  margin-bottom: 16px;

  text-align: center;
  font-size: 22px;
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;

  margin-bottom: 16px;

  color: #2a2a2a;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 6px;
  padding: 8px 41px;

  border: 1px solid #e3e3e3;
  border-radius: 4px;
`;

export const IconWrapper = styled.div`
  position: absolute;

  bottom: 7px;
  left: 14px;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  /* align-items: baseline; */
  justify-content: stretch;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const InputCheckbox = styled.input`
  width: 18px;
  height: 18px;

  margin-right: 6px;
  margin-left: 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
`;

export const Link = styled.a`
  text-decoration: underline;

  color: #5916df;
`;

export const Button = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 36px;
  padding: 9px 17px;

  background-color: #6a28ea;

  color: white;
  border: none;
  border-radius: 100px;

  &:hover {
    background-color: #5220b5;
  }
`;
