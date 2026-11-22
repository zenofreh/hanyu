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

const THIRD_DATA = [
  // 第12課 (110)
  {lesson:"110", chapter:"12", hanzi:"大家好", pinyin:"dàjiā hǎo", meaning:"みなさん、こんにちは"},
  {lesson:"110", chapter:"12", hanzi:"了", pinyin:"le", meaning:"〜になる、〜になった／〜してしまう、〜した"},
  {lesson:"110", chapter:"12", hanzi:"开始", pinyin:"kāishǐ", meaning:"始める、始まる"},
  {lesson:"110", chapter:"12", hanzi:"中文", pinyin:"Zhōngwén", meaning:"中国語"},
  {lesson:"110", chapter:"12", hanzi:"已经", pinyin:"yǐjīng", meaning:"すでに、もう"},
  {lesson:"110", chapter:"12", hanzi:"半年", pinyin:"bànnián", meaning:"半年"},
  {lesson:"110", chapter:"12", hanzi:"还", pinyin:"hái", meaning:"まだ、やはり、その上"},
  {lesson:"110", chapter:"12", hanzi:"没 / 没有", pinyin:"méi / méiyou", meaning:"〜していない、〜しなかった（完了の「了」の否定）"},
  {lesson:"110", chapter:"12", hanzi:"时候", pinyin:"shíhou", meaning:"時"},
  {lesson:"110", chapter:"12", hanzi:"以为", pinyin:"yǐwéi", meaning:"〜と思い込む"},
  {lesson:"110", chapter:"12", hanzi:"容易", pinyin:"róngyì", meaning:"簡単だ、やさしい"},
  {lesson:"110", chapter:"12", hanzi:"后来", pinyin:"hòulái", meaning:"その後"},
  {lesson:"110", chapter:"12", hanzi:"发现", pinyin:"fāxiàn", meaning:"気付く"},
  {lesson:"110", chapter:"12", hanzi:"发音", pinyin:"fāyīn", meaning:"発音"},
  {lesson:"110", chapter:"12", hanzi:"太〜了", pinyin:"tài ~ le", meaning:"とても〜、あまりにも〜"},
  {lesson:"110", chapter:"12", hanzi:"比如说", pinyin:"bǐrú shuō", meaning:"例えば"},
  {lesson:"110", chapter:"12", hanzi:"每个", pinyin:"měi ge", meaning:"毎〜"},
  {lesson:"110", chapter:"12", hanzi:"上课", pinyin:"shàngkè", meaning:"授業を受ける、授業をする"},
  {lesson:"110", chapter:"12", hanzi:"上", pinyin:"shàng", meaning:"（授業に）出る、（学校に）通う"},
  {lesson:"110", chapter:"12", hanzi:"节", pinyin:"jié", meaning:"〜コマ（授業などの区切りを数える）"},
  {lesson:"110", chapter:"12", hanzi:"课", pinyin:"kè", meaning:"授業"},
  {lesson:"110", chapter:"12", hanzi:"但是", pinyin:"dànshì", meaning:"しかし"},
  {lesson:"110", chapter:"12", hanzi:"音", pinyin:"yīn", meaning:"音"},
  {lesson:"110", chapter:"12", hanzi:"掌握", pinyin:"zhǎngwò", meaning:"身につける、マスターする"},
  {lesson:"110", chapter:"12", hanzi:"以前", pinyin:"yǐqián", meaning:"〜する前、〜より前"},
  {lesson:"110", chapter:"12", hanzi:"英文", pinyin:"Yīngwén", meaning:"英語"},
  {lesson:"110", chapter:"12", hanzi:"主要", pinyin:"zhǔyào", meaning:"主に"},
  {lesson:"110", chapter:"12", hanzi:"语法", pinyin:"yǔfǎ", meaning:"文法"},
  {lesson:"110", chapter:"12", hanzi:"翻译", pinyin:"fānyì", meaning:"翻訳する、通訳する"},
  {lesson:"110", chapter:"12", hanzi:"觉得", pinyin:"juéde", meaning:"〜と感じる、〜と思う"},
  {lesson:"110", chapter:"12", hanzi:"可能", pinyin:"kěnéng", meaning:"おそらく、〜かもしれない"},
  {lesson:"110", chapter:"12", hanzi:"经历", pinyin:"jīnglì", meaning:"経歴、経験／経験する"},
  {lesson:"110", chapter:"12", hanzi:"关系", pinyin:"guānxi", meaning:"関係"},
  {lesson:"110", chapter:"12", hanzi:"今后", pinyin:"jīnhòu", meaning:"今後、これから"},
  {lesson:"110", chapter:"12", hanzi:"一定", pinyin:"yídìng", meaning:"きっと、必ず"},
  {lesson:"110", chapter:"12", hanzi:"努力", pinyin:"nǔlì", meaning:"一生懸命である"},
  {lesson:"110", chapter:"12", hanzi:"请", pinyin:"qǐng", meaning:"どうぞ〜、頼む"},
  {lesson:"110", chapter:"12", hanzi:"大家", pinyin:"dàjiā", meaning:"みなさん"},
  {lesson:"110", chapter:"12", hanzi:"多多指教", pinyin:"duōduō zhǐjiào", meaning:"ご指導をお願いします"},

  // 第12課 (111)
  {lesson:"111", chapter:"12", hanzi:"女朋友", pinyin:"nǚpéngyou", meaning:"ガールフレンド、彼女"},
  {lesson:"111", chapter:"12", hanzi:"肚子", pinyin:"dùzi", meaning:"おなか"},
  {lesson:"111", chapter:"12", hanzi:"饿", pinyin:"è", meaning:"おなかが減っている"},
  {lesson:"111", chapter:"12", hanzi:"爷爷", pinyin:"yéye", meaning:"父方の祖父"},
  {lesson:"111", chapter:"12", hanzi:"生病", pinyin:"shēngbìng", meaning:"病気になる"},
  {lesson:"111", chapter:"12", hanzi:"包子", pinyin:"bāozi", meaning:"中華まん"},
  {lesson:"111", chapter:"12", hanzi:"丈夫", pinyin:"zhàngfu", meaning:"夫"},
  {lesson:"111", chapter:"12", hanzi:"上海", pinyin:"Shànghǎi", meaning:"上海（地名）"},
  {lesson:"111", chapter:"12", hanzi:"午饭", pinyin:"wǔfàn", meaning:"昼ご飯"},
  {lesson:"111", chapter:"12", hanzi:"药", pinyin:"yào", meaning:"薬"},
  {lesson:"111", chapter:"12", hanzi:"见面", pinyin:"jiànmiàn", meaning:"会う"},
  {lesson:"111", chapter:"12", hanzi:"王", pinyin:"Wáng", meaning:"王（姓）"},
  {lesson:"111", chapter:"12", hanzi:"帮忙", pinyin:"bāngmáng", meaning:"手伝う、助ける"},

  // 第13課 (118)
  {lesson:"118", chapter:"13", hanzi:"村井莉加", pinyin:"Cūnjǐng Lìjiā", meaning:"村井莉加（人名）", quiz:false},
  {lesson:"118", chapter:"13", hanzi:"喂", pinyin:"wéi", meaning:"もしもし（電話の呼びかけ）"},
  {lesson:"118", chapter:"13", hanzi:"杨泰龙", pinyin:"Yáng Tàilóng", meaning:"楊泰龍（人名）", quiz:false},
  {lesson:"118", chapter:"13", hanzi:"想", pinyin:"xiǎng", meaning:"〜したい"},
  {lesson:"118", chapter:"13", hanzi:"京剧", pinyin:"Jīngjù", meaning:"京劇"},
  {lesson:"118", chapter:"13", hanzi:"过", pinyin:"guo", meaning:"〜したことがある"},
  {lesson:"118", chapter:"13", hanzi:"梨园剧场", pinyin:"Líyuán Jùchǎng", meaning:"梨園劇場（北京の劇場名）", quiz:false},
  {lesson:"118", chapter:"13", hanzi:"次", pinyin:"cì", meaning:"〜回"},
  {lesson:"118", chapter:"13", hanzi:"离", pinyin:"lí", meaning:"〜から、〜まで"},
  {lesson:"118", chapter:"13", hanzi:"北大", pinyin:"Běi Dà", meaning:"北京大学の略称"},
  {lesson:"118", chapter:"13", hanzi:"远", pinyin:"yuǎn", meaning:"遠い"},
  {lesson:"118", chapter:"13", hanzi:"虎坊桥", pinyin:"Hǔfāngqiáo", meaning:"虎坊橋（北京の地名）", quiz:false},
  {lesson:"118", chapter:"13", hanzi:"地铁", pinyin:"dìtiě", meaning:"地下鉄"},
  {lesson:"118", chapter:"13", hanzi:"从", pinyin:"cóng", meaning:"〜から"},
  {lesson:"118", chapter:"13", hanzi:"到", pinyin:"dào", meaning:"〜まで"},
  {lesson:"118", chapter:"13", hanzi:"走", pinyin:"zǒu", meaning:"行く、歩く"},
  {lesson:"118", chapter:"13", hanzi:"先", pinyin:"xiān", meaning:"まず、先に"},
  {lesson:"118", chapter:"13", hanzi:"四号线", pinyin:"Sìhào Xiàn", meaning:"4号線（地下鉄の路線名）"},
  {lesson:"118", chapter:"13", hanzi:"然后", pinyin:"ránhòu", meaning:"それから、その後"},
  {lesson:"118", chapter:"13", hanzi:"菜市口", pinyin:"Càishìkǒu", meaning:"菜市口（北京の地名）", quiz:false},
  {lesson:"118", chapter:"13", hanzi:"站", pinyin:"zhàn", meaning:"駅、バス停"},
  {lesson:"118", chapter:"13", hanzi:"换", pinyin:"huàn", meaning:"乗り換える"},
  {lesson:"118", chapter:"13", hanzi:"七号线", pinyin:"Qīhào Xiàn", meaning:"7号線（地下鉄の路線名）"},
  {lesson:"118", chapter:"13", hanzi:"站", pinyin:"zhàn", meaning:"〜駅（駅の数を数える）"},
  {lesson:"118", chapter:"13", hanzi:"就", pinyin:"jiù", meaning:"〜ならば…する（条件を受けて結論を表す）"},
  {lesson:"118", chapter:"13", hanzi:"到", pinyin:"dào", meaning:"着く、到着する"},
  {lesson:"118", chapter:"13", hanzi:"挂", pinyin:"guà", meaning:"（電話を）切る"},

  // 第13課 (119)
  {lesson:"119", chapter:"13", hanzi:"没 / 没有〜过", pinyin:"méi / méiyou ~ guo", meaning:"〜したことがない（「过」の否定）"},
  {lesson:"119", chapter:"13", hanzi:"从来", pinyin:"cónglái", meaning:"いままで、これまで"},
  {lesson:"119", chapter:"13", hanzi:"说", pinyin:"shuō", meaning:"言う、話す"},
  {lesson:"119", chapter:"13", hanzi:"涮羊肉", pinyin:"shuànyángròu", meaning:"羊肉のしゃぶしゃぶ", quiz:false},
  {lesson:"119", chapter:"13", hanzi:"要", pinyin:"yào", meaning:"〜したい、〜するつもりだ、〜しなければならない"},
  {lesson:"119", chapter:"13", hanzi:"打工", pinyin:"dǎgōng", meaning:"アルバイトする"},
  {lesson:"119", chapter:"13", hanzi:"国外", pinyin:"guówài", meaning:"国外、海外"},
  {lesson:"119", chapter:"13", hanzi:"不想", pinyin:"bù xiǎng", meaning:"〜したくない"},
  {lesson:"119", chapter:"13", hanzi:"考试", pinyin:"kǎoshì", meaning:"試験／試験をする、試験を受ける"},
  {lesson:"119", chapter:"13", hanzi:"不用", pinyin:"bú yòng", meaning:"〜する必要はない"},
  {lesson:"119", chapter:"13", hanzi:"不要", pinyin:"bú yào", meaning:"〜してはいけない"},
  {lesson:"119", chapter:"13", hanzi:"别", pinyin:"bié", meaning:"〜してはいけない"},
  {lesson:"119", chapter:"13", hanzi:"先生", pinyin:"xiānsheng", meaning:"（男性に対する敬称）〜さん"},
  {lesson:"119", chapter:"13", hanzi:"大阪", pinyin:"Dàbǎn", meaning:"大阪（地名）"},
  {lesson:"119", chapter:"13", hanzi:"要", pinyin:"yào", meaning:"必要とする、かかる"},
  {lesson:"119", chapter:"13", hanzi:"机场", pinyin:"jīchǎng", meaning:"空港"},
  {lesson:"119", chapter:"13", hanzi:"近", pinyin:"jìn", meaning:"近い"},
  {lesson:"119", chapter:"13", hanzi:"暑假", pinyin:"shǔjià", meaning:"夏休み"},
  {lesson:"119", chapter:"13", hanzi:"超市", pinyin:"chāoshì", meaning:"スーパーマーケット"},
  {lesson:"119", chapter:"13", hanzi:"一直", pinyin:"yìzhí", meaning:"まっすぐに"},
  {lesson:"119", chapter:"13", hanzi:"往", pinyin:"wǎng", meaning:"〜に向かって、〜の方へ"},
  {lesson:"119", chapter:"13", hanzi:"北", pinyin:"běi", meaning:"北、北側"},

  // 第14課 (126)
  {lesson:"126", chapter:"14", hanzi:"王亮", pinyin:"Wáng Liàng", meaning:"王亮（人名）", quiz:false},
  {lesson:"126", chapter:"14", hanzi:"会", pinyin:"huì", meaning:"〜できる／〜するはずだ、〜する可能性がある"},
  {lesson:"126", chapter:"14", hanzi:"一点儿", pinyin:"yìdiǎnr", meaning:"少し"},
  {lesson:"126", chapter:"14", hanzi:"常常", pinyin:"chángcháng", meaning:"しばしば"},
  {lesson:"126", chapter:"14", hanzi:"错", pinyin:"cuò", meaning:"〜し間違える（結果補語）"},
  {lesson:"126", chapter:"14", hanzi:"听", pinyin:"tīng", meaning:"聞く"},
  {lesson:"126", chapter:"14", hanzi:"歌（儿）", pinyin:"gē(r)", meaning:"歌"},
  {lesson:"126", chapter:"14", hanzi:"懂", pinyin:"dǒng", meaning:"〜して理解する（結果補語）"},
  {lesson:"126", chapter:"14", hanzi:"还是", pinyin:"háishi", meaning:"まだ、やはり"},
  {lesson:"126", chapter:"14", hanzi:"有点儿", pinyin:"yǒudiǎnr", meaning:"（多く望ましくないことについて）少し"},
  {lesson:"126", chapter:"14", hanzi:"能", pinyin:"néng", meaning:"〜できる、〜してもよい"},
  {lesson:"126", chapter:"14", hanzi:"小说", pinyin:"xiǎoshuō", meaning:"小説"},
  {lesson:"126", chapter:"14", hanzi:"但", pinyin:"dàn", meaning:"しかし"},
  {lesson:"126", chapter:"14", hanzi:"可以", pinyin:"kěyǐ", meaning:"〜できる、〜してもよい"},
  {lesson:"126", chapter:"14", hanzi:"送", pinyin:"sòng", meaning:"贈る"},
  {lesson:"126", chapter:"14", hanzi:"完", pinyin:"wán", meaning:"〜し終わる（結果補語）"},

  // 第14課 (127)
  {lesson:"127", chapter:"14", hanzi:"教", pinyin:"jiāo", meaning:"教える"},
  {lesson:"127", chapter:"14", hanzi:"姥爷", pinyin:"lǎoye", meaning:"母方の祖父"},
  {lesson:"127", chapter:"14", hanzi:"支", pinyin:"zhī", meaning:"〜本（棒状のものを数える）"},
  {lesson:"127", chapter:"14", hanzi:"钢笔", pinyin:"gāngbǐ", meaning:"ペン、万年筆"},
  {lesson:"127", chapter:"14", hanzi:"告诉", pinyin:"gàosu", meaning:"伝える、知らせる"},
  {lesson:"127", chapter:"14", hanzi:"再", pinyin:"zài", meaning:"再び、また"},
  {lesson:"127", chapter:"14", hanzi:"遍", pinyin:"biàn", meaning:"（始めから終わりまで通して）〜回"},
  {lesson:"127", chapter:"14", hanzi:"好", pinyin:"hǎo", meaning:"きちんと〜し終わる（結果補語）"},
  {lesson:"127", chapter:"14", hanzi:"到", pinyin:"dào", meaning:"目的が達成されることを示す（結果補語）"},
  {lesson:"127", chapter:"14", hanzi:"找", pinyin:"zhǎo", meaning:"探す"},
  {lesson:"127", chapter:"14", hanzi:"钱包", pinyin:"qiánbāo", meaning:"財布"},
  {lesson:"127", chapter:"14", hanzi:"话", pinyin:"huà", meaning:"話"},
  {lesson:"127", chapter:"14", hanzi:"见", pinyin:"jiàn", meaning:"知覚して感じ取ることを示す（結果補語）"},
  {lesson:"127", chapter:"14", hanzi:"日语", pinyin:"Rìyǔ", meaning:"日本語"},
  {lesson:"127", chapter:"14", hanzi:"游泳", pinyin:"yóuyǒng", meaning:"泳ぐ"},
  {lesson:"127", chapter:"14", hanzi:"游", pinyin:"yóu", meaning:"泳ぐ"},
  {lesson:"127", chapter:"14", hanzi:"小", pinyin:"Xiǎo", meaning:"〜さん、〜くん（年下の人への親近感を示す）"},
  {lesson:"127", chapter:"14", hanzi:"米", pinyin:"mǐ", meaning:"メートル"},
  {lesson:"127", chapter:"14", hanzi:"借用", pinyin:"jièyòng", meaning:"借用する"},
  {lesson:"127", chapter:"14", hanzi:"一下", pinyin:"yí xià", meaning:"（動詞の後に置いて）ちょっと（〜する）"},
  {lesson:"127", chapter:"14", hanzi:"不行", pinyin:"bù xíng", meaning:"だめだ、いけない"},

  // 第15課 (135)
  {lesson:"135", chapter:"15", hanzi:"林柏宇", pinyin:"Lín Bǎiyǔ", meaning:"林柏宇（人名）", quiz:false},
  {lesson:"135", chapter:"15", hanzi:"台北", pinyin:"Táiběi", meaning:"台北（地名）"},
  {lesson:"135", chapter:"15", hanzi:"回", pinyin:"huí / hui", meaning:"〜帰る（方向補語）"},
  {lesson:"135", chapter:"15", hanzi:"来", pinyin:"lái / lai", meaning:"〜来る（方向補語）"},
  {lesson:"135", chapter:"15", hanzi:"凤梨酥", pinyin:"fènglísū", meaning:"パイナップルケーキ", quiz:false},
  {lesson:"135", chapter:"15", hanzi:"尝", pinyin:"cháng", meaning:"食べてみる、味わう"},
  {lesson:"135", chapter:"15", hanzi:"铃木葵", pinyin:"Língmù Kuí", meaning:"鈴木葵（人名）", quiz:false},
  {lesson:"135", chapter:"15", hanzi:"台湾", pinyin:"Táiwān", meaning:"台湾"},
  {lesson:"135", chapter:"15", hanzi:"好玩儿", pinyin:"hǎowánr", meaning:"面白く遊べる、面白い"},
  {lesson:"135", chapter:"15", hanzi:"下次", pinyin:"xiàcì", meaning:"次回、次"},
  {lesson:"135", chapter:"15", hanzi:"带", pinyin:"dài", meaning:"引き連れる、携帯する、持つ"},
  {lesson:"135", chapter:"15", hanzi:"东京", pinyin:"Dōngjīng", meaning:"東京（地名）"},
  {lesson:"135", chapter:"15", hanzi:"月份", pinyin:"yuèfèn", meaning:"（暦の上の）月"},

  // 第15課 (136)
  {lesson:"136", chapter:"15", hanzi:"跑", pinyin:"pǎo", meaning:"走る"},
  {lesson:"136", chapter:"15", hanzi:"快点儿", pinyin:"kuài diǎnr", meaning:"さっさと、急いで"},
  {lesson:"136", chapter:"15", hanzi:"拿", pinyin:"ná", meaning:"取る、持つ"},
  {lesson:"136", chapter:"15", hanzi:"回", pinyin:"huí", meaning:"帰る"},
  {lesson:"136", chapter:"15", hanzi:"电子词典", pinyin:"diànzǐ cídiǎn", meaning:"電子辞書"},
  {lesson:"136", chapter:"15", hanzi:"下", pinyin:"xià / xia", meaning:"〜下りる（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"进", pinyin:"jìn / jin", meaning:"〜入る（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"出", pinyin:"chū / chu", meaning:"〜出る（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"过", pinyin:"guò / guo", meaning:"〜過ぎる、移動する（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"起", pinyin:"qǐ / qi", meaning:"（下から上へ）〜上がる（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"去", pinyin:"qù / qu", meaning:"〜ゆく（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"上", pinyin:"shàng / shang", meaning:"〜上がる（方向補語）"},
  {lesson:"136", chapter:"15", hanzi:"站起来", pinyin:"zhàn qilai", meaning:"立ち上がる"},
  {lesson:"136", chapter:"15", hanzi:"楼上", pinyin:"lóushàng", meaning:"上の階"},
  {lesson:"136", chapter:"15", hanzi:"香港", pinyin:"Xiānggǎng", meaning:"香港（地名）"},
  {lesson:"136", chapter:"15", hanzi:"礼物", pinyin:"lǐwù", meaning:"プレゼント"},
  {lesson:"136", chapter:"15", hanzi:"李", pinyin:"Lǐ", meaning:"李（姓）", quiz:false},
  {lesson:"136", chapter:"15", hanzi:"等", pinyin:"děng", meaning:"待つ"},
  {lesson:"136", chapter:"15", hanzi:"累", pinyin:"lèi", meaning:"疲れている"},
  {lesson:"136", chapter:"15", hanzi:"休息", pinyin:"xiūxi", meaning:"休む、休憩する"},
  {lesson:"136", chapter:"15", hanzi:"散步", pinyin:"sànbù", meaning:"散歩する"},

  // 第16課 (143)
  {lesson:"143", chapter:"16", hanzi:"秋山梓", pinyin:"Qiūshān Zǐ", meaning:"秋山梓（人名）", quiz:false},
  {lesson:"143", chapter:"16", hanzi:"以后", pinyin:"yǐhòu", meaning:"以後、その後"},
  {lesson:"143", chapter:"16", hanzi:"胖", pinyin:"pàng", meaning:"太っている"},
  {lesson:"143", chapter:"16", hanzi:"公斤", pinyin:"gōngjīn", meaning:"キログラム（kg）"},
  {lesson:"143", chapter:"16", hanzi:"得", pinyin:"děi", meaning:"〜しなければならない、〜する必要がある"},
  {lesson:"143", chapter:"16", hanzi:"运动", pinyin:"yùndòng", meaning:"運動する、スポーツをする／運動、スポーツ"},
  {lesson:"143", chapter:"16", hanzi:"张子豪", pinyin:"Zhāng Zǐháo", meaning:"張子豪（人名）", quiz:false},
  {lesson:"143", chapter:"16", hanzi:"喜欢", pinyin:"xǐhuan", meaning:"好きである"},
  {lesson:"143", chapter:"16", hanzi:"打棒球", pinyin:"dǎ bàngqiú", meaning:"野球をする"},
  {lesson:"143", chapter:"16", hanzi:"不过", pinyin:"búguò", meaning:"しかし"},
  {lesson:"143", chapter:"16", hanzi:"踢足球", pinyin:"tī zúqiú", meaning:"サッカーをする"},
  {lesson:"143", chapter:"16", hanzi:"得", pinyin:"de", meaning:"〜するのが…だ"},
  {lesson:"143", chapter:"16", hanzi:"可是", pinyin:"kěshì", meaning:"しかし"},
  {lesson:"143", chapter:"16", hanzi:"下星期天", pinyin:"xià xīngqītiān", meaning:"来週の日曜日"},
  {lesson:"143", chapter:"16", hanzi:"参加", pinyin:"cānjiā", meaning:"参加する"},
  {lesson:"143", chapter:"16", hanzi:"比赛", pinyin:"bǐsài", meaning:"試合"},
  {lesson:"143", chapter:"16", hanzi:"应该", pinyin:"yīnggāi", meaning:"〜すべきである"},
  {lesson:"143", chapter:"16", hanzi:"好好儿", pinyin:"hǎohāor", meaning:"十分に、しっかりと"},
  {lesson:"143", chapter:"16", hanzi:"地", pinyin:"de", meaning:"他の語句の後に置いて、連用修飾語を作る"},
  {lesson:"143", chapter:"16", hanzi:"练习", pinyin:"liànxí", meaning:"練習する"},
  {lesson:"143", chapter:"16", hanzi:"要是", pinyin:"yàoshi", meaning:"もし〜なら"},
  {lesson:"143", chapter:"16", hanzi:"空（儿）", pinyin:"kòng(r)", meaning:"ひま、あいた時間"},

  // 第16課 (144)
  {lesson:"144", chapter:"16", hanzi:"轻轻地", pinyin:"qīngqīng de", meaning:"軽く、そっと"},
  {lesson:"144", chapter:"16", hanzi:"关", pinyin:"guān", meaning:"閉じる、閉める"},
  {lesson:"144", chapter:"16", hanzi:"上", pinyin:"shàng / shang", meaning:"対象・目的に到達することなどを表す（方向補語）"},
  {lesson:"144", chapter:"16", hanzi:"门", pinyin:"mén", meaning:"門、ドア"},
  {lesson:"144", chapter:"16", hanzi:"民主", pinyin:"mínzhǔ", meaning:"民主的である"},
  {lesson:"144", chapter:"16", hanzi:"解决", pinyin:"jiějué", meaning:"解決する"},
  {lesson:"144", chapter:"16", hanzi:"问题", pinyin:"wèntí", meaning:"問題"},
  {lesson:"144", chapter:"16", hanzi:"快", pinyin:"kuài", meaning:"速い"},
  {lesson:"144", chapter:"16", hanzi:"唱", pinyin:"chàng", meaning:"歌う"},
  {lesson:"144", chapter:"16", hanzi:"写", pinyin:"xiě", meaning:"書く"},
  {lesson:"144", chapter:"16", hanzi:"漂亮", pinyin:"piàoliang", meaning:"美しい、きれいである"},
  {lesson:"144", chapter:"16", hanzi:"遵守", pinyin:"zūnshǒu", meaning:"遵守する、守る"},
  {lesson:"144", chapter:"16", hanzi:"校规", pinyin:"xiàoguī", meaning:"校則、学校の規則"},
  {lesson:"144", chapter:"16", hanzi:"年轻", pinyin:"niánqīng", meaning:"若い"},
  {lesson:"144", chapter:"16", hanzi:"干", pinyin:"gàn", meaning:"する、やる"},
  {lesson:"144", chapter:"16", hanzi:"种", pinyin:"zhǒng", meaning:"種類"},
  {lesson:"144", chapter:"16", hanzi:"研究", pinyin:"yánjiū", meaning:"研究する、検討する"}
];

