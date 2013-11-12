'use strict';

angular.module('yeoMeanApp')
.service('Articles', ['$resource',
    function($resource) {
      return $resource('articles/:articleId', {
        articleId: '@_id'
      }, {
        update: {
          method: 'PUT'
        }
      });
    }
  ]);