import { FaArrowsLeftRight, FaArrowsUpDown, FaBars, FaBell, FaCloudSun, FaCloudSunRain, FaColonSign,  FaExpand,  FaEye, FaEyeSlash, FaFeather, FaGears, FaHammer, FaIndustry, FaShieldHalved, FaSliders, FaSun, FaTemperatureHalf, FaTruckFast, FaUmbrella, FaVolumeXmark, FaWind } from "react-icons/fa6";

export const productImages = {
    pergola: {
        branda: [
            { url: '/images/pergola/perbra1.png', location: '' },
            { url: '/images/pergola/perbra2.png', location: '' },
            { url: '/images/pergola/perbra3.png', location: '' },
            { url: '/images/pergola/perbra4.png', location: '' },
            { url: '/images/pergola/perbra5.png', location: '' },
        ],
        cam: [
            { url: '/images/pergola/percam1.png', location: '' },
            { url: '/images/pergola/percam2.png', location: '' },
            { url: '/images/pergola/percam3.png', location: '' },
            { url: '/images/pergola/percam4.png', location: '' },
            { url: '/images/pergola/percam5.png', location: '' },
            { url: '/images/pergola/percam6.png', location: '' },
            { url: '/images/pergola/percam7.png', location: '' }
        ],
        pno: [
            { url: '/images/pergola/perpno1.png', location: '' },
            { url: '/images/pergola/perpno2.png', location: '' },
            { url: '/images/pergola/perpno3.png', location: '' },
            { url: '/images/pergola/perpno4.png', location: '' },
        ],
        polikarbon: [
            { url: '/images/pergola/perpol1.png', location: '' },
            { url: '/images/pergola/perpol2.png', location: '' },
            { url: '/images/pergola/perpol3.png', location: '' },
        ]
    },
    guillotine: [
        { url: '/images/guillotine/guillotine1.png', location: '' },
        { url: '/images/guillotine/guillotine2.png', location: '' },
        { url: '/images/guillotine/guillotine3.png', location: '' },
        { url: '/images/guillotine/guillotine4.png', location: '' },
        { url: '/images/guillotine/guillotine5.png', location: '' },
    ],
    panjur: [
        { url: '/images/panjur/panjur1.png', location: '' },
        { url: '/images/panjur/panjur2.png', location: '' },
        { url: '/images/panjur/panjur3.png', location: '' },
    ],
    kt: [
        { url: '/images/kt/kt1.png', location: '' },
        { url: '/images/kt/kt2.png', location: '' },
        { url: '/images/kt/kt3.png', location: '' },
        { url: '/images/kt/kt4.png', location: '' },
        { url: '/images/kt/kt5.png', location: '' },
        { url: '/images/kt/kt6.png', location: '' },
        { url: '/images/kt/kt7.png', location: '' },
        { url: '/images/kt/kt8.png', location: '' },
        { url: '/images/kt/kt9.png', location: '' },
        { url: '/images/kt/kt10.png', location: '' },
        { url: '/images/kt/kt11.png', location: '' },
        { url: '/images/kt/kt12.png', location: '' },
        { url: '/images/kt/kt13.png', location: '' },
        { url: '/images/kt/kt14.png', location: '' },
        { url: '/images/kt/kt15.png', location: '' },
        { url: '/images/kt/kt16.png', location: '' },
        { url: '/images/kt/kt17.png', location: '' },
        { url: '/images/kt/kt18.png', location: '' },
    ],
    sr: [
        { url: '/images/sr/sr1.png', location: '' },
        { url: '/images/sr/sr2.png', location: '' },
        { url: '/images/sr/sr3.png', location: '' },
        { url: '/images/sr/sr4.png', location: '' },
        { url: '/images/sr/sr5.png', location: '' },
    ]

};

