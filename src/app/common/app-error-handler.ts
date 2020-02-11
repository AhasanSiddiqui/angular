
import { ErrorHandler } from '@angular/core';
export class AppErrorHandler extends ErrorHandler {
    handleError(error) {
        alert('an unexpected error occurs ');
            console.log(error);
    }

}