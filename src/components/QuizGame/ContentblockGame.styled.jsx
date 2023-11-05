import styled from "styled-components";
import background from "../../assets/img/Background.png";

export const ContentblockGame = styled.div`
  width: 100%;
  height: 100vh;
  min-height: fit-content;
  display: flex;
  padding: 32px 40px 128px 40px;
  flex-direction: column;
`;

export const ContentblockGameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentblockGameHeaderH3 = styled.h3`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.99px;
`;

export const ContentblockGameHeaderBtn = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const GameHeaderBtnCreateQuest = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0px 4px 0px 16px;
  align-items: center;
  gap: 8px;
  color: #6a28ea;
  border: 1px solid #6a28ea;
  border-radius: 100px;
  font-family: Poppins;
  font-size: 14.22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: relative;
`;

export const GameHeaderBtnCreateQuestIcon = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50%;
  background: #efe7ff;
`;

export const GameHeaderBtnCreateQuesMenu = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 138px;
  height: fit-content;
  display: flex;
  padding: 16px 16.55px 18px 17px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid #e3e3e3;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  z-index: 30;
`;

export const GameHeaderBtnCreateQuesMenuTitle = styled.div`
  display: flex;
  gap: 16px;
  color: black;
`;

export const GameHeaderBtnCreateRoom = styled.button`
  display: flex;
  height: 36px;
  min-width: 96px;
  padding: 9px 17px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid #6a28ea;
  background: #6a28ea;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: white;
`;

export const GameWindowInfo = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background: url(${background}) no-repeat;
  background-size: cover;
  background-position-x: right;
  background-position-y: center;
  margin-top: 16px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const GameWindowInfoText = styled.div`
  display: flex;
  max-width: 602px;
  width: 100%;
  padding: 24px 40px;
  flex-direction: column;
  align-items: flex-start;
`;

export const GameWindowInfoTextH3 = styled.h3`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 28.8px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
`;

export const GameWindowInfoTextSubtext = styled.p`
  max-width: 457px;
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const GameWindowInfoClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const GameWindowInfoRoom = styled.div`
  display: flex;
  width: 100%;
  height: 72px;
  padding: 16px 8px 16px 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background: #fff;
`;
export const GameWindowInfoRoomBlockIconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const GameWindowInfoRoomBlockIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  padding: 4px;
  align-items: flex-start;
  border-radius: 50px;
  border: 1.5px solid #fedb7f;
  background: #fff1c6;
`;

export const GameWindowInfoRoomBlockText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 4px;
`;

export const GameWindowInfoRoomBlockTextH3 = styled.div`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const GameWindowInfoRoomBlockTextData = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const GameWindowInfoRoomBlockTextDataStatus = styled.div`
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  background: #c6f6ee;
`;

export const GameWindowInfoRoomBlockTextDataPoint = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 100px;
  background: #8e8e8e;
`;

export const GameWindowInfoRoomBlockTextDataP = styled.p`
  color: #737373;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.1px;
  display: flex;
  align-items: center;
`;

export const GameWindowInfoRoomBlockUsers = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const GameWindowInfoRoomBlockRoomUsers = styled.div`
  display: flex;
`;

export const GameWindowInfoRoomBlockUsersIcons = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: lightgray 50%;
  border: 2px solid white;
  margin-right: -7px;
`;

export const GameWindowInfoRoomBlockLead = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const GameWindowInfoRoomBlockLeadIcon = styled.div`
  width: 24px;
  height: 24px;
  background: silver;
  border-radius: 50%;
`;

export const GameWindowInfoRoomBlockOptions = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;