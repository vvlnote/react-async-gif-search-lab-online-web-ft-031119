import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends Component {
	state = {
		gifs: [],
	}

	fetchGIFs= (query) => {
		let apiQuery = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
		fetch(`${apiQuery}`)
			.then(response => response.json())
			.then(({data}) => {
				this.setState({gifs: data.map( gif => ({url: gif.images.original.url}))})
			})
	}

	componentDidMount() {
		this.fetchGIFs();
	}


	render() {
		return (
			<div>
				<GifSearch getQuery={this.fetchGIFs} />
				<GifList gifs={this.state.gifs} />;
			</div>
			)
	}

}

export default GifListContainer;