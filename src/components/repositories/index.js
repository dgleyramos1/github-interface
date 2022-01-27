import RepositoryItem from '../repositories-item';
import * as S from './styled';


const Repositories = () => {
    return (
        <S.wrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.wrapperTabList>
                <S.wrapperTab>Repositories</S.wrapperTab>
                <S.wrapperTab>Starred</S.wrapperTab>
            </S.wrapperTabList>
            <S.wrapperTabPanel>
                <RepositoryItem
                    name="repo 1"
                    linkToRepo=""
                    fullName="dgleyramos1/app-ideas"
                />
            </S.wrapperTabPanel>
            <S.wrapperTabPanel>
                <RepositoryItem 
                    name="repo 2"
                    linkToRepo=""
                    fullName="dgleyramos1/app-ideas"
                />
            </S.wrapperTabPanel>

        </S.wrapperTabs>
    );
}

export default Repositories;