import React from "react";

class Header extends React.Component{
    doggieUrl = "";
    
    
    constructor(props){
        super(props);
        this.reloadDoggieUrl();
    }
    

    reloadDoggieUrl(){
        var xhttp = new XMLHttpRequest();
        let isPic = false;

        while(!isPic){
            xhttp.open("GET", 'https://random.dog/woof', false);
            xhttp.send();
            isPic = xhttp.responseText.match('\\.jpg');
            //isPic |= xhttp.responseText.match('\\.png');
        }

        this.doggieUrl = 'https://random.dog/' + xhttp.responseText;
        //this.setState({doggieUrl : 'https://random.dog/' + xhttp.responseText});
    }

    render(){
        return (
        <header>
            <div id="div-title">
                <span id="span-title">Шахи</span>
                <span id="span-variant">Варіант 18</span>
            </div>
            <div id="div-avatar">
                <span>Doggie</span>
                <img id="avatar-pic" src={this.doggieUrl} alt="Dog"></img>
            </div>
        </header>
        );
    }
}

export default Header;