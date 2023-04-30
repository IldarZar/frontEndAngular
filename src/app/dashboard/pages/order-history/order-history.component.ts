import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '@dashboard/services/dashboard.service';
import { map, Observable } from 'rxjs';
import { UserOrder } from '@shared/models/user-order';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss'],
})
export class OrderHistoryComponent implements OnInit {
  orderHistory$: Observable<UserOrder[]>;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.orderHistory$ = this.route.data.pipe(
      map((res) => res['orderHistory'] as UserOrder[])
    );
  }
}
