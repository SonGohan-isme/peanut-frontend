import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-nop-ho-so-giai-quyet-qlbh-truc-truyen',
  templateUrl: './nop-ho-so-giai-quyet-qlbh-truc-truyen.component.html',
  styleUrls: ['./nop-ho-so-giai-quyet-qlbh-truc-truyen.component.css']
})
export class NopHoSoGiaiQuyetQlbhTrucTruyenComponent {
  public exportPDF() {
    var data = document.getElementById('mat-typography');
    html2canvas(data).then(canvas => {
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentUrl = canvas.toDataURL('img/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentUrl, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Thongtinbosung.pdf');
    });
  }

  constructor() { }

}
