

-- Homework
-- Working with tasks
/* 
use hyf_lesson1;
show tables;

describe task;
describe user; */

-- 1- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
insert into task
    (
    id,
    title,
    description,
    created, updated,
    due_date,
    status_id,
    user_id)
values
    (
        DEFAULT,
        'Study DB',
        'Start to learn DB.',
        '2020-12-02 12:00:16',
        '2020-01-22 16:05:09',
        null, 2, 1);

-- 2- Change the title of a task

UPDATE task
SET title = 'Study DB Week3'
where id = 36;

-- 3- Change a task due date

UPDATE task
SET due_date = '2020-01-28 16:05:09'
where id = 36;

-- 4- Change a task status

UPDATE task
SET status_id  = 1
where id = 36;

-- 5- Mark a task as complete with this attribute:

UPDATE task
SET status_id = 3
WHERE id = 36;

-- 6- Delete task with this attribute:
DELETE FROM task
  where id = 36;
