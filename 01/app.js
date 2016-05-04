'use strict';

angular.module('myApp',
        [
            "ngSanitize",
            "com.2fdevs.videogular",
            "com.2fdevs.videogular.plugins.controls",
            "com.2fdevs.videogular.plugins.buffering",
            "com.2fdevs.videogular.plugins.overlayplay",
            "com.2fdevs.videogular.plugins.poster"
        ]
    )
    .controller('HomeCtrl',
        ["$sce", function ($sce) {
            this.config = {
                preload: "none",
                sources: [
                    {src: $sce.trustAsResourceUrl("./v_bv100k.mp4"), type: "video/mp4"}
                ],
                theme: {
                    url: "../lib/videogular/themes/default/videogular.css"
                },
                plugins: {
                    controls: {
                        autoHide: true,
                        autoHideTime: 5000
                    },
                    poster: "./poster.png"
                }
            };
        }]
    )
    .directive("myLogoPlugin",
        ["VG_STATES", function(VG_STATES) {
            return {
                restrict: "E",
                require: "^videogular",
                template: "<img src='./logo.png' ng-show='API.currentState != \"play\"'>",
                    link: function(scope, elem, attrs, API) {
                        scope.API = API;
                    }
            }
        }
    ])
    
    
;
