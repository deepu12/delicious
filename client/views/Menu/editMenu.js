Template.editMenu.helpers({
   menuItem : function(){
      return Menu.findOne(this.menuId);
   }
})
