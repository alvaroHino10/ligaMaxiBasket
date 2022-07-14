@echo off
echo =========================
echo Instalando Angular version 12
call npm install -g @angular/cli@12.2.17
echo Instalando Bootstrap
call npm install bootstrap
echo Agregando plantillas bootstrap
call npm i mdb-ui-kit
echo =========================
call npm install angular2-qrcode