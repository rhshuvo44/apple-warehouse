import React from 'react';
import { Carousel } from 'react-bootstrap';
import ipad from '../../../img/ipad.jpg';
import laptop from '../../../img/laptop.jpg';
import monitor from '../../../img/monitor.jpg';
import './Banner';

const Banner = () => {

    return (
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={laptop}
      alt="Macbook"
    />
    <Carousel.Caption>
      <h3>Macbook</h3>
      <p>The MacBook is Apple's third laptop computer family, introduced in 2006. Prior laptops were the PowerBook and iBook. In 2015, new MacBooks featured Ap</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={monitor}
      alt="Monitor"
    />

    <Carousel.Caption className='text-dark'>
      <h3>Monitor</h3>
      <p>Apple monitors use three connection types: VGA, DisplayPort and Thunderbolt. The newest monitors use Thunderbolt while the oldest use VGA. VGA and Dis</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ipad}
      alt="ipad"
    />

    <Carousel.Caption  className='text-dark'>
      <h3>ipad</h3>
      <p>The iPad is a touchscreen tablet PC made by Apple . The original iPad debuted in 2010. Apple has three iPad product lines: iPad, iPad mini and iPad Pr</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;