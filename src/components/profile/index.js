import * as S from './styled';
import useGithub from '../../hooks/gihub-hooks'

const Profile = () => {


    const { githubState } = useGithub();

    return (
        <S.Wrapper>
          <S.WrapperImage src="" alt="Pictures of user" />
          <S.WrapperInfoUser>
          <div>
            <h1>{ githubState.user.name }</h1>
            <S.WrapperUsername>
                <h3>User.name: </h3>
                <a
                    href={ githubState.user.html_url }
                    target="_blank"
                    rel="noreferrer"
                >
                    { githubState.user.login }
                </a>
            </S.WrapperUsername>
          </div>
          <S.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>{ githubState.user.followers }</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>{ githubState.user.following }</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{ githubState.user.public_gists }</span>
            </div>
            <div>
              <h4>Repo</h4>
              <span>{ githubState.user.public_repos }</span>
            </div>
          </S.WrapperStatusCount>
          </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;