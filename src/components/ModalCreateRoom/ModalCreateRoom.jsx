import Select from 'react-select';
import { Icon } from '../../shared/components/Icon/Icon';
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
  CheckTime,
  CheckTimeContainer,
  CreateRoomTime,
  DateTime,
  DateTimeContainer,
  TitleTimeContainer,
} from './ModalCreateRoom.styled';
import { useState } from 'react';
import { questionnaire, questions, users } from '../../temp/data';

export const ModalCreateRoom = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('Now');

  const handleQuestionChange = (questionId) => {
    if (selectedQuestion === questionId) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(questionId);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
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
          Room name *
          <InputRoom type="text" name="roomName" />
        </Label>

        <Label>
          People *
          <Select
            isMulti
            name="users"
            options={users}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </Label>

        <Label>
          Choose a Questionnaire *
          <Select
            className="basic-single"
            classNamePrefix="select"
            isSearchable={false}
            isLoading={false}
            isClearable={true}
            name="question"
            options={questionnaire}
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
                  <Question>Lorem ipsum dolor sit?</Question>
                </QuestionSubTitleContainer>
                <QuestionChoiceContainer>
                  <Title>Choices</Title>
                  <AddOptionBtn type="button">+ Add Option</AddOptionBtn>
                  <ChoicesContainer>
                    <Choices>
                      <button type="button">
                        <Icon iconName={'icon-dots'} width={16} height={16} />
                      </button>
                      Yes
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
                      No
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
        <CreateRoomTime>
          <Title>When do you want to create a room? *</Title>
          <CheckTimeContainer>
            <CheckTime onClick={() => handleOptionChange('Now')}>Now</CheckTime>
            <CheckTime onClick={() => handleOptionChange('Schedule')}>
              Schedule
            </CheckTime>
          </CheckTimeContainer>
          {selectedOption === 'Schedule' && (
            <DateTimeContainer>
              <TitleTimeContainer>
                <Title>Date *</Title>
                <DateTime>06.14.22</DateTime>
              </TitleTimeContainer>
              <TitleTimeContainer>
                <Title>Time *</Title>
                <DateTime>12:00 AM</DateTime>
              </TitleTimeContainer>
            </DateTimeContainer>
          )}
        </CreateRoomTime>
      </ModalInputContainer>
    </ModalContainer>
  );
};
