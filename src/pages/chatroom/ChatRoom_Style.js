import styled from 'styled-components';
import { HiPlus } from 'react-icons/hi';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { CgFormatText } from 'react-icons/cg';
import { MdArrowForward } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { HiOutlineReply } from 'react-icons/hi';

export const Container = styled.div`
  height: calc(100vh - 130px);
  padding: 4 20px;
  background-color: #f1f1f1;
  overflow: auto;
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Line = styled.hr`
  flex: auto;
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: #e4e4e9;
`;

export const DayText = styled.span`
  padding: 0 10px;
  font-size: 14px;
`;

export const MessageEditorContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100% - 340px);
  background-color: #f1f1f1;
  padding: 20px;
`;

export const MessageEditorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e6e8;
  border-radius: 2px;
  background-color: #fff;
  height: 44px;
`;

export const TextInput = styled.input`
  width: calc(100% - 250px);
  border: none;
  padding: 14px;

  &:focus {
    outline: none;
  }
`;

export const ReplyContainer = styled.div`
  margin-top: 3px;
`;

export const ReplyBox = styled.div`
  border: 1px solid #e6e6e8;
  border-bottom: none;
  display: flex;
  align-items: center;
  background-color: #fff;
  height: 44px;
`;
export const ReplyIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 40px;
`;

export const ReplyIcon = styled(MdArrowForward)`
  font-size: 23px;
`;

export const TextBox = styled.div`
  margin-left: 20px;
  font-size: 14px;
`;
export const Textdetail = styled.div`
  font-size: 14px;
  margin-left: 20px;
  font-weight: 700;
`;

export const TextDate = styled.div`
  font-size: 14px;
  margin-left: 20px;
`;

export const DeleteIcon = styled(TiDeleteOutline)`
  margin-left: 10px;
`;
export const PlusIcon = styled(HiPlus)`
  font-size: 20px;
  padding: 10px;
  color: #e6e6e8;
  border-right: 1px solid #e6e6e8;
  cursor: pointer;
`;

export const TextIcon = styled(CgFormatText)`
  font-size: 20px;
  padding: 10px;
  color: #e6e6e8;
  cursor: pointer;
`;

export const EmojiIcon = styled(HiOutlineEmojiHappy)`
  font-size: 20px;
  padding: 10px;
  color: #e6e6e8;
  cursor: pointer;
`;

export const AtSignIcon = styled(MdAlternateEmail)`
  font-size: 20px;
  padding: 10px;
  color: #e6e6e8;
  cursor: pointer;
`;

export const EnterIcon = styled(FiSend)`
  font-size: 20px;
  padding: 8px;
  color: #fff;
  background-color: #e6e6e8;
  margin-right: 4px;
  cursor: pointer;
`;

export const UserImage = styled.img`
  src: url(${props => props.src});
  background-color: #fff;
  object-fit: cover;
  width: 40px;
  height: 40px;
  margin: 0 20px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserMessageContainer = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;
export const TypingText = styled.div`
  font-size: 16px;
  padding: 4px 0;
  margin-right: 20px;
`;
export const TextArea = styled.span``;

export const ContentsContainer = styled.div`
  display: flex;
`;

export const Delete = styled(TiDeleteOutline)``;

export const Reply = styled(HiOutlineReply)``;

export const Date = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #8b8e95;
`;
