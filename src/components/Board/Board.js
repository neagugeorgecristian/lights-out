import './Board.css'
import Cell from '../Cell/Cell'

import React, { useEffect, useState } from 'react';

const Board = ({size}) => {


	const createGrid = () =>
		new Array(size)
			.fill()
			.map(r =>
				new Array(size)
					.fill()
					.map(c => Math.random() < 1.1))

	const [board,setBoard] = useState(createGrid())

	const toggleLights = (row, col) => {
		const copy = [...board.map(r => [...r])];

		copy[row][col] = !copy[row][col];

		if (row < size-1)
			copy[row+1][col] = !copy[row+1][col];
		if (row > 0)
			copy[row-1][col] = !copy[row-1][col];
		if (col < size-1)
			copy[row][col+1] = !copy[row][col+1];
		if (col > 0)
			copy[row][col-1] = !copy[row][col-1];

		setBoard(copy);
	}

	const gameEnds = () => board.every(row => row.every(cell => !cell)) 

	return (
		<div className="Board">
			{gameEnds()
			? <div className='won pulse'>You won</div>
			: board.map((row,rowIndex) => 
				<div 
					className="row" 
					key={rowIndex}>
						{row.map((cell,colIndex) => (
							<Cell
								key={`${rowIndex}-${colIndex}`} 
								toggleLights = {toggleLights}
								isOn = {board[rowIndex][colIndex]}
								rowIndex={rowIndex} 
								colIndex={colIndex}/>
						))}
				</div>
				)
			}
		</div>
	)
}

export default Board;