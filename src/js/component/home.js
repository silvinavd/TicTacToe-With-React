import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid content">
			<div className="row border-bottom-dark">
				<div className="col-4 tic-box"> </div>
				<div className="col-4 border-left border-right border-dark tic-box"></div>
				<div className="col-4 tic-box"> </div>
			</div>
			<div className="row">
				<div className="col-4 border-top border-bottom border-dark tic-box">
					{" "}
				</div>
				<div className="col-4 border border-dark tic-box"> </div>
				<div className="col-4 tic-box border-top border-bottom border-dark">
					{" "}
				</div>
			</div>
			<div className="row">
				<div className="col-4 tic-box"> </div>
				<div className="col-4 border-left border-right  border-dark tic-box"></div>
				<div className="col-4 tic-box"> </div>
			</div>
		</div>
	);
}
