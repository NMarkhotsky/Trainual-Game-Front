import styled from 'styled-components';

export const ModalContainer = styled.div``;

export const ModalTitle = styled.h2`
  margin-bottom: 4px;

  font-size: 20px;
  font-weight: 800;
  line-height: 24.99px;
`;

export const ModalSubTitle = styled.p`
  margin-bottom: 32px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const InputRoom = styled.input`
  width: 100%;
  padding: 6px 16px;

  border-radius: 4px;
  border: 1px solid #e3e3e3;

  background-color: #fff;

  box-shadow: 0px 0px 0px 51px #fff inset;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  height: 100%;

  border-radius: 4px;
  border: 1px solid #e3e3e3;

  background-color: #fff;

  box-shadow: 0px 0px 0px 51px #fff inset;
`;

export const QuestionBox = styled.div`
  display: flex;
  height: 100%;
`;

export const TextQuestion = styled.p`
  padding: 0 16px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const IconBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const QuestionSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const QuestionSubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`;

export const QuestionChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
`;

export const Title = styled.p`
  margin-bottom: 6px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
`;

export const Question = styled.div`
  width: 100%;
  padding: 10px 16px;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  border-radius: 4px;
  border: 1px solid #e3e3e3;

  background: #fff;

  box-shadow: 0px 0px 0px 51px #fff inset;
`;

export const AddOptionBtn = styled.button`
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
`;

export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 10px 16px;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  border-radius: 4px;
  border: 1px solid #e3e3e3;

  background: #fff;

  box-shadow: 0px 0px 0px 51px #fff inset;
`;

export const Choices = styled.div`
  display: flex;
  gap: 13px;
`;

export const AddQuestionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  width: 100%;

  font-size: 12px;
  font-weight: 600;
  line-height: 18px;

  border-radius: 4px;
  border: 1px dashed #e3e3e3;

  background: #fff;
  box-shadow: 0px 0px 0px 51px #fff inset;
`;

export const CreateRoomTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CheckTimeContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const CheckTime = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 36px;
  padding: 10px 16px;

  border-radius: 8px;
  border: 1px solid #e3e3e3;

  &:active,
  &:focus {
    border: 1px solid #6a28ea;
    background: #f2ecfd;
  }
`;
export const DateTimeContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;

  margin-top: 16px;
`;

export const TitleTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DateTime = styled.div`
  width: 100%;
  padding: 10px 16px;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;

  border-radius: 4px;
  border: 1px solid #e3e3e3;

  background: #fff;

  box-shadow: 0px 0px 0px 51px #fff inset;
`;
