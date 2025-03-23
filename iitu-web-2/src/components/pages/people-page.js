import React from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { PersonDetails, PersonList } from "../sw-components"
import Row from "../row"

const PeoplePage = ({ history, match }) => {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <Row
            left={<PersonList onItemSelected={( id ) => navigate(id)} />}
            right={<PersonDetails itemId={ params.id } />}
        />
    )
}

export default PeoplePage