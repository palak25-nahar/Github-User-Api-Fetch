import React from 'react'

const RepositoryItem = (repo) => {
    return (
        <div className="ui relaxed divided list">
        <div className="item">
            <i className="i large github middle aligned icon">
            </i>
            <div className="content">
                <a href={repo.html_url} className="header" target="_blank">{repo.name}</a>
            </div>
        </div>
    </div>
    )
}

export default RepositoryItem;