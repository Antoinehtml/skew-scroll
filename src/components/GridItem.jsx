import React from 'react'

import './GridItemStyle.css'

const GridItem = ({url, description}) => {
	return (
		<div className="grid-item">
			<img src={url} className="grid-item-media" alt=""/>
			<p>{description}</p>
		</div>
	)
}

export default GridItem