//Type Aliases and Interface

type User=string;

type newUser={
    name:string;
    email:string;
    age?:number;
    // getMessage():void;
}

type useDetails={
    jobDetail:string
}

type combinedInfo=newUser & useDetails;

interface UserInterface{
    name:string;
    email:string;
    age:number;
    getMessage():string;
}

const userName:User='Shaik';
console.log(userName);

const createNewUser=(user:combinedInfo)=>{
    console.log('user Info',user);
}

createNewUser({
    name:'Shaik',
    email:'sha@gmail.com',
    age:25,
    jobDetail:'Software Engineer'
})
//--------------------------------------------------------------