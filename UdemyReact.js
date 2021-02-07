import React, {Component} from 'react';

class index extends Component{
    constructor(props){
        super(props);
        this.state = {
             nome:"Matheus",
             contador:0
        };
      this.aumentar = this.aumentar.bind(this);
      this.diminuir = this.diminuir.bind(this);
    }
    aumentar(){
      let estado = this.state;
      estado.contador += 1;
      if(estado.contador == 1){
          estado.nome ="Henrique";
      }else if(estado.contador == 2){
          estado.nome="Ivanildo"
      }else if(estado.contador == 3){
          estado.nome="Fernando"
      }else if(estado.contador == 4){
          alert("Isso e tudo")
          return
      }
      this.setState(estado);
    }
    diminuir(){
      let estado2 = this.state;
      estado2.contador -= 1;
      if(estado2.contador == 3){
        estado2.nome ="Fernando";
      }else if(estado2.contador == 2){
        estado2.nome="Ivanildo"
      }else if(estado2.contador == 1){
        estado2.nome="Henrique"
      }else if (estado2.contador == 0) {
        estado2.nome="Matheus"
        
      }else{
        alert("Ops!!Chegou no zero")  
        return 
     }
      
      this.setState(estado2);
    }
    
    render(){
        return(
            <div>
                <h1>Conheça nossa equipe</h1>
                <h3>{this.state.nome}</h3>
                <button onClick={this.diminuir}>-</button>
                {this.state.contador}
                <button onClick={this.aumentar}>+</button>
            </div>
        );
    }
}


export default index;