const seenBaseKeys = new Map();
const DATA = [
  ...FIRST_DATA.map(word => ({ ...word, exam: "first" })),
  ...SECOND_DATA.map(word => ({ ...word, exam: "second" })),
  ...THIRD_DATA.map(word => ({ ...word, exam: "third" }))
].map(word => {
  const baseKey = `${word.lesson}:${word.hanzi}:${word.pinyin}`;
  const count = (seenBaseKeys.get(baseKey) || 0) + 1;
  seenBaseKeys.set(baseKey, count);
  const id = count === 1 ? baseKey : `${baseKey}#${count}`;
  return { ...word, baseKey, id };
});

const LESSON_LABELS = {
  "110": "第12課① (110)",
  "111": "第12課② (111)",
  "118": "第13課① (118)",
  "119": "第13課② (119)",
  "126": "第14課① (126)",
  "127": "第14課② (127)",
  "135": "第15課① (135)",
  "136": "第15課② (136)",
  "143": "第16課① (143)",
  "144": "第16課② (144)"
};

const AUDIO_SKIPS = [
  { lesson: "081", beforeHanzi: "请问", count: 1 },
  { lesson: "089", beforeHanzi: "李一诚", count: 1 },
  { lesson: "101", beforeHanzi: "刘敏", count: 1 },
  { lesson: "047", beforeHanzi: "你好", count: 2 },
  { lesson: "064", beforeHanzi: "同学", count: 1 },
  { lesson: "072", beforeHanzi: "做", count: 1 },
  { lesson: "072", beforeHanzi: "不错", count: 2 },
  { lesson: "072", beforeHanzi: "辣", count: 1 },
  { lesson: "110", beforeHanzi: "大家好", count: 1 },
  { lesson: "118", beforeHanzi: "村井莉加", count: 1 },
  { lesson: "126", beforeHanzi: "王亮", count: 1 },
  { lesson: "135", beforeHanzi: "林柏宇", count: 1 },
  { lesson: "143", beforeHanzi: "秋山梓", count: 1 }
];

