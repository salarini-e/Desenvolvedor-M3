import { Component } from "react";
import "./Options.css"


class Options extends Component {

    selecionar(e){
        console.log(e.target.innerHTML)        
    }
    render() {
        return (
            <div id="options" className={this.props.close ? 'hidden' : null}>
                <span onClick={this.selecionar.bind(this)}>Mais recentes</span>
                <span onClick={this.selecionar.bind(this)}>Menor preço</span>
                <span onClick={this.selecionar.bind(this)}>Maior preço</span>
            </div>
        )
    }
}

export default Options;