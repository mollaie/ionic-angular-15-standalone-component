import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class SharedStateService{
  private NetworkStatus: BehaviorSubject<string> = new BehaviorSubject<string>("Online");


  public SetNetworkStatue = (status:string) => this.NetworkStatus.next(status);


  public get NetworkStatus$() : Observable<string> {
    return this.NetworkStatus.asObservable();
  }


}
