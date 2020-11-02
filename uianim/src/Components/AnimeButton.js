import React, {Component} from 'react';
import Anime, {anime} from 'react-anime';


export default class AnimeButton extends Component {
    constructor(props){
        super(props);
        this.state ={
            selfClicked: false,
            count: 0,
        }
    }  
    render(){
        


        const styles ={
            buttonInActive:{
                height: 64,
                width: 64,
                borderRadius: 50 + "%",
                background: "#d6dde8",
                border: "none",  
                display: "inline-block",
                fontSize: 16,
                margin: 10,
                boxShadow:"1px 1px 2px #a0abbd",
            },
            buttonActive:{
                height: 64,
                width: 64,
                borderRadius: 50 + "%",
                background: "#fff",
                border: "none",  
                display: "inline-block",
                fontSize: 16,
                margin: 10,
                boxShadow:"1px 1px 2px #a0abbd",
            },
            text:{
                background: "transparent",
                color: "#fff"
            },
            image:{
                height: 64,
                width: 64,
            }
        }
        var animation = anime({
            targets: 'div',
            translateX: [0, -150, -120, -130],
            autoplay: false,
            easing: 'cubicBezier(.4, .05, .1, .3)'
          });

          const test = () =>{
            this.setState({selfClicked: !this.state.selfClicked});
            animation.play();
            console.log(this.state.selfClicked);
            
          }



        return(
            <Anime>
            <div style={this.state.selfClicked === true? styles.buttonActive : styles.buttonInActive } onClick={test}>
            <img style={styles.image} src={this.props.activesource}></img>
            </div> 
            </Anime> 
            
            
        );
    }

}