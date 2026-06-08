/**
 * ==========================================================================
 * KIST Energy Materials Design Lab (Seungho Yu's Group) Website Database
 * ==========================================================================
 * 
 * [HOW TO UPDATE WEBSITE CONTENT]
 * 1. Open this 'data.js' file in any text editor.
 * 2. Edit the text values inside the quotes (e.g., change names, descriptions, or add new papers).
 * 3. Save the file. The website updates automatically!
 * 4. NO need to touch the HTML files.
 * 
 * Rule for strings: Use double quotes or backticks ` if you need multiple lines.
 */

const LAB_DATA = {
    // 1. HOME / WELCOME SECTION (index.html)
    home: {
        subtitle: "KIST ENERGY MATERIALS DESIGN LAB",
        title: "Welcome to the Seungho Yu's Research Group at KIST.",
        description: "The Energy Materials Design Lab, located at the Korea Institute of Science and Technology (KIST), is dedicated to developing materials design strategies for next-generation batteries. Our research group uses a combination of theoretical and experimental methods to design novel materials for energy storage applications.",
        overview: "We have a broad range of research interests that include first principles calculations, high-throughput materials discovery, machine learning, materials synthesis and characterization, and surface and interface science. By leveraging these techniques, we aim to develop innovative solutions for energy storage challenges."
    },

    // 2. PRINCIPAL INVESTIGATOR DATA (people.html)
    pi: {
        name: "Seungho Yu (류승호)",
       // title: "Principal Research Scientist / Associate Professor",
        photo: "assets/images/pi.jpg", //기에 개인 사진을 저장하세요 (예: assets/images/pi.jpg)
        affiliation: `Principal Research Scientist<br>
Energy Storage Research Center<br>
Korea Institute of Science and Technology (KIST)<br><br>
Associate Professor<br>
Division of Energy & Environment Technology<br>
University of Science and Technology (UST)`,
        address: "L5211B, KIST, 5, Hwarang-ro 14-gil, Seongbuk-gu, Seoul 02792, Republic of Korea",
        email: "shyu@kist.re.kr",
        tel: "+82-2-958-5232",
        googleScholar: "https://scholar.google.com/citations?user=1Nar35cAAAAJ&hl=ko&oi=ao",
        orcid: "https://orcid.org/0000-0003-3912-6463",
        education: [
            "Ph.D. in Mechanical Engineering, University of Michigan, Ann Arbor, USA, 2013 - 2018 (Advisor: Prof. Donald Siegel)",
            "M.S. in Mechanical and Aerospace Engineering, Seoul National University, Korea, 2008 - 2010",
            "B.S. in Mechanical and Aerospace Engineering, Seoul National University, Korea, 2004 - 2008"
        ],
        experience: [
            "Principal Research Scientist, Korea Institute of Science and Technology (KIST), 2023 - present",
            "Senior Research Scientist, Korea Institute of Science and Technology (KIST), 2019 - 2023",
            "Research Scientist, Korea Institute of Science and Technology (KIST), 2010 - 2013"
        ]
    },

    // 3. LAB MEMBERS LIST (people.html)
    // 각 멤버별 photo 속성에 사진 경로를 지정할 수 있습니다. (예: photo: "assets/images/members/name.jpg")
    members: [
        {
            name: "Dr. Yongheum Lee",
            role: "postdoc",
            photo: "assets/images/members/yongheum_lee.jpg",
            program: "Ph.D. University of Science and Technology (UST), KIST School",
            interest: "All-solid-state batteries, Solid electrolytes",
            email: "h18511@kist.re.kr"
        },
        {
            name: "Dr. Sehyeok Park",
            role: "postdoc",
            photo: "assets/images/members/Sehyeok Park.png", // 사진이 없으면 기본 아이콘이 표시됩니다.
            program: "Ph.D. Seoul National University",
            interest: "First-principles calculations, Machine learning, Solid electrolytes",
            email: "sehyeok.park123@kist.re.kr"
        },
        {
            name: "Chelin Jeon",
            role: "student",
            photo: "assets/images/members/Chelin Jeon.jpg",
            program: "Integrated M.S. and Ph.D. course<br>Yonsei University - KIST joint program",
            interest: "All-solid-state batteries, Solid electrolytes",
            email: "wjscofls9863@kist.re.kr"
        },
        {
            name: "Myeongcho Jang",
            role: "student",
            photo: "assets/images/members/Myeongcho Jang.png",
            program: "Integrated M.S. and Ph.D. course<br>Korea University - KIST joint program",
            interest: "First-principles calculations, Machine learning, Solid electrolytes",
            email: "jangmjo48@kist.re.kr"
        },
        {
            name: "Eunji Kwon",
            role: "student",
            photo: "assets/images/members/Eunji Kwon.png",
            program: "Ph.D. course<br>Korea University - KIST joint program",
            interest: "First-principles calculations, Solid electrolytes, Cathode materials",
            email: "eunjikwon@kist.re.kr"
        },
        {
            name: "Susie Lee",
            role: "student",
            photo: "assets/images/members/Susie Lee.png",
            program: "M.S. course",
            interest: "All-solid-state batteries, Solid electrolytes",
            email: "susielee@kist.re.kr"
        }
    ],

    // 4. GRADUATE ALUMNI LIST (people.html)
    alumni: [
        {
            name: "Kanguk Park",
            degree: "M.S. Korea University - KIST joint program (2020.03 - 2022.12)",
            interest: "First-principles calculations, Machine learning, Solid electrolytes",
            current: "POSCO IH",
            photo: "assets/images/members/Kanguk Park.png"
        },
        {
            name: "Gin Hyung Chun",
            degree: "M.S. Korea University - KIST joint program (2020.01 - 2021.12)",
            interest: "Materials design, First-principles calculations, Machine learning",
            current: "Samsung Electronics",
            photo: "assets/images/members/Gin Hyung Chun.jpg"
        },
        {
            name: "Dongsu Park",
            degree: "M.S. Korea University - KIST joint program (2020.01 - 2021.12)",
            interest: "Materials design, First-principles calculations",
            current: "ASML",
            photo: "assets/images/members/Dongsu Park.jpg"
        }
    ],

    // 5. INTERNSHIP ALUMNI LIST (people.html - 현재 화면에서는 사용되지 않으나 데이터 보존)
    interns: [
        { name: "Da In Jung", duration: "2023.12 - 2024.06", school: "Seoul National University of Science and Technology" },
        { name: "Hyeong Gyu Kim", duration: "2023.12 - 2024.06", school: "Hanyang University" },
        { name: "Sang Hyeon Park", duration: "2023.09 - 2024.02", school: "Hanyang University" },
        { name: "Sohyeon Kwon", duration: "2023.09 - 2024.02", school: "Seoul National University of Science and Technology" },
        { name: "Jihoon You", duration: "2023.07 - 2023.12", school: "Hanyang University" },
        { name: "Seungwon Choi", duration: "2022.12 - 2023.06", school: "Hanyang University" },
        { name: "Yea Yeon Kim", duration: "2022.09 - 2022.12", school: "Soongsil University" },
        { name: "Min-Kyeong Jang", duration: "2022.04 - 2022.09 (M.S.)", school: "Dankook University" },
        { name: "Hyewon Hwang", duration: "2022.03 - 2022.08", school: "Hanyang University" },
        { name: "Jiye Moon", duration: "2022.03 - 2022.08", school: "Dankook University" },
        { name: "Gangho Kwon", duration: "2021.09 - 2022.02", school: "Seoul National University of Science and Technology" }
    ],

    // 6. RESEARCH AREAS (research.html)
    // 각 연구 분야별 image 속성에 사진 경로를 지정할 수 있습니다. (예: image: "assets/images/research/materials_design.jpg")
    research: [
        {
            id: "materials-design",
            title: "Materials Design",
            icon: "atom",
            image: "assets/images/research/materials_design.jpg",
            p1: "Our research focuses on designing new materials for next-generation batteries, such as all-solid-state, sodium-ion, and multivalent-ion batteries, through first principles calculations. We investigate physical and chemical properties of materials, such as electrical and mechanical properties, ionic conductivity, and phase stability, to develop high-performance materials.",
            p2: "Furthermore, we use the Materials Project (MP) database to evaluate the chemical and electrochemical stability of the materials. Additionally, we also study surface and interface science for next-generation batteries, examining various interfacial properties such as chemical reactions, formation of defects, and binding energy of molecules at the interfaces."
        },
        {
            id: "machine-learning",
            title: "Machine Learning",
            icon: "cpu",
            image: "assets/images/research/machine-learning.png",
            p1: "Our research group utilizes machine learning techniques to enhance the discovery and optimization of battery materials. By identifying critical descriptors that govern material properties, we aim to improve the design of materials for all-solid-state batteries and sodium-ion batteries.",
            p2: "Machine learning potentials (MLPs) enable both accurate and accelerated molecular dynamics (MD) simulations, facilitating efficient exploration of ionic conduction mechanisms in solid electrolytes and cathode materials. Additionally, MLPs facilitate the modeling of interface reactions, providing insights into complex interfacial phenomena. These approaches enable large-scale calculations, bridging atomistic simulations and practical applications, contributing to the development of next-generation battery technologies."
        },
        {
            id: "solid-state",
            title: "All-Solid-State Batteries",
            icon: "battery-charging",
            image: "assets/images/research/solid_state.gif",
            p1: "All-solid-state batteries (ASSBs) are promising candidates for next-generation batteries owing to their high energy density and enhanced safety. Solid electrolytes (SEs) in ASSBs enable the use of metallic anodes exhibiting higher energy density than graphite anodes. SEs also significantly enhance safety by replacing flammable organic liquid electrolytes in conventional Li-ion batteries.",
            p2: "Among the various types of SEs, sulfide SEs have been broadly studied owing to their high ionic conductivities. For example, Li10GeP2S12 exhibits a high ionic conductivity above 10 mS/cm, which is comparable to that of conventional liquid electrolytes. Recently, lithium ternary halides have been reported as encouraging SEs owing to their high ionic conductivity, broad electrochemical stability window, and chemical stability against cathodes. We are focusing on the developments of all-solid-state batteries based on the sulfide and halide solid electrolytes, through systematically combined theoretical and experimental studies."
        },
        {
            id: "sodium-ion",
            title: "Sodium-Ion Batteries",
            icon: "zap",
            image: "assets/images/research/sodium_ion.jpg",
            p1: "Our research group focuses on advancing high-energy-density cathode materials for sodium-ion batteries, particularly P2- and O3-type layered oxides. Using first-principles calculations and machine learning, we aim to enhance energy density by increasing sodium content and improving structural stability under high-voltage charge conditions.",
            p2: "This includes studying structural degradation mechanisms and oxygen redox activity during charge. Through first-principles calculations, we explore elemental substitution to address challenges such as Mn³⁺ Jahn-Teller distortion, irreversible structural transitions, and instability at high voltages. Additionally, we use machine learning and existing computational databases to identify key design descriptors and refine cathode compositions, supporting the advancement of high-energy-density sodium-ion batteries."
        }
    ],

    // 7. PUBLICATIONS DATA (Moved to publications_data.js to keep data.js clean)

    // 8. LAB NEWS TIMELINE (news.html)
    news: [
        {
            date: "2026. 05",
            title: "전채린 박사과정생 KIST 학연 융합 컨퍼런스 구두발표 우수상 수상",
            desc: "전채린 박사과정생이 2026년 KIST 학연 융합 컨퍼런스에서 구두발표 우수상을 수상하였습니다."
        },
        {
            date: "2026. 05",
            title: "장명조 박사과정생 KIST 학연 융합 컨퍼런스 포스터발표 우수상 수상",
            desc: "장명조 박사과정생이 2026년 KIST 학연 융합 컨퍼런스에서 포스터발표 우수상을 수상하였습니다."
        },
        {
            date: "2026. 05",
            title: "장명조 박사과정생 한국공업화학회 춘계 학술대회 포스터발표 우수상 수상",
            desc: "장명조 박사과정생이 2026년 한국공업화학회 춘계 학술대회에서 포스터발표 우수상을 수상하였습니다."
        },
        {
            date: "2026. 02",
            title: "장명조 박사과정생 한국과학기술연구원 미래인재상 최우수상 수상",
            desc: "장명조 박사과정생이 2026년 한국과학기술연구원 개원기념 미래인재상 (학연 부문) 최우수상을 수상하였습니다."
        },
        {
            date: "2026. 02",
            title: "New Study Published in Nano Energy (I.F. = 17.1)",
            desc: "Our study about cation-disordered superionic thioantimonate argyrodite solid electrolytes has been published in Nano Energy. (Kanguk Park,† Myeongcho Jang,† Eunji Kwon, Yongheum Lee, Hun-Gi Jung, Kyung Yoon Chung, Seung-Ho Yu*, Seungho Yu*, Nano Energy, 2026, 150, 111777) <a href=\"https://www.sciencedirect.com/science/article/pii/S2211285526000819/pdfft?md5=faca4e4969b5eb2ceb3028c5666f0d35&pid=1-s2.0-S2211285526000819-main.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">[Open Access]</a>"
        },
      {
            date: "2026. 02",
            title: "저가격 고안전성 나트륨 전고체전지 언론 인터뷰",
           desc: "저가격 고안전성 나트륨 전고체전지에 관한 인터뷰 기사가 보도 되었습니다. <a href=\"https://news.bizwatch.co.kr/article/industry/2026/02/27/0054\" target=\"_blank\" rel=\"noopener noreferrer\">[비즈워치]</a> "
        },

        {
            date: "2026. 01",
            title: "New Study Published in ACS Energy Letters (I.F. = 18.9)",
            desc: "Our study about high-voltage all-solid-state sodium-ion batteries has been published in ACS Energy Letters. (Chelin Jeon,† Yiseul Yoo,† Eunji Kwon,† Sang Hyuk Gong, Mingony Kim, Sang-Ok Kim, Hyung-Seok Kim, Hun-Gi Jung, Kyung Yoon Chung, Yoon Seok Jung*, Seungho Yu*, 2026, 11, 616-624) <a href=\"https://doi.org/10.1021/acsenergylett.5c03248\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a> It has also been featured as a Supplementary Cover. <a href=\"https://pubs.acs.org/cms/10.1021/aelccp.2026.11.issue-1/asset/aelccp.2026.11.issue-1.xlargecover-5.jpg\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a><br>언론 보도: <a href=\"https://www.yna.co.kr/view/AKR20260211167700017?input=1195m\" target=\"_blank\" rel=\"noopener noreferrer\">[연합뉴스]</a>  <a href=\"https://search.naver.com/search.naver?de=&docid=0010015902892&ds=&field=0&mynews=0&news_office_checked=&nso=so%3Ar%2Cp%3Aall%2Ca%3Aall&office_section_code=0&office_type=0&pd=0&photo=0&query=kist+%EB%82%98%ED%8A%B8%EB%A5%A8+%EC%A0%84%EA%B3%A0%EC%B2%B4%EC%A0%84%EC%A7%80&related=1&sm=tab_tnw&sort=0&ssc=tab.news.all\" target=\"_blank\" rel=\"noopener noreferrer\">[News list]</a>"
        },
        {
            date: "2025. 12",
            title: "전채린 석박통합과정생 한국전기화학회 우수상 수상",
            desc: "전채린 석박통합과정생이 한국전기화학회 2025년도 추계 학술발표회 학생발표경진대회 우수상을 수상하였습니다."
        },
        {
            date: "2025. 12",
            title: "이수지 석사과정생 전기화학회 및 RSC 부문 수상",
            desc: "이수지 석사과정생이 한국전기화학회 2025년도 추계 학술발표회 우수포스터상 및 RSC 부문 Energy & Environmental Science Poster Session Award를 수상하였습니다."
        },
        {
            date: "2025. 12",
            title: "류승호 박사 2025년 UST 우수교수상 최우수상 수상",
            desc: "류승호 박사님이 2025년 UST 우수교수상 최우수상을 수상하였습니다. <a href=\"https://n.news.naver.com/mnews/article/030/0003383718?sid=105\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2025. 10",
            title: "New Study Published in Journal of Materials Chemistry A (I.F. = 9.5)",
            desc: "Our study, \"Rational Materials Design for Stable Interfaces in All-Solid-State Potassium-Ion Batteries,\" has been published in the Journal of Materials Chemistry A. <a href=\"https://doi.org/10.1039/D5TA07134H\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a><br>It has also been included in the Journal of Materials Chemistry A HOT Papers collection. <a href=\"https://pubs.rsc.org/en/journals/articlecollectionlanding?sercode=ta&themeid=e96fb5e1-6a6e-4fd9-aa5c-729e7c027329\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2025. 09",
            title: "New Study Published in Journal of Materials Chemistry A (I.F. = 9.5)",
            desc: "Our study, \"Mechanistic Insights into Superionic Thioarsenate Argyrodite Solid Electrolytes via Machine Learning Interatomic Potentials,\" has been published in the Journal of Materials Chemistry A. <a href=\"https://pubs.rsc.org/en/Content/ArticleLanding/2025/TA/D5TA05538E\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a><br>It has also been included in the Journal of Materials Chemistry A HOT Papers collection. <a href=\"https://pubs.rsc.org/en/journals/articlecollectionlanding?sercode=ta&themeid=e96fb5e1-6a6e-4fd9-aa5c-729e7c027329\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2025. 04",
            title: "New Study Published in Journal of Materials Chemistry A (I.F. = 9.5)",
            desc: "Our study, \"Unraveling Li-Ion Transport Mechanisms in High-Entropy Anion-Disordered Argyrodites via Machine-Learned Interatomic Potentials,\" has been published in the Journal of Materials Chemistry A. <a href=\"https://doi.org/10.1039/D5TA02205C\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a><br>It has also been included in the Journal of Materials Chemistry A HOT Papers collection. <a href=\"https://pubs.rsc.org/en/journals/articlecollectionlanding?sercode=ta&themeid=e96fb5e1-6a6e-4fd9-aa5c-729e7c027329\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2025. 02",
            title: "이용흠 박사과정생 UST 우수 졸업생 장관상 수상",
            desc: "이용흠 박사과정생이 UST 2025년 전기 학위수여식 우수 졸업생 산업통상자원부장관상을 수상하였습니다. <a href=\"https://n.news.naver.com/mnews/article/016/0002431856?sid=105\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2025. 02",
            title: "이용흠 박사과정생 KIST 미래인재상 최우수상 수상",
            desc: "이용흠 박사과정생이 2025 한국과학기술연구원 개원기념 미래인재상 (KIST 스쿨 부문) 최우수상을 수상하였습니다."
        },
        {
            date: "2024. 11",
            title: "이용흠 박사과정생 KIST 학연 융합 컨퍼런스 최우수상 수상",
            desc: "이용흠 박사과정생이 2024 KIST 학연 융합 컨퍼런스에서 포스터발표 최우수상을 수상하였습니다."
        },
        {
            date: "2024. 10",
            title: "권은지 박사과정생 대한금속·재료학회 우수상 수상",
            desc: "권은지 박사과정생이 대한금속·재료학회 2024년도 추계학술대회 학생포스터발표 우수상을 수상하였습니다."
        },
        {
            date: "2024. 10",
            title: "이용흠 박사과정생 UST 재학생 이야기 홍보 보도",
            desc: "이용흠 박사과정생의 UST 재학생 이야기 \"구슬을 꿰는 마음으로 일궈낸 성실한 연구 성과\"가 홍보되었습니다. <a href=\"http://www.ust.ac.kr/bbs/BBSMSTR_000000000759/view.do?nttId=B000000009891Od6pN4&mno=sub06_02_01\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2024. 07",
            title: "이용흠 박사과정생 UST 해외연수지원사업 선정 및 LLNL 연수",
            desc: "이용흠 박사과정생이 2024년 UST 해외연수지원사업에 선정되어 미국 Lawrence Livermore National Laboratory (LLNL) 연수를 수행하였습니다. (2024.07 - 2024.08)"
        },
        {
            date: "2024. 01",
            title: "류승호 책임연구원 과기정통부 장관 표창 수상",
            desc: "류승호 책임연구원이 2023 대한민국 과학기술대전 연구성과 홍보에 대하여 과학기술정보통신부 장관 표창을 수상하였습니다."
        },
        {
            date: "2024. 01",
            title: "Highly Read Article in ACS Energy Letters",
            desc: "Our paper \"Fluorine-Substituted Lithium Chloride Solid Electrolytes for High-Voltage All-Solid-State Lithium-Ion Batteries\" was one of the most read articles from ACS Energy Letters during the month of December 2023."
        },
        {
            date: "2023. 12",
            title: "New Study Published in ACS Energy Letters (I.F. = 22.0)",
            desc: "Our study about fluorine substituted lithium chloride solid electrolytes has been published in ACS Energy Letters. (Sooyeon Kim†, Yongheum Lee†, Kwangnam Kim, Brandon C. Wood*, Sang Soo Han*, and Seungho Yu*, Fluorine-Substituted Lithium Chloride Solid Electrolytes for High-Voltage All-Solid-State Lithium-Ion Batteries, ACS Energy Letters, 2024, 9, 1, 38-47) <a href=\"https://doi.org/10.1021/acsenergylett.3c02307\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a><br>언론 보도: <a href=\"https://www.joongang.co.kr/article/25224871\" target=\"_blank\" rel=\"noopener noreferrer\">[중앙일보]</a> <a href=\"https://www.dongascience.com/news.php?idx=63504\" target=\"_blank\" rel=\"noopener noreferrer\">[동아사이언스]</a> <a href=\"https://www.eurekalert.org/news-releases/1033542\" target=\"_blank\" rel=\"noopener noreferrer\">[EurekAlert!]</a> <a href=\"https://search.naver.com/search.naver?de=&docid=57960000041231&ds=&field=0&mynews=0&news_office_checked=&nso=so%3Ar%2Cp%3Aall%2Ca%3Aall&office_section_code=0&office_type=0&pd=0&photo=0&query=kist+%EB%A5%98%EC%8A%B9%ED%98%B8&related=1&sm=tab_tnw&sort=0&ssc=tab.news.all\" target=\"_blank\">[News list]</a>"
        },
        {
            date: "2023. 02",
            title: "전진형 석사과정생 우수졸업생 최우수상 수상",
            desc: "전진형 석사과정생이 2023 전기 학연협동과정생 (학연생) 우수졸업생 최우수상을 수상하였습니다."
        },
        {
            date: "2023. 01",
            title: "류승호 책임연구원 UST 연구논문지도상 우수상 수상",
            desc: "류승호 책임연구원님이 2022년 UST 연구논문지도상 우수상을 수상하였습니다."
        },
        {
            date: "2023. 01",
            title: "J. Mater. Chem. A Popular Article Collection Added",
            desc: "Our paper \"Structural design strategies for superionic sodium halide solid electrolytes\" was one of the most popular articles published in Journal of Materials Chemistry A in 2022 by corresponding authors based in countries celebrating Lunar New Year. It has been added to the 2023 Journal of Materials Chemistry A Lunar New Year collection. <a href=\"https://pubs.rsc.org/en/journals/articlecollectionlanding?sercode=ta&themeid=fac59ca5-9f4a-41a8-8ae5-5b82da355fd4\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2022. 12",
            title: "이용흠 박사과정생 UST 연구논문상 우수상 수상",
            desc: "이용흠 박사과정생이 2022년 UST 연구논문상 우수상을 수상하였습니다."
        },
        {
            date: "2022. 12",
            title: "이용흠 박사과정생 장학생 선정",
            desc: "이용흠 박사과정생이 2022년 키스트미래재단-KT&G장학재단 장학생으로 선정되었습니다."
        },
        {
            date: "2022. 11",
            title: "이용흠 박사과정생 UST Young Scientist+ 양성사업 선정",
            desc: "이용흠 박사과정생이 2022년 UST Young Scientist+ 양성사업에 선정되었습니다."
        },
        {
            date: "2022. 11",
            title: "New Study Published in Journal of Materials Chemistry A (I.F. = 14.511)",
            desc: "Our study about sodium halide solid electrolytes has been published in Journal of Materials Chemistry A. (Seungho Yu*, Kwangnam Kim, Brandon C. Wood, Hun-Gi Jung, and Kyung Yoon Chung, Structural design strategies for superionic sodium halide solid electrolytes, Journal of Materials Chemistry A, 2022, 10, 24301-24309.) <a href=\"https://doi.org/10.1039/D2TA05158C\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        },
        {
            date: "2022. 11",
            title: "전진형 석사과정생 전기화학회 우수포스터상 수상",
            desc: "전진형 석사과정생이 한국전기화학회 2022년도 추계 학술발표회에서 우수포스터상을 수상하였습니다."
        },
        {
            date: "2022. 04",
            title: "전진형 석사과정생 전기화학회 우수포스터상 수상",
            desc: "전진형 석사과정생이 한국전기화학회 2022년도 춘계 학술발표회에서 우수포스터상을 수상하였습니다."
        },
        {
            date: "2022. 02",
            title: "이용흠 박사과정생 KIST 미래인재상 우수상 수상",
            desc: "이용흠 박사과정생이 2022 한국과학기술연구원 개원기념 미래인재상 (KIST 스쿨 부문) 우수상을 수상하였습니다."
        },
        {
            date: "2022. 02",
            title: "박동수 석사과정생 우수졸업생 최우수상 수상",
            desc: "박동수 석사과정생이 2022 전기 학연협동과정생 (학연생) 우수졸업생 최우수상을 수상하였습니다."
        },
        {
            date: "2022. 01",
            title: "Highly Read Article in ACS Energy Letters",
            desc: "Our paper \"Lithium Argyrodite Sulfide Electrolytes with High Ionic Conductivity and Air Stability for All-Solid-State Li-Ion Batteries\" was one of the most read articles from ACS Energy Letters during the month of December 2021."
        },
        {
            date: "2021. 12",
            title: "New Study Published in ACS Energy Letters (I.F. = 23.101)",
            desc: "Our study about Li argyrodite sulfide solid electrolytes has been published in ACS Energy Letters. (Yongheum Lee, Jiwon Jeong, Ho Jun Lee, Mingony Kim, Daseul Han, Hyoungchul Kim, Jong Min Yuk, Kyung-Wan Nam, Kyung Yoon Chung, Hun-Gi Jung, and Seungho Yu*, Lithium Argyrodite Sulfide Electrolytes with High Ionic Conductivity and Air Stability for All-Solid-State Li-Ion Batteries, ACS Energy Letters, 2022, 7, 1, 171−179) <a href=\"https://doi.org/10.1021/acsenergylett.1c02428\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a><br>언론 보도: <a href=\"https://www.yna.co.kr/view/AKR20220119062900017?input=1195m\" target=\"_blank\" rel=\"noopener noreferrer\">[연합뉴스: KIST \"안전한 고성능 리튬 전고체 전지 원천기술 개발\"]</a> <a href=\"https://search.naver.com/search.naver?de=&docid=50380000700167&ds=&field=0&mynews=0&news_office_checked=&nso=so%3Ar%2Cp%3Aall%2Ca%3Aall&office_section_code=0&office_type=0&pd=0&photo=0&query=kist+%EB%A5%98%EC%8A%B9%ED%98%B8&related=1&sm=tab_tnw&sort=0&ssc=tab.news.all\" target=\"_blank\">[News list]</a>"
        },
        {
            date: "2021. 09",
            title: "New Study Published in Journal of Materials Chemistry A (I.F. = 12.732)",
            desc: "Our study about sodium chloride solid electrolytes has been published in Journal of Materials Chemistry A. (Dongsu Park, Kwangnam Kim, Gin Hyung Chun, Brandon C Wood, Joon Hyung Shim*, and Seungho Yu*, Materials design of sodium chloride solid electrolytes Na3MCl6 for all-solid-state sodium-ion batteries. Journal of Materials Chemistry A, 2021, 9, 23037-23045.) <a href=\"https://doi.org/10.1039/D1TA07050A\" target=\"_blank\" rel=\"noopener noreferrer\">[Link]</a>"
        }
    ],

    // 9. LAB PHOTOS EVENTS LIST (photos.html)
    // 각 이벤트별 photo 속성에 행사 사진 경로를 지정할 수 있습니다. (예: photo: "assets/images/photos/tms_2026_1.jpg")
    photos: [
        { date: "2026.04", title: "전기화학회 수상", photo: "assets/images/photos/2026_04-1.jpg" },
        { date: "2026.03", title: "TMS Meeting, San Diego", photo: "assets/images/photos/2026_03-2.jpg" },
        { date: "2026.03", title: "언론홍보 [비즈人워치]", photo: "assets/images/photos/2026_03-1.jpg" },
        { date: "2026.02", title: "개원기념식 수상", photo: "assets/images/photos/2026_02-1.jpg" },
        { date: "2025.10", title: "ECS Meeting, Chicago", photo: "assets/images/photos/2025_10.jpg" },
        { date: "2025.05", title: "체육대회", photo: "assets/images/photos/2025_05-2.jpg" },
        { date: "2025.05", title: "스승의날", photo: "assets/images/photos/2025_05-1.jpg" },
        { date: "2025.04", title: "Arizona State University", photo: "assets/images/photos/2025_04.jpg" },
        { date: "2025.02", title: "개원기념식 수상", photo: "assets/images/photos/2025_02.jpg" },
        { date: "2024.11", title: "KIST 학연융합컨퍼런스", photo: "assets/images/photos/2024_11.png" },
        { date: "2024.10", title: "UST 재학생 이야기 홍보", photo: "assets/images/photos/2024_10-2.jpg" },
        { date: "2024.10", title: "대한금속·재료학회", photo: "assets/images/photos/2024_10-1.jpg" },
        { date: "2024.08", title: "ACS Fall meeting, Denver", photo: "assets/images/photos/2024_8-2.jpg" },
        { date: "2024.08", title: "Lawrence Livermore National Laboratory", photo: "assets/images/photos/2024_08-1.png" },
        { date: "2024.05", title: "KIST 체육대회", photo: "assets/images/photos/2024_5-2.jpg" },
        { date: "2024.05", title: "스승의 날", photo: "assets/images/photos/2024_5-1.jpg" },
        { date: "2024.04", title: "광안리해수욕장", photo: "assets/images/photos/2024_4.jpg" },
        { date: "2024.01", title: "신년 회식", photo: "assets/images/photos/2024_1.jpg" },
        { date: "2023.11", title: "대한민국 과학기술대전", photo: "assets/images/photos/2023_11.jpg" },
        { date: "2023.10", title: "그룹 저녁 식사", photo: "assets/images/photos/2023_10.jpg" },
        { date: "2023.08", title: "ACS 2023 Meeting, San Francisco", photo: "assets/images/photos/2023_08.jpg" },
        { date: "2022.08", title: "Lawrence Livermore National Laboratory", photo: "assets/images/photos/2022_08.jpg" }
    ],

    // 10. RECRUITMENT OPENING INFO (opening.html)
    opening: {
        title: "대학원생 및 박사후연구원 모집",
        intro: "한국과학기술연구원 (KIST) 에너지저장연구센터에서 함께 연구할 대학원생 및 박사후연구원을 모집합니다.",
        details: [
            { label: "1. 모집 분야", value: "석사과정, 석/박사통합과정, 박사과정, Postdoc 연구원" },
            { label: "2. 근무지", value: "한국과학기술연구원 에너지저장연구센터 (서울시 성북구 위치)" },
            { label: "3. 지원 자격 및 분야", value: "재료, 화공, 기계, 화학, 물리 등 관련 학과, 차세대 이차전지 소재 관련 연구" }
        ],
        researchTitle: "주요 연구 분야",
        researchSubtitle: "차세대 이차전지용 소재 설계 및 개발 / 인공지능 기반 이차전지용 소재 설계",
        researchItems: [
            "제일원리 계산 및 머신러닝 기반 차세대 이차전지용 소재 설계",
            "차세대 이차전지 소재 합성 및 분석, 전기화학 성능 평가, 전지 제조 및 성능 평가"
        ],
        admissionTitle: "지원 형태",
        admissions: [
            {
                num: "1",
                name: "학연과정",
                desc: "연세대, 고려대, 한양대 등 KIST와 협약된 국내 대학의 학연 연계 대학원 공동 학위 프로그램입니다."
            },
            {
                num: "2",
                name: "UST (과학기술연합대학원대학교) 과정",
                desc: "KIST 캠퍼스에서 수학하며 국책 연구를 함께 진행하는 국가 과학기술 전문 연구원 육성 대학원 과정입니다."
            },
            {
                num: "3",
                name: "연수생 과정 및 Postdoc 상시 지원",
                desc: "대학교 입학 후 위탁 파견 연수생 및 박사후연구원(Postdoc) 직위는 상시 열려 있습니다."
            }
        ],
        contactTitle: "지도박사 (Contact)",
        contactName: "류승호 (Seungho Yu)",
        contactRole: "KIST 에너지저장연구센터 책임연구원",
        contactEmail: "shyu@kist.re.kr",
        contactTel: "02-958-5232"
    }
};
