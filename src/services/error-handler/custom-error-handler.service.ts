import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler{

  constructor() { }
  handleError(error: unknown): void {
    alert(error)
    console.warn("Error Handled by custom error handler")
  }
}
