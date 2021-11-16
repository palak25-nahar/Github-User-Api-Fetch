import React from 'react';
import { Card } from 'semantic-ui-react'

const DisplayGithub = ({ data, repositories }) => {
    return (
        <Card.Group className="ui container centered aligned">
            <Card
                image={!data.avatar_url ? '' : (
                    <img className="ui medium circular image"
                        src={data.avatar_url}
                        alt={data.avatar_url}
                    />
                )}
                header={data.name}
                meta={data.location}

            />
            <Card style={{overflow: 'auto', maxHeight: 400 }}
                description={repositories.map(repo => (
                    <div className="ui relaxed divided list" key={repo.name}>
                        <div className="item">
                            <i className="i large github middle aligned icon">
                            </i>
                            <div className="content">
                                <a href={repo.html_url} className="header" target="_blank">{repo.name}</a> 
                            </div>
                        </div>
                    </div>
                ))}
            />
        </Card.Group>


    )
}

export default DisplayGithub;
