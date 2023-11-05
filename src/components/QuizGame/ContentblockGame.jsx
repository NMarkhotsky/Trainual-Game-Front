import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '../../shared/components/Icon/Icon';
import {
  ContentblockGame,
  ContentblockGameHeader,
  ContentblockGameHeaderBtn,
  ContentblockGameHeaderH3,
  GameHeaderBtnCreateQuesMenu,
  GameHeaderBtnCreateQuesMenuTitle,
  GameHeaderBtnCreateQuest,
  GameHeaderBtnCreateQuestIcon,
  GameHeaderBtnCreateRoom,
  GameWindowInfo,
  GameWindowInfoClose,
  GameWindowInfoRoom,
  GameWindowInfoRoomBlockIcon,
  GameWindowInfoRoomBlockIconText,
  GameWindowInfoRoomBlockLead,
  GameWindowInfoRoomBlockLeadIcon,
  GameWindowInfoRoomBlockOptions,
  GameWindowInfoRoomBlockRoomUsers,
  GameWindowInfoRoomBlockText,
  GameWindowInfoRoomBlockTextData,
  GameWindowInfoRoomBlockTextDataP,
  GameWindowInfoRoomBlockTextDataPoint,
  GameWindowInfoRoomBlockTextDataStatus,
  GameWindowInfoRoomBlockTextH3,
  GameWindowInfoRoomBlockUsers,
  GameWindowInfoRoomBlockUsersIcons,
  GameWindowInfoText,
  GameWindowInfoTextH3,
  GameWindowInfoTextSubtext,
} from './ContentblockGame.styled';
import { ModalWrapper } from '../../shared/components/ModalWrapper/ModalWrapper';
import { ModalCreateRoom } from '../ModalCreateRoom/ModalCreateRoom';
import { ModalCreateQuestionnaire } from '../ModalCreateQuestionnaire/ModalCreateQuestionnaire';

