import React, {Component} from 'react';

class index  extends Component{
    constructor(props){
        super(props);
        this.state = {
               nome: "Maria",
               contador: 0        
    }
    this.aumentar =this.aumentar.bind(this);
    this.diminur  =this.diminur.bind(this);
}; 
   aumentar(){
       let state = this.state;
       state.contador += 1;
       state.nome="João"
       this.setState(state);
   }
   diminur(){
       let estado = this.state;
       if(estado.contador===0){
         alert("Ops chegou no zero")
        return     // E essencial colocar o retorno se não depois que o IF terminar 
                   //vai para negativo
       }
       
       estado.contador -= 1;
       estado.nome="Maria"
       this.setState(estado);
   }
    
    render(){
        return(
            <div>
                <h1>Conheça minha equipe</h1>
                <h3>{this.state.nome}</h3>
                <button onClick={this.diminur}>-</button> 
                {this.state.contador} 
                <button onClick={this.aumentar}>+</button>
               
            </div>
        );
    }
}



export default index;