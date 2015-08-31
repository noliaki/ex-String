;(function(){
  'use strict';

  var SP = String.prototype,
      diff = 0xFEE0,
      halfKana = ['ｶﾞ', 'ｷﾞ', 'ｸﾞ', 'ｹﾞ', 'ｺﾞ', 'ｻﾞ', 'ｼﾞ', 'ｽﾞ', 'ｾﾞ', 'ｿﾞ', 'ﾀﾞ', 'ﾁﾞ', 'ﾂﾞ', 'ﾃﾞ', 'ﾄﾞ', 'ﾊﾞ', 'ﾊﾟ', 'ﾋﾞ', 'ﾋﾟ', 'ﾌﾞ', 'ﾌﾟ', 'ﾍﾞ', 'ﾍﾟ', 'ﾎﾞ', 'ﾎﾟ', 'ｳﾞ', 'ｧ', 'ｱ', 'ｨ', 'ｲ', 'ｩ', 'ｳ', 'ｪ', 'ｴ', 'ｫ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ｯ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ｬ', 'ﾔ', 'ｭ', 'ﾕ', 'ｮ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ｦ', 'ﾝ', '\　'],
      fullKana = ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'パ', 'ビ', 'ピ', 'ブ', 'プ', 'ベ', 'ペ', 'ボ', 'ポ', 'ヴ', 'ァ', 'ア', 'ィ', 'イ', 'ゥ', 'ウ', 'ェ', 'エ', 'ォ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ッ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ャ', 'ヤ', 'ュ', 'ユ', 'ョ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', '\ '],
      halfKanaMap = {},
      fullKanaMap = {},
      halfKanaRegExp = new RegExp(halfKana.join('|'), 'g'),
      fullKanaRegExp = new RegExp(fullKana.join('|'), 'g');


  for(var i = 0, len = fullKana.length; i < len; i ++){
    halfKanaMap[ fullKana[i] ] = halfKana[i];
    fullKanaMap[ halfKana[i] ] = fullKana[i];
  }

  // Number
  SP.toHalfNum = function() {
    return this.replace(/[０-９]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) - diff);
    });
  };

  SP.toFullNum = function() {
    return this.replace(/[0-9]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) + diff);
    });
  };


  // Alphabet
  SP.toHalfAlph = function() {
    return this.replace(/[Ａ-Ｚａ-ｚ]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) - diff);
    });
  };

  SP.toFullAlph = function() {
    return this.replace(/[A-Za-z]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) + diff);
    });
  };

  // Mark
  SP.toHalfMark = function() {
    return this.replace(/[－！＃＄％＆（）＝＜＞，．？＿［］｛｝＠＾～]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) - diff);
    })
    .replace(/　/g, ' ')
    .replace(/｜/g, '|')
    .replace(/｀/g, '`')
    .replace(/’/g, '\'')
    .replace(/”/g, '"');
  };

  SP.toFullMark = function() {
    return this.replace(/[\-!#\$%&\(\)=<>,\.\?_\[\]\{\}@\^~]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) + diff);
    })
    .replace(/ /g, '　')
    .replace(/\|/g, '｜')
    .replace(/`/g, '｀')
    .replace(/\'/g, '’')
    .replace(/"/g, '”');
  };

  // カナ
  SP.toHalfKana = function() {
    return this.replace(fullKanaRegExp, function(match) {
      return halfKanaMap[match];
    });
  };

  SP.toFullKana = function() {
    return this.replace(halfKanaRegExp, function(match) {
      return fullKanaMap[match];
    });
  };

  // 全体
  SP.toHalf = function() {
    return this.toHalfNum().toHalfAlph().toHalfMark().toHalfKana();
  };

  SP.toFull = function() {
    return this.toFullNum().toFullAlph().toFullMark().toFullKana();
  };

})();