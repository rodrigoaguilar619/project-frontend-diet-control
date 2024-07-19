import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class ToastPrimeInstance {

    constructor(private messageService: MessageService, private spinner: NgxSpinnerService) {

    }

    showSuccess(title: string, detail: string) {
        this.messageService.add({severity:'success', summary: title, detail: detail});
    }

    showError(title: string, detail: string, error: any) {

        this.spinner.hide();
        
        if (error.status !== undefined)
            title += " " + error.status;

        this.messageService.add({severity:'error', summary: title, detail: detail});
    }

}