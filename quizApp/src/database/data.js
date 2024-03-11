// this is where we are having the array of objects containing all of our questions to be mapped through instead of repeating <li>several times.
export default [
 {
    id:1,
            "question": "What is the data type for storing a single character in Python?",
            "options": ["int", "char", "string", "boolean"],
        },
 {
    id:2,
            "question": "What is the correct syntax to define a function in Python?",
            "options": ["def function_name():", "function function_name():", "func function_name():", "create function_name():"],
           
        },
        { id:3,
            "question": "What is the purpose of the `return` statement in Python?",
            "options": ["To exit the program", "To pass arguments to a function", "To return a value from a function", "To define a variable"],
           
        },
        { id:4,
            "question": "What is the difference between a list and a tuple in Python?",
            "options": ["Lists are mutable, tuples are immutable", "Lists can hold different data types, tuples can only hold one data type", "Lists are used for storing single values, tuples are used for storing collections", "There is no difference"],
        
        },
         { id:5,
            "question": "What is the output of the following Python code: `print(10 % 3)`",
            "options": ["3", "7", "1", "10"],
         
        },
        {id:5,
            "question": "What is the purpose of the `for` loop in Python?",
            "options": ["To repeat a block of code a specific number of times", "To check if a condition is true", "To define a function", "To store data in a list"],
           
        },
        {id:7,
            "question": "What does the `if` statement do in Python?",
            "options": ["Executes a block of code if a condition is true", "Defines a variable", "Prints a message to the console", "Calls a function"],
           
        },
        { id:8,
            "question": "What is the correct way to access the second element of a list in Python?",
            "options": ["list[0]", "list[1]", "list.get(1)", "list.at(2)"],
            
        },
        { id:9,
            "question": "What is the difference between a local variable and a global variable in Python?",
            "options": ["Local variables are defined inside functions, global variables are defined outside functions", "Local variables are mutable, global variables are immutable", "Local variables are used for storing data, global variables are used for calculations", "There is no difference"],

        },
        {id:10,
            "question": "What is the purpose of comments in Python code?",
            "options": ["To explain the code and improve readability", "To define variables", "To perform calculations", "To create functions"],
          
        },
    
]
export const answers= [2,0,2,0,1,0,0,1,0,0];