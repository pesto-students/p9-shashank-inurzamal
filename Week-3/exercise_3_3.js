function createIncrement(){
    let count = 0;
    // let message;
    function increment(){
        count++;
        // message = `Count is ${count}`; // count is 3
    }
    let message = `Count is ${count}`;
    
    function log(){
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); //count is 0

//because variable message is initialized only once
// if we write message variable inside increment() function it will print 3