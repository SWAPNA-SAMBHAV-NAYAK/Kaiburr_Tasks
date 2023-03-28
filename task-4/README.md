# TASK-4 FrontEnd Implementation

This is a FrontEnd App for displaying CRUD operations on Springboot Data [data.json] in Task-1

## Documentation

Link for Code Overview:
[Code Workflow](https://docs.google.com/document/d/1QWaCKavJukrBF0IqLE4d5cGNCYsxXgHbywLHuL37cls/edit?usp=sharing)

## Rest API Conventions Used

To run this project, you will need to add the following environment variables to your .env file

`ACTIONS` : Fetch all Data, Create a Server, Update a Server and Delete a server.

`HTTP FUNCTIONS` : GET , POST , PUT , DELETE

`ENDPOINTS` : /servers , /servers/:id

## Dependency Lists

| Dependency  | npm                      |
| ----------- | ------------------------ |
| Axios       | npm i --save axios       |
| Uuidv4      | npm install uuidv4       |
| Json-server | npm i --save json-server |
| Sweetalert2 | npm install sweetalert2  |

## Deployment

To deploy this project run

```bash
  npm start
```

To start the json-server, update the script in package.json as

```bash
"scripts": {
    "start": "json-server -p 3006 -w db.json"
  },
```

```bash
  npm start
```

This will open the data server at port 3006.
