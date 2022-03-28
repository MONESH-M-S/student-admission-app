import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.scss'],
})
export class ShowMessagesComponent implements OnInit {
  messages = [];
  constructor(
    private adminService: AdminService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.adminService.getMessage().subscribe((res) => {
      if (res.message) {
        this.messages = res.message;
      }
    });
  }

  deleteMessage(id: string) {
    this.adminService.deleteMessage(id).subscribe((res) => {
      if (res.message === 'Deleted Successfully!') {
        this.messageService.add({
          severity: 'success',
          summary: 'Message Deleted!',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: `${res.message}`,
        });
      }
      return this.adminService.getMessage().subscribe((res) => {
        if (res.message) {
          this.messages = res.message;
        }
      });
    });
  }
}
