import React from 'react';
import { Card } from 'semantic-ui-react'
import BasicRepoDetails from './BasicRepoDetails'
import RepositoryItem from './RepositoryItem';
import Styles from './Styles';

const DisplayProfileDetails = ({ profile, repositories }) => {

    if (!profile.avatar_url) {
        return null;
    }

    return (
        <Card.Group className="ui container centered aligned">
            <Card
                image={profile.avatar_url}
                header={profile.name}
                meta={profile.location}
            />

           { /* style={{ overflow: 'auto', maxHeight: 400 }}*/}
            <Card style={Styles}
                description={repositories.map(repo => (
                    <RepositoryItem key={repo.id} {...repo} />
                ))}
            />
        </Card.Group>
    )
}

export default DisplayProfileDetails;
