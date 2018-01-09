var React = require('react');
var Carousel = require('nuka-carousel');



'use strict';
const App = React.createClass({

    mixins: [Carousel.ControllerMixin],
    slidesToScroll: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.oneOf(['auto'])
    ])
    ,
    render() {

        var xx=this.props.windowWidth;
        var yy=this.props.windowHeight;
        return (

            <Carousel slidesToShow={1} width={xx} initialSlideHeight={yy} speed={200} autoplay={true} autoplayInterval={3000}>
                <img src="./Images/11.jpg"/>
                <img src="./Images/1.jpg"/>
                <img src="./Images/2.jpg"/>
                <img src="./Images/3.jpg"/>
                <img src="./Images/4.jpg"/>
            </Carousel>
        )
    }
});

module.exports = App;
