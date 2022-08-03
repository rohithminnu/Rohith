Global class LoginUser {
    @AuraEnabled
    global Static string login(string userName,string password){
       string homeURL = 'https://ayur-developer-edition.ap26.force.com/Wissen/S/';
        ApexPages.PageReference pageRef=Site.login(username, password, homeURL);
        return pageRef.getUrl();
    }
    

}