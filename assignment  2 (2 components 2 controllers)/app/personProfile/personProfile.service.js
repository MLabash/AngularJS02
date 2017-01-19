app.service('profileService', profileService);
function profileService($http,api){
    this.personProfile = {};
    this.bShowProfile = false;
    return { 
        myMessage: function() {
            return $http.get(api.root + api.path);
    }
  };   
}