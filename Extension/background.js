var contextMenuItem = {
    "id": "İndir",
    "title" : "merhaba",
  
  };
  chrome.contextMenus.create(contextMenuItem);
  
  chrome.contextMenus.onClicked.addListener(function(clickData){
    alert("Welcome to Kimiko's extension");
    
  
      })