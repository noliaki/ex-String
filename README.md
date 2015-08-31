# ex-String
extend String Object

## 使い方

```javascript
// to Half
'イロハニホヘト！＠＃＆％１２３４５６ＡＢＣＤ'.toHalf();// => 'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ABCD'
'イロハニホヘト！＠＃＆％１２３４５６ＡＢＣＤ'.toHalfNum();// => 'イロハニホヘト！＠＃＆％123456ＡＢＣＤ' | only Number
'イロハニホヘト！＠＃＆％１２３４５６ＡＢＣＤ'.toHalfAlph();// => 'イロハニホヘト！＠＃＆％１２３４５６ABCD' | only AlphabetD
'イロハニホヘト！＠＃＆％１２３４５６ＡＢＣＤ'.toHalfMark();// => 'イロハニホヘト!@#&%１２３４５６ＡＢＣＤ' | only Mark
'イロハニホヘト！＠＃＆％１２３４５６ＡＢＣＤ'.toHalfKana();// => 'ｲﾛﾊﾆﾎﾍﾄ！＠＃＆％１２３４５６ＡＢＣＤ' | only Kana


// to Full
'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ABCD'.toFull();// => 'イロハニホヘト！＠＃＆％１２３４５６ＡＢＣＤ'
'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ABCD'.toFullNum();// => 'ｲﾛﾊﾆﾎﾍﾄ!@#&%１２３４５６ABCD' | only Number
'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ABCD'.toFullAlph();// => 'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ＡＢＣＤ' | only AlphabetD
'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ABCD'.toFullMark();// => 'ｲﾛﾊﾆﾎﾍﾄ！＠＃＆％123456ABCD' | only Mark
'ｲﾛﾊﾆﾎﾍﾄ!@#&%123456ABCD'.toFullKana();// => 'イロハニホヘト!@#&%123456ABCD' | only Kana
```