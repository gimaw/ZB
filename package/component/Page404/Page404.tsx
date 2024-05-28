import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styled404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  font-size: 30px;
`;

export function Page404() {
  return (
    <Styled404>
      존재하지 않는 페이지입니다.
      <Link to="/" replace>
        <button>메인으로</button>
      </Link>
    </Styled404>
  );
}
