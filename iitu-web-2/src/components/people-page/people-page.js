import React, {Component} from 'react'

import ItemList from '../item-list/item-list'
import ItemDetails, {Record} from "../item-details/item-details"

import './people-page.css'
import SwapiService from "../../services/swapi-service"
import Row from "../row"
import ErrorBoundary from "../error-boundary"

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: null,
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    };

    render() {
        const {
            getPerson,
            getAllPeople,
            getPersonImage,
        } = this.swapiService

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} getData={this.swapiService.getAllPeople}>
                {i => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="height" label="Height"/>
                <Record field="birthYear" label="Birth Year"/>
            </ItemDetails>
        )

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )
    }
}