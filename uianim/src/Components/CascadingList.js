import React, {Component} from 'react';
import Anime from 'react-anime';
import AnimeButton from './AnimeButton';
import Profile from '../Creatives/person-icon-01.png';
import News from '../Creatives/news-icon-01.png';
import Settings from '../Creatives/settings-01.png';

export default class CascadingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: ['iphone', 'pixel', 'flip'],
            listTwo: [Profile, News, Settings]
        };
    }
   
    render(){
        let {listTwo} = this.state;

        let animeProps ={
            opacity : [0,1],
            easing: 'easeInOutQuad',
            rotate: '1turn',
            delay: (el, i) => i * 500 
        };


        return(
            <Anime {...animeProps}>
            {listTwo.map((v,i)=> <AnimeButton key={i} activesource={v}></AnimeButton>)}
            </Anime>
        
        );
    }

}