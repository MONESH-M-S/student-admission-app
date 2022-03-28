import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import * as FileSaver from 'file-saver';

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
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['cid']) {
        this.id = params['id'];
        this.adminService
          .getCourseDetailById(params['cid'])
          .subscribe((res) => {
            if (res.course) {
              this.courseDetail = res.course;
            }
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

    this.adminService.getRegistrationDetailsById(this.id).subscribe((res) => {
      if (res.registers.length > 0) {
        this.isRegistrationAvailable = true;
        this.registrationDetails = res.registers;
      } else {
        this.isRegistrationAvailable = false;
      }
    });
  }
}
