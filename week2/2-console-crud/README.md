# Week 2 : Task 2 : Console CRUD 

## Premise
Create an app that allows you to create, read, update, delete users in a collection.
- displays a menu with different CRUD actions
- prompts for an action 
- each action either displays a result (List users) or prompts for additional information (Add User)
- the data is stored in a global variable users of type collection (dictionary in array)
```js
var users = [{
	id: 1, name: "Pesho", email: "pesho@gmail.com"
},{
	id: 2, name: "Gosho", email: "gosho@gmail.com"
}];
```

## Steps
1. Create interface and prompt
2. Implement list users and add user
3. Implement get user, edit user and delete user
4. Implement search users
5. Implement save, load to json file
6. Create function that draws the users table

##  Dependencies
- npm
    - prompt
    - chalk 

## Intitial Interface
```sh
node console-crud.js

Pick action:
1. List users
2. Add user
> action: _

# List users
> action: 1
Listing Users:
1 Ivan ivan@gmail.com 
2 Pesho pesho@gmail.com

# Add user
> action: 2
Enter user data:
> id: 3
> name: Todor
> email: todor@gmail.com

```

## Final Interface
```sh
node console-crud.js

|=================|
| Pick action     |
|=================|
| 1. List users   |
| 2. Add user     |
| 3. Get user     |
| 4. Edit user    |
| 5. Delete user  |
| 6. Search users |
| 7. Load users   |
| 8. Save users   |
|=================|
> action: _

# Search users
> action: 6
Search users:
> keyword: sho
Results: 2
|===============================|
| ID | Name     | Email         |
|===============================|
| 1  | Pesho    | pesho@gmail   |
| 2  | Gosho    | gosho@gmail   |
|===============================|

#
```
