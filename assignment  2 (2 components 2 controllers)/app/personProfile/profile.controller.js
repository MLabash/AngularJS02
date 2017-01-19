app.controller('profileController', profileController);

function profileController(profileService) {
    var vm = this;
    vm.profileService = profileService;
}