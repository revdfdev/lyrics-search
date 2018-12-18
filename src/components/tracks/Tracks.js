import React, {Component} from 'react';
import { Consumer } from '../../context';
import Spinner from '../layouts/Spinner';
import Track from './Track';

class Tracks extends Component {

	render() {
		return (
			<Consumer>
				{value => {
					const { track_list, heading } = value;

					if (!track_list || track_list.length === 0) {
						return <Spinner />
					} else {
						return (
							<>
								<h3 className="text-center mb-4">{heading}</h3>
								<div className="row">
									{track_list.map(item => {
										return <Track key={item.track.track_id} track={item.track}/>
									})}
								</div>
							</>
						);
					}

					/*console.log(JSON.stringify(value, null, 3));
					return <h1>{value.heading}</h1>*/
				}}
			</Consumer>
		);
	}
}

export default Tracks;