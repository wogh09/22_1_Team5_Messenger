import * as S from './ChatContentsList_Style';
import ChatContent from './ChatContent';

export default function ChatContentsList({ contents, i, onRemove, userid }) {
  return (
    <S.ContentsWrapper>
      <S.UserImage src={contents.profileImage} />
      <div>
        <S.UserNameDateWrapper>
          <S.UserName>{contents.useName}</S.UserName>
          <S.Date>{contents.date} PM</S.Date>
        </S.UserNameDateWrapper>

        {contents.content.map((data, i) => {
          return (
            <ChatContent
              key={i}
              data={data}
              // onRemove={onRemove}
              // userid={userid}
            />
          );
        })}
      </div>
    </S.ContentsWrapper>
  );
}
