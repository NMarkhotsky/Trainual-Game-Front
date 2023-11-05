import { Icon } from "../../shared/components/Icon/Icon";
import {
  BlockBtn,
  BlockBtnAcordionGame,
  BlockBtnIcon,
  BlockBtnIconFlex,
  BlockBtnIconPadding,
  BlockInfoUser,
  BlockLinkFriends,
  BlockLinkFriendsBtn,
  BlockMenu,
  BlockMenuBtn,
  BlockMenuBtnAndAcordion,
  BlockSearch,
  BtnAdd,
  BtnInfoProfile,
  BtnOpenMenu,
  BtnOpenMenuIcon,
  ContentDashboard,
  ContentblockGame,
  ContentblockGameHeader,
  ContentblockGameHeaderBtn,
  ContentblockGameHeaderH3,
  Footter,
  FootterLogo,
  GameHeaderBtnCreateQuesMenu,
  GameHeaderBtnCreateQuesMenuTitle,
  GameHeaderBtnCreateQuest,
  GameHeaderBtnCreateQuestIcon,
  GameHeaderBtnCreateRoom,
  GameWindowInfo,
  Header,
  IconInfo,
  IconMessage,
  IconProfiles,
  IconSearch,
  Logo,
  LogoIcon,
  Main,
  Nav,
  Search,
  Section,
} from "./DashboardPage.styled";
import logo from "../../assets/logo.png";
import logoFotter from "../../assets/img/powered-by-trainual.svg";
import React, { useState } from "react";

