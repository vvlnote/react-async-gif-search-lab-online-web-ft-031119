import React, { Component } from 'react';
import GifListContainer from '../containers/GifListContainer';

class GitList extends Component {

	render() {
		return (
			<div>
				<ul>
					{this.props.gifs.map(gif => {
						return (<li> <img key={gif.url} src={gif.url} alt='gif' /> </li>)
					})}
				</ul>
			</div>
			)
	}
}

export default GitList;