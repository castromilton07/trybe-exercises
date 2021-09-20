SELECT m.title
FROM Pixar.Movies AS m
WHERE id IN (
	SELECT movie_id
	FROM BoxOffice
	WHERE domestic_sales + international_sales >= 500000000 AND m.length_minutes > 110
);

SELECT m.title
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.domestic_sales + b.international_sales >= 500000000 AND m.length_minutes > 110;