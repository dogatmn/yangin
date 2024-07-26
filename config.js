var config = {
    style: 'mapbox://styles/dogatmn/clyseydg9001201nu65sb3kb7',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: true,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Yangınlar',
    subtitle: 'Hocapaşa Yangını / Beyazıt Yangın Kulesi / Tulumbacılar',
    byline: 'BAP_Mapping Metabolism of Istanbul / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'full',
            hidden: false,
            title: 'Yangın Var!',
            image: 'https://i.ibb.co/Cm2C0WS/Yang-n-Var-05-07-24.png',
            description: 'The image is produced for the Project titled as “Interactive Mapping of İstanbul’s Metabolism (MEF AAP 027)” Funded by Mef University Project Coordinator: Dr. Esra Sert, 2024-2025.',
            location: {
                center: [28.97631, 41.01403],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'layer-name',
                    opacity: 1,
                     duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'sull',
            hidden: false,
            title: '1865 Hocapaşa Yangını',
            image: 'https://i.ibb.co/dWVFVzV/1865-Hocapa-a-Yang-n-Grav-r-stanbul-da-tfaiye-Murat-Erdin-1.png',
            description: 'Osmanlı’da bilinen büyük yangınlardan biri 1865 Hocapaşa Yangını’dır. Bu yangında kayda geçen 1007 bina yanmış (Doğan, 2019), yangın sonrası bölgede büyük bir yıkım ve tahribat yaşanmış, dahası birçok insan evsiz kalmıştır. Bazı durumlarda ise yangınların, Hocapaşa örneğinde olduğu gibi kolera gibi salgın hastalıklar açısından bir dezenfeksiyon süreci (Ulman and Yıldırım; 2006) olarak da anlamlandırıldığına rastlarız. // Image: 1865 Hocapaşa Yangını Gravürü- Source: İstanbul’da İtfaiye by Murat Erdin / Mart 2023',
            theme: 'light1',
            location: {
                center: [28.97631, 41.01403],
                zoom: 14,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/p0fwjnd/1870-beyo-lu-yang-n-stanbul-da-tfaiye-Murat-Erdin-1.png',
            description: '1853-1906 yılları arasında toplam 229 yangın ile birlikte en çok 1854 Aksaray ve 1865 Hocapaşa Yangını kenti radikal olarak değiştirir (Erdikmen 2013, 70). Hocapaşa Yangını’ndan sonra "Turuk ve Ebniye Nizamnamesi" (1863) adı verilen yeni ve genişletilmiş bir mevzuat oluşturulur. Ahşaptan kagir yapılara doğru değişen inşaat yöntemleri bu büyük yangınlarla ilişkilidir. Söz konusu yangınlar altyapısal değişiklikler ile çıkmaz sokaklardan daha geniş doğrusal caddelere uzanan değişimlere kadar İstanbul etkiler. // Image: 1870 Beyoğlu Yangını’nı gösteren gravür. - Source: SALT Araştırma Arşivi / n.d.',
            location: {
                center: [28.96543, 41.03454],
                zoom: 12,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/3p51G97/image.jpg',
            description: 'Sokakların organik yapısı, ahşap yapılar, rüzgârlar, kazalar, yangın kuleleri, tulumbacılar, sakalar, çığırtkanlar, didebanlar, çeşmelerin konumları ve kontrolleri, kargir yapılara geçiş, su altyapısı, kundaklama, yağmalar ve sigorta şirketlerinin veya itfaiye birliklerinin ekonomik çıkarları aynı zamanda büyük yangınların iç içe geçmiş nedenleri ve sonuçları olarak görülebilir. Büyük yangınlar aynı zamanda İstanbul’un metabolizmasını etkileyecek biçimde memnuniyetsizliği göstermenin bir aracı ve yeniçeriler, tulumbacılar ve kayıkçıların direnme biçimleri olarak kentsel gündeme az ya da çok müdahale etme girişimleri olarak da kullanılır. // Image: 1954-11-28 tarihli gazete küpürü. - Source: SALT Araştırma Arşivi / n.d.',
            location: {
                center: [28.97631, 41.01403],
                zoom: 12,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Beyazıt Yangın Kulesi ve Didebanlar',
            image: 'https://i.ibb.co/VHqXFjy/image-1.jpg',
            description: 'Beyazıt Kulesi 1996, Galata Kulesi ise 1964 yılına kadar gözlem kulesi olarak kullanıldı. O zamanki hava kirliliğinin bugüne nazaran çok az olması dolayısıyla Beyazıt Yangın Kulesi’nden bütün İstanbul; Kadıköy’den Vaniköy’e kadar Anadolu yakası ile Bebek’e kadar olan Rumeli yakası izlenebiliyordu. Galata Kulesi’nden kendi civarı ve Eyüp tarafı gözetleniyordu. 19. yüzyılda İstanbul’un büyük yangınları yeni metabolik bir ilişki tanımlarken; dideban, çığırtkan, tulumbacılar, sakalar gibi aktörlerin varlığı yangınların söndürülmesinin hala insan emeğine bağlı olduğunu gözler önüne serer. // Image: Beyazıt Kulesi 1853-55 - Source: James Robertson',
            location: {
                center: [28.96469, 41.01140],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/42pghpG/Toplama.jpg',
            description: 'Yangın kulelerinde gözlem yapan görevlilere dideban denirdi. Devriye sırasında kulenin farklı noktalarında durup etrafı dürbünle kontrol ederlerdi. Kulelerde görev yapan köşklülerin bir kısmı kuleden yangın gözetlerken bir kısmı yangını mahallelere haber verirdi. Didebanlar, yangını gördüklerinde kule ağasına haber verir ve çığırtkanlık yapacak olan köşklü mahalleleri dolaşarak yangının yerini tulumbacılara, bekçilere ve halka duyurulmasını sağlarlardı. Köşklüler içinde hem gözetleme görevi yapan hem de yangını gördüğünde kuleden inip mahallelere yangın çığırtkanlığı yapanlar da bulunuyordu. Telgraf ve telefonun yaygınlaştırılması ile çığırtkanlara ihtiyaç azalmış, 1924’te çığırtkanlık sona ermiş, didebanlar ise itfaiye memuru olarak görevlerine devam etmiştir. Sakalar ise, şehreminilik (belediye) tarafından kontrol edilen çeşmelerdeki suyu halkın evine taşıyan, yangınlarda da müdahalelerde bulunan ve eşeği olan kimselerdi. Görevliler kulelerde dolaşırken ayaklarına katır denilen, yüksek ses çıkaran özel ayakkabılar giyerlerdi. Bu ayakkabılar, didebanların uyuklamasını önlemek için tasarlanmıştı. İstanbul’un büyük yangınlarının belirli metabolik ilişkiler ürettiğini ve her yeni vakada yangınların durdurulmasının -dünya çapında sanayi çağının başında olunsa da- muazzam bir insan emeğine ve kas gücüne bağlı olduğunu söyleyebiliriz. Yangınların önlenmesi ve erken uyarı sağlanması için köşklüler (didebanlar) tarafından izlenmesi, yangın haberinin çığırtkanlar tarafından iletilmesi, ve söndürülmesi için harekete geçen gönüllü tulumbacılar, sakalar veya organize birlikler olarak itfayeciler iş başındadır. Yangınlar 19. yüzyıl İstanbul’unun gündelik yaşamında her an karşılaşılabilecek bir felaket olarak karşımıza çıkar.',
            location: {
                center: [28.96469, 41.01140],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'Tulumbacılar',
            image: 'https://i.ibb.co/JrhRN2R/19-yy-sonu-tulumbac-lar-stanbul-da-tfaiye-Murat-Erdin-1.png',
            description: 'Yeniçerilerin kaldırılmasından sonra birçok genç erkek İstanbul’daki itfaiye teşkilatlarında çalışarak hayatlarını idame ettirir. Bu durum hiç kuşkusuz yangınların onlar için hayati önem taşıdığı anlamına da gelir. Dahası, 19. yüzyılda "itfaiyeci" örgütleri birlikler/tugaylar olarak deniz kıyısı boyunca eşitsiz sosyo-doğal ilişkiler üretir. Sıradan itfaiye teşkilatları ile saray çevresinden, Boğaz ve Haliç kıyılarından sorumlu olan itfaiye teşkilatları birbirlerinden farklıdır. İtfaiye teşkilatı 1720’de Yeniçeri Ocağı’na bağlı olarak kurulur ve 1826’da Yeniçerilerin kaldırılmasına kadar bu şekilde devam eder. Yeniçerilerin kaldırılmasından iki ay sonra mahalle itfaiyecilerinden oluşan gruplar İstanbul sokaklarında rastgele örgütlenmeye başlar. Topkapı Sarayı ve boğazdaki yalı yangınlarına Bostancılar Tulumbacı Ocağı müdahale ederken, geri kalan yangınlara Tulumbacı Acemioğlanları müdahale etmiştir. İstanbul’un kıyıları, üyeleri denizlerin itfaiye teşkilatı olarak belirli yerlerde yaşayan ve sosyalleşen deniz itfaiyelerinin (Bostancılar Tulumbacı Ocağı) ayrıcalıklı konumu için belirli bir eşik tanımlar. // Image: Tulumbacılar - Source: İstanbul’da İtfaiye, İBB, Hazırlayan Murat Erdin, 2023',
            location: {
                center: [28.97421, 41.02563],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/DzN9J2j/stanbul-da-tfaiye-Murat-Erdin-1.png',
            description: 'Öte yandan Edmondo De Amics (1938), itfaiye teşkilatında çalışanların daha fazla para kazanmak için bilerek yangın çıkardıklarını da ileri sürer. İtfaiyeciler arasında kişisel ekonomik çıkarlara gösterilen özen savaş yılları boyunca pekişir ve derinleşir. Ayrıca Yıldıztaş (2010, 41), 1919 yılında İstanbul’da yaşayanların, savaş yıllarında büyük yangınların, özellikle de Haziran 1919’daki büyük yangının kasıtlı olarak çıkarıldığına inanıldığını belirtir. Resmi kayıtlarda ve arşivlerde görebileceğimiz gibi, yabancı sigorta şirketlerinin kendi ekonomik çıkarları için yangınları kasıtlı olarak çıkardıkları da iddialar arasındadır. // Image: Tulumbacılar - Source: İstanbul’da İtfaiye, İBB, Hazırlayan Murat Erdin, 2023',
            location: {
                center: [28.97421, 41.02563],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/1skMrh4/image-3.jpg',
            description: 'Yeniçerilerin kaldırılmasından sonra birçok genç erkek İstanbul’daki itfaiye teşkilatlarında çalışarak hayatlarını idame ettirir. Bu durum hiç kuşkusuz yangınların onlar için hayati önem taşıdığı anlamına da gelir. Dahası, 19. yüzyılda "itfaiyeci" örgütleri birlikler/tugaylar olarak deniz kıyısı boyunca eşitsiz sosyo-doğal ilişkiler üretir. Sıradan itfaiye teşkilatları ile saray çevresinden, Boğaz ve Haliç kıyılarından sorumlu olan itfaiye teşkilatları birbirlerinden farklıdır. Kıyılardaki barınaklardan (bekar hanları) ve düzenli maaş olanağından faydalanırlar. // Image: Uzun Tarihçe - Source: İstanbul İtfaiyesi. Itfaiye.ibb.gov.tr',
            location: {
                center: [28.97631, 41.01403],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.97631, 41.01403],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};


