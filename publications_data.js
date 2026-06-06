/**
 * ==========================================================================
 * KIST Energy Materials Design Lab (Seungho Yu's Group) Website Publications Database
 * ==========================================================================
 * 
 * This file contains the publications data separated from data.js.
 * Merged year groups (e.g. 2015-2018) have been split into single individual years.
 * Each paper has an 'image' attribute where you can specify a TOC/graphical abstract image (e.g. "assets/images/papers/paper_name.jpg").
 */

const PUBLICATIONS_DATA = [
    {
        year: "2026",
        papers: [
            {
                title: "Synergistically Accelerating Zn2+ Transport and Desolvation through Cation-Deficient Ion Channels in High-Performance Zn Metal Batteries",
                authors: "Hyeongbeom Kang, Jung Been Park, Myeongcho Jang, Min Sang Kim, <strong>Seungho Yu*</strong>, and Dong-Wan Kim*",
                journal: "Carbon Energy, 2026, accepted",
                isCorresponding: true,
                image: "assets/images/papers/2026_zinc_transport.jpg" // 여기에 논문 요약/TOC 이미지를 저장하세요
            },
            {
                title: "Inducing (101)-preferred orientation in Zn metal anodes via texture engineering for dendrite-free aqueous Zn-ion batteries",
                authors: "Yewon Kim, Sunghee Shin, Ha Eun Baeg, Eunji Kwon, Si Hyoung Oh, <strong>Seungho Yu</strong>, Hyun Wook Jung, Hyung-Seok Kim*",
                journal: "Journal of Energy Storage, 2026, 156, 121670",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Synergistic Enhancement of Oxygen Redox Activity and Structural Integrity through Li/F Doping in Layered Oxide Cathodes for Sodium-ion Batteries",
                authors: "Elang Barruna, Sang Hyuk Gong, Yiseul Yoo, Eunji Kwon, Kyung Yoon Chung, Dong Won Chun, Kyu Hyoung Lee, <strong>Seungho Yu*</strong>, Hyung-Seok Kim*",
                journal: "Nano Energy, 2026, 150, 111787",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Design Principles for Cation-Disordered Superionic Thioantimonate Argyrodite Solid Electrolytes",
                authors: "Kanguk Park†, Myeongcho Jang†, Eunji Kwon, Yongheum Lee, Hun-Gi Jung, Kyung Yoon Chung, Seung-Ho Yu*, <strong>Seungho Yu*</strong>",
                journal: "Nano Energy, 2026, 150, 111777",
                isCorresponding: true,
                isCoFirst: true,
                isOpenAccess: true,
                image: ""
            },
            {
                title: "Tailoring electrochemical interface to regulate competition between Zn deposition and hydrogen evolution in aqueous rechargeable batteries",
                authors: "Minhyung Kwon, Seungyun Jeon, Uichan Hwang, Eunji Kwon, Hee-Kang Shin, <strong>Seungho Yu</strong>, Dong-Ik Kim, Jihyun Hong, Minah Lee*",
                journal: "Energy Storage Materials, 2026, 86, 104960",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Interfacial Stability and Design Strategies for Halide Solid Electrolytes in High-Voltage All-Solid-State Sodium-Ion Batteries",
                authors: "Myeongcho Jang, Eunji Kwon, Chelin Jeon, Sooyeon Kim*, and <strong>Seungho Yu*</strong>",
                journal: "Small Methods, 2026, 10, e02179",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Fluorinated Halide Solid Electrolytes for High-Voltage All-Solid-State Sodium-Ion Batteries Enabling Reversible Oxygen Redox",
                authors: "Chelin Jeon†, Yiseul Yoo†, Eunji Kwon†, Sang Hyuk Gong, Mingony Kim, Sang-Ok Kim, Hyung-Seok Kim, Hun-Gi Jung, Kyung Yoon Chung, Yoon Seok Jung*, <strong>Seungho Yu*</strong>",
                journal: "ACS Energy Letters, 2026, 11, 616-624",
                isCorresponding: true,
                isCoFirst: true,
                isCover: true,
                image: ""
            }
        ]
    },
    {
        year: "2025",
        papers: [
            {
                title: "Oxygen-Induced Lithium Inter-Cage Conduction for Enhanced Performance in All-Solid-State Batteries",
                authors: "Yongsun Park†, Myeongcho Jang†, Jiyu Kim†, Joon Ha Chang, Hae-Yong Kim, Seung-Deok Seo, Gwangseok Oh, Min Jae You, Sunho Ko, Jung Ho Kim, Kyung-Wan Nam, <strong>Seungho Yu*</strong>, Sang-Cheol Nam*, Ohmin Kwon*",
                journal: "eScience, 2025, 6, 100502",
                isCorresponding: true,
                isCoFirst: true,
                image: ""
            },
            {
                title: "Rational Materials Design for Stable Interfaces in All-Solid-State Potassium-Ion Batteries",
                authors: "Sooyeon Kim*, Myeongcho Jang, and <strong>Seungho Yu*</strong>",
                journal: "Journal of Materials Chemistry A, 2025, 13, 39013-39020",
                isCorresponding: true,
                isHot: true,
                image: ""
            },
            {
                title: "Hierarchically structured Co@Fe(SA)-MoO/MoP electrocatalyst with tuned electronic states for thermodynamically optimized hydrogen adsorption in chloride-rich media",
                authors: "Muhaiminul Islam, Jongwoo Hong, Kanguk Park, Amar M. Patil, Taehyeon Kim, Sushanta K. Das, <strong>Seungho Yu*</strong>, Seong Chan Jun*",
                journal: "Journal of Materials Chemistry A, 2025, 13, 41375-41389",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Mechanistic Insights into Superionic Thioarsenate Argyrodite Solid Electrolytes via Machine Learning Interatomic Potentials",
                authors: "Myeongcho Jang, Kanguk Park, Yongheum Lee, Joon Hyung Shim*, Kwangnam Kim*, and <strong>Seungho Yu*</strong>",
                journal: "Journal of Materials Chemistry A, 2025, 13, 33203-33211",
                isCorresponding: true,
                isHot: true,
                image: ""
            },
            {
                title: "Boosting the Power Characteristics of All-Solid-State Batteries through Improved Electrochemical Stability: Site-Specific Nb Doping in Argyrodite",
                authors: "Yongsun Park, So Yi Lee, Hae-Yong Kim, Myeongcho Jang, Sunho Ko, Gwangsuk Oh, Seung-Deok Seo, Min Jae You, Hanjun Kim, Minwook Pin, Robson S. Monteiro, <strong>Seungho Yu*</strong>, Kyung-Wan Nam*, Sang Cheol Nam*, Ohmin Kwon*",
                journal: "eScience, 2025, 7, e70058",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Cu2O/Cu Chiral Catalysts for Highly Selective Solar-Assisted CO2-to-CO Electroreduction",
                authors: "Hyungsoo Lee, Young Sun Park, Eunji Kwon, Chang-Seop Jeong, Juwon Yun, Subin Moon, Soobin Lee, Jun Hwan Kim, Donghyun Kim, Wooyong Jeong, Jaehyun Son, <strong>Seungho Yu*</strong>, and Jooho Moon*",
                journal: "Advanced Functional Materials, 2025, 35, 50, e08577",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Designing Metal Phosphide Solid-Electrolyte Interphase for Stable Lithium Metal Batteries through Electrified Interface Optimization and Synergistic Conversion",
                authors: "Jung Been Park, Changhoon Choi, Min Sang Kim, Hyeongbeom Kang, Eunji Kwon, <strong>Seungho Yu*</strong>, and Dong-Wan Kim*",
                journal: "Nano-Micro Letters, 2025, 17, 315",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Unraveling Li-Ion Transport Mechanisms in High-Entropy Anion-Disordered Argyrodites via Machine-Learned Interatomic Potentials",
                authors: "Myeongcho Jang†, Kanguk Park†, Hun-Gi Jung, Kyung Yoon Chung, Joon Hyung Shim*, Ohmin Kwon*, and <strong>Seungho Yu*</strong>",
                journal: "ACS Energy Letters, 2025, 13, 16547-16555",
                isCorresponding: true,
                isCoFirst: true,
                image: ""
            },
            {
                title: "A biphasic copper-zinc alloy passivated anode for zinc-ion batteries: Kinetically controllable alloying of monolayered copper nanoparticles",
                authors: "Yeongje Lee, Sunghee Shin, Hyo Jin Lim, Yu Mi Woo, Young-Bin Kim, Eunji Kwon, Yiseul Yoo, Sun-Kyung Kim, Seung-Ho Yu, <strong>Seungho Yu</strong>, Kyung Yoon Chung, Jung Hwan Park, Hyung-Seok Kim, Sunho Jeong",
                journal: "Chemical Engineering Journal, 2025, 512, 162162",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Dendrite-free Sb-doped NASICON-type Na3Zr2Si2PO12 Solid-Electrolyte for Stable Solid-State Sodium Batteries",
                authors: "Muhammad Akbar, Mingony Kim, Iqra Moeez, Ali Hussain Umar Bhatti, Young Hwan Kim, Jiwon Jeong, Ji-young Kim, Jae-Ho Park, <strong>Seungho Yu</strong>, Kyung Yoon Chung*",
                journal: "Chemical Engineering Journal, 2025, 504, 158860",
                isCorresponding: false,
                image: ""
            }
        ]
    },
    {
        year: "2024",
        papers: [
            {
                title: "Electrochemically tailored host design with gradient seeds for dendrite-free Li metal batteries",
                authors: "Hyeonmin Jo, Jun-Won Lee, Eunji Kwon, <strong>Seungho Yu</strong>, Byung Gon Kim, Seong-Soo Park, Janghyuk Moon, Min Jae Ko*, Hee-Dae Lim*",
                journal: "ACS Nano, 2024, 18, 52, 35718–35728",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Understanding the electrochemical processes of SeS2 positive electrodes for developing high-performance non-aqueous lithium sulfur batteries",
                authors: "Ji Hwan Kim, Mihyun Kim, Seong-Jun Kim, Shin-Yeong Kim, <strong>Seungho Yu</strong>, Wonchan Hwang, Eunji Kwon, Jae-Hong Lim, So Hee Kim, Yung-Eun Sung*, Seung-Ho Yu*",
                journal: "Nature Communications, 2024, 15, 7669",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Fluorine-Substituted Lithium Chloride Solid Electrolytes for High-Voltage All-Solid-State Lithium-Ion Batteries",
                authors: "Sooyeon Kim†, Yongheum Lee†, Kwangnam Kim, Brandon C. Wood*, Sang Soo Han*, and <strong>Seungho Yu*</strong>",
                journal: "ACS Energy Letters, 2024, 9, 1, 38-47",
                isCorresponding: true,
                isCoFirst: true,
                image: ""
            },
            {
                title: "Te hexagonal nanotubes with fast 1-dimensional Zn ion diffusion for high-performance zinc-ion battery cathodes",
                authors: "Mihyun Kim, Hyosik Kim, Si-Hwan Lee, <strong>Seungho Yu</strong>, Won Kim, Jong-Seong Bae, Chi-Yeong Ahn, Hyungwon Shim, Ji Eun Lee* and Seung-Ho Yu*",
                journal: "Chemical Engineering Journal, 2024, 481, 148256",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Fortifying Zinc Metal Anodes against Uncontrollable Side-Reactions and Dendrite Growth for Practical Aqueous Zinc Ion Batteries",
                authors: "Jong Hyun Park, Changhoon Choi, Jung Been Park, <strong>Seungho Yu*</strong>, and Dong-Wan Kim*",
                journal: "Advanced Energy Materials, 2024, 14, 2302493",
                isCorresponding: true,
                image: ""
            }
        ]
    },
    {
        year: "2023",
        papers: [
            {
                title: "Argyrodite sulfide coated NCM cathode for the improved interfacial contact in normal-pressure operational all-solid-state batteries",
                authors: "Jun Tae Kim, Hyeon-Ji Shin, A-Yeon Kim, Hyeon-Seong Oh, Hun Kim, <strong>Seungho Yu</strong>, Hyoungchul Kim, Kyung Yoon Chung, Jongsoon Kim, Yang-Kook Sun*, and Hun-Gi Jung*",
                journal: "Journal of Materials Chemistry A, 2023, 11, 20549-20558",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Enhancing the Interfacial Stability of All-Solid-State High-Energy Sodium-Ion Batteries by Coating Materials: First Principles Calculations",
                authors: "Gin Hyung Chun, Sang Hyuk Gong, Hyung-Seok Kim, Joon Hyung Shim, and <strong>Seungho Yu*</strong>",
                journal: "Applied Surface Science, 2023, 616, 156479",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Electrochemical assessment of highly reversible SnO2–coated Zn metal anodes prepared via atomic layer deposition for aqueous Zn-ion batteries",
                authors: "Sang Hyuk Gong, Hyo Jin Lim, Ji Hyeon Lee, Yiseul Yoo, <strong>Seungho Yu</strong>, Hee-Dae Lim, Hyun Wook Jung, Jesse S. Ko*, In Soo Kim*, and Hyung-Seok Kim*",
                journal: "Applied Surface Science, 2023, 611, 155633",
                isCorresponding: false,
                image: ""
            }
        ]
    },
    {
        year: "2022",
        papers: [
            {
                title: "Structural design strategies for superionic sodium halide solid electrolytes",
                authors: "<strong>Seungho Yu*</strong>, Kwangnam Kim, Brandon C. Wood, Hun-Gi Jung, and Kyung Yoon Chung",
                journal: "Journal of Materials Chemistry A, 2022, 10, 24301-24309",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Computational Investigation of the Interfacial Stability of Lithium Chloride Solid Electrolytes in All-Solid-State Lithium Batteries",
                authors: "Gin Hyung Chun, Joon Hyung Shim*, and <strong>Seungho Yu*</strong>",
                journal: "ACS Applied Materials & Interfaces, 2022, 14, 1, 1241–1248",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Lithium Argyrodite Sulfide Electrolytes with High Ionic Conductivity and Air Stability for All-Solid-State Li-Ion Batteries",
                authors: "Yongheum Lee, Jiwon Jeong, Ho Jun Lee, Mingony Kim, Daseul Han, Hyoungchul Kim, Jong Min Yuk, Kyung-Wan Nam, Kyung Yoon Chung, Hun-Gi Jung, and <strong>Seungho Yu*</strong>",
                journal: "ACS Energy Letters, 2022, 7, 1, 171−179",
                isCorresponding: true,
                image: ""
            }
        ]
    },
    {
        year: "2021",
        papers: [
            {
                title: "Materials design of sodium chloride solid electrolytes Na3MCl6 for all-solid-state sodium-ion batteries",
                authors: "Dongsu Park, Kwangnam Kim, Gin Hyung Chun, Brandon C Wood, Joon Hyung Shim*, and <strong>Seungho Yu*</strong>",
                journal: "Journal of Materials Chemistry A, 2021, 9, 23037-23045",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Superionic Si-Substituted Lithium Argyrodite Sulfide Electrolyte Li6+xSb1–xSixS5I for All-Solid-State Batteries",
                authors: "Yongheum Lee, Jiwon Jeong, Hee-Dae Lim, Sang-Ok Kim, Hun-Gi Jung, Kyung Yoon Chung, and <strong>Seungho Yu*</strong>",
                journal: "ACS Sustainable Chemistry & Engineering, 2021, 9, 1, 120-128",
                isCorresponding: true,
                image: ""
            }
        ]
    },
    {
        year: "2020",
        papers: [
            {
                title: "Theoretical Design of Lithium Chloride Superionic Conductors for All-Solid-State High-Voltage Lithium-Ion Batteries",
                authors: "Dongsu Park, Haesun Park, Yongheum Lee, Sang-Ok Kim, Hun-Gi Jung, Kyung Yoon Chung, Joon Hyung Shim, and <strong>Seungho Yu*</strong>",
                journal: "ACS Applied Materials & Interfaces, 2020, 12, 34806-34814",
                isCorresponding: true,
                image: ""
            },
            {
                title: "Thermodynamic Analysis of High Energy Density Conversion Type Cathode Materials for Na‐and K‐Ion Batteries",
                authors: "Yongheum Lee, Sang-Ok Kim, Hyung-Seok Kim, and <strong>Seungho Yu*</strong>",
                journal: "International Journal of Energy Research, 2020, 44 (7), 6068-6077",
                isCorresponding: true,
                image: ""
            }
        ]
    },
    {
        year: "2019",
        papers: [
            {
                title: "Thermodynamic Assessment of Coating Materials for Solid-State Li, Na, and K Batteries",
                authors: "<strong>Seungho Yu</strong>, Haesun Park, and Donald J. Siegel*",
                journal: "ACS Applied Materials & Interfaces, 2019, 11, 36607−36615",
                isCorresponding: false,
                image: ""
            },
            {
                title: "Computational Screening of Anode Materials for Potassium-Ion Batteries",
                authors: "<strong>Seungho Yu</strong>, Sang-Ok Kim, Hyung-Seok Kim, and Wonchang Choi",
                journal: "International Journal of Energy Research, 2019, 43 (13), 7646-7654",
                isCorresponding: false,
                image: ""
            }
        ]
    },
    {
        year: "2018",
        papers: [
            {
                title: "Grain Boundary Softening: A Mechanism for Lithium Metal Penetration through Stiff Solid Electrolytes",
                authors: "<strong>Seungho Yu</strong> and Donald J. Siegel*",
                journal: "ACS Applied Materials & Interfaces, 2018, 10 (44), 38151–38158",
                isCorresponding: false,
                image: ""
            }
        ]
    },
    {
        year: "2017",
        papers: [
            {
                title: "Grain Boundary Contributions to Li-Ion Transport in the Solid Electrolyte Li7La3Zr2O12 (LLZO)",
                authors: "<strong>Seungho Yu</strong> and Donald J. Siegel*",
                journal: "Chemistry of Materials, 2017, 29 (22), 9639–9647",
                isCorresponding: false,
                image: ""
            }
        ]
    },
    {
        year: "2014",
        papers: [
            {
                title: "Electrical, thermal and species transport properties of liquid eutectic Ga-In and Ga-In-Sn from first principles",
                authors: "<strong>Seungho Yu</strong> and Massoud Kaviany*",
                journal: "The Journal of Chemical Physics, 2014, 140 (6), 064303",
                isCorresponding: false,
                image: ""
            }
        ]
    },
    {
        year: "2013",
        papers: [
            {
                title: "Transportation properties in nanosized LiFePO4 positive electrodes and their effects on the cell performance",
                authors: "<strong>Seungho Yu</strong>, Soo Kim, Tae Young Kim, Jin Hyun Nam*, and Won Il Cho",
                journal: "Journal of Applied Electrochemistry, 2013, 43 (3), 253-262",
                isCorresponding: false,
                image: ""
            }
        ]
    }
];

// Merge into LAB_DATA if it exists (for compatibility with script.js)
if (typeof LAB_DATA !== 'undefined') {
    LAB_DATA.publications = PUBLICATIONS_DATA;
}
