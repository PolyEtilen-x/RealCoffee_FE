import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';
import { authInterceptor } from './app/core/interceptors/auth.interceptors';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor])
    ),
  ],
}).catch(err => console.error(err));
