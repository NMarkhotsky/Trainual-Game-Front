import {
  BlockGame,
  BlockGameChat,
  BlockGameChatHeader,
  BlockGameChatHeaderText,
  BlockGameChatMessage,
  BlockGameTable,
  BlockGameTableGm,
  BlockGameTableHeader,
  BlockGameTableHeaderNumber,
  BlockGameTableHeaderNumberbg,
  MessageStyleBlockBtnInput,
  MessageStyleDataText,
  MessageStyleNameText,
  MessageStylesInput,
  MessageText,
  MessageYou,
  MessageYouBlockTime,
  MessageYouStyle,
  MessageYouStyleText,
  MessageYser,
  MessageYserStyle,
} from "./TableGame.styled";
import { Icon } from "../../shared/components/Icon/Icon";
export const TableGame = () => {
  return (
    <>
      <BlockGame>
        <BlockGameTable>
          <BlockGameTableHeader>
            <div>QUIZ Game</div>

            <BlockGameTableHeaderNumber>
              <BlockGameTableHeaderNumberbg>0/10</BlockGameTableHeaderNumberbg>
              <BlockGameTableHeaderNumberbg>
                <div>
                  <Icon iconName="icon-star" width={24} height={24} />
                </div>
                <div>00000</div>
              </BlockGameTableHeaderNumberbg>
            </BlockGameTableHeaderNumber>
          </BlockGameTableHeader>

          <BlockGameTableGm></BlockGameTableGm>


        </BlockGameTable>
        <BlockGameChat>
          <BlockGameChatHeader>
            <BlockGameChatHeaderText>Game chat</BlockGameChatHeaderText>
            <button>
              <Icon iconName="icon-logout" width={24} height={24} />
            </button>
          </BlockGameChatHeader>

          <BlockGameChatMessage>
            <MessageText>
              <MessageYou>
                <MessageYouStyle>
                  <MessageYouStyleText>Does anyone remember what year?</MessageYouStyleText>
                  <MessageYouBlockTime>
                    <MessageStyleDataText>16:46</MessageStyleDataText>
                    <MessageStyleNameText>You</MessageStyleNameText>
                  </MessageYouBlockTime>
                </MessageYouStyle>
                <MessageYouStyle>
                  <MessageYouStyleText>I don't remember</MessageYouStyleText>
                  <MessageYouBlockTime>
                    <MessageStyleDataText>16:46</MessageStyleDataText>
                    <MessageStyleNameText>You</MessageStyleNameText>
                  </MessageYouBlockTime>
                </MessageYouStyle>
              </MessageYou>

              <MessageYser>
                <MessageYserStyle>
                  <MessageYouStyleText>I remember hearing that our company was founded in 2010</MessageYouStyleText>
                  <MessageYouBlockTime>
                    <MessageStyleDataText>16:47</MessageStyleDataText>
                    <MessageStyleNameText>Bessie</MessageStyleNameText>
                  </MessageYouBlockTime>
                </MessageYserStyle>
                <MessageYserStyle>
                  <MessageYouStyleText>2005, seems like the correct answer to me</MessageYouStyleText>
                  <MessageYouBlockTime>
                    <MessageStyleDataText>16:47</MessageStyleDataText>
                    <MessageStyleNameText>Marvin</MessageStyleNameText>
                  </MessageYouBlockTime>
                </MessageYserStyle>
              </MessageYser>
            </MessageText>

            <MessageStyleBlockBtnInput>
              <div><Icon iconName="icon-mic" width={24} height={24} /></div>
              <MessageStylesInput type="text" />
              <button><Icon iconName="icon-send" width={24} height={24} /></button>
            </MessageStyleBlockBtnInput>
          </BlockGameChatMessage>
        </BlockGameChat>
      </BlockGame>
    </>
  );
};
