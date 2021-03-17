import React from "react";

const Song = ({ currentSong, isPlaying }) => {
	return (
		<div className="song-container">
			<img
				className={`animate-img ${isPlaying ? "animation-running" : "animation-paused"}`}
				style={{}}
				src={currentSong.cover}
				alt={currentSong.name}
			/>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default Song;