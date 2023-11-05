import { useState } from 'react';
import { Icon } from '../../shared/components/Icon/Icon';
import { questions } from '../../temp/data';
import {
  AddOptionBtn,
  AddQuestionBtn,
  Choices,
  ChoicesContainer,
  IconBox,
  InputRoom,
  Label,
  ModalContainer,
  ModalInputContainer,
  ModalSubTitle,
  ModalTitle,
  Question,
  QuestionBox,
  QuestionChoiceContainer,
  QuestionContainer,
  QuestionSubContainer,
  QuestionSubTitleContainer,
  TextQuestion,
  Title,
} from '../ModalCreateRoom/ModalCreateRoom.styled';

export const ModalCreateQuestionnaire = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionChange = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(questionId);
    }
  };

  return (
    <ModalContainer>
      <ModalTitle>Create a room</ModalTitle>
      <ModalSubTitle>
        Lorem ipsum dolor sit amet consectetur. Vestibulum pellentesque viverra
        nulla leo magna diam pellentesque pellentesque. Lectus quis nisl quam
        magna sed sed fames.
      </ModalSubTitle>
      <ModalInputContainer>
        <Label>
          Questionnaire name *
          <InputRoom
            type="text"
            name="questionName"
            placeholder="Come up with a name"
          />
        </Label>

        {questions.map(({ id, label }) => (
          <QuestionContainer key={id}>
            <QuestionBox>
              <button type="button">
                <Icon iconName={'icon-dots'} width={16} height={16} />
              </button>
              <TextQuestion>{label}</TextQuestion>
            </QuestionBox>

            <IconBox>
              <button type="button">
                <Icon iconName={'icon-delete'} width={16} height={16} />
              </button>
              <button type="button" onClick={() => handleQuestionChange(id)}>
                <Icon
                  iconName={
                    selectedQuestion === id ? 'icon-arrow' : 'icon-arrow'
                  }
                  width={16}
                  height={16}
                />
              </button>
            </IconBox>
            {selectedQuestion === id && (
              <QuestionSubContainer>
                <QuestionSubTitleContainer>
                  <Title>Question</Title>
                  <Question>Who was the founder of our company?</Question>
                </QuestionSubTitleContainer>
                <QuestionChoiceContainer>
                  <Title>Choices</Title>
                  <AddOptionBtn type="button">+ Add Option</AddOptionBtn>
                  <ChoicesContainer>
                    <Choices>
                      <button type="button">
                        <Icon iconName={'icon-dots'} width={16} height={16} />
                      </button>
                      John Smith
                    </Choices>
                    <button type="button">
                      <Icon iconName={'icon-delete'} width={16} height={16} />
                    </button>
                  </ChoicesContainer>

                  <ChoicesContainer>
                    <Choices>
                      <button type="button">
                        <Icon iconName={'icon-dots'} width={16} height={16} />
                      </button>
                      Sarah Johnson
                    </Choices>
                    <button type="button">
                      <Icon iconName={'icon-delete'} width={16} height={16} />
                    </button>
                  </ChoicesContainer>
                </QuestionChoiceContainer>
              </QuestionSubContainer>
            )}
          </QuestionContainer>
        ))}
        <AddQuestionBtn type="button">+ Add Question </AddQuestionBtn>
      </ModalInputContainer>
    </ModalContainer>
  );
};
