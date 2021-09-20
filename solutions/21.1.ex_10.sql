SELECT AVG(SALARY) AS average_salary, COUNT(*) AS employees
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING employees > 10;