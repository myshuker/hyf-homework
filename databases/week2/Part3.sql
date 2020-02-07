
-- 1- Get all the tasks assigned to users whose email ends in @spotify.com
select title, email
from user
join user_task 
on user.id = user_task.user_id
join task 
on task.id = user_task.task_id
where email like '%@spotify.com';


-- 2- Get all the tasks for 'Donald Duck' with status 'Not started'

select title,status.name
from user
join user_task 
on user.id = user_task.user_id
and name like 'Donald Duck'
join task 
on task.id = user_task.task_id
join status
on status.id = task.status_id
and status.name like 'Not started';


-- 3- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)

select *
from user
join user_task 
on user.id = user_task.user_id
and name like 'Maryrose Meadows'
join task 
on task.id = user_task.task_id
and month(created) = 09;


-- 4- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

SELECT  monthname(created), COUNT(*)
FROM task
GROUP BY monthname(created);
