Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
Images.allow({
    insert: function(userId, doc){
      return !!userId;
    },
    update: function(userId, doc){
      return !!userId;
    },
    remove: function(userId, doc){
      return false;
   },
   download: function(userId, doc){
      return true;
   }
  });
