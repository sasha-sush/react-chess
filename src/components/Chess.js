import React from "react";

class Chess extends React.Component{
    figures = [
        {x:1,y:0,type:'br'},
        {x:6,y:0,type:'bk'},
        {x:7,y:0,type:'wr'},
        {x:1,y:1,type:'bp'},
        {x:4,y:1,type:'bn'},
        {x:5,y:1,type:'br'},
        {x:6,y:1,type:'bb'},
        {x:0,y:2,type:'bp'},
        {x:3,y:2,type:'bq'},
        {x:4,y:2,type:'bp'},
        {x:6,y:2,type:'bp'},
        {x:4,y:3,type:'wn'},
        {x:5,y:3,type:'bp'},
        {x:6,y:3,type:'wq'},
        {x:3,y:4,type:'wp'},
        {x:3,y:5,type:'wb'},
        {x:6,y:5,type:'wp'},
        {x:0,y:6,type:'wp'},
        {x:1,y:6,type:'wp'},
        {x:5,y:6,type:'wp'},
        {x:1,y:7,type:'wk'},
        {x:7,y:7,type:'wr'}
    ];

    fillBoard(){
        const field = [...document.getElementsByTagName("td")];
        for(const cell of field){
            const child = cell.children[0];
            if(child){
                cell.removeChild(child);
            }
        }
        for(const fig of this.figures){
            let img = document.createElement('img');
            img.setAttribute('src', `images/${fig.type}.png`);
            field[fig.x + 8*fig.y].appendChild(img);
        }
    }
    
    cellClick(_x,_y){
        const fig = this.figures.filter(el => (el.x === _x && el.y === _y))[0];
        if(fig){
            const index = this.figures.indexOf(fig);
            this.figures.splice(index, 1);
        } else {
            this.figures.push({x:_x, y:_y, type:'wp'});
        }
        this.forceUpdate();
    }

    render(){
        let width = this.props.width ? this.props.width : 8;
        let height = this.props.height ? this.props.height : 8;

        var list_tr = [];

        for(let i = 0; i < height; ++i){
            var list_td = [];
            for(let j = 0; j < width; ++j){
                let img = null;
                
                const fig = this.figures.filter(el => (el.x === j && el.y === i))[0];
                if(fig){
                    img = <img src={`images/${fig.type}.png`} alt={fig.type}></img>
                }

                list_td.push(<td key={j} className={(i+j)%2 ? 'black' : 'white'} onClick={() => this.cellClick(j,i)}>{img}</td>);
            }
            list_tr.push(<tr key={i}>{list_td}</tr>);
        }

        return (
            <div id="chess-div">
                <table id="chess-table">
                    <tbody>{list_tr}</tbody>
                </table>
            </div>
        );
    }

}

export default Chess;