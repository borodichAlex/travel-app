const places = [
    {
        id: 13,
        countryId: 6,
        imageUrl: "https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg",
        localizations: [
            {
                lang: "en",
                name: "Eiffel Tower",
                description: "The symbol of Paris, the Eiffel Tower is a feat of ingenuity as much as it is a famous landmark. This structure of 8,000 metallic parts was designed by Gustave Eiffel as a temporary exhibit for the World Fair of 1889. Originally loathed by critics, the 320-meter-high tower is now a beloved and irreplaceable fixture of the Paris skyline."
            },
            {
                lang: "ru",
                name: "Эйфелева Башня",
                description: "Эйфелева башня, символ Парижа, - это не только знаменитая достопримечательность, но и проявление изобретательности. Эта конструкция из 8000 металлических деталей была спроектирована Гюставом Эйфелем в качестве экспоната для Всемирной выставки 1889 года. Первоначально ненавидимая критиками башня высотой 320 метров теперь является любимым и незаменимым элементом парижского горизонта."
            },
            {
                lang: "be",
                name: "Эйфелева вежа",
                description: "Сімвал Парыжа - Эйфелева вежа - гэта подзвіг вынаходлівасці, роўна як і знакамітая славутасць. Гэта канструкцыя з 8000 металічных дэталяў была распрацавана Гюставам Эйфелем у якасці часовага экспаната для Сусветнага кірмашу 1889 года. Першапачаткова ненавідная крытыкамі вежа вышынёй 320 метраў стала ўлюбёным і незаменным прыстасаваннем Парыжа."
            }
        ]
    },
    {
        id: 14,
        countryId: 6,
        imageUrl: "https://www.planetware.com/photos-large/F/france-louvre-museum-2.jpg",
        localizations: [
            {
                lang: "en",
                name: "Louvre Museum",
                description: "In a stately palace that was once a royal residence, the Louvre ranks among the top European collections of fine arts. Many of Western Civilization's most famous works are found here, including the Mona Lisa by Leonardo DaVinci, the Wedding Feast at Cana by Veronese, and the 1st-century-BC Venus de Milo sculpture."
            },
            {
                lang: "ru",
                name: "Музей Лувра",
                description: "В величественном дворце, который когда-то был королевской резиденцией, Лувр входит в число лучших европейских собраний изящных искусств. Здесь находятся многие из самых известных произведений западной цивилизации, в том числе «Мона Лиза» Леонардо да Винчи, «Свадебный пир в Кане» Веронезе и скульптура Венеры Милосской I века до нашей эры."
            },
            {
                lang: "be",
                name: "Музей Луўра",
                description: "У велічным палацы, які калісьці быў каралеўскай рэзідэнцыяй, Луўр уваходзіць у лік лепшых еўрапейскіх калекцый выяўленчага мастацтва. Тут знойдзена шмат самых вядомых работ Заходняй цывілізацыі, у тым ліку Мона Ліза Леанарда ДаВінчы, Вясельнае свята ў Кане Веранезе і скульптура Венера Міла І стагоддзя да н.э."
            }
        ]
    },
    {
        id: 15,
        countryId: 6,
        imageUrl: "https://www.planetware.com/photos-large/F/france-versailles.jpg",
        localizations: [
            {
                lang: "en",
                name: "Palace of Versailles",
                description: "More than just a royal residence, Versailles was designed to show off the glory of the French monarchy. Sun King Louis XIV transformed his father's small hunting lodge into an opulent palace with a sumptuous Baroque interior. The palace became Louis XIV's symbol of absolute power and set the standard for princely courts in Europe."
            },
            {
                lang: "ru",
                name: "Версальский Дворец",
                description: "Версаль - это не просто королевская резиденция, он был создан, чтобы продемонстрировать величие французской монархии. «Король-солнце» Людовик XIV превратил небольшой охотничий домик своего отца в роскошный дворец с роскошным интерьером в стиле барокко. Дворец стал символом абсолютной власти Людовика XIV и установил стандарт для княжеских дворов в Европе."
            },
            {
                lang: "be",
                name: "Версальскі Палац",
                description: "Версаль - гэта не проста каралеўская рэзідэнцыя, ён быў створаны, каб прадэманстраваць веліч французскай манархіі. «Кароль-сонца» Людовік XIV ператварыў невялікі паляўнічы домік свайго бацькі ў раскошны палац з раскошным інтэр'ерам ў стылі барока. Палац стаў сімвалам абсалютнай улады Людовіка XIV і ўсталяваў стандарт для княжацкіх двароў у Еўропе."
            }
        ]
    },
    {
        id: 16,
        countryId: 6,
        imageUrl: "https://www.planetware.com/photos-large/F/france-cote-d-azure.jpg",
        localizations: [
            {
                lang: "en",
                name: "Côte d'Azur",
                description: "The most fashionable stretch of coastline in France, the Côte d'Azur extends from Saint-Tropez to Menton near the border with Italy. Côte d'Azur translates to Coast of Blue, a fitting name to describe the Mediterranean's mesmerizing cerulean waters. To English speakers, this glamorous seaside destination is known as the French Riviera, words that have a ring of sun-drenched decadence."
            },
            {
                lang: "ru",
                name: "Лазурный берег",
                description: "Лазурный берег, самый модный участок побережья Франции, простирается от Сен-Тропе до Ментона, недалеко от границы с Италией. Лазурный берег переводится как «Голубое побережье», подходящее название для описания завораживающих лазурных вод Средиземного моря. Для англоговорящих это гламурное приморское направление известно как Французская Ривьера, слова, которые имеют оттенок залитого солнцем декаданса."
            },
            {
                lang: "be",
                name: "Блакітны бераг",
                description: "Блакітны бераг, самы модны ўчастак ўзбярэжжа Францыі, распасціраецца ад Сен-Сцежцы да Мэнтана, недалёка ад мяжы з Італіяй. Блакітны бераг перакладаецца як «Блакітнае ўзбярэжжа», адпаведная назва для апісання зачаравальных блакітных вод Міжземнага мора. Для ангельскамоўных гэта гламурнае прыморскі кірунак вядома як Французская Рыўера, словы, якія маюць адценне залітага сонцам дэкадансу."
            }
        ]
    },
    {
        id: 17,
        countryId: 6,
        imageUrl: "https://www.planetware.com/photos-large/F/france-mont-saint-michel-2.jpg",
        localizations: [
            {
                lang: "en",
                name: "Mont Saint-Michel",
                description: "Rising dramatically from a rocky islet off the Normandy coast, the UNESCO-listed Mont Saint-Michel is one of France's most striking landmarks. This Pyramid of the Seas is a mystical sight, perched 80 meters above the bay and surrounded by imposing defensive walls and bastions."
            },
            {
                lang: "ru",
                name: "Мон-Сен-Мишель",
                description: "Мон-Сен-Мишель, внесенный в список всемирного наследия ЮНЕСКО, резко возвышается над скалистым островком у побережья Нормандии и является одной из самых ярких достопримечательностей Франции. Эта «Пирамида морей» - мистическое зрелище, возвышающаяся на 80 метров над заливом и окруженная внушительными оборонительными стенами и бастионами."
            },
            {
                lang: "be",
                name: "Мон-Сен-Мішэль",
                description: "Мон-Сен-Мішэль, унесены ў спіс сусветнай спадчыны ЮНЕСКА, рэзка узвышаецца над скалістым астраўком ля ўзбярэжжа Нармандыі і з'яўляецца адной з самых яркіх славутасцяў Францыі. Гэтая «Піраміда мораў» - містычнае відовішча, якая ўзвышаецца на 80 метраў над залівам і акружаная вялікімі абарончымі сценамі і бастыёнамі."
            }
        ]
    },
    {
        id: 18,
        countryId: 6,
        imageUrl: "https://www.planetware.com/photos-large/F/france-loire-valley.jpg",
        localizations: [
            {
                lang: "en",
                name: "Loire Valley Châteaux",
                description: "Traveling through the Loire Valley feels like turning the pages of a children's storybook. Throughout the enchanting countryside of woodlands and river valleys are fairy-tale castles complete with moats and turreted towers. The entire area of the Loire Valley, a lush area known as the Garden of France, is listed as a UNESCO World Heritage Site."
            },
            {
                lang: "ru",
                name: "Замки в долине Луары",
                description: "Путешествие по долине Луары похоже на перелистывание страниц детского сборника рассказов. В очаровательной сельской местности лесов и речных долин расположены сказочные замки со рвами и башнями с башнями. Вся территория долины Луары, цветущей пышной растительности, известной как «Сады Франции», внесена в список Всемирного наследия ЮНЕСКО."
            },
            {
                lang: "be",
                name: "Замкі ў даліне Луары",
                description: "Падарожжа па даліне Луары падобна на перагортванне старонак дзіцячага зборніка апавяданняў. У чароўнай сельскай мясцовасці лясоў і рачных далін размешчаны казачныя замкі са равамі і вежамі з вежамі. Уся тэрыторыя даліны Луары, квітнеючай пышнай расліннасці, вядомай як «Сады Францыі», занесеная ў спіс Сусветнай спадчыны ЮНЕСКА"
            }
        ]
    }
]

export default places;