const FIRST_DATA = [
  {lesson:"047", hanzi:"你好", pinyin:"nǐ hǎo", meaning:"こんにちは"},
  {lesson:"047", hanzi:"你", pinyin:"nǐ", meaning:"あなた、君"},
  {lesson:"047", hanzi:"是", pinyin:"shì", meaning:"〜だ、〜である"},
  {lesson:"047", hanzi:"留学生", pinyin:"liúxuéshēng", meaning:"留学生"},
  {lesson:"047", hanzi:"吗", pinyin:"ma", meaning:"〜ですか、〜しますか"},
  {lesson:"047", hanzi:"我", pinyin:"wǒ", meaning:"私"},
  {lesson:"047", hanzi:"不", pinyin:"bù", meaning:"〜しない、〜ではない"},
  {lesson:"047", hanzi:"中国人", pinyin:"Zhōngguórén", meaning:"中国人"},
  {lesson:"047", hanzi:"叫", pinyin:"jiào", meaning:"名前は〜という"},
  {lesson:"047", hanzi:"什么", pinyin:"shénme", meaning:"なに、どんな"},
  {lesson:"047", hanzi:"名字", pinyin:"míngzi", meaning:"名前"},
  {lesson:"047", hanzi:"日本人", pinyin:"Rìběnrén", meaning:"日本人"},
  {lesson:"047", hanzi:"学", pinyin:"xué", meaning:"学ぶ、勉強する"},
  {lesson:"047", hanzi:"汉语", pinyin:"Hànyǔ", meaning:"中国語"},
  {lesson:"047", hanzi:"对", pinyin:"duì", meaning:"正しい、その通り"},
  {lesson:"047", hanzi:"法律", pinyin:"fǎlǜ", meaning:"法律"},
  {lesson:"047", hanzi:"去", pinyin:"qù", meaning:"行く"},
  {lesson:"047", hanzi:"教室", pinyin:"jiàoshì", meaning:"教室"},
  {lesson:"047", hanzi:"再见", pinyin:"zàijiàn", meaning:"さようなら"},
  {lesson:"048", hanzi:"我们", pinyin:"wǒmen", meaning:"私たち"},
  {lesson:"048", hanzi:"咱们", pinyin:"zánmen", meaning:"私たち（聞き手を含む）"},
  {lesson:"048", hanzi:"您", pinyin:"nín", meaning:"あなた（敬称）"},
  {lesson:"048", hanzi:"你们", pinyin:"nǐmen", meaning:"あなたたち、君たち"},
  {lesson:"048", hanzi:"他", pinyin:"tā", meaning:"彼"},
  {lesson:"048", hanzi:"她", pinyin:"tā", meaning:"彼女"},
  {lesson:"048", hanzi:"它", pinyin:"tā", meaning:"それ、あれ"},
  {lesson:"048", hanzi:"他们", pinyin:"tāmen", meaning:"彼ら"},
  {lesson:"048", hanzi:"她们", pinyin:"tāmen", meaning:"彼女たち"},
  {lesson:"048", hanzi:"美国人", pinyin:"Měiguórén", meaning:"アメリカ人"},
  {lesson:"048", hanzi:"老师", pinyin:"lǎoshī", meaning:"先生"},
  {lesson:"048", hanzi:"吃", pinyin:"chī", meaning:"食べる"},
  {lesson:"048", hanzi:"中国菜", pinyin:"Zhōngguócài", meaning:"中華料理"},
  {lesson:"048", hanzi:"喝", pinyin:"hē", meaning:"飲む"},
  {lesson:"048", hanzi:"咖啡", pinyin:"kāfēi", meaning:"コーヒー"},
  {lesson:"048", hanzi:"买", pinyin:"mǎi", meaning:"買う"},
  {lesson:"048", hanzi:"手表", pinyin:"shǒubiǎo", meaning:"腕時計"},
  {lesson:"048", hanzi:"北京", pinyin:"Běijīng", meaning:"北京"},
  {lesson:"048", hanzi:"英语", pinyin:"Yīngyǔ", meaning:"英語"},
  {lesson:"055", hanzi:"欸", pinyin:"éi", meaning:"あれ、おや"},
  {lesson:"055", hanzi:"这", pinyin:"zhè", meaning:"これ、この"},
  {lesson:"055", hanzi:"家里人", pinyin:"jiālǐrén", meaning:"家族"},
  {lesson:"055", hanzi:"的", pinyin:"de", meaning:"〜の"},
  {lesson:"055", hanzi:"照片", pinyin:"zhàopiàn", meaning:"写真"},
  {lesson:"055", hanzi:"啊", pinyin:"a", meaning:"〜ですよ、〜ですね"},
  {lesson:"055", hanzi:"爸爸", pinyin:"bàba", meaning:"お父さん"},
  {lesson:"055", hanzi:"银行", pinyin:"yínháng", meaning:"銀行"},
  {lesson:"055", hanzi:"职员", pinyin:"zhíyuán", meaning:"職員"},
  {lesson:"055", hanzi:"妈妈", pinyin:"māma", meaning:"お母さん"},
  {lesson:"055", hanzi:"呢", pinyin:"ne", meaning:"〜は？"},
  {lesson:"055", hanzi:"姐姐", pinyin:"jiějie", meaning:"お姉さん"},
  {lesson:"055", hanzi:"哦", pinyin:"ò", meaning:"ああ"},
  {lesson:"055", hanzi:"哪儿", pinyin:"nǎr", meaning:"どこ"},
  {lesson:"055", hanzi:"人", pinyin:"rén", meaning:"人"},
  {lesson:"055", hanzi:"北京人", pinyin:"Běijīngrén", meaning:"北京出身の人"},
  {lesson:"055", hanzi:"大学", pinyin:"dàxué", meaning:"大学"},
  {lesson:"055", hanzi:"也", pinyin:"yě", meaning:"〜も、〜もまた"},
  {lesson:"055", hanzi:"大学生", pinyin:"dàxuéshēng", meaning:"大学生"},
  {lesson:"055", hanzi:"都", pinyin:"dōu", meaning:"いずれも、全部"},
  {lesson:"055", hanzi:"学习", pinyin:"xuéxí", meaning:"勉強する"},
  {lesson:"056", hanzi:"这个", pinyin:"zhège / zhèige", meaning:"これ、この"},
  {lesson:"056", hanzi:"那", pinyin:"nà", meaning:"あれ、あの"},
  {lesson:"056", hanzi:"那个", pinyin:"nàge / nèige", meaning:"あれ、あの"},
  {lesson:"056", hanzi:"哪", pinyin:"nǎ", meaning:"どれ、どの"},
  {lesson:"056", hanzi:"哪个", pinyin:"nǎge / něige", meaning:"どれ、どの"},
  {lesson:"056", hanzi:"这些", pinyin:"zhèxie / zhèixie", meaning:"これら"},
  {lesson:"056", hanzi:"那些", pinyin:"nàxie / nèixie", meaning:"あれら"},
  {lesson:"056", hanzi:"哪些", pinyin:"nǎxie / něixie", meaning:"どれ、どの（複数）"},
  {lesson:"056", hanzi:"这里", pinyin:"zhèli", meaning:"ここ"},
  {lesson:"056", hanzi:"这儿", pinyin:"zhèr", meaning:"ここ"},
  {lesson:"056", hanzi:"那里", pinyin:"nàli", meaning:"あそこ"},
  {lesson:"056", hanzi:"那儿", pinyin:"nàr", meaning:"あそこ"},
  {lesson:"056", hanzi:"哪里", pinyin:"nǎli", meaning:"どこ"},
  {lesson:"056", hanzi:"书", pinyin:"shū", meaning:"本"},
  {lesson:"056", hanzi:"学校", pinyin:"xuéxiào", meaning:"学校"},
  {lesson:"056", hanzi:"电脑", pinyin:"diànnǎo", meaning:"コンピューター"},
  {lesson:"056", hanzi:"哥哥", pinyin:"gēge", meaning:"お兄さん"},
  {lesson:"056", hanzi:"公司", pinyin:"gōngsī", meaning:"会社"},
  {lesson:"056", hanzi:"中国", pinyin:"Zhōngguó", meaning:"中国"},
  {lesson:"056", hanzi:"美国", pinyin:"Měiguó", meaning:"アメリカ"},
  {lesson:"056", hanzi:"年级", pinyin:"niánjí", meaning:"〜年生"},
  {lesson:"056", hanzi:"学生", pinyin:"xuésheng", meaning:"学生"},
  {lesson:"056", hanzi:"词典", pinyin:"cídiǎn", meaning:"辞書"},
  {lesson:"063", hanzi:"谁", pinyin:"shéi", meaning:"だれ"},
  {lesson:"063", hanzi:"手机", pinyin:"shǒujī", meaning:"携帯電話、スマートフォン"},
  {lesson:"063", hanzi:"谢谢", pinyin:"xièxie", meaning:"ありがとう"},
  {lesson:"063", hanzi:"不客气", pinyin:"bú kèqi", meaning:"どういたしまして"},
  {lesson:"063", hanzi:"班", pinyin:"bān", meaning:"クラス"},
  {lesson:"063", hanzi:"认识", pinyin:"rènshi", meaning:"知り合う、知っている"},
  {lesson:"063", hanzi:"很", pinyin:"hěn", meaning:"とても"},
  {lesson:"063", hanzi:"高兴", pinyin:"gāoxìng", meaning:"うれしい"},
  {lesson:"063", hanzi:"有", pinyin:"yǒu", meaning:"持っている、いる、ある"},
  {lesson:"063", hanzi:"微信", pinyin:"Wēixìn", meaning:"WeChat"},
  {lesson:"063", hanzi:"怎么", pinyin:"zěnme", meaning:"どのように"},
  {lesson:"063", hanzi:"用", pinyin:"yòng", meaning:"使う"},
  {lesson:"063", hanzi:"app", pinyin:"ēipīpī", meaning:"アプリ"},
  {lesson:"063", hanzi:"非常", pinyin:"fēicháng", meaning:"とても、非常に"},
  {lesson:"063", hanzi:"方便", pinyin:"fāngbiàn", meaning:"便利だ"},
  {lesson:"064", hanzi:"同学", pinyin:"tóngxué", meaning:"学生、同級生"},
  {lesson:"064", hanzi:"面包", pinyin:"miànbāo", meaning:"パン"},
  {lesson:"064", hanzi:"什么时候", pinyin:"shénme shíhou", meaning:"いつ"},
  {lesson:"064", hanzi:"来", pinyin:"lái", meaning:"来る"},
  {lesson:"064", hanzi:"明天", pinyin:"míngtiān", meaning:"明日"},
  {lesson:"064", hanzi:"要", pinyin:"yào", meaning:"欲しい"},
  {lesson:"064", hanzi:"字", pinyin:"zì", meaning:"字"},
  {lesson:"064", hanzi:"念", pinyin:"niàn", meaning:"発音する、音読する"},
  {lesson:"064", hanzi:"智能手机", pinyin:"zhìnéng shǒujī", meaning:"スマートフォン"},
  {lesson:"064", hanzi:"没 / 没有", pinyin:"méi / méiyǒu", meaning:"持っていない、ない"},
  {lesson:"064", hanzi:"打印机", pinyin:"dǎyìnjī", meaning:"プリンター"},
  {lesson:"064", hanzi:"朋友", pinyin:"péngyou", meaning:"友だち"},
  {lesson:"064", hanzi:"校园", pinyin:"xiàoyuán", meaning:"キャンパス"},
  {lesson:"064", hanzi:"大", pinyin:"dà", meaning:"大きい"},
  {lesson:"064", hanzi:"北京烤鸭", pinyin:"Běijīng kǎoyā", meaning:"北京ダック"},
  {lesson:"064", hanzi:"好吃", pinyin:"hǎochī", meaning:"おいしい"},
  {lesson:"064", hanzi:"难", pinyin:"nán", meaning:"難しい"},
  {lesson:"064", hanzi:"忙", pinyin:"máng", meaning:"忙しい"},
  {lesson:"064", hanzi:"特别", pinyin:"tèbié", meaning:"とりわけ、特に"},
  {lesson:"064", hanzi:"比较", pinyin:"bǐjiào", meaning:"わりと、比較的"},
  {lesson:"064", hanzi:"北方", pinyin:"běifāng", meaning:"北方"},
  {lesson:"064", hanzi:"凉快", pinyin:"liángkuai", meaning:"涼しい"},
  {lesson:"064", hanzi:"南方", pinyin:"nánfāng", meaning:"南方"},
  {lesson:"064", hanzi:"暖和", pinyin:"nuǎnhuo", meaning:"暖かい"},
  {lesson:"072", hanzi:"做", pinyin:"zuò", meaning:"作る"},
  {lesson:"072", hanzi:"不错", pinyin:"búcuò", meaning:"なかなか良い、悪くない"},
  {lesson:"072", hanzi:"辣", pinyin:"là", meaning:"辛い"},
  {lesson:"072", hanzi:"怕", pinyin:"pà", meaning:"苦手である"},
  {lesson:"072", hanzi:"没问题", pinyin:"méi wèntí", meaning:"大丈夫だ"},
  {lesson:"072", hanzi:"不太", pinyin:"bú tài", meaning:"あまり〜ではない"},
  {lesson:"072", hanzi:"那", pinyin:"nà", meaning:"それでは"},
  {lesson:"072", hanzi:"吧", pinyin:"ba", meaning:"〜しよう、〜でしょう"},
  {lesson:"072", hanzi:"主食", pinyin:"zhǔshí", meaning:"主食"},
  {lesson:"072", hanzi:"米饭", pinyin:"mǐfàn", meaning:"ライス、ご飯"},
  {lesson:"072", hanzi:"还是", pinyin:"háishi", meaning:"〜かそれとも〜か"},
  {lesson:"072", hanzi:"饺子", pinyin:"jiǎozi", meaning:"餃子"},
  {lesson:"072", hanzi:"服务员", pinyin:"fúwùyuán", meaning:"店員、従業員"},
  {lesson:"072", hanzi:"点菜", pinyin:"diǎncài", meaning:"料理を注文する"},
  {lesson:"072", hanzi:"请客", pinyin:"qǐngkè", meaning:"おごる、ごちそうする"},
  {lesson:"072", hanzi:"买单", pinyin:"mǎidān", meaning:"勘定する"},
  {lesson:"072", hanzi:"好的", pinyin:"hǎo de", meaning:"分かりました"},
  {lesson:"072", hanzi:"一共", pinyin:"yígòng", meaning:"全部で"},
  {lesson:"072", hanzi:"两", pinyin:"liǎng", meaning:"2、2つ"},
  {lesson:"072", hanzi:"百", pinyin:"bǎi", meaning:"百"},
  {lesson:"072", hanzi:"零", pinyin:"líng", meaning:"ゼロ"},
  {lesson:"072", hanzi:"块", pinyin:"kuài", meaning:"〜元"},
  {lesson:"073", hanzi:"书包", pinyin:"shūbāo", meaning:"かばん"},
  {lesson:"073", hanzi:"初中生", pinyin:"chūzhōngshēng", meaning:"中学生"},
  {lesson:"073", hanzi:"高中生", pinyin:"gāozhōngshēng", meaning:"高校生"},
  {lesson:"073", hanzi:"牛奶", pinyin:"niúnǎi", meaning:"牛乳"},
  {lesson:"073", hanzi:"乌龙茶", pinyin:"wūlóngchá", meaning:"ウーロン茶"},
  {lesson:"073", hanzi:"千", pinyin:"qiān", meaning:"千"},
  {lesson:"073", hanzi:"万", pinyin:"wàn", meaning:"万"},
  {lesson:"073", hanzi:"亿", pinyin:"yì", meaning:"億"},
  {lesson:"073", hanzi:"多", pinyin:"duō", meaning:"多い"},
  {lesson:"073", hanzi:"就", pinyin:"jiù", meaning:"ほかならぬ"},
  {lesson:"073", hanzi:"最", pinyin:"zuì", meaning:"最も"},
  {lesson:"073", hanzi:"好", pinyin:"hǎo", meaning:"よい"}
];

