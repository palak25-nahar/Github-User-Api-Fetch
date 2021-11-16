import React, { useState } from 'react'
import DisplayGithub from './DisplayGithub';

const CardDetail = () => {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("")
    const [repositories, setRepositories] = useState([])

    const _onChangeHandler = e => {
        setUsername(e.target.value);
    }

    const _searchHandler = async e => {
        var githubUrl = `https://api.github.com/users/${username}`;
        e.preventDefault();

        const card = await fetch(githubUrl);
        const cardDetailJson = await card.json();
        // console.log(cardDetailJson);

        const repositories = await fetch(cardDetailJson.repos_url)
        const repoJson = await repositories.json();
        // console.log(repoJson)

        if (cardDetailJson) {
            setData(cardDetailJson);
            setRepositories(repoJson);
        }
    };

    return (
        <>
            <div style={{ padding: 20,display:'flex',justifyContent:'center' }}>
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
            <DisplayGithub data={data} repositories={repositories} />
        </>
    )
}

export default CardDetail;