export const products = [
    {
        id: 1,
        title: {
            en: 'Polycarbonate Pergola System',
            tr: 'Polikarbon Pergola Sistemi',
            fr: 'Système de Pergola en Polycarbonate',
            de: 'Polycarbonat-Pergola-System',
        },
        description: {
            tr: 'Doğal ışığı içeri alırken güneşe karşı kontrollü koruma sağlayan polikarbon pergola sistemleri, hafif ve dayanıklı yapısıyla dengeli bir çözüm sunar. Farklı projelere uyum sağlayacak şekilde uygulanır.',
            en: 'Polycarbonate pergola systems allow natural light while providing controlled protection from the sun. With their lightweight and durable structure, they offer a balanced solution adaptable to different project needs.',
            fr: 'Les systèmes de pergola en polycarbonate laissent entrer la lumière naturelle tout en offrant une protection contrôlée contre le soleil. Leur structure légère et durable s’adapte à différents types de projets.',
            de: 'Polycarbonat-Pergolasysteme lassen natürliches Licht durch und bieten gleichzeitig kontrollierten Sonnenschutz. Ihre leichte und langlebige Struktur ermöglicht eine flexible Anpassung an verschiedene Projekte.',
        },
        tags: [
            { icon: <FaSun />, name: { en: 'UV Protection', tr: 'UV Koruması', fr: 'Protection UV', de: 'UV-Schutz' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaHammer />, name: { en: 'Impact Resistance', tr: 'Darbe Dayanımı', fr: 'Résistance aux Chocs', de: 'Schlagfestigkeit' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaFeather />, name: { en: 'Lightweight Structure', tr: 'Hafif Yapı', fr: 'Structure Légère', de: 'Leichte Struktur' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaTemperatureHalf />, name: { en: 'Thermal Balance', tr: 'Isı Dengesi', fr: 'Équilibre Thermique', de: 'Thermisches Gleichgewicht' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        // DİKKAT: Burada imageObj.url olarak güncellendi
        images: productImages.pergola.polikarbon.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Polikarbon Pergola Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "",
            default: index === 0
        })),
    },
    {
        id: 2,
        title: {
            en: 'Glass Pergola System',
            tr: 'Cam Pergola Sistemi',
            fr: 'Système de Pergola en Verre',
            de: 'Glas-Pergola-System',
        },
        description: {
            tr: 'Şeffaf yapısıyla açık alanlarda maksimum görünürlük sağlayan cam pergola sistemleri, temperli cam kullanımıyla güvenli ve dengeli bir çözüm sunar. Modern projelere uyumlu bir görünüm sağlar.',
            en: 'Glass pergola systems provide maximum visibility in outdoor spaces with their transparent structure. Using tempered glass, they offer a reliable and well-balanced solution suited for modern projects.',
            fr: 'Les pergolas en verre offrent une visibilité maximale grâce à leur structure transparente. Le verre trempé garantit une solution fiable adaptée aux projets modernes.',
            de: 'Glaspergolas bieten durch ihre transparente Struktur maximale Sicht. Gehärtetes Glas sorgt für eine zuverlässige und ausgewogene Lösung für moderne Projekte.',
        },
        tags: [
            { icon: <FaSun />, name: { en: 'Natural Light', tr: 'Doğal Işık', fr: 'Lumière Naturelle', de: 'Natürliches Licht' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaEye />, name: { en: 'Open View', tr: 'Açık Görüş', fr: 'Vue Ouverte', de: 'Offene Sicht' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaShieldHalved />, name: { en: 'Tempered Glass', tr: 'Temperli Cam', fr: 'Verre Trempé', de: 'Sicherheitsglas' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaUmbrella />, name: { en: 'Weather Protection', tr: 'Hava Koruması', fr: 'Protection Climatique', de: 'Wetterschutz' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        images: productImages.pergola.cam.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Cam Pergola Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "",
            default: index === 0
        })),
    },
    {
        id: 3,
        title: {
            en: 'Motorized Fabric Pergola',
            tr: 'Motorlu Kumaş Pergola',
            fr: 'Pergola à Toile Motorisée',
            de: 'Motorisierte Stoff-Pergola',
        },
        description: {
            tr: 'Motorlu açılır-kapanır kumaş tavan sistemi sayesinde güneş ve yağmur kontrolü sağlar. Esnek kullanım sunarak farklı hava koşullarına hızlı uyum sağlar.',
            en: 'Motorized fabric pergola systems provide controlled protection against sun and rain with their retractable structure. They offer flexible use and adapt easily to changing weather conditions.',
            fr: 'Les pergolas à toile motorisée offrent une protection contrôlée contre le soleil et la pluie grâce à leur structure rétractable. Elles s’adaptent facilement aux conditions climatiques changeantes.',
            de: 'Motorisierte Stoffpergolen bieten durch ihre einfahrbare Struktur kontrollierten Schutz vor Sonne und Regen. Sie passen sich flexibel an wechselnde Wetterbedingungen an.',
        },
        tags: [
            { icon: <FaColonSign />, name: { en: 'Motorized System', tr: 'Motorlu Sistem', fr: 'Système Motorisé', de: 'Motorisiertes System' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaArrowsUpDown />, name: { en: 'Retractable Roof', tr: 'Açılır Tavan', fr: 'Toit Rétractable', de: 'Faltdach' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaUmbrella />, name: { en: 'Water Resistant', tr: 'Suya Dayanıklı', fr: 'Résistant à l’Eau', de: 'Wasserabweisend' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaCloudSun />, name: { en: 'Flexible Use', tr: 'Esnek Kullanım', fr: 'Utilisation Flexible', de: 'Flexible Nutzung' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        images: productImages.pergola.branda.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Motorlu Kumaş Pergola Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "",
            default: index === 0
        })),
    },
    {
        id: 4,
        title: {
            en: 'Aluminium Pneumatic Pergola',
            tr: 'Alüminyum Pnömatik Pergola',
            fr: 'Pergola Pneumatique en Aluminium',
            de: 'Pneumatische Aluminium-Pergola',
        },
        description: {
            tr: 'Alüminyum paneller ve pnömatik sistem ile güneş ışığı ve havalandırma kontrolü sağlar. Dengeli yapısı sayesinde farklı hava koşullarında güvenli kullanım sunar.',
            en: 'Aluminium pneumatic pergola systems allow controlled management of sunlight and ventilation through adjustable panels. They provide reliable performance across varying weather conditions.',
            fr: 'Les pergolas pneumatiques en aluminium permettent de contrôler la lumière du soleil et la ventilation grâce à des panneaux ajustables. Elles offrent une performance fiable dans différentes conditions climatiques.',
            de: 'Pneumatische Aluminium-Pergolen ermöglichen die Steuerung von Sonnenlicht und Belüftung durch verstellbare Paneele. Sie bieten zuverlässige Leistung unter verschiedenen Wetterbedingungen.',
        },
        tags: [
            { icon: <FaBars />, name: { en: 'Aluminium Panels', tr: 'Alüminyum Paneller', fr: 'Panneaux en Aluminium', de: 'Aluminiumpaneele' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaWind />, name: { en: 'Ventilation Control', tr: 'Havalandırma Kontrolü', fr: 'Contrôle de Ventilation', de: 'Belüftungssteuerung' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaSliders />, name: { en: 'Pneumatic System', tr: 'Pnömatik Sistem', fr: 'Système Pneumatique', de: 'Pneumatisches System' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaCloudSunRain />, name: { en: 'Weather Adaptable', tr: 'Hava Koşullarına Uyumlu', fr: 'Adapté aux Conditions Climatiques', de: 'Wetteranpassung' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        images: productImages.pergola.pno.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Alüminyum Pnömatik Pergola Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "",
            default: index === 0
        })),
    },
    {
        id: 5,
        title: {
            en: 'Guillotine Glass System',
            tr: 'Giyotin Cam Sistemi',
            fr: 'Système de Verre Guillotine',
            de: 'Guillotine-Glassystem',
        },
        description: {
            tr: 'Dikey hareket eden panelleriyle kesintisiz manzara ve havalandırma sağlayan giyotin cam sistemleri, yalıtımlı yapısıyla dengeli bir çözüm sunar. Dış mekanların dört mevsim yaşam alanına dönüşmesini kolaylaştırır.',
            en: 'Providing uninterrupted views and ventilation with vertically moving panels, guillotine glass systems offer a balanced solution with their insulated structure. They make it easy to transform outdoor spaces into all-season living areas.',
            fr: 'Offrant une vue ininterrompue et une ventilation grâce à des panneaux à mouvement vertical, les systèmes de verre guillotine constituent une solution équilibrée avec leur structure isolée. Ils facilitent la transformation des espaces extérieurs en lieux de vie pour toutes les saisons.',
            de: 'Guillotine-Glassysteme bieten mit vertikal beweglichen Paneelen ununterbrochene Sicht und Belüftung und stellen durch ihre isolierte Struktur eine ausgewogene Lösung dar. Sie erleichtern die Verwandlung von Außenbereichen in ganzjährig nutzbare Wohnräume.'
        },
        tags: [
            { icon: <FaArrowsUpDown />, name: { en: 'Vertical Movement', tr: 'Dikey Hareket', fr: 'Mouvement Vertical', de: 'Vertikale Bewegung' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaEye />, name: { en: 'Panoramic View', tr: 'Panoramik Manzara', fr: 'Vue Panoramique', de: 'Panoramablick' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaWind />, name: { en: 'Wind Protection', tr: 'Rüzgar Kalkanı', fr: 'Protection Vent', de: 'Windschutz' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaVolumeXmark />, name: { en: 'High Insulation', tr: 'Yüksek İzolasyon', fr: 'Haute Isolation', de: 'Hohe Isolierung' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        images: productImages.guillotine.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Giyotin Cam Sistemi Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "", 
            default: index === 0 ? true : false
        })),
    },
    {
        id: 6,
        title: {
            en: 'Roller Shutter Systems',
            tr: 'Panjur Sistemleri',
            fr: 'Systèmes de Volets Roulants',
            de: 'Rollladensysteme',
        },
        description: {
            tr: 'Isı ve ses yalıtımıyla huzurlu bir ortam yaratan motorlu panjur sistemleri, mahremiyeti koruyan yapısıyla güvenli bir çözüm sunar. Işık ve hava kontrolünü pratikleştirerek mekanlara yumuşak bir uyum katar.',
            en: 'Creating a peaceful environment with thermal and sound insulation, motorized roller shutter systems offer a secure solution with their privacy-protecting structure. By making light and weather control practical, they add soft harmony to spaces.',
            fr: 'Créant un environnement paisible grâce à l\'isolation thermique et phonique, les systèmes de volets roulants motorisés offrent une solution sécurisée avec leur structure préservant l\'intimité. En rendant le contrôle de la lumière et du climat pratique, ils ajoutent une douce harmonie aux espaces.',
            de: 'Motorisierte Rollladensysteme schaffen mit Wärme- und Schalldämmung eine friedliche Umgebung und bieten mit ihrer privatsphäreschützenden Struktur eine sichere Lösung. Indem sie die Licht- und Wetterkontrolle praktisch machen, verleihen sie Räumen eine sanfte Harmonie.'
        },
        tags: [
            { icon: <FaShieldHalved />, name: { en: 'High Security', tr: 'Yüksek Güvenlik', fr: 'Haute Sécurité', de: 'Hohe Sicherheit' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaTemperatureHalf />, name: { en: 'Thermal & Sound Insulation', tr: 'Isı ve Ses Yalıtımı', fr: 'Isolation Thermique et Phonique', de: 'Wärme- & Schalldämmung' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaEyeSlash />, name: { en: 'Privacy Protection', tr: 'Mahremiyet', fr: 'Confidentialité', de: 'Privatsphäre' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaGears />, name: { en: 'Motorized Control', tr: 'Motorlu Kontrol', fr: 'Contrôle Motorisé', de: 'Motorisierte Steuerung' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        images: productImages.panjur.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Panjur Sistemi Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "", 
            default: index === 0 ? true : false
        })),
    },
    {
        id: 7,
        title: {
            en: 'Folding Glass Systems',
            tr: 'Katlanır Cam Sistemleri',
            fr: 'Systèmes de Verre Pliant',
            de: 'Faltglassysteme',
        },
        description: {
            tr: 'Dış mekanı iç mekanla kesintisiz birleştiren katlanır cam sistemleri, panoramik bir görünüm sunar. Kullanım kolaylığı sağlayan katlanabilir yapısı ve yüksek kaliteli camlarıyla estetik ve fonksiyonelliği bir araya getirerek mekanlarınıza ferahlık katar.',
            en: 'Folding glass systems, which seamlessly connect the outdoors with the indoors, offer a panoramic view. Combining aesthetics and functionality with their easy-to-use foldable structure and high-quality glass, they bring spaciousness to your spaces.',
            fr: 'Les systèmes de verre pliant, qui relient harmonieusement l\'extérieur à l\'intérieur, offrent une vue panoramique. Alliant esthétique et fonctionnalité avec leur structure pliable facile à utiliser et leur verre de haute qualité, ils apportent de l\'espace à vos lieux.',
            de: 'Faltglassysteme, die den Außenbereich nahtlos mit dem Innenbereich verbinden, bieten einen Panoramablick. Sie vereinen Ästhetik und Funktionalität mit ihrer leicht zu bedienenden faltbaren Struktur und hochwertigem Glas und bringen Weite in Ihre Räume.'
        },
        tags: [
            { icon: <FaExpand />, name: { en: 'Panoramic View', tr: 'Panoramik Görünüm', fr: 'Vue Panoramique', de: 'Panoramablick' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaArrowsLeftRight />, name: { en: 'Flexible Folding', tr: 'Esnek Katlanma', fr: 'Pliage Flexible', de: 'Flexibles Falten' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaTemperatureHalf />, name: { en: 'Insulated Glass', tr: 'Yalıtımlı Cam', fr: 'Verre Isolé', de: 'Isolierglas' }, description: { en: '', tr: '', fr: '', de: '' } },
            { icon: <FaSun />, name: { en: 'Max Natural Light', tr: 'Maksimum Doğal Işık', fr: 'Lumière Naturelle Max', de: 'Max. Natürliches Licht' }, description: { en: '', tr: '', fr: '', de: '' } }
        ],
        images: productImages.kt.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Katlanır Cam Sistemi Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "", 
            default: index === 0 ? true : false
        })),
    },
    {
        id: 8,
        title: {
            en: 'Sliding Glass Systems',
            tr: 'Sürme Cam Sistemleri',
            fr: 'Systèmes de Verre Coulissant',
            de: 'Schiebeglassysteme',
        },
        description: {
            tr: 'Modern ve şık tasarımıyla dikkat çeken raylı sürme cam sistemleri, mekanlarınızı daraltmadan geniş bir görüş açısı sunar. Pürüzsüz kaydırılabilir yapısı sayesinde iç ve dış mekanlar arasında pratik ve estetik bir geçiş sağlar.',
            en: 'Attracting attention with their modern and elegant design, sliding glass systems offer a wide viewing angle without narrowing your spaces. Thanks to their smoothly sliding structure, they provide a practical and aesthetic transition between indoors and outdoors.',
            fr: 'Attirant l\'attention par leur design moderne et élégant, les systèmes de verre coulissant offrent un grand angle de vue sans rétrécir vos espaces. Grâce à leur structure coulissante fluide, ils assurent une transition pratique et esthétique entre l\'intérieur et l\'extérieur.',
            de: 'Schiebeglassysteme bestechen durch ihr modernes und elegantes Design und bieten einen weiten Blickwinkel, ohne Ihre Räume einzuengen. Dank ihrer sanft gleitenden Struktur sorgen sie für einen praktischen und ästhetischen Übergang zwischen drinnen und draußen.'
        },
        tags: [
            { 
                icon: <FaArrowsLeftRight />, // Sağa sola kayma hareketi için
                name: { 
                    en: 'Smooth Sliding', 
                    tr: 'Kolay Kaydırma', 
                    fr: 'Glissement Fluide', 
                    de: 'Sanftes Schieben' 
                }, 
                description: { en: '', tr: '', fr: '', de: '' } 
            },
            { 
                icon: <FaExpand />, // Mekanı daraltmadığı için
                name: { 
                    en: 'Space Saving', 
                    tr: 'Yerden Tasarruf', 
                    fr: 'Gain de Place', 
                    de: 'Platzsparend' 
                }, 
                description: { en: '', tr: '', fr: '', de: '' } 
            },
            { 
                icon: <FaEye />, // Camların sunduğu net görüntü için
                name: { 
                    en: 'Uninterrupted View', 
                    tr: 'Kesintisiz Manzara', 
                    fr: 'Vue Ininterrompue', 
                    de: 'Ununterbrochene Sicht' 
                }, 
                description: { en: '', tr: '', fr: '', de: '' } 
            },
            { 
                icon: <FaTemperatureHalf />, // Yalıtım vurgusu
                name: { 
                    en: 'Thermal Insulation', 
                    tr: 'Isı Yalıtımı', 
                    fr: 'Isolation Thermique', 
                    de: 'Wärmedämmung' 
                }, 
                description: { en: '', tr: '', fr: '', de: '' } 
            }
        ],
        // DİKKAT: productImages içine 'surme' array'ini eklemeyi unutma!
        images: productImages.sr.map((imageObj, index) => ({
            url: imageObj.url,
            alt: `Sürme Cam Sistemi Görseli ${index + 1}`,
            class: index === 0 ? "md:col-span-1" : "", 
            default: index === 0 ? true : false
        })),
    }
];

export const features = [
    {
        id: 1,
        title: { en: 'Integrated System Solutions', tr: 'Entegre Sistem Çözümleri', fr: 'Solutions Systèmes Intégrées', de: 'Integrierte Systemlösungen' },
        description: { en: 'We deliver complete system solutions by combining carefully selected components with precise preparation and on-site execution. Every project is handled with consistent quality standards and attention to detail.', tr: 'Projeye özel seçilen bileşenleri, titiz hazırlık ve sahada doğru uygulama ile bir araya getirerek komple sistem çözümleri sunuyoruz. Her projede aynı kalite standardı ve detay hassasiyeti ile çalışıyoruz.', fr: 'Nous proposons des solutions complètes en combinant des composants soigneusement sélectionnés avec une préparation précise et une mise en œuvre sur site. Chaque projet est réalisé avec des standards de qualité constants et une grande attention aux détails.', de: 'Wir bieten komplette Systemlösungen, indem wir sorgfältig ausgewählte Komponenten mit präziser Vorbereitung und Ausführung vor Ort kombinieren. Jedes Projekt wird mit gleichbleibenden Qualitätsstandards und hoher Detailgenauigkeit umgesetzt.' },
        icon: <FaIndustry className="w-8 h-8" />
    },
    {
        id: 2,
        title: { en: 'Project Delivery Across Europe', tr: "Avrupa Genelinde Proje Teslimi", fr: "Livraison de Projets à Travers l'Europe", de: "Projektabwicklung in ganz Europa" },
        description: { en: 'From planning to final installation, we manage the full project flow across Europe with our own teams. Each step is coordinated to ensure smooth execution, reliable timelines, and consistent results on-site.', tr: "Planlamadan son montaja kadar, Avrupa genelindeki projeleri kendi ekiplerimizle yönetiyoruz. Sürecin her adımı, sahada sorunsuz uygulama ve tutarlı sonuçlar için koordine edilir.", fr: "De la planification à l’installation finale, nous gérons l’ensemble du projet à travers l’Europe avec nos propres équipes. Chaque étape est coordonnée pour garantir une exécution fluide et des résultats fiables sur site.", de: "Von der Planung bis zur finalen Montage steuern wir Projekte in ganz Europa mit eigenen Teams. Jeder Schritt wird koordiniert, um eine reibungslose Umsetzung und zuverlässige Ergebnisse vor Ort zu gewährleisten." },
        icon: <FaTruckFast className="w-8 h-8" />
    },
    {
        id: 3,
        title: { en: 'Built for Long-Term Performance', tr: 'Uzun Ömürlü Performans', fr: 'Conçu pour une Performance Durable', de: 'Für Langlebige Leistung Entwickelt' },
        description: { en: 'Our systems are designed for durability and long-term use in real conditions. We stand behind our work with ongoing support and a commitment to consistent performance over time.', tr: 'Sistemlerimiz gerçek kullanım koşullarında uzun ömürlü olacak şekilde tasarlanır. Yaptığımız işin arkasında durur, uzun vadede stabil performans için destek sağlarız.', fr: 'Nos systèmes sont conçus pour durer dans des conditions réelles. Nous soutenons notre travail avec un suivi continu et un engagement envers des performances durables.', de: 'Unsere Systeme sind für den langfristigen Einsatz unter realen Bedingungen ausgelegt. Wir stehen hinter unserer Arbeit und sichern eine nachhaltige Leistung durch kontinuierliche Unterstützung.' },
        icon: <FaShieldHalved className="w-8 h-8" />
    },
];

export const languages = [
    { id: 1, name: 'English', code: 'en' },
    { id: 2, name: 'Türkçe', code: 'tr' },
    { id: 3, name: 'Français', code: 'fr' },
    { id: 4, name: 'Deutsch', code: 'de' }
];

export const navbarItems = [
    { name: { en: 'Home', tr: 'Anasayfa', fr: 'Accueil', de: 'Startseite' }, link: '/' },
    { name: { en: 'Products', tr: 'Ürünler', fr: 'Produits', de: 'Produkte' }, link: '/#products' },
    { name: { en: 'About Us', tr: 'Hakkımızda', fr: 'À Propos', de: 'Über Uns' }, link: '/about' },
    { name: { en: 'Contact', tr: 'İletişim', fr: 'Contact', de: 'Kontakt' }, link: '/contact' }
];

export const footer = {
    name: {
        en: 'Footer',
        tr: 'Alt Bilgi',
        fr: 'Pied de page',
        de: 'Fußzeile',
    },
    links: {
        en: [
            { name: 'Home', link: '/' },
            { name: 'Products', link: '/#products' },
            { name: 'About Us', link: '/about' },
            { name: 'Contact', link: '/contact' }
        ],
        tr: [
            { name: 'Anasayfa', link: '/' },
            { name: 'Ürünler', link: '/#products' },
            { name: 'Hakkımızda', link: '/about' },
            { name: 'İletişim', link: '/contact' }
        ],
        fr: [
            { name: 'Accueil', link: '/' },
            { name: 'Produits', link: '/#products' },
            { name: 'À Propos', link: '/about' },
            { name: 'Contact', link: '/contact' }
        ],
        de: [
            { name: 'Startseite', link: '/' },
            { name: 'Produkte', link: '/#products' },
            { name: 'Über Uns', link: '/about' },
            { name: 'Kontakt', link: '/contact' }
        ]
    },
    copyright: {
        en: '© 2026 Express Veranda. All rights reserved.',
        tr: '© 2026 Express Veranda. Tüm hakları saklıdır.',
        fr: '© 2026 Express Veranda. Tous droits réservés.',
        de: '© 2026 Express Veranda. Alle Rechte vorbehalten.',
    },
    about: {
        en: {
            title: 'About',
            description: 'As Express Veranda, we manufacture winter gardens and glass systems at our Kocaeli facilities, offering aesthetic, functional, and project-specific solutions that add value to your living spaces.',
            lastDescription: 'Premium Quality & Manufacturing Excellence',
        },
        tr: {
            title: 'Hakkımızda',
            description: 'Express Veranda olarak, yaşam alanlarınıza değer katan kış bahçesi ve cam sistemlerini Kocaeli\'deki tesislerimizde üretiyor; estetik, fonksiyonel ve projeye özel çözümler sunuyoruz.',
            lastDescription: 'Üstün Kalite ve Üretimde Mükemmellik',
        },
        fr: {
            title: 'À Propos',
            description: 'En tant qu\'Express Veranda, nous fabriquons des jardins d\'hiver et des systèmes en verre dans nos installations à Kocaeli, offrant des solutions esthétiques, fonctionnelles et sur mesure qui valorisent vos espaces de vie.',
            lastDescription: 'Qualité Supérieure et Excellence de Fabrication',
        },
        de: {
            title: 'Über Uns',
            description: 'Als Express Veranda produzieren wir Wintergärten und Glassysteme in unseren Werken in Kocaeli und bieten ästhetische, funktionale und projektspezifische Lösungen, die Ihre Wohnräume aufwerten.',
            lastDescription: 'Premium-Qualität und Exzellenz in der Fertigung',  
        }
    }
}