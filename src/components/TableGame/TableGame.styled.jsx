import styled from "styled-components";

export const BlockGame = styled.div`
  display: flex;
  align-items: start;
  height: calc(100vh - 120px);
`;

export const BlockGameTable = styled.div`
  width: 100%;
`;

export const BlockGameTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px 16px 4px 40px;
  background: #ffe289;
`;

export const BlockGameTableHeaderNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const BlockGameTableHeaderNumberbg = styled.div`
  width: fit-content;
  height: 25px;
  display: flex;
  padding: 4px 16px;
  align-items: center;
  border-radius: 6px;
  background: #fff;
`;
// export const BlockGameTableHeader = styled.div``;

// export const BlockGameTableHeader = styled.div``;

export const BlockGameChat = styled.div`
  display: flex;
  max-width: 328px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, #fff 0%, #fff 100%), rgba(0, 0, 0, 0.2);
`;

export const BlockGameChatHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 9px 16px 41px;
`;

export const BlockGameChatHeaderText = styled.h3`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const BlockGameChatMessage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const MessageYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const MessageYouStyle = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  border-radius: 16px 16px 0px 16px;
  background: #f8f4fe;
  margin-bottom: 16px;
`;

export const MessageYouStyleText = styled.p`
  color: #070707;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const MessageYouBlockTime = styled.div`
  display: flex;
  gap: 8px;
`;

export const MessageStyleDataText = styled.p`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
  letter-spacing: 0.5px;
`;

export const MessageStyleNameText = styled.p`
  color: #6a28ea;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
  letter-spacing: 0.5px;
`;

export const MessageYser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const MessageYserStyle = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 16px 16px 16px 0px;
  background: #f8f8f9;
  margin-bottom: 16px;
`;

export const MessageStyleBlockBtnInput = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 16px;
  align-items: center;
  gap: 12px;
`;

export const MessageStylesInput = styled.input`
width: 100%;
  display: flex;
  padding: 6px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #f5f7f8;
  border: none;
`;
