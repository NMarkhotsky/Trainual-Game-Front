import styled from "styled-components";

export const Main = styled.main`
  /* min-width: 1000px; */
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

export const LogoIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92px;
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
`;

export const Search = styled.input`
  width: 220px;
  height: 40px;
  background: rgb(255, 255, 255);
  border-radius: 100px;
  padding: 0px 16px;
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
  background: silver;
`;

export const IconMessage = styled.a`
  min-width: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: silver;
`;

export const BtnAdd = styled.button`
  min-width: 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: green;
  border: none;
`;

export const BtnInfoProfile = styled.button`
  min-width: 44px;
  width: 44px;
  height: 44px;
  background: silver;
  border-radius: 50%;
  border: none;
`;

export const ContentblockGame = styled.div`
  width: 100%;
  height: 100vh;
  min-height: fit-content;
`;
