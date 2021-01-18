class Form {
    constructor(){}
    display(){
        var title=createElement("h1")
        title.html("car game")
        title.position(130,0)
        var input = createInput("Name"); 
         var button = createButton('Play');
         input.position(130, 160);
         button.position(250, 200);
         button.mousePressed(function(){
            var greeting = createElement('h3');
            greeting.position(130,160);
            var name=input.value();
            player.update(name);
            playerCount+=1;
            player.updatecount(playerCount)
            greeting.html("hello"+ name)
            input.hide()
            button.hide()
            
         })

    }
}