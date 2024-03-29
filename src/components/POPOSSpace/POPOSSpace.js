import React from 'react';
import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <article className="POPOSSpace">
      <Link className="POPOSSpace-title" to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt={name} />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
            {name}
        </Link>
      </h1>
     <section className="POPOSSpace-info">
				<address >{address}</address>
        <br />
				<time>{hours}</time>
      </section>
     </article>
  )
};

export default POPOSSpace;