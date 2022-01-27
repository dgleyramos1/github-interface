import { createContext, useCallback, useState } from "react";
import api from '../services/api';


export const GithubContext = createContext({
    loading: false,
    user: {

    },
    repositories: [],
    starred: [],
})

const GithubProvider = ({ children }) => {
    const [ githubState, setGithubState ] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUSer = ( username ) => {
        api.get(`users/${username}`).then( ({ data: { user } } ) => {
            setGithubState((prevState) => ({
                ...prevState,
                user:{
                    login: user.login,
                    name: user.login,
                    html_url: user.login,
                    blog: user.login,
                    company: user.login,
                    location: user.login,
                    followers: user.login,
                    following: user.login,
                    public_gists: user.login,
                    public_repos: user.login,
                },
            }))
        });
    };

    const contextValue = {
        githubState,
        getUSer: useCallback((username) => getUSer(username), []),
    }

    return (
        <GithubContext.Provider
        value={contextValue}
        >
            { children }
        </GithubContext.Provider>
    );
}

export default GithubProvider;