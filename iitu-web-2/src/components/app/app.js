import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorIndicator from "../error-indicator";
import ErrorBoundary from "../error-boundary";
import DummySwapiService from "../../services/dummy-swapi-service";
import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from "../../services/swapi-service";
import {PlanetList, StarshipDetails} from "../sw-components";

export default class App extends Component {
    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasState: true })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />

                        <PersonList />
                        <PersonDetails itemId={2} />

                        <StarshipDetails />

                        <PlanetList />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
};