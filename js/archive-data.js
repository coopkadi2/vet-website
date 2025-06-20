// Archive images data
const archiveImages = [
    { src: "../img/archive/004-mitchell/08_CI_1808_010.jpg", alt: "Archival Image 1" },
    { src: "../img/archive/005-strub/09_DR_001_SitePlan.jpg", alt: "Archival Image 2" },
    { src: "../img/archive/006-gross/006_CI_1903_002_FinalImage.jpg", alt: "Archival Image 3" },
    { src: "../img/archive/006-gross/gross 2.jpg", alt: "Archival Image 4" },
    { src: "../img/archive/011-mcclure/05_30.JPG", alt: "Archival Image 5" },
    { src: "../img/archive/014-hg/14.jpg", alt: "Archival Image 6" },
    { src: "../img/archive/014-hg/14_CI_1911_009.jpg", alt: "Archival Image 7" },
    { src: "../img/archive/015-pearl/04_SK_001_Layers.jpg", alt: "Archival Image 8" },
    { src: "../img/archive/015-pearl/08_CI_1912_063_option 1interior floating orb.jpg", alt: "Archival Image 9" },
    { src: "../img/archive/015-pearl/08_CI_1912_088_OPTION 1 MAIN IMAGE FINALPROJECTION A.jpg", alt: "Archival Image 10" },
    { src: "../img/archive/015-pearl/08_CI_1912_099_OPTION 3 MAIN IMAGE FINALPROJECTIONd.jpg", alt: "Archival Image 11" },
    { src: "../img/archive/015-pearl/08_DR_1912_092_OP1_area.jpg", alt: "Archival Image 12" },
    { src: "../img/archive/016-riyadh/08_CI_2003_064_housingaerial.jpg", alt: "Archival Image 13" },
    { src: "../img/archive/016-riyadh/08_CI_2003_022_PLAN.jpg", alt: "Archival Image 14" },
    { src: "../img/archive/016-riyadh/08_DR_2003_056_site_all.jpg", alt: "Archival Image 15" },
    { src: "../img/archive/016-riyadh/08_CI_2003_007_RIYADH PARK.jpg", alt: "Archival Image 16" },
    { src: "../img/archive/016-riyadh/08_CI_2003_073_HOusingAerial.jpg", alt: "Archival Image 17" },
    { src: "../img/archive/017-fis/2.jpg", alt: "Archival Image 18" },
    { src: "../img/archive/017-fis/meshconcept.jpg", alt: "Archival Image 19" },
    { src: "../img/archive/018-stanfield/09_DR-037_Site-Diagrams_Opt1_Driveway.jpg", alt: "Archival Image 20" },
    { src: "../img/archive/018-stanfield/stnfield 3.jpg", alt: "Archival Image 21" },
    { src: "../img/archive/020-figueredo/020_DR_0610_001_Attic Axon copy.jpg", alt: "Archival Image 22" },
    { src: "../img/archive/020-figueredo/IMG_5975.JPEG", alt: "Archival Image 23" },
    { src: "../img/archive/020-figueredo/IMG_8661.JPEG", alt: "Archival Image 24" },
    { src: "../img/archive/020-figueredo/IMG_9088.JPEG", alt: "Archival Image 25" },
    { src: "../img/archive/020-figueredo/IMG_9344.JPEG", alt: "Archival Image 26" },
    { src: "../img/archive/020-figueredo/IMG_9986.JPEG", alt: "Archival Image 27" },
    { src: "../img/archive/022-limitless/08_CI_2204_005_ROOFSTUDYC.jpg", alt: "Archival Image 28" },
    { src: "../img/archive/022-limitless/08_CI_2204_020_Int.Update2.jpg", alt: "Archival Image 29" },
    { src: "../img/archive/022-limitless/IMG_1329.jpg", alt: "Archival Image 30" },
    { src: "../img/archive/023-ballard/08_CI_2203_018_OPTION4_materiatest 2.png", alt: "Archival Image 31" },
    { src: "../img/archive/024-bark/024_08_CI_068.png", alt: "Archival Image 32" },
    { src: "../img/archive/024-bark/024_08_CI_073 copy.png", alt: "Archival Image 33" },
    { src: "../img/archive/024-bark/024_bark-001.png", alt: "Archival Image 34" },
    { src: "../img/archive/024-bark/05.png", alt: "Archival Image 35" },
    { src: "../img/archive/024-bark/08_CI_2207_031_Retail.png", alt: "Archival Image 36" },
    { src: "../img/archive/024-bark/08_CI_2211_20Final.png", alt: "Archival Image 37" },
    { src: "../img/archive/024-bark/7MB.jpg", alt: "Archival Image 38" },
    { src: "../img/archive/024-bark/IMG_3884.JPEG", alt: "Archival Image 39" },
    { src: "../img/archive/024-bark/IMG_3894.JPEG", alt: "Archival Image 40" },
    { src: "../img/archive/024-bark/IMG_3930.JPEG", alt: "Archival Image 41" },
    { src: "../img/archive/024-bark/IMG_5306.JPEG", alt: "Archival Image 42" },
    { src: "../img/archive/024-bark/IMG_8505.JPG", alt: "Archival Image 43" },
    { src: "../img/archive/026-milton/IMG_3790.JPEG", alt: "Archival Image 44" },
    { src: "../img/archive/026-milton/IMG_5078.jpg", alt: "Archival Image 45" },
    { src: "../img/archive/026-milton/IMG_5147.jpg", alt: "Archival Image 46" },
    { src: "../img/archive/026-milton/IMG_5150.jpg", alt: "Archival Image 47" },
    { src: "../img/archive/027-brentspence/08_CI_2210_032.jpg", alt: "Archival Image 48" },
    { src: "../img/archive/027-brentspence/08_CI_2210_042.jpg", alt: "Archival Image 49" },
    { src: "../img/archive/027-brentspence/08_CI_2210_043.jpg", alt: "Archival Image 50" },
    { src: "../img/archive/027-brentspence/08_CI_2304_160.png", alt: "Archival Image 51" },
    { src: "../img/archive/027-brentspence/08_CI_2305_020.png", alt: "Archival Image 52" },
    { src: "../img/archive/027-brentspence/10_DR_001_WillowRunSiteDiagram.jpg", alt: "Archival Image 53" },
    { src: "../img/archive/028-lang/028_08_2210_046_LevelstoMatch.png", alt: "Archival Image 54" },
    { src: "../img/archive/028-lang/028_08_2210_047.png", alt: "Archival Image 55" },
    { src: "../img/archive/028-lang/IMG_0695.HEIC", alt: "Archival Image 56" },
    { src: "../img/archive/028-lang/IMG_5557.jpg", alt: "Archival Image 57" },
    { src: "../img/archive/028-lang/IMG_5562.jpg", alt: "Archival Image 58" },
    { src: "../img/archive/029-interchange/029_08_CI_004.png", alt: "Archival Image 59" },
    { src: "../img/archive/029-interchange/029_08_CI_005.png", alt: "Archival Image 60" },
    { src: "../img/archive/030-city-hall/221207_COV_Site_DRAFT02.jpg", alt: "Archival Image 61" },
    { src: "../img/archive/030-city-hall/view1.jpg", alt: "Archival Image 62" },
    { src: "../img/archive/030-city-hall/view2.jpg", alt: "Archival Image 63" },
    { src: "../img/archive/032-oddbody/032_08_CI_006.png", alt: "Archival Image 64" },
    { src: "../img/archive/033-grocery/033_08_CI_011.png", alt: "Archival Image 65" },
    { src: "../img/archive/033-grocery/70613379287__161DD84F-1345-447F-B6D9-C4E992006E5A.jpg", alt: "Archival Image 66" },
    { src: "../img/archive/034-shelter/DSC_7889.jpg", alt: "Archival Image 67" },
    { src: "../img/archive/034-shelter/IMG_2502.JPEG", alt: "Archival Image 68" },
    { src: "../img/archive/034-shelter/IMG_2514.JPEG", alt: "Archival Image 69" },
    { src: "../img/archive/034-shelter/IMG_2515.JPEG", alt: "Archival Image 70" },
    { src: "../img/archive/034-shelter/IMG_4601.JPG", alt: "Archival Image 71" },
    { src: "../img/archive/034-shelter/IMG_4609.JPG", alt: "Archival Image 72" },
    { src: "../img/archive/034-shelter/IMG_4622.JPG", alt: "Archival Image 73" },
    { src: "../img/archive/034-shelter/IMG_4627.JPG", alt: "Archival Image 74" },
    { src: "../img/archive/035-vandivort/IMG_5495.jpg", alt: "Archival Image 75" },
    { src: "../img/archive/035-vandivort/IMG_5501.jpg", alt: "Archival Image 76" },
    { src: "../img/archive/037-crescendo/construct-1.png", alt: "Archival Image 77" },
    { src: "../img/archive/037-crescendo/DJI_0022.JPG", alt: "Archival Image 78" },
    { src: "../img/archive/037-crescendo/IMG_1421.JPG", alt: "Archival Image 79" },
    { src: "../img/archive/037-crescendo/IMG_1426.JPG", alt: "Archival Image 80" },
    { src: "../img/archive/037-crescendo/IMG_4286.JPG", alt: "Archival Image 81" },
    { src: "../img/archive/037-crescendo/IMG_4288.JPG", alt: "Archival Image 82" },
    { src: "../img/archive/037-crescendo/IMG_4316.JPG", alt: "Archival Image 83" },
    { src: "../img/archive/037-crescendo/IMG_4367.JPG", alt: "Archival Image 84" },
    { src: "../img/archive/037-crescendo/IMG_4736.JPG", alt: "Archival Image 85" },
    { src: "../img/archive/037-crescendo/IMG_5250.JPG", alt: "Archival Image 86" },
    { src: "../img/archive/037-crescendo/IMG_7648.JPG", alt: "Archival Image 87" },
    { src: "../img/archive/037-crescendo/IMG_7655.JPG", alt: "Archival Image 88" },
    { src: "../img/archive/037-crescendo/IMG_7657.JPG", alt: "Archival Image 89" },
    { src: "../img/archive/037-crescendo/IMG_9785.JPG", alt: "Archival Image 90" },
    { src: "../img/archive/038-dbd/230613_08_CI-COMPOSITE-IMAGES-018.jpg", alt: "Archival Image 91" },
    { src: "../img/archive/040-shah-bandari/040_CI_2402_012.jpg", alt: "Archival Image 92" },
    { src: "../img/archive/042-findlay/042_DR_2405_032_PodiumSection.jpg", alt: "Archival Image 93" },
    { src: "../img/archive/042-findlay/08_CI_2405_103_materialId.png", alt: "Archival Image 94" },
    { src: "../img/archive/042-findlay/08_CI_2405_122_CMU_Organic-dtl.png", alt: "Archival Image 95" },
    { src: "../img/archive/042-findlay/08_CI_2406_156.jpg", alt: "Archival Image 96" },
    { src: "../img/archive/042-findlay/240524_ACT.png", alt: "Archival Image 97" },
    { src: "../img/archive/042-findlay/diagram-1.PNG", alt: "Archival Image 98" },
    { src: "../img/archive/043-overbeck/043_09_DR_027_Amelia_Opt3.jpg", alt: "Archival Image 99" },
    { src: "../img/archive/044-lower-harbin/08_CI_2409_044.png", alt: "Archival Image 100" },
    { src: "../img/archive/044-lower-harbin/08_CI_2410_001_Axon-L.png", alt: "Archival Image 101" },
    { src: "../img/archive/044-lower-harbin/08_CI_2501_001_RR-Render.png", alt: "Archival Image 102" },
    { src: "../img/archive/045-tpcc/045_09_DR_2409_047.jpg", alt: "Archival Image 103" },
    { src: "../img/archive/045-tpcc/08_CI_2408_001.png", alt: "Archival Image 104" },
    { src: "../img/archive/045-tpcc/08_CI_2412_002_proposed-paths.png", alt: "Archival Image 105" },
    { src: "../img/archive/046-pickle/046_08_CI_2412_001.png", alt: "Archival Image 106" },
    { src: "../img/archive/046-pickle/046_08_CI_2412_002.png", alt: "Archival Image 107" },
    { src: "../img/archive/046-pickle/046_08_CI_2412_003.png", alt: "Archival Image 108" },
    { src: "../img/archive/046-pickle/046_09_DR_2410_001_test-fit.jpg", alt: "Archival Image 109" },
    { src: "../img/archive/046-pickle/048_08_CI_2501_022.png", alt: "Archival Image 110" },
    { src: "../img/archive/046-pickle/048_08_CI_2501_036.png", alt: "Archival Image 111" },
    { src: "../img/archive/046-pickle/048_08_CI_2502_024_courts.png", alt: "Archival Image 112" },
    { src: "../img/archive/046-pickle/048_08_CI_2503_004_GuardrailStudy.png", alt: "Archival Image 113" },
    { src: "../img/archive/046-pickle/048_08_CI_2503_012_Bar-2.png", alt: "Archival Image 114" },
    { src: "../img/archive/046-pickle/048_08_CI_2504_004_mezz-stairs.png", alt: "Archival Image 115" },
    { src: "../img/archive/046-pickle/05S.PNG", alt: "Archival Image 116" },
    { src: "../img/archive/046-pickle/Enscape_2025-02-04-14-53-55_8001.png", alt: "Archival Image 117" },
    { src: "../img/archive/046-pickle/IMG_4587.JPG", alt: "Archival Image 118" },
    { src: "../img/archive/046-pickle/IMG_4590.JPG", alt: "Archival Image 119" },
    { src: "../img/archive/047-drake/047_08_CI_2503_001.png", alt: "Archival Image 120" },
    { src: "../img/archive/049-tpcc-club/049_08_CI_2504_004-bar-option-u.png", alt: "Archival Image 121" },
    { src: "../img/archive/049-tpcc-club/049_08_CI_2504_052.jpg", alt: "Archival Image 122" },
    { src: "../img/archive/049-tpcc-club/ceilingcolorplan_001 (1).jpg", alt: "Archival Image 123" },
    { src: "../img/archive/815-jabal/08_CI_2008_012_ticket002.jpg", alt: "Archival Image 124" },
    { src: "../img/archive/815-jabal/234_Garden Inside_2_UAM.jpg", alt: "Archival Image 125" },
    { src: "../img/archive/815-jabal/Concept Sketch.png", alt: "Archival Image 126" },
    { src: "../img/archive/815-jabal/jabal-005.jpg", alt: "Archival Image 127" },
    { src: "../img/archive/827-quiethouse/08_CI_2407_055_updated-corner.png", alt: "Archival Image 128" },
    { src: "../img/archive/827-quiethouse/Enscape_2024-07-16-15-02-13.png", alt: "Archival Image 129" },
    { src: "../img/archive/829-colerain/B201704839_14499740_14499740.JPG", alt: "Archival Image 130" },
    { src: "../img/archive/829-colerain/IMG_5308.JPG", alt: "Archival Image 131" },
    { src: "../img/archive/829-colerain/IMG_6451.JPEG", alt: "Archival Image 132" },
    { src: "../img/archive/829-colerain/IMG_6459.JPEG", alt: "Archival Image 133" }
];