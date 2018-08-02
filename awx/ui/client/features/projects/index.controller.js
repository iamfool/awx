function IndexProjectsController ($scope, strings, dataset) {
    const vm = this;
    vm.strings = strings;
    vm.count = dataset.data.count;

    $scope.$on('updateCount', (e, count) => {
        if (count) {
            vm.count = count;
        }
    });
}

IndexProjectsController.$inject = [
    '$scope',
    'ProjectsStrings',
    'Dataset',
];

export default IndexProjectsController;
