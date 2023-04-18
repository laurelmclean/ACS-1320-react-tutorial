import React from 'react';
import { useParams } from 'react-router';
import data from '../../sfpopos-data.js';
import './POPOSDetails.css';
import POPOSFeatureList from '../POPOSFeature/POPOSFeatureList';

function POPOSDetails(props) {
  const params = useParams();
  const { id } = params; // Location index
  const { images, title, desc, hours, features, geo } = data[id];
  
  return (
    <article className="POPOSDetails">
      <figure className="POPOSDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt = {title} />
      </figure>
      <section className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ title }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours">{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo">📍{geo.lat} { geo.lon }</p>
      </section>
    </article>
  )
}

export default POPOSDetails;