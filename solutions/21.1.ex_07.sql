SELECT JOB_ID, SUM(SALARY) AS salaries_cost
FROM hr.employees
GROUP BY JOB_ID;