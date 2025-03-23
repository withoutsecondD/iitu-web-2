import React from "react"
import Row from "../row"
import { StarshipList } from "../sw-components"
import { withRouter } from "react-router-dom"

const StarshipsPage = ({ history }) => {
    return (
        <StarshipList onItemSelected={(itemId) => history.push(itemId)} />
    )
}

export default withRouter(StarshipsPage)