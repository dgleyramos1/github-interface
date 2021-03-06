import RepositoryItem from '../repositories-item';
import * as S from './styled';
import useGithub from '../../hooks/gihub-hooks';
import { useEffect, useState } from 'react';


const Repositories = () => {
    
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [ hasUserForSearchRepos, setHasUserFroSearchRepos] = useState(false)

    useEffect(() => {
        if(!!githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserFroSearchRepos(!!githubState.repositories);
    }, [githubState.user.login]);

    return (
        <S.Wrapper>  
            {hasUserForSearchRepos ? 
                <S.WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </S.WrapperList>
                        
                    </S.WrapperTabPanel>

                </S.WrapperTabs>
            : <></> }
        </S.Wrapper>
    );
}

export default Repositories;