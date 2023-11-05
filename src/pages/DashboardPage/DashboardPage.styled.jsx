import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: fit-content;
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  max-width: 220px;
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const BlockMenu = styled.div`
  position: relative;
  z-index: 9;
  background: white;
`;
export const BtnOpenMenu = styled.button`
  position: absolute;
  top: 14px;
  right: -16px;
  display: flex;
  width: 32px;
  height: 32px;
  padding: 0;
  justify-content: start;
  align-items: center;
  border-radius: 16px;
  background: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: -1;
  border: none;

  &::before {
    content: "";
    width: 22px;
    height: 50px;
    background: white;
    margin-left: -6px;
  }
`;

export const BtnOpenMenuIcon = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
  margin-left: -16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92px;
`;

export const Logo = styled.img`
  width: 117px;
  height: 51px;
`;

export const BlockMenuBtn = styled.div`
  display: flex;
  padding: 8px 16px 0 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const BlockMenuBtnAndAcordion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlockBtn = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
  justify-content: space-between;
  align-items: center;
  padding-left: 4px;
  padding-right: 18px;
  cursor: pointer;

  &:hover {
    border-radius: 46px;
    background: rgba(106, 40, 234, 0.05);
    color: #6a28ea;
  }
`;

export const BlockBtnIconFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const BlockBtnIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockBtnIconPadding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px;
`;

export const BlockBtnAcordionGame = styled.button`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 14px 36px 14px 50px;
  align-items: center;
  border-radius: 46px;

  &:hover {
    background: rgba(106, 40, 234, 0.05);
  }
`;

export const BlockLinkFriends = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
  border-top: 1px solid #f1f1f1;
`;

export const BlockLinkFriendsBtn = styled.a`
  display: flex;
  gap: 8px;
  height: 32px;
  min-width: 96px;
  padding: 7px 17px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #6a28ea;
  background: #fff;
  color: #6a28ea;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  &:hover {
    background: rgba(106, 40, 234, 0.05);
  }
`;

export const ContentDashboard = styled.div`
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px 0 40px;
  border-bottom: 1px solid #f1f1f1;
`;

export const BlockSearch = styled.div`
  position: relative;
`;

export const IconSearch = styled.div`
  position: absolute;
  z-index: 20;
  display: flex;
  align-items: center;
  left: 26px;
  height: 100%;
`;

export const Search = styled.input`
  position: relative;
  width: 220px;
  height: 40px;
  background: rgb(255, 255, 255);
  border-radius: 100px;
  padding: 0px 16px 0 48px;
  border: 2px solid rgb(241, 241, 241);
`;

export const BlockInfoUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
`;

export const IconInfo = styled.a`
  min-width: 28px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconMessage = styled.a`
  min-width: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnAdd = styled.button`
  min-width: 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #6a28ea;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnInfoProfile = styled.button`
  min-width: 44px;
  width: 40px;
  height: 44px;
  border-radius: 50%;
  border: none;
  border: 4px solid #f1f1f1;
  padding: 1.5px;
`;

export const IconProfiles = styled.div`
  background: silver;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  font-size: 12.6px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  color: white;
`;


export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 60px;
  padding: 14.75px 39.33px 14.75px 24px;
  align-items: center;
`;

export const FooterLogo = styled.div`
  width: 140px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;