const SECOND_DATA = [
  {lesson:"081", hanzi:"请问", pinyin:"qǐngwèn", meaning:"おたずねしますが〜"},
  {lesson:"081", hanzi:"蜘蛛侠", pinyin:"Zhīzhūxiá", meaning:"スパイダーマン", quiz:false},
  {lesson:"081", hanzi:"票", pinyin:"piào", meaning:"チケット"},
  {lesson:"081", hanzi:"多少钱", pinyin:"duōshao qián", meaning:"いくら（値段）"},
  {lesson:"081", hanzi:"张", pinyin:"zhāng", meaning:"〜枚"},
  {lesson:"081", hanzi:"售票员", pinyin:"shòupiàoyuán", meaning:"チケット・切符の販売員"},
  {lesson:"081", hanzi:"几", pinyin:"jǐ", meaning:"いくつ"},
  {lesson:"081", hanzi:"座位", pinyin:"zuòwèi", meaning:"座席"},
  {lesson:"081", hanzi:"中间", pinyin:"zhōngjiān", meaning:"真ん中"},
  {lesson:"081", hanzi:"爆米花", pinyin:"bàomǐhuā", meaning:"ポップコーン"},
  {lesson:"081", hanzi:"和", pinyin:"hé", meaning:"〜と"},
  {lesson:"081", hanzi:"可乐", pinyin:"kělè", meaning:"コーラ"},

  {lesson:"082", hanzi:"看", pinyin:"kàn", meaning:"見る、読む"},
  {lesson:"082", hanzi:"电影", pinyin:"diànyǐng", meaning:"映画"},
  {lesson:"082", hanzi:"刘", pinyin:"Liú", meaning:"劉（姓）"},
  {lesson:"082", hanzi:"坐", pinyin:"zuò", meaning:"座る、乗る"},
  {lesson:"082", hanzi:"公共汽车", pinyin:"gōnggòng qìchē", meaning:"バス"},
  {lesson:"082", hanzi:"上班", pinyin:"shàngbān", meaning:"出勤する"},
  {lesson:"082", hanzi:"个", pinyin:"ge", meaning:"〜個、〜人"},
  {lesson:"082", hanzi:"位", pinyin:"wèi", meaning:"〜名（人を数える）"},
  {lesson:"082", hanzi:"客人", pinyin:"kèrén", meaning:"来客"},
  {lesson:"082", hanzi:"本", pinyin:"běn", meaning:"〜冊"},
  {lesson:"082", hanzi:"纸", pinyin:"zhǐ", meaning:"紙"},
  {lesson:"082", hanzi:"床", pinyin:"chuáng", meaning:"ベッド"},
  {lesson:"082", hanzi:"条", pinyin:"tiáo", meaning:"〜本（細長いもの）"},
  {lesson:"082", hanzi:"鱼", pinyin:"yú", meaning:"魚"},
  {lesson:"082", hanzi:"裤子", pinyin:"kùzi", meaning:"ズボン"},
  {lesson:"082", hanzi:"件", pinyin:"jiàn", meaning:"衣服や事柄を数える"},
  {lesson:"082", hanzi:"衣服", pinyin:"yīfu", meaning:"服"},
  {lesson:"082", hanzi:"事", pinyin:"shì", meaning:"事、用事"},
  {lesson:"082", hanzi:"把", pinyin:"bǎ", meaning:"取っ手のあるものを数える"},
  {lesson:"082", hanzi:"椅子", pinyin:"yǐzi", meaning:"椅子"},
  {lesson:"082", hanzi:"雨伞", pinyin:"yǔsǎn", meaning:"雨傘"},
  {lesson:"082", hanzi:"欢迎光临", pinyin:"huānyíng guānglín", meaning:"いらっしゃいませ"},
  {lesson:"082", hanzi:"多少", pinyin:"duōshao", meaning:"いくつ、どのくらい"},
  {lesson:"082", hanzi:"毛衣", pinyin:"máoyī", meaning:"セーター"},
  {lesson:"082", hanzi:"小朋友", pinyin:"xiǎopéngyou", meaning:"坊や、お嬢ちゃん"},
  {lesson:"082", hanzi:"岁", pinyin:"suì", meaning:"〜歳"},
  {lesson:"082", hanzi:"今年", pinyin:"jīnnián", meaning:"今年"},
  {lesson:"082", hanzi:"多大", pinyin:"duō dà", meaning:"何歳？"},

  {lesson:"089", hanzi:"李一诚", pinyin:"Lǐ Yīchéng", meaning:"人名", quiz:false},
  {lesson:"089", hanzi:"规模", pinyin:"guīmó", meaning:"規模"},
  {lesson:"089", hanzi:"真", pinyin:"zhēn", meaning:"本当に、実に"},
  {lesson:"089", hanzi:"有", pinyin:"yǒu", meaning:"ある、いる"},
  {lesson:"089", hanzi:"栋", pinyin:"dòng", meaning:"〜棟"},
  {lesson:"089", hanzi:"教学楼", pinyin:"jiàoxuélóu", meaning:"教室棟、校舎"},
  {lesson:"089", hanzi:"第", pinyin:"dì", meaning:"第、〜番目"},
  {lesson:"089", hanzi:"广冈莉子", pinyin:"Guǎnggāng Lìzǐ", meaning:"人名", quiz:false},
  {lesson:"089", hanzi:"你看", pinyin:"nǐ kàn", meaning:"ほら、見て"},
  {lesson:"089", hanzi:"旁边（儿）", pinyin:"pángbiān(r)", meaning:"横、隣"},
  {lesson:"089", hanzi:"图书馆", pinyin:"túshūguǎn", meaning:"図書館"},
  {lesson:"089", hanzi:"后边（儿）", pinyin:"hòubian(r)", meaning:"後ろ、後ろの方"},
  {lesson:"089", hanzi:"车站", pinyin:"chēzhàn", meaning:"駅、バス停"},
  {lesson:"089", hanzi:"听说", pinyin:"tīngshuō", meaning:"聞くところによると"},
  {lesson:"089", hanzi:"日本", pinyin:"Rìběn", meaning:"日本"},
  {lesson:"089", hanzi:"一般", pinyin:"yìbān", meaning:"普通は、一般的には"},
  {lesson:"089", hanzi:"住", pinyin:"zhù", meaning:"住む"},
  {lesson:"089", hanzi:"里面（儿）", pinyin:"lǐmiàn(r)", meaning:"中、内側"},
  {lesson:"089", hanzi:"是吗", pinyin:"shì ma", meaning:"そうなんですか"},
  {lesson:"089", hanzi:"欸", pinyin:"éi", meaning:"ねえ、あれ"},
  {lesson:"089", hanzi:"一起", pinyin:"yìqǐ", meaning:"一緒に"},
  {lesson:"089", hanzi:"食堂", pinyin:"shítáng", meaning:"食堂"},
  {lesson:"089", hanzi:"吃饭", pinyin:"chīfàn", meaning:"食事をする"},
  {lesson:"089", hanzi:"怎么样", pinyin:"zěnmeyàng", meaning:"どうですか？"},
  {lesson:"089", hanzi:"好", pinyin:"hǎo", meaning:"はい、よし"},
  {lesson:"089", hanzi:"在", pinyin:"zài", meaning:"ある、いる"},
  {lesson:"089", hanzi:"这边（儿）", pinyin:"zhèbian(r) / zhèibian(r)", meaning:"こっち"},
  {lesson:"089", hanzi:"来", pinyin:"lái", meaning:"〜しよう"},

  {lesson:"090", hanzi:"姥姥", pinyin:"lǎolao", meaning:"母方の祖母"},
  {lesson:"090", hanzi:"身体", pinyin:"shēntǐ", meaning:"身体、健康・具合"},
  {lesson:"090", hanzi:"重庆", pinyin:"Chóngqìng", meaning:"重慶"},
  {lesson:"090", hanzi:"夏天", pinyin:"xiàtiān", meaning:"夏"},
  {lesson:"090", hanzi:"热", pinyin:"rè", meaning:"暑い、熱い"},
  {lesson:"090", hanzi:"学习", pinyin:"xuéxí", meaning:"勉強"},
  {lesson:"090", hanzi:"认真", pinyin:"rènzhēn", meaning:"真面目だ"},
  {lesson:"090", hanzi:"上边（儿）", pinyin:"shàngbian(r)", meaning:"上、上の方"},
  {lesson:"090", hanzi:"上面（儿）", pinyin:"shàngmiàn(r)", meaning:"上、上の方"},
  {lesson:"090", hanzi:"下边（儿）", pinyin:"xiàbian(r)", meaning:"下、下の方"},
  {lesson:"090", hanzi:"下面（儿）", pinyin:"xiàmiàn(r)", meaning:"下、下の方"},
  {lesson:"090", hanzi:"前边（儿）", pinyin:"qiánbian(r)", meaning:"前、先、前方"},
  {lesson:"090", hanzi:"前面（儿）", pinyin:"qiánmiàn(r)", meaning:"前、先、前方"},
  {lesson:"090", hanzi:"后面（儿）", pinyin:"hòumiàn(r)", meaning:"後ろ、後方"},
  {lesson:"090", hanzi:"左边（儿）", pinyin:"zuǒbian(r)", meaning:"左の方、左側"},
  {lesson:"090", hanzi:"左面（儿）", pinyin:"zuǒmiàn(r)", meaning:"左の方、左側"},
  {lesson:"090", hanzi:"右边（儿）", pinyin:"yòubian(r)", meaning:"右の方、右側"},
  {lesson:"090", hanzi:"右面（儿）", pinyin:"yòumiàn(r)", meaning:"右の方、右側"},
  {lesson:"090", hanzi:"里边（儿）", pinyin:"lǐbian(r)", meaning:"中、内側"},
  {lesson:"090", hanzi:"外边（儿）", pinyin:"wàibian(r)", meaning:"外、外側"},
  {lesson:"090", hanzi:"外面（儿）", pinyin:"wàimiàn(r)", meaning:"外、外側"},
  {lesson:"090", hanzi:"东边（儿）", pinyin:"dōngbian(r)", meaning:"東、東の方、東側"},
  {lesson:"090", hanzi:"东面（儿）", pinyin:"dōngmiàn(r)", meaning:"東、東の方、東側"},
  {lesson:"090", hanzi:"南边（儿）", pinyin:"nánbian(r)", meaning:"南、南の方、南側"},
  {lesson:"090", hanzi:"南面（儿）", pinyin:"nánmiàn(r)", meaning:"南、南の方、南側"},
  {lesson:"090", hanzi:"西边（儿）", pinyin:"xībian(r)", meaning:"西、西の方、西側"},
  {lesson:"090", hanzi:"西面（儿）", pinyin:"xīmiàn(r)", meaning:"西、西の方、西側"},
  {lesson:"090", hanzi:"北边（儿）", pinyin:"běibian(r)", meaning:"北、北の方、北側"},
  {lesson:"090", hanzi:"北面（儿）", pinyin:"běimiàn(r)", meaning:"北、北の方、北側"},
  {lesson:"090", hanzi:"对面（儿）", pinyin:"duìmiàn(r)", meaning:"向かい側"},
  {lesson:"090", hanzi:"桌子", pinyin:"zhuōzi", meaning:"机、テーブル"},
  {lesson:"090", hanzi:"上", pinyin:"shang", meaning:"上、上の方"},
  {lesson:"090", hanzi:"白板", pinyin:"báibǎn", meaning:"ホワイトボード"},
  {lesson:"090", hanzi:"里", pinyin:"li", meaning:"中、内側"},
  {lesson:"090", hanzi:"笔记本", pinyin:"bǐjìběn", meaning:"ノート"},
  {lesson:"090", hanzi:"赵", pinyin:"Zhào", meaning:"趙（姓）"},
  {lesson:"090", hanzi:"办公室", pinyin:"bàngōngshì", meaning:"事務室、オフィス"},
  {lesson:"090", hanzi:"知道", pinyin:"zhīdào", meaning:"知る、分かる"},
  {lesson:"090", hanzi:"对不起", pinyin:"duìbuqǐ", meaning:"ごめんなさい"},
  {lesson:"090", hanzi:"家", pinyin:"jiā", meaning:"家"},
  {lesson:"090", hanzi:"公园", pinyin:"gōngyuán", meaning:"公園"},
  {lesson:"090", hanzi:"便利店", pinyin:"biànlìdiàn", meaning:"コンビニエンスストア"},

  {lesson:"101", hanzi:"刘敏", pinyin:"Liú Mǐn", meaning:"人名", quiz:false},
  {lesson:"101", hanzi:"现在", pinyin:"xiànzài", meaning:"いま、現在"},
  {lesson:"101", hanzi:"点", pinyin:"diǎn", meaning:"〜時"},
  {lesson:"101", hanzi:"竹内和也", pinyin:"Zhúnèi Héyě", meaning:"人名", quiz:false},
  {lesson:"101", hanzi:"半", pinyin:"bàn", meaning:"〜半、30分"},
  {lesson:"101", hanzi:"今天", pinyin:"jīntiān", meaning:"今日"},
  {lesson:"101", hanzi:"晚上", pinyin:"wǎnshang", meaning:"夜"},
  {lesson:"101", hanzi:"做", pinyin:"zuò", meaning:"する、行う"},
  {lesson:"101", hanzi:"在", pinyin:"zài", meaning:"〜で"},
  {lesson:"101", hanzi:"每天", pinyin:"měi tiān", meaning:"毎日"},
  {lesson:"101", hanzi:"小时", pinyin:"xiǎoshí", meaning:"〜時間"},
  {lesson:"101", hanzi:"大概", pinyin:"dàgài", meaning:"だいたい"},
  {lesson:"101", hanzi:"跟", pinyin:"gēn", meaning:"〜と"},
  {lesson:"101", hanzi:"给", pinyin:"gěi", meaning:"〜に"},
  {lesson:"101", hanzi:"打电话", pinyin:"dǎ diànhuà", meaning:"電話をする"},

  {lesson:"102", hanzi:"横滨", pinyin:"Héngbīn", meaning:"横浜"},
  {lesson:"102", hanzi:"工作", pinyin:"gōngzuò", meaning:"働く"},
  {lesson:"102", hanzi:"大衣", pinyin:"dàyī", meaning:"コート"},
  {lesson:"102", hanzi:"孩子", pinyin:"háizi", meaning:"子供"},
  {lesson:"102", hanzi:"们", pinyin:"men", meaning:"〜たち"},
  {lesson:"102", hanzi:"奥林匹克", pinyin:"Àolínpǐkè", meaning:"オリンピック"},
  {lesson:"102", hanzi:"前天", pinyin:"qiántiān", meaning:"おととい"},
  {lesson:"102", hanzi:"昨天", pinyin:"zuótiān", meaning:"きのう"},
  {lesson:"102", hanzi:"后天", pinyin:"hòutiān", meaning:"あさって"},
  {lesson:"102", hanzi:"前年", pinyin:"qiánnián", meaning:"おととし"},
  {lesson:"102", hanzi:"去年", pinyin:"qùnián", meaning:"去年"},
  {lesson:"102", hanzi:"明年", pinyin:"míngnián", meaning:"来年"},
  {lesson:"102", hanzi:"后年", pinyin:"hòunián", meaning:"再来年"},
  {lesson:"102", hanzi:"分", pinyin:"fēn", meaning:"〜分"},
  {lesson:"102", hanzi:"刻", pinyin:"kè", meaning:"15分"},
  {lesson:"102", hanzi:"早上", pinyin:"zǎoshang", meaning:"朝"},
  {lesson:"102", hanzi:"上午", pinyin:"shàngwǔ", meaning:"午前"},
  {lesson:"102", hanzi:"中午", pinyin:"zhōngwǔ", meaning:"昼"},
  {lesson:"102", hanzi:"下午", pinyin:"xiàwǔ", meaning:"午後"},
  {lesson:"102", hanzi:"月", pinyin:"yuè", meaning:"〜月、〜ヶ月"},
  {lesson:"102", hanzi:"号", pinyin:"hào", meaning:"〜日"},
  {lesson:"102", hanzi:"生日", pinyin:"shēngrì", meaning:"誕生日"},
  {lesson:"102", hanzi:"星期", pinyin:"xīngqī", meaning:"〜曜日、週、〜週間"},
  {lesson:"102", hanzi:"星期天", pinyin:"xīngqītiān", meaning:"日曜日"},
  {lesson:"102", hanzi:"上个", pinyin:"shàng ge", meaning:"先〜、前の〜"},
  {lesson:"102", hanzi:"下个", pinyin:"xià ge", meaning:"来〜、次の〜"},
  {lesson:"102", hanzi:"玩儿", pinyin:"wánr", meaning:"遊ぶ"},
  {lesson:"102", hanzi:"发", pinyin:"fā", meaning:"送る"},
  {lesson:"102", hanzi:"为什么", pinyin:"wèi shénme", meaning:"なぜ、どうして"},
  {lesson:"102", hanzi:"礼拜", pinyin:"lǐbài", meaning:"〜曜日、週、〜週間"},
  {lesson:"102", hanzi:"周", pinyin:"zhōu", meaning:"〜曜日、週、〜週間"},
  {lesson:"102", hanzi:"天", pinyin:"tiān", meaning:"〜日間"},
  {lesson:"102", hanzi:"年", pinyin:"nián", meaning:"〜年、〜年間"},
  {lesson:"102", hanzi:"分钟", pinyin:"fēnzhōng", meaning:"〜分間"},
  {lesson:"102", hanzi:"电视", pinyin:"diànshì", meaning:"テレビ"},
  {lesson:"102", hanzi:"多长时间", pinyin:"duō cháng shíjiān", meaning:"どれだけの時間"}
];

