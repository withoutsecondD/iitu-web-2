import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { PlanetList, PlanetDetails } from "../sw-components"
import Row from "../row"

const PlanetsPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    
    return (
        <Row
            left={<PlanetList onItemSelected={( id ) => navigate(id)} />}
            right={<PlanetDetails itemId={ params.id } />}
        />
    )
}

export default PlanetsPage