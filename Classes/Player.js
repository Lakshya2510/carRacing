class Player {

    constructor(){
       this.distance=0,
       this.name=null,
       this.index=null 

    }

    getCount(){
        database.ref('playerCount').on('value',(data)=> {playerCount=data.val()})
    }

    updateCount(count){
        database.ref('/').update({playerCount:count})       
    }

    static getPlayerInfo(){
        database.ref('players').on('value',(data)=> {allPlayers=data.val()})
    }

    update(){

        database.ref('players/player'+this.index).update({name:this.name,distance:this.distance})

    }
}