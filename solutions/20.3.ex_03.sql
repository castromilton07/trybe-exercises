USE PecasFornecedores;

SELECT Peca, Preco, Fornecedor FROM Fornecimentos

WHERE Fornecedor LIKE '%n%';