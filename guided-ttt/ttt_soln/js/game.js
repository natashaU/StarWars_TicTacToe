/**
 * @name {game} - object literal
 * @desc - should have a "board" property - initially set to ''

*/

	/***** Minimum Game Methods *****/

	/**
	 * @name {makeBoard}
   * @desc
	 		- should create a new board object for the game
	 * @return {nothing}
	*/

	/**
	 * @name {start}
   * @desc
	 		- should start the game and display the current state of the board
	 * @return {nothing}
	*/

	/**
	 * @name {play}
	 * @param {number} - should accept a single input value, a position on the game board and make a play.
	 * @desc
	 		- If the position is 0, its gonna look in the board array of cells and get the cell with the index of 0.
 			- after a play it should set the value for the cell according to the current player. EX. if player is X set that cell to X.
			- should check for a winner after each play and alert the winner if one is found.
		* @return {nothing}
	*/

	/**
	 * @name {checkWin}
	 * @desc
			- should check the game board to see if the previous play was a winning play
			- should alert the user if tehy have won!
	 * @return {boolean}
	*/
