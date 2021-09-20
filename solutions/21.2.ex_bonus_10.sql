SELECT m.*
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.rating > 8 AND theater_id IS NOT NULL;