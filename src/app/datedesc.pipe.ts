import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {

    //Order descendente
        let newVal = value.sort((a: any, b: any) => {
            let date1 = new Date(a.date);
            let date2 = new Date(b.date);

            if (date2 > date1) {
                return 1;
            } else if (date2 < date1) {
                return -1;
            } else {
                return 0;
            }
        });

        return newVal;
    }
}