import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RoutingInstance {

    constructor(private router: Router) {

    }

    generateUrl(url: string, params: any) {
        return this.router.serializeUrl(this.router.createUrlTree(["/" + url], { queryParams: params }));
    }

    openUrlNewWindow(url: string, params: any) {
        const urlFull = this.generateUrl(url, params);
        window.open("#" + urlFull, '_blank');
    }
}