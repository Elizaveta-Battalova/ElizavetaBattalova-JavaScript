function THashStorage(obj){
    let self=this;
    self.length = 0;
    self.items = {};
    for (let i in obj) {
          if (obj.hasOwnProperty(i)) {
              self.items[i] = obj[i];
              self.length++;
          }
      }
    self.addValue = function(key, value){   
          self.length++;
          self.items[key] = value;
    }
   self.getValue = function(key) {
          return self.hasItem(key) ?   self.items[key] : "Добавьте способ приготовления";
      }
     self.hasItem = function(key)
      {
          return self.items.hasOwnProperty(key);
      }
    self.DeleteValue = function(key)
      {
          if (self.hasItem(key)) {
              this.length--;
              delete self.items[key];
          }
      }
    self.getKeys = function()
      {
          let keys = [];
          for (let i in self.items) {
              if (self.hasItem(i)) {
                  keys.push(i+'<br/>');
              }
          }
          return keys;
      }
  }
  var result = "";
  var head = document.getElementById('head');
  var text = document.getElementById('text');
  var addButton = document.getElementById('add');
  addButton.onclick = function(){
    var name = prompt('Название напитка:');
    var recipe  = prompt('Способ приготовления:');
    DrinkStorage.addValue(name, recipe);
    result="Добавлено успешно!";
    head.innerHTML = "";
    text.innerHTML = result;
  }
  var showOneButton = document.getElementById('one');
   showOneButton.onclick = function(){ 
    var y = prompt('Рецепт какого напитка вы хотете узнать?');
    head.innerHTML = "Here we go: <br/>";
    text.innerHTML = DrinkStorage.getValue(y);
  }
  var showAllButton = document.getElementById('all');
  showAllButton.onclick = function() {
     head.innerHTML = "Список напитков: <br/>";
     text.innerHTML = DrinkStorage.getKeys();
    }
  var delButton = document.getElementById('del');
  delButton.onclick = function() {
    var y = prompt('Рецепт какого напитка вы хотите удалить?');
    DrinkStorage.DeleteValue(y);
    result = "Удалено!";
    head.innerHTML = "";
    text.innerHTML = result;
  }