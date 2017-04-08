import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): string {

    let noimage = "http://www.erkanmakine.com.tr/img/noimage.png";

    if( !value ){
      return noimage;
    }
    return ( value.length > 0) ? value[1].url : noimage;
  }

}
