import {bindable} from 'aurelia-framework';

export class NavBar {
    @bindable router;
    attached(){
        $('.nav a:not(.dropdown-toggle)').on('click', function () {
            if ($('.navbar-toggle').css('display') != 'none') {
                $(".navbar-toggle").trigger("click");
            }
        });
    }
}