const DATA = [
  ...FIRST_DATA.map(word => ({ ...word, exam: "first" })),
  ...SECOND_DATA.map(word => ({ ...word, exam: "second" }))
];

const AUDIO_SKIPS = [
  { lesson: "081", beforeHanzi: "请问", count: 1 },
  { lesson: "089", beforeHanzi: "李一诚", count: 1 },
  { lesson: "101", beforeHanzi: "刘敏", count: 1 },
  { lesson: "047", beforeHanzi: "你好", count: 2 },
  { lesson: "064", beforeHanzi: "同学", count: 1 },
  { lesson: "072", beforeHanzi: "做", count: 1 },
  { lesson: "072", beforeHanzi: "不错", count: 2 },
  { lesson: "072", beforeHanzi: "辣", count: 1 }
];

const AUDIO_SPANS = {
  "056:这个:zhège / zhèige": 2,
  "056:那个:nàge / nèige": 2,
  "056:哪个:nǎge / něige": 2,
  "056:这些:zhèxie / zhèixie": 2,
  "056:那些:nàxie / nèixie": 2,
  "056:哪些:nǎxie / něixie": 2,
  "064:没 / 没有:méi / méiyǒu": 2,
  "089:这边（儿）:zhèbian(r) / zhèibian(r)": 2
};

