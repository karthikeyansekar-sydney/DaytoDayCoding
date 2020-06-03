//process.stdout.write("Hello ");
//process.stdout.write("World \n\n\n");

const questions = [
    "What is your name?" , 
    "What would you rather be doing?" ,
    "What is your preferred programming language?"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(`>`);
};

ask();

const ans = [];
process.stdin.on("data", data => {
process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
ans.push(data);

    if(ans.length < questions.length){
ask(ans.length);

    }
    else{
        process.exit();

    }
});

process.on("exit", () => {
    const [name, activity, lang] = ans;
    console.log(`Thank you for your answers. \n
     Go ${activity} ${name} you can write ${lang} code later !!!`);
});