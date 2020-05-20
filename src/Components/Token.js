import React, { Component } from 'react'

class Token extends Component {
    constructor(props) {
        super(props);
        this.tokensArr = []

        this.state = {
            btnClicked : false,
            valeur : 0
        }
    }


    render() {
        this.tokensArr = this.props.tokens.reverse()
        let value = this.props.valeur
        return(
            <div className="Token">
                {this.tokensArr.map((token,i) => {
                    if(token<value){
                        let reste = value % token
                        let nbrToken = (value-reste)/token
                        value = reste
                        return(
                            <p key={i} >
                                Token {token} : {nbrToken}
                            </p>
                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>
        )
    }
}

export default Token