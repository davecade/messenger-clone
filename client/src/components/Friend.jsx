import React from "react";

const Friend = ({ friendData }) => {
	const { userName, image } = friendData;
	console.log("image is: ", image);
	return (
		<div className="friend">
			<div className="friend-image">
				<div className="image">
					<img src={`/image/${image}`} alt="" />
				</div>
			</div>

			<div className="friend-name-seen">
				<div className="friend-name">
					<h4>{userName}</h4>
				</div>
			</div>
		</div>
	);
};

export default Friend;
