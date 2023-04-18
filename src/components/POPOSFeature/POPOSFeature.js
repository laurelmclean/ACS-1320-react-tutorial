import React from 'react';
import './POPOSFeature.css';

function getFeature(str) {
	switch(str) {
		case 'outdoors':
			return '🌲'
		case 'coffee':
			return '☕️'
		case 'art':
			return '🖼'
		case 'toilet':
			return '🚽'
		case 'power':
			return '🔌'
		default:
			return '？'
	}
};

function POPOSFeature(props) {
	const emoji = getFeature(props.name);
	return <figure className="POPOSFeature" aria-label={props.name}>{emoji}</figure>
}

export default POPOSFeature;