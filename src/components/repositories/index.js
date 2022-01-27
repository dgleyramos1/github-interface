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

        </S.wrapperTabs>
    );
}

export default Repositories;