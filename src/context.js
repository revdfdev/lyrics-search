import React from 'react';
import apitracksearch from './api/tracksearch';

const Context = React.createContext();

export class Provider extends React.Component {

	state = {
		track_list: [],
		heading: 'Top 10 Tracks',
	}

	componentDidMount() {
	    apitracksearch.topten()
	    	.then(res => {
	    		this.setState({
	    			track_list: res.data.message.body.track_list
	    		});
	    	})
	    	.catch(err => console.log(err));
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;

