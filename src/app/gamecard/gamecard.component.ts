import { Component, OnInit } from '@angular/core';
import { GetdataserviceService } from '../getdataservice.service';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.css'],
  providers:[GetdataserviceService]
})

export class GamecardComponent implements OnInit {

    title:String='Card Game';
    deckInfo=null;
    dealarCardInfo=null;
    gameCardsInfo=null;
    cardsInfo=null;
   gameresult=null;
   gameCardsvalueInfo={};
	
    
    isShowCard=false;
    /*
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        },
        {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
        }
    ];*/
  constructor(private getDataSer:GetdataserviceService) { }

  ngOnInit() {
    this.initGameCardValues();
     this.resetDeck();
  }
  
  initGameCardValues(){
    var deckType=['C','D','H','S'];
	var cardNames=[2,3,4,5,6,7,8,9,0,'J','Q','K','A'];
	var cnt=2;
	var ccnt=1;
	for(var i=0;i<deckType.length;i++){
		cnt=2;
		for(var j=0;j<cardNames.length;j++){
			this.gameCardsvalueInfo[cardNames[j]+deckType[i]]={val:cnt,realVal:i,cntVal:ccnt};
			cnt+=1;
            ccnt+=1;
		}
	}
  }
  
  resetDeck() {
    this.getDataSer.getData("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").subscribe(
        (data) => { this.deckInfo=data;
                    this.getCardInfo(data)});
  }
  getCardInfo(reqDecinfo){
    this.getDataSer.getData("https://deckofcardsapi.com/api/deck/"+reqDecinfo.deck_id+"/draw/?count=2").subscribe(
        (data) => this.checkCardInfo(data));
  }
  checkCardInfo(reqCardInfo){
  
  // (reqCardInfo.cards[0].value===reqCardInfo.cards[1].value)?this.getCardInfo(this.deckInfo):this.showCards(reqCardInfo);
   //check with deckwise
   var cardObj1=this.gameCardsvalueInfo[reqCardInfo.cards[0].code];
   var cardObj2=this.gameCardsvalueInfo[reqCardInfo.cards[1].code];
   (cardObj1.val===cardObj2.val)?this.getCardInfo(this.deckInfo):this.showCards(reqCardInfo);
  }
  
  
  showCards(reqCards){
        this.gameCardsInfo=reqCards;
       
        this.cardsInfo=reqCards.cards[1];
        
        console.log('this.cardsInfo :',this.cardsInfo);
  }
  
  showAnswer(reqAns){
    /* 1 means big 
       0 means small */
       
       this.dealarCardInfo=this.gameCardsInfo.cards[0];
       console.log('showAnswer---fnc')
       var ans=null;
       
       /*var userValObj=this.gameCardsvalueInfo[this.cardsInfo.code];
       var dealerValObj=this.gameCardsvalueInfo[this.dealarCardInfo.code];
       
       
       if(dealerValObj.cntVal>userValObj.cntVal){
            ans=1;
       }else{
            ans=0;
       }*/
       
       //or check deck wise
       
      var userCardObj=this.gameCardsvalueInfo[this.cardsInfo.code];
      var delerCardObj=this.gameCardsvalueInfo[this.dealarCardInfo.code];
      
      if(delerCardObj.val>userCardObj.val){
            ans=1;
       }else{
            ans=0;
       }
   
       this.gameresult={};
       if(ans==reqAns){
            this.gameresult.result='You Win!';
       }else{
            this.gameresult.result='Better Luck Next Time';
       }
       console.log('this.gameresult.result :',this.gameresult.result);
       //setTimeout(this.restartGame,3000);
  }
  
  restartGame(){
    this.gameresult=null;
    this.gameCardsInfo=null;
    this.cardsInfo=null;
    this.cardsInfo=null;
    this.dealarCardInfo=null;
    this.resetDeck();
    
  }
  

}
