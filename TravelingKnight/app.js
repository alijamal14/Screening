var KnightAllPossibleMove = {
    dx : [ -2, -1, 1, 2, -2, -1, 1, 2 ],
    dy : [ -1, -2, -2, -1, 1, 2, 2, 1 ]
}
function isInsideG (x,y,BoardSize){
    return x>=0 && x<BoardSize&&y<BoardSize && y>=0;
};
class Knight {
    
    isInside (x,y){
        return isInsideG(x,y,this.BoardSize);
    }
    // Cordinates Starting from 0 to N-1
    constructor(BoardSize,x,y) {
        this.BoardSize = BoardSize;
        if (!(isInsideG(x,y, BoardSize))) {
            throw new Error("Cordinates should be inside Board")
        }
        this.X = x;
        this.Y = y;
    }
    getListOfPossibleMoves() { 
        var result = [];
        KnightAllPossibleMove.dx.forEach((currentValue, index)=>{
            if (this.isInside(this.X+KnightAllPossibleMove.dx[index],this.Y+KnightAllPossibleMove.dy[index])) {
                result.push({x:KnightAllPossibleMove.dx[index],y:KnightAllPossibleMove.dy[index]});
            }
        });
        return result;
        
    }
    getListOfPossibleCordinates() { 
        var result = [];
        KnightAllPossibleMove.dx.forEach((currentValue, index)=>{
            if (this.isInside(this.X+KnightAllPossibleMove.dx[index],this.Y+KnightAllPossibleMove.dy[index])) {
                result.push({x:this.X+KnightAllPossibleMove.dx[index]
                    ,y:this.Y+KnightAllPossibleMove.dy[index]});
            }
        });
        return result;
        
    }
    
};
var knight = new Knight(3,2,2);// Cordinates Starting from 0 to N-1
console.log("possible Moves")
var list = knight.getListOfPossibleMoves();
list.forEach((item, index)=>{
    console.log(index,item);
})
console.log("possible Cordinates")
list = knight.getListOfPossibleCordinates();
list.forEach((item, index)=>{
    console.log(index,item);
})
debugger