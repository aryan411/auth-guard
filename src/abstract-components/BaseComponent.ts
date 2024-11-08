import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];

  // To add a subscription
  protected addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  // OnDestroy lifecycle hook to unsubscribe from all subscriptions
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
