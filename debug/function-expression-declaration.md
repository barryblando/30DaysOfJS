# Function Declarations vs. Function Expressions

QUESTIONS & ANSWERS:

```javascript
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
alert(foo()); **Answer**: 8
```

```javascript
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
alert(foo()); **Answer**: 3
```

```javascript
alert(foo()); **Answer**: 3
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
```

```javascript
function foo(){
    return bar();
    var bar = function() {
        return 3;
    };
    var bar = function() {
        return 8;
    };
}
alert(foo()); **Answer**: [Type Error: bar is not a function]
```

**What is a Function Declaration?**

A Function Declaration defines a named function variable without requiring variable assignment. Function Declarations occur as standalone constructs and cannot be nested within non-function blocks. It’s helpful to think of them as siblings of Variable Declarations. Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.

```javascript
function bar() {
    return 3;
}
```

ECMA 5 (13.0) defines the syntax as

**function** Identifier ( FormalParameterList opt ) { FunctionBody }

The function name is visible within it’s scope and the scope of it’s parent (which is good because otherwise it would be unreachable)

```javascript
function bar() {
    return 3;
}

bar() //3
bar  //function
```

**What is a Function Expression?**

A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). Functions defined via Functions Expressions can be named or anonymous. Function Expressions must not start with “function” (hence the parentheses around the self invoking example below)

```javascript
//anonymous function expression
var a = function() {
    return 3;
}

//named function expression
var a = function bar() {
    return 3;
}

//self invoking function expression
(function sayHello() {
    alert("hello!");
})();
```

ECMA 5 (13.0) defines the syntax as

**function** Identifier opt ( FormalParameterList opt ) { FunctionBody }

(though this feels incomplete since it omits the requirement that the containing syntax be an expression and not start with “function”)

The function name (if any) is not visible outside of it’s scope (contrast with Function Declarations).

**So what’s a Function Statement?**

Its sometimes just a pseudonym for a Function Declaration. However as kangax pointed out, in mozilla a Function Statement is an extension of Function Declaration allowing the Function Declaration syntax to be used anywhere a statement is allowed.  It’s as yet non standard so not recommended for production development.

OK so Question 1 uses function declarations which means they get hoisted…

**Wait, what’s Hoisting?**

To quote Ben Cherry’s excellent article: “Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter”.

When a function declaration is hoisted the entire function body is lifted with it, so after the interpreter has finished with the code in Question 1 it runs more like this:

```javascript
**Simulated processing sequence for Question 1**
function foo(){
    // define bar once
    function bar() {
        return 3;
    }
    // redefine it
    function bar() {
        return 8;
    }
    // return its invocation
    return bar(); //8
}
alert(foo())
```

**Taught that code after the return statement is unreachable?**

In JavaScript execution there is Context (which ECMA 5 breaks into LexicalEnvironment, VariableEnvironment and ThisBinding) and Process (a set of statements to be invoked in sequence). Declarations contribute to the VariableEnvironment when the execution scope is entered. They are distinct from Statements (such as **return**) and are not subject to their rules of process.

**Do Function Expressions get Hoisted too?**

That depends on the expression. Let’s look at the first expression in Question 2:

```javascript
var bar = function() {
    return 3;
};
```

The left hand side (var bar) is a Variable Declaration. Variable Declarations get hoisted but their Assignment Expressions don’t. So when **bar** is hoisted the interpreter initially sets var bar = undefined. The function definition itself is not hoisted.

(ECMA 5 12.2 A variable with an initializer is assigned the value of its AssignmentExpression when the VariableStatement is executed, not when the variable is created.)

Thus the code in Question 2 runs in a more intuitive sequence:

```javascript
**Simulated processing sequence for Question 2**
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    //first Function Expression is executed
    bar = function() {
        return 3;
    };
    // Function created by first Function Expression is invoked
    return bar();
    // second Function Expression unreachable
}
alert(foo()); //3
```

**Question 3 is based on similar logic to Question 1. This time it is the foo function that gets hoisted.**

**Now Question 4 seems easy. No function hoisting here.**

Almost. If there were no hoisting at all, the TypeError would be “bar not defined” and not “bar not a function”. There’s no function hoisting, however there is variable hoisting. Thus **bar** gets declared up front but its value is not defined. Everything else runs to order.

```javascript
**Simulated processing sequence for Question 4**
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    return bar(); //TypeError: "bar not defined"
    //neither Function Expression is reached
}
alert(foo());
```

**What else should I watch out for?**

Function Declarations are officially prohibited within non-function blocks (such as if) . However all browsers allow them and interpret them in different ways.

**I can see how using Function Declarations can cause confusion but are there any benefits?**

Well you could argue that Function Declarations are forgiving – if you try to use a function before it is declared, hoisting fixes the order and the function gets called without mishap. But that kind of forgiveness does not encourage tight coding and in the long run is probably more likely to promote surprises than prevent them. After all, programmers arrange their statements in a particular sequence for a reason.

**And there are other reasons to favour Function Expressions?**

How did you guess?

a) Function Declarations feel like they were intended to mimic Java style method declarations but Java methods are very different animals. In JavaScript functions are living objects with values. Java methods are just metadata storage. Both the following snippets define functions but only the Function Expression suggests that we are creating an object.

```javascript
//Function Declaration
function add(a,b) {return a + b};
//Function Expression
var add = function(a,b) {return a + b};
```

b) Function Expressions are more versatile. A Function Declaration can only exist as a “statement” in isolation. All it can do is create an object variable parented by its current scope. In contrast a Function Expression (by definition) is part of a larger construct. If you want to create an anonymous function or assign a function to a prototype or as a property of some other object you need a Function Expression. Whenever you create a new function using a high order application such as curry or compose you are using a Function Expression. Function Expressions and Functional Programming are inseparable.

```javascript
//Function Expression
var sayHello = alert.curry("hello!");
```

**Do Function Expressions have any drawbacks?**

Typically functions created by Function Expressions are unnamed. For instance the following function is anonymous, today is just a reference to an unnamed function:

```javascript
var today = function() {return new Date()}
```

Does this really matter? Mostly it doesn’t, but as Nick Fitzgerald has pointed out debugging with anonymous functions can be frustrating. He suggests using Named Function Expressions (NFEs) as a workaround:

```javascript
var today = function today() {return new Date()}
```

**Conclusions?**

Badly placed Function Declarations are misleading and there are few (if any) situations where you can’t use a Function Expression assigned to a variable instead. However if you must use Function Declarations, it will minimize confusion if you place them at the top of the scope to which they belong. I would never place a Function Declarations in an if statement.

Having said all this you may well find yourself in situations where it makes sense to use a Function Declaration. That’s fine. Slavish adherance to rules is dangerous and often results in tortuous code. Much more important is that you understand the concepts so that you can make your own informed decisions.

Sources: [Kangax](https://kangax.github.io/nfe/)