'use strict';

angular.module('yeoMeanApp')
.service('Global', ['$resource',
  function($resource) {

    var _this = this;
    _this._data = $resource('/users/me').get();

    return _this._data;
  }
  ]);