export const DashboardPage = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      setIsOpen(false); // Закрити меню
    } else {
      setActiveMenu(menu);
      setIsOpen(true); // Відкрити меню
    }
  };

  return (
    <>
      <Main>
        <Section>
          <Nav>
            <BlockMenu>
              <div>
                <LogoIcon href="">
                  <Logo src={logo} alt="Trainual" />
                </LogoIcon>
                <BtnOpenMenu>
                  <BtnOpenMenuIcon>
                    <Icon
                      iconName="icon-arrow"
                      width={14}
                      height={14}
                      fill={"black"}
                    />
                  </BtnOpenMenuIcon>
                </BtnOpenMenu>
              </div>

              <BlockMenuBtn>
                <BlockMenuBtnAndAcordion>
                  <BlockBtn>
                    <BlockBtnIconFlex>
                      <BlockBtnIcon>
                        <Icon
                          iconName="icon-desk"
                          width={46}
                          height={46}
                          fill={"black"}
                        />
                      </BlockBtnIcon>
                      <p>My desk</p>
                    </BlockBtnIconFlex>
                  </BlockBtn>
                </BlockMenuBtnAndAcordion>

                <BlockMenuBtnAndAcordion>
                  <BlockBtn>
                    <BlockBtnIconFlex>
                      <BlockBtnIcon>
                        <Icon
                          iconName="icon-content"
                          width={46}
                          height={46}
                          fill={"black"}
                        />
                      </BlockBtnIcon>
                      <p>Content</p>
                    </BlockBtnIconFlex>
                  </BlockBtn>
                </BlockMenuBtnAndAcordion>

                <BlockMenuBtnAndAcordion>
                  <BlockBtn onClick={() => handleToggleMenu("people")}>
                    <BlockBtnIconFlex>
                      <BlockBtnIconPadding>
                        <Icon
                          iconName="icon-people"
                          width={20}
                          height={20}
                          fill={"black"}
                        />
                      </BlockBtnIconPadding>
                      <p>People</p>
                    </BlockBtnIconFlex>

                    <button>
                      <Icon
                        iconName="icon-arrow"
                        width={16}
                        height={16}
                        fill={"black"}
                      />
                    </button>
                  </BlockBtn>
                  {isOpen && activeMenu === "people" && (
                    <div>
                      <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                      <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                    </div>
                  )}
                </BlockMenuBtnAndAcordion>

                <BlockMenuBtnAndAcordion>
                  <BlockBtn>
                    <BlockBtnIconFlex>
                      <BlockBtnIcon>
                        <Icon
                          iconName="icon-groups"
                          width={46}
                          height={46}
                          fill={"black"}
                        />
                      </BlockBtnIcon>
                      <p>Groups</p>
                    </BlockBtnIconFlex>
                  </BlockBtn>
                </BlockMenuBtnAndAcordion>

                <BlockMenuBtnAndAcordion>
                  <BlockBtn onClick={() => handleToggleMenu("reports")}>
                    <BlockBtnIconFlex>
                      <BlockBtnIcon>
                        <Icon
                          iconName="icon-reports"
                          width={46}
                          height={46}
                          fill={"black"}
                        />
                      </BlockBtnIcon>
                      <p>Reports</p>
                    </BlockBtnIconFlex>

                    <button>
                      <Icon
                        iconName="icon-arrow"
                        width={14}
                        height={14}
                        fill={"black"}
                      />
                    </button>
                  </BlockBtn>
                  {isOpen && activeMenu === "reports" && (
                    <div>
                      <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                      <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                    </div>
                  )}
                </BlockMenuBtnAndAcordion>

                <BlockMenuBtnAndAcordion>
                  <BlockBtn onClick={() => handleToggleMenu("account")}>
                    <BlockBtnIconFlex>
                      <BlockBtnIconPadding>
                        <Icon
                          iconName="icon-account"
                          width={20}
                          height={20}
                          fill={"black"}
                        />
                      </BlockBtnIconPadding>
                      <p>Account</p>
                    </BlockBtnIconFlex>

                    <button>
                      <Icon
                        iconName="icon-arrow"
                        width={14}
                        height={14}
                        fill={"black"}
                      />
                    </button>
                  </BlockBtn>

                  {isOpen && activeMenu === "account" && (
                    <div>
                      <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                      <BlockBtnAcordionGame>test text</BlockBtnAcordionGame>
                    </div>
                  )}
                </BlockMenuBtnAndAcordion>

                <BlockMenuBtnAndAcordion>
                  <BlockBtn onClick={() => handleToggleMenu("game")}>
                    <BlockBtnIconFlex>
                      <BlockBtnIconPadding>
                        <Icon
                          iconName="icon-game"
                          width={24}
                          height={24}
                          fill={"black"}
                        />
                      </BlockBtnIconPadding>
                      <p>Games</p>
                    </BlockBtnIconFlex>
                    {/* {isOpen ? 'transform: rotate(45deg);' : 'transform: rotate(90deg);'} */}
                    <div>
                      <Icon
                        iconName="icon-arrow"
                        width={14}
                        height={14}
                        fill={"black"}
                      />
                    </div>
                  </BlockBtn>

                  {isOpen && activeMenu === "game" && (
                    <div>
                      <BlockBtnAcordionGame>Quiz game</BlockBtnAcordionGame>
                      <BlockBtnAcordionGame>Lorem game</BlockBtnAcordionGame>
                    </div>
                  )}
                </BlockMenuBtnAndAcordion>
              </BlockMenuBtn>
            </BlockMenu>

            <BlockLinkFriends>
              <BlockLinkFriendsBtn href="">
                <Icon iconName="icon-invite-teammates" width={16} height={16} />
                Invite teammates
              </BlockLinkFriendsBtn>
            </BlockLinkFriends>
          </Nav>
          <ContentDashboard>
            <Header>
              <BlockSearch>
                <IconSearch>
                  <Icon iconName="icon-search" width={16} height={16} />
                </IconSearch>

                <Search type="text" placeholder="Search Trainual..." />
              </BlockSearch>

              <BlockInfoUser>
                <IconInfo href="">
                  <Icon iconName="icon-question" width={20} height={20} />
                </IconInfo>
                <IconMessage href="">
                  <Icon iconName="icon-notifications" width={17} height={20} />
                </IconMessage>
                <BtnAdd>
                  <Icon
                    iconName="icon-plus"
                    width={17}
                    height={20}
                    fill={"white"}
                  />
                </BtnAdd>
                <BtnInfoProfile>
                  <IconProfiles>DS</IconProfiles>
                </BtnInfoProfile>
              </BlockInfoUser>
            </Header>

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
                          <GameHeaderBtnCreateQuesMenuTitle>
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
                  <GameHeaderBtnCreateRoom>
                    Create a room
                  </GameHeaderBtnCreateRoom>
                </ContentblockGameHeaderBtn>
              </ContentblockGameHeader>

              <GameWindowInfo>
                <h3>Quiz</h3>
                <p>
                  is a game in which players are offered questions on various
                  topics about the company. Players compete for the correct
                  answers, trying to score as many points as possible.
                </p>

                <div>
                  <Icon
                    iconName="icon-cross"
                    width={15}
                    height={20}
                    fill={"black"}
                  />
                </div>
              </GameWindowInfo>
              content
            </ContentblockGame>

            <Footter>
              <FootterLogo>
                <Logo src={logoFotter} alt="Trainual" />
              </FootterLogo>
              <div>
                <a href="">Privacy</a> | <a href="">Terms</a>
              </div>
            </Footter>
          </ContentDashboard>
        </Section>
      </Main>
    </>
  );
};
