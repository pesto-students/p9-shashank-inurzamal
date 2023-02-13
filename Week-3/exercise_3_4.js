function createStack() {

    const items = [];

    return {
        push(element) {
            items.push(element);
        },
        pop() {
            return items.pop();
        },

        peek: function () {
            return items[items.length - 1];
        },
        isEmpty: function () {
            return items.length === 0;
        },
        size: function () {
            return items.length;
        }

    };
}


const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
console.log(stack.items); // undefined
console.log(stack.pop()); // 20
console.log(stack.size()); // 1

/*
In this implementation, the items array is declared inside the createStack() function and is not accessible from outside the scope of the function. The returned object provides methods for manipulating the stack (push, pop, peek, isEmpty, and size), but does not expose the items array directly. This ensures that the internal implementation of the stack is protected and cannot be tampered with from outside the function.
*/