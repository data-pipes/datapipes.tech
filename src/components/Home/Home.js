import React from "react";
import svgRect from 'src/static/home_rect.svg'

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from 'src/components/common/IconLink';
import Button from "src/components/common/Button";



const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Streamline your data</p>
          <h1>DataPipes.tech</h1>
          <p className="adjust">Streamline your data</p>

          <div className="home__CTA">
            <div className="home__social">
              <IconLink label="github" icon={["fab", "github"]} href="//github.com/data-pipes" />
              <IconLink label="twitter" icon={["fab", "twitter"]} href="//twitter.com/data_pipes" />
              <IconLink label="linkedin" icon={["fab", "linkedin"]} href="//www.linkedin.com/company/datapipes" />
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