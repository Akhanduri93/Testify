import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

@Injectable({
  providedIn: 'root'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: Object): any[] { 
    if (!items || !filter) {
      return items;
    }
    
    return items.filter(e =>
      e.title.toLowerCase().indexOf(filter) > -1 ||
      e.title.indexOf(filter) > -1
    )
  }

}
