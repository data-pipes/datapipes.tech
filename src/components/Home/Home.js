import React from "react";
import IconLink from 'src/components/common/IconLink';
import svgRect from 'src/static/home_rect.svg';
import { HomeWrapper, Intro } from './Home.style';

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
          <div className="home__text">
          <p>Streamline your data</p>
          <h1>DataPipes.tech</h1>
          <p className="adjust">Streamline your data pipes.</p>

          <div className="home__CTA">
            <div className="home__social">
              <IconLink className="home__social_icon" label="github" icon={["fab", "github"]} href="//github.com/data-pipes" />
              <IconLink className="home__social_icon" label="twitter" icon={["fab", "twitter"]} href="//twitter.com/data_pipes" />
              <IconLink className="home__social_icon" label="linkedin" icon={["fab", "linkedin"]} href="//www.linkedin.com/company/datapipes" />
            </div>
          </div>
        </div>
      </Intro>

    </HomeWrapper>
  )
}

export default Home;