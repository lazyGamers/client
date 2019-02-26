# Project structure

```
src
|  main.ts - entry file
|  styles.scss - global styles
|
+- assets - folder for static assets (images, json files,..)
|
+- environments - environments (dev & prod)
|
+- app - application location
|  |
|  +- app.module.ts - bootstraping module for app
|  +- app.component.ts - main layout component
|  +- core - core module
|  +- services - all services provided in root
|  +- utils - all utils (class with static methods - not injected)
|  +- shared - module with shared (dumb) components
|  +- modules - all 'page' modules with their components
|     |
|     +- components
|     +- pages
|
+- entities - all entities, dtos, interfaces,..
|
+- styles - all shared scss files
```
