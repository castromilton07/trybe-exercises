USE Scientists;

SELECT 
    CONCAT('O projeto ',
            Name,
            ' precisou de ',
            Hours,
            ' horas para ser concluído.') AS 'Mensagem'
FROM
    Projects;