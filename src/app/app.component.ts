import { Component } from '@angular/core';
import { inputData } from './inputData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_assignment_2';

  data : inputData | any ; 

  maintainLogArray : inputData[] = [];

  count_2000:  number = 0;
  count_500: number = 0;
  count_200:  number = 0;
  count_100:  number = 0;

  Count_2000ToShow : number = 0;
  Count_500ToShow : number = 0;
  Count_200ToShow : number = 0;
  Count_100ToShow : number = 0; 

  totalAmount : number=0;

  withdrawCash : number=0;
  withrawCashShow : number=0;

  date = new Date();

  insufficientFund : boolean = false;

  contructor(){ }

  depositAmount() { 
    this.Count_2000ToShow =  (this.count_2000 !== 0) ? Number(this.count_2000) + Number(this.Count_2000ToShow) : this.Count_2000ToShow ;
    this.Count_500ToShow = (this.count_500 !== 0) ? Number(this.count_500) + Number(this.Count_500ToShow) : this.Count_500ToShow;
    this.Count_200ToShow = (this.count_200 !== 0) ? Number(this.count_200) + Number(this.Count_200ToShow) : this.Count_200ToShow;
    this.Count_100ToShow = (this.count_100 !== 0) ? Number(this.count_100) + Number(this.Count_100ToShow) : this.Count_100ToShow;

    this.totalAmount = this.Count_2000ToShow*2000 + this.Count_500ToShow*500 + this.Count_200ToShow*200 + this.Count_100ToShow*100 ; 

    this.count_2000 = this.count_500 = this.count_200 =this.count_100 =0;

    this.date = new Date();

    this.maintainLog('Deposit');
  }

  withdrawAmount(){
    if(this.withdrawCash %2000 == 0 && this.Count_2000ToShow>0){
      this.Count_2000ToShow -= 1
    }else if(this.withdrawCash %500 == 0 && this.Count_500ToShow>0){
      this.Count_500ToShow -= 1
    }else if(this.withdrawCash %200 == 0 && this.Count_200ToShow>0){
      this.Count_200ToShow -= 1
    }else if(this.withdrawCash %100 ==0 && this.Count_100ToShow>0){
      this.Count_100ToShow -= 1
    }

    if(this.withdrawCash === 0){
      return;
    }
    else if(this.withdrawCash > this.totalAmount){
      console.log("enter less amount");
      this.insufficientFund = true;
      return ;
    }
    else if(this.withdrawCash <= this.totalAmount && (this.withdrawCash%2000 ==0) && (this.withdrawCash%500 ==0) && (this.withdrawCash%200 ==0) && (this.withdrawCash%100 ==0)){
      this.totalAmount = this.totalAmount - this.withdrawCash; 
    }

    this.date.getDate()
    this.maintainLog('Withdraw');
  }

  maintainLog(action : string){
    this.data = new inputData;
    this.data.action = action;
    this.data.count_2000 = this.Count_2000ToShow;
    this.data.count_500 = this.Count_500ToShow;
    this.data.count_200 = this.Count_200ToShow;
    this.data.count_100 = this.Count_100ToShow;
    this.data.exactTime = new Date;

    this.maintainLogArray.push(this.data);
  }
}