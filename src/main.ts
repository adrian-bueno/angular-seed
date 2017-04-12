import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host) && !/127\.0\.0\.1/.test(document.location.host))
    enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
