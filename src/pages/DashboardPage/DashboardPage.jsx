import {
  BlockInfoUser,
  BlockMenu,
  BtnAdd,
  BtnInfoProfile,
  BtnOpenMenu,
  ContentDashboard,
  ContentblockGame,
  Header,
  IconInfo,
  IconMessage,
  LogoIcon,
  Main,
  Nav,
  Search,
  Section,
} from "./DashboardPage.styled";

export const DashboardPage = () => {
  return (
    <>
      <Main>
        <Section>
          <Nav>
            <BlockMenu>
              <div>
                <LogoIcon href="">logo</LogoIcon>
                <BtnOpenMenu></BtnOpenMenu>
              </div>
             

              <div>
                <div>desk</div>
                <div>Content</div>
                <div>People</div>
                <div>Groups</div>
                <div>Reports</div>
                <div>Account</div>
                <div>Games</div>
              </div>
            </BlockMenu>

            <a href="">Invite teammates</a>
          </Nav>
          <ContentDashboard>
            <Header>
              <Search type="text" />
              <BlockInfoUser>
                <IconInfo href=""></IconInfo>
                <IconMessage href=""></IconMessage>
                <BtnAdd></BtnAdd>
                <BtnInfoProfile>PM</BtnInfoProfile>
              </BlockInfoUser>
            </Header>
            <ContentblockGame>content</ContentblockGame>

            <footer>
              <div></div>
              <div>
                <a href="">Privacy</a>|<a href="">Privacy</a>
              </div>
            </footer>
          </ContentDashboard>
        </Section>
      </Main>
    </>
  );
};