const AUDIO_SPANS = {
  "056:这个:zhège / zhèige": 2,
  "056:那个:nàge / nèige": 2,
  "056:哪个:nǎge / něige": 2,
  "056:这些:zhèxie / zhèixie": 2,
  "056:那些:nàxie / nèixie": 2,
  "056:哪些:nǎxie / něixie": 2,
  "064:没 / 没有:méi / méiyǒu": 2,
  "089:这边（儿）:zhèbian(r) / zhèibian(r)": 2,
  "110:没 / 没有:méi / méiyou": 2,
  "119:没 / 没有〜过:méi / méiyou ~ guo": 4
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

function resolveInitialExam() {
  const param = new URLSearchParams(location.search).get("test");
  if (param === "1") return "first";
  if (param === "2") return "second";
  if (param === "3") return "third";
  if (param === "all") return "all";
  return localStorage.getItem("cnQuizLastExam") || "third";
}

const savedStats = JSON.parse(localStorage.getItem("cnQuizStats") || '{"total":0,"correct":0,"streak":0,"mistakes":{},"stars":{}}');
if (!savedStats.mistakes) savedStats.mistakes = {};
if (!savedStats.stars) savedStats.stars = {};

const state = {
  current: null,
  exam: resolveInitialExam(),
  mode: "mixed",
  lesson: "all",
  answered: false,
  mistakesOnly: false,
  autoPlay: localStorage.getItem("cnQuizAutoPlay") !== "false",
  hardMode: localStorage.getItem("cnQuizHardMode") === "true",
  playbackRate: 1,
  userInteracted: false,
  maskPinyin: false,
  maskMeaning: false,
  bankStarOnly: false,
  deck: [],
  deckIndex: 0,
  round: 1,
  colorMode: localStorage.getItem("cnQuizColorMode") || "light",
  stats: savedStats
};

const AUDIO_OFFSET_STORAGE_KEY = "cnQuizAudioOffsetsV2";
const audioOffsets = JSON.parse(localStorage.getItem(AUDIO_OFFSET_STORAGE_KEY) || "{}");

const els = {
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  examButtons: [...document.querySelectorAll("[data-exam]")],
  countFirst: document.querySelector("#countFirst"),
  countSecond: document.querySelector("#countSecond"),
  countThird: document.querySelector("#countThird"),
  countAll: document.querySelector("#countAll"),
  examDescription: document.querySelector("#examDescription"),
  mode: document.querySelector("#mode"),
  lesson: document.querySelector("#lesson"),
  autoPlayToggle: document.querySelector("#autoPlayToggle"),
  hardModeToggle: document.querySelector("#hardModeToggle"),
  mistakesOnly: document.querySelector("#mistakesOnly"),
  mistakeBadge: document.querySelector("#mistakeBadge"),
  resetStats: document.querySelector("#resetStats"),
  totalCount: document.querySelector("#totalCount"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  streakCard: document.querySelector("#streakCard"),
  deckLabel: document.querySelector("#deckLabel"),
  deckCounter: document.querySelector("#deckCounter"),
  progressFill: document.querySelector("#progressFill"),
  lessonBadge: document.querySelector("#lessonBadge"),
  modeBadge: document.querySelector("#modeBadge"),
  speedNormal: document.querySelector("#speedNormal"),
  speedSlow: document.querySelector("#speedSlow"),
  questionTitle: document.querySelector("#questionTitle"),
  questionHint: document.querySelector("#questionHint"),
  options: document.querySelector("#options"),
  feedback: document.querySelector("#feedback"),
  playWord: document.querySelector("#playWord"),
  replay: document.querySelector("#replay"),
  next: document.querySelector("#next"),
  shuffleDeck: document.querySelector("#shuffleDeck"),
  lessonAudio: document.querySelector("#lessonAudio"),
  clipTimeBadge: document.querySelector("#clipTimeBadge"),
  voiceSelect: document.querySelector("#voiceSelect"),
  audioPrev: document.querySelector("#audioPrev"),
  audioNext: document.querySelector("#audioNext"),
  audioResetOne: document.querySelector("#audioResetOne"),
  trackLabel: document.querySelector("#trackLabel"),
  wordCount: document.querySelector("#wordCount"),
  mistakeCount: document.querySelector("#mistakeCount"),
  bankCountLabel: document.querySelector("#bankCountLabel"),
  maskPinyin: document.querySelector("#maskPinyin"),
  maskMeaning: document.querySelector("#maskMeaning"),
  bankStarFilter: document.querySelector("#bankStarFilter"),
  search: document.querySelector("#search"),
  wordList: document.querySelector("#wordList")
};

let voices = [];
let audioContext;
let playingSource = null;
let playingWordEl = null;
const segmentCache = new Map();

function keyOf(word) {
  return word.id;
}

function isFlagged(word) {
  const id = keyOf(word);
  return Boolean(state.stats.stars[id] || (state.stats.mistakes[id] > 0));
}

function toggleStar(word) {
  const id = keyOf(word);
  if (isFlagged(word)) {
    delete state.stats.stars[id];
    delete state.stats.mistakes[id];
  } else {
    state.stats.stars[id] = true;
  }
  saveStats();
  updateStats();
  renderWordList();
}

function formatLessonLabel(lesson) {
  return LESSON_LABELS[lesson] || `第 ${lesson} 音声`;
}

function skipBefore(word) {
  const lessonWords = DATA.filter(w => w.lesson === word.lesson);
  const isFirstMatchingHanzi = lessonWords.find(w => w.hanzi === word.hanzi)?.id === word.id;
  if (!isFirstMatchingHanzi) return 0;
  return AUDIO_SKIPS
    .filter(skip => skip.lesson === word.lesson && skip.beforeHanzi === word.hanzi)
    .reduce((total, skip) => total + skip.count, 0);
}

function audioSpanOf(word) {
  return AUDIO_SPANS[word.baseKey] || 1;
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

function rangeOffsetOf(word) {
  const lessonWords = DATA.filter(candidate => candidate.lesson === word.lesson);
  const wordIndex = lessonWords.findIndex(candidate => candidate.id === word.id);
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
    if (item.id === word.id) return index + rangeOffsetOf(word);
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
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function matchesExam(word) {
  return state.exam === "all" ? true : word.exam === state.exam;
}

function matchesLessonFilter(word) {
  if (state.lesson === "all") return true;
  if (state.lesson.startsWith("ch:")) {
    return word.chapter === state.lesson.slice(3);
  }
  return word.lesson === state.lesson;
}

function scopeWords() {
  return DATA.filter(word => matchesExam(word) && word.quiz !== false && matchesLessonFilter(word));
}

function availableWords() {
  const base = scopeWords();
  if (state.mistakesOnly) {
    const flagged = base.filter(isFlagged);
    if (flagged.length) return flagged;
  }
  return base;
}

function rebuildDeck() {
  state.deck = shuffle(availableWords());
  state.deckIndex = 0;
  state.round = 1;
}

function drawNextWord() {
  const pool = availableWords();
  if (!pool.length) return null;

  // Rebuild if deck is empty or out of sync with current filter
  const poolIds = new Set(pool.map(w => w.id));
  const validRemaining = state.deck.slice(state.deckIndex).filter(w => poolIds.has(w.id));

  if (!validRemaining.length) {
    if (state.deck.length > 0) state.round += 1;
    state.deck = shuffle(pool);
    state.deckIndex = 0;
  }

  // Ensure we don't repeat the exact same word across round boundary if pool > 1
  if (state.deckIndex === 0 && state.current && pool.length > 1 && state.deck[0].id === state.current.word.id) {
    [state.deck[0], state.deck[1]] = [state.deck[1], state.deck[0]];
  }

  const word = state.deck[state.deckIndex];
  state.deckIndex += 1;
  return word;
}

function currentMode() {
  return state.mode === "mixed" ? sample(["pinyin", "hanzi"]) : state.mode;
}

function setPlayingIndicator(active, wordCardEl = null) {
  els.playWord.classList.toggle("playing", active);
  if (playingWordEl && playingWordEl !== wordCardEl) {
    playingWordEl.classList.remove("playingWord");
  }
  if (wordCardEl) {
    wordCardEl.classList.toggle("playingWord", active);
    playingWordEl = active ? wordCardEl : null;
  } else if (!active && playingWordEl) {
    playingWordEl.classList.remove("playingWord");
    playingWordEl = null;
  }
}

async function speak(word, wordCardEl = null) {
  if (!word) return;
  state.userInteracted = true;
  window.speechSynthesis?.cancel();

  const playedClip = await playOriginalClip(word, wordCardEl);
  if (playedClip) return;

  if (!("speechSynthesis" in window)) {
    showAudioNotice("このブラウザでは単語音声を再生できません。右側の原音声プレイヤーを使ってください。");
    return;
  }
  const selectedVoice = voices.find(voice => voice.name === els.voiceSelect.value) || getBestChineseVoice();
  if (!selectedVoice) {
    showAudioNotice("中国語音声が見つかりません。右側の原音声プレイヤーを再生して確認してください。");
    return;
  }

  const text = word.hanzi
    .replace(/（儿）/g, "")
    .replace(/〜/g, "")
    .replace(/\s*\/\s*/g, "、")
    .replace(/app/g, "APP");
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = selectedVoice;
  utterance.lang = "zh-CN";
  utterance.rate = state.playbackRate < 1 ? 0.65 : 0.82;
  utterance.pitch = 1;
  setPlayingIndicator(true, wordCardEl);
  utterance.onend = () => setPlayingIndicator(false, wordCardEl);
  utterance.onerror = () => setPlayingIndicator(false, wordCardEl);
  window.speechSynthesis.speak(utterance);
}

function showAudioNotice(message) {
  els.feedback.innerHTML = `<div class="revealCard bad"><div class="revealBody"><span class="revealMeaning">${escapeHtml(message)}</span></div></div>`;
}

async function updateClipBadgeFor(word) {
  try {
    const entry = await getLessonSegments(word.lesson);
    const segment = playbackSegmentFor(entry, word);
    if (segment) {
      els.clipTimeBadge.textContent = `${segment.start.toFixed(1)}s – ${segment.end.toFixed(1)}s`;
    } else {
      els.clipTimeBadge.textContent = "--:--";
    }
  } catch {
    els.clipTimeBadge.textContent = "--:--";
  }
}

async function playOriginalClip(word, wordCardEl = null) {
  try {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") await audioContext.resume();
    if (playingSource) {
      try { playingSource.stop(); } catch {}
      playingSource = null;
      setPlayingIndicator(false);
    }

    const entry = await getLessonSegments(word.lesson);
    const segment = playbackSegmentFor(entry, word);
    if (!segment) return false;

    els.clipTimeBadge.textContent = `${segment.start.toFixed(1)}s – ${segment.end.toFixed(1)}s`;

    const clipDur = Math.max(0.14, segment.end - segment.start);
    const now = audioContext.currentTime;
    const gainNode = audioContext.createGain();
    const fade = Math.min(0.012, clipDur * 0.15);
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.linearRampToValueAtTime(1.0, now + fade);
    const realPlayDuration = clipDur / state.playbackRate;
    gainNode.gain.setValueAtTime(1.0, now + Math.max(fade, realPlayDuration - fade));
    gainNode.gain.linearRampToValueAtTime(0.0001, now + realPlayDuration);

    const source = audioContext.createBufferSource();
    source.buffer = entry.buffer;
    source.playbackRate.value = state.playbackRate;
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    playingSource = source;
    setPlayingIndicator(true, wordCardEl);

    source.onended = () => {
      if (playingSource === source) {
        playingSource = null;
        setPlayingIndicator(false, wordCardEl);
      }
    };
    source.start(0, segment.start, clipDur);
    return true;
  } catch (error) {
    console.warn("Original clip playback failed", error);
    setPlayingIndicator(false, wordCardEl);
    return false;
  }
}

function playbackSegmentFor(entry, word) {
  const rule = AUDIO_CLIP_PARTS[word.baseKey];
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
  const pad = 0.025;
  if (part === "first") {
    return {
      start: segment.start,
      end: Math.max(segment.start + 0.08, split + pad)
    };
  }
  return {
    start: Math.min(segment.end - 0.08, split - pad),
    end: segment.end
  };
}

function findQuietSplit(buffer, segment) {
  const data = buffer.getChannelData(0);
  const sampleRate = buffer.sampleRate;
  const startSample = Math.max(0, Math.floor(segment.start * sampleRate));
  const endSample = Math.min(data.length - 1, Math.floor(segment.end * sampleRate));
  const center = Math.floor((startSample + endSample) / 2);
  const radius = Math.floor((endSample - startSample) * 0.28);
  const win = Math.max(64, Math.floor(sampleRate * 0.018));
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
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.arrayBuffer();
    })
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
  const hop = Math.floor(sampleRate * 0.012);
  const win = Math.floor(sampleRate * 0.026);
  const frames = [];

  for (let start = 0; start + win < data.length; start += hop) {
    let sum = 0;
    for (let i = start; i < start + win; i += 3) sum += data[i] * data[i];
    frames.push({ time: start / sampleRate, rms: Math.sqrt(sum / Math.ceil(win / 3)) });
  }

  const sorted = frames.map(frame => frame.rms).sort((a, b) => a - b);
  const peak = sorted[Math.floor(sorted.length * 0.98)] || 0;
  const noise = sorted[Math.floor(sorted.length * 0.30)] || 0;
  const threshold = Math.max(0.004, noise * 2.6, peak * 0.10);
  const raw = [];
  let startTime = null;

  for (const frame of frames) {
    if (frame.rms > threshold && startTime === null) startTime = frame.time;
    if (frame.rms <= threshold && startTime !== null) {
      const end = frame.time + win / sampleRate;
      if (end - startTime > 0.08) raw.push({ start: Math.max(0, startTime - 0.04), end: Math.min(buffer.duration, end + 0.08) });
      startTime = null;
    }
  }
  if (startTime !== null) raw.push({ start: Math.max(0, startTime - 0.04), end: buffer.duration });

  let merged = mergeSegments(raw, 0.22);
  if (merged.length > expectedCount) merged = mergeSegments(raw, 0.38);
  if (merged.length > expectedCount) merged = mergeShortestGaps(merged, expectedCount);

  const sliced = merged.slice(0, expectedCount);

  // Preserve soft initial consonants (ch-, sh-, c-, s-, x-, q-, t-, p-, k-, f-, h-) by gently expanding into surrounding silence
  return sliced.map((seg, i) => {
    const prevEnd = i > 0 ? sliced[i - 1].end : 0;
    const nextStart = i < sliced.length - 1 ? sliced[i + 1].start : buffer.duration;
    const leftGap = Math.max(0, seg.start - prevEnd);
    const rightGap = Math.max(0, nextStart - seg.end);
    const prePad = Math.min(0.14, leftGap * 0.35);
    const postPad = Math.min(0.08, rightGap * 0.30);
    return {
      start: Math.max(0, seg.start - prePad),
      end: Math.min(buffer.duration, seg.end + postPad)
    };
  });
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
    "xiaoxiao", "xiaoyi", "xiaobei", "xiaoni", "xiaoxuan",
    "ting-ting", "tingting", "mei-jia", "meijia", "sin-ji", "zh"
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

function primaryPinyin(pinyin) {
  return pinyin
    .split("/")[0]
    .replace(/\(r\)/gi, "")
    .replace(/~/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function stripToneMarks(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function hasAudioAmbiguity(a, b) {
  if (a.hanzi === b.hanzi) return true;
  if (a.meaning === b.meaning) return true;
  const pa = primaryPinyin(a.pinyin);
  const pb = primaryPinyin(b.pinyin);
  if (pa === pb) return true;
  // Also avoid neutral-tone vs full-tone duplicates of identical character root like guò vs guo
  if (stripToneMarks(pa) === stripToneMarks(pb) && a.hanzi.replace(/（儿）/g, "") === b.hanzi.replace(/（儿）/g, "")) {
    return true;
  }
  return false;
}

function buildOptions(word, mode) {
  const examPool = DATA.filter(item =>
    matchesExam(item) &&
    item.quiz !== false &&
    item.id !== word.id &&
    !hasAudioAmbiguity(item, word)
  );

  // Prefer distractors from same exam, deduplicated against each other too
  const chosen = [];
  for (const candidate of shuffle(examPool)) {
    if (chosen.length >= 3) break;
    if (chosen.some(existing => hasAudioAmbiguity(existing, candidate))) continue;
    chosen.push(candidate);
  }

  return shuffle([word, ...chosen]).map(item => {
    let label = item.hanzi;
    let sub = item.pinyin;
    let isChineseLabel = true;

    if (mode === "pinyin") {
      label = item.pinyin;
      sub = item.hanzi;
      isChineseLabel = false;
    } else if (mode === "meaning") {
      label = item.meaning;
      sub = `${item.hanzi} · ${item.pinyin}`;
      isChineseLabel = false;
    }

    return {
      word: item,
      label,
      sub,
      isChineseLabel,
      isMeaningMode: mode === "meaning",
      correct: item.id === word.id
    };
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderOptionContent(option, revealed) {
  const mainLang = option.isChineseLabel ? ' lang="zh-CN"' : "";
  const mainClass = option.isMeaningMode ? "optMain meaningLabel" : "optMain";

  let subHtml = "";
  if (revealed) {
    const detail = option.isMeaningMode
      ? `${escapeHtml(option.word.hanzi)} · ${escapeHtml(option.word.pinyin)}`
      : `${escapeHtml(option.sub)} — ${escapeHtml(option.word.meaning)}`;
    subHtml = `<small class="optSub" lang="zh-CN">${detail}</small>`;
  } else if (!state.hardMode && !option.isMeaningMode) {
    const subLang = option.isChineseLabel ? "" : ' lang="zh-CN"';
    subHtml = `<small class="optSub"${subLang}>${escapeHtml(option.sub)}</small>`;
  }

  return `
    <div class="optContent">
      <span class="${mainClass}"${mainLang}>${escapeHtml(option.label)}</span>
      ${subHtml}
    </div>
    <span class="optAudioHint" aria-hidden="true">${revealed ? "🔊" : ""}</span>
  `;
}

function updateDeckProgressUI() {
  const totalInDeck = Math.max(1, state.deck.length);
  const currentPos = Math.min(totalInDeck, state.deckIndex);
  els.deckLabel.textContent = state.mistakesOnly
    ? `⭐ 要復習ラウンド ${state.round}周目`
    : `ラウンド ${state.round}周目`;
  els.deckCounter.textContent = `${currentPos} / ${totalInDeck} 語`;
  els.progressFill.style.width = `${Math.round((currentPos / totalInDeck) * 100)}%`;
}

function nextQuestion({ autoSpeak = false } = {}) {
  const word = drawNextWord();
  if (!word) return;
  const mode = currentMode();
  const options = buildOptions(word, mode);
  state.current = { word, mode, options };
  state.answered = false;

  els.lessonBadge.textContent = formatLessonLabel(word.lesson);
  const modeTitleMap = {
    pinyin: "ピンインを選ぶ",
    hanzi: "漢字を選ぶ",
    meaning: "意味を選ぶ"
  };
  els.modeBadge.textContent = modeTitleMap[mode];
  els.questionTitle.textContent = "中国語音声を聞いて正解を選ぼう";
  els.questionHint.textContent = state.hardMode
    ? "本番モード中：補助ヒントなしで聞き取りに挑戦！"
    : "耳だけで聞き取って選択。回答後は各選択肢をタップして音を聞き比べられます。";
  els.feedback.innerHTML = "";
  els.lessonAudio.src = `./audio/${word.lesson}.mp3`;
  els.trackLabel.textContent = `${formatLessonLabel(word.lesson)} のフル原音声`;

  updateDeckProgressUI();
  updateClipBadgeFor(word);

  els.options.innerHTML = "";
  options.forEach((option, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.correct = String(option.correct);
    button.innerHTML = `<span class="optKey">${idx + 1}</span>${renderOptionContent(option, false)}`;
    button.addEventListener("click", () => {
      if (!state.answered) {
        answer(idx);
      } else {
        speak(option.word);
      }
    });
    els.options.append(button);
  });

  updateStats();

  if (autoSpeak && state.autoPlay && state.userInteracted) {
    speak(word);
  }
}

function renderFeedbackCard(word, isCorrect) {
  const starred = isFlagged(word);
  const verdict = isCorrect
    ? (state.stats.streak >= 3 ? `正解！ 🔥 ${state.stats.streak}連続` : "正解！")
    : "惜しい！ 正解はこちら";

  els.feedback.innerHTML = `
    <div class="revealCard ${isCorrect ? "good" : "bad"}">
      <div class="revealBody">
        <span class="revealVerdict">${escapeHtml(verdict)}</span>
        <div class="revealWord">
          <span class="revealHanzi" lang="zh-CN">${escapeHtml(word.hanzi)}</span>
          <span class="revealPinyin">${escapeHtml(word.pinyin)}</span>
        </div>
        <span class="revealMeaning">${escapeHtml(word.meaning)}</span>
      </div>
      <button id="revealStarBtn" class="starBtn ${starred ? "starred" : ""}" type="button">
        <span>${starred ? "★ 要復習に登録中" : "☆ 要復習に追加"}</span>
      </button>
    </div>
  `;

  document.querySelector("#revealStarBtn")?.addEventListener("click", () => {
    toggleStar(word);
    renderFeedbackCard(word, isCorrect);
  });
}

function answer(selectedIndex) {
  if (state.answered || !state.current) return;
  state.userInteracted = true;
  state.answered = true;

  const { word, options } = state.current;
  const chosenOption = options[selectedIndex];
  if (!chosenOption) return;
  const isCorrect = chosenOption.correct;
  const id = keyOf(word);

  state.stats.total += 1;
  if (isCorrect) {
    state.stats.correct += 1;
    state.stats.streak += 1;
    if (state.stats.mistakes[id]) {
      state.stats.mistakes[id] -= 1;
      if (state.stats.mistakes[id] <= 0) delete state.stats.mistakes[id];
    }
  } else {
    state.stats.streak = 0;
    state.stats.mistakes[id] = (state.stats.mistakes[id] || 0) + 1;
  }

  [...els.options.children].forEach((optionButton, idx) => {
    const opt = options[idx];
    optionButton.classList.add("locked");
    if (idx === selectedIndex && !isCorrect) optionButton.classList.add("wrong");
    if (opt.correct) optionButton.classList.add("correct");
    optionButton.innerHTML = `<span class="optKey">${idx + 1}</span>${renderOptionContent(opt, true)}`;
  });

  renderFeedbackCard(word, isCorrect);
  saveStats();
  updateStats();
  renderWordList();
}

function updateStats() {
  els.totalCount.textContent = state.stats.total;
  els.accuracy.textContent = state.stats.total
    ? `${Math.round((state.stats.correct / state.stats.total) * 100)}%`
    : "0%";
  els.streak.textContent = state.stats.streak;
  els.streakCard.classList.toggle("hot", state.stats.streak >= 5);

  const examScope = DATA.filter(word => matchesExam(word) && word.quiz !== false);
  const flaggedCount = examScope.filter(isFlagged).length;

  els.wordCount.textContent = availableWords().length;
  els.mistakeCount.textContent = flaggedCount;
  els.mistakeBadge.textContent = flaggedCount;

  els.countFirst.textContent = DATA.filter(w => w.exam === "first" && w.quiz !== false).length;
  els.countSecond.textContent = DATA.filter(w => w.exam === "second" && w.quiz !== false).length;
  els.countThird.textContent = DATA.filter(w => w.exam === "third" && w.quiz !== false).length;
  els.countAll.textContent = DATA.filter(w => w.quiz !== false).length;
}

function renderLessons() {
  els.lesson.innerHTML = '<option value="all">すべての範囲</option>';
  const examWords = DATA.filter(word => matchesExam(word) && word.quiz !== false);

  const chapters = [...new Set(examWords.map(w => w.chapter).filter(Boolean))];
  if (chapters.length) {
    const chGroup = document.createElement("optgroup");
    chGroup.label = "課ごとにまとめて練習";
    chapters.forEach(ch => {
      const tracks = [...new Set(examWords.filter(w => w.chapter === ch).map(w => w.lesson))];
      const count = examWords.filter(w => w.chapter === ch).length;
      const opt = document.createElement("option");
      opt.value = `ch:${ch}`;
      opt.textContent = `第${ch}課まとめ (${tracks.join("・")} / ${count}語)`;
      chGroup.append(opt);
    });
    els.lesson.append(chGroup);
  }

  const trackGroup = document.createElement("optgroup");
  trackGroup.label = "音声トラック別";
  [...new Set(examWords.map(word => word.lesson))].forEach(lesson => {
    const count = examWords.filter(w => w.lesson === lesson).length;
    const option = document.createElement("option");
    option.value = lesson;
    option.textContent = `${formatLessonLabel(lesson)} (${count}語)`;
    trackGroup.append(option);
  });
  els.lesson.append(trackGroup);
}

function renderWordList() {
  const query = els.search.value.trim().toLowerCase();
  const words = DATA.filter(word => {
    if (!matchesExam(word) || word.quiz === false) return false;
    if (!matchesLessonFilter(word)) return false;
    if (state.bankStarOnly && !isFlagged(word)) return false;
    if (!query) return true;
    const text = `${word.lesson} ${word.chapter || ""} ${word.hanzi} ${word.pinyin} ${stripToneMarks(word.pinyin)} ${word.meaning}`.toLowerCase();
    return text.includes(query);
  });

  els.bankCountLabel.textContent = `${words.length} 語`;
  els.wordList.classList.toggle("mask-pinyin", state.maskPinyin);
  els.wordList.classList.toggle("mask-meaning", state.maskMeaning);
  els.wordList.innerHTML = "";

  if (!words.length) {
    els.wordList.innerHTML = `<div class="emptyState">該当する単語がありません。検索条件やフィルターを変更してください。</div>`;
    return;
  }

  words.forEach(word => {
    const starred = isFlagged(word);
    const item = document.createElement("div");
    item.className = "word";
    item.innerHTML = `
      <div class="wordTop">
        <span class="wordLesson">${escapeHtml(formatLessonLabel(word.lesson))}</span>
        <div class="wordActions">
          <button class="wordStar ${starred ? "starred" : ""}" type="button" aria-label="要復習スター切替" title="要復習リストに追加・解除">
            ${starred ? "★" : "☆"}
          </button>
        </div>
      </div>
      <b lang="zh-CN">${escapeHtml(word.hanzi)}</b>
      <span class="wPinyin">${escapeHtml(word.pinyin)}</span>
      <small class="wMeaning">${escapeHtml(word.meaning)}</small>
    `;

    const starBtn = item.querySelector(".wordStar");
    starBtn.addEventListener("click", e => {
      e.stopPropagation();
      toggleStar(word);
    });

    item.addEventListener("click", () => {
      if (state.maskPinyin || state.maskMeaning) {
        item.classList.toggle("peek");
      }
      speak(word, item);
    });
    els.wordList.append(item);
  });
}

function applyColorMode() {
  document.body.dataset.colorMode = state.colorMode;
  els.themeIcon.textContent = state.colorMode === "dark" ? "☀️" : "🌙";
  localStorage.setItem("cnQuizColorMode", state.colorMode);
}

function setExam(exam, { autoSpeak = false } = {}) {
  state.exam = exam;
  state.lesson = "all";
  state.mistakesOnly = false;
  localStorage.setItem("cnQuizLastExam", exam);
  document.body.dataset.examTheme = exam;
  els.mistakesOnly.classList.remove("active");
  els.mistakesOnly.setAttribute("aria-pressed", "false");
  els.search.value = "";

  els.examButtons.forEach(button => {
    const selected = button.dataset.exam === exam;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });

  const descMap = {
    first: "第1回テスト（音声 047〜073）の単語を出題します",
    second: "第2回テスト（音声 081〜102）の単語を出題します",
    third: "第3回テスト（第12課〜第16課：音声 110〜144）の単語を出題します",
    all: "第1回〜第3回のすべてのテスト範囲をまとめて出題します"
  };
  els.examDescription.textContent = descMap[exam] || descMap.third;

  const url = new URL(location.href);
  const paramMap = { first: "1", second: "2", third: "3", all: "all" };
  url.searchParams.set("test", paramMap[exam] || "3");
  history.replaceState(null, "", url);

  renderLessons();
  rebuildDeck();
  renderWordList();
  nextQuestion({ autoSpeak });
}

// Event Listeners
els.themeToggle.addEventListener("click", () => {
  state.colorMode = state.colorMode === "dark" ? "light" : "dark";
  applyColorMode();
});

els.mode.addEventListener("change", () => {
  state.mode = els.mode.value;
  nextQuestion({ autoSpeak: true });
});

els.examButtons.forEach(button => {
  button.addEventListener("click", () => {
    state.userInteracted = true;
    setExam(button.dataset.exam, { autoSpeak: false });
  });
});

els.lesson.addEventListener("change", () => {
  state.lesson = els.lesson.value;
  rebuildDeck();
  renderWordList();
  nextQuestion({ autoSpeak: true });
});

els.autoPlayToggle.addEventListener("click", () => {
  state.autoPlay = !state.autoPlay;
  localStorage.setItem("cnQuizAutoPlay", String(state.autoPlay));
  els.autoPlayToggle.classList.toggle("active", state.autoPlay);
  els.autoPlayToggle.setAttribute("aria-pressed", String(state.autoPlay));
});

els.hardModeToggle.addEventListener("click", () => {
  state.hardMode = !state.hardMode;
  localStorage.setItem("cnQuizHardMode", String(state.hardMode));
  els.hardModeToggle.classList.toggle("active", state.hardMode);
  els.hardModeToggle.setAttribute("aria-pressed", String(state.hardMode));
  if (state.current && !state.answered) {
    [...els.options.children].forEach((btn, idx) => {
      btn.innerHTML = `<span class="optKey">${idx + 1}</span>${renderOptionContent(state.current.options[idx], false)}`;
    });
    els.questionHint.textContent = state.hardMode
      ? "本番モード中：補助ヒントなしで聞き取りに挑戦！"
      : "耳だけで聞き取って選択。回答後は各選択肢をタップして音を聞き比べられます。";
  }
});

els.mistakesOnly.addEventListener("click", () => {
  state.mistakesOnly = !state.mistakesOnly;
  els.mistakesOnly.classList.toggle("active", state.mistakesOnly);
  els.mistakesOnly.setAttribute("aria-pressed", String(state.mistakesOnly));
  rebuildDeck();
  nextQuestion({ autoSpeak: true });
});

[els.speedNormal, els.speedSlow].forEach(btn => {
  btn.addEventListener("click", () => {
    state.playbackRate = Number(btn.dataset.rate) || 1;
    els.speedNormal.classList.toggle("active", state.playbackRate === 1);
    els.speedSlow.classList.toggle("active", state.playbackRate !== 1);
    if (state.current) speak(state.current.word);
  });
});

els.resetStats.addEventListener("click", () => {
  if (!confirm("これまでの回答数・正答率・要復習リストをリセットしますか？")) return;
  state.stats = { total: 0, correct: 0, streak: 0, mistakes: {}, stars: {} };
  saveStats();
  updateStats();
  renderWordList();
});

els.playWord.addEventListener("click", () => speak(state.current?.word));
els.replay.addEventListener("click", () => speak(state.current?.word));
els.next.addEventListener("click", () => {
  state.userInteracted = true;
  nextQuestion({ autoSpeak: true });
});
els.shuffleDeck.addEventListener("click", () => {
  state.userInteracted = true;
  rebuildDeck();
  nextQuestion({ autoSpeak: true });
});

els.audioPrev.addEventListener("click", () => {
  if (!state.current) return;
  const id = keyOf(state.current.word);
  audioOffsets[id] = (audioOffsets[id] || 0) - 1;
  saveAudioOffsets();
  speak(state.current.word);
});

els.audioNext.addEventListener("click", () => {
  if (!state.current) return;
  const id = keyOf(state.current.word);
  audioOffsets[id] = (audioOffsets[id] || 0) + 1;
  saveAudioOffsets();
  speak(state.current.word);
});

els.audioResetOne.addEventListener("click", () => {
  if (!state.current) return;
  const id = keyOf(state.current.word);
  delete audioOffsets[id];
  saveAudioOffsets();
  speak(state.current.word);
});

els.maskPinyin.addEventListener("click", () => {
  state.maskPinyin = !state.maskPinyin;
  els.maskPinyin.classList.toggle("active", state.maskPinyin);
  renderWordList();
});

els.maskMeaning.addEventListener("click", () => {
  state.maskMeaning = !state.maskMeaning;
  els.maskMeaning.classList.toggle("active", state.maskMeaning);
  renderWordList();
});

els.bankStarFilter.addEventListener("click", () => {
  state.bankStarOnly = !state.bankStarOnly;
  els.bankStarFilter.classList.toggle("active", state.bankStarOnly);
  renderWordList();
});

els.search.addEventListener("input", renderWordList);

// Keyboard Shortcuts
document.addEventListener("keydown", event => {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;

  if (["1", "2", "3", "4"].includes(event.key)) {
    event.preventDefault();
    const idx = Number(event.key) - 1;
    if (!state.answered) {
      answer(idx);
    } else if (state.current?.options[idx]) {
      speak(state.current.options[idx].word);
    }
  } else if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    speak(state.current?.word);
  } else if (event.key === " ") {
    event.preventDefault();
    if (!state.answered) {
      speak(state.current?.word);
    } else {
      state.userInteracted = true;
      nextQuestion({ autoSpeak: true });
    }
  } else if (event.key === "Enter" || event.key === "ArrowRight") {
    event.preventDefault();
    state.userInteracted = true;
    nextQuestion({ autoSpeak: true });
  } else if (event.key.toLowerCase() === "s" && state.current) {
    event.preventDefault();
    toggleStar(state.current.word);
    if (state.answered) {
      const chosen = [...els.options.children].findIndex(el => el.classList.contains("wrong"));
      renderFeedbackCard(state.current.word, chosen === -1);
    }
  }
});

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}

// Initialize toggles UI & exam
applyColorMode();
els.autoPlayToggle.classList.toggle("active", state.autoPlay);
els.autoPlayToggle.setAttribute("aria-pressed", String(state.autoPlay));
els.hardModeToggle.classList.toggle("active", state.hardMode);
els.hardModeToggle.setAttribute("aria-pressed", String(state.hardMode));

setExam(state.exam);

window.quizDebug = {
  DATA,
  getLessonSegments,
  playbackSegmentFor,
  speakCurrent: () => speak(state.current?.word)
};
