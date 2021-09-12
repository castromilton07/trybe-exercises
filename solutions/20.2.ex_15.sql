USE Scientists;

SELECT 
    CONCAT('Existem ',
            COUNT(*),
            ' cientistas na tabela Scientists.') AS 'mensagem'
FROM
    Scientists;