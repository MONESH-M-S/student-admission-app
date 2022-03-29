import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import * as FileSaver from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { ViewRegistrationDetailComponent } from './view-registration-detail/view-registration-detail.component';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss'],
})
export class ViewCourseComponent implements OnInit {
  id: string;
  courseDetail: any;
  registrationDetails: any;
  isRegistrationAvailable = false;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['cid']) {
        this.id = params['cid'];
        this.adminService
          .getCourseDetailById(params['cid'])
          .subscribe((res) => {
            if (res.course) {
              this.courseDetail = res.course;
            }
          });

        this.adminService
          .getRegistrationDetailsByCourseId(this.id)
          .subscribe((res) => {
            if (res.registers.length > 0) {
              this.isRegistrationAvailable = true;
              this.registrationDetails = res.registers;
            } else {
              this.isRegistrationAvailable = false;
            }
          });
      }
    });
  }

  onViewRegistrationDialog(id: string) {
    this.adminService.getRegistrationDetailById(id).subscribe((res) => {
      if (res.register != null) {
        const data = res.register;
        let dialogRef = this.dialog.open(ViewRegistrationDetailComponent, {
          data: { register: data },
          width: '500px',
          height: '380px',
          hasBackdrop: true,
        });
        dialogRef.afterClosed().subscribe((res) => {
          this.adminService.getCourseDetailById(this.id).subscribe((res) => {
            if (res.course) {
              this.courseDetail = res.course;
            }
          });
          this.adminService
            .getRegistrationDetailsByCourseId(this.id)
            .subscribe((res) => {
              if (res.registers.length > 0) {
                this.isRegistrationAvailable = true;
                this.registrationDetails = res.registers;
              } else {
                this.isRegistrationAvailable = false;
              }
            });
        });
      }
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.registrationDetails);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'detail');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string) {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(data, fileName + '_' + 'eie' + EXCEL_EXTENSION);
  }
}
