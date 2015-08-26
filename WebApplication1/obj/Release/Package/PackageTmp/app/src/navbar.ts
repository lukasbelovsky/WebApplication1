import {bindable} from 'aurelia-framework';

export class NavBar {
    @bindable router = null;
    attached(){
        $('.nav a').on('click', function () {
            $(".navbar-toggle").click();
        });
    }
}