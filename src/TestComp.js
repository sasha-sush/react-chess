
function dummy(){
    console.log("Hello im dummy");
}


function Test(props){
        /*return (
            <button onClick={this.dosmth}>Button</button>
        );*/

        return <button onClick={dummy}>Click me</button>;
    
}

export default Test;