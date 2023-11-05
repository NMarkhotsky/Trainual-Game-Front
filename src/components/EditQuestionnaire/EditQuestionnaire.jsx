import { useNavigate } from 'react-router';
import { ContentblockGame } from '../QuizGame/ContentblockGame.styled';
import { Icon } from '../../shared/components/Icon/Icon';
import {
  Box,
  ButtonBack,
  ContainerIcon,
  ContainerInfo,
  ContainerInfoAvatar,
  ContainerOptions,
  ContainerQuestionnaire,
  Count,
  EditContainer,
  InfoData,
  InfoText,
  LabelQuestionnaire,
  QuestionContainer,
  QuestionInfo,
  QuestionText,
  SubTitle,
  Title,
} from './EditQuestionnaire.styled';
import defaultAvatar from '../../assets/img/defaultEdit.png';
import {
  AddOptionBtn,
  Choices,
  ChoicesContainer,
  Question,
  QuestionChoiceContainer,
  QuestionSubContainer,
  QuestionSubTitleContainer,
  Title as QuestionTitle,
} from '../ModalCreateRoom/ModalCreateRoom.styled';
import {
  ButtonCancel,
  ButtonCreate,
  ButtonWrapper,
} from '../../shared/components/ModalWrapper/ModalWrapper.styled';

export const EditQuestionnaire = () => {
  const navigate = useNavigate();

  return (
    <>
      <ContentblockGame>
        <ButtonBack onClick={() => navigate('/dashboard/game')}>
          <Icon iconName="icon-arrow-back" width="20px" height="20px" />
          Back to room
        </ButtonBack>
        <EditContainer>
          <Title>Edit Questionnaire</Title>
          <SubTitle>
            Here you can edit and delete the created questionnaires
          </SubTitle>
          <LabelQuestionnaire>4 Questionnaire</LabelQuestionnaire>
          <ContainerQuestionnaire>
            <ContainerInfo>
              <ContainerIcon>
                <Icon iconName="icon-arrow" width="16px" height="16px" />
                <div>
                  <InfoText>Company History</InfoText>
                  <InfoData>Updated November 15, 2023</InfoData>
                </div>
              </ContainerIcon>
            </ContainerInfo>
            <ContainerInfoAvatar>
              <img src={defaultAvatar} width={24} height={24} alt="avatar" />
              <Icon iconName="icon-more" width="20px" height="20px" />
            </ContainerInfoAvatar>
          </ContainerQuestionnaire>
          <QuestionContainer>
            <QuestionInfo>
              <Icon iconName="icon-dots" width="16px" height="16px" />
              <QuestionText>
                Q#1 - What year was our company founded?
              </QuestionText>
              <ContainerOptions>
                <Count>5 Answers</Count>
                <button>
                  <Icon iconName="icon-delete" width="16px" height="16px" />
                </button>
                <button>
                  <Icon iconName="icon-arrow" width="16px" height="16px" />
                </button>
              </ContainerOptions>
            </QuestionInfo>
          </QuestionContainer>
          <Box>
            <QuestionContainer>
              <QuestionInfo>
                <Icon iconName="icon-dots" width="16px" height="16px" />
                <QuestionText>
                  Q#2 - Who was the founder of our company?
                </QuestionText>
                <ContainerOptions>
                  <Count>3 Answers</Count>
                  <button>
                    <Icon iconName="icon-delete" width="16px" height="16px" />
                  </button>
                  <button>
                    <Icon iconName="icon-arrow" width="16px" height="16px" />
                  </button>
                </ContainerOptions>
              </QuestionInfo>
            </QuestionContainer>
            <div style={{ padding: '16px' }}>
              <QuestionSubContainer>
                <QuestionSubTitleContainer>
                  <QuestionTitle>Question</QuestionTitle>
                  <Question>Who was the founder of our company?</Question>
                </QuestionSubTitleContainer>
                <QuestionChoiceContainer>
                  <QuestionTitle>Choices</QuestionTitle>
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
            </div>
          </Box>
          <ButtonWrapper>
            <ButtonCancel type="button">Cancel</ButtonCancel>
            <ButtonCreate type="button">Save</ButtonCreate>
          </ButtonWrapper>
        </EditContainer>
      </ContentblockGame>
    </>
  );
};
