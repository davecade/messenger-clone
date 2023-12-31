import React from "react";
import { FaPhoneAlt, FaVideo, FaRocketchat } from "react-icons/fa";
import Message from "./Message";
import MessageSend from "./MessageSend";
import FriendInfo from "./FriendInfo";

const RightSide = () => {
	return (
		<div className="col-9">
			<div className="right-side">
				<input type="checkbox" id="dot" />
				<div className="row">
					<div className="col-8">
						<div className="message-send-show">
							<div className="header">
								<div className="image-name">
									<div className="image">
										<img
											src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
											alt=""
										/>
									</div>
									<div className="name">
										<h3> Dave Cadelina </h3>
									</div>
								</div>

								<div className="icons">
									<div className="icon">
										<FaPhoneAlt />
									</div>

									<div className="icon">
										<FaVideo />
									</div>

									<div className="icon">
										<label htmlFor="dot">
											{" "}
											<FaRocketchat />{" "}
										</label>
									</div>
								</div>
							</div>
							<Message />
							<MessageSend />
						</div>
					</div>

					<div className="col-4">
						<FriendInfo />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightSide;
