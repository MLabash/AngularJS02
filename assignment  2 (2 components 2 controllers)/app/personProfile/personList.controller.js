app.controller('personListController', personListController);

function personListController(profileService) {
    var vm = this;
    vm.profileService = profileService;
    
    profileService.myMessage().then(function(response) {
        vm.persons = response.data;
    });
    
    vm.showProfile= function(person){
        profileService.personProfile = person
        profileService.bShowProfile = true;
        
    };
}