
import { Icon } from "../../shared/components/Icon/Icon";
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
} from "./ContentblockGame.styled";

export const QuizGame = () => {
  return (
    <ContentblockGame>
      <ContentblockGameHeader>
        <ContentblockGameHeaderH3>Quiz Game</ContentblockGameHeaderH3>

        <ContentblockGameHeaderBtn>
          <GameHeaderBtnCreateQuest
            onClick={() => handleToggleMenu("createQuest")}
          >
            Questionnaire
            <GameHeaderBtnCreateQuestIcon>
              <Icon
                iconName="icon-arrow"
                width={16}
                height={16}
                fill={"#6A28EA"}
              />

              {isOpen && activeMenu === "createQuest" && (
                <GameHeaderBtnCreateQuesMenu>
                  <GameHeaderBtnCreateQuesMenuTitle
                    onClick={() => setShowModal(true)}
                  >
                    <div>
                      <Icon
                        iconName="icon-plus"
                        width={15}
                        height={20}
                        fill={"black"}
                      />
                    </div>
                    Create
                  </GameHeaderBtnCreateQuesMenuTitle>

                  <GameHeaderBtnCreateQuesMenuTitle>
                    <div>
                      <Icon
                        iconName="icon-edit"
                        width={15}
                        height={20}
                        fill={"black"}
                      />
                    </div>
                    Edit
                  </GameHeaderBtnCreateQuesMenuTitle>
                </GameHeaderBtnCreateQuesMenu>
              )}
            </GameHeaderBtnCreateQuestIcon>
          </GameHeaderBtnCreateQuest>
          <GameHeaderBtnCreateRoom>Create a room</GameHeaderBtnCreateRoom>
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
          <Icon iconName="icon-cross" width={15} height={20} fill={"black"} />
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
  );
};
