var app = angular.module('TechBlaze',[]);  
var deftab = 1;
var gems = [{
 name: 'Dodecahedron', 
 price: 2, 
 description: '.This is pro 1.', 
 canPurchase: true
},     
{ 
 name: 'This is Second Product', 
 price:2.95,  
 description: '.This is pro 2.',    
 canPurchase: false 
}];    
app.controller('StoreController', function() { 
    this.product = gems;      
    console.log('********');
});     
app.controller('PanelController',['$scope',function($scope){
    $scope.tab = 1; 
    this.selectedTab = function(selTab){ 
        $scope.tab = selTab;        
    }
    this.isSelected = function(tabNo){         
        return tabNo === $scope.tab;        
    }    
}]);