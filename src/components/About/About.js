import React from 'react';
import './About.css';

function About() {
  return (
    <article className='About'>
      <figure className="About-image">
        <img src={`${process.env.PUBLIC_URL}/images/50-california-st.jpg`}
          height="auto"
          alt="50 Califonia St."
        />
        <figcaption>101 California</figcaption>
      </figure>
      <section className="About-info">
        <header>
          <h1 className='About-title'>About SFPOPOS</h1>
        </header>
        <p className='About-desc'>POPOS are publicly accessible spaces in
          forms of plazas, terraces, atriums, small
          parks, and even snippets which are provided
          and maintained by private developers. In San
          Francisco, POPOS mostly appear in the Downtown
          office district area.</p>
      </section>
    </article>
  )
};

export default About;
