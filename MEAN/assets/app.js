var ang_app = angular.module('app', []);

ang_app.filter('reverse', function() {
  return function(items) {
	return items.slice().reverse();
  };
});
	
ang_app.controller('ContactsCtrl', ['$scope', '$http','$log' , function ($scope, $http, $log, req, res, next){
		
	$scope.addContactForm = true;
    $scope.toggleContactForm = function() {
        $scope.addContactForm = !$scope.addContactForm;
    }
	$scope.hideAddContactForm= function(){
		$scope.addContactForm = true;
	}
	
	$scope.regex_text = '[A-ZĄĘĆŃŻŹÓŁŚ][a-ząęćńźżółś]+'
	$scope.regex_phone = '(((\\+48|48)?[0-9]{9})|([0-9]{7}))'
	$scope.regex_email = '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}'
	
	$scope.id = null
	$scope.id2 = null
	
	$scope.addContact = function () {
			$http.post('/api/contacts/save',{
				name: this.name,
				surname: this.surname,
				phone: this.phone,
				email: this.email
			}).success(function (contact) {
				document.getElementById('addForm').reset();
				$scope.contacts.unshift(contact)
				$scope.name = null
				$scope.surname = null
				$scope.phone = null
				$scope.email = null
				Materialize.toast('Dodano kontakt',3000);
			})
	}
	
	$scope.editContact = function (id) {
				$scope.id = null
			$http.put('/api/contacts/edit/'+id,{
				name: this.name2,
				surname: this.surname2,
				phone: this.phone2,
				email: this.email2
			}).success(function (contact) {
			})
			$http.get('/api/contacts').success(function (contacts) {
				$scope.contacts = contacts
				document.getElementById('addForm').reset();
				document.getElementById(id).reset();
				Materialize.toast('Edytowano kontakt',3000);
			})
	}
	
	$scope.confirmDelete = function () {
		var confirmed = confirm("Czy na pewno chcesz usunąć ten kontakt?")
		if (confirmed) {return true}
		else {return false}
	}

	$scope.deleteContact = function (id) {
			$scope.id = null
			$scope.id2 = null
			if ($scope.confirmDelete()){
				$http.delete('/api/contacts/delete/'+id)
				.success(function (contact) {
				})
				$http.get('/api/contacts').success(function (contacts) {
					$scope.contacts = contacts
				})
				Materialize.toast('Usunięto kontakt',3000);
			}
	}

	$http.get('/api/contacts').success(function (contacts) {
		$scope.contacts = contacts
	})
}])

ang_app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http){
//	var contactName =  $scope.contactName;
//	var contactSurame =  $scope.contactSurname;
//	var contactPhone =  $scope.contactPhone;
//	var contactEmail =  $scope.contactEmail;
}])
/*
$( document ).ready(function() {
	
});
*/