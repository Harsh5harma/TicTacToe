# TicTacToe
This one was the first time I genuinely felt challenged. All this time I wrote JS but I had a lot of gaps in my understanding of JS.
Trying to make TTT in a coherent manner exposed all those gaps and oh boy there were many of them lol.

I finally understand closures (Closures are functions that have their lexical scope binded to them. What is lexical scope now? Basically the methods and variables that are available to a function at the time of declaration is called its lexical scope. 

Scope for ES6 variable types let and const is different though. Their scope is not related to the function but to blocks (blocks are compound lines of code wrapped in curly braces)), I understand that whenever I use its the context of the invocation that determines its value and not the scope where it got called. I understand hoisting (the interpreter scans through the code for the first time and loads up all 'var' variables in memory and defines the value 'undefined' to them, and for function declarations it loads the entire function into memory. It's the second time around that the interpreter assigns values to the variables) and why let/const and var are different. 

I understand the global execution context and the event loop along with the callback function queue and microtask queue(for promises). Go watch akshay saini's Namaste JS if you haven't already (This is a message to my future self too if I ever get lost again). 

There's also a difference between 'not defined' and 'undefined' btw. At first glance they seem simple enough and you skim over them but first glances are usually misleading. 

Something is undefined when it has some memory allocated to it and the interpreter is aware of its existence but not aware of what that memory is supposed to hold. Not defined then is something that simply doesn't exist in memory (or the execution context if you want to get fancy) yet. That's about it.
Idk what else to put here, look at my code if you want. I've commented more than I usually do on any of my prior projects.

Btw, I'm not going to make an AI for my TTT. I'll try my hand at it when I reach battleship. I also have experience with some game theory or things like the minmax already because of college so not missing out on anything particularly new.


I apologize if this readme is garbage, I don't know how to write them. This is my first attempt at one. I'll probably watch a video or two or read some article on how to write this better as the complexity of my future projects increase. Thanks.

