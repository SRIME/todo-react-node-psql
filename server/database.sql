CREATE TABLE todo(id SERIAL PRIMARY KEY, descript VARCHAR(200));

SELECT *FROM todo WHERE id=$1