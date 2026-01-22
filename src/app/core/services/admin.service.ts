import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private API = 'http://localhost:5000/api/admin';

  constructor(private http: HttpClient) {}

    getPendingBrands() {
  return this.http.get<any>(`${this.API}/brands/pending`)
    .pipe(
      map(res => {
        console.log('SERVICE MAP =', res.data);
        return res.data;
      })
    );
}


    approveBrand(brandId: string) {
        return this.http.patch(
        `${this.API}/brands/${brandId}/approve`,
        {}
        );
    }

  rejectBrand(brandId: string, reason?: string) {
    return this.http.patch(
      `${this.API}/brands/${brandId}/reject`,
      { reason }
    );
  }
}
