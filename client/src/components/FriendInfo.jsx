import React from "react";
import { FaCaretSquareDown, FaEdit, FaSistrix } from "react-icons/fa";

const FriendInfo = () => {
	return (
		<div className="friend-info">
			<input type="checkbox" id="gallery" />
			<div className="image-name">
				<div className="image">
					<img
						src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
						alt=""
					/>
				</div>
				<div className="active-user">Active</div>

				<div className="name">
					<h4>Dave Cadelina </h4>
				</div>
			</div>

			<div className="others">
				<div className="custom-chat">
					<h3>Coustomise Chat </h3>
					<FaCaretSquareDown />
				</div>

				<div className="privacy">
					<h3>Privacy and Support </h3>
					<FaCaretSquareDown />
				</div>

				<div className="media">
					<h3>Shared Media </h3>
					<label htmlFor="gallery">
						{" "}
						<FaCaretSquareDown />{" "}
					</label>
				</div>
			</div>

			<div className="gallery">
				<img
					src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
					alt=""
				/>
				<img
					src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
					alt=""
				/>
				<img
					src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
					alt=""
				/>
				<img
					src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default FriendInfo;
