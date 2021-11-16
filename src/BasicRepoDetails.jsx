import React from 'react'
import { Card } from 'semantic-ui-react'

const BasicRepoDetails = (profile) => {
    return (
        <>
        image={profile.avatar_url}
        header={profile.name}
        meta={profile.location}
        </>
    )
}

export default BasicRepoDetails;