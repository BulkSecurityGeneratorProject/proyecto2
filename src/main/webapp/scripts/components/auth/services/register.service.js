'use strict';

angular.module('proyecto2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


