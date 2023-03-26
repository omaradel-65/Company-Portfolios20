import React from 'react'
import './App.css'
import "./styles.scss";
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
function header() {
  class CitiesSlider extends React.Component {
    constructor(props) {
      super(props);

      this.IMAGE_PARTS = 4;

      this.changeTO = null;
      this.AUTOCHANGE_TIME = 4000;

      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }

    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
    }

    runAutochangeTO() {
      this.changeTO = setTimeout(() => {
        this.changeSlides(1);
        this.runAutochangeTO();
      }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
      window.clearTimeout(this.changeTO);
      const { length } = this.props.slides;
      const prevSlide = this.state.activeSlide;
      let activeSlide = prevSlide + change;
      if (activeSlide < 0)
        activeSlide = length - 1;
      if (activeSlide >= length)
        activeSlide = 0;
      this.setState({ activeSlide, prevSlide });
    }

    render() {
      const { activeSlide, prevSlide, sliderReady } = this.state;
      return (
        <div className={classNames('slider', { 's--ready': sliderReady })}>
          <p className="slider__top-heading">The Simplest
Way to Find Property</p>
          <div className="slider__slides">
            {this.props.slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                key={slide.city}
              >
                <div className="slider__slide-content">
                  <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                  <h2 className="slider__slide-heading">
                    {slide.city.split('').map(l => <span>{l}</span>)}
                  </h2>
                  <p className="slider__slide-readmore">read more</p>
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="slider__control" onClick={() => this.changeSlides(-1)} />
          <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
        </div>
      );
    }
  }

  const slides = [
    {
      city: 'A small river named Duden flows by their place ',
      country: 'Your Property Is Our Priority',
      img: 'https://i.ibb.co/TgyKpNt/Whats-App-Image-2022-11-19-at-22-07-09.jpg',
    },
    {
      city: 'A small river named Duden flows by their place',
      country: 'Modern House Make Better Life',
      img: 'https://l.top4top.io/p_2515zke7j1.jpg',
    },
    {
      city: 'A small river named Duden flows by their place',
      country: 'Let Your Home Be Unique & Stylist',
      img: 'https://i.ibb.co/m9mcbR9/slide2.jpg',
    },
    {
      city: 'A small river named Duden flows by their place',
      country: 'Make your dream home with sintac',
      img: 'https://b.top4top.io/p_2515kgpoe3.jpg',
    },
    {
      city: 'A small river named Duden flows by their place',
      country: 'Find your next dream home',
      img: 'https://h.top4top.io/p_2620hk3r53.jpg',
    },
  ];

  ReactDOM.render(<CitiesSlider slides={slides} />, document.querySelector('#app'));

  return (

    <div>
    
    </div>

  );
}

export default header
