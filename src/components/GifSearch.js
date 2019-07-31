import React, { Component } from 'react';

class GifSearch extends Component {
	state = {
		query: ''
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.getQuery(this.state);

	}

	render() {
		return (
			<div>
				<h1> Enter a Search Term: </h1>
				<form onSubmit={event => this.handleSubmit(event)}>
					<input type="text" name="query"  
						onChange={event => this.setState({query : event.target.value})}
						value={this.state.query} />
					<input type="submit" value="Find Gifs" />
				</form>
			</div>
			)
	}
}

export default GifSearch;