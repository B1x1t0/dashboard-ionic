/* global angular, document, window */
'use strict';

angular.module('dashboard.controllers', ['ionic'])

.controller('DashboardCtrl', function($scope) {

    $scope.title = "Dashboard";

    $scope.graphs = [{
        title: "New Signups",
        data: [
            [40, 32, 45]
        ],
        labels: ['1 Nov', '7 Nov', '4 Nov'],
        previous: 40,
        last: 56,
        total: 13,
        options: {
            animation: false
        },
        series: ['# Signups'],
        legend: true,
        colors: ['#ff8e72']
    }, {
        title: "Win",
        data: [
            [80, 81, 56, 55, 40],
            [40, 19, 86, 27, 90]
        ],
        previous: 23,
        last: 90,
        total: 45,
        labels: ['2012', '2013', '2014', '2015', '2016'],
        options: {
            animation: false
        },
        series: ['Female', 'Male'],
        legend: true,
        colors: ['#ff8e72']
    }]

});
