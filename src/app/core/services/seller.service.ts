import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SellerService {
    private API = 'http://localhost:5000/api/seller';

    constructor(private http: HttpClient) {}
    
    getBrandStatus() {
        return this.http.get<any>(
            `${this.API}/brand-status`
        );
    }

}