export const QuizGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showModalRoom, setShowModalRoom] = useState(false);
  const [showModalQuestionnaire, setShowModalQuestionnaire] = useState(false);

  const navigate = useNavigate();

  const handleToggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setIsOpen(false);
    } else {
      setActiveMenu(menu);
      setIsOpen(true);
    }
  };

  return (
    <>
      <ContentblockGame>
        <ContentblockGameHeader>
          <ContentblockGameHeaderH3>Quiz Game</ContentblockGameHeaderH3>

          <ContentblockGameHeaderBtn>
            <GameHeaderBtnCreateQuest
              onClick={() => handleToggleMenu('createQuest')}
            >
              Questionnaire
              <GameHeaderBtnCreateQuestIcon>
                <Icon
                  iconName="icon-arrow"
                  width={16}
                  height={16}
                  fill={'#6A28EA'}
                />

                {isOpen && activeMenu === 'createQuest' && (
                  <GameHeaderBtnCreateQuesMenu>
                    <GameHeaderBtnCreateQuesMenuTitle
                      onClick={() => setShowModalQuestionnaire(true)}
                    >
                      <div>
                        <Icon
                          iconName="icon-plus"
                          width={15}
                          height={20}
                          fill={'black'}
                        />
                      </div>
                      Create
                    </GameHeaderBtnCreateQuesMenuTitle>

                    <GameHeaderBtnCreateQuesMenuTitle
                      onClick={() => navigate('/dashboard/edit')}
                    >
                      <div>
                        <Icon
                          iconName="icon-edit"
                          width={15}
                          height={20}
                          fill={'black'}
                        />
                      </div>
                      Edit
                    </GameHeaderBtnCreateQuesMenuTitle>
                  </GameHeaderBtnCreateQuesMenu>
                )}
              </GameHeaderBtnCreateQuestIcon>
            </GameHeaderBtnCreateQuest>
            <GameHeaderBtnCreateRoom onClick={() => setShowModalRoom(true)}>
              Create a room
            </GameHeaderBtnCreateRoom>
          </ContentblockGameHeaderBtn>
        </ContentblockGameHeader>
        <GameWindowInfo>
          <GameWindowInfoText>
            <GameWindowInfoTextH3>Quiz</GameWindowInfoTextH3>
            <GameWindowInfoTextSubtext>
              is a game in which players are offered questions on various topics
              about the company. Players compete for the correct answers, trying
              to score as many points as possible.
            </GameWindowInfoTextSubtext>
          </GameWindowInfoText>

          <GameWindowInfoClose>
            <Icon iconName="icon-cross" width={15} height={20} fill={'black'} />
          </GameWindowInfoClose>
        </GameWindowInfo>

        <GameWindowInfoRoom>
          <GameWindowInfoRoomBlockIconText>
            <GameWindowInfoRoomBlockIcon></GameWindowInfoRoomBlockIcon>

            <GameWindowInfoRoomBlockText>
              <GameWindowInfoRoomBlockTextH3>
                ROOM 1 - Lorem ipsum
              </GameWindowInfoRoomBlockTextH3>
              <GameWindowInfoRoomBlockTextData>
                <GameWindowInfoRoomBlockTextDataStatus>
                  Free
                </GameWindowInfoRoomBlockTextDataStatus>
                <GameWindowInfoRoomBlockTextDataPoint></GameWindowInfoRoomBlockTextDataPoint>
                <GameWindowInfoRoomBlockTextDataP>
                  Created November 04, 2023
                </GameWindowInfoRoomBlockTextDataP>
              </GameWindowInfoRoomBlockTextData>
            </GameWindowInfoRoomBlockText>
          </GameWindowInfoRoomBlockIconText>

          <GameWindowInfoRoomBlockUsers>
            <GameWindowInfoRoomBlockRoomUsers>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
            </GameWindowInfoRoomBlockRoomUsers>

            <div>8/10</div>
          </GameWindowInfoRoomBlockUsers>

          <GameWindowInfoRoomBlockLead>
            <GameWindowInfoRoomBlockLeadIcon></GameWindowInfoRoomBlockLeadIcon>
            <GameWindowInfoRoomBlockOptions>
              <Icon iconName="icon-more" width={5} height={20} />
            </GameWindowInfoRoomBlockOptions>
          </GameWindowInfoRoomBlockLead>
        </GameWindowInfoRoom>

        <GameWindowInfoRoom>
          <GameWindowInfoRoomBlockIconText>
            <GameWindowInfoRoomBlockIcon></GameWindowInfoRoomBlockIcon>

            <GameWindowInfoRoomBlockText>
              <GameWindowInfoRoomBlockTextH3>
                ROOM 1 - Lorem ipsum
              </GameWindowInfoRoomBlockTextH3>
              <GameWindowInfoRoomBlockTextData>
                <GameWindowInfoRoomBlockTextDataStatus>
                  Free
                </GameWindowInfoRoomBlockTextDataStatus>
                <GameWindowInfoRoomBlockTextDataPoint></GameWindowInfoRoomBlockTextDataPoint>
                <GameWindowInfoRoomBlockTextDataP>
                  Created November 04, 2023
                </GameWindowInfoRoomBlockTextDataP>
              </GameWindowInfoRoomBlockTextData>
            </GameWindowInfoRoomBlockText>
          </GameWindowInfoRoomBlockIconText>

          <GameWindowInfoRoomBlockUsers>
            <GameWindowInfoRoomBlockRoomUsers>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
            </GameWindowInfoRoomBlockRoomUsers>

            <div>5/10</div>
          </GameWindowInfoRoomBlockUsers>

          <GameWindowInfoRoomBlockLead>
            <GameWindowInfoRoomBlockLeadIcon></GameWindowInfoRoomBlockLeadIcon>
            <GameWindowInfoRoomBlockOptions>
              <Icon iconName="icon-more" width={5} height={20} />
            </GameWindowInfoRoomBlockOptions>
          </GameWindowInfoRoomBlockLead>
        </GameWindowInfoRoom>

        <GameWindowInfoRoom>
          <GameWindowInfoRoomBlockIconText>
            <GameWindowInfoRoomBlockIcon></GameWindowInfoRoomBlockIcon>

            <GameWindowInfoRoomBlockText>
              <GameWindowInfoRoomBlockTextH3>
                ROOM 1 - Lorem ipsum
              </GameWindowInfoRoomBlockTextH3>
              <GameWindowInfoRoomBlockTextData>
                <GameWindowInfoRoomBlockTextDataStatus>
                  Free
                </GameWindowInfoRoomBlockTextDataStatus>
                <GameWindowInfoRoomBlockTextDataPoint></GameWindowInfoRoomBlockTextDataPoint>
                <GameWindowInfoRoomBlockTextDataP>
                  Created November 04, 2023
                </GameWindowInfoRoomBlockTextDataP>
              </GameWindowInfoRoomBlockTextData>
            </GameWindowInfoRoomBlockText>
          </GameWindowInfoRoomBlockIconText>

          <GameWindowInfoRoomBlockUsers>
            <GameWindowInfoRoomBlockRoomUsers>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
            </GameWindowInfoRoomBlockRoomUsers>

            <div>10/10</div>
          </GameWindowInfoRoomBlockUsers>

          <GameWindowInfoRoomBlockLead>
            <GameWindowInfoRoomBlockLeadIcon></GameWindowInfoRoomBlockLeadIcon>
            <GameWindowInfoRoomBlockOptions>
              <Icon iconName="icon-more" width={5} height={20} />
            </GameWindowInfoRoomBlockOptions>
          </GameWindowInfoRoomBlockLead>
        </GameWindowInfoRoom>

        <GameWindowInfoRoom>
          <GameWindowInfoRoomBlockIconText>
            <GameWindowInfoRoomBlockIcon></GameWindowInfoRoomBlockIcon>

            <GameWindowInfoRoomBlockText>
              <GameWindowInfoRoomBlockTextH3>
                ROOM 1 - Lorem ipsum
              </GameWindowInfoRoomBlockTextH3>
              <GameWindowInfoRoomBlockTextData>
                <GameWindowInfoRoomBlockTextDataStatus>
                  Free
                </GameWindowInfoRoomBlockTextDataStatus>
                <GameWindowInfoRoomBlockTextDataPoint></GameWindowInfoRoomBlockTextDataPoint>
                <GameWindowInfoRoomBlockTextDataP>
                  Created November 04, 2023
                </GameWindowInfoRoomBlockTextDataP>
              </GameWindowInfoRoomBlockTextData>
            </GameWindowInfoRoomBlockText>
          </GameWindowInfoRoomBlockIconText>

          <GameWindowInfoRoomBlockUsers>
            <GameWindowInfoRoomBlockRoomUsers>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
              <GameWindowInfoRoomBlockUsersIcons></GameWindowInfoRoomBlockUsersIcons>
            </GameWindowInfoRoomBlockRoomUsers>

            <div>8/10</div>
          </GameWindowInfoRoomBlockUsers>

          <GameWindowInfoRoomBlockLead>
            <GameWindowInfoRoomBlockLeadIcon></GameWindowInfoRoomBlockLeadIcon>
            <GameWindowInfoRoomBlockOptions>
              <Icon iconName="icon-more" width={5} height={20} />
            </GameWindowInfoRoomBlockOptions>
          </GameWindowInfoRoomBlockLead>
        </GameWindowInfoRoom>
      </ContentblockGame>
      {showModalRoom && (
        <ModalWrapper onClose={() => setShowModalRoom(false)}>
          <ModalCreateRoom />
        </ModalWrapper>
      )}
      {showModalQuestionnaire && (
        <ModalWrapper onClose={() => setShowModalQuestionnaire(false)}>
          <ModalCreateQuestionnaire />
        </ModalWrapper>
      )}
    </>
  );
};