const AUDIO_RANGE_OFFSETS = [
  { lesson: "047", fromHanzi: "我", toHanzi: "去", offset: 1 },
  { lesson: "055", fromHanzi: "这", toHanzi: "这", offset: 1 },
  { lesson: "055", fromHanzi: "照片", toHanzi: "照片", offset: 1 },
  { lesson: "055", fromHanzi: "这", toHanzi: "哪儿", offset: -1 },
  { lesson: "055", fromHanzi: "欸", toHanzi: "北京人", offset: 2 },
  { lesson: "055", fromHanzi: "人", toHanzi: "北京人", offset: -2 },
  { lesson: "063", fromHanzi: "谁", toHanzi: "手机", offset: 2 },
  { lesson: "063", fromHanzi: "谢谢", toHanzi: "班", offset: 3 },
  { lesson: "063", fromHanzi: "认识", toHanzi: "高兴", offset: 3 },
  { lesson: "063", fromHanzi: "认识", toHanzi: "认识", offset: -1 },
  { lesson: "063", fromHanzi: "很", toHanzi: "高兴", offset: -2 },
  { lesson: "063", fromHanzi: "有", toHanzi: "有", offset: 1 },
  { lesson: "063", fromHanzi: "微信", toHanzi: "用", offset: 1 },
  { lesson: "063", fromHanzi: "用", toHanzi: "用", offset: -1 },
  { lesson: "072", fromHanzi: "做", toHanzi: "做", offset: 1 },
  { lesson: "072", fromHanzi: "没问题", toHanzi: "主食", offset: 1 },
  { lesson: "072", fromHanzi: "不错", toHanzi: "怕", offset: -1 },
  { lesson: "072", fromHanzi: "没问题", toHanzi: "没问题", offset: -2 },
  { lesson: "072", fromHanzi: "不太", toHanzi: "吧", offset: -4 },
  { lesson: "072", fromHanzi: "主食", toHanzi: "块", offset: 1 },
  { lesson: "072", fromHanzi: "米饭", toHanzi: "块", offset: -4 },
  { lesson: "072", fromHanzi: "饺子", toHanzi: "块", offset: 2 },
  { lesson: "072", fromHanzi: "不太", toHanzi: "还是", offset: 2 },
  { lesson: "072", fromHanzi: "不错", toHanzi: "块", offset: 1 }
];

