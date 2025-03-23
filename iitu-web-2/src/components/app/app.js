import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import { ErrorIndicator, NotFoundIndicator } from '../errors'
import ErrorBoundary from "../error-boundary"
// import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiServiceProvider } from '../swapi-service-context'
import SwapiService from "../../services/swapi-service"
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from "../pages"

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {
    state = {
        selectedItem: null,
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { isLoggedIn, swapiService } = this.state

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header />
                            <RandomPlanet />
                            <Routes>
                                <Route path="/" element={<h4>Welcome to StarDB</h4>} />
                                <Route path="/people/:id?" element={<PeoplePage />}/>
                                <Route path="/planets:id?" element={<PlanetsPage />}/>
                                <Route path="/starships" element={<StarshipsPage />}/>
                                <Route path="/starships/:id" element={<StarshipDetailsWrapper />} />
                                <Route path="/login" elemtn={<LoginPage isLoggedIn={ isLoggedIn } onLogin={ this.onLogin } />} />
                                <Route path="/secret" element={<SecretPage isLoggedIn={ isLoggedIn } />} />
                                <Route element={<NotFoundIndicator />} />
                            </Routes>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
};

const StarshipDetailsWrapper = () => {
    const { id } = useParams();
    return <StarshipDetails itemId={id} />;
};