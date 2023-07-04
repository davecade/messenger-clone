import React from "react";
import { FaEllipsisH, FaEdit, FaSistrix } from "react-icons/fa";
import ActiveFriends from "./ActiveFriends";
import Friend from "./Friend";

const Messenger = () => {
	return (
		<div className="messenger">
			<div className="row">
				<div className="col-3">
					<div className="left-side">
						<div className="top">
							<div className="image-name">
								<div className="image">
									<img
										src="/image/28885Dave_._3D_light_background_cool_profile_picture_detailed_07085e90-d908-4ec8-8d95-fdf97ae1ed12.png"
										alt=""
									/>
								</div>
								<div className="name">
									<h3> HI Dave </h3>
								</div>
							</div>

							<div className="icons">
								<div className="icon">
									<FaEllipsisH />
								</div>
								<div className="icon">
									<FaEdit />
								</div>
							</div>
						</div>

						<div className="friend-search">
							<div className="search">
								<button>
									{" "}
									<FaSistrix />{" "}
								</button>
								<input
									type="text"
									placeholder="Search"
									className="form-control"
								/>
							</div>
						</div>

						<div className="active-friends">
							<ActiveFriends />
						</div>
						<div className="friends">
							<div className="hover-friend">
								<Friend />
							</div>
                            <div className="hover-friend">
								<Friend />
							</div>
                            <div className="hover-friend">
								<Friend />
							</div>
                            <div className="hover-friend">
								<Friend />
							</div>
                            <div className="hover-friend">
								<Friend />
							</div>
                            <div className="hover-friend">
								<Friend />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
