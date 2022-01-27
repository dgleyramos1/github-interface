import * as S from './styled';

const Profile = () => {
    return (
        <S.Wrapper>
          <S.WrapperImage src="" alt="Pictures of user" />
          <S.WrapperInfoUser>
          <div>
            <h1>Dgley Ramos</h1>
            <S.WrapperUsername>
                <h3>User.name: </h3>
                <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                >
                    dgleyramos1
                </a>
            </S.WrapperUsername>
          </div>
          <S.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </S.WrapperStatusCount>
          </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;