class Player{
    constructor(){}

    getcount(){
        var car1 =database.ref("playerCount")
        car1.on("value",function(data){
            playerCount=data.val()
            
        })
    }
updatecount(count){
    database.ref("/").update({

        playerCount:count
    })
}
update(name){
    var index="player"+playerCount
    database.ref(index).set({
        name:name
    })
}
}