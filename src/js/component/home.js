import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { func } from "prop-types";

//create your first component
export function Home(props) {
	const [game, setGame] = useState([
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" "
	]);

	const [player, setPlayer] = useState("X");
	const [winner, setWinner] = useState("");
	const [playerone, setPlayerone] = useState("");
	const [playertwo, setPlayertwo] = useState("");

	const [playerlist, setPlayerlist] = useState([]);

	useEffect(() => {
		validarGanador();
		if (winner == "X") {
			alert("Winner is: " + playerone);
		}
	});

	//Nombre del jugador

	const names = e => {
		e.preventDefault();
		setPlayerlist([playerone, playertwo]);
		setPlayerone("");
		setPlayerone("");
		setPlayertwo("");
	function validarGanador() {
		for (let i = 0; i < game.length; i = i + 3) {
			if (
				game[i] != " " &&
				game[i] == game[i + 1] &&
				game[i] == game[i + 2]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 1) {
			if (
				game[i] != " " &&
				game[i] == game[i + 4] &&
				game[i] == game[i + 8]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 2; i < game.length; i = i + 2) {
			if (
				game[i] != " " &&
				game[i] == game[i + 2] &&
				game[i] == game[i + 4]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 1) {
			if (
				game[i] != " " &&
				game[i] == game[i + 3] &&
				game[i] == game[i + 6]
			) {
				setWinner(game[i]);
			}
		}
	}
	const marcar = i => {
		let cambioTurno = false;
		let newGame = game.map((e, index) => {
			if (i == index && e == " ") {
				cambioTurno = true;
				return player;
			} else return e;
		});
		if (cambioTurno) {
			player === "X" ? setPlayer("O") : setPlayer("X");
		}

		setGame(newGame);
	};
	return (
		<div className="container-fluid content d-block">
			<h1>Tic Tac Toe</h1>

			<div className="player">
				<h4>Choose your weapon</h4>
				<div className="text-center">
					<form
						className="form justify-content-center"
						onSubmit={names}>
						<div className="form-group mx-sm-3 mb-2">
							<i className="fas fa-times"></i>
							<input
								type="text"
								className="form-control"
								placeholder="Player X name"
								onChange={e => setPlayerone(e.target.value)}
								value={playerone}
							/>
						</div>

						<div className="form-group mx-sm-3 mb-2">
							<i className="far fa-circle"></i>
							<input
								type="text"
								className="form-control"
								placeholder="Player O name"
								onChange={e => setPlayertwo(e.target.value)}
								value={playertwo}
							/>
						</div>
						<button type="submit" className="btn btn-success mb-2">
							Start!
						</button>
					</form>
				</div>
			</div>
			<div className="row">
				{game.map((e, i) => {
					return (
						<div
							key={i}
							className="col-4 tic-box border"
							onClick={() => {
								marcar(i);
							}}>
							<p>{e}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
