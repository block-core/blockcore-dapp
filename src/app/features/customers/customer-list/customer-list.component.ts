import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NGXLogger } from 'ngx-logger';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'user 1', weight: 1.005, symbol: 'a' },
  { position: 2, name: 'user 2', weight: 4.145, symbol: 'b' },
  { position: 3, name: 'user 3', weight: 6.954, symbol: 'c' },
  { position: 4, name: 'user 4', weight: 9.874, symbol: 'd' },
];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true })
  sort: MatSort = new MatSort;

  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('blockcore-dapp - Customers');
    this.logger.log('Customers loaded');
    this.notificationService.openSnackBar('Customers loaded');
    this.dataSource.sort = this.sort;

  }
}
