import React, { useState } from 'react'
import DisplayProfileDetails from './DisplayProfileDetails';
import Styles from './Styles';
import GetRequest from './utilities/GetRequest';

const GithubProfiler = () => {

    const [profile, setProfile] = useState({});
    const [username, setUsername] = useState("")
    const [repositories, setRepositories] = useState([])

    const _onChangeHandler = e => {
        setUsername(e.target.value);
    }

    const _searchHandler = async () => {
        if (!username) {
            return;
        }

        var githubUrl = `https://api.github.com/users/${username}`;

        const profileDetails = await GetRequest(githubUrl);
        if (profileDetails) {
            setProfile(profileDetails);
        }

        const repositories = await GetRequest(profileDetails.repos_url)
        if (repositories) {
            setRepositories(repositories);
        }
    };

    return (
        <>
            <div style={Styles}>
                <div className="ui left aligned category search" >
                    <div className="ui icon input">
                        <i className="search icon">
                        </i>
                        <input
                            className="prompt"
                            placeholder="Enter username.."
                            type="text"
                            value={username}
                            onChange={_onChangeHandler}
                        />
                    </div>
                    <button
                        className="ui primary button"
                        type="submit"
                        onClick={_searchHandler}
                    >
                        <i className="github icon"></i>
                        Search
                    </button>
                </div>
            </div>
            <DisplayProfileDetails profile={profile} repositories={repositories} />
        </>
    )
}

export default GithubProfiler;
