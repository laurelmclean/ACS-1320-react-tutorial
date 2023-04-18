import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'
import { useState } from 'react'

function POPOSList() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter((obj) => {
	// true if query is in title
	const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
	// true if query is in address
	const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
	// return true if either is true
    return inTitle || inAddress
  }).map(({ title, address, images, hours, id }) => {
  return (
    <POPOSSpace
      id={id}
      key={`${title}-${id}`} 
      name={title}
      address={address}
      image={images[0]}
      hours={hours}
    />
  )
});

  return (
    <article>
    <section className="POPOSSearch">
        <form>
          <input
            value={query}
            placeholder="search title or address"
            onChange={(evt) => setQuery(evt.target.value)}
            aria-label="Search by title or address"
          />
          <button type="submit" aria-label="Submit search">Submit</button>
        </form>
        </section>
      <section className="POPOSList">
        { spaces.length > 0 ? spaces : "No results match your search" } 
      </section>
    </article>
  )
};

export default POPOSList;