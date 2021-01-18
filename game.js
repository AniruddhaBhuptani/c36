class Game {
    constructor(){}
    getstate(){
        var car =database.ref("gameState")
        car.on("value",function(data){
            gamestate=data.val()
            
        })
    }
updatestate(state){
    database.ref("/").update({

        gameState:state
    })
}
start (){
    if(gamestate==0){
        form=new Form()
        player=new Player()
        form.display()
        player.getcount()
    }
}
    
}