 'use strict';

angular.module('proyecto2App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-proyecto2App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-proyecto2App-params')});
                }
                return response;
            }
        };
    });
