/*
    © barosofts, César & Rodrigue Villetard, 2013

    This file is part of FoxyMPD.

    FoxyMPD is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    FoxyMPD is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with FoxyMPD.  If not, see <http://www.gnu.org/licenses/>.
*/
define([
    'underscore',
    'jquery',
    'backbone'
],function(_,$,Backbone) {


    var appManager = function() {
       this.eventManager={};
        _.extend(this.eventManager,Backbone.Events);
    };

    var done = $('<a href="#menu" id="settings"><span class="lsf lsf-symbol">param</span></a>');


    appManager.prototype = {

        currentView:null,
        showView : function(view) {

            this.eventManager.trigger('show_view');

            if (this.currentView) {

                if(this.currentView.close) {
                    this.currentView.close();
                }
                this.currentView.remove();
            }
     
            this.currentView = view;

            $('#menu_buttons').empty();
            $('#menu_buttons').html(done);

            window.scrollTo(0,0);
            this.currentView.render();
            $('section[role=main]').html(this.currentView.el);
        }

    };


    return  appManager;



});
