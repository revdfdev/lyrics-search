import axiosInstance from './axiosInstance';

const trackSearchPath = "chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1"

export default {
	topten() {
		console.log("Path: ", `${trackSearchPath}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`)
		return axiosInstance.get(`${trackSearchPath}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`)
	},

	getlyrics(track_id) {
		const lyrics_path = `track.lyrics.get?track_id=${track_id}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`
		return axiosInstance.get(lyrics_path)
	},

	gettrack(track_id) {
		const track_path = `track.get?track_id=${track_id}&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`
		return axiosInstance.get(track_path)
	}
}