const AUDIO_CLIP_PARTS = {
  "047:去:qù": { part: "first" },
  "047:教室:jiàoshì": { part: "second" },
  "055:欸:éi": { part: "first" },
  "055:这:zhè": { sourceHanzi: "欸", part: "second" },
  "055:的:de": { part: "first" },
  "055:照片:zhàopiàn": { sourceHanzi: "的", part: "second" },
  "055:人:rén": { sourceHanzi: "北京人", part: "first" },
  "055:北京人:Běijīngrén": { sourceHanzi: "北京人", part: "second" },
  "063:班:bān": { part: "first" },
  "063:认识:rènshi": { sourceHanzi: "班", part: "second" },
  "063:很:hěn": { sourceHanzi: "高兴", part: "first" },
  "063:高兴:gāoxìng": { part: "second" },
  "063:怎么:zěnme": { part: "first" },
  "063:用:yòng": { sourceHanzi: "怎么", part: "second" },
  "072:吧:ba": { part: "first" },
  "072:主食:zhǔshí": { sourceHanzi: "吧", sourceOffset: 1 }
};

const state = {
  current: null,
  exam: new URLSearchParams(location.search).get("test") === "2" ? "second" : "first",
  mode: "mixed",
  lesson: "all",
  answered: false,
  mistakesOnly: false,
  stats: JSON.parse(localStorage.getItem("cnQuizStats") || '{"total":0,"correct":0,"streak":0,"mistakes":{}}')
};

