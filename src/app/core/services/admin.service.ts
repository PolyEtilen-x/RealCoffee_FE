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

  approveBrand(id: string) {
    return this.http.patch(
      `${this.API}/brands/${id}/approve`,
      {}
    );
  }

  rejectBrand(id: string, reason?: string) {
    return this.http.patch(
      `${this.API}/brands/${id}/reject`,
      { reason }
    );
  }

  getApprovedBrands() {
    return this.http.get<any[]>(
      `${this.API}/brands/approved`
    );
  }

  updateBrand(id: string, data: any) {
    return this.http.patch<any>(
      `${this.API}/brands/${id}`,
      data
    );
  }

  deleteBrand(id: string) {
    return this.http.delete(
      `${this.API}/brands/${id}`
    );
  }
}

