function AlertDemoCtrl($scope) {
  $scope.alerts = [
    { type: 'alert-danger', msg: 'Oh snap! Change a few things up and try submitting again.' }, 
    { type: 'alert-success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

}