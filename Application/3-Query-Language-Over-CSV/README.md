# Problem 3 - A query language over a CSV file

A CSV files (comma separated values) can be represented as a table.

For example this CSV file:

```csv
id, name, course
1, Rado, Haskell
2, Ivo, Python
```

Can be represented by this table:

| id | name | course  |
|----|------|---------|
| 1  | Rado | Haskell |


We are going to use CSV files as tables and make a simple query language for fetching data.

In a language of your choice, make a program that:

* Reads a CSV file.
* Gives the user an interactive input for queries.
* Answers the queries with data from the CSV file.

The queries, that should be supported are:

* `SELECT [columns] LIMIT X` - where you can SELECT without giving the LIMIT. Then this will fetch all rows.
* `SUM [column]` - returns the sum of all integers in the given column.
* `SHOW` - returns a list of all column names in your data.
* `FIND X` - returns all rows, that has `X` in some of their cells (Match X with at least one of the columns)

Here are examples of all queries.

Consider that we have loaded the following CSV:

```csv
id,name,hometown
1,Kiara,Lunel
2,Mona,Henley-on-Thames
3,Kiayada,Villers-aux-Tours
4,Karly,Hillsboro
5,Igor,Oranienburg
```

Now, lets make queries:


```
query>SELECT id
|id|
|--|
|1 |
|2 |
|3 |
|4 |
|5 |

query> SELECT id, name
|id| name   |
|--|--------| 
|1 |Kiara   |
|2 |Mona    |
|3 |Kiayada |
|4 |Karly   |
|5 |Igor    |

query> SELECT id, name LIMIT 1
|id| name   |
|--|--------| 
|1 |Kiara   |

query> SUM id
15

query> SHOW
id, name, hometown

query> FIND "-"
|id| name   | hometown          |
|--|--------| ------------------|
|2 |Mona    | Henley-on-Thames  |
|3 |Kiayada | Villers-aux-Tours |
```

## Features

* If the query is non-valid - say it. Don't crash the program.
* As you see in the examples, the results should be displayed in visual, tabular way. This is up to you. You don't have to follow the styles of the example.
