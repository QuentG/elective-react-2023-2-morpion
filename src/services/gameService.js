export const calculateWinner = squares => {
    // All possible winning combinations
    const lines = [
        [0, 1, 2], // Vertical first line
        [3, 4, 5], // Vertical second line
        [6, 7, 8], // Vertical third line
        [0, 3, 6], // Horizontal first line
        [1, 4, 7], // Horizontal second line
        [2, 5, 8], // Horizontal third line
        [0, 4, 8], // Diagonal (left to right)
        [2, 4, 6], // Diagonal (right to left)
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        // Si on a bien une valeur dans le champ avec l'index [a].
        // On vérifie que l'on a bien les mêmes symboles dans une des entrées du tableau.
        // On vérifie si les trois valeurs de cette entrée dans le tableau sont identiques.
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a] // Retourne le gagnant, soit X soit O.
        }
    }

    // Si pas de gagnant, on retourne null.
    return null
}
