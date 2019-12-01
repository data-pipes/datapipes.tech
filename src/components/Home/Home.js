import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import svgRect from 'src/static/home_rect.svg'

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from 'src/components/common/IconLink';
import Flex from "src/components/common/Flex";
import Button from "src/components/common/Button";

import { Card, CardIcon, CardText, CardTitle } from "src/components/common/Card";


const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, i’m</p>
          <h1>Ivan Atanasov</h1>
          <p className="adjust">CREATIVE FRONT-END WEB DEVELOPER</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">Download Resume</Button>

            <div className="home__social">
              <IconLink label="github" icon={["fab", "github"]} href="//github.com/anuraghazra" />
              <IconLink label="twitter" icon={["fab", "twitter"]} href="//twitter.com/anuraghazru" />
              <IconLink label="codepen" icon={["fab", "codepen"]} href="//codepen.io/anuraghazra" />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

    </HomeWrapper>
  )
}

export default Home;