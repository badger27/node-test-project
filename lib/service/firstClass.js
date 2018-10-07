export class createMessageClass {
    constructor(mes) {
            this.senderName = mes.senderName,
            this.recieverName = mes.recieversName
            // this.getRating = function () {
            //     console.log('RATING FUNCTION');
            //     let rating = this.senderWin / this.senderlost;
            //      return rating
            //      return rating
            // }
    }

    // Set up Static function
    static staticFun() {
        console.log("THIS IS A STATIC FUNCTION THAT ONLY GET CALLED ONCE");
    }

    // Function inside a class
    getRatio() {
        console.log("THIS IS A REGULAR FUNCTION");
    }

    createResultsMessage(){
        console.log(`SENDER ${this.senderName} won ${this.wins} against  ${this.recieverName} `);
    }
};


export class typeResult extends createMessageClass {
    constructor(resultData) {
        super(resultData)
        this.wins = resultData.wins,
            this.lost = resultData.lost
    }

};

export class typeChallenge extends createMessageClass {
    constructor() {
        super()
        this.lesson = ["Angular","javascript"]
    }
};


