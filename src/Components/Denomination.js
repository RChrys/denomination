import React, { Component } from 'react'
import Token from './Token'

class Denomination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnClicked : false,
            valeur : 0
        }
    }

    handleClick = (event) =>{
        this.setState({
            btnClicked : true
        })
    }

    handleChange = (event) =>{
        const { value } = event.target
        console.log(value)
        if(value>=1){
            this.setState({
                btnClicked : false,
                valeur : value
            })
        }
        console.log(this.state.valeur)
    }


    render() {
        return(
            <div className="Denomination">
                <h1>Denomination</h1>
                <label>Saisir le montant</label>
                <input type="number" onChange={this.handleChange}/>
                <input type="button" value="Envoyer" onClick={this.handleClick}/>
                {this.state.btnClicked && <Token valeur={this.state.valeur} tokens={this.props.denominations}/>}
            </div>
        )
    }
}

export default Denomination