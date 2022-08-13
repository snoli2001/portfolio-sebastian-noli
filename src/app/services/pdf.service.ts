import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor(private http: HttpClient) {}

  downloadPDF(url: string): Observable<Blob> {
    const options = { responseType: 'blob' as 'json' };
    console.log(url);
    return this.http
      .get<Blob>(url, options)
      .pipe(map((res) => new Blob([res], { type: 'application/pdf' })));
  }
}
