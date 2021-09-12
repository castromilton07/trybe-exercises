USE PiecesProviders;

SELECT * FROM Provides

WHERE Provider IN ('HAL')

ORDER BY Price DESC;
