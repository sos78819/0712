const useCardShuffle = () =>{
  var tarot = new Array(22);
  for (var i = 1; i <= tarot.length; i++) {
      tarot[i - 1] = i;
  }

  //洗牌
  var tmp = "";
  var t = 0;
  for (var i = 0; i < tarot.length; i++) {
      t = Math.floor((Math.random() * 21) + 1);     
      tmp = tarot[i];    
      tarot[i] = tarot[t];
      tarot[t] = tmp;
  }
  return {tarot}
}

export { useCardShuffle };
