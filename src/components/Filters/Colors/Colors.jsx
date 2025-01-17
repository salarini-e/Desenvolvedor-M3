import { Component } from 'react';
import './Colors.css'
import HiddenColorsOptions from './HiddenColorsOptions'
import MarkedSquare from './ColorsOptions/ColorsOptions';

class Colors extends Component {
    static choices = {'amarelo': false, 'azul': false, 'branco': false,'cinza': false, 'laranja': false, 'verde': false, 'vermelho': false, 'preto': false, 'rosa': false, 'vinho': false};
    constructor(){
        super()        
        this.colorsOcult=['violeta']

        this.state={
            ocult: true,
            choice: Colors.choices
        }
    }
    moreColors(){
        const novoEstado={
            ocult: false,
            choice: this.state.choice
        }
        this.setState(novoEstado)
    }
    marker(e){        
        if (this.state.choice[e.target.id]===false && e.target.className==='square'){
            Colors.choices = {'amarelo': false, 'azul': false, 'branco': false,'cinza': false, 'laranja': false, 'verde': false, 'vermelho': false, 'preto': false, 'rosa': false, 'vinho': false};
            Colors.choices[e.target.id]=true
            this.props.filtro.setColor(e.target.id)
            this.props.filtro.filtrar()
            const novoEstado={
                ocult: this.state.ocult,
                choice: Colors.choices 
            }
            this.setState(novoEstado)
        }else{            
            Colors.choices = {'amarelo': false, 'azul': false, 'branco': false,'cinza': false, 'laranja': false, 'verde': false, 'vermelho': false, 'preto': false, 'rosa': false, 'vinho': false};
            const novoEstado={
                ocult: this.state.ocult,
                choice: Colors.choices 
            }
            this.setState(novoEstado)            
            this.props.filtro.setColor('')
            this.props.filtro.filtrar()
        }  
    }
    render() { 
        return (
            <div>
                <h2>CORES</h2>
                <div id="colors">
                    <div className="color-options">
                        <div id='amarelo' className="square" onClick={this.marker.bind(this)}>
                            <MarkedSquare marked={this.state.choice.amarelo}  />
                        </div>
                    <div>Amarelo</div>
                </div>
                <div className="color-options">
                        <div id='azul' className="square" onClick={this.marker.bind(this)}>
                            <MarkedSquare marked={this.state.choice.azul}  />
                        </div>
                    <div>Azul</div>
                </div>
                <div className="color-options">
                        <div id='branco' className="square" onClick={this.marker.bind(this)}>
                            <MarkedSquare marked={this.state.choice.branco}  />
                        </div>
                    <div>Branco</div>
                </div>
                <div className="color-options">
                        <div id='cinza' className="square" onClick={this.marker.bind(this)}>
                            <MarkedSquare marked={this.state.choice.cinza}  />
                        </div>
                    <div>Cinza</div>
                </div>
                <div className="color-options">
                        <div id='laranja' className="square" onClick={this.marker.bind(this)}>
                            <MarkedSquare marked={this.state.choice.laranja}  />
                        </div>
                    <div>Laranja</div>
                </div>
                    <HiddenColorsOptions marked={this.state.choice['verde']} color={'verde'} ocult={this.state.ocult} marker={this.marker.bind(this)}/>
                    <HiddenColorsOptions marked={this.state.choice['vermelho']} color={'vermelho'} ocult={this.state.ocult} marker={this.marker.bind(this)}/>
                    <HiddenColorsOptions marked={this.state.choice['preto']} color={'preto'} ocult={this.state.ocult} marker={this.marker.bind(this)}/>
                    <HiddenColorsOptions marked={this.state.choice['rosa']} color={'rosa'} ocult={this.state.ocult} marker={this.marker.bind(this)}/>
                    <HiddenColorsOptions marked={this.state.choice['vinho']} color={'vinho'} ocult={this.state.ocult} marker={this.marker.bind(this)}/>

                    <div id="verTodos" className={this.state.ocult ? null : 'hidden'} onClick={this.moreColors.bind(this)}>
                        <span>
                        Ver todas as cores
                        </span>
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.5 6L8 1.00519" stroke="#666666" strokeLinecap="round"/>
                        </svg>              
                    </div>
                </div>
            </div>
            );
    }
}
 
export default Colors;