import React from 'react';
import logo from './logo.svg';
import './App.css';

//conecta react con redux
import {connect} from "react-redux";

import {updateName} from './actions/_userActions';
import {updateCountry} from './actions/_countryActions';
import {updateNacionaity} from "./actions/_nacionalityActions";

class App extends React.Component {

    state = {

        name: '',
        country: '',
        nacionality: '',


    }
    onhandleChange = async (name) => {

        // this.setState({name})
        const id = name.target.id
        const value = name.target.value
        await this.setState({[id]: value})
        console.log(this.state);

    }


    onClick = () => {
        const name = this.state.name;
        this.props.updateName(name)

    }
    onClick2 = () => {
        const country = this.state.country;
        this.props.updateCountry(country)

    }

    onClick3 = () => {
        const nacionality = this.state.nacionality;
        this.props.updateNacionality(nacionality)

    }


    render() {
        return (<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        ¡ Hola mi nombre es Cesar !

                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <input id='name' type="text" onChange={(this.onhandleChange)}/>

                    <input id='country' type="text" onChange={(this.onhandleChange)}/>


                    <input id='nacionality' type="text" onChange={(this.onhandleChange)}/>

                    <p>
                        {this.props.name}
                    </p>


                    <p>
                        {this.props.country}
                    </p>
                    <p>
                        {this.props.nacionality}
                    </p>


                    <button onClick={() => this.onClick()}>Actualizar</button>


                    <button onClick={() => this.onClick2()}>Actualizar Paises</button>


                    <button onClick={() => this.onClick3()}>Actualizar Nacionality</button>


                </header>
            </div>
        );

    }
}

//nos trae del estado los elementos
const mapStateToProps = (state) => ({
    name: state.user.name,
    country: state.country.country,
    nacionality: state.nacionality.nacionality

})


//es una funcion que se va encargar  de indicar al provider  que infromacion necesitamos del store
const mapDispatchToProps = (dispatch) => ({
    updateName: (name) => dispatch(updateName(name)),
    updateCountry: (country) => dispatch(updateCountry(country)),
    updateNacionality: (nacionality) => dispatch(updateNacionaity(nacionality)),

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