const AUDIO_OFFSET_STORAGE_KEY = "cnQuizAudioOffsetsV2";
const audioOffsets = JSON.parse(localStorage.getItem(AUDIO_OFFSET_STORAGE_KEY) || "{}");

const els = {
  examButtons: [...document.querySelectorAll("[data-exam]")],
  examDescription: document.querySelector("#examDescription"),
  mode: document.querySelector("#mode"),
  lesson: document.querySelector("#lesson"),
  mistakesOnly: document.querySelector("#mistakesOnly"),
  resetStats: document.querySelector("#resetStats"),
  totalCount: document.querySelector("#totalCount"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  lessonBadge: document.querySelector("#lessonBadge"),
  modeBadge: document.querySelector("#modeBadge"),
  questionTitle: document.querySelector("#questionTitle"),
  questionHint: document.querySelector("#questionHint"),
  options: document.querySelector("#options"),
  feedback: document.querySelector("#feedback"),
  playWord: document.querySelector("#playWord"),
  replay: document.querySelector("#replay"),
  next: document.querySelector("#next"),
  lessonAudio: document.querySelector("#lessonAudio"),
  voiceSelect: document.querySelector("#voiceSelect"),
  audioPrev: document.querySelector("#audioPrev"),
  audioNext: document.querySelector("#audioNext"),
  trackLabel: document.querySelector("#trackLabel"),
  wordCount: document.querySelector("#wordCount"),
  mistakeCount: document.querySelector("#mistakeCount"),
  search: document.querySelector("#search"),
  wordList: document.querySelector("#wordList")
};

let voices = [];
let audioContext;
let playingSource = null;
const segmentCache = new Map();

function keyOf(word) {
  return `${word.lesson}:${word.hanzi}:${word.pinyin}`;
}

function skipBefore(word) {
  return AUDIO_SKIPS
    .filter(skip => skip.lesson === word.lesson && skip.beforeHanzi === word.hanzi)
    .reduce((total, skip) => total + skip.count, 0);
}

function audioItemCount(lesson) {
  const visibleCount = DATA
    .filter(word => word.lesson === lesson)
    .reduce((total, word) => total + audioSpanOf(word), 0);
  const hiddenCount = AUDIO_SKIPS
    .filter(skip => skip.lesson === lesson)
    .reduce((total, skip) => total + skip.count, 0);
  const extraDetectedItems = lesson === "072" ? maxPositiveRangeOffset(lesson) : 0;
  return visibleCount + hiddenCount + extraDetectedItems;
}

function audioSpanOf(word) {
  return AUDIO_SPANS[keyOf(word)] || 1;
}

function rangeOffsetOf(word) {
  const lessonWords = DATA.filter(candidate => candidate.lesson === word.lesson);
  const wordIndex = lessonWords.findIndex(candidate => keyOf(candidate) === keyOf(word));
  if (wordIndex < 0) return 0;

  return AUDIO_RANGE_OFFSETS
    .filter(range => range.lesson === word.lesson)
    .reduce((total, range) => {
      const fromIndex = lessonWords.findIndex(candidate => candidate.hanzi === range.fromHanzi);
      const toIndex = lessonWords.findIndex(candidate => candidate.hanzi === range.toHanzi);
      if (fromIndex < 0 || toIndex < 0) return total;
      return wordIndex >= fromIndex && wordIndex <= toIndex ? total + range.offset : total;
    }, 0);
}

function maxPositiveRangeOffset(lesson) {
  const lessonWords = DATA.filter(candidate => candidate.lesson === lesson);
  return lessonWords.reduce((maxOffset, word) => Math.max(maxOffset, rangeOffsetOf(word)), 0);
}

function audioIndexOf(word) {
  let index = 0;
  for (const item of DATA.filter(candidate => candidate.lesson === word.lesson)) {
    index += skipBefore(item);
    if (keyOf(item) === keyOf(word)) return index + rangeOffsetOf(word);
    index += audioSpanOf(item);
  }
  return -1;
}

function saveStats() {
  localStorage.setItem("cnQuizStats", JSON.stringify(state.stats));
}

function saveAudioOffsets() {
  localStorage.setItem(AUDIO_OFFSET_STORAGE_KEY, JSON.stringify(audioOffsets));
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - .5);
}

function availableWords() {
  const examWords = DATA.filter(word => word.exam === state.exam && word.quiz !== false);
  let words = examWords;
  if (state.lesson !== "all") words = words.filter(word => word.lesson === state.lesson);
  if (state.mistakesOnly) {
    const misses = state.stats.mistakes;
    words = words.filter(word => misses[keyOf(word)] > 0);
  }
  return words.length ? words : examWords.filter(word => state.lesson === "all" || word.lesson === state.lesson);
}

