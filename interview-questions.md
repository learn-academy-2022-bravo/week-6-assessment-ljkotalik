# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: the foreign key would be on the student model. The name of the foreign key would be student_id becasue the foreign key is always the modelname_id. To fix this mistake we would put the foreign key with the student model.

  Researched answer: The foreign key always goes on the belongs_to side. To create the association between the tweo models by adding in the Cohort model file add "has_many" and add "belongs_to" in the Student model file.



2. Which RESTful routes must always be passed params? Why?

  Your answer: edit, destroy, and show, becasue those are the ones that modify things. The params usually has .find attached to it because we are trying to display one piece of particular data.

  Researched answer: Show, update, destroy, edit. These are the ones that need params to be passed because we are calling on a specific piece of data and we need to know what we are calling on.



3. Name three rails generator commands. What is created by each?

  Your answer: rails genereate model which creates the model, rails generate resource which creates the model and the controller, and rails generate controller which generates the controller.

  Researched answer: Rails generate model makes the model by passing the model name and here is wher you can also include arguments or names of the columns in your database. Rails generate resource creates the model and the controller and automatically create the routes, migration file, controller file, and pipeline files. Rails generate controller will create the controller and also the ciontroller file, test file, helper for the view, view sheet, and stylesheet file.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students    
index: which would show all the students in the database      

action: "POST"   location: /students     
create: which adds new info into the database  

action: "GET"    location: /students/new
new: this displays a form to the user to put new entries into the database

action: "GET"    location: /students/2  
show: which will display to the uder student with id 2

action: "GET"    location: /students/2/edit    
edit: which will show a form to the user to edit data in an existing student

action: "PATCH"  location: /students/2      
update: this will modify the data for student with id 2

action: "DELETE" location: /students/2    
destroy: this would delete the student with id 2  



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a developer, I can create a model called List which will display the name of the task, whether it is completed or not, and a description of the task.
2. As, a user I can see all the tasks on my list
3. As a user, I can search for a specific task
4. As a user, I can click a button and submit a task to the database
5. As a user, I can add a new task to the list
6. As a user, I can edit a task from the list
7. As a user, I can update a task from washing dishes to fold laundry
8. As a user, I can delete a specific task
9. As a user, I can change the name of a task
10. As a user, I can update the completetion status of a task