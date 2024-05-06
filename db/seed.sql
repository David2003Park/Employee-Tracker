INSERT INTO departments (name) VALUES ('Engineering'), ('Human Resources'), ('Marketing');

INSERT INTO roles (title, salary, department_id) VALUES ('Software Engineer', 70000, 1), ('Recruiter', 45000, 2), ('Social Media Manager', 50000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Doe', 2, 1), ('Jim', 'Beam', 3, NULL);