function currentMode() {
  return state.mode === "mixed" ? sample(["pinyin", "hanzi"]) : state.mode;
}

async function speak(word) {
  window.speechSynthesis?.cancel();
  const playedClip = await playOriginalClip(word);
  if (playedClip) return;

  if (!("speechSynthesis" in window)) {
    showAudioNotice("このブラウザでは単語音声を再生できません。下の原音声を使ってください。");
    return;
  }
  const selectedVoice = voices.find(voice => voice.name === els.voiceSelect.value) || getBestChineseVoice();
  if (!selectedVoice) {
    showAudioNotice("中国語音声が見つかりません。下の原音声を再生して確認してください。");
    return;
  }

  const text = word.hanzi
    .replace(/\s*\/\s*/g, "、")
    .replace(/app/g, "APP");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  utterance.lang = "zh-CN";
  utterance.rate = .78;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function showAudioNotice(message) {
  els.feedback.className = "feedback bad";
  els.feedback.textContent = message;
}

async function playOriginalClip(word) {
  try {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") await audioContext.resume();
    if (playingSource) {
      try { playingSource.stop(); } catch {}
      playingSource = null;
    }

    const entry = await getLessonSegments(word.lesson);
    const segment = playbackSegmentFor(entry, word);
    if (!segment) return false;

    const source = audioContext.createBufferSource();
    source.buffer = entry.buffer;
    source.connect(audioContext.destination);
    playingSource = source;
    source.onended = () => {
      if (playingSource === source) playingSource = null;
    };
    source.start(0, segment.start, Math.max(.12, segment.end - segment.start));
    return true;
  } catch (error) {
    console.warn("Original clip playback failed", error);
    return false;
  }
}

function playbackSegmentFor(entry, word) {
  const rule = AUDIO_CLIP_PARTS[keyOf(word)];
  const sourceWord = rule?.sourceHanzi
    ? DATA.find(item => item.lesson === word.lesson && item.hanzi === rule.sourceHanzi)
    : word;
  if (!sourceWord) return null;

  const index = audioIndexOf(sourceWord) + (rule?.sourceOffset || 0) + (audioOffsets[keyOf(word)] || 0);
  const segment = mergePlaybackSegments(entry.segments, index, audioSpanOf(sourceWord));
  if (!segment || !rule?.part) return segment;
  return segmentPart(entry.buffer, segment, rule.part);
}

function mergePlaybackSegments(segments, index, span) {
  if (index < 0) return null;
  const selected = segments.slice(index, index + span);
  if (!selected.length) return null;
  return {
    start: selected[0].start,
    end: selected[selected.length - 1].end
  };
}

function segmentPart(buffer, segment, part) {
  const split = findQuietSplit(buffer, segment);
  const pad = .025;
  if (part === "first") {
    return {
      start: segment.start,
      end: Math.max(segment.start + .08, split + pad)
    };
  }
  return {
    start: Math.min(segment.end - .08, split - pad),
    end: segment.end
  };
}

function findQuietSplit(buffer, segment) {
  const data = buffer.getChannelData(0);
  const sampleRate = buffer.sampleRate;
  const startSample = Math.max(0, Math.floor(segment.start * sampleRate));
  const endSample = Math.min(data.length - 1, Math.floor(segment.end * sampleRate));
  const center = Math.floor((startSample + endSample) / 2);
  const radius = Math.floor((endSample - startSample) * .28);
  const win = Math.max(64, Math.floor(sampleRate * .018));
  let bestSample = center;
  let bestRms = Infinity;

  for (let sample = Math.max(startSample, center - radius); sample < Math.min(endSample - win, center + radius); sample += win) {
    let sum = 0;
    for (let i = sample; i < sample + win; i += 4) sum += data[i] * data[i];
    const rms = Math.sqrt(sum / Math.ceil(win / 4));
    if (rms < bestRms) {
      bestRms = rms;
      bestSample = sample + Math.floor(win / 2);
    }
  }

  return bestSample / sampleRate;
}


async function getLessonSegments(lesson) {
  if (segmentCache.has(lesson)) return segmentCache.get(lesson);
  const promise = fetch(`./audio/${lesson}.mp3`)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
      if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
      return audioContext.decodeAudioData(arrayBuffer);
    })
    .then(buffer => ({ buffer, segments: detectSegments(buffer, audioItemCount(lesson)) }));
  segmentCache.set(lesson, promise);
  return promise;
}

function detectSegments(buffer, expectedCount) {
  const data = buffer.getChannelData(0);
  const sampleRate = buffer.sampleRate;
  const hop = Math.floor(sampleRate * .012);
  const win = Math.floor(sampleRate * .026);
  const frames = [];

  for (let start = 0; start + win < data.length; start += hop) {
    let sum = 0;
    for (let i = start; i < start + win; i += 3) sum += data[i] * data[i];
    frames.push({ time: start / sampleRate, rms: Math.sqrt(sum / Math.ceil(win / 3)) });
  }

  const sorted = frames.map(frame => frame.rms).sort((a, b) => a - b);
  const peak = sorted[Math.floor(sorted.length * .98)] || 0;
  const noise = sorted[Math.floor(sorted.length * .30)] || 0;
  const threshold = Math.max(.004, noise * 2.6, peak * .10);
  const raw = [];
  let startTime = null;

  for (const frame of frames) {
    if (frame.rms > threshold && startTime === null) startTime = frame.time;
    if (frame.rms <= threshold && startTime !== null) {
      const end = frame.time + win / sampleRate;
      if (end - startTime > .08) raw.push({ start: Math.max(0, startTime - .04), end: Math.min(buffer.duration, end + .08) });
      startTime = null;
    }
  }
  if (startTime !== null) raw.push({ start: Math.max(0, startTime - .04), end: buffer.duration });

  let merged = mergeSegments(raw, .22);
  if (merged.length > expectedCount) merged = mergeSegments(raw, .38);
  if (merged.length > expectedCount) merged = mergeShortestGaps(merged, expectedCount);
  return merged.slice(0, expectedCount);
}

function mergeSegments(segments, maxGap) {
  const merged = [];
  for (const segment of segments) {
    const last = merged[merged.length - 1];
    if (last && segment.start - last.end < maxGap) {
      last.end = segment.end;
    } else {
      merged.push({ ...segment });
    }
  }
  return merged;
}

function mergeShortestGaps(segments, targetCount) {
  const copy = segments.map(segment => ({ ...segment }));
  while (copy.length > targetCount) {
    let bestIndex = 0;
    let bestGap = Infinity;
    for (let i = 0; i < copy.length - 1; i++) {
      const gap = copy[i + 1].start - copy[i].end;
      if (gap < bestGap) {
        bestGap = gap;
        bestIndex = i;
      }
    }
    copy[bestIndex].end = copy[bestIndex + 1].end;
    copy.splice(bestIndex + 1, 1);
  }
  return copy;
}

