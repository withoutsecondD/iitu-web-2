import React from "react"
import Row from "../row"
import { StarshipList } from "../sw-components"
import { useNavigate } from "react-router-dom"
import StarshipIntro from "../starship-intro"

const StarshipsPage = () => {
    const navigate = useNavigate()

    return (
        <Row
            left={<StarshipList onItemSelected={(itemId) => navigate(itemId)} />}
            right={<StarshipIntro />}
        />
    )
}

export default StarshipsPage