function getBestChineseVoice() {
  const preferred = [
    "xiaoxiao",
    "xiaoyi",
    "xiaobei",
    "xiaoni",
    "xiaoxuan",
    "ting-ting",
    "tingting",
    "mei-jia",
    "meijia",
    "sin-ji",
    "zh"
  ];
  return voices.find(voice => /^zh[-_]/i.test(voice.lang) && preferred.some(name => voice.name.toLowerCase().includes(name)))
    || voices.find(voice => /^zh[-_](cn|hans|sg)/i.test(voice.lang))
    || voices.find(voice => /^zh/i.test(voice.lang))
    || null;
}

function loadVoices() {
  voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  const chineseVoices = voices.filter(voice => /^zh/i.test(voice.lang));
  els.voiceSelect.innerHTML = "";

  if (!chineseVoices.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "中国語音声が見つかりません";
    els.voiceSelect.append(option);
    return;
  }

  const best = getBestChineseVoice();
  chineseVoices.forEach(voice => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    if (best && voice.name === best.name) option.selected = true;
    els.voiceSelect.append(option);
  });
}

function buildOptions(word, mode) {
  const field = mode === "pinyin" ? "pinyin" : "hanzi";
  const pool = DATA.filter(item =>
    item.exam === state.exam &&
    item.quiz !== false &&
    keyOf(item) !== keyOf(word) &&
    item[field] !== word[field]
  );
  return shuffle([word, ...shuffle(pool).slice(0, 3)]).map(item => ({
    label: item[field],
    sub: mode === "pinyin" ? item.hanzi : item.pinyin,
    correct: keyOf(item) === keyOf(word)
  }));
}

function nextQuestion() {
  const words = availableWords();
  const word = sample(words);
  const mode = currentMode();
  state.current = { word, mode };
  state.answered = false;

  els.lessonBadge.textContent = `第 ${word.lesson} 音声`;
  els.modeBadge.textContent = mode === "pinyin" ? "ピンインを選ぶ" : "漢字を選ぶ";
  els.questionTitle.textContent = "中国語音声を聞いて正解を選ぼう";
  els.questionHint.textContent = "意味は答えた後に表示されます。まずは耳だけで挑戦。";
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.lessonAudio.src = `./audio/${word.lesson}.mp3`;
  els.trackLabel.textContent = `第 ${word.lesson} の原音声`;

  els.options.innerHTML = "";
  buildOptions(word, mode).forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.correct = String(option.correct);
    button.innerHTML = `${option.label}<small>${option.sub}</small>`;
    button.addEventListener("click", () => answer(button, option.correct));
    els.options.append(button);
  });

  updateStats();
}

function answer(button, isCorrect) {
  if (state.answered) return;
  state.answered = true;
  const { word } = state.current;
  const id = keyOf(word);

  state.stats.total += 1;
  if (isCorrect) {
    state.stats.correct += 1;
    state.stats.streak += 1;
    if (state.stats.mistakes[id]) state.stats.mistakes[id] -= 1;
  } else {
    state.stats.streak = 0;
    state.stats.mistakes[id] = (state.stats.mistakes[id] || 0) + 1;
  }

  [...els.options.children].forEach(optionButton => {
    optionButton.disabled = true;
    if (optionButton === button && !isCorrect) optionButton.classList.add("wrong");
    if (optionButton.dataset.correct === "true") optionButton.classList.add("correct");
  });

  els.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  els.feedback.textContent = isCorrect
    ? `正解！ ${word.hanzi} / ${word.pinyin} / ${word.meaning}`
    : `答えは ${word.hanzi} / ${word.pinyin}。意味は「${word.meaning}」。`;
  saveStats();
  updateStats();
}

function updateStats() {
  els.totalCount.textContent = state.stats.total;
  els.accuracy.textContent = state.stats.total ? `${Math.round(state.stats.correct / state.stats.total * 100)}%` : "0%";
  els.streak.textContent = state.stats.streak;
  els.wordCount.textContent = availableWords().length;
  els.mistakeCount.textContent = DATA
    .filter(word => word.exam === state.exam && word.quiz !== false)
    .filter(word => state.stats.mistakes[keyOf(word)] > 0)
    .length;
}

function renderLessons() {
  els.lesson.innerHTML = '<option value="all">すべて</option>';
  [...new Set(DATA.filter(word => word.exam === state.exam).map(word => word.lesson))].forEach(lesson => {
    const option = document.createElement("option");
    option.value = lesson;
    option.textContent = `第 ${lesson}`;
    els.lesson.append(option);
  });
}

function renderWordList() {
  const query = els.search.value.trim().toLowerCase();
  const words = DATA.filter(word => {
    if (word.exam !== state.exam || word.quiz === false) return false;
    if (state.lesson !== "all" && word.lesson !== state.lesson) return false;
    const text = `${word.lesson} ${word.hanzi} ${word.pinyin} ${word.meaning}`.toLowerCase();
    return text.includes(query);
  });
  els.wordList.innerHTML = "";
  words.forEach(word => {
    const item = document.createElement("div");
    item.className = "word";
    item.innerHTML = `<small>第 ${word.lesson}</small><b>${word.hanzi}</b><span>${word.pinyin}</span><small>${word.meaning}</small>`;
    item.addEventListener("click", () => speak(word));
    els.wordList.append(item);
  });
}

function setExam(exam) {
  state.exam = exam;
  state.lesson = "all";
  state.mistakesOnly = false;
  document.body.dataset.examTheme = exam;
  els.mistakesOnly.classList.remove("active");
  els.search.value = "";
  els.examButtons.forEach(button => {
    const selected = button.dataset.exam === exam;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  els.examDescription.textContent = exam === "second"
    ? "第2回の単語だけを出題します（第1回の単語は含みません）"
    : "第1回の単語だけを出題します";

  const url = new URL(location.href);
  if (exam === "second") url.searchParams.set("test", "2");
  else url.searchParams.delete("test");
  history.replaceState(null, "", url);

  renderLessons();
  renderWordList();
  nextQuestion();
}

els.mode.addEventListener("change", () => {
  state.mode = els.mode.value;
  nextQuestion();
});

els.examButtons.forEach(button => {
  button.addEventListener("click", () => setExam(button.dataset.exam));
});

els.lesson.addEventListener("change", () => {
  state.lesson = els.lesson.value;
  renderWordList();
  nextQuestion();
});

els.mistakesOnly.addEventListener("click", () => {
  state.mistakesOnly = !state.mistakesOnly;
  els.mistakesOnly.classList.toggle("active", state.mistakesOnly);
  nextQuestion();
});

els.resetStats.addEventListener("click", () => {
  state.stats = { total: 0, correct: 0, streak: 0, mistakes: {} };
  saveStats();
  updateStats();
});

els.playWord.addEventListener("click", () => speak(state.current.word));
els.replay.addEventListener("click", () => speak(state.current.word));
els.audioPrev.addEventListener("click", () => {
  const id = keyOf(state.current.word);
  audioOffsets[id] = (audioOffsets[id] || 0) - 1;
  saveAudioOffsets();
  speak(state.current.word);
});
els.audioNext.addEventListener("click", () => {
  const id = keyOf(state.current.word);
  audioOffsets[id] = (audioOffsets[id] || 0) + 1;
  saveAudioOffsets();
  speak(state.current.word);
});
els.next.addEventListener("click", nextQuestion);
els.search.addEventListener("input", renderWordList);
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

setExam(state.exam);

window.quizDebug = {
  DATA,
  getLessonSegments,
  speakCurrent: () => speak(state.current.word)
};
