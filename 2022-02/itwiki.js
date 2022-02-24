// IT위키에서 키워드 목록을 가져와서 주기적으로 최신화 한다.
/**
 * https://itwiki.kr/index.php?title=%ED%8A%B9%EC%88%98:%EB%AA%A8%EB%93%A0%EB%AC%B8%EC%84%9C&from=.htaccess
 */
// var list = [];
// document.querySelectorAll('.mw-allpages-chunk li a').forEach((a) => {
//   list.push({
//     name: a.innerHTML,
//     url: a.href
//   });
// });
// console.log(list);

var _itwiki = [
  {
      "name": ".htaccess",
      "url": "https://itwiki.kr/w/.htaccess"
  },
  {
      "name": "/proc/cpuinfo",
      "url": "https://itwiki.kr/w//proc/cpuinfo"
  },
  {
      "name": "/proc/meminfo",
      "url": "https://itwiki.kr/w//proc/meminfo"
  },
  {
      "name": "0-1 배낭 문제",
      "url": "https://itwiki.kr/w/0-1_%EB%B0%B0%EB%82%AD_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "10대 기술 트렌드(2021)",
      "url": "https://itwiki.kr/w/10%EB%8C%80_%EA%B8%B0%EC%88%A0_%ED%8A%B8%EB%A0%8C%EB%93%9C(2021)"
  },
  {
      "name": "12 Factor",
      "url": "https://itwiki.kr/w/12_Factor"
  },
  {
      "name": "1세대 이동통신",
      "url": "https://itwiki.kr/w/1%EC%84%B8%EB%8C%80_%EC%9D%B4%EB%8F%99%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "2022년 기술사 시험일정",
      "url": "https://itwiki.kr/w/2022%EB%85%84_%EA%B8%B0%EC%88%A0%EC%82%AC_%EC%8B%9C%ED%97%98%EC%9D%BC%EC%A0%95"
  },
  {
      "name": "2PC",
      "url": "https://itwiki.kr/w/2PC"
  },
  {
      "name": "2계층",
      "url": "https://itwiki.kr/w/2%EA%B3%84%EC%B8%B5"
  },
  {
      "name": "2단계 로킹 규약",
      "url": "https://itwiki.kr/w/2%EB%8B%A8%EA%B3%84_%EB%A1%9C%ED%82%B9_%EA%B7%9C%EC%95%BD"
  },
  {
      "name": "2단계 커밋",
      "url": "https://itwiki.kr/w/2%EB%8B%A8%EA%B3%84_%EC%BB%A4%EB%B0%8B"
  },
  {
      "name": "2세대 이동통신",
      "url": "https://itwiki.kr/w/2%EC%84%B8%EB%8C%80_%EC%9D%B4%EB%8F%99%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "3-4-5 규칙",
      "url": "https://itwiki.kr/w/3-4-5_%EA%B7%9C%EC%B9%99"
  },
  {
      "name": "3.20 공격",
      "url": "https://itwiki.kr/w/3.20_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "3.20 사이버 테러",
      "url": "https://itwiki.kr/w/3.20_%EC%82%AC%EC%9D%B4%EB%B2%84_%ED%85%8C%EB%9F%AC"
  },
  {
      "name": "3DES",
      "url": "https://itwiki.kr/w/3DES"
  },
  {
      "name": "3D 프린팅",
      "url": "https://itwiki.kr/w/3D_%ED%94%84%EB%A6%B0%ED%8C%85"
  },
  {
      "name": "3GPP",
      "url": "https://itwiki.kr/w/3GPP"
  },
  {
      "name": "3R",
      "url": "https://itwiki.kr/w/3R"
  },
  {
      "name": "3점 산정",
      "url": "https://itwiki.kr/w/3%EC%A0%90_%EC%82%B0%EC%A0%95"
  },
  {
      "name": "464XLAT",
      "url": "https://itwiki.kr/w/464XLAT"
  },
  {
      "name": "4C",
      "url": "https://itwiki.kr/w/4C"
  },
  {
      "name": "4GT 모델",
      "url": "https://itwiki.kr/w/4GT_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "4GT 모형",
      "url": "https://itwiki.kr/w/4GT_%EB%AA%A8%ED%98%95"
  },
  {
      "name": "4P",
      "url": "https://itwiki.kr/w/4P"
  },
  {
      "name": "4세대 기법",
      "url": "https://itwiki.kr/w/4%EC%84%B8%EB%8C%80_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "4차 산업혁명",
      "url": "https://itwiki.kr/w/4%EC%B0%A8_%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85"
  },
  {
      "name": "4차산업혁명",
      "url": "https://itwiki.kr/w/4%EC%B0%A8%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85"
  },
  {
      "name": "4차산업혁명위원회",
      "url": "https://itwiki.kr/w/4%EC%B0%A8%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "4차산업혁명위원회 데이터특별위원회",
      "url": "https://itwiki.kr/w/4%EC%B0%A8%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85%EC%9C%84%EC%9B%90%ED%9A%8C_%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%8A%B9%EB%B3%84%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "5-4-3 규칙",
      "url": "https://itwiki.kr/w/5-4-3_%EA%B7%9C%EC%B9%99"
  },
  {
      "name": "5-Force",
      "url": "https://itwiki.kr/w/5-Force"
  },
  {
      "name": "5Force",
      "url": "https://itwiki.kr/w/5Force"
  },
  {
      "name": "5G",
      "url": "https://itwiki.kr/w/5G"
  },
  {
      "name": "5G Standalone",
      "url": "https://itwiki.kr/w/5G_Standalone"
  },
  {
      "name": "5 Force",
      "url": "https://itwiki.kr/w/5_Force"
  },
  {
      "name": "5 포스",
      "url": "https://itwiki.kr/w/5_%ED%8F%AC%EC%8A%A4"
  },
  {
      "name": "5세대 이동통신",
      "url": "https://itwiki.kr/w/5%EC%84%B8%EB%8C%80_%EC%9D%B4%EB%8F%99%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "5스타 오픈 데이터",
      "url": "https://itwiki.kr/w/5%EC%8A%A4%ED%83%80_%EC%98%A4%ED%94%88_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "6 시그마",
      "url": "https://itwiki.kr/w/6_%EC%8B%9C%EA%B7%B8%EB%A7%88"
  },
  {
      "name": "6세대 와이파이",
      "url": "https://itwiki.kr/w/6%EC%84%B8%EB%8C%80_%EC%99%80%EC%9D%B4%ED%8C%8C%EC%9D%B4"
  },
  {
      "name": "6시그마",
      "url": "https://itwiki.kr/w/6%EC%8B%9C%EA%B7%B8%EB%A7%88"
  },
  {
      "name": "7.7 DDoS",
      "url": "https://itwiki.kr/w/7.7_DDoS"
  },
  {
      "name": "7.7 디도스",
      "url": "https://itwiki.kr/w/7.7_%EB%94%94%EB%8F%84%EC%8A%A4"
  },
  {
      "name": "7s",
      "url": "https://itwiki.kr/w/7s"
  },
  {
      "name": "AAA",
      "url": "https://itwiki.kr/w/AAA"
  },
  {
      "name": "ABC/ABM",
      "url": "https://itwiki.kr/w/ABC/ABM"
  },
  {
      "name": "ACID",
      "url": "https://itwiki.kr/w/ACID"
  },
  {
      "name": "ACK 스톰",
      "url": "https://itwiki.kr/w/ACK_%EC%8A%A4%ED%86%B0"
  },
  {
      "name": "ADAS",
      "url": "https://itwiki.kr/w/ADAS"
  },
  {
      "name": "ADB",
      "url": "https://itwiki.kr/w/ADB"
  },
  {
      "name": "AES",
      "url": "https://itwiki.kr/w/AES"
  },
  {
      "name": "AI",
      "url": "https://itwiki.kr/w/AI"
  },
  {
      "name": "AICBM",
      "url": "https://itwiki.kr/w/AICBM"
  },
  {
      "name": "AI 관련 개인정보보호 6대 원칙",
      "url": "https://itwiki.kr/w/AI_%EA%B4%80%EB%A0%A8_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8_6%EB%8C%80_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "ALM",
      "url": "https://itwiki.kr/w/ALM"
  },
  {
      "name": "ALSA",
      "url": "https://itwiki.kr/w/ALSA"
  },
  {
      "name": "AOP",
      "url": "https://itwiki.kr/w/AOP"
  },
  {
      "name": "APT",
      "url": "https://itwiki.kr/w/APT"
  },
  {
      "name": "APT 공격",
      "url": "https://itwiki.kr/w/APT_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "AP 보안",
      "url": "https://itwiki.kr/w/AP_%EB%B3%B4%EC%95%88"
  },
  {
      "name": "AR",
      "url": "https://itwiki.kr/w/AR"
  },
  {
      "name": "ARIA",
      "url": "https://itwiki.kr/w/ARIA"
  },
  {
      "name": "ARIES",
      "url": "https://itwiki.kr/w/ARIES"
  },
  {
      "name": "ARIES 회복 기법",
      "url": "https://itwiki.kr/w/ARIES_%ED%9A%8C%EB%B3%B5_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "ARP",
      "url": "https://itwiki.kr/w/ARP"
  },
  {
      "name": "ARP Spoofing",
      "url": "https://itwiki.kr/w/ARP_Spoofing"
  },
  {
      "name": "ARP 스푸핑",
      "url": "https://itwiki.kr/w/ARP_%EC%8A%A4%ED%91%B8%ED%95%91"
  },
  {
      "name": "ARX",
      "url": "https://itwiki.kr/w/ARX"
  },
  {
      "name": "ASIL",
      "url": "https://itwiki.kr/w/ASIL"
  },
  {
      "name": "ASLR",
      "url": "https://itwiki.kr/w/ASLR"
  },
  {
      "name": "ASN.1",
      "url": "https://itwiki.kr/w/ASN.1"
  },
  {
      "name": "ASP",
      "url": "https://itwiki.kr/w/ASP"
  },
  {
      "name": "ATAM",
      "url": "https://itwiki.kr/w/ATAM"
  },
  {
      "name": "AUTOSAR",
      "url": "https://itwiki.kr/w/AUTOSAR"
  },
  {
      "name": "AVL 트리",
      "url": "https://itwiki.kr/w/AVL_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "Active Learning",
      "url": "https://itwiki.kr/w/Active_Learning"
  },
  {
      "name": "Ad-hoc",
      "url": "https://itwiki.kr/w/Ad-hoc"
  },
  {
      "name": "Advanced Persistent Threat",
      "url": "https://itwiki.kr/w/Advanced_Persistent_Threat"
  },
  {
      "name": "Alias",
      "url": "https://itwiki.kr/w/Alias"
  },
  {
      "name": "Appliance server",
      "url": "https://itwiki.kr/w/Appliance_server"
  },
  {
      "name": "Arp 스푸핑",
      "url": "https://itwiki.kr/w/Arp_%EC%8A%A4%ED%91%B8%ED%95%91"
  },
  {
      "name": "AutoML",
      "url": "https://itwiki.kr/w/AutoML"
  },
  {
      "name": "B* 트리",
      "url": "https://itwiki.kr/w/B*_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "B2Bi",
      "url": "https://itwiki.kr/w/B2Bi"
  },
  {
      "name": "BAM",
      "url": "https://itwiki.kr/w/BAM"
  },
  {
      "name": "BASE",
      "url": "https://itwiki.kr/w/BASE"
  },
  {
      "name": "BCG 매트릭스",
      "url": "https://itwiki.kr/w/BCG_%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4"
  },
  {
      "name": "BCP",
      "url": "https://itwiki.kr/w/BCP"
  },
  {
      "name": "BDD",
      "url": "https://itwiki.kr/w/BDD"
  },
  {
      "name": "BEMS",
      "url": "https://itwiki.kr/w/BEMS"
  },
  {
      "name": "BERT",
      "url": "https://itwiki.kr/w/BERT"
  },
  {
      "name": "BGP",
      "url": "https://itwiki.kr/w/BGP"
  },
  {
      "name": "BI",
      "url": "https://itwiki.kr/w/BI"
  },
  {
      "name": "BIA",
      "url": "https://itwiki.kr/w/BIA"
  },
  {
      "name": "BIP",
      "url": "https://itwiki.kr/w/BIP"
  },
  {
      "name": "BIT 연산",
      "url": "https://itwiki.kr/w/BIT_%EC%97%B0%EC%82%B0"
  },
  {
      "name": "BLP",
      "url": "https://itwiki.kr/w/BLP"
  },
  {
      "name": "BOM",
      "url": "https://itwiki.kr/w/BOM"
  },
  {
      "name": "BPM",
      "url": "https://itwiki.kr/w/BPM"
  },
  {
      "name": "BPMN",
      "url": "https://itwiki.kr/w/BPMN"
  },
  {
      "name": "BPR",
      "url": "https://itwiki.kr/w/BPR"
  },
  {
      "name": "BR",
      "url": "https://itwiki.kr/w/BR"
  },
  {
      "name": "BRE",
      "url": "https://itwiki.kr/w/BRE"
  },
  {
      "name": "BSC",
      "url": "https://itwiki.kr/w/BSC"
  },
  {
      "name": "BSD 라이선스",
      "url": "https://itwiki.kr/w/BSD_%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4"
  },
  {
      "name": "BS 15000",
      "url": "https://itwiki.kr/w/BS_15000"
  },
  {
      "name": "BS 25999",
      "url": "https://itwiki.kr/w/BS_25999"
  },
  {
      "name": "BYOD",
      "url": "https://itwiki.kr/w/BYOD"
  },
  {
      "name": "B 트리",
      "url": "https://itwiki.kr/w/B_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "BaaS",
      "url": "https://itwiki.kr/w/BaaS"
  },
  {
      "name": "Back orifice",
      "url": "https://itwiki.kr/w/Back_orifice"
  },
  {
      "name": "Bag of Words",
      "url": "https://itwiki.kr/w/Bag_of_Words"
  },
  {
      "name": "Balanced Scorecard",
      "url": "https://itwiki.kr/w/Balanced_Scorecard"
  },
  {
      "name": "Base64 인코딩",
      "url": "https://itwiki.kr/w/Base64_%EC%9D%B8%EC%BD%94%EB%94%A9"
  },
  {
      "name": "Blowfish",
      "url": "https://itwiki.kr/w/Blowfish"
  },
  {
      "name": "BoW",
      "url": "https://itwiki.kr/w/BoW"
  },
  {
      "name": "Box plot",
      "url": "https://itwiki.kr/w/Box_plot"
  },
  {
      "name": "Boxplot",
      "url": "https://itwiki.kr/w/Boxplot"
  },
  {
      "name": "Brute Force Attack",
      "url": "https://itwiki.kr/w/Brute_Force_Attack"
  },
  {
      "name": "Bruteforce",
      "url": "https://itwiki.kr/w/Bruteforce"
  },
  {
      "name": "B트리",
      "url": "https://itwiki.kr/w/B%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "C-ITS",
      "url": "https://itwiki.kr/w/C-ITS"
  },
  {
      "name": "C-V2X",
      "url": "https://itwiki.kr/w/C-V2X"
  },
  {
      "name": "CAP",
      "url": "https://itwiki.kr/w/CAP"
  },
  {
      "name": "CAPEX",
      "url": "https://itwiki.kr/w/CAPEX"
  },
  {
      "name": "CAP 이론",
      "url": "https://itwiki.kr/w/CAP_%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "CASE",
      "url": "https://itwiki.kr/w/CASE"
  },
  {
      "name": "CAS Wave",
      "url": "https://itwiki.kr/w/CAS_Wave"
  },
  {
      "name": "CBAM",
      "url": "https://itwiki.kr/w/CBAM"
  },
  {
      "name": "CBC 모드",
      "url": "https://itwiki.kr/w/CBC_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "CBD",
      "url": "https://itwiki.kr/w/CBD"
  },
  {
      "name": "CBDC",
      "url": "https://itwiki.kr/w/CBDC"
  },
  {
      "name": "CBD 방법론",
      "url": "https://itwiki.kr/w/CBD_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "CBEFF",
      "url": "https://itwiki.kr/w/CBEFF"
  },
  {
      "name": "CCM",
      "url": "https://itwiki.kr/w/CCM"
  },
  {
      "name": "CCMP",
      "url": "https://itwiki.kr/w/CCMP"
  },
  {
      "name": "CCPM",
      "url": "https://itwiki.kr/w/CCPM"
  },
  {
      "name": "CCRA",
      "url": "https://itwiki.kr/w/CCRA"
  },
  {
      "name": "CC 인증",
      "url": "https://itwiki.kr/w/CC_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "CC인증",
      "url": "https://itwiki.kr/w/CC%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "CDC",
      "url": "https://itwiki.kr/w/CDC"
  },
  {
      "name": "CDMA",
      "url": "https://itwiki.kr/w/CDMA"
  },
  {
      "name": "CDN",
      "url": "https://itwiki.kr/w/CDN"
  },
  {
      "name": "CDO",
      "url": "https://itwiki.kr/w/CDO"
  },
  {
      "name": "CDP 백업",
      "url": "https://itwiki.kr/w/CDP_%EB%B0%B1%EC%97%85"
  },
  {
      "name": "CDR",
      "url": "https://itwiki.kr/w/CDR"
  },
  {
      "name": "CDR(보안)",
      "url": "https://itwiki.kr/w/CDR(%EB%B3%B4%EC%95%88)"
  },
  {
      "name": "CDR(통신)",
      "url": "https://itwiki.kr/w/CDR(%ED%86%B5%EC%8B%A0)"
  },
  {
      "name": "CEP",
      "url": "https://itwiki.kr/w/CEP"
  },
  {
      "name": "CFB 모드",
      "url": "https://itwiki.kr/w/CFB_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "CI/CD",
      "url": "https://itwiki.kr/w/CI/CD"
  },
  {
      "name": "CIA",
      "url": "https://itwiki.kr/w/CIA"
  },
  {
      "name": "CIA 삼각형",
      "url": "https://itwiki.kr/w/CIA_%EC%82%BC%EA%B0%81%ED%98%95"
  },
  {
      "name": "CID",
      "url": "https://itwiki.kr/w/CID"
  },
  {
      "name": "CISO",
      "url": "https://itwiki.kr/w/CISO"
  },
  {
      "name": "CKAN",
      "url": "https://itwiki.kr/w/CKAN"
  },
  {
      "name": "CLASP",
      "url": "https://itwiki.kr/w/CLASP"
  },
  {
      "name": "CMDB",
      "url": "https://itwiki.kr/w/CMDB"
  },
  {
      "name": "CMIP",
      "url": "https://itwiki.kr/w/CMIP"
  },
  {
      "name": "CMM",
      "url": "https://itwiki.kr/w/CMM"
  },
  {
      "name": "CMMi",
      "url": "https://itwiki.kr/w/CMMi"
  },
  {
      "name": "CMMi v2.0",
      "url": "https://itwiki.kr/w/CMMi_v2.0"
  },
  {
      "name": "CNN",
      "url": "https://itwiki.kr/w/CNN"
  },
  {
      "name": "COBIT",
      "url": "https://itwiki.kr/w/COBIT"
  },
  {
      "name": "COBIT 2019",
      "url": "https://itwiki.kr/w/COBIT_2019"
  },
  {
      "name": "COBIT 5",
      "url": "https://itwiki.kr/w/COBIT_5"
  },
  {
      "name": "COCOMO",
      "url": "https://itwiki.kr/w/COCOMO"
  },
  {
      "name": "COCOMO II",
      "url": "https://itwiki.kr/w/COCOMO_II"
  },
  {
      "name": "COPS",
      "url": "https://itwiki.kr/w/COPS"
  },
  {
      "name": "COSO",
      "url": "https://itwiki.kr/w/COSO"
  },
  {
      "name": "CP949",
      "url": "https://itwiki.kr/w/CP949"
  },
  {
      "name": "CPM",
      "url": "https://itwiki.kr/w/CPM"
  },
  {
      "name": "CPND",
      "url": "https://itwiki.kr/w/CPND"
  },
  {
      "name": "CPPG",
      "url": "https://itwiki.kr/w/CPPG"
  },
  {
      "name": "CPRA",
      "url": "https://itwiki.kr/w/CPRA"
  },
  {
      "name": "CPS",
      "url": "https://itwiki.kr/w/CPS"
  },
  {
      "name": "CPU",
      "url": "https://itwiki.kr/w/CPU"
  },
  {
      "name": "CPU 병렬 처리",
      "url": "https://itwiki.kr/w/CPU_%EB%B3%91%EB%A0%AC_%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "CPU 상태",
      "url": "https://itwiki.kr/w/CPU_%EC%83%81%ED%83%9C"
  },
  {
      "name": "CPU 스케줄링",
      "url": "https://itwiki.kr/w/CPU_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "CPU 취약점",
      "url": "https://itwiki.kr/w/CPU_%EC%B7%A8%EC%95%BD%EC%A0%90"
  },
  {
      "name": "CRC",
      "url": "https://itwiki.kr/w/CRC"
  },
  {
      "name": "CRISP-DM",
      "url": "https://itwiki.kr/w/CRISP-DM"
  },
  {
      "name": "CRL",
      "url": "https://itwiki.kr/w/CRL"
  },
  {
      "name": "CRM",
      "url": "https://itwiki.kr/w/CRM"
  },
  {
      "name": "CSC",
      "url": "https://itwiki.kr/w/CSC"
  },
  {
      "name": "CSMA",
      "url": "https://itwiki.kr/w/CSMA"
  },
  {
      "name": "CSMA/CA",
      "url": "https://itwiki.kr/w/CSMA/CA"
  },
  {
      "name": "CSMA/CD",
      "url": "https://itwiki.kr/w/CSMA/CD"
  },
  {
      "name": "CSRF",
      "url": "https://itwiki.kr/w/CSRF"
  },
  {
      "name": "CSS 칼라",
      "url": "https://itwiki.kr/w/CSS_%EC%B9%BC%EB%9D%BC"
  },
  {
      "name": "CSV",
      "url": "https://itwiki.kr/w/CSV"
  },
  {
      "name": "CTQ",
      "url": "https://itwiki.kr/w/CTQ"
  },
  {
      "name": "CTR 모드",
      "url": "https://itwiki.kr/w/CTR_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "CUPS",
      "url": "https://itwiki.kr/w/CUPS"
  },
  {
      "name": "CVC",
      "url": "https://itwiki.kr/w/CVC"
  },
  {
      "name": "CVE",
      "url": "https://itwiki.kr/w/CVE"
  },
  {
      "name": "CVV",
      "url": "https://itwiki.kr/w/CVV"
  },
  {
      "name": "CWE",
      "url": "https://itwiki.kr/w/CWE"
  },
  {
      "name": "C 언어 stdlib.h",
      "url": "https://itwiki.kr/w/C_%EC%96%B8%EC%96%B4_stdlib.h"
  },
  {
      "name": "Certbot",
      "url": "https://itwiki.kr/w/Certbot"
  },
  {
      "name": "Chmod",
      "url": "https://itwiki.kr/w/Chmod"
  },
  {
      "name": "Chrome headless",
      "url": "https://itwiki.kr/w/Chrome_headless"
  },
  {
      "name": "Common Criteria",
      "url": "https://itwiki.kr/w/Common_Criteria"
  },
  {
      "name": "Contents Delivery Network",
      "url": "https://itwiki.kr/w/Contents_Delivery_Network"
  },
  {
      "name": "Credential stuffing",
      "url": "https://itwiki.kr/w/Credential_stuffing"
  },
  {
      "name": "Crontab",
      "url": "https://itwiki.kr/w/Crontab"
  },
  {
      "name": "Cyber Kill Chain",
      "url": "https://itwiki.kr/w/Cyber_Kill_Chain"
  },
  {
      "name": "DAC",
      "url": "https://itwiki.kr/w/DAC"
  },
  {
      "name": "DAP",
      "url": "https://itwiki.kr/w/DAP"
  },
  {
      "name": "DB",
      "url": "https://itwiki.kr/w/DB"
  },
  {
      "name": "DBMS",
      "url": "https://itwiki.kr/w/DBMS"
  },
  {
      "name": "DBR",
      "url": "https://itwiki.kr/w/DBR"
  },
  {
      "name": "DB보안",
      "url": "https://itwiki.kr/w/DB%EB%B3%B4%EC%95%88"
  },
  {
      "name": "DCAT",
      "url": "https://itwiki.kr/w/DCAT"
  },
  {
      "name": "DCE",
      "url": "https://itwiki.kr/w/DCE"
  },
  {
      "name": "DCL",
      "url": "https://itwiki.kr/w/DCL"
  },
  {
      "name": "DDE",
      "url": "https://itwiki.kr/w/DDE"
  },
  {
      "name": "DDL",
      "url": "https://itwiki.kr/w/DDL"
  },
  {
      "name": "DDoS",
      "url": "https://itwiki.kr/w/DDoS"
  },
  {
      "name": "DEP",
      "url": "https://itwiki.kr/w/DEP"
  },
  {
      "name": "DER",
      "url": "https://itwiki.kr/w/DER"
  },
  {
      "name": "DES",
      "url": "https://itwiki.kr/w/DES"
  },
  {
      "name": "DFD",
      "url": "https://itwiki.kr/w/DFD"
  },
  {
      "name": "DHCP",
      "url": "https://itwiki.kr/w/DHCP"
  },
  {
      "name": "DHCP Starvation 공격",
      "url": "https://itwiki.kr/w/DHCP_Starvation_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "DID",
      "url": "https://itwiki.kr/w/DID"
  },
  {
      "name": "DID 문서",
      "url": "https://itwiki.kr/w/DID_%EB%AC%B8%EC%84%9C"
  },
  {
      "name": "DIKW",
      "url": "https://itwiki.kr/w/DIKW"
  },
  {
      "name": "DIKW 피라미드",
      "url": "https://itwiki.kr/w/DIKW_%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%93%9C"
  },
  {
      "name": "DLT",
      "url": "https://itwiki.kr/w/DLT"
  },
  {
      "name": "DMA",
      "url": "https://itwiki.kr/w/DMA"
  },
  {
      "name": "DMB",
      "url": "https://itwiki.kr/w/DMB"
  },
  {
      "name": "DMBOK",
      "url": "https://itwiki.kr/w/DMBOK"
  },
  {
      "name": "DML",
      "url": "https://itwiki.kr/w/DML"
  },
  {
      "name": "DMM",
      "url": "https://itwiki.kr/w/DMM"
  },
  {
      "name": "DMZ",
      "url": "https://itwiki.kr/w/DMZ"
  },
  {
      "name": "DMZ 구간",
      "url": "https://itwiki.kr/w/DMZ_%EA%B5%AC%EA%B0%84"
  },
  {
      "name": "DNS",
      "url": "https://itwiki.kr/w/DNS"
  },
  {
      "name": "DNSSEC",
      "url": "https://itwiki.kr/w/DNSSEC"
  },
  {
      "name": "DNS Lookup",
      "url": "https://itwiki.kr/w/DNS_Lookup"
  },
  {
      "name": "DNS Zone Transfer",
      "url": "https://itwiki.kr/w/DNS_Zone_Transfer"
  },
  {
      "name": "DNS 레코드",
      "url": "https://itwiki.kr/w/DNS_%EB%A0%88%EC%BD%94%EB%93%9C"
  },
  {
      "name": "DNS 자원 레코드",
      "url": "https://itwiki.kr/w/DNS_%EC%9E%90%EC%9B%90_%EB%A0%88%EC%BD%94%EB%93%9C"
  },
  {
      "name": "DNS 증폭 공격",
      "url": "https://itwiki.kr/w/DNS_%EC%A6%9D%ED%8F%AD_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "DOCSIS",
      "url": "https://itwiki.kr/w/DOCSIS"
  },
  {
      "name": "DOI",
      "url": "https://itwiki.kr/w/DOI"
  },
  {
      "name": "DPI",
      "url": "https://itwiki.kr/w/DPI"
  },
  {
      "name": "DPO",
      "url": "https://itwiki.kr/w/DPO"
  },
  {
      "name": "DPoS",
      "url": "https://itwiki.kr/w/DPoS"
  },
  {
      "name": "DQI",
      "url": "https://itwiki.kr/w/DQI"
  },
  {
      "name": "DQM",
      "url": "https://itwiki.kr/w/DQM"
  },
  {
      "name": "DQM3",
      "url": "https://itwiki.kr/w/DQM3"
  },
  {
      "name": "DQN",
      "url": "https://itwiki.kr/w/DQN"
  },
  {
      "name": "DRDoS",
      "url": "https://itwiki.kr/w/DRDoS"
  },
  {
      "name": "DRM",
      "url": "https://itwiki.kr/w/DRM"
  },
  {
      "name": "DSA",
      "url": "https://itwiki.kr/w/DSA"
  },
  {
      "name": "DSDM",
      "url": "https://itwiki.kr/w/DSDM"
  },
  {
      "name": "DSRC",
      "url": "https://itwiki.kr/w/DSRC"
  },
  {
      "name": "DSS",
      "url": "https://itwiki.kr/w/DSS"
  },
  {
      "name": "DSU",
      "url": "https://itwiki.kr/w/DSU"
  },
  {
      "name": "DTE",
      "url": "https://itwiki.kr/w/DTE"
  },
  {
      "name": "DTO",
      "url": "https://itwiki.kr/w/DTO"
  },
  {
      "name": "DTS 452",
      "url": "https://itwiki.kr/w/DTS_452"
  },
  {
      "name": "DW",
      "url": "https://itwiki.kr/w/DW"
  },
  {
      "name": "Data Execution Prevention",
      "url": "https://itwiki.kr/w/Data_Execution_Prevention"
  },
  {
      "name": "Data Quality Management",
      "url": "https://itwiki.kr/w/Data_Quality_Management"
  },
  {
      "name": "Data Warehouse",
      "url": "https://itwiki.kr/w/Data_Warehouse"
  },
  {
      "name": "Deadlock",
      "url": "https://itwiki.kr/w/Deadlock"
  },
  {
      "name": "Denial of Service",
      "url": "https://itwiki.kr/w/Denial_of_Service"
  },
  {
      "name": "DevOps",
      "url": "https://itwiki.kr/w/DevOps"
  },
  {
      "name": "Diffie-Hellman",
      "url": "https://itwiki.kr/w/Diffie-Hellman"
  },
  {
      "name": "DoA",
      "url": "https://itwiki.kr/w/DoA"
  },
  {
      "name": "DoS",
      "url": "https://itwiki.kr/w/DoS"
  },
  {
      "name": "Drive-by Download",
      "url": "https://itwiki.kr/w/Drive-by_Download"
  },
  {
      "name": "DriveByDownload",
      "url": "https://itwiki.kr/w/DriveByDownload"
  },
  {
      "name": "DynamoDB",
      "url": "https://itwiki.kr/w/DynamoDB"
  },
  {
      "name": "Dynamo DB",
      "url": "https://itwiki.kr/w/Dynamo_DB"
  },
  {
      "name": "EA",
      "url": "https://itwiki.kr/w/EA"
  },
  {
      "name": "EAI",
      "url": "https://itwiki.kr/w/EAI"
  },
  {
      "name": "EAM",
      "url": "https://itwiki.kr/w/EAM"
  },
  {
      "name": "EAP",
      "url": "https://itwiki.kr/w/EAP"
  },
  {
      "name": "EBM",
      "url": "https://itwiki.kr/w/EBM"
  },
  {
      "name": "ECB 모드",
      "url": "https://itwiki.kr/w/ECB_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "ECC",
      "url": "https://itwiki.kr/w/ECC"
  },
  {
      "name": "ECash",
      "url": "https://itwiki.kr/w/ECash"
  },
  {
      "name": "EDF",
      "url": "https://itwiki.kr/w/EDF"
  },
  {
      "name": "EDF 스케줄링",
      "url": "https://itwiki.kr/w/EDF_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "EDM",
      "url": "https://itwiki.kr/w/EDM"
  },
  {
      "name": "EDPS",
      "url": "https://itwiki.kr/w/EDPS"
  },
  {
      "name": "EDR",
      "url": "https://itwiki.kr/w/EDR"
  },
  {
      "name": "EDW",
      "url": "https://itwiki.kr/w/EDW"
  },
  {
      "name": "EGovFrame",
      "url": "https://itwiki.kr/w/EGovFrame"
  },
  {
      "name": "EIGRP",
      "url": "https://itwiki.kr/w/EIGRP"
  },
  {
      "name": "EII",
      "url": "https://itwiki.kr/w/EII"
  },
  {
      "name": "EIP",
      "url": "https://itwiki.kr/w/EIP"
  },
  {
      "name": "EIS",
      "url": "https://itwiki.kr/w/EIS"
  },
  {
      "name": "EMR",
      "url": "https://itwiki.kr/w/EMR"
  },
  {
      "name": "EMV",
      "url": "https://itwiki.kr/w/EMV"
  },
  {
      "name": "ERD",
      "url": "https://itwiki.kr/w/ERD"
  },
  {
      "name": "ERP",
      "url": "https://itwiki.kr/w/ERP"
  },
  {
      "name": "ER 다이어그램",
      "url": "https://itwiki.kr/w/ER_%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "ESB",
      "url": "https://itwiki.kr/w/ESB"
  },
  {
      "name": "ESCM",
      "url": "https://itwiki.kr/w/ESCM"
  },
  {
      "name": "ESM",
      "url": "https://itwiki.kr/w/ESM"
  },
  {
      "name": "ETL",
      "url": "https://itwiki.kr/w/ETL"
  },
  {
      "name": "ETRI 2020년 AI 7대 트렌드",
      "url": "https://itwiki.kr/w/ETRI_2020%EB%85%84_AI_7%EB%8C%80_%ED%8A%B8%EB%A0%8C%EB%93%9C"
  },
  {
      "name": "ETT",
      "url": "https://itwiki.kr/w/ETT"
  },
  {
      "name": "EVA",
      "url": "https://itwiki.kr/w/EVA"
  },
  {
      "name": "EVM",
      "url": "https://itwiki.kr/w/EVM"
  },
  {
      "name": "EXT",
      "url": "https://itwiki.kr/w/EXT"
  },
  {
      "name": "EXT2",
      "url": "https://itwiki.kr/w/EXT2"
  },
  {
      "name": "EXT3",
      "url": "https://itwiki.kr/w/EXT3"
  },
  {
      "name": "EXT4",
      "url": "https://itwiki.kr/w/EXT4"
  },
  {
      "name": "ElGamal",
      "url": "https://itwiki.kr/w/ElGamal"
  },
  {
      "name": "Elliptic Curve Cryptosystem",
      "url": "https://itwiki.kr/w/Elliptic_Curve_Cryptosystem"
  },
  {
      "name": "Enterprise Application Integration",
      "url": "https://itwiki.kr/w/Enterprise_Application_Integration"
  },
  {
      "name": "Entity",
      "url": "https://itwiki.kr/w/Entity"
  },
  {
      "name": "Entity-Relationship Diagram",
      "url": "https://itwiki.kr/w/Entity-Relationship_Diagram"
  },
  {
      "name": "Evil Twin",
      "url": "https://itwiki.kr/w/Evil_Twin"
  },
  {
      "name": "F1 Score",
      "url": "https://itwiki.kr/w/F1_Score"
  },
  {
      "name": "F1 스코어",
      "url": "https://itwiki.kr/w/F1_%EC%8A%A4%EC%BD%94%EC%96%B4"
  },
  {
      "name": "FCAPS",
      "url": "https://itwiki.kr/w/FCAPS"
  },
  {
      "name": "FDD",
      "url": "https://itwiki.kr/w/FDD"
  },
  {
      "name": "FDS",
      "url": "https://itwiki.kr/w/FDS"
  },
  {
      "name": "FEP",
      "url": "https://itwiki.kr/w/FEP"
  },
  {
      "name": "FHIR",
      "url": "https://itwiki.kr/w/FHIR"
  },
  {
      "name": "FIDO",
      "url": "https://itwiki.kr/w/FIDO"
  },
  {
      "name": "FIDO2",
      "url": "https://itwiki.kr/w/FIDO2"
  },
  {
      "name": "FIDO UAF",
      "url": "https://itwiki.kr/w/FIDO_UAF"
  },
  {
      "name": "FIDO 인증",
      "url": "https://itwiki.kr/w/FIDO_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "FIPS 199",
      "url": "https://itwiki.kr/w/FIPS_199"
  },
  {
      "name": "FISS",
      "url": "https://itwiki.kr/w/FISS"
  },
  {
      "name": "FLOPS",
      "url": "https://itwiki.kr/w/FLOPS"
  },
  {
      "name": "FMEA",
      "url": "https://itwiki.kr/w/FMEA"
  },
  {
      "name": "FP",
      "url": "https://itwiki.kr/w/FP"
  },
  {
      "name": "FRAND",
      "url": "https://itwiki.kr/w/FRAND"
  },
  {
      "name": "FRUPS",
      "url": "https://itwiki.kr/w/FRUPS"
  },
  {
      "name": "FT",
      "url": "https://itwiki.kr/w/FT"
  },
  {
      "name": "FTA",
      "url": "https://itwiki.kr/w/FTA"
  },
  {
      "name": "FTP",
      "url": "https://itwiki.kr/w/FTP"
  },
  {
      "name": "FTP 명령어",
      "url": "https://itwiki.kr/w/FTP_%EB%AA%85%EB%A0%B9%EC%96%B4"
  },
  {
      "name": "FTP 바운스 공격",
      "url": "https://itwiki.kr/w/FTP_%EB%B0%94%EC%9A%B4%EC%8A%A4_%EA%B3%B5%EA%B2%A9"
  }
]
_itwiki = _itwiki.concat([
  {
      "name": "FaaS",
      "url": "https://itwiki.kr/w/FaaS"
  },
  {
      "name": "Fail2ban",
      "url": "https://itwiki.kr/w/Fail2ban"
  },
  {
      "name": "Fasttext",
      "url": "https://itwiki.kr/w/Fasttext"
  },
  {
      "name": "Feistel",
      "url": "https://itwiki.kr/w/Feistel"
  },
  {
      "name": "Feistel 구조",
      "url": "https://itwiki.kr/w/Feistel_%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "Finality Problem",
      "url": "https://itwiki.kr/w/Finality_Problem"
  },
  {
      "name": "Finality 문제",
      "url": "https://itwiki.kr/w/Finality_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "Fstab",
      "url": "https://itwiki.kr/w/Fstab"
  },
  {
      "name": "Function Point",
      "url": "https://itwiki.kr/w/Function_Point"
  },
  {
      "name": "Fuzzer",
      "url": "https://itwiki.kr/w/Fuzzer"
  },
  {
      "name": "Fuzzing",
      "url": "https://itwiki.kr/w/Fuzzing"
  },
  {
      "name": "Fuzzing Tool",
      "url": "https://itwiki.kr/w/Fuzzing_Tool"
  },
  {
      "name": "G20 AI 원칙",
      "url": "https://itwiki.kr/w/G20_AI_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "G20 인공지능 원칙",
      "url": "https://itwiki.kr/w/G20_%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "G20 정상회의 2019",
      "url": "https://itwiki.kr/w/G20_%EC%A0%95%EC%83%81%ED%9A%8C%EC%9D%98_2019"
  },
  {
      "name": "G8 오픈데이터 헌장",
      "url": "https://itwiki.kr/w/G8_%EC%98%A4%ED%94%88%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%97%8C%EC%9E%A5"
  },
  {
      "name": "GAN",
      "url": "https://itwiki.kr/w/GAN"
  },
  {
      "name": "GDPR",
      "url": "https://itwiki.kr/w/GDPR"
  },
  {
      "name": "GIGO",
      "url": "https://itwiki.kr/w/GIGO"
  },
  {
      "name": "GNOME",
      "url": "https://itwiki.kr/w/GNOME"
  },
  {
      "name": "GPT-1",
      "url": "https://itwiki.kr/w/GPT-1"
  },
  {
      "name": "GSI",
      "url": "https://itwiki.kr/w/GSI"
  },
  {
      "name": "GSM",
      "url": "https://itwiki.kr/w/GSM"
  },
  {
      "name": "GS 인증",
      "url": "https://itwiki.kr/w/GS_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "Global Single Instance",
      "url": "https://itwiki.kr/w/Global_Single_Instance"
  },
  {
      "name": "GoF 디자인 패턴",
      "url": "https://itwiki.kr/w/GoF_%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "Grub.conf",
      "url": "https://itwiki.kr/w/Grub.conf"
  },
  {
      "name": "HA",
      "url": "https://itwiki.kr/w/HA"
  },
  {
      "name": "HACMP",
      "url": "https://itwiki.kr/w/HACMP"
  },
  {
      "name": "HAZOP",
      "url": "https://itwiki.kr/w/HAZOP"
  },
  {
      "name": "HCI",
      "url": "https://itwiki.kr/w/HCI"
  },
  {
      "name": "HDFS",
      "url": "https://itwiki.kr/w/HDFS"
  },
  {
      "name": "HDLC",
      "url": "https://itwiki.kr/w/HDLC"
  },
  {
      "name": "HDMI",
      "url": "https://itwiki.kr/w/HDMI"
  },
  {
      "name": "HEaaN",
      "url": "https://itwiki.kr/w/HEaaN"
  },
  {
      "name": "HIDS",
      "url": "https://itwiki.kr/w/HIDS"
  },
  {
      "name": "HIGHT",
      "url": "https://itwiki.kr/w/HIGHT"
  },
  {
      "name": "HIPO",
      "url": "https://itwiki.kr/w/HIPO"
  },
  {
      "name": "HITL",
      "url": "https://itwiki.kr/w/HITL"
  },
  {
      "name": "HL7",
      "url": "https://itwiki.kr/w/HL7"
  },
  {
      "name": "HMAC",
      "url": "https://itwiki.kr/w/HMAC"
  },
  {
      "name": "HMM",
      "url": "https://itwiki.kr/w/HMM"
  },
  {
      "name": "HRN",
      "url": "https://itwiki.kr/w/HRN"
  },
  {
      "name": "HRRN",
      "url": "https://itwiki.kr/w/HRRN"
  },
  {
      "name": "HRRN 스케줄링",
      "url": "https://itwiki.kr/w/HRRN_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "HSM",
      "url": "https://itwiki.kr/w/HSM"
  },
  {
      "name": "HTML5",
      "url": "https://itwiki.kr/w/HTML5"
  },
  {
      "name": "HTML5 canvas context getImageData",
      "url": "https://itwiki.kr/w/HTML5_canvas_context_getImageData"
  },
  {
      "name": "HTTP",
      "url": "https://itwiki.kr/w/HTTP"
  },
  {
      "name": "HTTPS",
      "url": "https://itwiki.kr/w/HTTPS"
  },
  {
      "name": "HTTP 3",
      "url": "https://itwiki.kr/w/HTTP_3"
  },
  {
      "name": "HTTP 메서드",
      "url": "https://itwiki.kr/w/HTTP_%EB%A9%94%EC%84%9C%EB%93%9C"
  },
  {
      "name": "HTTP 메소드",
      "url": "https://itwiki.kr/w/HTTP_%EB%A9%94%EC%86%8C%EB%93%9C"
  },
  {
      "name": "HTTP 응답 분할",
      "url": "https://itwiki.kr/w/HTTP_%EC%9D%91%EB%8B%B5_%EB%B6%84%ED%95%A0"
  },
  {
      "name": "HTTP 코드",
      "url": "https://itwiki.kr/w/HTTP_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "HTTP 헤더 Pragma",
      "url": "https://itwiki.kr/w/HTTP_%ED%97%A4%EB%8D%94_Pragma"
  },
  {
      "name": "Hdlc",
      "url": "https://itwiki.kr/w/Hdlc"
  },
  {
      "name": "Heart Bleed",
      "url": "https://itwiki.kr/w/Heart_Bleed"
  },
  {
      "name": "Heartbleed",
      "url": "https://itwiki.kr/w/Heartbleed"
  },
  {
      "name": "Hidden Markov Model",
      "url": "https://itwiki.kr/w/Hidden_Markov_Model"
  },
  {
      "name": "Host based IDS",
      "url": "https://itwiki.kr/w/Host_based_IDS"
  },
  {
      "name": "Hping",
      "url": "https://itwiki.kr/w/Hping"
  },
  {
      "name": "Httpd.conf",
      "url": "https://itwiki.kr/w/Httpd.conf"
  },
  {
      "name": "Human In The Loop",
      "url": "https://itwiki.kr/w/Human_In_The_Loop"
  },
  {
      "name": "I-node",
      "url": "https://itwiki.kr/w/I-node"
  },
  {
      "name": "I/O 장치",
      "url": "https://itwiki.kr/w/I/O_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "IAM",
      "url": "https://itwiki.kr/w/IAM"
  },
  {
      "name": "ICANN",
      "url": "https://itwiki.kr/w/ICANN"
  },
  {
      "name": "ICMP",
      "url": "https://itwiki.kr/w/ICMP"
  },
  {
      "name": "ICMP 메시지",
      "url": "https://itwiki.kr/w/ICMP_%EB%A9%94%EC%8B%9C%EC%A7%80"
  },
  {
      "name": "ICT 멘토링 프로젝트",
      "url": "https://itwiki.kr/w/ICT_%EB%A9%98%ED%86%A0%EB%A7%81_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
  },
  {
      "name": "IC 칩",
      "url": "https://itwiki.kr/w/IC_%EC%B9%A9"
  },
  {
      "name": "IDE",
      "url": "https://itwiki.kr/w/IDE"
  },
  {
      "name": "IDEA",
      "url": "https://itwiki.kr/w/IDEA"
  },
  {
      "name": "IDS",
      "url": "https://itwiki.kr/w/IDS"
  },
  {
      "name": "IEC",
      "url": "https://itwiki.kr/w/IEC"
  },
  {
      "name": "IEC 61508",
      "url": "https://itwiki.kr/w/IEC_61508"
  },
  {
      "name": "IEC 62443",
      "url": "https://itwiki.kr/w/IEC_62443"
  },
  {
      "name": "IEEE",
      "url": "https://itwiki.kr/w/IEEE"
  },
  {
      "name": "IEEE802.11",
      "url": "https://itwiki.kr/w/IEEE802.11"
  },
  {
      "name": "IEEE 1012",
      "url": "https://itwiki.kr/w/IEEE_1012"
  },
  {
      "name": "IEEE 1059",
      "url": "https://itwiki.kr/w/IEEE_1059"
  },
  {
      "name": "IEEE 802",
      "url": "https://itwiki.kr/w/IEEE_802"
  },
  {
      "name": "IEEE 802.11",
      "url": "https://itwiki.kr/w/IEEE_802.11"
  },
  {
      "name": "IEEE 802.11ax",
      "url": "https://itwiki.kr/w/IEEE_802.11ax"
  },
  {
      "name": "IEEE 802.11i",
      "url": "https://itwiki.kr/w/IEEE_802.11i"
  },
  {
      "name": "IEEE 802.15",
      "url": "https://itwiki.kr/w/IEEE_802.15"
  },
  {
      "name": "IEEE 830",
      "url": "https://itwiki.kr/w/IEEE_830"
  },
  {
      "name": "IETF",
      "url": "https://itwiki.kr/w/IETF"
  },
  {
      "name": "IFNULL",
      "url": "https://itwiki.kr/w/IFNULL"
  },
  {
      "name": "IGMP",
      "url": "https://itwiki.kr/w/IGMP"
  },
  {
      "name": "IGP",
      "url": "https://itwiki.kr/w/IGP"
  },
  {
      "name": "IGRP",
      "url": "https://itwiki.kr/w/IGRP"
  },
  {
      "name": "IKE",
      "url": "https://itwiki.kr/w/IKE"
  },
  {
      "name": "ILM",
      "url": "https://itwiki.kr/w/ILM"
  },
  {
      "name": "IPC",
      "url": "https://itwiki.kr/w/IPC"
  },
  {
      "name": "IPS",
      "url": "https://itwiki.kr/w/IPS"
  },
  {
      "name": "IPSec",
      "url": "https://itwiki.kr/w/IPSec"
  },
  {
      "name": "IPTV",
      "url": "https://itwiki.kr/w/IPTV"
  },
  {
      "name": "IP Spoofing",
      "url": "https://itwiki.kr/w/IP_Spoofing"
  },
  {
      "name": "IP 단편화",
      "url": "https://itwiki.kr/w/IP_%EB%8B%A8%ED%8E%B8%ED%99%94"
  },
  {
      "name": "IP 데이터그램",
      "url": "https://itwiki.kr/w/IP_%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "IP 스푸핑",
      "url": "https://itwiki.kr/w/IP_%EC%8A%A4%ED%91%B8%ED%95%91"
  },
  {
      "name": "IP 패킷",
      "url": "https://itwiki.kr/w/IP_%ED%8C%A8%ED%82%B7"
  },
  {
      "name": "IPv6",
      "url": "https://itwiki.kr/w/IPv6"
  },
  {
      "name": "IPv6 헤더",
      "url": "https://itwiki.kr/w/IPv6_%ED%97%A4%EB%8D%94"
  },
  {
      "name": "IS0/IEC 15504",
      "url": "https://itwiki.kr/w/IS0/IEC_15504"
  },
  {
      "name": "ISAC",
      "url": "https://itwiki.kr/w/ISAC"
  },
  {
      "name": "ISACA",
      "url": "https://itwiki.kr/w/ISACA"
  },
  {
      "name": "ISDN",
      "url": "https://itwiki.kr/w/ISDN"
  },
  {
      "name": "ISMP",
      "url": "https://itwiki.kr/w/ISMP"
  },
  {
      "name": "ISMS",
      "url": "https://itwiki.kr/w/ISMS"
  },
  {
      "name": "ISMS-P",
      "url": "https://itwiki.kr/w/ISMS-P"
  },
  {
      "name": "ISNULL",
      "url": "https://itwiki.kr/w/ISNULL"
  },
  {
      "name": "ISO",
      "url": "https://itwiki.kr/w/ISO"
  },
  {
      "name": "ISO/IEC/IEEE 12207",
      "url": "https://itwiki.kr/w/ISO/IEC/IEEE_12207"
  },
  {
      "name": "ISO/IEC/IEEE 29119",
      "url": "https://itwiki.kr/w/ISO/IEC/IEEE_29119"
  },
  {
      "name": "ISO/IEC/IEEE 29148",
      "url": "https://itwiki.kr/w/ISO/IEC/IEEE_29148"
  },
  {
      "name": "ISO/IEC/IEEE 42010",
      "url": "https://itwiki.kr/w/ISO/IEC/IEEE_42010"
  },
  {
      "name": "ISO/IEC 12119",
      "url": "https://itwiki.kr/w/ISO/IEC_12119"
  },
  {
      "name": "ISO/IEC 12207",
      "url": "https://itwiki.kr/w/ISO/IEC_12207"
  },
  {
      "name": "ISO/IEC 14143",
      "url": "https://itwiki.kr/w/ISO/IEC_14143"
  },
  {
      "name": "ISO/IEC 14598",
      "url": "https://itwiki.kr/w/ISO/IEC_14598"
  },
  {
      "name": "ISO/IEC 15504",
      "url": "https://itwiki.kr/w/ISO/IEC_15504"
  },
  {
      "name": "ISO/IEC 18033",
      "url": "https://itwiki.kr/w/ISO/IEC_18033"
  },
  {
      "name": "ISO/IEC 19501",
      "url": "https://itwiki.kr/w/ISO/IEC_19501"
  },
  {
      "name": "ISO/IEC 20000",
      "url": "https://itwiki.kr/w/ISO/IEC_20000"
  },
  {
      "name": "ISO/IEC 20889",
      "url": "https://itwiki.kr/w/ISO/IEC_20889"
  },
  {
      "name": "ISO/IEC 25000",
      "url": "https://itwiki.kr/w/ISO/IEC_25000"
  },
  {
      "name": "ISO/IEC 27000",
      "url": "https://itwiki.kr/w/ISO/IEC_27000"
  },
  {
      "name": "ISO/IEC 27000 시리즈",
      "url": "https://itwiki.kr/w/ISO/IEC_27000_%EC%8B%9C%EB%A6%AC%EC%A6%88"
  },
  {
      "name": "ISO/IEC 27001",
      "url": "https://itwiki.kr/w/ISO/IEC_27001"
  },
  {
      "name": "ISO/IEC 27014",
      "url": "https://itwiki.kr/w/ISO/IEC_27014"
  },
  {
      "name": "ISO/IEC 27017",
      "url": "https://itwiki.kr/w/ISO/IEC_27017"
  },
  {
      "name": "ISO/IEC 27018",
      "url": "https://itwiki.kr/w/ISO/IEC_27018"
  },
  {
      "name": "ISO/IEC 27100",
      "url": "https://itwiki.kr/w/ISO/IEC_27100"
  },
  {
      "name": "ISO/IEC 29100",
      "url": "https://itwiki.kr/w/ISO/IEC_29100"
  },
  {
      "name": "ISO/IEC 29119",
      "url": "https://itwiki.kr/w/ISO/IEC_29119"
  },
  {
      "name": "ISO/IEC 29134",
      "url": "https://itwiki.kr/w/ISO/IEC_29134"
  },
  {
      "name": "ISO/IEC 33063",
      "url": "https://itwiki.kr/w/ISO/IEC_33063"
  },
  {
      "name": "ISO/IEC 38500",
      "url": "https://itwiki.kr/w/ISO/IEC_38500"
  },
  {
      "name": "ISO/IEC 42010",
      "url": "https://itwiki.kr/w/ISO/IEC_42010"
  },
  {
      "name": "ISO/IEC 9126",
      "url": "https://itwiki.kr/w/ISO/IEC_9126"
  },
  {
      "name": "ISO/IEC 9979",
      "url": "https://itwiki.kr/w/ISO/IEC_9979"
  },
  {
      "name": "ISO/IEC GUIDE 51",
      "url": "https://itwiki.kr/w/ISO/IEC_GUIDE_51"
  },
  {
      "name": "ISO/IEC JTC1",
      "url": "https://itwiki.kr/w/ISO/IEC_JTC1"
  },
  {
      "name": "ISO/IEC JTC1/SC27 WG2",
      "url": "https://itwiki.kr/w/ISO/IEC_JTC1/SC27_WG2"
  },
  {
      "name": "ISO/IEC JTC1/SC37",
      "url": "https://itwiki.kr/w/ISO/IEC_JTC1/SC37"
  },
  {
      "name": "ISO/TS 15066",
      "url": "https://itwiki.kr/w/ISO/TS_15066"
  },
  {
      "name": "ISO 14598",
      "url": "https://itwiki.kr/w/ISO_14598"
  },
  {
      "name": "ISO 14971",
      "url": "https://itwiki.kr/w/ISO_14971"
  },
  {
      "name": "ISO 20022",
      "url": "https://itwiki.kr/w/ISO_20022"
  },
  {
      "name": "ISO 21500",
      "url": "https://itwiki.kr/w/ISO_21500"
  },
  {
      "name": "ISO 22301",
      "url": "https://itwiki.kr/w/ISO_22301"
  },
  {
      "name": "ISO 26262",
      "url": "https://itwiki.kr/w/ISO_26262"
  },
  {
      "name": "ISO 29119",
      "url": "https://itwiki.kr/w/ISO_29119"
  },
  {
      "name": "ISO 31000",
      "url": "https://itwiki.kr/w/ISO_31000"
  },
  {
      "name": "ISO 38500",
      "url": "https://itwiki.kr/w/ISO_38500"
  },
  {
      "name": "ISO 42010",
      "url": "https://itwiki.kr/w/ISO_42010"
  },
  {
      "name": "ISO 8000",
      "url": "https://itwiki.kr/w/ISO_8000"
  },
  {
      "name": "ISO 8000-1",
      "url": "https://itwiki.kr/w/ISO_8000-1"
  },
  {
      "name": "ISO 8000-150",
      "url": "https://itwiki.kr/w/ISO_8000-150"
  },
  {
      "name": "ISO 9126",
      "url": "https://itwiki.kr/w/ISO_9126"
  },
  {
      "name": "ISP",
      "url": "https://itwiki.kr/w/ISP"
  },
  {
      "name": "ITA",
      "url": "https://itwiki.kr/w/ITA"
  },
  {
      "name": "ITA/EA",
      "url": "https://itwiki.kr/w/ITA/EA"
  },
  {
      "name": "ITIL",
      "url": "https://itwiki.kr/w/ITIL"
  },
  {
      "name": "ITIL4",
      "url": "https://itwiki.kr/w/ITIL4"
  },
  {
      "name": "ITIL 4",
      "url": "https://itwiki.kr/w/ITIL_4"
  },
  {
      "name": "ITIL CMDB",
      "url": "https://itwiki.kr/w/ITIL_CMDB"
  },
  {
      "name": "ITIL CMS",
      "url": "https://itwiki.kr/w/ITIL_CMS"
  },
  {
      "name": "ITIL SKMS",
      "url": "https://itwiki.kr/w/ITIL_SKMS"
  },
  {
      "name": "ITIL v3",
      "url": "https://itwiki.kr/w/ITIL_v3"
  },
  {
      "name": "ITO",
      "url": "https://itwiki.kr/w/ITO"
  },
  {
      "name": "ITSEC",
      "url": "https://itwiki.kr/w/ITSEC"
  },
  {
      "name": "ITSM",
      "url": "https://itwiki.kr/w/ITSM"
  },
  {
      "name": "ITU",
      "url": "https://itwiki.kr/w/ITU"
  },
  {
      "name": "ITU-T",
      "url": "https://itwiki.kr/w/ITU-T"
  },
  {
      "name": "IT BSC",
      "url": "https://itwiki.kr/w/IT_BSC"
  },
  {
      "name": "IT 거버넌스",
      "url": "https://itwiki.kr/w/IT_%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "IT 생산성 패러독스",
      "url": "https://itwiki.kr/w/IT_%EC%83%9D%EC%82%B0%EC%84%B1_%ED%8C%A8%EB%9F%AC%EB%8F%85%EC%8A%A4"
  },
  {
      "name": "IT 성과 평가",
      "url": "https://itwiki.kr/w/IT_%EC%84%B1%EA%B3%BC_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "IT 아웃소싱",
      "url": "https://itwiki.kr/w/IT_%EC%95%84%EC%9B%83%EC%86%8C%EC%8B%B1"
  },
  {
      "name": "Identifier",
      "url": "https://itwiki.kr/w/Identifier"
  },
  {
      "name": "ImageMagick",
      "url": "https://itwiki.kr/w/ImageMagick"
  },
  {
      "name": "Information Sharing &amp; Analysis Center",
      "url": "https://itwiki.kr/w/Information_Sharing_%26_Analysis_Center"
  },
  {
      "name": "Inode",
      "url": "https://itwiki.kr/w/Inode"
  },
  {
      "name": "IoT",
      "url": "https://itwiki.kr/w/IoT"
  },
  {
      "name": "Ipconfig",
      "url": "https://itwiki.kr/w/Ipconfig"
  },
  {
      "name": "Iptable",
      "url": "https://itwiki.kr/w/Iptable"
  },
  {
      "name": "Iptables",
      "url": "https://itwiki.kr/w/Iptables"
  },
  {
      "name": "Ipv6",
      "url": "https://itwiki.kr/w/Ipv6"
  },
  {
      "name": "ItSMF",
      "url": "https://itwiki.kr/w/ItSMF"
  },
  {
      "name": "Itil",
      "url": "https://itwiki.kr/w/Itil"
  },
  {
      "name": "JSON",
      "url": "https://itwiki.kr/w/JSON"
  },
  {
      "name": "JSON-LD",
      "url": "https://itwiki.kr/w/JSON-LD"
  },
  {
      "name": "JWT",
      "url": "https://itwiki.kr/w/JWT"
  },
  {
      "name": "K-NN",
      "url": "https://itwiki.kr/w/K-NN"
  },
  {
      "name": "K-mean",
      "url": "https://itwiki.kr/w/K-mean"
  },
  {
      "name": "K-익명성",
      "url": "https://itwiki.kr/w/K-%EC%9D%B5%EB%AA%85%EC%84%B1"
  },
  {
      "name": "K-최근접 이웃",
      "url": "https://itwiki.kr/w/K-%EC%B5%9C%EA%B7%BC%EC%A0%91_%EC%9D%B4%EC%9B%83"
  },
  {
      "name": "K-평균 군집화",
      "url": "https://itwiki.kr/w/K-%ED%8F%89%EA%B7%A0_%EA%B5%B0%EC%A7%91%ED%99%94"
  },
  {
      "name": "KANBAN",
      "url": "https://itwiki.kr/w/KANBAN"
  },
  {
      "name": "KCDSA",
      "url": "https://itwiki.kr/w/KCDSA"
  },
  {
      "name": "KDC",
      "url": "https://itwiki.kr/w/KDC"
  },
  {
      "name": "KMS",
      "url": "https://itwiki.kr/w/KMS"
  },
  {
      "name": "KNIME",
      "url": "https://itwiki.kr/w/KNIME"
  },
  {
      "name": "KNN",
      "url": "https://itwiki.kr/w/KNN"
  },
  {
      "name": "KPI",
      "url": "https://itwiki.kr/w/KPI"
  },
  {
      "name": "KVM",
      "url": "https://itwiki.kr/w/KVM"
  },
  {
      "name": "KYC",
      "url": "https://itwiki.kr/w/KYC"
  },
  {
      "name": "Kerberos",
      "url": "https://itwiki.kr/w/Kerberos"
  },
  {
      "name": "Kernel",
      "url": "https://itwiki.kr/w/Kernel"
  },
  {
      "name": "Knapsack",
      "url": "https://itwiki.kr/w/Knapsack"
  },
  {
      "name": "KorBERT",
      "url": "https://itwiki.kr/w/KorBERT"
  },
  {
      "name": "K익명성",
      "url": "https://itwiki.kr/w/K%EC%9D%B5%EB%AA%85%EC%84%B1"
  },
  {
      "name": "L-다양성",
      "url": "https://itwiki.kr/w/L-%EB%8B%A4%EC%96%91%EC%84%B1"
  },
  {
      "name": "L2TP",
      "url": "https://itwiki.kr/w/L2TP"
  },
  {
      "name": "L2TP VPN",
      "url": "https://itwiki.kr/w/L2TP_VPN"
  },
  {
      "name": "L2 스위치",
      "url": "https://itwiki.kr/w/L2_%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "L3 스위치",
      "url": "https://itwiki.kr/w/L3_%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "L4 스위치",
      "url": "https://itwiki.kr/w/L4_%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "L4스위치",
      "url": "https://itwiki.kr/w/L4%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "L7 스위치",
      "url": "https://itwiki.kr/w/L7_%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "L7스위치",
      "url": "https://itwiki.kr/w/L7%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "LAN",
      "url": "https://itwiki.kr/w/LAN"
  },
  {
      "name": "LAP",
      "url": "https://itwiki.kr/w/LAP"
  },
  {
      "name": "LAP-B",
      "url": "https://itwiki.kr/w/LAP-B"
  },
  {
      "name": "LAPB",
      "url": "https://itwiki.kr/w/LAPB"
  },
  {
      "name": "LDAP",
      "url": "https://itwiki.kr/w/LDAP"
  },
  {
      "name": "LDW",
      "url": "https://itwiki.kr/w/LDW"
  },
  {
      "name": "LEA",
      "url": "https://itwiki.kr/w/LEA"
  },
  {
      "name": "LLC",
      "url": "https://itwiki.kr/w/LLC"
  },
  {
      "name": "LOC",
      "url": "https://itwiki.kr/w/LOC"
  },
  {
      "name": "LOD",
      "url": "https://itwiki.kr/w/LOD"
  },
  {
      "name": "LPWAN",
      "url": "https://itwiki.kr/w/LPWAN"
  },
  {
      "name": "LSTM",
      "url": "https://itwiki.kr/w/LSTM"
  },
  {
      "name": "LXC",
      "url": "https://itwiki.kr/w/LXC"
  },
  {
      "name": "Land Attack",
      "url": "https://itwiki.kr/w/Land_Attack"
  },
  {
      "name": "Let's Encrypt",
      "url": "https://itwiki.kr/w/Let%27s_Encrypt"
  },
  {
      "name": "Let’s Encrypt",
      "url": "https://itwiki.kr/w/Let%E2%80%99s_Encrypt"
  },
  {
      "name": "LiFi",
      "url": "https://itwiki.kr/w/LiFi"
  },
  {
      "name": "Linked List",
      "url": "https://itwiki.kr/w/Linked_List"
  },
  {
      "name": "Loader",
      "url": "https://itwiki.kr/w/Loader"
  },
  {
      "name": "Log4j",
      "url": "https://itwiki.kr/w/Log4j"
  },
  {
      "name": "Log4shell",
      "url": "https://itwiki.kr/w/Log4shell"
  },
  {
      "name": "MAC",
      "url": "https://itwiki.kr/w/MAC"
  },
  {
      "name": "MAC Flooding",
      "url": "https://itwiki.kr/w/MAC_Flooding"
  },
  {
      "name": "MAC Time",
      "url": "https://itwiki.kr/w/MAC_Time"
  },
  {
      "name": "MAC 주소",
      "url": "https://itwiki.kr/w/MAC_%EC%A3%BC%EC%86%8C"
  },
  {
      "name": "MAC 플러딩",
      "url": "https://itwiki.kr/w/MAC_%ED%94%8C%EB%9F%AC%EB%94%A9"
  },
  {
      "name": "MBCO",
      "url": "https://itwiki.kr/w/MBCO"
  },
  {
      "name": "MBO",
      "url": "https://itwiki.kr/w/MBO"
  },
  {
      "name": "MC/DC",
      "url": "https://itwiki.kr/w/MC/DC"
  },
  {
      "name": "MCA",
      "url": "https://itwiki.kr/w/MCA"
  },
  {
      "name": "MCI",
      "url": "https://itwiki.kr/w/MCI"
  },
  {
      "name": "MCI/MCA",
      "url": "https://itwiki.kr/w/MCI/MCA"
  },
  {
      "name": "MD5",
      "url": "https://itwiki.kr/w/MD5"
  },
  {
      "name": "MDA",
      "url": "https://itwiki.kr/w/MDA"
  },
  {
      "name": "MDD",
      "url": "https://itwiki.kr/w/MDD"
  },
  {
      "name": "MDP",
      "url": "https://itwiki.kr/w/MDP"
  },
  {
      "name": "MECE",
      "url": "https://itwiki.kr/w/MECE"
  },
  {
      "name": "MES",
      "url": "https://itwiki.kr/w/MES"
  },
  {
      "name": "MFLOPS",
      "url": "https://itwiki.kr/w/MFLOPS"
  },
  {
      "name": "MIS",
      "url": "https://itwiki.kr/w/MIS"
  },
  {
      "name": "MMDB",
      "url": "https://itwiki.kr/w/MMDB"
  },
  {
      "name": "MPLS",
      "url": "https://itwiki.kr/w/MPLS"
  },
  {
      "name": "MPLS VPN",
      "url": "https://itwiki.kr/w/MPLS_VPN"
  },
  {
      "name": "MPS",
      "url": "https://itwiki.kr/w/MPS"
  },
  {
      "name": "MS-SDL",
      "url": "https://itwiki.kr/w/MS-SDL"
  },
  {
      "name": "MSA",
      "url": "https://itwiki.kr/w/MSA"
  },
  {
      "name": "MSP",
      "url": "https://itwiki.kr/w/MSP"
  },
  {
      "name": "MS‐SDL",
      "url": "https://itwiki.kr/w/MS%E2%80%90SDL"
  },
  {
      "name": "MTA",
      "url": "https://itwiki.kr/w/MTA"
  },
  {
      "name": "MTPD",
      "url": "https://itwiki.kr/w/MTPD"
  },
  {
      "name": "MTU",
      "url": "https://itwiki.kr/w/MTU"
  },
  {
      "name": "MVCC",
      "url": "https://itwiki.kr/w/MVCC"
  },
  {
      "name": "MVC 패턴",
      "url": "https://itwiki.kr/w/MVC_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "MaaS",
      "url": "https://itwiki.kr/w/MaaS"
  },
  {
      "name": "MariaDB",
      "url": "https://itwiki.kr/w/MariaDB"
  },
  {
      "name": "Markov Decision Process",
      "url": "https://itwiki.kr/w/Markov_Decision_Process"
  },
  {
      "name": "Massive MIMO",
      "url": "https://itwiki.kr/w/Massive_MIMO"
  },
  {
      "name": "Matplotlib",
      "url": "https://itwiki.kr/w/Matplotlib"
  },
  {
      "name": "Mesinfos",
      "url": "https://itwiki.kr/w/Mesinfos"
  },
  {
      "name": "ModSecurity",
      "url": "https://itwiki.kr/w/ModSecurity"
  },
  {
      "name": "Model Driven Architecture",
      "url": "https://itwiki.kr/w/Model_Driven_Architecture"
  },
  {
      "name": "Model Driven Development",
      "url": "https://itwiki.kr/w/Model_Driven_Development"
  },
  {
      "name": "MySQL 스케줄러",
      "url": "https://itwiki.kr/w/MySQL_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%9F%AC"
  },
  {
      "name": "MySQL 이벤트",
      "url": "https://itwiki.kr/w/MySQL_%EC%9D%B4%EB%B2%A4%ED%8A%B8"
  },
  {
      "name": "N-Gram",
      "url": "https://itwiki.kr/w/N-Gram"
  },
  {
      "name": "N-Queen 문제 소스코드",
      "url": "https://itwiki.kr/w/N-Queen_%EB%AC%B8%EC%A0%9C_%EC%86%8C%EC%8A%A4%EC%BD%94%EB%93%9C"
  },
  {
      "name": "N-gram",
      "url": "https://itwiki.kr/w/N-gram"
  },
  {
      "name": "N/A",
      "url": "https://itwiki.kr/w/N/A"
  },
  {
      "name": "NA",
      "url": "https://itwiki.kr/w/NA"
  },
  {
      "name": "NAC",
      "url": "https://itwiki.kr/w/NAC"
  },
  {
      "name": "NAT",
      "url": "https://itwiki.kr/w/NAT"
  },
  {
      "name": "NFC",
      "url": "https://itwiki.kr/w/NFC"
  },
  {
      "name": "NFT",
      "url": "https://itwiki.kr/w/NFT"
  },
  {
      "name": "NFV",
      "url": "https://itwiki.kr/w/NFV"
  },
  {
      "name": "NIDS",
      "url": "https://itwiki.kr/w/NIDS"
  },
  {
      "name": "NIST",
      "url": "https://itwiki.kr/w/NIST"
  },
  {
      "name": "NIST 800-82",
      "url": "https://itwiki.kr/w/NIST_800-82"
  },
  {
      "name": "NLP",
      "url": "https://itwiki.kr/w/NLP"
  },
  {
      "name": "NMS",
      "url": "https://itwiki.kr/w/NMS"
  },
  {
      "name": "NPV",
      "url": "https://itwiki.kr/w/NPV"
  },
  {
      "name": "NSTB",
      "url": "https://itwiki.kr/w/NSTB"
  },
  {
      "name": "NTFS",
      "url": "https://itwiki.kr/w/NTFS"
  },
  {
      "name": "NTP 증폭 공격",
      "url": "https://itwiki.kr/w/NTP_%EC%A6%9D%ED%8F%AD_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "NULLIF",
      "url": "https://itwiki.kr/w/NULLIF"
  },
  {
      "name": "NVL",
      "url": "https://itwiki.kr/w/NVL"
  },
  {
      "name": "NaN",
      "url": "https://itwiki.kr/w/NaN"
  },
  {
      "name": "Natural Language Processing",
      "url": "https://itwiki.kr/w/Natural_Language_Processing"
  },
  {
      "name": "Nessus",
      "url": "https://itwiki.kr/w/Nessus"
  },
  {
      "name": "Netcat",
      "url": "https://itwiki.kr/w/Netcat"
  },
  {
      "name": "Netstat",
      "url": "https://itwiki.kr/w/Netstat"
  },
  {
      "name": "Network based IDS",
      "url": "https://itwiki.kr/w/Network_based_IDS"
  },
  {
      "name": "Ngram",
      "url": "https://itwiki.kr/w/Ngram"
  },
  {
      "name": "Nmap",
      "url": "https://itwiki.kr/w/Nmap"
  },
  {
      "name": "NoSQL",
      "url": "https://itwiki.kr/w/NoSQL"
  },
  {
      "name": "No SQL",
      "url": "https://itwiki.kr/w/No_SQL"
  },
  {
      "name": "Node.js",
      "url": "https://itwiki.kr/w/Node.js"
  },
  {
      "name": "Node.js NPM",
      "url": "https://itwiki.kr/w/Node.js_NPM"
  },
  {
      "name": "Nonce",
      "url": "https://itwiki.kr/w/Nonce"
  },
  {
      "name": "Nothing at Stake",
      "url": "https://itwiki.kr/w/Nothing_at_Stake"
  },
  {
      "name": "Npm",
      "url": "https://itwiki.kr/w/Npm"
  },
  {
      "name": "Ntp.conf",
      "url": "https://itwiki.kr/w/Ntp.conf"
  },
  {
      "name": "OAuth",
      "url": "https://itwiki.kr/w/OAuth"
  },
  {
      "name": "OCSP",
      "url": "https://itwiki.kr/w/OCSP"
  },
  {
      "name": "ODS",
      "url": "https://itwiki.kr/w/ODS"
  },
  {
      "name": "OECD 개인정보 보호 8원칙",
      "url": "https://itwiki.kr/w/OECD_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8_8%EC%9B%90%EC%B9%99"
  },
  {
      "name": "OFB 모드",
      "url": "https://itwiki.kr/w/OFB_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "OKR",
      "url": "https://itwiki.kr/w/OKR"
  },
  {
      "name": "OLAP",
      "url": "https://itwiki.kr/w/OLAP"
  },
  {
      "name": "OLE",
      "url": "https://itwiki.kr/w/OLE"
  },
  {
      "name": "OPE",
      "url": "https://itwiki.kr/w/OPE"
  },
  {
      "name": "OPEX",
      "url": "https://itwiki.kr/w/OPEX"
  },
  {
      "name": "OSI",
      "url": "https://itwiki.kr/w/OSI"
  },
  {
      "name": "OSI 7계층",
      "url": "https://itwiki.kr/w/OSI_7%EA%B3%84%EC%B8%B5"
  },
  {
      "name": "OSI Model",
      "url": "https://itwiki.kr/w/OSI_Model"
  },
  {
      "name": "OSI 모델",
      "url": "https://itwiki.kr/w/OSI_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "OSI참조 모델",
      "url": "https://itwiki.kr/w/OSI%EC%B0%B8%EC%A1%B0_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "OSPF",
      "url": "https://itwiki.kr/w/OSPF"
  },
  {
      "name": "OSS 거버넌스",
      "url": "https://itwiki.kr/w/OSS_%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "OTP",
      "url": "https://itwiki.kr/w/OTP"
  },
  {
      "name": "OTT",
      "url": "https://itwiki.kr/w/OTT"
  }
])
_itwiki = _itwiki.concat([
  {
      "name": "OTT 서비스",
      "url": "https://itwiki.kr/w/OTT_%EC%84%9C%EB%B9%84%EC%8A%A4"
  },
  {
      "name": "OWASP",
      "url": "https://itwiki.kr/w/OWASP"
  },
  {
      "name": "OWASP Top 10",
      "url": "https://itwiki.kr/w/OWASP_Top_10"
  },
  {
      "name": "OWASP Top 10(2017)",
      "url": "https://itwiki.kr/w/OWASP_Top_10(2017)"
  },
  {
      "name": "OWASP Top 10(2021)",
      "url": "https://itwiki.kr/w/OWASP_Top_10(2021)"
  },
  {
      "name": "OWL",
      "url": "https://itwiki.kr/w/OWL"
  },
  {
      "name": "Oauth",
      "url": "https://itwiki.kr/w/Oauth"
  },
  {
      "name": "OpenAI",
      "url": "https://itwiki.kr/w/OpenAI"
  },
  {
      "name": "Open RAN",
      "url": "https://itwiki.kr/w/Open_RAN"
  },
  {
      "name": "Openflow",
      "url": "https://itwiki.kr/w/Openflow"
  },
  {
      "name": "Over the top",
      "url": "https://itwiki.kr/w/Over_the_top"
  },
  {
      "name": "P2P",
      "url": "https://itwiki.kr/w/P2P"
  },
  {
      "name": "PACELC",
      "url": "https://itwiki.kr/w/PACELC"
  },
  {
      "name": "PACELC 이론",
      "url": "https://itwiki.kr/w/PACELC_%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "PACK 형식",
      "url": "https://itwiki.kr/w/PACK_%ED%98%95%EC%8B%9D"
  },
  {
      "name": "PAM",
      "url": "https://itwiki.kr/w/PAM"
  },
  {
      "name": "PBTF",
      "url": "https://itwiki.kr/w/PBTF"
  },
  {
      "name": "PCA",
      "url": "https://itwiki.kr/w/PCA"
  },
  {
      "name": "PCB",
      "url": "https://itwiki.kr/w/PCB"
  },
  {
      "name": "PCDA",
      "url": "https://itwiki.kr/w/PCDA"
  },
  {
      "name": "PDCA",
      "url": "https://itwiki.kr/w/PDCA"
  },
  {
      "name": "PEM",
      "url": "https://itwiki.kr/w/PEM"
  },
  {
      "name": "PERT",
      "url": "https://itwiki.kr/w/PERT"
  },
  {
      "name": "PERT/CPM",
      "url": "https://itwiki.kr/w/PERT/CPM"
  },
  {
      "name": "PGP",
      "url": "https://itwiki.kr/w/PGP"
  },
  {
      "name": "PHP-FPM",
      "url": "https://itwiki.kr/w/PHP-FPM"
  },
  {
      "name": "PHP Injection",
      "url": "https://itwiki.kr/w/PHP_Injection"
  },
  {
      "name": "PHP 삽입 공격",
      "url": "https://itwiki.kr/w/PHP_%EC%82%BD%EC%9E%85_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "PI",
      "url": "https://itwiki.kr/w/PI"
  },
  {
      "name": "PIA",
      "url": "https://itwiki.kr/w/PIA"
  },
  {
      "name": "PID",
      "url": "https://itwiki.kr/w/PID"
  },
  {
      "name": "PIM",
      "url": "https://itwiki.kr/w/PIM"
  },
  {
      "name": "PKI",
      "url": "https://itwiki.kr/w/PKI"
  },
  {
      "name": "PMO",
      "url": "https://itwiki.kr/w/PMO"
  },
  {
      "name": "POP",
      "url": "https://itwiki.kr/w/POP"
  },
  {
      "name": "POP-3",
      "url": "https://itwiki.kr/w/POP-3"
  },
  {
      "name": "POP3",
      "url": "https://itwiki.kr/w/POP3"
  },
  {
      "name": "POSIX",
      "url": "https://itwiki.kr/w/POSIX"
  },
  {
      "name": "POST",
      "url": "https://itwiki.kr/w/POST"
  },
  {
      "name": "PPDM",
      "url": "https://itwiki.kr/w/PPDM"
  },
  {
      "name": "PPDP",
      "url": "https://itwiki.kr/w/PPDP"
  },
  {
      "name": "PPI",
      "url": "https://itwiki.kr/w/PPI"
  },
  {
      "name": "PPP",
      "url": "https://itwiki.kr/w/PPP"
  },
  {
      "name": "PaaS-TA",
      "url": "https://itwiki.kr/w/PaaS-TA"
  },
  {
      "name": "Pay Later API",
      "url": "https://itwiki.kr/w/Pay_Later_API"
  },
  {
      "name": "Phishing",
      "url": "https://itwiki.kr/w/Phishing"
  },
  {
      "name": "Ping of Death",
      "url": "https://itwiki.kr/w/Ping_of_Death"
  },
  {
      "name": "Pm2",
      "url": "https://itwiki.kr/w/Pm2"
  },
  {
      "name": "PnP",
      "url": "https://itwiki.kr/w/PnP"
  },
  {
      "name": "PoET",
      "url": "https://itwiki.kr/w/PoET"
  },
  {
      "name": "Postfix",
      "url": "https://itwiki.kr/w/Postfix"
  },
  {
      "name": "Process Innovation",
      "url": "https://itwiki.kr/w/Process_Innovation"
  },
  {
      "name": "Python-UIAutomation-for-Windows",
      "url": "https://itwiki.kr/w/Python-UIAutomation-for-Windows"
  },
  {
      "name": "Q-러닝",
      "url": "https://itwiki.kr/w/Q-%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "QLC SSD",
      "url": "https://itwiki.kr/w/QLC_SSD"
  },
  {
      "name": "QR 코드",
      "url": "https://itwiki.kr/w/QR_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "QR코드",
      "url": "https://itwiki.kr/w/QR%EC%BD%94%EB%93%9C"
  },
  {
      "name": "QUIC",
      "url": "https://itwiki.kr/w/QUIC"
  },
  {
      "name": "Q 러닝",
      "url": "https://itwiki.kr/w/Q_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "QoS",
      "url": "https://itwiki.kr/w/QoS"
  },
  {
      "name": "Q러닝",
      "url": "https://itwiki.kr/w/Q%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "R",
      "url": "https://itwiki.kr/w/R"
  },
  {
      "name": "RACI",
      "url": "https://itwiki.kr/w/RACI"
  },
  {
      "name": "RACI 매트릭스",
      "url": "https://itwiki.kr/w/RACI_%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4"
  },
  {
      "name": "RACI 모델",
      "url": "https://itwiki.kr/w/RACI_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "RACI 차트",
      "url": "https://itwiki.kr/w/RACI_%EC%B0%A8%ED%8A%B8"
  },
  {
      "name": "RAD",
      "url": "https://itwiki.kr/w/RAD"
  },
  {
      "name": "RAID",
      "url": "https://itwiki.kr/w/RAID"
  },
  {
      "name": "RAN",
      "url": "https://itwiki.kr/w/RAN"
  },
  {
      "name": "RAND",
      "url": "https://itwiki.kr/w/RAND"
  },
  {
      "name": "RARP",
      "url": "https://itwiki.kr/w/RARP"
  },
  {
      "name": "RBAC",
      "url": "https://itwiki.kr/w/RBAC"
  },
  {
      "name": "RC5",
      "url": "https://itwiki.kr/w/RC5"
  },
  {
      "name": "RCSA",
      "url": "https://itwiki.kr/w/RCSA"
  },
  {
      "name": "RDF",
      "url": "https://itwiki.kr/w/RDF"
  },
  {
      "name": "REST",
      "url": "https://itwiki.kr/w/REST"
  },
  {
      "name": "RESTful",
      "url": "https://itwiki.kr/w/RESTful"
  },
  {
      "name": "REvil",
      "url": "https://itwiki.kr/w/REvil"
  },
  {
      "name": "RFC",
      "url": "https://itwiki.kr/w/RFC"
  },
  {
      "name": "RFI",
      "url": "https://itwiki.kr/w/RFI"
  },
  {
      "name": "RFID",
      "url": "https://itwiki.kr/w/RFID"
  },
  {
      "name": "RFP",
      "url": "https://itwiki.kr/w/RFP"
  },
  {
      "name": "RIP",
      "url": "https://itwiki.kr/w/RIP"
  },
  {
      "name": "RM 스케줄링",
      "url": "https://itwiki.kr/w/RM_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "RNN",
      "url": "https://itwiki.kr/w/RNN"
  },
  {
      "name": "RPA",
      "url": "https://itwiki.kr/w/RPA"
  },
  {
      "name": "RPO",
      "url": "https://itwiki.kr/w/RPO"
  },
  {
      "name": "RR",
      "url": "https://itwiki.kr/w/RR"
  },
  {
      "name": "RSA",
      "url": "https://itwiki.kr/w/RSA"
  },
  {
      "name": "RTE",
      "url": "https://itwiki.kr/w/RTE"
  },
  {
      "name": "RTMP",
      "url": "https://itwiki.kr/w/RTMP"
  },
  {
      "name": "RTO",
      "url": "https://itwiki.kr/w/RTO"
  },
  {
      "name": "RUDY",
      "url": "https://itwiki.kr/w/RUDY"
  },
  {
      "name": "RUDY 공격",
      "url": "https://itwiki.kr/w/RUDY_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "RUP 4+1 뷰",
      "url": "https://itwiki.kr/w/RUP_4%2B1_%EB%B7%B0"
  },
  {
      "name": "RUP 뷰",
      "url": "https://itwiki.kr/w/RUP_%EB%B7%B0"
  },
  {
      "name": "R (언어)",
      "url": "https://itwiki.kr/w/R_(%EC%96%B8%EC%96%B4)"
  },
  {
      "name": "R 언어",
      "url": "https://itwiki.kr/w/R_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "R 트리",
      "url": "https://itwiki.kr/w/R_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "ReLU",
      "url": "https://itwiki.kr/w/ReLU"
  },
  {
      "name": "Real Time Enterprise",
      "url": "https://itwiki.kr/w/Real_Time_Enterprise"
  },
  {
      "name": "Regression",
      "url": "https://itwiki.kr/w/Regression"
  },
  {
      "name": "Reinforcement Learning",
      "url": "https://itwiki.kr/w/Reinforcement_Learning"
  },
  {
      "name": "Request for proposal",
      "url": "https://itwiki.kr/w/Request_for_proposal"
  },
  {
      "name": "Requirement Engineering",
      "url": "https://itwiki.kr/w/Requirement_Engineering"
  },
  {
      "name": "Requirements Engineering",
      "url": "https://itwiki.kr/w/Requirements_Engineering"
  },
  {
      "name": "Revers telnet",
      "url": "https://itwiki.kr/w/Revers_telnet"
  },
  {
      "name": "Robot Process Automation",
      "url": "https://itwiki.kr/w/Robot_Process_Automation"
  },
  {
      "name": "Rsync",
      "url": "https://itwiki.kr/w/Rsync"
  },
  {
      "name": "S/MIME",
      "url": "https://itwiki.kr/w/S/MIME"
  },
  {
      "name": "SAD",
      "url": "https://itwiki.kr/w/SAD"
  },
  {
      "name": "SAM",
      "url": "https://itwiki.kr/w/SAM"
  },
  {
      "name": "SAML",
      "url": "https://itwiki.kr/w/SAML"
  },
  {
      "name": "SAN",
      "url": "https://itwiki.kr/w/SAN"
  },
  {
      "name": "SANE",
      "url": "https://itwiki.kr/w/SANE"
  },
  {
      "name": "SATAN",
      "url": "https://itwiki.kr/w/SATAN"
  },
  {
      "name": "SBC",
      "url": "https://itwiki.kr/w/SBC"
  },
  {
      "name": "SCADA",
      "url": "https://itwiki.kr/w/SCADA"
  },
  {
      "name": "SCM",
      "url": "https://itwiki.kr/w/SCM"
  },
  {
      "name": "SCM 2.0",
      "url": "https://itwiki.kr/w/SCM_2.0"
  },
  {
      "name": "SCRUM",
      "url": "https://itwiki.kr/w/SCRUM"
  },
  {
      "name": "SDGs",
      "url": "https://itwiki.kr/w/SDGs"
  },
  {
      "name": "SDL",
      "url": "https://itwiki.kr/w/SDL"
  },
  {
      "name": "SDLC",
      "url": "https://itwiki.kr/w/SDLC"
  },
  {
      "name": "SDN",
      "url": "https://itwiki.kr/w/SDN"
  },
  {
      "name": "SDRAM",
      "url": "https://itwiki.kr/w/SDRAM"
  },
  {
      "name": "SECI",
      "url": "https://itwiki.kr/w/SECI"
  },
  {
      "name": "SECI 모델",
      "url": "https://itwiki.kr/w/SECI_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "SEED",
      "url": "https://itwiki.kr/w/SEED"
  },
  {
      "name": "SEI",
      "url": "https://itwiki.kr/w/SEI"
  },
  {
      "name": "SEI 3 뷰",
      "url": "https://itwiki.kr/w/SEI_3_%EB%B7%B0"
  },
  {
      "name": "SEM",
      "url": "https://itwiki.kr/w/SEM"
  },
  {
      "name": "SET",
      "url": "https://itwiki.kr/w/SET"
  },
  {
      "name": "SHA",
      "url": "https://itwiki.kr/w/SHA"
  },
  {
      "name": "SHA-512",
      "url": "https://itwiki.kr/w/SHA-512"
  },
  {
      "name": "SIEM",
      "url": "https://itwiki.kr/w/SIEM"
  },
  {
      "name": "SIL",
      "url": "https://itwiki.kr/w/SIL"
  },
  {
      "name": "SJF",
      "url": "https://itwiki.kr/w/SJF"
  },
  {
      "name": "SJF 스케줄링",
      "url": "https://itwiki.kr/w/SJF_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "SLA",
      "url": "https://itwiki.kr/w/SLA"
  },
  {
      "name": "SLI",
      "url": "https://itwiki.kr/w/SLI"
  },
  {
      "name": "SLM",
      "url": "https://itwiki.kr/w/SLM"
  },
  {
      "name": "SLO",
      "url": "https://itwiki.kr/w/SLO"
  },
  {
      "name": "SMART 방법론",
      "url": "https://itwiki.kr/w/SMART_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "SMB",
      "url": "https://itwiki.kr/w/SMB"
  },
  {
      "name": "SNA",
      "url": "https://itwiki.kr/w/SNA"
  },
  {
      "name": "SNI",
      "url": "https://itwiki.kr/w/SNI"
  },
  {
      "name": "SNMP",
      "url": "https://itwiki.kr/w/SNMP"
  },
  {
      "name": "SOA",
      "url": "https://itwiki.kr/w/SOA"
  },
  {
      "name": "SOAP",
      "url": "https://itwiki.kr/w/SOAP"
  },
  {
      "name": "SOAPA",
      "url": "https://itwiki.kr/w/SOAPA"
  },
  {
      "name": "SOAR",
      "url": "https://itwiki.kr/w/SOAR"
  },
  {
      "name": "SOLID",
      "url": "https://itwiki.kr/w/SOLID"
  },
  {
      "name": "SOW",
      "url": "https://itwiki.kr/w/SOW"
  },
  {
      "name": "SPARQL",
      "url": "https://itwiki.kr/w/SPARQL"
  },
  {
      "name": "SPF",
      "url": "https://itwiki.kr/w/SPF"
  },
  {
      "name": "SPICE",
      "url": "https://itwiki.kr/w/SPICE"
  },
  {
      "name": "SPN",
      "url": "https://itwiki.kr/w/SPN"
  },
  {
      "name": "SPN 구조",
      "url": "https://itwiki.kr/w/SPN_%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "SPRING",
      "url": "https://itwiki.kr/w/SPRING"
  },
  {
      "name": "SP 인증",
      "url": "https://itwiki.kr/w/SP_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "SP인증",
      "url": "https://itwiki.kr/w/SP%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "SQL",
      "url": "https://itwiki.kr/w/SQL"
  },
  {
      "name": "SQL-On-Hadoop",
      "url": "https://itwiki.kr/w/SQL-On-Hadoop"
  },
  {
      "name": "SQL injection",
      "url": "https://itwiki.kr/w/SQL_injection"
  },
  {
      "name": "SQL 인젝션",
      "url": "https://itwiki.kr/w/SQL_%EC%9D%B8%EC%A0%9D%EC%85%98"
  },
  {
      "name": "SQL 중복값 찾기 쿼리",
      "url": "https://itwiki.kr/w/SQL_%EC%A4%91%EB%B3%B5%EA%B0%92_%EC%B0%BE%EA%B8%B0_%EC%BF%BC%EB%A6%AC"
  },
  {
      "name": "SQLite",
      "url": "https://itwiki.kr/w/SQLite"
  },
  {
      "name": "SQuaRE",
      "url": "https://itwiki.kr/w/SQuaRE"
  },
  {
      "name": "SRE",
      "url": "https://itwiki.kr/w/SRE"
  },
  {
      "name": "SRS",
      "url": "https://itwiki.kr/w/SRS"
  },
  {
      "name": "SSH",
      "url": "https://itwiki.kr/w/SSH"
  },
  {
      "name": "SSH 계층",
      "url": "https://itwiki.kr/w/SSH_%EA%B3%84%EC%B8%B5"
  },
  {
      "name": "SSH 패킷",
      "url": "https://itwiki.kr/w/SSH_%ED%8C%A8%ED%82%B7"
  },
  {
      "name": "SSL",
      "url": "https://itwiki.kr/w/SSL"
  },
  {
      "name": "SSL/TLS",
      "url": "https://itwiki.kr/w/SSL/TLS"
  },
  {
      "name": "SSL Striping",
      "url": "https://itwiki.kr/w/SSL_Striping"
  },
  {
      "name": "SSL 스트리핑",
      "url": "https://itwiki.kr/w/SSL_%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%95%91"
  },
  {
      "name": "SSL 스트립",
      "url": "https://itwiki.kr/w/SSL_%EC%8A%A4%ED%8A%B8%EB%A6%BD"
  },
  {
      "name": "SSL 오프로딩",
      "url": "https://itwiki.kr/w/SSL_%EC%98%A4%ED%94%84%EB%A1%9C%EB%94%A9"
  },
  {
      "name": "SSO",
      "url": "https://itwiki.kr/w/SSO"
  },
  {
      "name": "SSTP",
      "url": "https://itwiki.kr/w/SSTP"
  },
  {
      "name": "STAF",
      "url": "https://itwiki.kr/w/STAF"
  },
  {
      "name": "SVM",
      "url": "https://itwiki.kr/w/SVM"
  },
  {
      "name": "SWEBOK",
      "url": "https://itwiki.kr/w/SWEBOK"
  },
  {
      "name": "SWOT",
      "url": "https://itwiki.kr/w/SWOT"
  },
  {
      "name": "SW 분리발주 의무화",
      "url": "https://itwiki.kr/w/SW_%EB%B6%84%EB%A6%AC%EB%B0%9C%EC%A3%BC_%EC%9D%98%EB%AC%B4%ED%99%94"
  },
  {
      "name": "SYN 플러딩",
      "url": "https://itwiki.kr/w/SYN_%ED%94%8C%EB%9F%AC%EB%94%A9"
  },
  {
      "name": "SYN 플루딩",
      "url": "https://itwiki.kr/w/SYN_%ED%94%8C%EB%A3%A8%EB%94%A9"
  },
  {
      "name": "SaaS",
      "url": "https://itwiki.kr/w/SaaS"
  },
  {
      "name": "Sdn",
      "url": "https://itwiki.kr/w/Sdn"
  },
  {
      "name": "Shell",
      "url": "https://itwiki.kr/w/Shell"
  },
  {
      "name": "Simple Network Management Protocol",
      "url": "https://itwiki.kr/w/Simple_Network_Management_Protocol"
  },
  {
      "name": "Single Sign On",
      "url": "https://itwiki.kr/w/Single_Sign_On"
  },
  {
      "name": "Slow HTTP 공격",
      "url": "https://itwiki.kr/w/Slow_HTTP_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "Slowloris",
      "url": "https://itwiki.kr/w/Slowloris"
  },
  {
      "name": "Slowloris 공격",
      "url": "https://itwiki.kr/w/Slowloris_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "Smali",
      "url": "https://itwiki.kr/w/Smali"
  },
  {
      "name": "Smishing",
      "url": "https://itwiki.kr/w/Smishing"
  },
  {
      "name": "Smurfing",
      "url": "https://itwiki.kr/w/Smurfing"
  },
  {
      "name": "Sniffing",
      "url": "https://itwiki.kr/w/Sniffing"
  },
  {
      "name": "Snort",
      "url": "https://itwiki.kr/w/Snort"
  },
  {
      "name": "SoW",
      "url": "https://itwiki.kr/w/SoW"
  },
  {
      "name": "Software Defined Network",
      "url": "https://itwiki.kr/w/Software_Defined_Network"
  },
  {
      "name": "Software Engineering Institute",
      "url": "https://itwiki.kr/w/Software_Engineering_Institute"
  },
  {
      "name": "SpamAssassin",
      "url": "https://itwiki.kr/w/SpamAssassin"
  },
  {
      "name": "Square",
      "url": "https://itwiki.kr/w/Square"
  },
  {
      "name": "Squid",
      "url": "https://itwiki.kr/w/Squid"
  },
  {
      "name": "Squid.conf",
      "url": "https://itwiki.kr/w/Squid.conf"
  },
  {
      "name": "Stacheldraht",
      "url": "https://itwiki.kr/w/Stacheldraht"
  },
  {
      "name": "Subquery",
      "url": "https://itwiki.kr/w/Subquery"
  },
  {
      "name": "Switch Jamming",
      "url": "https://itwiki.kr/w/Switch_Jamming"
  },
  {
      "name": "Syn Cookie",
      "url": "https://itwiki.kr/w/Syn_Cookie"
  },
  {
      "name": "Syn Flooding",
      "url": "https://itwiki.kr/w/Syn_Flooding"
  },
  {
      "name": "T-근접성",
      "url": "https://itwiki.kr/w/T-%EA%B7%BC%EC%A0%91%EC%84%B1"
  },
  {
      "name": "T-다양성",
      "url": "https://itwiki.kr/w/T-%EB%8B%A4%EC%96%91%EC%84%B1"
  },
  {
      "name": "TCO",
      "url": "https://itwiki.kr/w/TCO"
  },
  {
      "name": "TCP",
      "url": "https://itwiki.kr/w/TCP"
  },
  {
      "name": "TCP/IP",
      "url": "https://itwiki.kr/w/TCP/IP"
  },
  {
      "name": "TCP ACK 스캔",
      "url": "https://itwiki.kr/w/TCP_ACK_%EC%8A%A4%EC%BA%94"
  },
  {
      "name": "TCP Wrapper",
      "url": "https://itwiki.kr/w/TCP_Wrapper"
  },
  {
      "name": "TCP 제어 플래그",
      "url": "https://itwiki.kr/w/TCP_%EC%A0%9C%EC%96%B4_%ED%94%8C%EB%9E%98%EA%B7%B8"
  },
  {
      "name": "TCP 제어 플레그",
      "url": "https://itwiki.kr/w/TCP_%EC%A0%9C%EC%96%B4_%ED%94%8C%EB%A0%88%EA%B7%B8"
  },
  {
      "name": "TCP 타이머",
      "url": "https://itwiki.kr/w/TCP_%ED%83%80%EC%9D%B4%EB%A8%B8"
  },
  {
      "name": "TCP 플래그",
      "url": "https://itwiki.kr/w/TCP_%ED%94%8C%EB%9E%98%EA%B7%B8"
  },
  {
      "name": "TCP 헤더",
      "url": "https://itwiki.kr/w/TCP_%ED%97%A4%EB%8D%94"
  },
  {
      "name": "TCSEC",
      "url": "https://itwiki.kr/w/TCSEC"
  },
  {
      "name": "TDD",
      "url": "https://itwiki.kr/w/TDD"
  },
  {
      "name": "TEE",
      "url": "https://itwiki.kr/w/TEE"
  },
  {
      "name": "TF-IDF",
      "url": "https://itwiki.kr/w/TF-IDF"
  },
  {
      "name": "TFTP",
      "url": "https://itwiki.kr/w/TFTP"
  },
  {
      "name": "TKIP",
      "url": "https://itwiki.kr/w/TKIP"
  },
  {
      "name": "TLS",
      "url": "https://itwiki.kr/w/TLS"
  },
  {
      "name": "TLS(SSL)",
      "url": "https://itwiki.kr/w/TLS(SSL)"
  },
  {
      "name": "TMMi",
      "url": "https://itwiki.kr/w/TMMi"
  },
  {
      "name": "TMN",
      "url": "https://itwiki.kr/w/TMN"
  },
  {
      "name": "TPM",
      "url": "https://itwiki.kr/w/TPM"
  },
  {
      "name": "TP 모니터",
      "url": "https://itwiki.kr/w/TP_%EB%AA%A8%EB%8B%88%ED%84%B0"
  },
  {
      "name": "TTL",
      "url": "https://itwiki.kr/w/TTL"
  },
  {
      "name": "T 트리",
      "url": "https://itwiki.kr/w/T_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "Tamper-resistant",
      "url": "https://itwiki.kr/w/Tamper-resistant"
  },
  {
      "name": "Tcpdump",
      "url": "https://itwiki.kr/w/Tcpdump"
  },
  {
      "name": "The top trends in tech",
      "url": "https://itwiki.kr/w/The_top_trends_in_tech"
  },
  {
      "name": "Tizen",
      "url": "https://itwiki.kr/w/Tizen"
  },
  {
      "name": "ToC",
      "url": "https://itwiki.kr/w/ToC"
  },
  {
      "name": "Transmission medium",
      "url": "https://itwiki.kr/w/Transmission_medium"
  },
  {
      "name": "Trinoo",
      "url": "https://itwiki.kr/w/Trinoo"
  },
  {
      "name": "Tripwire",
      "url": "https://itwiki.kr/w/Tripwire"
  },
  {
      "name": "TwC",
      "url": "https://itwiki.kr/w/TwC"
  },
  {
      "name": "Twelve Factor",
      "url": "https://itwiki.kr/w/Twelve_Factor"
  },
  {
      "name": "Twelve Factor 방법론",
      "url": "https://itwiki.kr/w/Twelve_Factor_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "UAF",
      "url": "https://itwiki.kr/w/UAF"
  },
  {
      "name": "UAT",
      "url": "https://itwiki.kr/w/UAT"
  },
  {
      "name": "UCPID",
      "url": "https://itwiki.kr/w/UCPID"
  },
  {
      "name": "UDDI",
      "url": "https://itwiki.kr/w/UDDI"
  },
  {
      "name": "UDP",
      "url": "https://itwiki.kr/w/UDP"
  },
  {
      "name": "UDP 플러딩",
      "url": "https://itwiki.kr/w/UDP_%ED%94%8C%EB%9F%AC%EB%94%A9"
  },
  {
      "name": "UI",
      "url": "https://itwiki.kr/w/UI"
  },
  {
      "name": "UI/UX",
      "url": "https://itwiki.kr/w/UI/UX"
  },
  {
      "name": "UIAutomator2",
      "url": "https://itwiki.kr/w/UIAutomator2"
  },
  {
      "name": "UML",
      "url": "https://itwiki.kr/w/UML"
  },
  {
      "name": "UML 집합 관계",
      "url": "https://itwiki.kr/w/UML_%EC%A7%91%ED%95%A9_%EA%B4%80%EA%B3%84"
  },
  {
      "name": "UMS",
      "url": "https://itwiki.kr/w/UMS"
  },
  {
      "name": "URL",
      "url": "https://itwiki.kr/w/URL"
  },
  {
      "name": "USIM",
      "url": "https://itwiki.kr/w/USIM"
  },
  {
      "name": "UWB",
      "url": "https://itwiki.kr/w/UWB"
  },
  {
      "name": "UX",
      "url": "https://itwiki.kr/w/UX"
  },
  {
      "name": "Use After Free",
      "url": "https://itwiki.kr/w/Use_After_Free"
  },
  {
      "name": "Usermod",
      "url": "https://itwiki.kr/w/Usermod"
  },
  {
      "name": "V&amp;V",
      "url": "https://itwiki.kr/w/V%26V"
  },
  {
      "name": "V&amp;V 모델",
      "url": "https://itwiki.kr/w/V%26V_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "V2X",
      "url": "https://itwiki.kr/w/V2X"
  },
  {
      "name": "VAN",
      "url": "https://itwiki.kr/w/VAN"
  },
  {
      "name": "VBM",
      "url": "https://itwiki.kr/w/VBM"
  },
  {
      "name": "VDI",
      "url": "https://itwiki.kr/w/VDI"
  },
  {
      "name": "VLAN",
      "url": "https://itwiki.kr/w/VLAN"
  },
  {
      "name": "VO",
      "url": "https://itwiki.kr/w/VO"
  },
  {
      "name": "VPN",
      "url": "https://itwiki.kr/w/VPN"
  },
  {
      "name": "VTL",
      "url": "https://itwiki.kr/w/VTL"
  },
  {
      "name": "V 다이어그램",
      "url": "https://itwiki.kr/w/V_%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "VoIP",
      "url": "https://itwiki.kr/w/VoIP"
  },
  {
      "name": "Vsftpd.conf",
      "url": "https://itwiki.kr/w/Vsftpd.conf"
  },
  {
      "name": "V다이어그램",
      "url": "https://itwiki.kr/w/V%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "W3C",
      "url": "https://itwiki.kr/w/W3C"
  },
  {
      "name": "WAN",
      "url": "https://itwiki.kr/w/WAN"
  },
  {
      "name": "WAP",
      "url": "https://itwiki.kr/w/WAP"
  },
  {
      "name": "WAS",
      "url": "https://itwiki.kr/w/WAS"
  },
  {
      "name": "WBAN",
      "url": "https://itwiki.kr/w/WBAN"
  },
  {
      "name": "WBS",
      "url": "https://itwiki.kr/w/WBS"
  },
  {
      "name": "WDT",
      "url": "https://itwiki.kr/w/WDT"
  },
  {
      "name": "WEP",
      "url": "https://itwiki.kr/w/WEP"
  },
  {
      "name": "WIFI 6",
      "url": "https://itwiki.kr/w/WIFI_6"
  },
  {
      "name": "WOL",
      "url": "https://itwiki.kr/w/WOL"
  },
  {
      "name": "WPA",
      "url": "https://itwiki.kr/w/WPA"
  },
  {
      "name": "WPA3",
      "url": "https://itwiki.kr/w/WPA3"
  },
  {
      "name": "WPAN",
      "url": "https://itwiki.kr/w/WPAN"
  },
  {
      "name": "WPKI",
      "url": "https://itwiki.kr/w/WPKI"
  },
  {
      "name": "WSDL",
      "url": "https://itwiki.kr/w/WSDL"
  },
  {
      "name": "WebCacheV01.dat",
      "url": "https://itwiki.kr/w/WebCacheV01.dat"
  },
  {
      "name": "WiFi 6",
      "url": "https://itwiki.kr/w/WiFi_6"
  },
  {
      "name": "WiFi 7",
      "url": "https://itwiki.kr/w/WiFi_7"
  },
  {
      "name": "Wifi 6",
      "url": "https://itwiki.kr/w/Wifi_6"
  },
  {
      "name": "Wifi 7",
      "url": "https://itwiki.kr/w/Wifi_7"
  },
  {
      "name": "Word2Vec",
      "url": "https://itwiki.kr/w/Word2Vec"
  },
  {
      "name": "Word Embedding",
      "url": "https://itwiki.kr/w/Word_Embedding"
  },
  {
      "name": "X.25",
      "url": "https://itwiki.kr/w/X.25"
  },
  {
      "name": "X.509",
      "url": "https://itwiki.kr/w/X.509"
  },
  {
      "name": "XFS",
      "url": "https://itwiki.kr/w/XFS"
  },
  {
      "name": "XML",
      "url": "https://itwiki.kr/w/XML"
  },
  {
      "name": "XOR 문제",
      "url": "https://itwiki.kr/w/XOR_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "XP",
      "url": "https://itwiki.kr/w/XP"
  },
  {
      "name": "XP 방법론",
      "url": "https://itwiki.kr/w/XP_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "XSS",
      "url": "https://itwiki.kr/w/XSS"
  },
  {
      "name": "Xen",
      "url": "https://itwiki.kr/w/Xen"
  },
  {
      "name": "Xferlog",
      "url": "https://itwiki.kr/w/Xferlog"
  },
  {
      "name": "Xinetd",
      "url": "https://itwiki.kr/w/Xinetd"
  },
  {
      "name": "Xposed",
      "url": "https://itwiki.kr/w/Xposed"
  },
  {
      "name": "ZigBee",
      "url": "https://itwiki.kr/w/ZigBee"
  },
  {
      "name": "Zk-SNARKs",
      "url": "https://itwiki.kr/w/Zk-SNARKs"
  },
  {
      "name": "ℓ-다양성",
      "url": "https://itwiki.kr/w/%E2%84%93-%EB%8B%A4%EC%96%91%EC%84%B1"
  },
  {
      "name": "가능도",
      "url": "https://itwiki.kr/w/%EA%B0%80%EB%8A%A5%EB%8F%84"
  },
  {
      "name": "가명정보",
      "url": "https://itwiki.kr/w/%EA%B0%80%EB%AA%85%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "가명정보 결합",
      "url": "https://itwiki.kr/w/%EA%B0%80%EB%AA%85%EC%A0%95%EB%B3%B4_%EA%B2%B0%ED%95%A9"
  },
  {
      "name": "가명정보 처리 가이드라인",
      "url": "https://itwiki.kr/w/%EA%B0%80%EB%AA%85%EC%A0%95%EB%B3%B4_%EC%B2%98%EB%A6%AC_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "가명처리",
      "url": "https://itwiki.kr/w/%EA%B0%80%EB%AA%85%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "가상 기업",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81_%EA%B8%B0%EC%97%85"
  },
  {
      "name": "가상 메모리",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81_%EB%A9%94%EB%AA%A8%EB%A6%AC"
  },
  {
      "name": "가상 사설망",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81_%EC%82%AC%EC%84%A4%EB%A7%9D"
  },
  {
      "name": "가상 자산",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81_%EC%9E%90%EC%82%B0"
  },
  {
      "name": "가상기업",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EA%B8%B0%EC%97%85"
  },
  {
      "name": "가상메모리",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EB%A9%94%EB%AA%A8%EB%A6%AC"
  },
  {
      "name": "가상메모리 페이지 교체",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EB%A9%94%EB%AA%A8%EB%A6%AC_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%90%EC%B2%B4"
  },
  {
      "name": "가상물리 시스템",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EB%AC%BC%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "가상물리시스템",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EB%AC%BC%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "가상사설망",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EC%82%AC%EC%84%A4%EB%A7%9D"
  },
  {
      "name": "가상자산",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%EC%9E%90%EC%82%B0"
  },
  {
      "name": "가상화",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%83%81%ED%99%94"
  },
  {
      "name": "가용성",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%9A%A9%EC%84%B1"
  },
  {
      "name": "가중치 코드",
      "url": "https://itwiki.kr/w/%EA%B0%80%EC%A4%91%EC%B9%98_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "가트너",
      "url": "https://itwiki.kr/w/%EA%B0%80%ED%8A%B8%EB%84%88"
  },
  {
      "name": "가트너 10대 전략기술 트렌드 2019년",
      "url": "https://itwiki.kr/w/%EA%B0%80%ED%8A%B8%EB%84%88_10%EB%8C%80_%EC%A0%84%EB%9E%B5%EA%B8%B0%EC%88%A0_%ED%8A%B8%EB%A0%8C%EB%93%9C_2019%EB%85%84"
  },
  {
      "name": "가트너 10대 전략기술 트렌드 2020년",
      "url": "https://itwiki.kr/w/%EA%B0%80%ED%8A%B8%EB%84%88_10%EB%8C%80_%EC%A0%84%EB%9E%B5%EA%B8%B0%EC%88%A0_%ED%8A%B8%EB%A0%8C%EB%93%9C_2020%EB%85%84"
  },
  {
      "name": "가트너 그룹",
      "url": "https://itwiki.kr/w/%EA%B0%80%ED%8A%B8%EB%84%88_%EA%B7%B8%EB%A3%B9"
  },
  {
      "name": "간이 네트워크 관리 프로토콜",
      "url": "https://itwiki.kr/w/%EA%B0%84%EC%9D%B4_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EA%B4%80%EB%A6%AC_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "간트 차트",
      "url": "https://itwiki.kr/w/%EA%B0%84%ED%8A%B8_%EC%B0%A8%ED%8A%B8"
  }
])
_itwiki = _itwiki.concat([
  {
      "name": "감리",
      "url": "https://itwiki.kr/w/%EA%B0%90%EB%A6%AC"
  },
  {
      "name": "강제적 접근 통제",
      "url": "https://itwiki.kr/w/%EA%B0%95%EC%A0%9C%EC%A0%81_%EC%A0%91%EA%B7%BC_%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "강제적 접근통제",
      "url": "https://itwiki.kr/w/%EA%B0%95%EC%A0%9C%EC%A0%81_%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "강화 학습",
      "url": "https://itwiki.kr/w/%EA%B0%95%ED%99%94_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "강화학습",
      "url": "https://itwiki.kr/w/%EA%B0%95%ED%99%94%ED%95%99%EC%8A%B5"
  },
  {
      "name": "개망신법",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EB%A7%9D%EC%8B%A0%EB%B2%95"
  },
  {
      "name": "개발 보안",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EB%B0%9C_%EB%B3%B4%EC%95%88"
  },
  {
      "name": "개인정보",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "개인정보 관련 법규",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EA%B4%80%EB%A0%A8_%EB%B2%95%EA%B7%9C"
  },
  {
      "name": "개인정보 배상 책임보험",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B0%B0%EC%83%81_%EC%B1%85%EC%9E%84%EB%B3%B4%ED%97%98"
  },
  {
      "name": "개인정보 배상책임 보험",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B0%B0%EC%83%81%EC%B1%85%EC%9E%84_%EB%B3%B4%ED%97%98"
  },
  {
      "name": "개인정보 배상책임보험",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B0%B0%EC%83%81%EC%B1%85%EC%9E%84%EB%B3%B4%ED%97%98"
  },
  {
      "name": "개인정보 보호 원칙",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "개인정보 보호법 벌칙",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8%EB%B2%95_%EB%B2%8C%EC%B9%99"
  },
  {
      "name": "개인정보 보호법제",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8%EB%B2%95%EC%A0%9C"
  },
  {
      "name": "개인정보 보호책임자",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B3%B4%ED%98%B8%EC%B1%85%EC%9E%84%EC%9E%90"
  },
  {
      "name": "개인정보 비식별",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B9%84%EC%8B%9D%EB%B3%84"
  },
  {
      "name": "개인정보 비식별 기법",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B9%84%EC%8B%9D%EB%B3%84_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "개인정보 비식별 기술",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B9%84%EC%8B%9D%EB%B3%84_%EA%B8%B0%EC%88%A0"
  },
  {
      "name": "개인정보 비식별 조치 가이드라인",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B9%84%EC%8B%9D%EB%B3%84_%EC%A1%B0%EC%B9%98_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "개인정보 비식별조치 가이드라인",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B9%84%EC%8B%9D%EB%B3%84%EC%A1%B0%EC%B9%98_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "개인정보 비식별화",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EB%B9%84%EC%8B%9D%EB%B3%84%ED%99%94"
  },
  {
      "name": "개인정보 손해배상 책임보험",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%86%90%ED%95%B4%EB%B0%B0%EC%83%81_%EC%B1%85%EC%9E%84%EB%B3%B4%ED%97%98"
  },
  {
      "name": "개인정보 수집",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%88%98%EC%A7%91"
  },
  {
      "name": "개인정보 암호화",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "개인정보 영향평가",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%98%81%ED%96%A5%ED%8F%89%EA%B0%80"
  },
  {
      "name": "개인정보 영향평가기관",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%98%81%ED%96%A5%ED%8F%89%EA%B0%80%EA%B8%B0%EA%B4%80"
  },
  {
      "name": "개인정보 유출",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9C%A0%EC%B6%9C"
  },
  {
      "name": "개인정보 유출 사고",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9C%A0%EC%B6%9C_%EC%82%AC%EA%B3%A0"
  },
  {
      "name": "개인정보 유출 통지",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9C%A0%EC%B6%9C_%ED%86%B5%EC%A7%80"
  },
  {
      "name": "개인정보 유출사고",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9C%A0%EC%B6%9C%EC%82%AC%EA%B3%A0"
  },
  {
      "name": "개인정보 유효기간 제도",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9C%A0%ED%9A%A8%EA%B8%B0%EA%B0%84_%EC%A0%9C%EB%8F%84"
  },
  {
      "name": "개인정보 이전",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9D%B4%EC%A0%84"
  },
  {
      "name": "개인정보 재식별",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%9E%AC%EC%8B%9D%EB%B3%84"
  },
  {
      "name": "개인정보 정보주체",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%A0%95%EB%B3%B4%EC%A3%BC%EC%B2%B4"
  },
  {
      "name": "개인정보 제공",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%A0%9C%EA%B3%B5"
  },
  {
      "name": "개인정보 처리방침",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8"
  },
  {
      "name": "개인정보 취급자",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EC%B7%A8%EA%B8%89%EC%9E%90"
  },
  {
      "name": "개인정보 파기",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%ED%8C%8C%EA%B8%B0"
  },
  {
      "name": "개인정보 활용 동의",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%ED%99%9C%EC%9A%A9_%EB%8F%99%EC%9D%98"
  },
  {
      "name": "개인정보영향평가",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%98%81%ED%96%A5%ED%8F%89%EA%B0%80"
  },
  {
      "name": "개인정보의 안전성 확보조치 기준",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%9D%98_%EC%95%88%EC%A0%84%EC%84%B1_%ED%99%95%EB%B3%B4%EC%A1%B0%EC%B9%98_%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "개인정보취급자",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B7%A8%EA%B8%89%EC%9E%90"
  },
  {
      "name": "개체",
      "url": "https://itwiki.kr/w/%EA%B0%9C%EC%B2%B4"
  },
  {
      "name": "객체",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4"
  },
  {
      "name": "객체 다이어그램",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4_%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "객체 지향",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5"
  },
  {
      "name": "객체지향",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5"
  },
  {
      "name": "객체지향 기법",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "객체지향 분석 방법론",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5_%EB%B6%84%EC%84%9D_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "객체지향 설계",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5_%EC%84%A4%EA%B3%84"
  },
  {
      "name": "객체지향 언어",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "객체지향 연관성",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5_%EC%97%B0%EA%B4%80%EC%84%B1"
  },
  {
      "name": "객체지향 인터페이스",
      "url": "https://itwiki.kr/w/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "거래 처리 시스템",
      "url": "https://itwiki.kr/w/%EA%B1%B0%EB%9E%98_%EC%B2%98%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "거리 벡터 라우팅",
      "url": "https://itwiki.kr/w/%EA%B1%B0%EB%A6%AC_%EB%B2%A1%ED%84%B0_%EB%9D%BC%EC%9A%B0%ED%8C%85"
  },
  {
      "name": "거버넌스",
      "url": "https://itwiki.kr/w/%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "건물 에너지 관리 시스템",
      "url": "https://itwiki.kr/w/%EA%B1%B4%EB%AC%BC_%EC%97%90%EB%84%88%EC%A7%80_%EA%B4%80%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "검사점 회복 기법",
      "url": "https://itwiki.kr/w/%EA%B2%80%EC%82%AC%EC%A0%90_%ED%9A%8C%EB%B3%B5_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "게이트웨이",
      "url": "https://itwiki.kr/w/%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4"
  },
  {
      "name": "결정 커버리지",
      "url": "https://itwiki.kr/w/%EA%B2%B0%EC%A0%95_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "결정자",
      "url": "https://itwiki.kr/w/%EA%B2%B0%EC%A0%95%EC%9E%90"
  },
  {
      "name": "결측값",
      "url": "https://itwiki.kr/w/%EA%B2%B0%EC%B8%A1%EA%B0%92"
  },
  {
      "name": "결측치",
      "url": "https://itwiki.kr/w/%EA%B2%B0%EC%B8%A1%EC%B9%98"
  },
  {
      "name": "결함 허용",
      "url": "https://itwiki.kr/w/%EA%B2%B0%ED%95%A8_%ED%97%88%EC%9A%A9"
  },
  {
      "name": "결함허용",
      "url": "https://itwiki.kr/w/%EA%B2%B0%ED%95%A8%ED%97%88%EC%9A%A9"
  },
  {
      "name": "결합도",
      "url": "https://itwiki.kr/w/%EA%B2%B0%ED%95%A9%EB%8F%84"
  },
  {
      "name": "결합전문기관",
      "url": "https://itwiki.kr/w/%EA%B2%B0%ED%95%A9%EC%A0%84%EB%AC%B8%EA%B8%B0%EA%B4%80"
  },
  {
      "name": "경계값 분석",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EA%B3%84%EA%B0%92_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "경계값 분석 테스트",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EA%B3%84%EA%B0%92_%EB%B6%84%EC%84%9D_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "경과 시간 증명",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EA%B3%BC_%EC%8B%9C%EA%B0%84_%EC%A6%9D%EB%AA%85"
  },
  {
      "name": "경량 딥러닝",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EB%9F%89_%EB%94%A5%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "경량 암호",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EB%9F%89_%EC%95%94%ED%98%B8"
  },
  {
      "name": "경량 암호 알고리즘",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EB%9F%89_%EC%95%94%ED%98%B8_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "경영 정보 시스템",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EC%98%81_%EC%A0%95%EB%B3%B4_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "경영정보시스템",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EC%98%81%EC%A0%95%EB%B3%B4%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "경쟁 상태",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EC%9F%81_%EC%83%81%ED%83%9C"
  },
  {
      "name": "경쟁 조건",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EC%9F%81_%EC%A1%B0%EA%B1%B4"
  },
  {
      "name": "경쟁조건",
      "url": "https://itwiki.kr/w/%EA%B2%BD%EC%9F%81%EC%A1%B0%EA%B1%B4"
  },
  {
      "name": "경험 기반 테스트",
      "url": "https://itwiki.kr/w/%EA%B2%BD%ED%97%98_%EA%B8%B0%EB%B0%98_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "계정 관리 솔루션",
      "url": "https://itwiki.kr/w/%EA%B3%84%EC%A0%95_%EA%B4%80%EB%A6%AC_%EC%86%94%EB%A3%A8%EC%85%98"
  },
  {
      "name": "계정계",
      "url": "https://itwiki.kr/w/%EA%B3%84%EC%A0%95%EA%B3%84"
  },
  {
      "name": "계층형 아키텍처 스타일",
      "url": "https://itwiki.kr/w/%EA%B3%84%EC%B8%B5%ED%98%95_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EC%8A%A4%ED%83%80%EC%9D%BC"
  },
  {
      "name": "고가용성",
      "url": "https://itwiki.kr/w/%EA%B3%A0%EA%B0%80%EC%9A%A9%EC%84%B1"
  },
  {
      "name": "고가용성 솔루션",
      "url": "https://itwiki.kr/w/%EA%B3%A0%EA%B0%80%EC%9A%A9%EC%84%B1_%EC%86%94%EB%A3%A8%EC%85%98"
  },
  {
      "name": "고객 관계 관리",
      "url": "https://itwiki.kr/w/%EA%B3%A0%EA%B0%9D_%EA%B4%80%EA%B3%84_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "골드 플레이팅",
      "url": "https://itwiki.kr/w/%EA%B3%A8%EB%93%9C_%ED%94%8C%EB%A0%88%EC%9D%B4%ED%8C%85"
  },
  {
      "name": "골스드푼 해킹 사고",
      "url": "https://itwiki.kr/w/%EA%B3%A8%EC%8A%A4%EB%93%9C%ED%91%BC_%ED%95%B4%ED%82%B9_%EC%82%AC%EA%B3%A0"
  },
  {
      "name": "곱 집합",
      "url": "https://itwiki.kr/w/%EA%B3%B1_%EC%A7%91%ED%95%A9"
  },
  {
      "name": "곱집합",
      "url": "https://itwiki.kr/w/%EA%B3%B1%EC%A7%91%ED%95%A9"
  },
  {
      "name": "공개 라이센스",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C_%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4"
  },
  {
      "name": "공개 소프트웨어",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "공개 소프트웨어 거버넌스",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "공개 소프트웨어 라이선스",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4"
  },
  {
      "name": "공개 소프트웨어 라이센스",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4"
  },
  {
      "name": "공개키 기반 구조",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C%ED%82%A4_%EA%B8%B0%EB%B0%98_%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "공개키 암호",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C%ED%82%A4_%EC%95%94%ED%98%B8"
  },
  {
      "name": "공개키 암호화",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B0%9C%ED%82%A4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "공공 데이터",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B3%B5_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "공공데이터법",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%95"
  },
  {
      "name": "공공안전통신망",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B3%B5%EC%95%88%EC%A0%84%ED%86%B5%EC%8B%A0%EB%A7%9D"
  },
  {
      "name": "공급망 공격",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B8%89%EB%A7%9D_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "공급망 관리",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B8%89%EB%A7%9D_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "공급망 관리 2.0",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EA%B8%89%EB%A7%9D_%EA%B4%80%EB%A6%AC_2.0"
  },
  {
      "name": "공유 경제",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EC%9C%A0_%EA%B2%BD%EC%A0%9C"
  },
  {
      "name": "공인인증기관",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EC%9D%B8%EC%9D%B8%EC%A6%9D%EA%B8%B0%EA%B4%80"
  },
  {
      "name": "공인인증서",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EC%9D%B8%EC%9D%B8%EC%A6%9D%EC%84%9C"
  },
  {
      "name": "공인전자서명인증체계",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EC%9D%B8%EC%A0%84%EC%9E%90%EC%84%9C%EB%AA%85%EC%9D%B8%EC%A6%9D%EC%B2%B4%EA%B3%84"
  },
  {
      "name": "공지:이미지 업로드",
      "url": "https://itwiki.kr/w/%EA%B3%B5%EC%A7%80:%EC%9D%B4%EB%AF%B8%EC%A7%80_%EC%97%85%EB%A1%9C%EB%93%9C"
  },
  {
      "name": "공통 모듈",
      "url": "https://itwiki.kr/w/%EA%B3%B5%ED%86%B5_%EB%AA%A8%EB%93%88"
  },
  {
      "name": "공통평가기준",
      "url": "https://itwiki.kr/w/%EA%B3%B5%ED%86%B5%ED%8F%89%EA%B0%80%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "과적합",
      "url": "https://itwiki.kr/w/%EA%B3%BC%EC%A0%81%ED%95%A9"
  },
  {
      "name": "과적합 문제",
      "url": "https://itwiki.kr/w/%EA%B3%BC%EC%A0%81%ED%95%A9_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "관계 대수",
      "url": "https://itwiki.kr/w/%EA%B4%80%EA%B3%84_%EB%8C%80%EC%88%98"
  },
  {
      "name": "관계 해석",
      "url": "https://itwiki.kr/w/%EA%B4%80%EA%B3%84_%ED%95%B4%EC%84%9D"
  },
  {
      "name": "관계대수",
      "url": "https://itwiki.kr/w/%EA%B4%80%EA%B3%84%EB%8C%80%EC%88%98"
  },
  {
      "name": "관계해석",
      "url": "https://itwiki.kr/w/%EA%B4%80%EA%B3%84%ED%95%B4%EC%84%9D"
  },
  {
      "name": "관계형 데이터베이스",
      "url": "https://itwiki.kr/w/%EA%B4%80%EA%B3%84%ED%98%95_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "관리 성숙도 모델",
      "url": "https://itwiki.kr/w/%EA%B4%80%EB%A6%AC_%EC%84%B1%EC%88%99%EB%8F%84_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "관리형 서비스 제공자",
      "url": "https://itwiki.kr/w/%EA%B4%80%EB%A6%AC%ED%98%95_%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%A0%9C%EA%B3%B5%EC%9E%90"
  },
  {
      "name": "관점 지향 프로그래밍",
      "url": "https://itwiki.kr/w/%EA%B4%80%EC%A0%90_%EC%A7%80%ED%96%A5_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D"
  },
  {
      "name": "교육분야 가명·익명정보 처리 가이드라인",
      "url": "https://itwiki.kr/w/%EA%B5%90%EC%9C%A1%EB%B6%84%EC%95%BC_%EA%B0%80%EB%AA%85%C2%B7%EC%9D%B5%EB%AA%85%EC%A0%95%EB%B3%B4_%EC%B2%98%EB%A6%AC_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "교차 케이블",
      "url": "https://itwiki.kr/w/%EA%B5%90%EC%B0%A8_%EC%BC%80%EC%9D%B4%EB%B8%94"
  },
  {
      "name": "교착 상태",
      "url": "https://itwiki.kr/w/%EA%B5%90%EC%B0%A9_%EC%83%81%ED%83%9C"
  },
  {
      "name": "교착상태",
      "url": "https://itwiki.kr/w/%EA%B5%90%EC%B0%A9%EC%83%81%ED%83%9C"
  },
  {
      "name": "교통공학",
      "url": "https://itwiki.kr/w/%EA%B5%90%ED%86%B5%EA%B3%B5%ED%95%99"
  },
  {
      "name": "구독형 소프트웨어",
      "url": "https://itwiki.kr/w/%EA%B5%AC%EB%8F%85%ED%98%95_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "구문 커버리지",
      "url": "https://itwiki.kr/w/%EA%B5%AC%EB%AC%B8_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "구역성",
      "url": "https://itwiki.kr/w/%EA%B5%AC%EC%97%AD%EC%84%B1"
  },
  {
      "name": "구조 기반 테스트",
      "url": "https://itwiki.kr/w/%EA%B5%AC%EC%A1%B0_%EA%B8%B0%EB%B0%98_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "국가 인공지능 윤리기준",
      "url": "https://itwiki.kr/w/%EA%B5%AD%EA%B0%80_%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%9C%A4%EB%A6%AC%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "국가 정보보안 기본지침",
      "url": "https://itwiki.kr/w/%EA%B5%AD%EA%B0%80_%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88_%EA%B8%B0%EB%B3%B8%EC%A7%80%EC%B9%A8"
  },
  {
      "name": "국민안전 사회간접자본 디지털화",
      "url": "https://itwiki.kr/w/%EA%B5%AD%EB%AF%BC%EC%95%88%EC%A0%84_%EC%82%AC%ED%9A%8C%EA%B0%84%EC%A0%91%EC%9E%90%EB%B3%B8_%EB%94%94%EC%A7%80%ED%84%B8%ED%99%94"
  },
  {
      "name": "국제 표준화 기구",
      "url": "https://itwiki.kr/w/%EA%B5%AD%EC%A0%9C_%ED%91%9C%EC%A4%80%ED%99%94_%EA%B8%B0%EA%B5%AC"
  },
  {
      "name": "국제전기기술위원회",
      "url": "https://itwiki.kr/w/%EA%B5%AD%EC%A0%9C%EC%A0%84%EA%B8%B0%EA%B8%B0%EC%88%A0%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "국제전기통신연합",
      "url": "https://itwiki.kr/w/%EA%B5%AD%EC%A0%9C%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%97%B0%ED%95%A9"
  },
  {
      "name": "국회 전문위원",
      "url": "https://itwiki.kr/w/%EA%B5%AD%ED%9A%8C_%EC%A0%84%EB%AC%B8%EC%9C%84%EC%9B%90"
  },
  {
      "name": "군집 분석",
      "url": "https://itwiki.kr/w/%EA%B5%B0%EC%A7%91_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "군집분석",
      "url": "https://itwiki.kr/w/%EA%B5%B0%EC%A7%91%EB%B6%84%EC%84%9D"
  },
  {
      "name": "군집화",
      "url": "https://itwiki.kr/w/%EA%B5%B0%EC%A7%91%ED%99%94"
  },
  {
      "name": "권력-관심 그리드",
      "url": "https://itwiki.kr/w/%EA%B6%8C%EB%A0%A5-%EA%B4%80%EC%8B%AC_%EA%B7%B8%EB%A6%AC%EB%93%9C"
  },
  {
      "name": "권력 관심 그리드",
      "url": "https://itwiki.kr/w/%EA%B6%8C%EB%A0%A5_%EA%B4%80%EC%8B%AC_%EA%B7%B8%EB%A6%AC%EB%93%9C"
  },
  {
      "name": "권한상승",
      "url": "https://itwiki.kr/w/%EA%B6%8C%ED%95%9C%EC%83%81%EC%8A%B9"
  },
  {
      "name": "귀무가설",
      "url": "https://itwiki.kr/w/%EA%B7%80%EB%AC%B4%EA%B0%80%EC%84%A4"
  },
  {
      "name": "규제 샌드박스",
      "url": "https://itwiki.kr/w/%EA%B7%9C%EC%A0%9C_%EC%83%8C%EB%93%9C%EB%B0%95%EC%8A%A4"
  },
  {
      "name": "규칙기반 침입탐지",
      "url": "https://itwiki.kr/w/%EA%B7%9C%EC%B9%99%EA%B8%B0%EB%B0%98_%EC%B9%A8%EC%9E%85%ED%83%90%EC%A7%80"
  },
  {
      "name": "균형 성과 기록표",
      "url": "https://itwiki.kr/w/%EA%B7%A0%ED%98%95_%EC%84%B1%EA%B3%BC_%EA%B8%B0%EB%A1%9D%ED%91%9C"
  },
  {
      "name": "그래프",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%9E%98%ED%94%84"
  },
  {
      "name": "그래프 데이터베이스",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%9E%98%ED%94%84_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "그로스 해킹",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A1%9C%EC%8A%A4_%ED%95%B4%ED%82%B9"
  },
  {
      "name": "그로스해킹",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A1%9C%EC%8A%A4%ED%95%B4%ED%82%B9"
  },
  {
      "name": "그룹 의사결정 지원 시스템",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A3%B9_%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95_%EC%A7%80%EC%9B%90_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "그린 리모델링",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A6%B0_%EB%A6%AC%EB%AA%A8%EB%8D%B8%EB%A7%81"
  },
  {
      "name": "그린 스마트 스쿨",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A6%B0_%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%8A%A4%EC%BF%A8"
  },
  {
      "name": "그린 에너지",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A6%B0_%EC%97%90%EB%84%88%EC%A7%80"
  },
  {
      "name": "그림자 페이징 회복 기법",
      "url": "https://itwiki.kr/w/%EA%B7%B8%EB%A6%BC%EC%9E%90_%ED%8E%98%EC%9D%B4%EC%A7%95_%ED%9A%8C%EB%B3%B5_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "근거리 통신망",
      "url": "https://itwiki.kr/w/%EA%B7%BC%EA%B1%B0%EB%A6%AC_%ED%86%B5%EC%8B%A0%EB%A7%9D"
  },
  {
      "name": "금융 IT 자회사",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%9C%B5_IT_%EC%9E%90%ED%9A%8C%EC%82%AC"
  },
  {
      "name": "금융 마이데이터",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%9C%B5_%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "금융데이터거래소",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%9C%B5%EB%8D%B0%EC%9D%B4%ED%84%B0%EA%B1%B0%EB%9E%98%EC%86%8C"
  },
  {
      "name": "금융보안원",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%9C%B5%EB%B3%B4%EC%95%88%EC%9B%90"
  },
  {
      "name": "금융분야 가명·익명처리 안내서",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%9C%B5%EB%B6%84%EC%95%BC_%EA%B0%80%EB%AA%85%C2%B7%EC%9D%B5%EB%AA%85%EC%B2%98%EB%A6%AC_%EC%95%88%EB%82%B4%EC%84%9C"
  },
  {
      "name": "금융분야 클라우드컴퓨팅서비스 이용 가이드",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%9C%B5%EB%B6%84%EC%95%BC_%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%EC%BB%B4%ED%93%A8%ED%8C%85%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%9D%B4%EC%9A%A9_%EA%B0%80%EC%9D%B4%EB%93%9C"
  },
  {
      "name": "금전적 기대값 분석",
      "url": "https://itwiki.kr/w/%EA%B8%88%EC%A0%84%EC%A0%81_%EA%B8%B0%EB%8C%80%EA%B0%92_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "긍정오류와 부정오류",
      "url": "https://itwiki.kr/w/%EA%B8%8D%EC%A0%95%EC%98%A4%EB%A5%98%EC%99%80_%EB%B6%80%EC%A0%95%EC%98%A4%EB%A5%98"
  },
  {
      "name": "기간계",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EA%B0%84%EA%B3%84"
  },
  {
      "name": "기계 학습",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EA%B3%84_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "기능 점수",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EB%8A%A5_%EC%A0%90%EC%88%98"
  },
  {
      "name": "기능점수",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EB%8A%A5%EC%A0%90%EC%88%98"
  },
  {
      "name": "기술 가치 평가",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0_%EA%B0%80%EC%B9%98_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "기술 포럼 및 컨소시엄",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0_%ED%8F%AC%EB%9F%BC_%EB%B0%8F_%EC%BB%A8%EC%86%8C%EC%8B%9C%EC%97%84"
  },
  {
      "name": "기술사",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0%EC%82%AC"
  },
  {
      "name": "기술사 시험",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0%EC%82%AC_%EC%8B%9C%ED%97%98"
  },
  {
      "name": "기술사 시험일정",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0%EC%82%AC_%EC%8B%9C%ED%97%98%EC%9D%BC%EC%A0%95"
  },
  {
      "name": "기술사법",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0%EC%82%AC%EB%B2%95"
  },
  {
      "name": "기술사제도발전 기본계획",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%88%A0%EC%82%AC%EC%A0%9C%EB%8F%84%EB%B0%9C%EC%A0%84_%EA%B8%B0%EB%B3%B8%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "기아 현상",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%95%84_%ED%98%84%EC%83%81"
  },
  {
      "name": "기업 시스템",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%97%85_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "기업 애플리케이션 통합",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%97%85_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98_%ED%86%B5%ED%95%A9"
  },
  {
      "name": "기업 어플리케이션 통합",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%97%85_%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98_%ED%86%B5%ED%95%A9"
  },
  {
      "name": "기업 정보 포털",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%97%85_%EC%A0%95%EB%B3%B4_%ED%8F%AC%ED%84%B8"
  },
  {
      "name": "기업 통합 패턴",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%97%85_%ED%86%B5%ED%95%A9_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "기업 환경 요인",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%97%85_%ED%99%98%EA%B2%BD_%EC%9A%94%EC%9D%B8"
  },
  {
      "name": "기울기 소실",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%9A%B8%EA%B8%B0_%EC%86%8C%EC%8B%A4"
  },
  {
      "name": "기초통계량",
      "url": "https://itwiki.kr/w/%EA%B8%B0%EC%B4%88%ED%86%B5%EA%B3%84%EB%9F%89"
  },
  {
      "name": "깃 브랜치",
      "url": "https://itwiki.kr/w/%EA%B9%83_%EB%B8%8C%EB%9E%9C%EC%B9%98"
  },
  {
      "name": "나선형 모델",
      "url": "https://itwiki.kr/w/%EB%82%98%EC%84%A0%ED%98%95_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "낙관적 기법",
      "url": "https://itwiki.kr/w/%EB%82%99%EA%B4%80%EC%A0%81_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "낙관적 병행제어",
      "url": "https://itwiki.kr/w/%EB%82%99%EA%B4%80%EC%A0%81_%EB%B3%91%ED%96%89%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "난독화",
      "url": "https://itwiki.kr/w/%EB%82%9C%EB%8F%85%ED%99%94"
  },
  {
      "name": "내러티브",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%9F%AC%ED%8B%B0%EB%B8%8C"
  },
  {
      "name": "내부 관리계획",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%B6%80_%EA%B4%80%EB%A6%AC%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "내부 라우팅 프로토콜",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%B6%80_%EB%9D%BC%EC%9A%B0%ED%8C%85_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "내부 스키마",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%B6%80_%EC%8A%A4%ED%82%A4%EB%A7%88"
  },
  {
      "name": "내부관리계획",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%B6%80%EA%B4%80%EB%A6%AC%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "내부논리파일",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%B6%80%EB%85%BC%EB%A6%AC%ED%8C%8C%EC%9D%BC"
  },
  {
      "name": "내부망",
      "url": "https://itwiki.kr/w/%EB%82%B4%EB%B6%80%EB%A7%9D"
  },
  {
      "name": "넌스",
      "url": "https://itwiki.kr/w/%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "널",
      "url": "https://itwiki.kr/w/%EB%84%90"
  },
  {
      "name": "널 모뎀",
      "url": "https://itwiki.kr/w/%EB%84%90_%EB%AA%A8%EB%8E%80"
  },
  {
      "name": "네서스",
      "url": "https://itwiki.kr/w/%EB%84%A4%EC%84%9C%EC%8A%A4"
  },
  {
      "name": "네이버",
      "url": "https://itwiki.kr/w/%EB%84%A4%EC%9D%B4%EB%B2%84"
  },
  {
      "name": "네트워크",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "네트워크 관리 시스템",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EA%B4%80%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "네트워크 기반 IDS",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EA%B8%B0%EB%B0%98_IDS"
  },
  {
      "name": "네트워크 슬라이스",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "네트워크 슬라이싱",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8B%B1"
  },
  {
      "name": "네트워크 주소 변환",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EC%A3%BC%EC%86%8C_%EB%B3%80%ED%99%98"
  },
  {
      "name": "네트워크 카드",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EC%B9%B4%EB%93%9C"
  },
  {
      "name": "네트워크 토폴로지",
      "url": "https://itwiki.kr/w/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%ED%86%A0%ED%8F%B4%EB%A1%9C%EC%A7%80"
  },
  {
      "name": "넷캣",
      "url": "https://itwiki.kr/w/%EB%84%B7%EC%BA%A3"
  },
  {
      "name": "넷켓",
      "url": "https://itwiki.kr/w/%EB%84%B7%EC%BC%93"
  },
  {
      "name": "논리적 데이터 웨어하우스",
      "url": "https://itwiki.kr/w/%EB%85%BC%EB%A6%AC%EC%A0%81_%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%9B%A8%EC%96%B4%ED%95%98%EC%9A%B0%EC%8A%A4"
  },
  {
      "name": "눈덩이 법칙",
      "url": "https://itwiki.kr/w/%EB%88%88%EB%8D%A9%EC%9D%B4_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "뉴 노멀",
      "url": "https://itwiki.kr/w/%EB%89%B4_%EB%85%B8%EB%A9%80"
  },
  {
      "name": "다운로더",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%8D%94"
  },
  {
      "name": "다이나모",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AA%A8"
  },
  {
      "name": "다이나모DB",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AA%A8DB"
  },
  {
      "name": "다중 강화학습",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EA%B0%95%ED%99%94%ED%95%99%EC%8A%B5"
  },
  {
      "name": "다중 경험",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EA%B2%BD%ED%97%98"
  },
  {
      "name": "다중 대체법",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EB%8C%80%EC%B2%B4%EB%B2%95"
  },
  {
      "name": "다중 링크트 리스트",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EB%A7%81%ED%81%AC%ED%8A%B8_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "다중 버전 동시성 제어",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EB%B2%84%EC%A0%84_%EB%8F%99%EC%8B%9C%EC%84%B1_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "다중 버전 동시성제어",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EB%B2%84%EC%A0%84_%EB%8F%99%EC%8B%9C%EC%84%B1%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "다중 버전 병행 제어",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EB%B2%84%EC%A0%84_%EB%B3%91%ED%96%89_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "다중 버전 병행제어",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EB%B2%84%EC%A0%84_%EB%B3%91%ED%96%89%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "다중 연결 리스트",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "다중 조건 커버리지",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91_%EC%A1%B0%EA%B1%B4_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "다중대체법",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91%EB%8C%80%EC%B2%B4%EB%B2%95"
  },
  {
      "name": "다중버전 동시성제어",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91%EB%B2%84%EC%A0%84_%EB%8F%99%EC%8B%9C%EC%84%B1%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "다중화",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%A4%91%ED%99%94"
  },
  {
      "name": "다차원 모델링",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%B0%A8%EC%9B%90_%EB%AA%A8%EB%8D%B8%EB%A7%81"
  },
  {
      "name": "다차원 색인구조",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%B0%A8%EC%9B%90_%EC%83%89%EC%9D%B8%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "다치 종속",
      "url": "https://itwiki.kr/w/%EB%8B%A4%EC%B9%98_%EC%A2%85%EC%86%8D"
  },
  {
      "name": "다크 데이터",
      "url": "https://itwiki.kr/w/%EB%8B%A4%ED%81%AC_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "다크웹",
      "url": "https://itwiki.kr/w/%EB%8B%A4%ED%81%AC%EC%9B%B9"
  },
  {
      "name": "다형성",
      "url": "https://itwiki.kr/w/%EB%8B%A4%ED%98%95%EC%84%B1"
  },
  {
      "name": "단락 검사",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EB%9D%BD_%EA%B2%80%EC%82%AC"
  },
  {
      "name": "단락 평가",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EB%9D%BD_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "단말",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EB%A7%90"
  },
  {
      "name": "단순 네트워크 관리 프로토콜",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EC%88%9C_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EA%B4%80%EB%A6%AC_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "단어 임베딩",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EC%96%B4_%EC%9E%84%EB%B2%A0%EB%94%A9"
  },
  {
      "name": "단위 테스트",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EC%9C%84_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "단위 테스팅",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EC%9C%84_%ED%85%8C%EC%8A%A4%ED%8C%85"
  },
  {
      "name": "단일 장애점",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EC%9D%BC_%EC%9E%A5%EC%95%A0%EC%A0%90"
  },
  {
      "name": "단일 장애점 문제",
      "url": "https://itwiki.kr/w/%EB%8B%A8%EC%9D%BC_%EC%9E%A5%EC%95%A0%EC%A0%90_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "대립가설",
      "url": "https://itwiki.kr/w/%EB%8C%80%EB%A6%BD%EA%B0%80%EC%84%A4"
  },
  {
      "name": "대문",
      "url": "https://itwiki.kr/w/%EB%8C%80%EB%AC%B8"
  },
  {
      "name": "대칭키 암호",
      "url": "https://itwiki.kr/w/%EB%8C%80%EC%B9%AD%ED%82%A4_%EC%95%94%ED%98%B8"
  },
  {
      "name": "대칭키 암호화",
      "url": "https://itwiki.kr/w/%EB%8C%80%EC%B9%AD%ED%82%A4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "대한민국 데이터 119 프로젝트",
      "url": "https://itwiki.kr/w/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD_%EB%8D%B0%EC%9D%B4%ED%84%B0_119_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
  },
  {
      "name": "대화형 플랫폼",
      "url": "https://itwiki.kr/w/%EB%8C%80%ED%99%94%ED%98%95_%ED%94%8C%EB%9E%AB%ED%8F%BC"
  },
  {
      "name": "더블 링크드 리스트",
      "url": "https://itwiki.kr/w/%EB%8D%94%EB%B8%94_%EB%A7%81%ED%81%AC%EB%93%9C_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "더블린 코어",
      "url": "https://itwiki.kr/w/%EB%8D%94%EB%B8%94%EB%A6%B0_%EC%BD%94%EC%96%B4"
  },
  {
      "name": "데드락",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EB%93%9C%EB%9D%BD"
  },
  {
      "name": "데브 옵스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EB%B8%8C_%EC%98%B5%EC%8A%A4"
  },
  {
      "name": "데브옵스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4"
  },
  {
      "name": "데스크탑 가상화",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%83%91_%EA%B0%80%EC%83%81%ED%99%94"
  },
  {
      "name": "데스크톱 가상화",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1_%EA%B0%80%EC%83%81%ED%99%94"
  },
  {
      "name": "데이타와 데이터",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%83%80%EC%99%80_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "데이터",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "데이터 3법",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_3%EB%B2%95"
  },
  {
      "name": "데이터 거버넌스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "데이터 경제",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B2%BD%EC%A0%9C"
  },
  {
      "name": "데이터 과학",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B3%BC%ED%95%99"
  },
  {
      "name": "데이터 과학자",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B3%BC%ED%95%99%EC%9E%90"
  },
  {
      "name": "데이터 기본법",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B8%B0%EB%B3%B8%EB%B2%95"
  },
  {
      "name": "데이터 기본법안(조승래의원 등 34인)",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B8%B0%EB%B3%B8%EB%B2%95%EC%95%88(%EC%A1%B0%EC%8A%B9%EB%9E%98%EC%9D%98%EC%9B%90_%EB%93%B1_34%EC%9D%B8)"
  },
  {
      "name": "데이터 단말",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8B%A8%EB%A7%90"
  },
  {
      "name": "데이터 단말 장치",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8B%A8%EB%A7%90_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "데이터 댐",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8C%90"
  },
  {
      "name": "데이터 독립성",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%8F%85%EB%A6%BD%EC%84%B1"
  },
  {
      "name": "데이터 레이크",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%A0%88%EC%9D%B4%ED%81%AC"
  },
  {
      "name": "데이터 링크",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%A7%81%ED%81%AC"
  },
  {
      "name": "데이터 마이닝",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "데이터 마트",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%A7%88%ED%8A%B8"
  },
  {
      "name": "데이터 모델",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "데이터 모델링",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%AA%A8%EB%8D%B8%EB%A7%81"
  },
  {
      "name": "데이터 무결성",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%AC%B4%EA%B2%B0%EC%84%B1"
  },
  {
      "name": "데이터 보안 등급",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B3%B4%EC%95%88_%EB%93%B1%EA%B8%89"
  },
  {
      "name": "데이터 보안 인증",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B3%B4%EC%95%88_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "데이터 분석",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "데이터 분석 거버넌스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "데이터 분석 도구",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "데이터 분석 모델",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "데이터 분석 모형",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EB%AA%A8%ED%98%95"
  },
  {
      "name": "데이터 분석 성숙도",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EC%84%B1%EC%88%99%EB%8F%84"
  },
  {
      "name": "데이터 분석 시스템",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "데이터 분석 조직",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EC%A1%B0%EC%A7%81"
  },
  {
      "name": "데이터 분석 준비도",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EC%A4%80%EB%B9%84%EB%8F%84"
  },
  {
      "name": "데이터 분할",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%ED%95%A0"
  },
  {
      "name": "데이터 브로커",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B8%8C%EB%A1%9C%EC%BB%A4"
  },
  {
      "name": "데이터 사이언스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%82%AC%EC%9D%B4%EC%96%B8%EC%8A%A4"
  },
  {
      "name": "데이터 사이언티스트",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%82%AC%EC%9D%B4%EC%96%B8%ED%8B%B0%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "데이터 상품",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%83%81%ED%92%88"
  },
  {
      "name": "데이터 생태계",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%83%9D%ED%83%9C%EA%B3%84"
  },
  {
      "name": "데이터 센터",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%84%BC%ED%84%B0"
  },
  {
      "name": "데이터 실행 방지",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%8B%A4%ED%96%89_%EB%B0%A9%EC%A7%80"
  },
  {
      "name": "데이터 아키텍처",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "데이터 아키텍처 전문가",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EC%A0%84%EB%AC%B8%EA%B0%80"
  },
  {
      "name": "데이터 웨어하우스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%9B%A8%EC%96%B4%ED%95%98%EC%9A%B0%EC%8A%A4"
  },
  {
      "name": "데이터 유통 생태계",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%9C%A0%ED%86%B5_%EC%83%9D%ED%83%9C%EA%B3%84"
  },
  {
      "name": "데이터 인증",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "데이터 전송",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%A0%84%EC%86%A1"
  },
  {
      "name": "데이터 전송 프로젝트",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%A0%84%EC%86%A1_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
  },
  {
      "name": "데이터 전처리",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%A0%84%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "데이터 정책",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%A0%95%EC%B1%85"
  },
  {
      "name": "데이터 주권주의",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%A3%BC%EA%B6%8C%EC%A3%BC%EC%9D%98"
  },
  {
      "name": "데이터 참조 모델",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%B0%B8%EC%A1%B0_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "데이터 처리 시스템",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%B2%98%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "데이터 통신",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "데이터 통신 기기",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%86%B5%EC%8B%A0_%EA%B8%B0%EA%B8%B0"
  },
  {
      "name": "데이터 파이프라인",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "데이터 페브릭",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%8E%98%EB%B8%8C%EB%A6%AD"
  },
  {
      "name": "데이터 표준",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%91%9C%EC%A4%80"
  },
  {
      "name": "데이터 표준화",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%91%9C%EC%A4%80%ED%99%94"
  },
  {
      "name": "데이터 품질 관리",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%92%88%EC%A7%88_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "데이터 품질 보증",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%92%88%EC%A7%88_%EB%B3%B4%EC%A6%9D"
  },
  {
      "name": "데이터 품질 인증",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%92%88%EC%A7%88_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "데이터 품질관리",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%92%88%EC%A7%88%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "데이터 회선 종단 장치",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%9A%8C%EC%84%A0_%EC%A2%85%EB%8B%A8_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "데이터 흐름도",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%9D%90%EB%A6%84%EB%8F%84"
  },
  {
      "name": "데이터링크 계층",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A7%81%ED%81%AC_%EA%B3%84%EC%B8%B5"
  },
  {
      "name": "데이터마이닝",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "데이터베이스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "데이터베이스 Force와 Steal",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_Force%EC%99%80_Steal"
  },
  {
      "name": "데이터베이스 ISA 관계",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_ISA_%EA%B4%80%EA%B3%84"
  },
  {
      "name": "데이터베이스 관계 유형",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EA%B4%80%EA%B3%84_%EC%9C%A0%ED%98%95"
  },
  {
      "name": "데이터베이스 다차원 모델링",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%8B%A4%EC%B0%A8%EC%9B%90_%EB%AA%A8%EB%8D%B8%EB%A7%81"
  },
  {
      "name": "데이터베이스 독립성",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%8F%85%EB%A6%BD%EC%84%B1"
  },
  {
      "name": "데이터베이스 로그",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%A1%9C%EA%B7%B8"
  },
  {
      "name": "데이터베이스 로킹",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%A1%9C%ED%82%B9"
  },
  {
      "name": "데이터베이스 무결성",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%AC%B4%EA%B2%B0%EC%84%B1"
  },
  {
      "name": "데이터베이스 반정규화",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%B0%98%EC%A0%95%EA%B7%9C%ED%99%94"
  },
  {
      "name": "데이터베이스 병행 제어",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%B3%91%ED%96%89_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "데이터베이스 병행제어",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%B3%91%ED%96%89%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "데이터베이스 보안",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%B3%B4%EC%95%88"
  },
  {
      "name": "데이터베이스 뷰",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EB%B7%B0"
  },
  {
      "name": "데이터베이스 샤드",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%83%A4%EB%93%9C"
  },
  {
      "name": "데이터베이스 서브 쿼리",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%84%9C%EB%B8%8C_%EC%BF%BC%EB%A6%AC"
  },
  {
      "name": "데이터베이스 연결 함정",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%97%B0%EA%B2%B0_%ED%95%A8%EC%A0%95"
  },
  {
      "name": "데이터베이스 옵티마이저",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%98%B5%ED%8B%B0%EB%A7%88%EC%9D%B4%EC%A0%80"
  },
  {
      "name": "데이터베이스 이상 현상",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%9D%B4%EC%83%81_%ED%98%84%EC%83%81"
  },
  {
      "name": "데이터베이스 인덱스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%9D%B8%EB%8D%B1%EC%8A%A4"
  },
  {
      "name": "데이터베이스 정규화",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%A0%95%EA%B7%9C%ED%99%94"
  }
]);
_itwiki = _itwiki.concat([
  {
      "name": "데이터베이스 제5정규형",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%A0%9C5%EC%A0%95%EA%B7%9C%ED%98%95"
  },
  {
      "name": "데이터베이스 제약",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%A0%9C%EC%95%BD"
  },
  {
      "name": "데이터베이스 조인",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%A1%B0%EC%9D%B8"
  },
  {
      "name": "데이터베이스 차원 모델링",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%EC%B0%A8%EC%9B%90_%EB%AA%A8%EB%8D%B8%EB%A7%81"
  },
  {
      "name": "데이터베이스 키",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%82%A4"
  },
  {
      "name": "데이터베이스 타임스탬프 기법",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%83%80%EC%9E%84%EC%8A%A4%ED%83%AC%ED%94%84_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "데이터베이스 튜닝",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%8A%9C%EB%8B%9D"
  },
  {
      "name": "데이터베이스 트리거",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%8A%B8%EB%A6%AC%EA%B1%B0"
  },
  {
      "name": "데이터베이스 파티셔닝",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%8C%8C%ED%8B%B0%EC%85%94%EB%8B%9D"
  },
  {
      "name": "데이터베이스 파티션",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%8C%8C%ED%8B%B0%EC%85%98"
  },
  {
      "name": "데이터베이스 회복",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4_%ED%9A%8C%EB%B3%B5"
  },
  {
      "name": "데이터분석기사",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EA%B8%B0%EC%82%AC"
  },
  {
      "name": "데이터브릭스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B8%8C%EB%A6%AD%EC%8A%A4"
  },
  {
      "name": "데이터옵스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%98%B5%EC%8A%A4"
  },
  {
      "name": "데이터와 데이타",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%99%80_%EB%8D%B0%EC%9D%B4%ED%83%80"
  },
  {
      "name": "데이터웨어하우스",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%9B%A8%EC%96%B4%ED%95%98%EC%9A%B0%EC%8A%A4"
  },
  {
      "name": "데이터전문기관",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A0%84%EB%AC%B8%EA%B8%B0%EA%B4%80"
  },
  {
      "name": "데이터프레임",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%9D%B4%ED%84%B0%ED%94%84%EB%A0%88%EC%9E%84"
  },
  {
      "name": "데카르트 곱",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%B9%B4%EB%A5%B4%ED%8A%B8_%EA%B3%B1"
  },
  {
      "name": "데카르트곱",
      "url": "https://itwiki.kr/w/%EB%8D%B0%EC%B9%B4%EB%A5%B4%ED%8A%B8%EA%B3%B1"
  },
  {
      "name": "델파이법",
      "url": "https://itwiki.kr/w/%EB%8D%B8%ED%8C%8C%EC%9D%B4%EB%B2%95"
  },
  {
      "name": "도심항공교통",
      "url": "https://itwiki.kr/w/%EB%8F%84%EC%8B%AC%ED%95%AD%EA%B3%B5%EA%B5%90%ED%86%B5"
  },
  {
      "name": "도커",
      "url": "https://itwiki.kr/w/%EB%8F%84%EC%BB%A4"
  },
  {
      "name": "도커 스웜",
      "url": "https://itwiki.kr/w/%EB%8F%84%EC%BB%A4_%EC%8A%A4%EC%9B%9C"
  },
  {
      "name": "독립형 5G",
      "url": "https://itwiki.kr/w/%EB%8F%85%EB%A6%BD%ED%98%95_5G"
  },
  {
      "name": "동기부여 이론",
      "url": "https://itwiki.kr/w/%EB%8F%99%EA%B8%B0%EB%B6%80%EC%97%AC_%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "동기식 전송",
      "url": "https://itwiki.kr/w/%EB%8F%99%EA%B8%B0%EC%8B%9D_%EC%A0%84%EC%86%A1"
  },
  {
      "name": "동물 이름 모음",
      "url": "https://itwiki.kr/w/%EB%8F%99%EB%AC%BC_%EC%9D%B4%EB%A6%84_%EB%AA%A8%EC%9D%8C"
  },
  {
      "name": "동시성 제어",
      "url": "https://itwiki.kr/w/%EB%8F%99%EC%8B%9C%EC%84%B1_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "동일 오류율",
      "url": "https://itwiki.kr/w/%EB%8F%99%EC%9D%BC_%EC%98%A4%EB%A5%98%EC%9C%A8"
  },
  {
      "name": "동적 인덱스",
      "url": "https://itwiki.kr/w/%EB%8F%99%EC%A0%81_%EC%9D%B8%EB%8D%B1%EC%8A%A4"
  },
  {
      "name": "동적 주소 변환",
      "url": "https://itwiki.kr/w/%EB%8F%99%EC%A0%81_%EC%A3%BC%EC%86%8C_%EB%B3%80%ED%99%98"
  },
  {
      "name": "동적 테스트",
      "url": "https://itwiki.kr/w/%EB%8F%99%EC%A0%81_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "동치 분할 테스트",
      "url": "https://itwiki.kr/w/%EB%8F%99%EC%B9%98_%EB%B6%84%ED%95%A0_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "동형 암호",
      "url": "https://itwiki.kr/w/%EB%8F%99%ED%98%95_%EC%95%94%ED%98%B8"
  },
  {
      "name": "동형암호",
      "url": "https://itwiki.kr/w/%EB%8F%99%ED%98%95%EC%95%94%ED%98%B8"
  },
  {
      "name": "드라이브 바이 다운로드",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C_%EB%B0%94%EC%9D%B4_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C"
  },
  {
      "name": "드라이브바이다운로드",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%B0%94%EC%9D%B4%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C"
  },
  {
      "name": "드라이빙 테이블",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B9%99_%ED%85%8C%EC%9D%B4%EB%B8%94"
  },
  {
      "name": "드레이크 방정식",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%A0%88%EC%9D%B4%ED%81%AC_%EB%B0%A9%EC%A0%95%EC%8B%9D"
  },
  {
      "name": "드로퍼",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%A1%9C%ED%8D%BC"
  },
  {
      "name": "드롭아웃",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%A1%AD%EC%95%84%EC%9B%83"
  },
  {
      "name": "드롭퍼",
      "url": "https://itwiki.kr/w/%EB%93%9C%EB%A1%AD%ED%8D%BC"
  },
  {
      "name": "등록된 포트",
      "url": "https://itwiki.kr/w/%EB%93%B1%EB%A1%9D%EB%90%9C_%ED%8F%AC%ED%8A%B8"
  },
  {
      "name": "디도스",
      "url": "https://itwiki.kr/w/%EB%94%94%EB%8F%84%EC%8A%A4"
  },
  {
      "name": "디렉터리 리스팅",
      "url": "https://itwiki.kr/w/%EB%94%94%EB%A0%89%ED%84%B0%EB%A6%AC_%EB%A6%AC%EC%8A%A4%ED%8C%85"
  },
  {
      "name": "디렉터리와 디렉토리",
      "url": "https://itwiki.kr/w/%EB%94%94%EB%A0%89%ED%84%B0%EB%A6%AC%EC%99%80_%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC"
  },
  {
      "name": "디렉토리 리스팅",
      "url": "https://itwiki.kr/w/%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC_%EB%A6%AC%EC%8A%A4%ED%8C%85"
  },
  {
      "name": "디멀티플렉서",
      "url": "https://itwiki.kr/w/%EB%94%94%EB%A9%80%ED%8B%B0%ED%94%8C%EB%A0%89%EC%84%9C"
  },
  {
      "name": "디미터 법칙",
      "url": "https://itwiki.kr/w/%EB%94%94%EB%AF%B8%ED%84%B0_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "디스크 스케줄링",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%8A%A4%ED%81%AC_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "디자인 싱킹",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%9E%90%EC%9D%B8_%EC%8B%B1%ED%82%B9"
  },
  {
      "name": "디자인 씽킹",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%9E%90%EC%9D%B8_%EC%94%BD%ED%82%B9"
  },
  {
      "name": "디자인 패턴",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "디자인씽킹",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%9E%90%EC%9D%B8%EC%94%BD%ED%82%B9"
  },
  {
      "name": "디지털 객체 식별자",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EA%B0%9D%EC%B2%B4_%EC%8B%9D%EB%B3%84%EC%9E%90"
  },
  {
      "name": "디지털 경제",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EA%B2%BD%EC%A0%9C"
  },
  {
      "name": "디지털 변조",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EB%B3%80%EC%A1%B0"
  },
  {
      "name": "디지털 사이니지",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%82%AC%EC%9D%B4%EB%8B%88%EC%A7%80"
  },
  {
      "name": "디지털 서비스 장치",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "디지털 워터마킹",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%9B%8C%ED%84%B0%EB%A7%88%ED%82%B9"
  },
  {
      "name": "디지털 전환",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%A0%84%ED%99%98"
  },
  {
      "name": "디지털 카르텔",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%B9%B4%EB%A5%B4%ED%85%94"
  },
  {
      "name": "디지털 컨버전스",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%BB%A8%EB%B2%84%EC%A0%84%EC%8A%A4"
  },
  {
      "name": "디지털 콘텐츠 저작권 보호기술",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%EC%BD%98%ED%85%90%EC%B8%A0_%EC%A0%80%EC%9E%91%EA%B6%8C_%EB%B3%B4%ED%98%B8%EA%B8%B0%EC%88%A0"
  },
  {
      "name": "디지털 트윈",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%ED%8A%B8%EC%9C%88"
  },
  {
      "name": "디지털 트윈(정책 과제)",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%ED%8A%B8%EC%9C%88(%EC%A0%95%EC%B1%85_%EA%B3%BC%EC%A0%9C)"
  },
  {
      "name": "디지털 포렌식",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%ED%8F%AC%EB%A0%8C%EC%8B%9D"
  },
  {
      "name": "디지털 핑거프린팅",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%ED%95%91%EA%B1%B0%ED%94%84%EB%A6%B0%ED%8C%85"
  },
  {
      "name": "디지털 휴먼 증강",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%A7%80%ED%84%B8_%ED%9C%B4%EB%A8%BC_%EC%A6%9D%EA%B0%95"
  },
  {
      "name": "디코딩",
      "url": "https://itwiki.kr/w/%EB%94%94%EC%BD%94%EB%94%A9"
  },
  {
      "name": "디파이",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%8C%8C%EC%9D%B4"
  },
  {
      "name": "디피-헬만",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC-%ED%97%AC%EB%A7%8C"
  },
  {
      "name": "디피-헬만 키 교환",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC-%ED%97%AC%EB%A7%8C_%ED%82%A4_%EA%B5%90%ED%99%98"
  },
  {
      "name": "디피-헬먼",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC-%ED%97%AC%EB%A8%BC"
  },
  {
      "name": "디피-헬먼 키 교환",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC-%ED%97%AC%EB%A8%BC_%ED%82%A4_%EA%B5%90%ED%99%98"
  },
  {
      "name": "디피 헬만",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC_%ED%97%AC%EB%A7%8C"
  },
  {
      "name": "디피 헬먼",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC_%ED%97%AC%EB%A8%BC"
  },
  {
      "name": "디피헬만",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC%ED%97%AC%EB%A7%8C"
  },
  {
      "name": "디피헬만 키 교환법",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC%ED%97%AC%EB%A7%8C_%ED%82%A4_%EA%B5%90%ED%99%98%EB%B2%95"
  },
  {
      "name": "디피헬먼",
      "url": "https://itwiki.kr/w/%EB%94%94%ED%94%BC%ED%97%AC%EB%A8%BC"
  },
  {
      "name": "딥 러닝",
      "url": "https://itwiki.kr/w/%EB%94%A5_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "딥 페이크",
      "url": "https://itwiki.kr/w/%EB%94%A5_%ED%8E%98%EC%9D%B4%ED%81%AC"
  },
  {
      "name": "딥러닝",
      "url": "https://itwiki.kr/w/%EB%94%A5%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "딥웹",
      "url": "https://itwiki.kr/w/%EB%94%A5%EC%9B%B9"
  },
  {
      "name": "딥페이크",
      "url": "https://itwiki.kr/w/%EB%94%A5%ED%8E%98%EC%9D%B4%ED%81%AC"
  },
  {
      "name": "라우터",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9A%B0%ED%84%B0"
  },
  {
      "name": "라우터 보안",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9A%B0%ED%84%B0_%EB%B3%B4%EC%95%88"
  },
  {
      "name": "라우팅 프로토콜",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9A%B0%ED%8C%85_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "라운드 로빈",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9A%B4%EB%93%9C_%EB%A1%9C%EB%B9%88"
  },
  {
      "name": "라운딩",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9A%B4%EB%94%A9"
  },
  {
      "name": "라이덴 네트워크",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9D%B4%EB%8D%B4_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "라이트닝 네트워크",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9D%B4%ED%8A%B8%EB%8B%9D_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "라이트세일 데이터베이스",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9D%B4%ED%8A%B8%EC%84%B8%EC%9D%BC_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "라이파이",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%9D%B4%ED%8C%8C%EC%9D%B4"
  },
  {
      "name": "라즈베리 파이",
      "url": "https://itwiki.kr/w/%EB%9D%BC%EC%A6%88%EB%B2%A0%EB%A6%AC_%ED%8C%8C%EC%9D%B4"
  },
  {
      "name": "라플라스의 확률",
      "url": "https://itwiki.kr/w/%EB%9D%BC%ED%94%8C%EB%9D%BC%EC%8A%A4%EC%9D%98_%ED%99%95%EB%A5%A0"
  },
  {
      "name": "랜덤 포레스트",
      "url": "https://itwiki.kr/w/%EB%9E%9C%EB%8D%A4_%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "랜드 어택",
      "url": "https://itwiki.kr/w/%EB%9E%9C%EB%93%9C_%EC%96%B4%ED%83%9D"
  },
  {
      "name": "랜드어택",
      "url": "https://itwiki.kr/w/%EB%9E%9C%EB%93%9C%EC%96%B4%ED%83%9D"
  },
  {
      "name": "랜섬웨어",
      "url": "https://itwiki.kr/w/%EB%9E%9C%EC%84%AC%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "런 레벨",
      "url": "https://itwiki.kr/w/%EB%9F%B0_%EB%A0%88%EB%B2%A8"
  },
  {
      "name": "런레벨",
      "url": "https://itwiki.kr/w/%EB%9F%B0%EB%A0%88%EB%B2%A8"
  },
  {
      "name": "럼바우 분석 기법",
      "url": "https://itwiki.kr/w/%EB%9F%BC%EB%B0%94%EC%9A%B0_%EB%B6%84%EC%84%9D_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "레그테크",
      "url": "https://itwiki.kr/w/%EB%A0%88%EA%B7%B8%ED%85%8C%ED%81%AC"
  },
  {
      "name": "레빌",
      "url": "https://itwiki.kr/w/%EB%A0%88%EB%B9%8C"
  },
  {
      "name": "레이스 컨디션",
      "url": "https://itwiki.kr/w/%EB%A0%88%EC%9D%B4%EC%8A%A4_%EC%BB%A8%EB%94%94%EC%85%98"
  },
  {
      "name": "레이피드마이너",
      "url": "https://itwiki.kr/w/%EB%A0%88%EC%9D%B4%ED%94%BC%EB%93%9C%EB%A7%88%EC%9D%B4%EB%84%88"
  },
  {
      "name": "렐루",
      "url": "https://itwiki.kr/w/%EB%A0%90%EB%A3%A8"
  },
  {
      "name": "로그 기반 회복 기법",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EA%B7%B8_%EA%B8%B0%EB%B0%98_%ED%9A%8C%EB%B3%B5_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "로그 레벨",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EA%B7%B8_%EB%A0%88%EB%B2%A8"
  },
  {
      "name": "로그 선행 기입",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EA%B7%B8_%EC%84%A0%ED%96%89_%EA%B8%B0%EC%9E%85"
  },
  {
      "name": "로더",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EB%8D%94"
  },
  {
      "name": "로드 밸런싱",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EB%93%9C_%EB%B0%B8%EB%9F%B0%EC%8B%B1"
  },
  {
      "name": "로봇 프로세스 자동화",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EB%B4%87_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%9E%90%EB%8F%99%ED%99%94"
  },
  {
      "name": "로우 코드",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EC%9A%B0_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "로지스틱 회귀",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8B%B1_%ED%9A%8C%EA%B7%80"
  },
  {
      "name": "로지스틱 회귀 분석",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8B%B1_%ED%9A%8C%EA%B7%80_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "로지스틱 회귀분석",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8B%B1_%ED%9A%8C%EA%B7%80%EB%B6%84%EC%84%9D"
  },
  {
      "name": "로지컬 데이터 웨어하우스",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EC%A7%80%EC%BB%AC_%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%9B%A8%EC%96%B4%ED%95%98%EC%9A%B0%EC%8A%A4"
  },
  {
      "name": "로컬리티",
      "url": "https://itwiki.kr/w/%EB%A1%9C%EC%BB%AC%EB%A6%AC%ED%8B%B0"
  },
  {
      "name": "루트 인증서",
      "url": "https://itwiki.kr/w/%EB%A3%A8%ED%8A%B8_%EC%9D%B8%EC%A6%9D%EC%84%9C"
  },
  {
      "name": "루트 키",
      "url": "https://itwiki.kr/w/%EB%A3%A8%ED%8A%B8_%ED%82%A4"
  },
  {
      "name": "루트키",
      "url": "https://itwiki.kr/w/%EB%A3%A8%ED%8A%B8%ED%82%A4"
  },
  {
      "name": "루트킷",
      "url": "https://itwiki.kr/w/%EB%A3%A8%ED%8A%B8%ED%82%B7"
  },
  {
      "name": "루팅",
      "url": "https://itwiki.kr/w/%EB%A3%A8%ED%8C%85"
  },
  {
      "name": "리걸테크",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EA%B1%B8%ED%85%8C%ED%81%AC"
  },
  {
      "name": "리눅스",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4"
  },
  {
      "name": "리눅스 .htaccess",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_.htaccess"
  },
  {
      "name": "리눅스 ALSA",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ALSA"
  },
  {
      "name": "리눅스 DHCP",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_DHCP"
  },
  {
      "name": "리눅스 DNS",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_DNS"
  },
  {
      "name": "리눅스 KVM",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_KVM"
  },
  {
      "name": "리눅스 LVM",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_LVM"
  },
  {
      "name": "리눅스 NFS",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_NFS"
  },
  {
      "name": "리눅스 NIS",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_NIS"
  },
  {
      "name": "리눅스 Node.js",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_Node.js"
  },
  {
      "name": "리눅스 OSS",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_OSS"
  },
  {
      "name": "리눅스 PAM",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_PAM"
  },
  {
      "name": "리눅스 a2p",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_a2p"
  },
  {
      "name": "리눅스 access",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_access"
  },
  {
      "name": "리눅스 alias",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_alias"
  },
  {
      "name": "리눅스 alsactl",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_alsactl"
  },
  {
      "name": "리눅스 alsamixer",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_alsamixer"
  },
  {
      "name": "리눅스 amixer",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_amixer"
  },
  {
      "name": "리눅스 aplay",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_aplay"
  },
  {
      "name": "리눅스 apm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_apm"
  },
  {
      "name": "리눅스 appletviewer",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_appletviewer"
  },
  {
      "name": "리눅스 apropos",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_apropos"
  },
  {
      "name": "리눅스 arch",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_arch"
  },
  {
      "name": "리눅스 arecord",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_arecord"
  },
  {
      "name": "리눅스 arp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_arp"
  },
  {
      "name": "리눅스 arping",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_arping"
  },
  {
      "name": "리눅스 at",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_at"
  },
  {
      "name": "리눅스 atq",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_atq"
  },
  {
      "name": "리눅스 atrm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_atrm"
  },
  {
      "name": "리눅스 awk",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_awk"
  },
  {
      "name": "리눅스 badblocks",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_badblocks"
  },
  {
      "name": "리눅스 basename",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_basename"
  },
  {
      "name": "리눅스 bash history",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_bash_history"
  },
  {
      "name": "리눅스 batch",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_batch"
  },
  {
      "name": "리눅스 bc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_bc"
  },
  {
      "name": "리눅스 bzip2",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_bzip2"
  },
  {
      "name": "리눅스 cal",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cal"
  },
  {
      "name": "리눅스 cardmgr",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cardmgr"
  },
  {
      "name": "리눅스 cat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cat"
  },
  {
      "name": "리눅스 cd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cd"
  },
  {
      "name": "리눅스 chage",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chage"
  },
  {
      "name": "리눅스 chattr",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chattr"
  },
  {
      "name": "리눅스 chfn",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chfn"
  },
  {
      "name": "리눅스 chgrp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chgrp"
  },
  {
      "name": "리눅스 chmod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chmod"
  },
  {
      "name": "리눅스 chown",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chown"
  },
  {
      "name": "리눅스 chsh",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chsh"
  },
  {
      "name": "리눅스 chvt",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_chvt"
  },
  {
      "name": "리눅스 clear",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_clear"
  },
  {
      "name": "리눅스 cmp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cmp"
  },
  {
      "name": "리눅스 col",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_col"
  },
  {
      "name": "리눅스 colcrt",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_colcrt"
  },
  {
      "name": "리눅스 colrm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_colrm"
  },
  {
      "name": "리눅스 column",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_column"
  },
  {
      "name": "리눅스 comm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_comm"
  },
  {
      "name": "리눅스 compress",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_compress"
  },
  {
      "name": "리눅스 cpio",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cpio"
  },
  {
      "name": "리눅스 cpuinfo",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cpuinfo"
  },
  {
      "name": "리눅스 cron",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cron"
  },
  {
      "name": "리눅스 crontab",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_crontab"
  },
  {
      "name": "리눅스 csplit",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_csplit"
  },
  {
      "name": "리눅스 cut",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_cut"
  },
  {
      "name": "리눅스 date",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_date"
  },
  {
      "name": "리눅스 dd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dd"
  },
  {
      "name": "리눅스 depmod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_depmod"
  },
  {
      "name": "리눅스 df",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_df"
  },
  {
      "name": "리눅스 dhcpd.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dhcpd.conf"
  },
  {
      "name": "리눅스 diff",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_diff"
  },
  {
      "name": "리눅스 diff3",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_diff3"
  },
  {
      "name": "리눅스 diffstat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_diffstat"
  },
  {
      "name": "리눅스 dig",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dig"
  },
  {
      "name": "리눅스 dir",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dir"
  },
  {
      "name": "리눅스 dirname",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dirname"
  },
  {
      "name": "리눅스 dmesg",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dmesg"
  },
  {
      "name": "리눅스 dmidecode",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dmidecode"
  },
  {
      "name": "리눅스 dnsdomainname",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dnsdomainname"
  },
  {
      "name": "리눅스 domainname",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_domainname"
  },
  {
      "name": "리눅스 dosfsck",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dosfsck"
  },
  {
      "name": "리눅스 du",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_du"
  },
  {
      "name": "리눅스 dump",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dump"
  },
  {
      "name": "리눅스 dumpe2fs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dumpe2fs"
  },
  {
      "name": "리눅스 dumpkeys",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_dumpkeys"
  },
  {
      "name": "리눅스 e2fsck",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_e2fsck"
  },
  {
      "name": "리눅스 e2lable",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_e2lable"
  },
  {
      "name": "리눅스 echo",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_echo"
  },
  {
      "name": "리눅스 egrep",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_egrep"
  },
  {
      "name": "리눅스 eject",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_eject"
  },
  {
      "name": "리눅스 enable",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_enable"
  },
  {
      "name": "리눅스 env",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_env"
  },
  {
      "name": "리눅스 ethtool",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ethtool"
  },
  {
      "name": "리눅스 expr",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_expr"
  },
  {
      "name": "리눅스 fail2ban",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_fail2ban"
  },
  {
      "name": "리눅스 fdisk",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_fdisk"
  },
  {
      "name": "리눅스 fetchmail",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_fetchmail"
  },
  {
      "name": "리눅스 file",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_file"
  },
  {
      "name": "리눅스 find",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_find"
  },
  {
      "name": "리눅스 finger",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_finger"
  },
  {
      "name": "리눅스 free",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_free"
  },
  {
      "name": "리눅스 fsck",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_fsck"
  },
  {
      "name": "리눅스 fstab",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_fstab"
  },
  {
      "name": "리눅스 ftp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ftp"
  },
  {
      "name": "리눅스 fuser",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_fuser"
  },
  {
      "name": "리눅스 gcc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_gcc"
  },
  {
      "name": "리눅스 gpasswd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_gpasswd"
  },
  {
      "name": "리눅스 grep",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grep"
  },
  {
      "name": "리눅스 groupadd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_groupadd"
  },
  {
      "name": "리눅스 groupdel",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_groupdel"
  },
  {
      "name": "리눅스 groupmod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_groupmod"
  },
  {
      "name": "리눅스 groups",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_groups"
  },
  {
      "name": "리눅스 grpck",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grpck"
  },
  {
      "name": "리눅스 grpconv",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grpconv"
  },
  {
      "name": "리눅스 grub",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grub"
  },
  {
      "name": "리눅스 grub-install",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grub-install"
  },
  {
      "name": "리눅스 grub-mkconfig",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grub-mkconfig"
  },
  {
      "name": "리눅스 grub.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_grub.conf"
  },
  {
      "name": "리눅스 gzexe",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_gzexe"
  },
  {
      "name": "리눅스 gzip",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_gzip"
  },
  {
      "name": "리눅스 halt",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_halt"
  },
  {
      "name": "리눅스 hdparm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_hdparm"
  },
  {
      "name": "리눅스 head",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_head"
  },
  {
      "name": "리눅스 hexdump",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_hexdump"
  },
  {
      "name": "리눅스 host",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_host"
  },
  {
      "name": "리눅스 hostid",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_hostid"
  },
  {
      "name": "리눅스 hostname",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_hostname"
  },
  {
      "name": "리눅스 httpd.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_httpd.conf"
  },
  {
      "name": "리눅스 iconv",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_iconv"
  },
  {
      "name": "리눅스 id",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_id"
  },
  {
      "name": "리눅스 ifconfig",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ifconfig"
  },
  {
      "name": "리눅스 info",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_info"
  },
  {
      "name": "리눅스 init",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_init"
  },
  {
      "name": "리눅스 init 프로세스",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_init_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "리눅스 insmod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_insmod"
  },
  {
      "name": "리눅스 install",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_install"
  },
  {
      "name": "리눅스 ipcrm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ipcrm"
  },
  {
      "name": "리눅스 ipcs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ipcs"
  },
  {
      "name": "리눅스 iptables",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_iptables"
  },
  {
      "name": "리눅스 iptables-restore",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_iptables-restore"
  },
  {
      "name": "리눅스 iptables-save",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_iptables-save"
  },
  {
      "name": "리눅스 ispell",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ispell"
  },
  {
      "name": "리눅스 jobs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_jobs"
  },
  {
      "name": "리눅스 join",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_join"
  },
  {
      "name": "리눅스 kbdrate",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_kbdrate"
  },
  {
      "name": "리눅스 last",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_last"
  },
  {
      "name": "리눅스 lastb",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lastb"
  },
  {
      "name": "리눅스 lastlog",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lastlog"
  },
  {
      "name": "리눅스 ldconfig",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ldconfig"
  },
  {
      "name": "리눅스 ldd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ldd"
  },
  {
      "name": "리눅스 less",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_less"
  },
  {
      "name": "리눅스 ln",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ln"
  },
  {
      "name": "리눅스 locale",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_locale"
  },
  {
      "name": "리눅스 locate",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_locate"
  },
  {
      "name": "리눅스 lockfile",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lockfile"
  },
  {
      "name": "리눅스 logger",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_logger"
  },
  {
      "name": "리눅스 login",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_login"
  },
  {
      "name": "리눅스 login.defs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_login.defs"
  },
  {
      "name": "리눅스 logname",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_logname"
  },
  {
      "name": "리눅스 logrotate",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_logrotate"
  },
  {
      "name": "리눅스 logrotate.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_logrotate.conf"
  },
  {
      "name": "리눅스 look",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_look"
  },
  {
      "name": "리눅스 losetup",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_losetup"
  },
  {
      "name": "리눅스 lpc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lpc"
  },
  {
      "name": "리눅스 lprm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lprm"
  },
  {
      "name": "리눅스 ls",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ls"
  },
  {
      "name": "리눅스 lsattr",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lsattr"
  },
  {
      "name": "리눅스 lsdev",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lsdev"
  },
  {
      "name": "리눅스 lsmod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lsmod"
  },
  {
      "name": "리눅스 lsof",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lsof"
  },
  {
      "name": "리눅스 lspci",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lspci"
  },
  {
      "name": "리눅스 lsusb",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_lsusb"
  },
  {
      "name": "리눅스 make",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_make"
  },
  {
      "name": "리눅스 man",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_man"
  },
  {
      "name": "리눅스 md5sum",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_md5sum"
  },
  {
      "name": "리눅스 meminfo",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_meminfo"
  },
  {
      "name": "리눅스 mesg",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mesg"
  },
  {
      "name": "리눅스 mii-tool",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mii-tool"
  },
  {
      "name": "리눅스 mkdir",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mkdir"
  },
  {
      "name": "리눅스 mke2fs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mke2fs"
  },
  {
      "name": "리눅스 mkfifo",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mkfifo"
  },
  {
      "name": "리눅스 mkfs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mkfs"
  },
  {
      "name": "리눅스 mkswap",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mkswap"
  },
  {
      "name": "리눅스 mktemp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mktemp"
  },
  {
      "name": "리눅스 modinfo",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_modinfo"
  },
  {
      "name": "리눅스 modprobe",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_modprobe"
  },
  {
      "name": "리눅스 more",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_more"
  },
  {
      "name": "리눅스 mount",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_mount"
  },
  {
      "name": "리눅스 named.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_named.conf"
  },
  {
      "name": "리눅스 namei",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_namei"
  },
  {
      "name": "리눅스 nc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nc"
  },
  {
      "name": "리눅스 ndd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ndd"
  },
  {
      "name": "리눅스 netstat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_netstat"
  },
  {
      "name": "리눅스 newaliases",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_newaliases"
  },
  {
      "name": "리눅스 newgrp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_newgrp"
  },
  {
      "name": "리눅스 newusers",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_newusers"
  },
  {
      "name": "리눅스 nfsstat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nfsstat"
  },
  {
      "name": "리눅스 nice",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nice"
  },
  {
      "name": "리눅스 nl",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nl"
  },
  {
      "name": "리눅스 nm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nm"
  },
  {
      "name": "리눅스 nodejs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nodejs"
  },
  {
      "name": "리눅스 nohup",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nohup"
  },
  {
      "name": "리눅스 nslookup",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_nslookup"
  },
  {
      "name": "리눅스 ntp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ntp"
  },
  {
      "name": "리눅스 ntp.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ntp.conf"
  },
  {
      "name": "리눅스 ntsysv",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ntsysv"
  },
  {
      "name": "리눅스 objcopy",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_objcopy"
  },
  {
      "name": "리눅스 openvt",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_openvt"
  },
  {
      "name": "리눅스 parted",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_parted"
  },
  {
      "name": "리눅스 passwd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_passwd"
  },
  {
      "name": "리눅스 passwd(명령어)",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_passwd(%EB%AA%85%EB%A0%B9%EC%96%B4)"
  },
  {
      "name": "리눅스 passwd(파일)",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_passwd(%ED%8C%8C%EC%9D%BC)"
  },
  {
      "name": "리눅스 paste",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_paste"
  },
  {
      "name": "리눅스 pathchk",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pathchk"
  },
  {
      "name": "리눅스 pidof",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pidof"
  },
  {
      "name": "리눅스 ping",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ping"
  },
  {
      "name": "리눅스 pm2",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pm2"
  },
  {
      "name": "리눅스 portmap",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_portmap"
  },
  {
      "name": "리눅스 poweroff",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_poweroff"
  },
  {
      "name": "리눅스 pr",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pr"
  },
  {
      "name": "리눅스 praliases",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_praliases"
  }
]);
_itwiki = _itwiki.concat([
  {
      "name": "리눅스 printenv",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_printenv"
  },
  {
      "name": "리눅스 proc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_proc"
  },
  {
      "name": "리눅스 protocols",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_protocols"
  },
  {
      "name": "리눅스 prtconf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_prtconf"
  },
  {
      "name": "리눅스 prtdiag",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_prtdiag"
  },
  {
      "name": "리눅스 prtvtoc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_prtvtoc"
  },
  {
      "name": "리눅스 ps",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ps"
  },
  {
      "name": "리눅스 pstree",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pstree"
  },
  {
      "name": "리눅스 pwck",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pwck"
  },
  {
      "name": "리눅스 pwconv",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pwconv"
  },
  {
      "name": "리눅스 pwd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_pwd"
  },
  {
      "name": "리눅스 quota",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_quota"
  },
  {
      "name": "리눅스 ramsize",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ramsize"
  },
  {
      "name": "리눅스 ranlib",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ranlib"
  },
  {
      "name": "리눅스 rc.local",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rc.local"
  },
  {
      "name": "리눅스 rdate",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rdate"
  },
  {
      "name": "리눅스 readelf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_readelf"
  },
  {
      "name": "리눅스 readlink",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_readlink"
  },
  {
      "name": "리눅스 readom",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_readom"
  },
  {
      "name": "리눅스 readonly",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_readonly"
  },
  {
      "name": "리눅스 reboot",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_reboot"
  },
  {
      "name": "리눅스 renice",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_renice"
  },
  {
      "name": "리눅스 reset, tset",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_reset,_tset"
  },
  {
      "name": "리눅스 resize2fs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_resize2fs"
  },
  {
      "name": "리눅스 restore",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_restore"
  },
  {
      "name": "리눅스 rev",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rev"
  },
  {
      "name": "리눅스 rexec",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rexec"
  },
  {
      "name": "리눅스 rlogin",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rlogin"
  },
  {
      "name": "리눅스 rm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rm"
  },
  {
      "name": "리눅스 rmail",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rmail"
  },
  {
      "name": "리눅스 rmdir",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rmdir"
  },
  {
      "name": "리눅스 rmmod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rmmod"
  },
  {
      "name": "리눅스 rootflags",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rootflags"
  },
  {
      "name": "리눅스 route",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_route"
  },
  {
      "name": "리눅스 rpm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rpm"
  },
  {
      "name": "리눅스 rpm2cpio",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rpm2cpio"
  },
  {
      "name": "리눅스 rsh",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rsh"
  },
  {
      "name": "리눅스 rsync",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rsync"
  },
  {
      "name": "리눅스 rsyslog",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rsyslog"
  },
  {
      "name": "리눅스 rsyslog.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rsyslog.conf"
  },
  {
      "name": "리눅스 rsyslogd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_rsyslogd"
  },
  {
      "name": "리눅스 runlevel",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_runlevel"
  },
  {
      "name": "리눅스 samba",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_samba"
  },
  {
      "name": "리눅스 sane-find-scanner",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sane-find-scanner"
  },
  {
      "name": "리눅스 scanimage",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_scanimage"
  },
  {
      "name": "리눅스 scp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_scp"
  },
  {
      "name": "리눅스 screen",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_screen"
  },
  {
      "name": "리눅스 script",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_script"
  },
  {
      "name": "리눅스 sdiff",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sdiff"
  },
  {
      "name": "리눅스 securetty",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_securetty"
  },
  {
      "name": "리눅스 sendmail",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sendmail"
  },
  {
      "name": "리눅스 services",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_services"
  },
  {
      "name": "리눅스 setfdprm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_setfdprm"
  },
  {
      "name": "리눅스 setkeycodes",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_setkeycodes"
  },
  {
      "name": "리눅스 setsid",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_setsid"
  },
  {
      "name": "리눅스 setterm",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_setterm"
  },
  {
      "name": "리눅스 sh",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sh"
  },
  {
      "name": "리눅스 shadow",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_shadow"
  },
  {
      "name": "리눅스 shar",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_shar"
  },
  {
      "name": "리눅스 shell",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_shell"
  },
  {
      "name": "리눅스 showkey",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_showkey"
  },
  {
      "name": "리눅스 showmount",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_showmount"
  },
  {
      "name": "리눅스 shutdown",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_shutdown"
  },
  {
      "name": "리눅스 slabtop",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_slabtop"
  },
  {
      "name": "리눅스 slattach",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_slattach"
  },
  {
      "name": "리눅스 sleep",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sleep"
  },
  {
      "name": "리눅스 sort",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sort"
  },
  {
      "name": "리눅스 source",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_source"
  },
  {
      "name": "리눅스 split",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_split"
  },
  {
      "name": "리눅스 squid",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_squid"
  },
  {
      "name": "리눅스 squid.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_squid.conf"
  },
  {
      "name": "리눅스 ssh",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ssh"
  },
  {
      "name": "리눅스 stat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_stat"
  },
  {
      "name": "리눅스 strace",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_strace"
  },
  {
      "name": "리눅스 strings",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_strings"
  },
  {
      "name": "리눅스 strip",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_strip"
  },
  {
      "name": "리눅스 su",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_su"
  },
  {
      "name": "리눅스 sum",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sum"
  },
  {
      "name": "리눅스 swapoff",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_swapoff"
  },
  {
      "name": "리눅스 swapon",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_swapon"
  },
  {
      "name": "리눅스 sync",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_sync"
  },
  {
      "name": "리눅스 tac",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tac"
  },
  {
      "name": "리눅스 tail",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tail"
  },
  {
      "name": "리눅스 tailf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tailf"
  },
  {
      "name": "리눅스 talk",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_talk"
  },
  {
      "name": "리눅스 tar",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tar"
  },
  {
      "name": "리눅스 tcpdump",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tcpdump"
  },
  {
      "name": "리눅스 tee",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tee"
  },
  {
      "name": "리눅스 telinit",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_telinit"
  },
  {
      "name": "리눅스 telnet",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_telnet"
  },
  {
      "name": "리눅스 tload",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tload"
  },
  {
      "name": "리눅스 top",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_top"
  },
  {
      "name": "리눅스 touch",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_touch"
  },
  {
      "name": "리눅스 tr",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tr"
  },
  {
      "name": "리눅스 traceroute",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_traceroute"
  },
  {
      "name": "리눅스 tty",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tty"
  },
  {
      "name": "리눅스 tune2fs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_tune2fs"
  },
  {
      "name": "리눅스 ul",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ul"
  },
  {
      "name": "리눅스 ulimit",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ulimit"
  },
  {
      "name": "리눅스 umask",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_umask"
  },
  {
      "name": "리눅스 uname",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_uname"
  },
  {
      "name": "리눅스 uncompress",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_uncompress"
  },
  {
      "name": "리눅스 unexpand",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_unexpand"
  },
  {
      "name": "리눅스 uniq",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_uniq"
  },
  {
      "name": "리눅스 uptime",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_uptime"
  },
  {
      "name": "리눅스 useradd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_useradd"
  },
  {
      "name": "리눅스 userdel",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_userdel"
  },
  {
      "name": "리눅스 usermod",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_usermod"
  },
  {
      "name": "리눅스 users",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_users"
  },
  {
      "name": "리눅스 utmp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_utmp"
  },
  {
      "name": "리눅스 virtusertable",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_virtusertable"
  },
  {
      "name": "리눅스 vmstat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_vmstat"
  },
  {
      "name": "리눅스 vsftpd.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_vsftpd.conf"
  },
  {
      "name": "리눅스 w",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_w"
  },
  {
      "name": "리눅스 wall",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_wall"
  },
  {
      "name": "리눅스 watch",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_watch"
  },
  {
      "name": "리눅스 wc",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_wc"
  },
  {
      "name": "리눅스 wget",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_wget"
  },
  {
      "name": "리눅스 whatis",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_whatis"
  },
  {
      "name": "리눅스 whereis",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_whereis"
  },
  {
      "name": "리눅스 which",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_which"
  },
  {
      "name": "리눅스 who",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_who"
  },
  {
      "name": "리눅스 whoami",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_whoami"
  },
  {
      "name": "리눅스 whois",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_whois"
  },
  {
      "name": "리눅스 write",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_write"
  },
  {
      "name": "리눅스 wtmp",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_wtmp"
  },
  {
      "name": "리눅스 xargs",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_xargs"
  },
  {
      "name": "리눅스 xdpyinfo",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_xdpyinfo"
  },
  {
      "name": "리눅스 xev",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_xev"
  },
  {
      "name": "리눅스 xferlog",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_xferlog"
  },
  {
      "name": "리눅스 xinetd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_xinetd"
  },
  {
      "name": "리눅스 xinetd.conf",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_xinetd.conf"
  },
  {
      "name": "리눅스 ypbind",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ypbind"
  },
  {
      "name": "리눅스 ypcat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ypcat"
  },
  {
      "name": "리눅스 ypchfn",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ypchfn"
  },
  {
      "name": "리눅스 ypchsh",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ypchsh"
  },
  {
      "name": "리눅스 ypmatch",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ypmatch"
  },
  {
      "name": "리눅스 yppasswd",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_yppasswd"
  },
  {
      "name": "리눅스 yppoll",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_yppoll"
  },
  {
      "name": "리눅스 yppush",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_yppush"
  },
  {
      "name": "리눅스 ypserv",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_ypserv"
  },
  {
      "name": "리눅스 yum",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_yum"
  },
  {
      "name": "리눅스 zcat",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_zcat"
  },
  {
      "name": "리눅스 zdump",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_zdump"
  },
  {
      "name": "리눅스 zmore",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_zmore"
  },
  {
      "name": "리눅스 zone 파일",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_zone_%ED%8C%8C%EC%9D%BC"
  },
  {
      "name": "리눅스 권한",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EA%B6%8C%ED%95%9C"
  },
  {
      "name": "리눅스 기본 디렉터리",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EA%B8%B0%EB%B3%B8_%EB%94%94%EB%A0%89%ED%84%B0%EB%A6%AC"
  },
  {
      "name": "리눅스 기본 디렉토리",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EA%B8%B0%EB%B3%B8_%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC"
  },
  {
      "name": "리눅스 디렉토리",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC"
  },
  {
      "name": "리눅스 런레벨",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EB%9F%B0%EB%A0%88%EB%B2%A8"
  },
  {
      "name": "리눅스 배포판",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EB%B0%B0%ED%8F%AC%ED%8C%90"
  },
  {
      "name": "리눅스 부팅",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EB%B6%80%ED%8C%85"
  },
  {
      "name": "리눅스 삼바",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%82%BC%EB%B0%94"
  },
  {
      "name": "리눅스 셸",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%85%B8"
  },
  {
      "name": "리눅스 쉘",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%89%98"
  },
  {
      "name": "리눅스 시간",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%8B%9C%EA%B0%84"
  },
  {
      "name": "리눅스 유저 로그",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%9C%A0%EC%A0%80_%EB%A1%9C%EA%B7%B8"
  },
  {
      "name": "리눅스 출력",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%B6%9C%EB%A0%A5"
  },
  {
      "name": "리눅스 커널",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%EC%BB%A4%EB%84%90"
  },
  {
      "name": "리눅스 특수 권한",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8A%B9%EC%88%98_%EA%B6%8C%ED%95%9C"
  },
  {
      "name": "리눅스 특수권한",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8A%B9%EC%88%98%EA%B6%8C%ED%95%9C"
  },
  {
      "name": "리눅스 파일 시스템",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "리눅스 파일시스템",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8C%8C%EC%9D%BC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "리눅스 패스워드 복잡도",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C_%EB%B3%B5%EC%9E%A1%EB%8F%84"
  },
  {
      "name": "리눅스 퍼미션",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%8D%BC%EB%AF%B8%EC%85%98"
  },
  {
      "name": "리눅스 프로세스",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "리눅스 프린트",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%88%85%EC%8A%A4_%ED%94%84%EB%A6%B0%ED%8A%B8"
  },
  {
      "name": "리먼 소프트웨어 변화 법칙",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%A8%BC_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%B3%80%ED%99%94_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "리먼 소프트웨어 변화 원리",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%A8%BC_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%B3%80%ED%99%94_%EC%9B%90%EB%A6%AC"
  },
  {
      "name": "리버스 엔지니어링",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%B2%84%EC%8A%A4_%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81"
  },
  {
      "name": "리버스 텔넷",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%B2%84%EC%8A%A4_%ED%85%94%EB%84%B7"
  },
  {
      "name": "리브라",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%B8%8C%EB%9D%BC"
  },
  {
      "name": "리빙랩",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EB%B9%99%EB%9E%A9"
  },
  {
      "name": "리스크통제자가진단",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EC%8A%A4%ED%81%AC%ED%86%B5%EC%A0%9C%EC%9E%90%EA%B0%80%EC%A7%84%EB%8B%A8"
  },
  {
      "name": "리얼리티 마이닝",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EC%96%BC%EB%A6%AC%ED%8B%B0_%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "리처드슨 성숙도 모델",
      "url": "https://itwiki.kr/w/%EB%A6%AC%EC%B2%98%EB%93%9C%EC%8A%A8_%EC%84%B1%EC%88%99%EB%8F%84_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "리틀의 법칙",
      "url": "https://itwiki.kr/w/%EB%A6%AC%ED%8B%80%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "리패키징 공격",
      "url": "https://itwiki.kr/w/%EB%A6%AC%ED%8C%A8%ED%82%A4%EC%A7%95_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "리피터",
      "url": "https://itwiki.kr/w/%EB%A6%AC%ED%94%BC%ED%84%B0"
  },
  {
      "name": "릴레이션",
      "url": "https://itwiki.kr/w/%EB%A6%B4%EB%A0%88%EC%9D%B4%EC%85%98"
  },
  {
      "name": "릴루",
      "url": "https://itwiki.kr/w/%EB%A6%B4%EB%A3%A8"
  },
  {
      "name": "릴리즈 노트",
      "url": "https://itwiki.kr/w/%EB%A6%B4%EB%A6%AC%EC%A6%88_%EB%85%B8%ED%8A%B8"
  },
  {
      "name": "링커",
      "url": "https://itwiki.kr/w/%EB%A7%81%EC%BB%A4"
  },
  {
      "name": "링크 상태 라우팅",
      "url": "https://itwiki.kr/w/%EB%A7%81%ED%81%AC_%EC%83%81%ED%83%9C_%EB%9D%BC%EC%9A%B0%ED%8C%85"
  },
  {
      "name": "링크드 리스트",
      "url": "https://itwiki.kr/w/%EB%A7%81%ED%81%AC%EB%93%9C_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "마도",
      "url": "https://itwiki.kr/w/%EB%A7%88%EB%8F%84"
  },
  {
      "name": "마르코프 결정 과정",
      "url": "https://itwiki.kr/w/%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84_%EA%B2%B0%EC%A0%95_%EA%B3%BC%EC%A0%95"
  },
  {
      "name": "마르코프 결정 프로세스",
      "url": "https://itwiki.kr/w/%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84_%EA%B2%B0%EC%A0%95_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "마셜링",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%85%9C%EB%A7%81"
  },
  {
      "name": "마스터 데이터",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%8A%A4%ED%84%B0_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "마이데이터",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "마이데이터/부처별 추진 현황",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0/%EB%B6%80%EC%B2%98%EB%B3%84_%EC%B6%94%EC%A7%84_%ED%98%84%ED%99%A9"
  },
  {
      "name": "마이데이터/인허가 현황",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0/%EC%9D%B8%ED%97%88%EA%B0%80_%ED%98%84%ED%99%A9"
  },
  {
      "name": "마이데이터/정보제공자",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0/%EC%A0%95%EB%B3%B4%EC%A0%9C%EA%B3%B5%EC%9E%90"
  },
  {
      "name": "마이데이터 발전 단계",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B0%9C%EC%A0%84_%EB%8B%A8%EA%B3%84"
  },
  {
      "name": "마이크로 서비스 아키텍처",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C_%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "마이크로 오퍼레이션",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C_%EC%98%A4%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98"
  },
  {
      "name": "마이크로서비스",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4"
  },
  {
      "name": "마코프 결정 과정",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%BD%94%ED%94%84_%EA%B2%B0%EC%A0%95_%EA%B3%BC%EC%A0%95"
  },
  {
      "name": "마코프 결정 프로세스",
      "url": "https://itwiki.kr/w/%EB%A7%88%EC%BD%94%ED%94%84_%EA%B2%B0%EC%A0%95_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "마크업 언어",
      "url": "https://itwiki.kr/w/%EB%A7%88%ED%81%AC%EC%97%85_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "망 중립성",
      "url": "https://itwiki.kr/w/%EB%A7%9D_%EC%A4%91%EB%A6%BD%EC%84%B1"
  },
  {
      "name": "망분리",
      "url": "https://itwiki.kr/w/%EB%A7%9D%EB%B6%84%EB%A6%AC"
  },
  {
      "name": "망중립성",
      "url": "https://itwiki.kr/w/%EB%A7%9D%EC%A4%91%EB%A6%BD%EC%84%B1"
  },
  {
      "name": "매트릭스 조직",
      "url": "https://itwiki.kr/w/%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%EC%A1%B0%EC%A7%81"
  },
  {
      "name": "맥 플러딩",
      "url": "https://itwiki.kr/w/%EB%A7%A5_%ED%94%8C%EB%9F%AC%EB%94%A9"
  },
  {
      "name": "맨먼스",
      "url": "https://itwiki.kr/w/%EB%A7%A8%EB%A8%BC%EC%8A%A4"
  },
  {
      "name": "맴캐시드",
      "url": "https://itwiki.kr/w/%EB%A7%B4%EC%BA%90%EC%8B%9C%EB%93%9C"
  },
  {
      "name": "맴케시드",
      "url": "https://itwiki.kr/w/%EB%A7%B4%EC%BC%80%EC%8B%9C%EB%93%9C"
  },
  {
      "name": "맵리듀스",
      "url": "https://itwiki.kr/w/%EB%A7%B5%EB%A6%AC%EB%93%80%EC%8A%A4"
  },
  {
      "name": "머신 러닝",
      "url": "https://itwiki.kr/w/%EB%A8%B8%EC%8B%A0_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "머신러닝",
      "url": "https://itwiki.kr/w/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "머신러닝 파이프라인",
      "url": "https://itwiki.kr/w/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D_%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "머클 트리",
      "url": "https://itwiki.kr/w/%EB%A8%B8%ED%81%B4_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "멀버타이징",
      "url": "https://itwiki.kr/w/%EB%A9%80%EB%B2%84%ED%83%80%EC%9D%B4%EC%A7%95"
  },
  {
      "name": "멀웨어",
      "url": "https://itwiki.kr/w/%EB%A9%80%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "멀티 링크드 리스트",
      "url": "https://itwiki.kr/w/%EB%A9%80%ED%8B%B0_%EB%A7%81%ED%81%AC%EB%93%9C_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "멀티 클라우드",
      "url": "https://itwiki.kr/w/%EB%A9%80%ED%8B%B0_%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C"
  },
  {
      "name": "멀티 프로그래밍",
      "url": "https://itwiki.kr/w/%EB%A9%80%ED%8B%B0_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D"
  },
  {
      "name": "멀티미디어",
      "url": "https://itwiki.kr/w/%EB%A9%80%ED%8B%B0%EB%AF%B8%EB%94%94%EC%96%B4"
  },
  {
      "name": "멀티클라우드",
      "url": "https://itwiki.kr/w/%EB%A9%80%ED%8B%B0%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C"
  },
  {
      "name": "멀티플렉싱",
      "url": "https://itwiki.kr/w/%EB%A9%80%ED%8B%B0%ED%94%8C%EB%A0%89%EC%8B%B1"
  },
  {
      "name": "메모리 데이터베이스",
      "url": "https://itwiki.kr/w/%EB%A9%94%EB%AA%A8%EB%A6%AC_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "메모리 영역",
      "url": "https://itwiki.kr/w/%EB%A9%94%EB%AA%A8%EB%A6%AC_%EC%98%81%EC%97%AD"
  },
  {
      "name": "메모리 인터리빙",
      "url": "https://itwiki.kr/w/%EB%A9%94%EB%AA%A8%EB%A6%AC_%EC%9D%B8%ED%84%B0%EB%A6%AC%EB%B9%99"
  },
  {
      "name": "메모리 할당",
      "url": "https://itwiki.kr/w/%EB%A9%94%EB%AA%A8%EB%A6%AC_%ED%95%A0%EB%8B%B9"
  },
  {
      "name": "메세지",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%84%B8%EC%A7%80"
  },
  {
      "name": "메세지 인증 코드",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%84%B8%EC%A7%80_%EC%9D%B8%EC%A6%9D_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "메세지와 메시지",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%84%B8%EC%A7%80%EC%99%80_%EB%A9%94%EC%8B%9C%EC%A7%80"
  },
  {
      "name": "메세지인증코드",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%84%B8%EC%A7%80%EC%9D%B8%EC%A6%9D%EC%BD%94%EB%93%9C"
  },
  {
      "name": "메시지 다이제스트",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%8B%9C%EC%A7%80_%EB%8B%A4%EC%9D%B4%EC%A0%9C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "메시지 인증",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%8B%9C%EC%A7%80_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "메시지 인증 코드",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%8B%9C%EC%A7%80_%EC%9D%B8%EC%A6%9D_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "메시지와 메세지",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%8B%9C%EC%A7%80%EC%99%80_%EB%A9%94%EC%84%B8%EC%A7%80"
  },
  {
      "name": "메시지인증코드",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%8B%9C%EC%A7%80%EC%9D%B8%EC%A6%9D%EC%BD%94%EB%93%9C"
  },
  {
      "name": "메인 메모리 데이터베이스",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%9D%B8_%EB%A9%94%EB%AA%A8%EB%A6%AC_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "메일 밤",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%9D%BC_%EB%B0%A4"
  },
  {
      "name": "메젱포",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%A0%B1%ED%8F%AC"
  },
  {
      "name": "메젱포 프로젝트",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%A0%B1%ED%8F%AC_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
  },
  {
      "name": "메커니즘과 매커니즘",
      "url": "https://itwiki.kr/w/%EB%A9%94%EC%BB%A4%EB%8B%88%EC%A6%98%EA%B3%BC_%EB%A7%A4%EC%BB%A4%EB%8B%88%EC%A6%98"
  },
  {
      "name": "메타 데이터",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "메타 러닝",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "메타 인지",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80_%EC%9D%B8%EC%A7%80"
  },
  {
      "name": "메타 학습",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "메타데이터",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "메타러닝",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "메타버스",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80%EB%B2%84%EC%8A%A4"
  },
  {
      "name": "메타학습",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%83%80%ED%95%99%EC%8A%B5"
  },
  {
      "name": "메트릭",
      "url": "https://itwiki.kr/w/%EB%A9%94%ED%8A%B8%EB%A6%AD"
  },
  {
      "name": "멜트 다운",
      "url": "https://itwiki.kr/w/%EB%A9%9C%ED%8A%B8_%EB%8B%A4%EC%9A%B4"
  },
  {
      "name": "멜트다운",
      "url": "https://itwiki.kr/w/%EB%A9%9C%ED%8A%B8%EB%8B%A4%EC%9A%B4"
  },
  {
      "name": "멤캐시드",
      "url": "https://itwiki.kr/w/%EB%A9%A4%EC%BA%90%EC%8B%9C%EB%93%9C"
  },
  {
      "name": "멤케시드",
      "url": "https://itwiki.kr/w/%EB%A9%A4%EC%BC%80%EC%8B%9C%EB%93%9C"
  },
  {
      "name": "멧칼프의 법칙",
      "url": "https://itwiki.kr/w/%EB%A9%A7%EC%B9%BC%ED%94%84%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "명목 집단 기법",
      "url": "https://itwiki.kr/w/%EB%AA%85%EB%AA%A9_%EC%A7%91%EB%8B%A8_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "명세 기반 테스트",
      "url": "https://itwiki.kr/w/%EB%AA%85%EC%84%B8_%EA%B8%B0%EB%B0%98_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "모놀로틱 아키텍처",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%86%80%EB%A1%9C%ED%8B%B1_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "모놀리틱 아키텍처",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%86%80%EB%A6%AC%ED%8B%B1_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "모니터(동시성 제어)",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%8B%88%ED%84%B0(%EB%8F%99%EC%8B%9C%EC%84%B1_%EC%A0%9C%EC%96%B4)"
  },
  {
      "name": "모델",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "모델 주도 개발",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%8D%B8_%EC%A3%BC%EB%8F%84_%EA%B0%9C%EB%B0%9C"
  },
  {
      "name": "모델 주도 아키텍처",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%8D%B8_%EC%A3%BC%EB%8F%84_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "모뎀",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%8E%80"
  },
  {
      "name": "모듈",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%93%88"
  },
  {
      "name": "모듈화",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%93%88%ED%99%94"
  },
  {
      "name": "모랄 머신",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%9E%84_%EB%A8%B8%EC%8B%A0"
  },
  {
      "name": "모바일 FSO",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%B0%94%EC%9D%BC_FSO"
  },
  {
      "name": "모바일 신분증",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%8B%A0%EB%B6%84%EC%A6%9D"
  },
  {
      "name": "모바일 엣지 컴퓨팅",
      "url": "https://itwiki.kr/w/%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%97%A3%EC%A7%80_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "목적 프로그램",
      "url": "https://itwiki.kr/w/%EB%AA%A9%EC%A0%81_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "몬테카를로 시뮬레이션",
      "url": "https://itwiki.kr/w/%EB%AA%AC%ED%85%8C%EC%B9%B4%EB%A5%BC%EB%A1%9C_%EC%8B%9C%EB%AE%AC%EB%A0%88%EC%9D%B4%EC%85%98"
  },
  {
      "name": "무결성",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EA%B2%B0%EC%84%B1"
  },
  {
      "name": "무결성 제약 조건",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EA%B2%B0%EC%84%B1_%EC%A0%9C%EC%95%BD_%EC%A1%B0%EA%B1%B4"
  },
  {
      "name": "무결성 제약조건",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EA%B2%B0%EC%84%B1_%EC%A0%9C%EC%95%BD%EC%A1%B0%EA%B1%B4"
  },
  {
      "name": "무방향 그래프",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EB%B0%A9%ED%96%A5_%EA%B7%B8%EB%9E%98%ED%94%84"
  },
  {
      "name": "무선 네트워크",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EC%84%A0_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "무선 애플리케이션 프로토콜",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EC%84%A0_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "무어의 법칙",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EC%96%B4%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "무자각 인증",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EC%9E%90%EA%B0%81_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "무차별 대입 공격",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EC%B0%A8%EB%B3%84_%EB%8C%80%EC%9E%85_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "무차별대입공격",
      "url": "https://itwiki.kr/w/%EB%AC%B4%EC%B0%A8%EB%B3%84%EB%8C%80%EC%9E%85%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "문맥",
      "url": "https://itwiki.kr/w/%EB%AC%B8%EB%A7%A5"
  },
  {
      "name": "미국 NSTB",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EA%B5%AD_NSTB"
  },
  {
      "name": "미국 국립표준기술연구소",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EA%B5%AD_%EA%B5%AD%EB%A6%BD%ED%91%9C%EC%A4%80%EA%B8%B0%EC%88%A0%EC%97%B0%EA%B5%AC%EC%86%8C"
  },
  {
      "name": "미국 연방 행정조직",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EA%B5%AD_%EC%97%B0%EB%B0%A9_%ED%96%89%EC%A0%95%EC%A1%B0%EC%A7%81"
  },
  {
      "name": "미들웨어",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "미디어위키 deleteBatch.php",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EB%94%94%EC%96%B4%EC%9C%84%ED%82%A4_deleteBatch.php"
  },
  {
      "name": "미디어위키 파일 캐시",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EB%94%94%EC%96%B4%EC%9C%84%ED%82%A4_%ED%8C%8C%EC%9D%BC_%EC%BA%90%EC%8B%9C"
  },
  {
      "name": "미스포레스트",
      "url": "https://itwiki.kr/w/%EB%AF%B8%EC%8A%A4%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "민감 정보",
      "url": "https://itwiki.kr/w/%EB%AF%BC%EA%B0%90_%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "바운스 공격",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9A%B4%EC%8A%A4_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "바이너리 디핑",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC_%EB%94%94%ED%95%91"
  },
  {
      "name": "바이너리 코드",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "바이러스",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EB%9F%AC%EC%8A%A4"
  },
  {
      "name": "바이오 인식",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4_%EC%9D%B8%EC%8B%9D"
  },
  {
      "name": "바이오 인증",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "바이오 정보",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4_%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "바이오인식",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4%EC%9D%B8%EC%8B%9D"
  },
  {
      "name": "바이오인증",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "바이오인증/지문",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4%EC%9D%B8%EC%A6%9D/%EC%A7%80%EB%AC%B8"
  },
  {
      "name": "바이오정보",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%98%A4%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "바이콰이너리 코드",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%EC%BD%B0%EC%9D%B4%EB%84%88%EB%A6%AC_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "바이트",
      "url": "https://itwiki.kr/w/%EB%B0%94%EC%9D%B4%ED%8A%B8"
  },
  {
      "name": "박스 플롯",
      "url": "https://itwiki.kr/w/%EB%B0%95%EC%8A%A4_%ED%94%8C%EB%A1%AF"
  },
  {
      "name": "박스플롯",
      "url": "https://itwiki.kr/w/%EB%B0%95%EC%8A%A4%ED%94%8C%EB%A1%AF"
  },
  {
      "name": "반 정규화",
      "url": "https://itwiki.kr/w/%EB%B0%98_%EC%A0%95%EA%B7%9C%ED%99%94"
  },
  {
      "name": "반가산기",
      "url": "https://itwiki.kr/w/%EB%B0%98%EA%B0%80%EC%82%B0%EA%B8%B0"
  },
  {
      "name": "반복 점증적 개발",
      "url": "https://itwiki.kr/w/%EB%B0%98%EB%B3%B5_%EC%A0%90%EC%A6%9D%EC%A0%81_%EA%B0%9C%EB%B0%9C"
  },
  {
      "name": "반정규화",
      "url": "https://itwiki.kr/w/%EB%B0%98%EC%A0%95%EA%B7%9C%ED%99%94"
  },
  {
      "name": "반정형 데이터",
      "url": "https://itwiki.kr/w/%EB%B0%98%EC%A0%95%ED%98%95_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "방송통신위원회",
      "url": "https://itwiki.kr/w/%EB%B0%A9%EC%86%A1%ED%86%B5%EC%8B%A0%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "방화벽",
      "url": "https://itwiki.kr/w/%EB%B0%A9%ED%99%94%EB%B2%BD"
  },
  {
      "name": "방화벽 부하 분산",
      "url": "https://itwiki.kr/w/%EB%B0%A9%ED%99%94%EB%B2%BD_%EB%B6%80%ED%95%98_%EB%B6%84%EC%82%B0"
  },
  {
      "name": "배드 블록",
      "url": "https://itwiki.kr/w/%EB%B0%B0%EB%93%9C_%EB%B8%94%EB%A1%9D"
  },
  {
      "name": "배치 처리",
      "url": "https://itwiki.kr/w/%EB%B0%B0%EC%B9%98_%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "백 오리피스",
      "url": "https://itwiki.kr/w/%EB%B0%B1_%EC%98%A4%EB%A6%AC%ED%94%BC%EC%8A%A4"
  },
  {
      "name": "백도어",
      "url": "https://itwiki.kr/w/%EB%B0%B1%EB%8F%84%EC%96%B4"
  },
  {
      "name": "백오리피스",
      "url": "https://itwiki.kr/w/%EB%B0%B1%EC%98%A4%EB%A6%AC%ED%94%BC%EC%8A%A4"
  },
  {
      "name": "버그 바운티",
      "url": "https://itwiki.kr/w/%EB%B2%84%EA%B7%B8_%EB%B0%94%EC%9A%B4%ED%8B%B0"
  },
  {
      "name": "버블 정렬",
      "url": "https://itwiki.kr/w/%EB%B2%84%EB%B8%94_%EC%A0%95%EB%A0%AC"
  },
  {
      "name": "버전 관리",
      "url": "https://itwiki.kr/w/%EB%B2%84%EC%A0%84_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "버전 관리 시스템",
      "url": "https://itwiki.kr/w/%EB%B2%84%EC%A0%84_%EA%B4%80%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "버트",
      "url": "https://itwiki.kr/w/%EB%B2%84%ED%8A%B8"
  },
  {
      "name": "버퍼 오버플로",
      "url": "https://itwiki.kr/w/%EB%B2%84%ED%8D%BC_%EC%98%A4%EB%B2%84%ED%94%8C%EB%A1%9C"
  },
  {
      "name": "버퍼 오버플로우",
      "url": "https://itwiki.kr/w/%EB%B2%84%ED%8D%BC_%EC%98%A4%EB%B2%84%ED%94%8C%EB%A1%9C%EC%9A%B0"
  },
  {
      "name": "버퍼링",
      "url": "https://itwiki.kr/w/%EB%B2%84%ED%8D%BC%EB%A7%81"
  },
  {
      "name": "번다운 차트",
      "url": "https://itwiki.kr/w/%EB%B2%88%EB%8B%A4%EC%9A%B4_%EC%B0%A8%ED%8A%B8"
  },
  {
      "name": "번역기",
      "url": "https://itwiki.kr/w/%EB%B2%88%EC%97%AD%EA%B8%B0"
  },
  {
      "name": "범정부 DRM",
      "url": "https://itwiki.kr/w/%EB%B2%94%EC%A0%95%EB%B6%80_DRM"
  },
  {
      "name": "베어 메탈",
      "url": "https://itwiki.kr/w/%EB%B2%A0%EC%96%B4_%EB%A9%94%ED%83%88"
  },
  {
      "name": "베어메탈",
      "url": "https://itwiki.kr/w/%EB%B2%A0%EC%96%B4%EB%A9%94%ED%83%88"
  },
  {
      "name": "베이즈 정리",
      "url": "https://itwiki.kr/w/%EB%B2%A0%EC%9D%B4%EC%A6%88_%EC%A0%95%EB%A6%AC"
  },
  {
      "name": "벨-라파둘라 모델",
      "url": "https://itwiki.kr/w/%EB%B2%A8-%EB%9D%BC%ED%8C%8C%EB%91%98%EB%9D%BC_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "벨 라파둘라",
      "url": "https://itwiki.kr/w/%EB%B2%A8_%EB%9D%BC%ED%8C%8C%EB%91%98%EB%9D%BC"
  },
  {
      "name": "벨 라파듈라",
      "url": "https://itwiki.kr/w/%EB%B2%A8_%EB%9D%BC%ED%8C%8C%EB%93%88%EB%9D%BC"
  },
  {
      "name": "변경 관리 위원회",
      "url": "https://itwiki.kr/w/%EB%B3%80%EA%B2%BD_%EA%B4%80%EB%A6%AC_%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "변경 용이성",
      "url": "https://itwiki.kr/w/%EB%B3%80%EA%B2%BD_%EC%9A%A9%EC%9D%B4%EC%84%B1"
  },
  {
      "name": "변경 조건/결정 커버리지",
      "url": "https://itwiki.kr/w/%EB%B3%80%EA%B2%BD_%EC%A1%B0%EA%B1%B4/%EA%B2%B0%EC%A0%95_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "변경용이성",
      "url": "https://itwiki.kr/w/%EB%B3%80%EA%B2%BD%EC%9A%A9%EC%9D%B4%EC%84%B1"
  },
  {
      "name": "변형 억제 모듈",
      "url": "https://itwiki.kr/w/%EB%B3%80%ED%98%95_%EC%96%B5%EC%A0%9C_%EB%AA%A8%EB%93%88"
  },
  {
      "name": "보수기",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%88%98%EA%B8%B0"
  },
  {
      "name": "보안",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88"
  },
  {
      "name": "보안 OS",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_OS"
  },
  {
      "name": "보안 계정 관리자",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%EA%B3%84%EC%A0%95_%EA%B4%80%EB%A6%AC%EC%9E%90"
  }
]);
_itwiki = _itwiki.concat([
  {
      "name": "보안 공격",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "보안 관제",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%EA%B4%80%EC%A0%9C"
  },
  {
      "name": "보안 내재화",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%EB%82%B4%EC%9E%AC%ED%99%94"
  },
  {
      "name": "보안 도구",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "보안 테스트",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "보안 패러다임",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88_%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84"
  },
  {
      "name": "보안공격",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "보안성",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88%EC%84%B1"
  },
  {
      "name": "보안의 3요소",
      "url": "https://itwiki.kr/w/%EB%B3%B4%EC%95%88%EC%9D%98_3%EC%9A%94%EC%86%8C"
  },
  {
      "name": "복구 목표",
      "url": "https://itwiki.kr/w/%EB%B3%B5%EA%B5%AC_%EB%AA%A9%ED%91%9C"
  },
  {
      "name": "복호화",
      "url": "https://itwiki.kr/w/%EB%B3%B5%ED%98%B8%ED%99%94"
  },
  {
      "name": "봇넷",
      "url": "https://itwiki.kr/w/%EB%B4%87%EB%84%B7"
  },
  {
      "name": "부르트포스",
      "url": "https://itwiki.kr/w/%EB%B6%80%EB%A5%B4%ED%8A%B8%ED%8F%AC%EC%8A%A4"
  },
  {
      "name": "부분 최적화",
      "url": "https://itwiki.kr/w/%EB%B6%80%EB%B6%84_%EC%B5%9C%EC%A0%81%ED%99%94"
  },
  {
      "name": "부인 방지",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%9D%B8_%EB%B0%A9%EC%A7%80"
  },
  {
      "name": "부인방지",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%9D%B8%EB%B0%A9%EC%A7%80"
  },
  {
      "name": "부적합",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%A0%81%ED%95%A9"
  },
  {
      "name": "부적합 문제",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%A0%81%ED%95%A9_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "부질의",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%A7%88%EC%9D%98"
  },
  {
      "name": "부채비율",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%B1%84%EB%B9%84%EC%9C%A8"
  },
  {
      "name": "부치 분석 방법",
      "url": "https://itwiki.kr/w/%EB%B6%80%EC%B9%98_%EB%B6%84%EC%84%9D_%EB%B0%A9%EB%B2%95"
  },
  {
      "name": "부트스트랩 5",
      "url": "https://itwiki.kr/w/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9_5"
  },
  {
      "name": "부하 분산",
      "url": "https://itwiki.kr/w/%EB%B6%80%ED%95%98_%EB%B6%84%EC%82%B0"
  },
  {
      "name": "분기 예측",
      "url": "https://itwiki.kr/w/%EB%B6%84%EA%B8%B0_%EC%98%88%EC%B8%A1"
  },
  {
      "name": "분리 발주",
      "url": "https://itwiki.kr/w/%EB%B6%84%EB%A6%AC_%EB%B0%9C%EC%A3%BC"
  },
  {
      "name": "분산ID",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0ID"
  },
  {
      "name": "분산 ID",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_ID"
  },
  {
      "name": "분산 데이터베이스",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "분산 서비스 거부 공격",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_%EC%84%9C%EB%B9%84%EC%8A%A4_%EA%B1%B0%EB%B6%80_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "분산 식별자",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_%EC%8B%9D%EB%B3%84%EC%9E%90"
  },
  {
      "name": "분산 운영체제",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C"
  },
  {
      "name": "분산 처리 시스템",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_%EC%B2%98%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "분산 파일시스템",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0_%ED%8C%8C%EC%9D%BC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "분산처리 시스템",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0%EC%B2%98%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "분산처리시스템",
      "url": "https://itwiki.kr/w/%EB%B6%84%EC%82%B0%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "분할 발주",
      "url": "https://itwiki.kr/w/%EB%B6%84%ED%95%A0_%EB%B0%9C%EC%A3%BC"
  },
  {
      "name": "분할발주",
      "url": "https://itwiki.kr/w/%EB%B6%84%ED%95%A0%EB%B0%9C%EC%A3%BC"
  },
  {
      "name": "브랜치스콥",
      "url": "https://itwiki.kr/w/%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%8A%A4%EC%BD%A5"
  },
  {
      "name": "브레너의 빗자루",
      "url": "https://itwiki.kr/w/%EB%B8%8C%EB%A0%88%EB%84%88%EC%9D%98_%EB%B9%97%EC%9E%90%EB%A3%A8"
  },
  {
      "name": "브로커 아키텍처 스타일",
      "url": "https://itwiki.kr/w/%EB%B8%8C%EB%A1%9C%EC%BB%A4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EC%8A%A4%ED%83%80%EC%9D%BC"
  },
  {
      "name": "브리지",
      "url": "https://itwiki.kr/w/%EB%B8%8C%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "브리지와 브릿지",
      "url": "https://itwiki.kr/w/%EB%B8%8C%EB%A6%AC%EC%A7%80%EC%99%80_%EB%B8%8C%EB%A6%BF%EC%A7%80"
  },
  {
      "name": "브릿지",
      "url": "https://itwiki.kr/w/%EB%B8%8C%EB%A6%BF%EC%A7%80"
  },
  {
      "name": "블라인드 SQL 인젝션",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%9D%BC%EC%9D%B8%EB%93%9C_SQL_%EC%9D%B8%EC%A0%9D%EC%85%98"
  },
  {
      "name": "블랙박스 테스트",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%9E%99%EB%B0%95%EC%8A%A4_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "블록",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D"
  },
  {
      "name": "블록 암호",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D_%EC%95%94%ED%98%B8"
  },
  {
      "name": "블록 암호 공격",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D_%EC%95%94%ED%98%B8_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "블록 암호 모드",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D_%EC%95%94%ED%98%B8_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "블록 체인",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D_%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "블록암호",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%95%94%ED%98%B8"
  },
  {
      "name": "블록암호 공격",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%95%94%ED%98%B8_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "블록암호 모드",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%95%94%ED%98%B8_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "블록체인",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "블록체인 PoS",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_PoS"
  },
  {
      "name": "블록체인 노드",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%EB%85%B8%EB%93%9C"
  },
  {
      "name": "블록체인 보안",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%EB%B3%B4%EC%95%88"
  },
  {
      "name": "블록체인 블록",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%EB%B8%94%EB%A1%9D"
  },
  {
      "name": "블록체인 완결성",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%EC%99%84%EA%B2%B0%EC%84%B1"
  },
  {
      "name": "블록체인 포크",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%ED%8F%AC%ED%81%AC"
  },
  {
      "name": "블록체인 합의",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%ED%95%A9%EC%9D%98"
  },
  {
      "name": "블록체인 확장성",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8_%ED%99%95%EC%9E%A5%EC%84%B1"
  },
  {
      "name": "블루 버튼",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A3%A8_%EB%B2%84%ED%8A%BC"
  },
  {
      "name": "블루프린팅",
      "url": "https://itwiki.kr/w/%EB%B8%94%EB%A3%A8%ED%94%84%EB%A6%B0%ED%8C%85"
  },
  {
      "name": "비대면",
      "url": "https://itwiki.kr/w/%EB%B9%84%EB%8C%80%EB%A9%B4"
  },
  {
      "name": "비동기식 전송",
      "url": "https://itwiki.kr/w/%EB%B9%84%EB%8F%99%EA%B8%B0%EC%8B%9D_%EC%A0%84%EC%86%A1"
  },
  {
      "name": "비밀번호",
      "url": "https://itwiki.kr/w/%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8"
  },
  {
      "name": "비바 무결성 모델",
      "url": "https://itwiki.kr/w/%EB%B9%84%EB%B0%94_%EB%AC%B4%EA%B2%B0%EC%84%B1_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "비상 대응 계획",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%83%81_%EB%8C%80%EC%9D%91_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "비선점 스케줄링",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%84%A0%EC%A0%90_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "비순차적 명령어 처리",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%88%9C%EC%B0%A8%EC%A0%81_%EB%AA%85%EB%A0%B9%EC%96%B4_%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "비연결형 프로토콜",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%97%B0%EA%B2%B0%ED%98%95_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "비잔틴 장애 허용",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%9E%94%ED%8B%B4_%EC%9E%A5%EC%95%A0_%ED%97%88%EC%9A%A9"
  },
  {
      "name": "비정형 데이터",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%A0%95%ED%98%95_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "비즈니스 룰 엔진",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_%EB%A3%B0_%EC%97%94%EC%A7%84"
  },
  {
      "name": "비즈니스 연속성 계획",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_%EC%97%B0%EC%86%8D%EC%84%B1_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "비즈니스 인텔리전스",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_%EC%9D%B8%ED%85%94%EB%A6%AC%EC%A0%84%EC%8A%A4"
  },
  {
      "name": "비즈니스 프로세스",
      "url": "https://itwiki.kr/w/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "비트로커",
      "url": "https://itwiki.kr/w/%EB%B9%84%ED%8A%B8%EB%A1%9C%EC%BB%A4"
  },
  {
      "name": "비트맵 인덱스",
      "url": "https://itwiki.kr/w/%EB%B9%84%ED%8A%B8%EB%A7%B5_%EC%9D%B8%EB%8D%B1%EC%8A%A4"
  },
  {
      "name": "비트코인",
      "url": "https://itwiki.kr/w/%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8"
  },
  {
      "name": "비표",
      "url": "https://itwiki.kr/w/%EB%B9%84%ED%91%9C"
  },
  {
      "name": "빅데이터",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "빅데이터 분석",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "빅데이터 분석 기사",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EA%B8%B0%EC%82%AC"
  },
  {
      "name": "빅데이터 분석기사",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D%EA%B8%B0%EC%82%AC"
  },
  {
      "name": "빅데이터분석기사",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EA%B8%B0%EC%82%AC"
  },
  {
      "name": "빅데이터분석기사 1회",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EA%B8%B0%EC%82%AC_1%ED%9A%8C"
  },
  {
      "name": "빅데이터분석기사 2회",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EA%B8%B0%EC%82%AC_2%ED%9A%8C"
  },
  {
      "name": "빅블러",
      "url": "https://itwiki.kr/w/%EB%B9%85%EB%B8%94%EB%9F%AC"
  },
  {
      "name": "빅테크",
      "url": "https://itwiki.kr/w/%EB%B9%85%ED%85%8C%ED%81%AC"
  },
  {
      "name": "빌드",
      "url": "https://itwiki.kr/w/%EB%B9%8C%EB%93%9C"
  },
  {
      "name": "사설 IP",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%84%A4_IP"
  },
  {
      "name": "사업관리위탁",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%97%85%EA%B4%80%EB%A6%AC%EC%9C%84%ED%83%81"
  },
  {
      "name": "사용 용이성",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9A%A9_%EC%9A%A9%EC%9D%B4%EC%84%B1"
  },
  {
      "name": "사용성",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9A%A9%EC%84%B1"
  },
  {
      "name": "사용자 인터페이스",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9A%A9%EC%9E%90_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4"
  },
  {
      "name": "사용편의성",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9A%A9%ED%8E%B8%EC%9D%98%EC%84%B1"
  },
  {
      "name": "사용하지 않는 분류 모두 지우기",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80_%EC%95%8A%EB%8A%94_%EB%B6%84%EB%A5%98_%EB%AA%A8%EB%91%90_%EC%A7%80%EC%9A%B0%EA%B8%B0"
  },
  {
      "name": "사이버-물리 시스템",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%EB%B2%84-%EB%AC%BC%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "사이버 물리 시스템",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%EB%B2%84_%EB%AC%BC%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "사이버 킬 체인",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%EB%B2%84_%ED%82%AC_%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "사이버물리시스템",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%EB%B2%84%EB%AC%BC%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "사이버위기 경보",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%EB%B2%84%EC%9C%84%EA%B8%B0_%EA%B2%BD%EB%B3%B4"
  },
  {
      "name": "사이버킬체인",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%EB%B2%84%ED%82%AC%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "사이클 스틸",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%ED%81%B4_%EC%8A%A4%ED%8B%B8"
  },
  {
      "name": "사이클론 모델",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%ED%81%B4%EB%A1%A0_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "사이트 신뢰성 엔지니어링",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%8B%A0%EB%A2%B0%EC%84%B1_%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81"
  },
  {
      "name": "사이트맵 생성",
      "url": "https://itwiki.kr/w/%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A7%B5_%EC%83%9D%EC%84%B1"
  },
  {
      "name": "산업 혁명",
      "url": "https://itwiki.kr/w/%EC%82%B0%EC%97%85_%ED%98%81%EB%AA%85"
  },
  {
      "name": "산업혁명",
      "url": "https://itwiki.kr/w/%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85"
  },
  {
      "name": "상관관계 분석",
      "url": "https://itwiki.kr/w/%EC%83%81%EA%B4%80%EA%B4%80%EA%B3%84_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "상용SW 직접구매 제도",
      "url": "https://itwiki.kr/w/%EC%83%81%EC%9A%A9SW_%EC%A7%81%EC%A0%91%EA%B5%AC%EB%A7%A4_%EC%A0%9C%EB%8F%84"
  },
  {
      "name": "상자 그림",
      "url": "https://itwiki.kr/w/%EC%83%81%EC%9E%90_%EA%B7%B8%EB%A6%BC"
  },
  {
      "name": "상자 수염 그림",
      "url": "https://itwiki.kr/w/%EC%83%81%EC%9E%90_%EC%88%98%EC%97%BC_%EA%B7%B8%EB%A6%BC"
  },
  {
      "name": "상주감리",
      "url": "https://itwiki.kr/w/%EC%83%81%EC%A3%BC%EA%B0%90%EB%A6%AC"
  },
  {
      "name": "상하단 코딩",
      "url": "https://itwiki.kr/w/%EC%83%81%ED%95%98%EB%8B%A8_%EC%BD%94%EB%94%A9"
  },
  {
      "name": "상호 인증",
      "url": "https://itwiki.kr/w/%EC%83%81%ED%98%B8_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "상호배제",
      "url": "https://itwiki.kr/w/%EC%83%81%ED%98%B8%EB%B0%B0%EC%A0%9C"
  },
  {
      "name": "샌드박스",
      "url": "https://itwiki.kr/w/%EC%83%8C%EB%93%9C%EB%B0%95%EC%8A%A4"
  },
  {
      "name": "생일 공격",
      "url": "https://itwiki.kr/w/%EC%83%9D%EC%9D%BC_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "생일 문제",
      "url": "https://itwiki.kr/w/%EC%83%9D%EC%9D%BC_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "생체 인증",
      "url": "https://itwiki.kr/w/%EC%83%9D%EC%B2%B4_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "생체인식",
      "url": "https://itwiki.kr/w/%EC%83%9D%EC%B2%B4%EC%9D%B8%EC%8B%9D"
  },
  {
      "name": "생체인증",
      "url": "https://itwiki.kr/w/%EC%83%9D%EC%B2%B4%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "생체정보",
      "url": "https://itwiki.kr/w/%EC%83%9D%EC%B2%B4%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "샤딩",
      "url": "https://itwiki.kr/w/%EC%83%A4%EB%94%A9"
  },
  {
      "name": "섀도우 IT",
      "url": "https://itwiki.kr/w/%EC%84%80%EB%8F%84%EC%9A%B0_IT"
  },
  {
      "name": "서버 가상화",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84_%EA%B0%80%EC%83%81%ED%99%94"
  },
  {
      "name": "서버 기반 컴퓨팅",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84_%EA%B8%B0%EB%B0%98_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "서버 메시지 블록",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84_%EB%A9%94%EC%8B%9C%EC%A7%80_%EB%B8%94%EB%A1%9D"
  },
  {
      "name": "서버 부하 분산",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84_%EB%B6%80%ED%95%98_%EB%B6%84%EC%82%B0"
  },
  {
      "name": "서버 사이드 언어",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84_%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "서버 이중화",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84_%EC%9D%B4%EC%A4%91%ED%99%94"
  },
  {
      "name": "서버사이드 언어",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "서브 쿼리",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B8%8C_%EC%BF%BC%EB%A6%AC"
  },
  {
      "name": "서브넷",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B8%8C%EB%84%B7"
  },
  {
      "name": "서브넷 마스크",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B8%8C%EB%84%B7_%EB%A7%88%EC%8A%A4%ED%81%AC"
  },
  {
      "name": "서비스 거부 공격",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B9%84%EC%8A%A4_%EA%B1%B0%EB%B6%80_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "서비스 지향 아키텍처",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%A7%80%ED%96%A5_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "서비스 품질",
      "url": "https://itwiki.kr/w/%EC%84%9C%EB%B9%84%EC%8A%A4_%ED%92%88%EC%A7%88"
  },
  {
      "name": "서킷 스위칭",
      "url": "https://itwiki.kr/w/%EC%84%9C%ED%82%B7_%EC%8A%A4%EC%9C%84%EC%B9%AD"
  },
  {
      "name": "서포트 벡터",
      "url": "https://itwiki.kr/w/%EC%84%9C%ED%8F%AC%ED%8A%B8_%EB%B2%A1%ED%84%B0"
  },
  {
      "name": "서포트 벡터 머신",
      "url": "https://itwiki.kr/w/%EC%84%9C%ED%8F%AC%ED%8A%B8_%EB%B2%A1%ED%84%B0_%EB%A8%B8%EC%8B%A0"
  },
  {
      "name": "선점 스케줄링",
      "url": "https://itwiki.kr/w/%EC%84%A0%EC%A0%90_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "선택 정렬",
      "url": "https://itwiki.kr/w/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC"
  },
  {
      "name": "선형 검색",
      "url": "https://itwiki.kr/w/%EC%84%A0%ED%98%95_%EA%B2%80%EC%83%89"
  },
  {
      "name": "선형 회귀",
      "url": "https://itwiki.kr/w/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80"
  },
  {
      "name": "선형 회귀의 기본가정",
      "url": "https://itwiki.kr/w/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80%EC%9D%98_%EA%B8%B0%EB%B3%B8%EA%B0%80%EC%A0%95"
  },
  {
      "name": "선후행 도형법",
      "url": "https://itwiki.kr/w/%EC%84%A0%ED%9B%84%ED%96%89_%EB%8F%84%ED%98%95%EB%B2%95"
  },
  {
      "name": "선후행도형법",
      "url": "https://itwiki.kr/w/%EC%84%A0%ED%9B%84%ED%96%89%EB%8F%84%ED%98%95%EB%B2%95"
  },
  {
      "name": "성과적 회계",
      "url": "https://itwiki.kr/w/%EC%84%B1%EA%B3%BC%EC%A0%81_%ED%9A%8C%EA%B3%84"
  },
  {
      "name": "성능",
      "url": "https://itwiki.kr/w/%EC%84%B1%EB%8A%A5"
  },
  {
      "name": "성능 테스트",
      "url": "https://itwiki.kr/w/%EC%84%B1%EB%8A%A5_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "세계전기통신연합",
      "url": "https://itwiki.kr/w/%EC%84%B8%EA%B3%84%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%97%B0%ED%95%A9"
  },
  {
      "name": "세그윗",
      "url": "https://itwiki.kr/w/%EC%84%B8%EA%B7%B8%EC%9C%97"
  },
  {
      "name": "세마포어",
      "url": "https://itwiki.kr/w/%EC%84%B8%EB%A7%88%ED%8F%AC%EC%96%B4"
  },
  {
      "name": "세븐 터치포인트",
      "url": "https://itwiki.kr/w/%EC%84%B8%EB%B8%90_%ED%84%B0%EC%B9%98%ED%8F%AC%EC%9D%B8%ED%8A%B8"
  },
  {
      "name": "세션 개시 프로토콜",
      "url": "https://itwiki.kr/w/%EC%84%B8%EC%85%98_%EA%B0%9C%EC%8B%9C_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "세션 하이재킹",
      "url": "https://itwiki.kr/w/%EC%84%B8%EC%85%98_%ED%95%98%EC%9D%B4%EC%9E%AC%ED%82%B9"
  },
  {
      "name": "센터 컷",
      "url": "https://itwiki.kr/w/%EC%84%BC%ED%84%B0_%EC%BB%B7"
  },
  {
      "name": "센터컷",
      "url": "https://itwiki.kr/w/%EC%84%BC%ED%84%B0%EC%BB%B7"
  },
  {
      "name": "셀레니움",
      "url": "https://itwiki.kr/w/%EC%85%80%EB%A0%88%EB%8B%88%EC%9B%80"
  },
  {
      "name": "셸",
      "url": "https://itwiki.kr/w/%EC%85%B8"
  },
  {
      "name": "셸 쉘",
      "url": "https://itwiki.kr/w/%EC%85%B8_%EC%89%98"
  },
  {
      "name": "셸 코드",
      "url": "https://itwiki.kr/w/%EC%85%B8_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "셸과 쉘",
      "url": "https://itwiki.kr/w/%EC%85%B8%EA%B3%BC_%EC%89%98"
  },
  {
      "name": "셸쇼크",
      "url": "https://itwiki.kr/w/%EC%85%B8%EC%87%BC%ED%81%AC"
  },
  {
      "name": "셸코드",
      "url": "https://itwiki.kr/w/%EC%85%B8%EC%BD%94%EB%93%9C"
  },
  {
      "name": "소극적 공격",
      "url": "https://itwiki.kr/w/%EC%86%8C%EA%B7%B9%EC%A0%81_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "소셜 네트워크 마이닝",
      "url": "https://itwiki.kr/w/%EC%86%8C%EC%85%9C_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC_%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "소스코드 품질 분석",
      "url": "https://itwiki.kr/w/%EC%86%8C%EC%8A%A4%EC%BD%94%EB%93%9C_%ED%92%88%EC%A7%88_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "소프트 스킬",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8_%EC%8A%A4%ED%82%AC"
  },
  {
      "name": "소프트웨어 개발 모델",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "소프트웨어 개발 방법론",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "소프트웨어 개발 보안",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C_%EB%B3%B4%EC%95%88"
  },
  {
      "name": "소프트웨어 개발 비용 산정",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C_%EB%B9%84%EC%9A%A9_%EC%82%B0%EC%A0%95"
  },
  {
      "name": "소프트웨어 개발 생명주기",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B0%9C%EB%B0%9C_%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0"
  },
  {
      "name": "소프트웨어 공학",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B3%B5%ED%95%99"
  },
  {
      "name": "소프트웨어 공학 연구소",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B3%B5%ED%95%99_%EC%97%B0%EA%B5%AC%EC%86%8C"
  },
  {
      "name": "소프트웨어 기술자 평균 임금",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B8%B0%EC%88%A0%EC%9E%90_%ED%8F%89%EA%B7%A0_%EC%9E%84%EA%B8%88"
  },
  {
      "name": "소프트웨어 기술자 평균 임금(2018)",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B8%B0%EC%88%A0%EC%9E%90_%ED%8F%89%EA%B7%A0_%EC%9E%84%EA%B8%88(2018)"
  },
  {
      "name": "소프트웨어 기술자 평균 임금(2019)",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B8%B0%EC%88%A0%EC%9E%90_%ED%8F%89%EA%B7%A0_%EC%9E%84%EA%B8%88(2019)"
  },
  {
      "name": "소프트웨어 기술자 평균 임금(2020)",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B8%B0%EC%88%A0%EC%9E%90_%ED%8F%89%EA%B7%A0_%EC%9E%84%EA%B8%88(2020)"
  },
  {
      "name": "소프트웨어 기술자 평균 임금(2021)",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B8%B0%EC%88%A0%EC%9E%90_%ED%8F%89%EA%B7%A0_%EC%9E%84%EA%B8%88(2021)"
  },
  {
      "name": "소프트웨어 디자인 패턴",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "소프트웨어 라이센스",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4"
  },
  {
      "name": "소프트웨어 모듈화",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%AA%A8%EB%93%88%ED%99%94"
  },
  {
      "name": "소프트웨어 분리발주 의무화",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%B6%84%EB%A6%AC%EB%B0%9C%EC%A3%BC_%EC%9D%98%EB%AC%B4%ED%99%94"
  },
  {
      "name": "소프트웨어 비용 산정",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%B9%84%EC%9A%A9_%EC%82%B0%EC%A0%95"
  },
  {
      "name": "소프트웨어 산업진흥법",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%82%B0%EC%97%85%EC%A7%84%ED%9D%A5%EB%B2%95"
  },
  {
      "name": "소프트웨어 생명주기 모델",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "소프트웨어 설계",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%84%A4%EA%B3%84"
  },
  {
      "name": "소프트웨어 아키텍처",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "소프트웨어 아키텍처 기술서",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EA%B8%B0%EC%88%A0%EC%84%9C"
  },
  {
      "name": "소프트웨어 아키텍처 드라이버",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EB%93%9C%EB%9D%BC%EC%9D%B4%EB%B2%84"
  },
  {
      "name": "소프트웨어 아키텍처 스타일",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EC%8A%A4%ED%83%80%EC%9D%BC"
  },
  {
      "name": "소프트웨어 아키텍처 패턴",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "소프트웨어 아키텍처 평가",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "소프트웨어 아키텍처 품질",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%ED%92%88%EC%A7%88"
  },
  {
      "name": "소프트웨어 안전",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%88%EC%A0%84"
  },
  {
      "name": "소프트웨어 안전 분석",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%88%EC%A0%84_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "소프트웨어 안전성",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%88%EC%A0%84%EC%84%B1"
  },
  {
      "name": "소프트웨어 요구사항 명세서",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%EB%AA%85%EC%84%B8%EC%84%9C"
  },
  {
      "name": "소프트웨어 위기",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9C%84%EA%B8%B0"
  },
  {
      "name": "소프트웨어 유지보수",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9C%A0%EC%A7%80%EB%B3%B4%EC%88%98"
  },
  {
      "name": "소프트웨어 재공학",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9E%AC%EA%B3%B5%ED%95%99"
  },
  {
      "name": "소프트웨어 재사용",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9E%AC%EC%82%AC%EC%9A%A9"
  },
  {
      "name": "소프트웨어 정의 네트워크",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%A0%95%EC%9D%98_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "소프트웨어 정의 데이터센터",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%A0%95%EC%9D%98_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%84%BC%ED%84%B0"
  },
  {
      "name": "소프트웨어 조건/결정 커버리지",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%A1%B0%EA%B1%B4/%EA%B2%B0%EC%A0%95_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "소프트웨어 테스트",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "소프트웨어 테스트 결정 커버리지",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EA%B2%B0%EC%A0%95_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "소프트웨어 테스트 구문 커버리지",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EA%B5%AC%EB%AC%B8_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "소프트웨어 테스트 변경 조건/결정 커버지리",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EB%B3%80%EA%B2%BD_%EC%A1%B0%EA%B1%B4/%EA%B2%B0%EC%A0%95_%EC%BB%A4%EB%B2%84%EC%A7%80%EB%A6%AC"
  },
  {
      "name": "소프트웨어 테스트 원리",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%9B%90%EB%A6%AC"
  },
  {
      "name": "소프트웨어 테스트 자동화",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%9E%90%EB%8F%99%ED%99%94"
  },
  {
      "name": "소프트웨어 테스트 조건 커버리지",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%A1%B0%EA%B1%B4_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "소프트웨어 테스트 커버리지",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "소프트웨어 테스팅",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%85%8C%EC%8A%A4%ED%8C%85"
  },
  {
      "name": "소프트웨어 패키징 도구",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%8C%A8%ED%82%A4%EC%A7%95_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "소프트웨어 품질",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%92%88%EC%A7%88"
  },
  {
      "name": "소프트웨어 품질 특성",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%92%88%EC%A7%88_%ED%8A%B9%EC%84%B1"
  },
  {
      "name": "소프트웨어 품질 평가",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%92%88%EC%A7%88_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "소프트웨어 품질성능 평가시험",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%92%88%EC%A7%88%EC%84%B1%EB%8A%A5_%ED%8F%89%EA%B0%80%EC%8B%9C%ED%97%98"
  },
  {
      "name": "소프트웨어 품질속성 시나리오",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%ED%92%88%EC%A7%88%EC%86%8D%EC%84%B1_%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4"
  },
  {
      "name": "소프트웨어의 패키징 도구",
      "url": "https://itwiki.kr/w/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EC%9D%98_%ED%8C%A8%ED%82%A4%EC%A7%95_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "속성",
      "url": "https://itwiki.kr/w/%EC%86%8D%EC%84%B1"
  },
  {
      "name": "솔트",
      "url": "https://itwiki.kr/w/%EC%86%94%ED%8A%B8"
  },
  {
      "name": "순방향 신경망",
      "url": "https://itwiki.kr/w/%EC%88%9C%EB%B0%A9%ED%96%A5_%EC%8B%A0%EA%B2%BD%EB%A7%9D"
  },
  {
      "name": "순서 보존 암호화",
      "url": "https://itwiki.kr/w/%EC%88%9C%EC%84%9C_%EB%B3%B4%EC%A1%B4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "순서보존 암호화",
      "url": "https://itwiki.kr/w/%EC%88%9C%EC%84%9C%EB%B3%B4%EC%A1%B4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "순차 파일",
      "url": "https://itwiki.kr/w/%EC%88%9C%EC%B0%A8_%ED%8C%8C%EC%9D%BC"
  },
  {
      "name": "순현재가치",
      "url": "https://itwiki.kr/w/%EC%88%9C%ED%98%84%EC%9E%AC%EA%B0%80%EC%B9%98"
  },
  {
      "name": "순환 중복 검사",
      "url": "https://itwiki.kr/w/%EC%88%9C%ED%99%98_%EC%A4%91%EB%B3%B5_%EA%B2%80%EC%82%AC"
  },
  {
      "name": "순회",
      "url": "https://itwiki.kr/w/%EC%88%9C%ED%9A%8C"
  },
  {
      "name": "쉐도우 IT",
      "url": "https://itwiki.kr/w/%EC%89%90%EB%8F%84%EC%9A%B0_IT"
  },
  {
      "name": "쉘",
      "url": "https://itwiki.kr/w/%EC%89%98"
  },
  {
      "name": "쉘 코드",
      "url": "https://itwiki.kr/w/%EC%89%98_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "쉘과 셸",
      "url": "https://itwiki.kr/w/%EC%89%98%EA%B3%BC_%EC%85%B8"
  },
  {
      "name": "쉘쇼크",
      "url": "https://itwiki.kr/w/%EC%89%98%EC%87%BC%ED%81%AC"
  },
  {
      "name": "쉘코드",
      "url": "https://itwiki.kr/w/%EC%89%98%EC%BD%94%EB%93%9C"
  },
  {
      "name": "스노우 플레이크 스키마",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%85%B8%EC%9A%B0_%ED%94%8C%EB%A0%88%EC%9D%B4%ED%81%AC_%EC%8A%A4%ED%82%A4%EB%A7%88"
  },
  {
      "name": "스노우플레이크",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%85%B8%EC%9A%B0%ED%94%8C%EB%A0%88%EC%9D%B4%ED%81%AC"
  },
  {
      "name": "스노트",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%85%B8%ED%8A%B8"
  },
  {
      "name": "스니핑",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%8B%88%ED%95%91"
  },
  {
      "name": "스래싱",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%9E%98%EC%8B%B1"
  },
  {
      "name": "스레드",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A0%88%EB%93%9C"
  },
  {
      "name": "스레싱",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A0%88%EC%8B%B1"
  },
  {
      "name": "스마트 계약",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EA%B3%84%EC%95%BD"
  },
  {
      "name": "스마트 공개",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EA%B3%B5%EA%B0%9C"
  },
  {
      "name": "스마트 그리드",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EA%B7%B8%EB%A6%AC%EB%93%9C"
  },
  {
      "name": "스마트 그린 산업단지",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EA%B7%B8%EB%A6%B0_%EC%82%B0%EC%97%85%EB%8B%A8%EC%A7%80"
  },
  {
      "name": "스마트 러닝",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "스마트 모빌리티",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0"
  },
  {
      "name": "스마트 시티",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%8B%9C%ED%8B%B0"
  },
  {
      "name": "스마트 워치",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%9B%8C%EC%B9%98"
  },
  {
      "name": "스마트 의료 인프라",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%9D%98%EB%A3%8C_%EC%9D%B8%ED%94%84%EB%9D%BC"
  },
  {
      "name": "스마트 컨트렉트",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%EC%BB%A8%ED%8A%B8%EB%A0%89%ED%8A%B8"
  },
  {
      "name": "스마트 헬스케어",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8_%ED%97%AC%EC%8A%A4%EC%BC%80%EC%96%B4"
  },
  {
      "name": "스마트폰",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0"
  },
  {
      "name": "스머프",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A8%B8%ED%94%84"
  },
  {
      "name": "스머프 공격",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A8%B8%ED%94%84_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "스머핑",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%A8%B8%ED%95%91"
  },
  {
      "name": "스미싱",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EB%AF%B8%EC%8B%B1"
  },
  {
      "name": "스위치",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "스위치 재밍",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%9C%84%EC%B9%98_%EC%9E%AC%EB%B0%8D"
  },
  {
      "name": "스위치 허브",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%9C%84%EC%B9%98_%ED%97%88%EB%B8%8C"
  },
  {
      "name": "스위치재밍",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%9C%84%EC%B9%98%EC%9E%AC%EB%B0%8D"
  },
  {
      "name": "스카다",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%B9%B4%EB%8B%A4"
  },
  {
      "name": "스칼라",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%B9%BC%EB%9D%BC"
  },
  {
      "name": "스케빈징",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%BC%80%EB%B9%88%EC%A7%95"
  },
  {
      "name": "스케줄과 스케쥴",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%BC%80%EC%A4%84%EA%B3%BC_%EC%8A%A4%EC%BC%80%EC%A5%B4"
  },
  {
      "name": "스케줄링과 스케쥴링",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81%EA%B3%BC_%EC%8A%A4%EC%BC%80%EC%A5%B4%EB%A7%81"
  },
  {
      "name": "스케쥴과 스케줄",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%BC%80%EC%A5%B4%EA%B3%BC_%EC%8A%A4%EC%BC%80%EC%A4%84"
  },
  {
      "name": "스케쥴링과 스케줄링",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%BC%80%EC%A5%B4%EB%A7%81%EA%B3%BC_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "스코프 크립",
      "url": "https://itwiki.kr/w/%EC%8A%A4%EC%BD%94%ED%94%84_%ED%81%AC%EB%A6%BD"
  },
  {
      "name": "스크래이핑",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%81%AC%EB%9E%98%EC%9D%B4%ED%95%91"
  },
  {
      "name": "스크래핑",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%81%AC%EB%9E%98%ED%95%91"
  },
  {
      "name": "스크럼",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%81%AC%EB%9F%BC"
  },
  {
      "name": "스크립트 언어",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "스키마",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%82%A4%EB%A7%88"
  },
  {
      "name": "스타 스키마",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%83%80_%EC%8A%A4%ED%82%A4%EB%A7%88"
  },
  {
      "name": "스택",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%83%9D"
  },
  {
      "name": "스택 소스코드",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%83%9D_%EC%86%8C%EC%8A%A4%EC%BD%94%EB%93%9C"
  },
  {
      "name": "스턱스넷",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%84%B1%EC%8A%A4%EB%84%B7"
  },
  {
      "name": "스테가노그래피",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%85%8C%EA%B0%80%EB%85%B8%EA%B7%B8%EB%9E%98%ED%94%BC"
  },
  {
      "name": "스테이블 코인",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%BD%94%EC%9D%B8"
  },
  {
      "name": "스트림 암호",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8A%B8%EB%A6%BC_%EC%95%94%ED%98%B8"
  },
  {
      "name": "스트림암호",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8A%B8%EB%A6%BC%EC%95%94%ED%98%B8"
  },
  {
      "name": "스파이웨어",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "스파크",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8C%8C%ED%81%AC"
  },
  {
      "name": "스파크 DataFrame",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8C%8C%ED%81%AC_DataFrame"
  },
  {
      "name": "스파크 MLlib",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8C%8C%ED%81%AC_MLlib"
  },
  {
      "name": "스파크 RDD",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8C%8C%ED%81%AC_RDD"
  },
  {
      "name": "스펙터",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8E%99%ED%84%B0"
  },
  {
      "name": "스펨 어쎄신",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8E%A8_%EC%96%B4%EC%8E%84%EC%8B%A0"
  },
  {
      "name": "스펨어쎄신",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%8E%A8%EC%96%B4%EC%8E%84%EC%8B%A0"
  },
  {
      "name": "스풀링",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%92%80%EB%A7%81"
  },
  {
      "name": "스프린트 백로그",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A6%B0%ED%8A%B8_%EB%B0%B1%EB%A1%9C%EA%B7%B8"
  },
  {
      "name": "스프링",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81"
  },
  {
      "name": "스프링 HATEOAS",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_HATEOAS"
  },
  {
      "name": "스프링 Logback",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_Logback"
  },
  {
      "name": "스프링 데이터",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "스프링 배치",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%EB%B0%B0%EC%B9%98"
  },
  {
      "name": "스프링 부트",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%EB%B6%80%ED%8A%B8"
  },
  {
      "name": "스프링 시큐리티",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%EC%8B%9C%ED%81%90%EB%A6%AC%ED%8B%B0"
  },
  {
      "name": "스프링 클라우드",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C"
  },
  {
      "name": "스프링 프레임워크",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "스프링 프레임워크 5.0",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%84%EB%A7%81_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC_5.0"
  },
  {
      "name": "스피어만 상관계수",
      "url": "https://itwiki.kr/w/%EC%8A%A4%ED%94%BC%EC%96%B4%EB%A7%8C_%EC%83%81%EA%B4%80%EA%B3%84%EC%88%98"
  },
  {
      "name": "시각적 데이터 탐색",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EA%B0%81%EC%A0%81_%EB%8D%B0%EC%9D%B4%ED%84%B0_%ED%83%90%EC%83%89"
  },
  {
      "name": "시게이트",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EA%B2%8C%EC%9D%B4%ED%8A%B8"
  },
  {
      "name": "시그마",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EA%B7%B8%EB%A7%88"
  },
  {
      "name": "시나리오법",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EB%82%98%EB%A6%AC%EC%98%A4%EB%B2%95"
  },
  {
      "name": "시도 응답 인증",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EB%8F%84_%EC%9D%91%EB%8B%B5_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "시동 자체 시험",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EB%8F%99_%EC%9E%90%EC%B2%B4_%EC%8B%9C%ED%97%98"
  },
  {
      "name": "시맨틱 웹",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EB%A7%A8%ED%8B%B1_%EC%9B%B9"
  },
  {
      "name": "시멘틱 웹",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EB%A9%98%ED%8B%B1_%EC%9B%B9"
  },
  {
      "name": "시스템",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "시스템 소프트웨어",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "시스템 연계",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%97%B0%EA%B3%84"
  },
  {
      "name": "시스템 연계 솔루션",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%97%B0%EA%B3%84_%EC%86%94%EB%A3%A8%EC%85%98"
  },
  {
      "name": "시스템 카탈로그",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%B9%B4%ED%83%88%EB%A1%9C%EA%B7%B8"
  },
  {
      "name": "시스템 콜",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%BD%9C"
  },
  {
      "name": "시스템 테스트",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "시스템 호출",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%8A%A4%ED%85%9C_%ED%98%B8%EC%B6%9C"
  },
  {
      "name": "시장실패",
      "url": "https://itwiki.kr/w/%EC%8B%9C%EC%9E%A5%EC%8B%A4%ED%8C%A8"
  },
  {
      "name": "시퀀스 다이어그램",
      "url": "https://itwiki.kr/w/%EC%8B%9C%ED%80%80%EC%8A%A4_%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "시큐어 OS",
      "url": "https://itwiki.kr/w/%EC%8B%9C%ED%81%90%EC%96%B4_OS"
  },
  {
      "name": "시큐어 코딩",
      "url": "https://itwiki.kr/w/%EC%8B%9C%ED%81%90%EC%96%B4_%EC%BD%94%EB%94%A9"
  },
  {
      "name": "시험 용이성",
      "url": "https://itwiki.kr/w/%EC%8B%9C%ED%97%98_%EC%9A%A9%EC%9D%B4%EC%84%B1"
  },
  {
      "name": "시험용이성",
      "url": "https://itwiki.kr/w/%EC%8B%9C%ED%97%98%EC%9A%A9%EC%9D%B4%EC%84%B1"
  },
  {
      "name": "식별자",
      "url": "https://itwiki.kr/w/%EC%8B%9D%EB%B3%84%EC%9E%90"
  },
  {
      "name": "신 플러딩",
      "url": "https://itwiki.kr/w/%EC%8B%A0_%ED%94%8C%EB%9F%AC%EB%94%A9"
  },
  {
      "name": "신 플루딩",
      "url": "https://itwiki.kr/w/%EC%8B%A0_%ED%94%8C%EB%A3%A8%EB%94%A9"
  },
  {
      "name": "신경망",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EA%B2%BD%EB%A7%9D"
  },
  {
      "name": "신경망처리장치",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EA%B2%BD%EB%A7%9D%EC%B2%98%EB%A6%AC%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "신뢰도",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EB%A2%B0%EB%8F%84"
  },
  {
      "name": "신뢰점",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EB%A2%B0%EC%A0%90"
  },
  {
      "name": "신뢰지점",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EB%A2%B0%EC%A7%80%EC%A0%90"
  },
  {
      "name": "신뢰할 수 있는 AI를 위한 윤리 가이드라인",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EB%A2%B0%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8A%94_AI%EB%A5%BC_%EC%9C%84%ED%95%9C_%EC%9C%A4%EB%A6%AC_%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8"
  },
  {
      "name": "신분",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EB%B6%84"
  },
  {
      "name": "신원",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EC%9B%90"
  },
  {
      "name": "신장 트리",
      "url": "https://itwiki.kr/w/%EC%8B%A0%EC%9E%A5_%ED%8A%B8%EB%A6%AC"
  }
]);
_itwiki = _itwiki.concat([
  {
      "name": "실시간 기업",
      "url": "https://itwiki.kr/w/%EC%8B%A4%EC%8B%9C%EA%B0%84_%EA%B8%B0%EC%97%85"
  },
  {
      "name": "실시간 시스템",
      "url": "https://itwiki.kr/w/%EC%8B%A4%EC%8B%9C%EA%B0%84_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "실시간 운영체제",
      "url": "https://itwiki.kr/w/%EC%8B%A4%EC%8B%9C%EA%B0%84_%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C"
  },
  {
      "name": "심층 신경망",
      "url": "https://itwiki.kr/w/%EC%8B%AC%EC%B8%B5_%EC%8B%A0%EA%B2%BD%EB%A7%9D"
  },
  {
      "name": "심층 패킷 분석",
      "url": "https://itwiki.kr/w/%EC%8B%AC%EC%B8%B5_%ED%8C%A8%ED%82%B7_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "심층 학습",
      "url": "https://itwiki.kr/w/%EC%8B%AC%EC%B8%B5_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "싱킹 프로세스",
      "url": "https://itwiki.kr/w/%EC%8B%B1%ED%82%B9_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "싸이클론 모델",
      "url": "https://itwiki.kr/w/%EC%8B%B8%EC%9D%B4%ED%81%B4%EB%A1%A0_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "씨게이트",
      "url": "https://itwiki.kr/w/%EC%94%A8%EA%B2%8C%EC%9D%B4%ED%8A%B8"
  },
  {
      "name": "씬 클라이언트",
      "url": "https://itwiki.kr/w/%EC%94%AC_%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8"
  },
  {
      "name": "아실로마 인공지능 원칙",
      "url": "https://itwiki.kr/w/%EC%95%84%EC%8B%A4%EB%A1%9C%EB%A7%88_%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "아이노드",
      "url": "https://itwiki.kr/w/%EC%95%84%EC%9D%B4%EB%85%B8%EB%93%9C"
  },
  {
      "name": "아일랜드 호핑",
      "url": "https://itwiki.kr/w/%EC%95%84%EC%9D%BC%EB%9E%9C%EB%93%9C_%ED%98%B8%ED%95%91"
  },
  {
      "name": "아카이빙",
      "url": "https://itwiki.kr/w/%EC%95%84%EC%B9%B4%EC%9D%B4%EB%B9%99"
  },
  {
      "name": "아파치 라이센스",
      "url": "https://itwiki.kr/w/%EC%95%84%ED%8C%8C%EC%B9%98_%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4"
  },
  {
      "name": "악성코드 분석",
      "url": "https://itwiki.kr/w/%EC%95%85%EC%84%B1%EC%BD%94%EB%93%9C_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "안드로이드 디버그 브리지",
      "url": "https://itwiki.kr/w/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C_%EB%94%94%EB%B2%84%EA%B7%B8_%EB%B8%8C%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "안드로이드 루팅",
      "url": "https://itwiki.kr/w/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C_%EB%A3%A8%ED%8C%85"
  },
  {
      "name": "안드로이드 악성코드",
      "url": "https://itwiki.kr/w/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C_%EC%95%85%EC%84%B1%EC%BD%94%EB%93%9C"
  },
  {
      "name": "안드로이드 에뮬레이터",
      "url": "https://itwiki.kr/w/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C_%EC%97%90%EB%AE%AC%EB%A0%88%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "안티 포렌식",
      "url": "https://itwiki.kr/w/%EC%95%88%ED%8B%B0_%ED%8F%AC%EB%A0%8C%EC%8B%9D"
  },
  {
      "name": "알고리즈미스트",
      "url": "https://itwiki.kr/w/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%88%EB%AF%B8%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "알고리즘",
      "url": "https://itwiki.kr/w/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "암달의 법칙",
      "url": "https://itwiki.kr/w/%EC%95%94%EB%8B%AC%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "암스트롱 공리",
      "url": "https://itwiki.kr/w/%EC%95%94%EC%8A%A4%ED%8A%B8%EB%A1%B1_%EA%B3%B5%EB%A6%AC"
  },
  {
      "name": "암스트롱의 공리",
      "url": "https://itwiki.kr/w/%EC%95%94%EC%8A%A4%ED%8A%B8%EB%A1%B1%EC%9D%98_%EA%B3%B5%EB%A6%AC"
  },
  {
      "name": "암호",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8"
  },
  {
      "name": "암호 공격",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "암호 모듈 검증",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8_%EB%AA%A8%EB%93%88_%EA%B2%80%EC%A6%9D"
  },
  {
      "name": "암호 알고리즘",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "암호 알고리즘 보안강도",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98_%EB%B3%B4%EC%95%88%EA%B0%95%EB%8F%84"
  },
  {
      "name": "암호 화폐",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8_%ED%99%94%ED%8F%90"
  },
  {
      "name": "암호문 공격",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8%EB%AC%B8_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "암호학",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8%ED%95%99"
  },
  {
      "name": "암호화",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "암호화 알고리즘",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8%ED%99%94_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "암호화폐",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8%ED%99%94%ED%8F%90"
  },
  {
      "name": "암호화폐 분류",
      "url": "https://itwiki.kr/w/%EC%95%94%ED%98%B8%ED%99%94%ED%8F%90_%EB%B6%84%EB%A5%98"
  },
  {
      "name": "앙상블 기법",
      "url": "https://itwiki.kr/w/%EC%95%99%EC%83%81%EB%B8%94_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "앙상블 학습",
      "url": "https://itwiki.kr/w/%EC%95%99%EC%83%81%EB%B8%94_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "애니캐스트",
      "url": "https://itwiki.kr/w/%EC%95%A0%EB%8B%88%EC%BA%90%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "애드웨어",
      "url": "https://itwiki.kr/w/%EC%95%A0%EB%93%9C%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "애드혹",
      "url": "https://itwiki.kr/w/%EC%95%A0%EB%93%9C%ED%98%B9"
  },
  {
      "name": "애자일",
      "url": "https://itwiki.kr/w/%EC%95%A0%EC%9E%90%EC%9D%BC"
  },
  {
      "name": "애자일 방법론",
      "url": "https://itwiki.kr/w/%EC%95%A0%EC%9E%90%EC%9D%BC_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "애저",
      "url": "https://itwiki.kr/w/%EC%95%A0%EC%A0%80"
  },
  {
      "name": "애플리케이션 생명주기 관리",
      "url": "https://itwiki.kr/w/%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98_%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "애플리케이션 서비스 제공자",
      "url": "https://itwiki.kr/w/%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98_%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%A0%9C%EA%B3%B5%EC%9E%90"
  },
  {
      "name": "액티브 러닝",
      "url": "https://itwiki.kr/w/%EC%95%A1%ED%8B%B0%EB%B8%8C_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "앨더퍼",
      "url": "https://itwiki.kr/w/%EC%95%A8%EB%8D%94%ED%8D%BC"
  },
  {
      "name": "앨더퍼 ERG 이론",
      "url": "https://itwiki.kr/w/%EC%95%A8%EB%8D%94%ED%8D%BC_ERG_%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "앰비언트",
      "url": "https://itwiki.kr/w/%EC%95%B0%EB%B9%84%EC%96%B8%ED%8A%B8"
  },
  {
      "name": "앰비언트 커머스",
      "url": "https://itwiki.kr/w/%EC%95%B0%EB%B9%84%EC%96%B8%ED%8A%B8_%EC%BB%A4%EB%A8%B8%EC%8A%A4"
  },
  {
      "name": "앰비언트 컴퓨팅",
      "url": "https://itwiki.kr/w/%EC%95%B0%EB%B9%84%EC%96%B8%ED%8A%B8_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "앱피움",
      "url": "https://itwiki.kr/w/%EC%95%B1%ED%94%BC%EC%9B%80"
  },
  {
      "name": "양자 내성 암호",
      "url": "https://itwiki.kr/w/%EC%96%91%EC%9E%90_%EB%82%B4%EC%84%B1_%EC%95%94%ED%98%B8"
  },
  {
      "name": "양자 암호",
      "url": "https://itwiki.kr/w/%EC%96%91%EC%9E%90_%EC%95%94%ED%98%B8"
  },
  {
      "name": "양자 컴퓨터",
      "url": "https://itwiki.kr/w/%EC%96%91%EC%9E%90_%EC%BB%B4%ED%93%A8%ED%84%B0"
  },
  {
      "name": "양자 컴퓨팅",
      "url": "https://itwiki.kr/w/%EC%96%91%EC%9E%90_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "양자 키 분배",
      "url": "https://itwiki.kr/w/%EC%96%91%EC%9E%90_%ED%82%A4_%EB%B6%84%EB%B0%B0"
  },
  {
      "name": "어니언 라우팅",
      "url": "https://itwiki.kr/w/%EC%96%B4%EB%8B%88%EC%96%B8_%EB%9D%BC%EC%9A%B0%ED%8C%85"
  },
  {
      "name": "어셈블러",
      "url": "https://itwiki.kr/w/%EC%96%B4%EC%85%88%EB%B8%94%EB%9F%AC"
  },
  {
      "name": "어셈블리",
      "url": "https://itwiki.kr/w/%EC%96%B4%EC%85%88%EB%B8%94%EB%A6%AC"
  },
  {
      "name": "언더피팅",
      "url": "https://itwiki.kr/w/%EC%96%B8%EB%8D%94%ED%94%BC%ED%8C%85"
  },
  {
      "name": "언어 번역 프로그램",
      "url": "https://itwiki.kr/w/%EC%96%B8%EC%96%B4_%EB%B2%88%EC%97%AD_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "언어 번역기",
      "url": "https://itwiki.kr/w/%EC%96%B8%EC%96%B4_%EB%B2%88%EC%97%AD%EA%B8%B0"
  },
  {
      "name": "언택트",
      "url": "https://itwiki.kr/w/%EC%96%B8%ED%83%9D%ED%8A%B8"
  },
  {
      "name": "업무 연속성",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4_%EC%97%B0%EC%86%8D%EC%84%B1"
  },
  {
      "name": "업무 연속성 계획",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4_%EC%97%B0%EC%86%8D%EC%84%B1_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "업무 연속성 관리",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4_%EC%97%B0%EC%86%8D%EC%84%B1_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "업무 영향 분석",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4_%EC%98%81%ED%96%A5_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "업무 영향분석",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4_%EC%98%81%ED%96%A5%EB%B6%84%EC%84%9D"
  },
  {
      "name": "업무연속성 계획",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4%EC%97%B0%EC%86%8D%EC%84%B1_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "업무연속성계획",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4%EC%97%B0%EC%86%8D%EC%84%B1%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "업무연속성관리",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4%EC%97%B0%EC%86%8D%EC%84%B1%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "업무영향 분석",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4%EC%98%81%ED%96%A5_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "업무영향분석",
      "url": "https://itwiki.kr/w/%EC%97%85%EB%AC%B4%EC%98%81%ED%96%A5%EB%B6%84%EC%84%9D"
  },
  {
      "name": "에스크로",
      "url": "https://itwiki.kr/w/%EC%97%90%EC%8A%A4%ED%81%AC%EB%A1%9C"
  },
  {
      "name": "에이징 기법",
      "url": "https://itwiki.kr/w/%EC%97%90%EC%9D%B4%EC%A7%95_%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "에자일",
      "url": "https://itwiki.kr/w/%EC%97%90%EC%9E%90%EC%9D%BC"
  },
  {
      "name": "엑소브레인",
      "url": "https://itwiki.kr/w/%EC%97%91%EC%86%8C%EB%B8%8C%EB%A0%88%EC%9D%B8"
  },
  {
      "name": "엔티티",
      "url": "https://itwiki.kr/w/%EC%97%94%ED%8B%B0%ED%8B%B0"
  },
  {
      "name": "엘가말",
      "url": "https://itwiki.kr/w/%EC%97%98%EA%B0%80%EB%A7%90"
  },
  {
      "name": "엘더퍼 ERG 이론",
      "url": "https://itwiki.kr/w/%EC%97%98%EB%8D%94%ED%8D%BC_ERG_%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "엣지 컴퓨팅",
      "url": "https://itwiki.kr/w/%EC%97%A3%EC%A7%80_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "역량 삼각형",
      "url": "https://itwiki.kr/w/%EC%97%AD%EB%9F%89_%EC%82%BC%EA%B0%81%ED%98%95"
  },
  {
      "name": "역할 기반 접근통제",
      "url": "https://itwiki.kr/w/%EC%97%AD%ED%95%A0_%EA%B8%B0%EB%B0%98_%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "역할기반 접근 통제",
      "url": "https://itwiki.kr/w/%EC%97%AD%ED%95%A0%EA%B8%B0%EB%B0%98_%EC%A0%91%EA%B7%BC_%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "역할별 보안활동",
      "url": "https://itwiki.kr/w/%EC%97%AD%ED%95%A0%EB%B3%84_%EB%B3%B4%EC%95%88%ED%99%9C%EB%8F%99"
  },
  {
      "name": "연결 리스트",
      "url": "https://itwiki.kr/w/%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "연결 함정",
      "url": "https://itwiki.kr/w/%EC%97%B0%EA%B2%B0_%ED%95%A8%EC%A0%95"
  },
  {
      "name": "연결함정",
      "url": "https://itwiki.kr/w/%EC%97%B0%EA%B2%B0%ED%95%A8%EC%A0%95"
  },
  {
      "name": "연결형 프로토콜",
      "url": "https://itwiki.kr/w/%EC%97%B0%EA%B2%B0%ED%98%95_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "연관 규칙 분석",
      "url": "https://itwiki.kr/w/%EC%97%B0%EA%B4%80_%EA%B7%9C%EC%B9%99_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "연동 계획",
      "url": "https://itwiki.kr/w/%EC%97%B0%EB%8F%99_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "연방 통신 위원회",
      "url": "https://itwiki.kr/w/%EC%97%B0%EB%B0%A9_%ED%86%B5%EC%8B%A0_%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "영국 내각 사무처",
      "url": "https://itwiki.kr/w/%EC%98%81%EA%B5%AD_%EB%82%B4%EA%B0%81_%EC%82%AC%EB%AC%B4%EC%B2%98"
  },
  {
      "name": "영상정보처리기기",
      "url": "https://itwiki.kr/w/%EC%98%81%EC%83%81%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EA%B8%B0"
  },
  {
      "name": "영상정보처리기기 설치 및 운영",
      "url": "https://itwiki.kr/w/%EC%98%81%EC%83%81%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EA%B8%B0_%EC%84%A4%EC%B9%98_%EB%B0%8F_%EC%9A%B4%EC%98%81"
  },
  {
      "name": "영지식 증명",
      "url": "https://itwiki.kr/w/%EC%98%81%EC%A7%80%EC%8B%9D_%EC%A6%9D%EB%AA%85"
  },
  {
      "name": "예측력",
      "url": "https://itwiki.kr/w/%EC%98%88%EC%B8%A1%EB%A0%A5"
  },
  {
      "name": "오류 검출",
      "url": "https://itwiki.kr/w/%EC%98%A4%EB%A5%98_%EA%B2%80%EC%B6%9C"
  },
  {
      "name": "오류 제어",
      "url": "https://itwiki.kr/w/%EC%98%A4%EB%A5%98_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "오버 피팅",
      "url": "https://itwiki.kr/w/%EC%98%A4%EB%B2%84_%ED%94%BC%ED%8C%85"
  },
  {
      "name": "오버라이딩",
      "url": "https://itwiki.kr/w/%EC%98%A4%EB%B2%84%EB%9D%BC%EC%9D%B4%EB%94%A9"
  },
  {
      "name": "오버피팅",
      "url": "https://itwiki.kr/w/%EC%98%A4%EB%B2%84%ED%94%BC%ED%8C%85"
  },
  {
      "name": "오와스프",
      "url": "https://itwiki.kr/w/%EC%98%A4%EC%99%80%EC%8A%A4%ED%94%84"
  },
  {
      "name": "오컴의 면도날",
      "url": "https://itwiki.kr/w/%EC%98%A4%EC%BB%B4%EC%9D%98_%EB%A9%B4%EB%8F%84%EB%82%A0"
  },
  {
      "name": "오페라",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%8E%98%EB%9D%BC"
  },
  {
      "name": "오픈 API",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88_API"
  },
  {
      "name": "오픈 뱅킹",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88_%EB%B1%85%ED%82%B9"
  },
  {
      "name": "오픈 소스 소프트웨어",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88_%EC%86%8C%EC%8A%A4_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "오픈 이노베이션",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88_%EC%9D%B4%EB%85%B8%EB%B2%A0%EC%9D%B4%EC%85%98"
  },
  {
      "name": "오픈뱅킹",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88%EB%B1%85%ED%82%B9"
  },
  {
      "name": "오픈소스 소프트웨어",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "오픈플로우",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%88%ED%94%8C%EB%A1%9C%EC%9A%B0"
  },
  {
      "name": "오피니언 마이닝",
      "url": "https://itwiki.kr/w/%EC%98%A4%ED%94%BC%EB%8B%88%EC%96%B8_%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "온토로지",
      "url": "https://itwiki.kr/w/%EC%98%A8%ED%86%A0%EB%A1%9C%EC%A7%80"
  },
  {
      "name": "온톨로지",
      "url": "https://itwiki.kr/w/%EC%98%A8%ED%86%A8%EB%A1%9C%EC%A7%80"
  },
  {
      "name": "옵트 인",
      "url": "https://itwiki.kr/w/%EC%98%B5%ED%8A%B8_%EC%9D%B8"
  },
  {
      "name": "옵트인",
      "url": "https://itwiki.kr/w/%EC%98%B5%ED%8A%B8%EC%9D%B8"
  },
  {
      "name": "옵티마이저",
      "url": "https://itwiki.kr/w/%EC%98%B5%ED%8B%B0%EB%A7%88%EC%9D%B4%EC%A0%80"
  },
  {
      "name": "와일드 카드",
      "url": "https://itwiki.kr/w/%EC%99%80%EC%9D%BC%EB%93%9C_%EC%B9%B4%EB%93%9C"
  },
  {
      "name": "완전이진트리순회 소스코드",
      "url": "https://itwiki.kr/w/%EC%99%84%EC%A0%84%EC%9D%B4%EC%A7%84%ED%8A%B8%EB%A6%AC%EC%88%9C%ED%9A%8C_%EC%86%8C%EC%8A%A4%EC%BD%94%EB%93%9C"
  },
  {
      "name": "외계인 코드",
      "url": "https://itwiki.kr/w/%EC%99%B8%EA%B3%84%EC%9D%B8_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "외부 라우팅 프로토콜",
      "url": "https://itwiki.kr/w/%EC%99%B8%EB%B6%80_%EB%9D%BC%EC%9A%B0%ED%8C%85_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "외부연계파일",
      "url": "https://itwiki.kr/w/%EC%99%B8%EB%B6%80%EC%97%B0%EA%B3%84%ED%8C%8C%EC%9D%BC"
  },
  {
      "name": "외부입력",
      "url": "https://itwiki.kr/w/%EC%99%B8%EB%B6%80%EC%9E%85%EB%A0%A5"
  },
  {
      "name": "외부조회",
      "url": "https://itwiki.kr/w/%EC%99%B8%EB%B6%80%EC%A1%B0%ED%9A%8C"
  },
  {
      "name": "외부출력",
      "url": "https://itwiki.kr/w/%EC%99%B8%EB%B6%80%EC%B6%9C%EB%A0%A5"
  },
  {
      "name": "요구 공학",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC_%EA%B3%B5%ED%95%99"
  },
  {
      "name": "요구 수준",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC_%EC%88%98%EC%A4%80"
  },
  {
      "name": "요구공학",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EA%B3%B5%ED%95%99"
  },
  {
      "name": "요구사항 명세",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%EB%AA%85%EC%84%B8"
  },
  {
      "name": "요구사항 명세서",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%EB%AA%85%EC%84%B8%EC%84%9C"
  },
  {
      "name": "요구사항 분석",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "요구사항 추적성 매트릭스",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%EC%B6%94%EC%A0%81%EC%84%B1_%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4"
  },
  {
      "name": "요구사항 특성",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%ED%8A%B9%EC%84%B1"
  },
  {
      "name": "요구사항 표현법",
      "url": "https://itwiki.kr/w/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD_%ED%91%9C%ED%98%84%EB%B2%95"
  },
  {
      "name": "요르돈 법칙",
      "url": "https://itwiki.kr/w/%EC%9A%94%EB%A5%B4%EB%8F%88_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "요르돈의 법칙",
      "url": "https://itwiki.kr/w/%EC%9A%94%EB%A5%B4%EB%8F%88%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "우도",
      "url": "https://itwiki.kr/w/%EC%9A%B0%EB%8F%84"
  },
  {
      "name": "우선순위 역전",
      "url": "https://itwiki.kr/w/%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84_%EC%97%AD%EC%A0%84"
  },
  {
      "name": "운영체제",
      "url": "https://itwiki.kr/w/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C"
  },
  {
      "name": "운영체제 5계층",
      "url": "https://itwiki.kr/w/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C_5%EA%B3%84%EC%B8%B5"
  },
  {
      "name": "워드 임베딩",
      "url": "https://itwiki.kr/w/%EC%9B%8C%EB%93%9C_%EC%9E%84%EB%B2%A0%EB%94%A9"
  },
  {
      "name": "워치독 타이머",
      "url": "https://itwiki.kr/w/%EC%9B%8C%EC%B9%98%EB%8F%85_%ED%83%80%EC%9D%B4%EB%A8%B8"
  },
  {
      "name": "워크플로",
      "url": "https://itwiki.kr/w/%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C"
  },
  {
      "name": "워크플로우",
      "url": "https://itwiki.kr/w/%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0"
  },
  {
      "name": "워터링 홀",
      "url": "https://itwiki.kr/w/%EC%9B%8C%ED%84%B0%EB%A7%81_%ED%99%80"
  },
  {
      "name": "워터링홀",
      "url": "https://itwiki.kr/w/%EC%9B%8C%ED%84%B0%EB%A7%81%ED%99%80"
  },
  {
      "name": "워터마크",
      "url": "https://itwiki.kr/w/%EC%9B%8C%ED%84%B0%EB%A7%88%ED%81%AC"
  },
  {
      "name": "원샷 러닝",
      "url": "https://itwiki.kr/w/%EC%9B%90%EC%83%B7_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "원샷러닝",
      "url": "https://itwiki.kr/w/%EC%9B%90%EC%83%B7%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "원시 프로그램",
      "url": "https://itwiki.kr/w/%EC%9B%90%EC%8B%9C_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "원장",
      "url": "https://itwiki.kr/w/%EC%9B%90%EC%9E%A5"
  },
  {
      "name": "월드 와이드 웹",
      "url": "https://itwiki.kr/w/%EC%9B%94%EB%93%9C_%EC%99%80%EC%9D%B4%EB%93%9C_%EC%9B%B9"
  },
  {
      "name": "월드 와이드 웹 컨소시엄",
      "url": "https://itwiki.kr/w/%EC%9B%94%EB%93%9C_%EC%99%80%EC%9D%B4%EB%93%9C_%EC%9B%B9_%EC%BB%A8%EC%86%8C%EC%8B%9C%EC%97%84"
  },
  {
      "name": "웜",
      "url": "https://itwiki.kr/w/%EC%9B%9C"
  },
  {
      "name": "웨어러블 컴퓨팅",
      "url": "https://itwiki.kr/w/%EC%9B%A8%EC%96%B4%EB%9F%AC%EB%B8%94_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "웹 방화벽",
      "url": "https://itwiki.kr/w/%EC%9B%B9_%EB%B0%A9%ED%99%94%EB%B2%BD"
  },
  {
      "name": "웹 브라우저 포렌식",
      "url": "https://itwiki.kr/w/%EC%9B%B9_%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80_%ED%8F%AC%EB%A0%8C%EC%8B%9D"
  },
  {
      "name": "웹 접근성",
      "url": "https://itwiki.kr/w/%EC%9B%B9_%EC%A0%91%EA%B7%BC%EC%84%B1"
  },
  {
      "name": "웹방화벽",
      "url": "https://itwiki.kr/w/%EC%9B%B9%EB%B0%A9%ED%99%94%EB%B2%BD"
  },
  {
      "name": "웹셸",
      "url": "https://itwiki.kr/w/%EC%9B%B9%EC%85%B8"
  },
  {
      "name": "위임 지분 증명",
      "url": "https://itwiki.kr/w/%EC%9C%84%EC%9E%84_%EC%A7%80%EB%B6%84_%EC%A6%9D%EB%AA%85"
  },
  {
      "name": "위키/건의 사항",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%82%A4/%EA%B1%B4%EC%9D%98_%EC%82%AC%ED%95%AD"
  },
  {
      "name": "위키/관리자",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%82%A4/%EA%B4%80%EB%A6%AC%EC%9E%90"
  },
  {
      "name": "위키/분류",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%82%A4/%EB%B6%84%EB%A5%98"
  },
  {
      "name": "위키/수정 필요",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%82%A4/%EC%88%98%EC%A0%95_%ED%95%84%EC%9A%94"
  },
  {
      "name": "위키/필요 문서",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%82%A4/%ED%95%84%EC%9A%94_%EB%AC%B8%EC%84%9C"
  },
  {
      "name": "위험",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98"
  },
  {
      "name": "위험 감소",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%EA%B0%90%EC%86%8C"
  },
  {
      "name": "위험 관리",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "위험 분석",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "위험 수용",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%EC%88%98%EC%9A%A9"
  },
  {
      "name": "위험 이전",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%EC%9D%B4%EC%A0%84"
  },
  {
      "name": "위험 전가",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%EC%A0%84%EA%B0%80"
  },
  {
      "name": "위험 통제",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "위험 통제 자가 진단",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%ED%86%B5%EC%A0%9C_%EC%9E%90%EA%B0%80_%EC%A7%84%EB%8B%A8"
  },
  {
      "name": "위험 통제 자가 평가",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%ED%86%B5%EC%A0%9C_%EC%9E%90%EA%B0%80_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "위험 회피",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98_%ED%9A%8C%ED%94%BC"
  },
  {
      "name": "위험관리",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "위험관리 방법",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%EA%B4%80%EB%A6%AC_%EB%B0%A9%EB%B2%95"
  },
  {
      "name": "위험분석",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%EB%B6%84%EC%84%9D"
  },
  {
      "name": "위험수용",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%EC%88%98%EC%9A%A9"
  },
  {
      "name": "위험이전",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%EC%9D%B4%EC%A0%84"
  },
  {
      "name": "위험전가",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%EC%A0%84%EA%B0%80"
  },
  {
      "name": "위험통제",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "위험회피",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%97%98%ED%9A%8C%ED%94%BC"
  },
  {
      "name": "위협",
      "url": "https://itwiki.kr/w/%EC%9C%84%ED%98%91"
  },
  {
      "name": "윈도우 DHCP",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_DHCP"
  },
  {
      "name": "윈도우 DNS",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_DNS"
  },
  {
      "name": "윈도우 PE",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_PE"
  },
  {
      "name": "윈도우 SAM",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_SAM"
  },
  {
      "name": "윈도우 SRM",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_SRM"
  },
  {
      "name": "윈도우 ipconfig",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_ipconfig"
  },
  {
      "name": "윈도우 net share",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_net_share"
  },
  {
      "name": "윈도우 netstat",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_netstat"
  },
  {
      "name": "윈도우 감사 로그",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EA%B0%90%EC%82%AC_%EB%A1%9C%EA%B7%B8"
  },
  {
      "name": "윈도우 감사 정책",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EA%B0%90%EC%82%AC_%EC%A0%95%EC%B1%85"
  },
  {
      "name": "윈도우 기본 프로세스",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EA%B8%B0%EB%B3%B8_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "윈도우 레지스트리",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EB%A0%88%EC%A7%80%EC%8A%A4%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "윈도우 루트 키",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EB%A3%A8%ED%8A%B8_%ED%82%A4"
  },
  {
      "name": "윈도우 보안 계정 관리자",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EB%B3%B4%EC%95%88_%EA%B3%84%EC%A0%95_%EA%B4%80%EB%A6%AC%EC%9E%90"
  },
  {
      "name": "윈도우 사용자 권한",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EC%82%AC%EC%9A%A9%EC%9E%90_%EA%B6%8C%ED%95%9C"
  },
  {
      "name": "윈도우 사용자 그룹",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EC%82%AC%EC%9A%A9%EC%9E%90_%EA%B7%B8%EB%A3%B9"
  },
  {
      "name": "윈도우 암호 정책",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EC%95%94%ED%98%B8_%EC%A0%95%EC%B1%85"
  },
  {
      "name": "윈도우 인증",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "윈도우 파워 유저",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%ED%8C%8C%EC%9B%8C_%EC%9C%A0%EC%A0%80"
  },
  {
      "name": "윈도우 파일 시스템",
      "url": "https://itwiki.kr/w/%EC%9C%88%EB%8F%84%EC%9A%B0_%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "유닉스",
      "url": "https://itwiki.kr/w/%EC%9C%A0%EB%8B%89%EC%8A%A4"
  },
  {
      "name": "유닉스 파일시스템",
      "url": "https://itwiki.kr/w/%EC%9C%A0%EB%8B%89%EC%8A%A4_%ED%8C%8C%EC%9D%BC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "유틸리티 트리",
      "url": "https://itwiki.kr/w/%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "은닉 마르코브 모델",
      "url": "https://itwiki.kr/w/%EC%9D%80%EB%8B%89_%EB%A7%88%EB%A5%B4%EC%BD%94%EB%B8%8C_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "은닉 마르코프 모델",
      "url": "https://itwiki.kr/w/%EC%9D%80%EB%8B%89_%EB%A7%88%EB%A5%B4%EC%BD%94%ED%94%84_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "은닉 마코프 모델",
      "url": "https://itwiki.kr/w/%EC%9D%80%EB%8B%89_%EB%A7%88%EC%BD%94%ED%94%84_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "은행 계정계",
      "url": "https://itwiki.kr/w/%EC%9D%80%ED%96%89_%EA%B3%84%EC%A0%95%EA%B3%84"
  },
  {
      "name": "은행 정보계",
      "url": "https://itwiki.kr/w/%EC%9D%80%ED%96%89_%EC%A0%95%EB%B3%B4%EA%B3%84"
  },
  {
      "name": "은행 채널계",
      "url": "https://itwiki.kr/w/%EC%9D%80%ED%96%89_%EC%B1%84%EB%84%90%EA%B3%84"
  },
  {
      "name": "응집도",
      "url": "https://itwiki.kr/w/%EC%9D%91%EC%A7%91%EB%8F%84"
  },
  {
      "name": "의료 데이터",
      "url": "https://itwiki.kr/w/%EC%9D%98%EB%A3%8C_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "의사 결정 나무",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%82%AC_%EA%B2%B0%EC%A0%95_%EB%82%98%EB%AC%B4"
  },
  {
      "name": "의사결정 나무",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95_%EB%82%98%EB%AC%B4"
  },
  {
      "name": "의사결정 시스템",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "의사결정 지원 시스템",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95_%EC%A7%80%EC%9B%90_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "의사결정나무",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95%EB%82%98%EB%AC%B4"
  },
  {
      "name": "의존관계 역전 원칙",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%A1%B4%EA%B4%80%EA%B3%84_%EC%97%AD%EC%A0%84_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "의존관계 역전의 원칙",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%A1%B4%EA%B4%80%EA%B3%84_%EC%97%AD%EC%A0%84%EC%9D%98_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "의존성 주입",
      "url": "https://itwiki.kr/w/%EC%9D%98%EC%A1%B4%EC%84%B1_%EC%A3%BC%EC%9E%85"
  },
  {
      "name": "이더넷",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%8D%94%EB%84%B7"
  },
  {
      "name": "이동통신",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%8F%99%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "이동통신 기술",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%8F%99%ED%86%B5%EC%8B%A0_%EA%B8%B0%EC%88%A0"
  },
  {
      "name": "이동통신망",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%8F%99%ED%86%B5%EC%8B%A0%EB%A7%9D"
  },
  {
      "name": "이력 데이터",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%A0%A5_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "이메일",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%A9%94%EC%9D%BC"
  },
  {
      "name": "이메일 공격",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%A9%94%EC%9D%BC_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "이메일 보안 프로토콜",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%A9%94%EC%9D%BC_%EB%B3%B4%EC%95%88_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "이메일 프로토콜",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%A9%94%EC%9D%BC_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "이블 트윈",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%B8%94_%ED%8A%B8%EC%9C%88"
  },
  {
      "name": "이블트윈",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EB%B8%94%ED%8A%B8%EC%9C%88"
  },
  {
      "name": "이상 거래 탐지 시스템",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%83%81_%EA%B1%B0%EB%9E%98_%ED%83%90%EC%A7%80_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "이상금융거래정보 공유 시스템",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%83%81%EA%B8%88%EC%9C%B5%EA%B1%B0%EB%9E%98%EC%A0%95%EB%B3%B4_%EA%B3%B5%EC%9C%A0_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "이상금융거래탐지시스템",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%83%81%EA%B8%88%EC%9C%B5%EA%B1%B0%EB%9E%98%ED%83%90%EC%A7%80%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "이상치",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%83%81%EC%B9%98"
  },
  {
      "name": "이슈",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%8A%88"
  },
  {
      "name": "이중 모드",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A4%91_%EB%AA%A8%EB%93%9C"
  },
  {
      "name": "이중 서명",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A4%91_%EC%84%9C%EB%AA%85"
  },
  {
      "name": "이중 연결 리스트",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A4%91_%EC%97%B0%EA%B2%B0_%EB%A6%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "이중 인증",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A4%91_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "이중서명",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A4%91%EC%84%9C%EB%AA%85"
  },
  {
      "name": "이중화",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A4%91%ED%99%94"
  },
  {
      "name": "이진 트리",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A7%84_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "이진트리",
      "url": "https://itwiki.kr/w/%EC%9D%B4%EC%A7%84%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "이해관계",
      "url": "https://itwiki.kr/w/%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84"
  },
  {
      "name": "이해관계자",
      "url": "https://itwiki.kr/w/%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90"
  },
  {
      "name": "이해관계자 관리",
      "url": "https://itwiki.kr/w/%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "이해관계자 교류",
      "url": "https://itwiki.kr/w/%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90_%EA%B5%90%EB%A5%98"
  },
  {
      "name": "이해관계자 큐브",
      "url": "https://itwiki.kr/w/%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90_%ED%81%90%EB%B8%8C"
  },
  {
      "name": "익명정보",
      "url": "https://itwiki.kr/w/%EC%9D%B5%EB%AA%85%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "익스트림 프로그래밍",
      "url": "https://itwiki.kr/w/%EC%9D%B5%EC%8A%A4%ED%8A%B8%EB%A6%BC_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D"
  },
  {
      "name": "익스플로잇",
      "url": "https://itwiki.kr/w/%EC%9D%B5%EC%8A%A4%ED%94%8C%EB%A1%9C%EC%9E%87"
  },
  {
      "name": "인 하우스",
      "url": "https://itwiki.kr/w/%EC%9D%B8_%ED%95%98%EC%9A%B0%EC%8A%A4"
  },
  {
      "name": "인간 중심의 AI 원칙(일본)",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B0%84_%EC%A4%91%EC%8B%AC%EC%9D%98_AI_%EC%9B%90%EC%B9%99(%EC%9D%BC%EB%B3%B8)"
  },
  {
      "name": "인공 신경망",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5_%EC%8B%A0%EA%B2%BD%EB%A7%9D"
  },
  {
      "name": "인공 지능",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5_%EC%A7%80%EB%8A%A5"
  },
  {
      "name": "인공신경망",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%8B%A0%EA%B2%BD%EB%A7%9D"
  },
  {
      "name": "인공지능",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5"
  },
  {
      "name": "인공지능 과적합 문제",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EA%B3%BC%EC%A0%81%ED%95%A9_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "인공지능 기반 시스템 특성",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EA%B8%B0%EB%B0%98_%EC%8B%9C%EC%8A%A4%ED%85%9C_%ED%8A%B9%EC%84%B1"
  },
  {
      "name": "인공지능 부적합 문제",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EB%B6%80%EC%A0%81%ED%95%A9_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "인공지능 신뢰성",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%8B%A0%EB%A2%B0%EC%84%B1"
  },
  {
      "name": "인공지능 언더피팅",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%96%B8%EB%8D%94%ED%94%BC%ED%8C%85"
  },
  {
      "name": "인공지능 오버피팅",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%98%A4%EB%B2%84%ED%94%BC%ED%8C%85"
  },
  {
      "name": "인공지능 윤리",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%9C%A4%EB%A6%AC"
  },
  {
      "name": "인공지능 윤리 기준",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%9C%A4%EB%A6%AC_%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "인공지능 윤리기준",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%EC%9C%A4%EB%A6%AC%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "인공지능 평가",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "인공지능 하드웨어",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5_%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4"
  },
  {
      "name": "인수 테스트",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%88%98_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "인수테스트",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%88%98%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "인슈어테크",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%8A%88%EC%96%B4%ED%85%8C%ED%81%AC"
  },
  {
      "name": "인앱 결제",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%95%B1_%EA%B2%B0%EC%A0%9C"
  },
  {
      "name": "인젝터",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%A0%9D%ED%84%B0"
  },
  {
      "name": "인증",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "인증 및 세션 관리 취약점",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%A6%9D_%EB%B0%8F_%EC%84%B8%EC%85%98_%EA%B4%80%EB%A6%AC_%EC%B7%A8%EC%95%BD%EC%A0%90"
  },
  {
      "name": "인증 우회",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%A6%9D_%EC%9A%B0%ED%9A%8C"
  },
  {
      "name": "인증 토큰",
      "url": "https://itwiki.kr/w/%EC%9D%B8%EC%A6%9D_%ED%86%A0%ED%81%B0"
  },
  {
      "name": "인터넷 도메인",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%EB%84%B7_%EB%8F%84%EB%A9%94%EC%9D%B8"
  },
  {
      "name": "인터넷 엔지니어링 태스크 포스",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%EB%84%B7_%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81_%ED%83%9C%EC%8A%A4%ED%81%AC_%ED%8F%AC%EC%8A%A4"
  },
  {
      "name": "인터넷 프로토콜",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "인터럽트",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%EB%9F%BD%ED%8A%B8"
  },
  {
      "name": "인터리빙",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%EB%A6%AC%EB%B9%99"
  },
  {
      "name": "인터체인",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "인터페이스 분리의 원칙",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4_%EB%B6%84%EB%A6%AC%EC%9D%98_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "인터프리터",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%84%B0%ED%94%84%EB%A6%AC%ED%84%B0"
  },
  {
      "name": "인포러스트",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%8F%AC%EB%9F%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "인하우스",
      "url": "https://itwiki.kr/w/%EC%9D%B8%ED%95%98%EC%9A%B0%EC%8A%A4"
  },
  {
      "name": "일방향 암호화",
      "url": "https://itwiki.kr/w/%EC%9D%BC%EB%B0%A9%ED%96%A5_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "일본 전범 기업",
      "url": "https://itwiki.kr/w/%EC%9D%BC%EB%B3%B8_%EC%A0%84%EB%B2%94_%EA%B8%B0%EC%97%85"
  },
  {
      "name": "일본 정보은행",
      "url": "https://itwiki.kr/w/%EC%9D%BC%EB%B3%B8_%EC%A0%95%EB%B3%B4%EC%9D%80%ED%96%89"
  },
  {
      "name": "일본 제품 불매 운동",
      "url": "https://itwiki.kr/w/%EC%9D%BC%EB%B3%B8_%EC%A0%9C%ED%92%88_%EB%B6%88%EB%A7%A4_%EC%9A%B4%EB%8F%99"
  },
  {
      "name": "일정 관리",
      "url": "https://itwiki.kr/w/%EC%9D%BC%EC%A0%95_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "일정 단축",
      "url": "https://itwiki.kr/w/%EC%9D%BC%EC%A0%95_%EB%8B%A8%EC%B6%95"
  },
  {
      "name": "임베디드 시스템",
      "url": "https://itwiki.kr/w/%EC%9E%84%EB%B2%A0%EB%94%94%EB%93%9C_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "임의적 접근통제",
      "url": "https://itwiki.kr/w/%EC%9E%84%EC%9D%98%EC%A0%81_%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "입출력 장치",
      "url": "https://itwiki.kr/w/%EC%9E%85%EC%B6%9C%EB%A0%A5_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "입출력장치",
      "url": "https://itwiki.kr/w/%EC%9E%85%EC%B6%9C%EB%A0%A5%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "자격증",
      "url": "https://itwiki.kr/w/%EC%9E%90%EA%B2%A9%EC%A6%9D"
  },
  {
      "name": "자기주권 신원",
      "url": "https://itwiki.kr/w/%EC%9E%90%EA%B8%B0%EC%A3%BC%EA%B6%8C_%EC%8B%A0%EC%9B%90"
  },
  {
      "name": "자료 구조",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C_%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "자료 사전",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C_%EC%82%AC%EC%A0%84"
  },
  {
      "name": "자료 처리 시스템",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C_%EC%B2%98%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "자료 흐름도",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C_%ED%9D%90%EB%A6%84%EB%8F%84"
  },
  {
      "name": "자료구조",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "자료사전",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C%EC%82%AC%EC%A0%84"
  },
  {
      "name": "자료흐름도",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%A3%8C%ED%9D%90%EB%A6%84%EB%8F%84"
  },
  {
      "name": "자바스크립트 배열",
      "url": "https://itwiki.kr/w/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EB%B0%B0%EC%97%B4"
  },
  {
      "name": "자산",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%82%B0"
  },
  {
      "name": "자산의 중요도 평가기준",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%82%B0%EC%9D%98_%EC%A4%91%EC%9A%94%EB%8F%84_%ED%8F%89%EA%B0%80%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "자산의중요도평가기준",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%82%B0%EC%9D%98%EC%A4%91%EC%9A%94%EB%8F%84%ED%8F%89%EA%B0%80%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "자연어 처리",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%97%B0%EC%96%B4_%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "자연어처리",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%97%B0%EC%96%B4%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "자원 최적화",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%9B%90_%EC%B5%9C%EC%A0%81%ED%99%94"
  },
  {
      "name": "자유방임주의",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%9C%A0%EB%B0%A9%EC%9E%84%EC%A3%BC%EC%9D%98"
  },
  {
      "name": "자율주행차",
      "url": "https://itwiki.kr/w/%EC%9E%90%EC%9C%A8%EC%A3%BC%ED%96%89%EC%B0%A8"
  },
  {
      "name": "작업 기술서",
      "url": "https://itwiki.kr/w/%EC%9E%91%EC%97%85_%EA%B8%B0%EC%88%A0%EC%84%9C"
  },
  {
      "name": "작업 증명",
      "url": "https://itwiki.kr/w/%EC%9E%91%EC%97%85_%EC%A6%9D%EB%AA%85"
  },
  {
      "name": "작업증명",
      "url": "https://itwiki.kr/w/%EC%9E%91%EC%97%85%EC%A6%9D%EB%AA%85"
  },
  {
      "name": "잘 알려진 포트",
      "url": "https://itwiki.kr/w/%EC%9E%98_%EC%95%8C%EB%A0%A4%EC%A7%84_%ED%8F%AC%ED%8A%B8"
  },
  {
      "name": "장애 허용",
      "url": "https://itwiki.kr/w/%EC%9E%A5%EC%95%A0_%ED%97%88%EC%9A%A9"
  },
  {
      "name": "장애허용",
      "url": "https://itwiki.kr/w/%EC%9E%A5%EC%95%A0%ED%97%88%EC%9A%A9"
  },
  {
      "name": "재공학",
      "url": "https://itwiki.kr/w/%EC%9E%AC%EA%B3%B5%ED%95%99"
  },
  {
      "name": "재전송 공격",
      "url": "https://itwiki.kr/w/%EC%9E%AC%EC%A0%84%EC%86%A1_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "재해 복구",
      "url": "https://itwiki.kr/w/%EC%9E%AC%ED%95%B4_%EB%B3%B5%EA%B5%AC"
  },
  {
      "name": "재해 복구 설비",
      "url": "https://itwiki.kr/w/%EC%9E%AC%ED%95%B4_%EB%B3%B5%EA%B5%AC_%EC%84%A4%EB%B9%84"
  },
  {
      "name": "재해복구",
      "url": "https://itwiki.kr/w/%EC%9E%AC%ED%95%B4%EB%B3%B5%EA%B5%AC"
  },
  {
      "name": "재해복구 설비",
      "url": "https://itwiki.kr/w/%EC%9E%AC%ED%95%B4%EB%B3%B5%EA%B5%AC_%EC%84%A4%EB%B9%84"
  },
  {
      "name": "재현 데이터",
      "url": "https://itwiki.kr/w/%EC%9E%AC%ED%98%84_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "저널링",
      "url": "https://itwiki.kr/w/%EC%A0%80%EB%84%90%EB%A7%81"
  },
  {
      "name": "저전력 블루투스 기술",
      "url": "https://itwiki.kr/w/%EC%A0%80%EC%A0%84%EB%A0%A5_%EB%B8%94%EB%A3%A8%ED%88%AC%EC%8A%A4_%EA%B8%B0%EC%88%A0"
  },
  {
      "name": "적대적 공격",
      "url": "https://itwiki.kr/w/%EC%A0%81%EB%8C%80%EC%A0%81_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "적대적 스티커",
      "url": "https://itwiki.kr/w/%EC%A0%81%EB%8C%80%EC%A0%81_%EC%8A%A4%ED%8B%B0%EC%BB%A4"
  },
  {
      "name": "적응형 웹",
      "url": "https://itwiki.kr/w/%EC%A0%81%EC%9D%91%ED%98%95_%EC%9B%B9"
  },
  {
      "name": "적응형 웹 디자인",
      "url": "https://itwiki.kr/w/%EC%A0%81%EC%9D%91%ED%98%95_%EC%9B%B9_%EB%94%94%EC%9E%90%EC%9D%B8"
  }
]);
_itwiki = _itwiki.concat([
  {
      "name": "전가산기",
      "url": "https://itwiki.kr/w/%EC%A0%84%EA%B0%80%EC%82%B0%EA%B8%B0"
  },
  {
      "name": "전기전자기술자협회",
      "url": "https://itwiki.kr/w/%EC%A0%84%EA%B8%B0%EC%A0%84%EC%9E%90%EA%B8%B0%EC%88%A0%EC%9E%90%ED%98%91%ED%9A%8C"
  },
  {
      "name": "전략 정보 시스템",
      "url": "https://itwiki.kr/w/%EC%A0%84%EB%9E%B5_%EC%A0%95%EB%B3%B4_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "전략적 기업 경영",
      "url": "https://itwiki.kr/w/%EC%A0%84%EB%9E%B5%EC%A0%81_%EA%B8%B0%EC%97%85_%EA%B2%BD%EC%98%81"
  },
  {
      "name": "전문 용어의 띄어쓰기",
      "url": "https://itwiki.kr/w/%EC%A0%84%EB%AC%B8_%EC%9A%A9%EC%96%B4%EC%9D%98_%EB%9D%84%EC%96%B4%EC%93%B0%EA%B8%B0"
  },
  {
      "name": "전문가 시스템",
      "url": "https://itwiki.kr/w/%EC%A0%84%EB%AC%B8%EA%B0%80_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "전문성의 민주화",
      "url": "https://itwiki.kr/w/%EC%A0%84%EB%AC%B8%EC%84%B1%EC%9D%98_%EB%AF%BC%EC%A3%BC%ED%99%94"
  },
  {
      "name": "전문심리위원",
      "url": "https://itwiki.kr/w/%EC%A0%84%EB%AC%B8%EC%8B%AC%EB%A6%AC%EC%9C%84%EC%9B%90"
  },
  {
      "name": "전사 아키텍처",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%82%AC_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "전사적 아키텍처",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%82%AC%EC%A0%81_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "전사적 아키텍처 계획",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%82%AC%EC%A0%81_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "전사적 자원 관리",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%82%AC%EC%A0%81_%EC%9E%90%EC%9B%90_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "전사적 자원관리",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%82%AC%EC%A0%81_%EC%9E%90%EC%9B%90%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "전송 오류",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%86%A1_%EC%98%A4%EB%A5%98"
  },
  {
      "name": "전송 오류 검출",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%86%A1_%EC%98%A4%EB%A5%98_%EA%B2%80%EC%B6%9C"
  },
  {
      "name": "전송 오류 제어",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%86%A1_%EC%98%A4%EB%A5%98_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "전송 제어 장치",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "전용 회선",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9A%A9_%ED%9A%8C%EC%84%A0"
  },
  {
      "name": "전이 학습",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9D%B4_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "전이학습",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9D%B4%ED%95%99%EC%8A%B5"
  },
  {
      "name": "전자 봉투",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%EB%B4%89%ED%88%AC"
  },
  {
      "name": "전자 서명",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%EC%84%9C%EB%AA%85"
  },
  {
      "name": "전자 입찰",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%EC%9E%85%EC%B0%B0"
  },
  {
      "name": "전자 정보 처리 시스템",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%EC%A0%95%EB%B3%B4_%EC%B2%98%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "전자 정부 프레임워크",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%EC%A0%95%EB%B6%80_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "전자 투표",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%ED%88%AC%ED%91%9C"
  },
  {
      "name": "전자 화폐",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90_%ED%99%94%ED%8F%90"
  },
  {
      "name": "전자문서",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EB%AC%B8%EC%84%9C"
  },
  {
      "name": "전자부품연구원",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EB%B6%80%ED%92%88%EC%97%B0%EA%B5%AC%EC%9B%90"
  },
  {
      "name": "전자서명",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EC%84%9C%EB%AA%85"
  },
  {
      "name": "전자정부 프레임워크",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80_%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "전자정부법",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%EB%B2%95"
  },
  {
      "name": "전자정부프레임워크",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "전자지불 시스템",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%EC%A7%80%EB%B6%88_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "전자투표",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%ED%88%AC%ED%91%9C"
  },
  {
      "name": "전자화폐",
      "url": "https://itwiki.kr/w/%EC%A0%84%EC%9E%90%ED%99%94%ED%8F%90"
  },
  {
      "name": "점근 표기법",
      "url": "https://itwiki.kr/w/%EC%A0%90%EA%B7%BC_%ED%91%9C%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "점근적 표기법",
      "url": "https://itwiki.kr/w/%EC%A0%90%EA%B7%BC%EC%A0%81_%ED%91%9C%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "접근 통제",
      "url": "https://itwiki.kr/w/%EC%A0%91%EA%B7%BC_%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "접근제어",
      "url": "https://itwiki.kr/w/%EC%A0%91%EA%B7%BC%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "접근통제",
      "url": "https://itwiki.kr/w/%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "접근통제 모델",
      "url": "https://itwiki.kr/w/%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "접근통제 정책",
      "url": "https://itwiki.kr/w/%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C_%EC%A0%95%EC%B1%85"
  },
  {
      "name": "접근통제정책",
      "url": "https://itwiki.kr/w/%EC%A0%91%EA%B7%BC%ED%86%B5%EC%A0%9C%EC%A0%95%EC%B1%85"
  },
  {
      "name": "접속기록",
      "url": "https://itwiki.kr/w/%EC%A0%91%EC%86%8D%EA%B8%B0%EB%A1%9D"
  },
  {
      "name": "정규식",
      "url": "https://itwiki.kr/w/%EC%A0%95%EA%B7%9C%EC%8B%9D"
  },
  {
      "name": "정규형",
      "url": "https://itwiki.kr/w/%EC%A0%95%EA%B7%9C%ED%98%95"
  },
  {
      "name": "정규화",
      "url": "https://itwiki.kr/w/%EC%A0%95%EA%B7%9C%ED%99%94"
  },
  {
      "name": "정량적 위험 분석",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%9F%89%EC%A0%81_%EC%9C%84%ED%97%98_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "정량적 위험분석",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%9F%89%EC%A0%81_%EC%9C%84%ED%97%98%EB%B6%84%EC%84%9D"
  },
  {
      "name": "정렬",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%A0%AC"
  },
  {
      "name": "정렬 알고리즘",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "정맥인식",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%A7%A5%EC%9D%B8%EC%8B%9D"
  },
  {
      "name": "정밀도",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B0%80%EB%8F%84"
  },
  {
      "name": "정보 공유 분석 센터",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4_%EA%B3%B5%EC%9C%A0_%EB%B6%84%EC%84%9D_%EC%84%BC%ED%84%B0"
  },
  {
      "name": "정보 공유·분석 센터",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4_%EA%B3%B5%EC%9C%A0%C2%B7%EB%B6%84%EC%84%9D_%EC%84%BC%ED%84%B0"
  },
  {
      "name": "정보 기술 아키텍처",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4_%EA%B8%B0%EC%88%A0_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98"
  },
  {
      "name": "정보 보고 시스템",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4_%EB%B3%B4%EA%B3%A0_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "정보 은닉",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4_%EC%9D%80%EB%8B%89"
  },
  {
      "name": "정보 전략 계획",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4_%EC%A0%84%EB%9E%B5_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "정보공유 분석센터",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B3%B5%EC%9C%A0_%EB%B6%84%EC%84%9D%EC%84%BC%ED%84%B0"
  },
  {
      "name": "정보공유분석센터",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B3%B5%EC%9C%A0%EB%B6%84%EC%84%9D%EC%84%BC%ED%84%B0"
  },
  {
      "name": "정보공학 방법론",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B3%B5%ED%95%99_%EB%B0%A9%EB%B2%95%EB%A1%A0"
  },
  {
      "name": "정보관리기술사",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC"
  },
  {
      "name": "정보관리기술사 110회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_110%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 111회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_111%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 113회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_113%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 114회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_114%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 115회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_115%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 116회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_116%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 117회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_117%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 118회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_118%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 119회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_119%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 120회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_120%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 121회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_121%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 122회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_122%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 123회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_123%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 124회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_124%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 125회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_125%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 126회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_126%ED%9A%8C"
  },
  {
      "name": "정보관리기술사 2020년 일정",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_2020%EB%85%84_%EC%9D%BC%EC%A0%95"
  },
  {
      "name": "정보관리기술사 2021년 일정",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EA%B4%80%EB%A6%AC%EA%B8%B0%EC%88%A0%EC%82%AC_2021%EB%85%84_%EC%9D%BC%EC%A0%95"
  },
  {
      "name": "정보보안 관리실태 평가",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88_%EA%B4%80%EB%A6%AC%EC%8B%A4%ED%83%9C_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "정보보안기사",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC"
  },
  {
      "name": "정보보안기사 10회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_10%ED%9A%8C"
  },
  {
      "name": "정보보안기사 11회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_11%ED%9A%8C"
  },
  {
      "name": "정보보안기사 12회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_12%ED%9A%8C"
  },
  {
      "name": "정보보안기사 13회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_13%ED%9A%8C"
  },
  {
      "name": "정보보안기사 14회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_14%ED%9A%8C"
  },
  {
      "name": "정보보안기사 15회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_15%ED%9A%8C"
  },
  {
      "name": "정보보안기사 1회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_1%ED%9A%8C"
  },
  {
      "name": "정보보안기사 2회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_2%ED%9A%8C"
  },
  {
      "name": "정보보안기사 3회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_3%ED%9A%8C"
  },
  {
      "name": "정보보안기사 4회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_4%ED%9A%8C"
  },
  {
      "name": "정보보안기사 5회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_5%ED%9A%8C"
  },
  {
      "name": "정보보안기사 6회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_6%ED%9A%8C"
  },
  {
      "name": "정보보안기사 7회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_7%ED%9A%8C"
  },
  {
      "name": "정보보안기사 8회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_8%ED%9A%8C"
  },
  {
      "name": "정보보안기사 9회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_9%ED%9A%8C"
  },
  {
      "name": "정보보안기사 실기 12회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_%EC%8B%A4%EA%B8%B0_12%ED%9A%8C"
  },
  {
      "name": "정보보안기사 실기 13회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EA%B8%B0%EC%82%AC_%EC%8B%A4%EA%B8%B0_13%ED%9A%8C"
  },
  {
      "name": "정보보안산업기사",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88%EC%82%B0%EC%97%85%EA%B8%B0%EC%82%AC"
  },
  {
      "name": "정보보호 거버넌스",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8_%EA%B1%B0%EB%B2%84%EB%84%8C%EC%8A%A4"
  },
  {
      "name": "정보보호 관리체계",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8_%EA%B4%80%EB%A6%AC%EC%B2%B4%EA%B3%84"
  },
  {
      "name": "정보보호 및 개인정보보호관리체계 인증",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8_%EB%B0%8F_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EA%B4%80%EB%A6%AC%EC%B2%B4%EA%B3%84_%EC%9D%B8%EC%A6%9D"
  },
  {
      "name": "정보보호 정책",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8_%EC%A0%95%EC%B1%85"
  },
  {
      "name": "정보보호 최고책임자",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8_%EC%B5%9C%EA%B3%A0%EC%B1%85%EC%9E%84%EC%9E%90"
  },
  {
      "name": "정보보호대책",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EB%8C%80%EC%B1%85"
  },
  {
      "name": "정보보호시스템 공통평가기준",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B3%B5%ED%86%B5%ED%8F%89%EA%B0%80%EA%B8%B0%EC%A4%80"
  },
  {
      "name": "정보보호최고책임자",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EC%B5%9C%EA%B3%A0%EC%B1%85%EC%9E%84%EC%9E%90"
  },
  {
      "name": "정보시스템 감리",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B0%90%EB%A6%AC"
  },
  {
      "name": "정보시스템 감리/법적 근거",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EC%8B%9C%EC%8A%A4%ED%85%9C_%EA%B0%90%EB%A6%AC/%EB%B2%95%EC%A0%81_%EA%B7%BC%EA%B1%B0"
  },
  {
      "name": "정보처리시스템",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "정보통신기반 보호법",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98_%EB%B3%B4%ED%98%B8%EB%B2%95"
  },
  {
      "name": "정보통신기반보호위원회",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EB%B3%B4%ED%98%B8%EC%9C%84%EC%9B%90%ED%9A%8C"
  },
  {
      "name": "정보통신기반시설",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4"
  },
  {
      "name": "정보통신기획평가원",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%ED%9A%8D%ED%8F%89%EA%B0%80%EC%9B%90"
  },
  {
      "name": "정보통신망법",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EB%A7%9D%EB%B2%95"
  },
  {
      "name": "정보통신산업진흥원",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EC%82%B0%EC%97%85%EC%A7%84%ED%9D%A5%EC%9B%90"
  },
  {
      "name": "정보통신서비스 제공자",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EC%84%9C%EB%B9%84%EC%8A%A4_%EC%A0%9C%EA%B3%B5%EC%9E%90"
  },
  {
      "name": "정부 조직 영어 명칭",
      "url": "https://itwiki.kr/w/%EC%A0%95%EB%B6%80_%EC%A1%B0%EC%A7%81_%EC%98%81%EC%96%B4_%EB%AA%85%EC%B9%AD"
  },
  {
      "name": "정성적 위험분석",
      "url": "https://itwiki.kr/w/%EC%A0%95%EC%84%B1%EC%A0%81_%EC%9C%84%ED%97%98%EB%B6%84%EC%84%9D"
  },
  {
      "name": "정적 검토",
      "url": "https://itwiki.kr/w/%EC%A0%95%EC%A0%81_%EA%B2%80%ED%86%A0"
  },
  {
      "name": "정적 인덱스",
      "url": "https://itwiki.kr/w/%EC%A0%95%EC%A0%81_%EC%9D%B8%EB%8D%B1%EC%8A%A4"
  },
  {
      "name": "정적 인덱싱",
      "url": "https://itwiki.kr/w/%EC%A0%95%EC%A0%81_%EC%9D%B8%EB%8D%B1%EC%8B%B1"
  },
  {
      "name": "정적 테스트",
      "url": "https://itwiki.kr/w/%EC%A0%95%EC%A0%81_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "정형 기술 검토",
      "url": "https://itwiki.kr/w/%EC%A0%95%ED%98%95_%EA%B8%B0%EC%88%A0_%EA%B2%80%ED%86%A0"
  },
  {
      "name": "정형 데이터",
      "url": "https://itwiki.kr/w/%EC%A0%95%ED%98%95_%EB%8D%B0%EC%9D%B4%ED%84%B0"
  },
  {
      "name": "제4차 산업혁명",
      "url": "https://itwiki.kr/w/%EC%A0%9C4%EC%B0%A8_%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85"
  },
  {
      "name": "제4차 산업혁명 접근법",
      "url": "https://itwiki.kr/w/%EC%A0%9C4%EC%B0%A8_%EC%82%B0%EC%97%85%ED%98%81%EB%AA%85_%EC%A0%91%EA%B7%BC%EB%B2%95"
  },
  {
      "name": "제로 데이 공격",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EB%A1%9C_%EB%8D%B0%EC%9D%B4_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "제로 레이팅",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EB%A1%9C_%EB%A0%88%EC%9D%B4%ED%8C%85"
  },
  {
      "name": "제로 트러스트",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EB%A1%9C_%ED%8A%B8%EB%9F%AC%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "제로데이 공격",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EB%A1%9C%EB%8D%B0%EC%9D%B4_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "제로샷 러닝",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EB%A1%9C%EC%83%B7_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "제로샷러닝",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EB%A1%9C%EC%83%B7%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "제안 요청서",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EC%95%88_%EC%9A%94%EC%B2%AD%EC%84%9C"
  },
  {
      "name": "제안요청서",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EC%95%88%EC%9A%94%EC%B2%AD%EC%84%9C"
  },
  {
      "name": "제약 이론",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EC%95%BD_%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "제약이론",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EC%95%BD%EC%9D%B4%EB%A1%A0"
  },
  {
      "name": "제어 장치",
      "url": "https://itwiki.kr/w/%EC%A0%9C%EC%96%B4_%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "제품 계열 공학",
      "url": "https://itwiki.kr/w/%EC%A0%9C%ED%92%88_%EA%B3%84%EC%97%B4_%EA%B3%B5%ED%95%99"
  },
  {
      "name": "제품 백로그",
      "url": "https://itwiki.kr/w/%EC%A0%9C%ED%92%88_%EB%B0%B1%EB%A1%9C%EA%B7%B8"
  },
  {
      "name": "제한 거리 모뎀",
      "url": "https://itwiki.kr/w/%EC%A0%9C%ED%95%9C_%EA%B1%B0%EB%A6%AC_%EB%AA%A8%EB%8E%80"
  },
  {
      "name": "조건/결정 커버리지",
      "url": "https://itwiki.kr/w/%EC%A1%B0%EA%B1%B4/%EA%B2%B0%EC%A0%95_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "조건 커버리지",
      "url": "https://itwiki.kr/w/%EC%A1%B0%EA%B1%B4_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "조직 체계",
      "url": "https://itwiki.kr/w/%EC%A1%B0%EC%A7%81_%EC%B2%B4%EA%B3%84"
  },
  {
      "name": "조직 프로세스 자산",
      "url": "https://itwiki.kr/w/%EC%A1%B0%EC%A7%81_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%9E%90%EC%82%B0"
  },
  {
      "name": "조크",
      "url": "https://itwiki.kr/w/%EC%A1%B0%ED%81%AC"
  },
  {
      "name": "좀비 프로세스",
      "url": "https://itwiki.kr/w/%EC%A2%80%EB%B9%84_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "종속자",
      "url": "https://itwiki.kr/w/%EC%A2%85%EC%86%8D%EC%9E%90"
  },
  {
      "name": "주공정법",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EA%B3%B5%EC%A0%95%EB%B2%95"
  },
  {
      "name": "주기억장치",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EA%B8%B0%EC%96%B5%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "주민등록번호",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%B2%88%ED%98%B8"
  },
  {
      "name": "주성분 분석",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EC%84%B1%EB%B6%84_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "주요 정보통신 기반시설",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EC%9A%94_%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0_%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4"
  },
  {
      "name": "주요정보통신기반시설",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EC%9A%94%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4"
  },
  {
      "name": "주요정보통신기반시설 취약점 분석·평가 기관",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EC%9A%94%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4_%EC%B7%A8%EC%95%BD%EC%A0%90_%EB%B6%84%EC%84%9D%C2%B7%ED%8F%89%EA%B0%80_%EA%B8%B0%EA%B4%80"
  },
  {
      "name": "주요통신기반시설 취약점 분석·평가 기관",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EC%9A%94%ED%86%B5%EC%8B%A0%EA%B8%B0%EB%B0%98%EC%8B%9C%EC%84%A4_%EC%B7%A8%EC%95%BD%EC%A0%90_%EB%B6%84%EC%84%9D%C2%B7%ED%8F%89%EA%B0%80_%EA%B8%B0%EA%B4%80"
  },
  {
      "name": "주코의 삼각형",
      "url": "https://itwiki.kr/w/%EC%A3%BC%EC%BD%94%EC%9D%98_%EC%82%BC%EA%B0%81%ED%98%95"
  },
  {
      "name": "준지도 학습",
      "url": "https://itwiki.kr/w/%EC%A4%80%EC%A7%80%EB%8F%84_%ED%95%99%EC%8A%B5"
  },
  {
      "name": "중상주의",
      "url": "https://itwiki.kr/w/%EC%A4%91%EC%83%81%EC%A3%BC%EC%9D%98"
  },
  {
      "name": "중앙처리장치",
      "url": "https://itwiki.kr/w/%EC%A4%91%EC%95%99%EC%B2%98%EB%A6%AC%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "중앙처리장치/제어장치",
      "url": "https://itwiki.kr/w/%EC%A4%91%EC%95%99%EC%B2%98%EB%A6%AC%EC%9E%A5%EC%B9%98/%EC%A0%9C%EC%96%B4%EC%9E%A5%EC%B9%98"
  },
  {
      "name": "중역 정보 시스템",
      "url": "https://itwiki.kr/w/%EC%A4%91%EC%97%AD_%EC%A0%95%EB%B3%B4_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "증강 분석",
      "url": "https://itwiki.kr/w/%EC%A6%9D%EA%B0%95_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "증강 현실",
      "url": "https://itwiki.kr/w/%EC%A6%9D%EA%B0%95_%ED%98%84%EC%8B%A4"
  },
  {
      "name": "증강현실",
      "url": "https://itwiki.kr/w/%EC%A6%9D%EA%B0%95%ED%98%84%EC%8B%A4"
  },
  {
      "name": "지그비",
      "url": "https://itwiki.kr/w/%EC%A7%80%EA%B7%B8%EB%B9%84"
  },
  {
      "name": "지능형 CCTV 스마트 관제",
      "url": "https://itwiki.kr/w/%EC%A7%80%EB%8A%A5%ED%98%95_CCTV_%EC%8A%A4%EB%A7%88%ED%8A%B8_%EA%B4%80%EC%A0%9C"
  },
  {
      "name": "지능형 정부",
      "url": "https://itwiki.kr/w/%EC%A7%80%EB%8A%A5%ED%98%95_%EC%A0%95%EB%B6%80"
  },
  {
      "name": "지능형 지속공격",
      "url": "https://itwiki.kr/w/%EC%A7%80%EB%8A%A5%ED%98%95_%EC%A7%80%EC%86%8D%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "지멘스 4 뷰",
      "url": "https://itwiki.kr/w/%EC%A7%80%EB%A9%98%EC%8A%A4_4_%EB%B7%B0"
  },
  {
      "name": "지분 증명",
      "url": "https://itwiki.kr/w/%EC%A7%80%EB%B6%84_%EC%A6%9D%EB%AA%85"
  },
  {
      "name": "지속가능한 발전 목표",
      "url": "https://itwiki.kr/w/%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%ED%95%9C_%EB%B0%9C%EC%A0%84_%EB%AA%A9%ED%91%9C"
  },
  {
      "name": "지식 관리 시스템",
      "url": "https://itwiki.kr/w/%EC%A7%80%EC%8B%9D_%EA%B4%80%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "지식정보보안 컨설팅전문업체",
      "url": "https://itwiki.kr/w/%EC%A7%80%EC%8B%9D%EC%A0%95%EB%B3%B4%EB%B3%B4%EC%95%88_%EC%BB%A8%EC%84%A4%ED%8C%85%EC%A0%84%EB%AC%B8%EC%97%85%EC%B2%B4"
  },
  {
      "name": "지역성",
      "url": "https://itwiki.kr/w/%EC%A7%80%EC%97%AD%EC%84%B1"
  },
  {
      "name": "직접 파일",
      "url": "https://itwiki.kr/w/%EC%A7%81%EC%A0%91_%ED%8C%8C%EC%9D%BC"
  },
  {
      "name": "집단 의사결정 지원 시스템",
      "url": "https://itwiki.kr/w/%EC%A7%91%EB%8B%A8_%EC%9D%98%EC%82%AC%EA%B2%B0%EC%A0%95_%EC%A7%80%EC%9B%90_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "차량 사물 셀룰러 통신",
      "url": "https://itwiki.kr/w/%EC%B0%A8%EB%9F%89_%EC%82%AC%EB%AC%BC_%EC%85%80%EB%A3%B0%EB%9F%AC_%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "차분 공격",
      "url": "https://itwiki.kr/w/%EC%B0%A8%EB%B6%84_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "차분 프라이버시",
      "url": "https://itwiki.kr/w/%EC%B0%A8%EB%B6%84_%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B2%84%EC%8B%9C"
  },
  {
      "name": "차원 모델링",
      "url": "https://itwiki.kr/w/%EC%B0%A8%EC%9B%90_%EB%AA%A8%EB%8D%B8%EB%A7%81"
  },
  {
      "name": "참조 무결성",
      "url": "https://itwiki.kr/w/%EC%B0%B8%EC%A1%B0_%EB%AC%B4%EA%B2%B0%EC%84%B1"
  },
  {
      "name": "참조 무결성 제약",
      "url": "https://itwiki.kr/w/%EC%B0%B8%EC%A1%B0_%EB%AC%B4%EA%B2%B0%EC%84%B1_%EC%A0%9C%EC%95%BD"
  },
  {
      "name": "참조 지역성",
      "url": "https://itwiki.kr/w/%EC%B0%B8%EC%A1%B0_%EC%A7%80%EC%97%AD%EC%84%B1"
  },
  {
      "name": "채널",
      "url": "https://itwiki.kr/w/%EC%B1%84%EB%84%90"
  },
  {
      "name": "채찍 효과",
      "url": "https://itwiki.kr/w/%EC%B1%84%EC%B0%8D_%ED%9A%A8%EA%B3%BC"
  },
  {
      "name": "철운석",
      "url": "https://itwiki.kr/w/%EC%B2%A0%EC%9A%B4%EC%84%9D"
  },
  {
      "name": "초모수",
      "url": "https://itwiki.kr/w/%EC%B4%88%EB%AA%A8%EC%88%98"
  },
  {
      "name": "총계처리",
      "url": "https://itwiki.kr/w/%EC%B4%9D%EA%B3%84%EC%B2%98%EB%A6%AC"
  },
  {
      "name": "최단경로 알고리즘",
      "url": "https://itwiki.kr/w/%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "최소 신장 트리",
      "url": "https://itwiki.kr/w/%EC%B5%9C%EC%86%8C_%EC%8B%A0%EC%9E%A5_%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "최소제곱법",
      "url": "https://itwiki.kr/w/%EC%B5%9C%EC%86%8C%EC%A0%9C%EA%B3%B1%EB%B2%95"
  },
  {
      "name": "추가정보",
      "url": "https://itwiki.kr/w/%EC%B6%94%EA%B0%80%EC%A0%95%EB%B3%B4"
  },
  {
      "name": "추상 클래스",
      "url": "https://itwiki.kr/w/%EC%B6%94%EC%83%81_%ED%81%B4%EB%9E%98%EC%8A%A4"
  },
  {
      "name": "추천 시스템",
      "url": "https://itwiki.kr/w/%EC%B6%94%EC%B2%9C_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "추측 실행",
      "url": "https://itwiki.kr/w/%EC%B6%94%EC%B8%A1_%EC%8B%A4%ED%96%89"
  },
  {
      "name": "취약점",
      "url": "https://itwiki.kr/w/%EC%B7%A8%EC%95%BD%EC%A0%90"
  },
  {
      "name": "취약점 분석 도구",
      "url": "https://itwiki.kr/w/%EC%B7%A8%EC%95%BD%EC%A0%90_%EB%B6%84%EC%84%9D_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "친환경 미래 모빌리티",
      "url": "https://itwiki.kr/w/%EC%B9%9C%ED%99%98%EA%B2%BD_%EB%AF%B8%EB%9E%98_%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0"
  },
  {
      "name": "칠판형 아키텍처 스타일",
      "url": "https://itwiki.kr/w/%EC%B9%A0%ED%8C%90%ED%98%95_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98_%EC%8A%A4%ED%83%80%EC%9D%BC"
  },
  {
      "name": "침입방지시스템",
      "url": "https://itwiki.kr/w/%EC%B9%A8%EC%9E%85%EB%B0%A9%EC%A7%80%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "침입차단시스템",
      "url": "https://itwiki.kr/w/%EC%B9%A8%EC%9E%85%EC%B0%A8%EB%8B%A8%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "침입탐지시스템",
      "url": "https://itwiki.kr/w/%EC%B9%A8%EC%9E%85%ED%83%90%EC%A7%80%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "침해사고 대응절차",
      "url": "https://itwiki.kr/w/%EC%B9%A8%ED%95%B4%EC%82%AC%EA%B3%A0_%EB%8C%80%EC%9D%91%EC%A0%88%EC%B0%A8"
  },
  {
      "name": "카나리",
      "url": "https://itwiki.kr/w/%EC%B9%B4%EB%82%98%EB%A6%AC"
  },
  {
      "name": "카나리 배포",
      "url": "https://itwiki.kr/w/%EC%B9%B4%EB%82%98%EB%A6%AC_%EB%B0%B0%ED%8F%AC"
  },
  {
      "name": "카오스 엔지니어링",
      "url": "https://itwiki.kr/w/%EC%B9%B4%EC%98%A4%EC%8A%A4_%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81"
  },
  {
      "name": "카오스 테스트",
      "url": "https://itwiki.kr/w/%EC%B9%B4%EC%98%A4%EC%8A%A4_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "카테시안 프로덕트",
      "url": "https://itwiki.kr/w/%EC%B9%B4%ED%85%8C%EC%8B%9C%EC%95%88_%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8"
  },
  {
      "name": "카피레프트 라이선스",
      "url": "https://itwiki.kr/w/%EC%B9%B4%ED%94%BC%EB%A0%88%ED%94%84%ED%8A%B8_%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4"
  },
  {
      "name": "칸반",
      "url": "https://itwiki.kr/w/%EC%B9%B8%EB%B0%98"
  },
  {
      "name": "칼리 리눅스",
      "url": "https://itwiki.kr/w/%EC%B9%BC%EB%A6%AC_%EB%A6%AC%EB%88%85%EC%8A%A4"
  },
  {
      "name": "캐시 메모리",
      "url": "https://itwiki.kr/w/%EC%BA%90%EC%8B%9C_%EB%A9%94%EB%AA%A8%EB%A6%AC"
  },
  {
      "name": "캐시 카우",
      "url": "https://itwiki.kr/w/%EC%BA%90%EC%8B%9C_%EC%B9%B4%EC%9A%B0"
  },
  {
      "name": "캘리포니아 개인정보 권리법",
      "url": "https://itwiki.kr/w/%EC%BA%98%EB%A6%AC%ED%8F%AC%EB%8B%88%EC%95%84_%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4_%EA%B6%8C%EB%A6%AC%EB%B2%95"
  },
  {
      "name": "캘리포니아 소비자 프라이버시법",
      "url": "https://itwiki.kr/w/%EC%BA%98%EB%A6%AC%ED%8F%AC%EB%8B%88%EC%95%84_%EC%86%8C%EB%B9%84%EC%9E%90_%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B2%84%EC%8B%9C%EB%B2%95"
  },
  {
      "name": "커널",
      "url": "https://itwiki.kr/w/%EC%BB%A4%EB%84%90"
  },
  {
      "name": "커맨드 패턴",
      "url": "https://itwiki.kr/w/%EC%BB%A4%EB%A7%A8%EB%93%9C_%ED%8C%A8%ED%84%B4"
  },
  {
      "name": "커버로스",
      "url": "https://itwiki.kr/w/%EC%BB%A4%EB%B2%84%EB%A1%9C%EC%8A%A4"
  },
  {
      "name": "컨테이너 가상화",
      "url": "https://itwiki.kr/w/%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88_%EA%B0%80%EC%83%81%ED%99%94"
  },
  {
      "name": "컴파일",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%8C%8C%EC%9D%BC"
  },
  {
      "name": "컴파일러",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC"
  },
  {
      "name": "컴포넌트",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8"
  },
  {
      "name": "컴포넌트 테스트",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "컴퓨터시스템응용기술사",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%91%EC%9A%A9%EA%B8%B0%EC%88%A0%EC%82%AC"
  },
  {
      "name": "컴퓨터시스템응용기술사 120회",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%91%EC%9A%A9%EA%B8%B0%EC%88%A0%EC%82%AC_120%ED%9A%8C"
  },
  {
      "name": "컴퓨터시스템응용기술사 122회",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%91%EC%9A%A9%EA%B8%B0%EC%88%A0%EC%82%AC_122%ED%9A%8C"
  },
  {
      "name": "컴퓨터시스템응용기술사 123회",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%91%EC%9A%A9%EA%B8%B0%EC%88%A0%EC%82%AC_123%ED%9A%8C"
  },
  {
      "name": "컴퓨터시스템응용기술사 125회",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%91%EC%9A%A9%EA%B8%B0%EC%88%A0%EC%82%AC_125%ED%9A%8C"
  },
  {
      "name": "컴퓨터시스템응용기술사 126회",
      "url": "https://itwiki.kr/w/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%91%EC%9A%A9%EA%B8%B0%EC%88%A0%EC%82%AC_126%ED%9A%8C"
  },
  {
      "name": "켈베로스",
      "url": "https://itwiki.kr/w/%EC%BC%88%EB%B2%A0%EB%A1%9C%EC%8A%A4"
  },
  {
      "name": "코드",
      "url": "https://itwiki.kr/w/%EC%BD%94%EB%93%9C"
  },
  {
      "name": "코드 난독화",
      "url": "https://itwiki.kr/w/%EC%BD%94%EB%93%9C_%EB%82%9C%EB%8F%85%ED%99%94"
  },
  {
      "name": "코드 분할 다중 접속",
      "url": "https://itwiki.kr/w/%EC%BD%94%EB%93%9C_%EB%B6%84%ED%95%A0_%EB%8B%A4%EC%A4%91_%EC%A0%91%EC%86%8D"
  },
  {
      "name": "코드 인스펙션",
      "url": "https://itwiki.kr/w/%EC%BD%94%EB%93%9C_%EC%9D%B8%EC%8A%A4%ED%8E%99%EC%85%98"
  },
  {
      "name": "코로케이션",
      "url": "https://itwiki.kr/w/%EC%BD%94%EB%A1%9C%EC%BC%80%EC%9D%B4%EC%85%98"
  },
  {
      "name": "코버트",
      "url": "https://itwiki.kr/w/%EC%BD%94%EB%B2%84%ED%8A%B8"
  },
  {
      "name": "코사인 유사도",
      "url": "https://itwiki.kr/w/%EC%BD%94%EC%82%AC%EC%9D%B8_%EC%9C%A0%EC%82%AC%EB%8F%84"
  },
  {
      "name": "코스타키스-바우웬스 사분면",
      "url": "https://itwiki.kr/w/%EC%BD%94%EC%8A%A4%ED%83%80%ED%82%A4%EC%8A%A4-%EB%B0%94%EC%9A%B0%EC%9B%AC%EC%8A%A4_%EC%82%AC%EB%B6%84%EB%A9%B4"
  },
  {
      "name": "코아 스마트밴드",
      "url": "https://itwiki.kr/w/%EC%BD%94%EC%95%84_%EC%8A%A4%EB%A7%88%ED%8A%B8%EB%B0%B4%EB%93%9C"
  },
  {
      "name": "코아코리아",
      "url": "https://itwiki.kr/w/%EC%BD%94%EC%95%84%EC%BD%94%EB%A6%AC%EC%95%84"
  },
  {
      "name": "코어 네트워크",
      "url": "https://itwiki.kr/w/%EC%BD%94%EC%96%B4_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "콘웨이의 법칙",
      "url": "https://itwiki.kr/w/%EC%BD%98%EC%9B%A8%EC%9D%B4%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "콜드 스타트",
      "url": "https://itwiki.kr/w/%EC%BD%9C%EB%93%9C_%EC%8A%A4%ED%83%80%ED%8A%B8"
  },
  {
      "name": "쿠버네티스",
      "url": "https://itwiki.kr/w/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4"
  },
  {
      "name": "쿠버네티스 볼륨",
      "url": "https://itwiki.kr/w/%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4_%EB%B3%BC%EB%A5%A8"
  },
  {
      "name": "쿠키",
      "url": "https://itwiki.kr/w/%EC%BF%A0%ED%82%A4"
  },
  {
      "name": "퀵 정렬",
      "url": "https://itwiki.kr/w/%ED%80%B5_%EC%A0%95%EB%A0%AC"
  },
  {
      "name": "큐브플로",
      "url": "https://itwiki.kr/w/%ED%81%90%EB%B8%8C%ED%94%8C%EB%A1%9C"
  },
  {
      "name": "큐브플로우",
      "url": "https://itwiki.kr/w/%ED%81%90%EB%B8%8C%ED%94%8C%EB%A1%9C%EC%9A%B0"
  },
  {
      "name": "크로스 사이트 스크립트",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4_%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
  },
  {
      "name": "크로스바 교환 행렬",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EB%B0%94_%EA%B5%90%ED%99%98_%ED%96%89%EB%A0%AC"
  },
  {
      "name": "크로스바 교환행렬",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EB%B0%94_%EA%B5%90%ED%99%98%ED%96%89%EB%A0%AC"
  },
  {
      "name": "크로스바 스위치",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EB%B0%94_%EC%8A%A4%EC%9C%84%EC%B9%98"
  },
  {
      "name": "크로스사이트 스크립트",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
  },
  {
      "name": "크로스사이트 스크립팅",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8C%85"
  },
  {
      "name": "크로스사이트 요청 위조",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%9A%94%EC%B2%AD_%EC%9C%84%EC%A1%B0"
  },
  {
      "name": "크로스사이트 요청위조",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%9C%EC%8A%A4%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%9A%94%EC%B2%AD%EC%9C%84%EC%A1%B0"
  },
  {
      "name": "크롬",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A1%AC"
  },
  {
      "name": "크리덴셜 스터핑",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A6%AC%EB%8D%B4%EC%85%9C_%EC%8A%A4%ED%84%B0%ED%95%91"
  },
  {
      "name": "크리슈머",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A6%AC%EC%8A%88%EB%A8%B8"
  },
  {
      "name": "크리에이티브 커먼즈",
      "url": "https://itwiki.kr/w/%ED%81%AC%EB%A6%AC%EC%97%90%EC%9D%B4%ED%8B%B0%EB%B8%8C_%EC%BB%A4%EB%A8%BC%EC%A6%88"
  },
  {
      "name": "클라우드",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C"
  },
  {
      "name": "클라우드 MSP",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_MSP"
  },
  {
      "name": "클라우드 데이터 분석 서비스",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D_%EC%84%9C%EB%B9%84%EC%8A%A4"
  },
  {
      "name": "클라우드 락인",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EB%9D%BD%EC%9D%B8"
  },
  {
      "name": "클라우드 보안인증제",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EB%B3%B4%EC%95%88%EC%9D%B8%EC%A6%9D%EC%A0%9C"
  },
  {
      "name": "클라우드 컴퓨팅",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "클라우드 호스팅",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C_%ED%98%B8%EC%8A%A4%ED%8C%85"
  },
  {
      "name": "클락-윌슨 모델",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BD-%EC%9C%8C%EC%8A%A8_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "클락 윌슨 모델",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9D%BD_%EC%9C%8C%EC%8A%A8_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "클래스 다이어그램",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%9E%98%EC%8A%A4_%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A8"
  },
  {
      "name": "클린 코드",
      "url": "https://itwiki.kr/w/%ED%81%B4%EB%A6%B0_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "키 관리 시스템",
      "url": "https://itwiki.kr/w/%ED%82%A4_%EA%B4%80%EB%A6%AC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "키 로거",
      "url": "https://itwiki.kr/w/%ED%82%A4_%EB%A1%9C%EA%B1%B0"
  },
  {
      "name": "키 배포 센터",
      "url": "https://itwiki.kr/w/%ED%82%A4_%EB%B0%B0%ED%8F%AC_%EC%84%BC%ED%84%B0"
  },
  {
      "name": "키 에스크로",
      "url": "https://itwiki.kr/w/%ED%82%A4_%EC%97%90%EC%8A%A4%ED%81%AC%EB%A1%9C"
  },
  {
      "name": "키 위탁",
      "url": "https://itwiki.kr/w/%ED%82%A4_%EC%9C%84%ED%83%81"
  },
  {
      "name": "키로거",
      "url": "https://itwiki.kr/w/%ED%82%A4%EB%A1%9C%EA%B1%B0"
  },
  {
      "name": "타당도",
      "url": "https://itwiki.kr/w/%ED%83%80%EB%8B%B9%EB%8F%84"
  },
  {
      "name": "타원 곡선 암호",
      "url": "https://itwiki.kr/w/%ED%83%80%EC%9B%90_%EA%B3%A1%EC%84%A0_%EC%95%94%ED%98%B8"
  },
  {
      "name": "타원곡선암호",
      "url": "https://itwiki.kr/w/%ED%83%80%EC%9B%90%EA%B3%A1%EC%84%A0%EC%95%94%ED%98%B8"
  },
  {
      "name": "타이젠",
      "url": "https://itwiki.kr/w/%ED%83%80%EC%9D%B4%EC%A0%A0"
  },
  {
      "name": "탐색적 데이터 분석",
      "url": "https://itwiki.kr/w/%ED%83%90%EC%83%89%EC%A0%81_%EB%8D%B0%EC%9D%B4%ED%84%B0_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "탐색적 테스트",
      "url": "https://itwiki.kr/w/%ED%83%90%EC%83%89%EC%A0%81_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "탐색적 테스팅",
      "url": "https://itwiki.kr/w/%ED%83%90%EC%83%89%EC%A0%81_%ED%85%8C%EC%8A%A4%ED%8C%85"
  },
  {
      "name": "터널링",
      "url": "https://itwiki.kr/w/%ED%84%B0%EB%84%90%EB%A7%81"
  },
  {
      "name": "턴키",
      "url": "https://itwiki.kr/w/%ED%84%B4%ED%82%A4"
  },
  {
      "name": "테스트",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "테스트 오라클",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%98%A4%EB%9D%BC%ED%81%B4"
  },
  {
      "name": "테스트 원칙",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%9B%90%EC%B9%99"
  },
  {
      "name": "테스트 자동화 도구",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%9E%90%EB%8F%99%ED%99%94_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "테스트 주도 개발",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%A3%BC%EB%8F%84_%EA%B0%9C%EB%B0%9C"
  },
  {
      "name": "테스트 차터",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%B0%A8%ED%84%B0"
  },
  {
      "name": "테스트 커버리지",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%EC%BB%A4%EB%B2%84%EB%A6%AC%EC%A7%80"
  },
  {
      "name": "테스트 표준",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%8A%A4%ED%8A%B8_%ED%91%9C%EC%A4%80"
  },
  {
      "name": "테이블 인덱스",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%9D%B4%EB%B8%94_%EC%9D%B8%EB%8D%B1%EC%8A%A4"
  },
  {
      "name": "테일러링",
      "url": "https://itwiki.kr/w/%ED%85%8C%EC%9D%BC%EB%9F%AC%EB%A7%81"
  },
  {
      "name": "테크핀",
      "url": "https://itwiki.kr/w/%ED%85%8C%ED%81%AC%ED%95%80"
  },
  {
      "name": "텍스트 랭크",
      "url": "https://itwiki.kr/w/%ED%85%8D%EC%8A%A4%ED%8A%B8_%EB%9E%AD%ED%81%AC"
  },
  {
      "name": "텍스트 마이닝",
      "url": "https://itwiki.kr/w/%ED%85%8D%EC%8A%A4%ED%8A%B8_%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "통계 척도",
      "url": "https://itwiki.kr/w/%ED%86%B5%EA%B3%84_%EC%B2%99%EB%8F%84"
  },
  {
      "name": "통계적 가설 검정",
      "url": "https://itwiki.kr/w/%ED%86%B5%EA%B3%84%EC%A0%81_%EA%B0%80%EC%84%A4_%EA%B2%80%EC%A0%95"
  },
  {
      "name": "통계적 가설 검정 오류",
      "url": "https://itwiki.kr/w/%ED%86%B5%EA%B3%84%EC%A0%81_%EA%B0%80%EC%84%A4_%EA%B2%80%EC%A0%95_%EC%98%A4%EB%A5%98"
  },
  {
      "name": "통계적 침입탐지",
      "url": "https://itwiki.kr/w/%ED%86%B5%EA%B3%84%EC%A0%81_%EC%B9%A8%EC%9E%85%ED%83%90%EC%A7%80"
  },
  {
      "name": "통제",
      "url": "https://itwiki.kr/w/%ED%86%B5%EC%A0%9C"
  },
  {
      "name": "통합 위협 관리",
      "url": "https://itwiki.kr/w/%ED%86%B5%ED%95%A9_%EC%9C%84%ED%98%91_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "통합 테스트",
      "url": "https://itwiki.kr/w/%ED%86%B5%ED%95%A9_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "튜링완전언어",
      "url": "https://itwiki.kr/w/%ED%8A%9C%EB%A7%81%EC%99%84%EC%A0%84%EC%96%B8%EC%96%B4"
  },
  {
      "name": "트래픽 공학",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%98%ED%94%BD_%EA%B3%B5%ED%95%99"
  },
  {
      "name": "트래픽 분석",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%98%ED%94%BD_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "트랜스퍼 러닝",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8D%BC_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "트랜잭션",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98"
  },
  {
      "name": "트랜잭션 고립화 수준",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%EA%B3%A0%EB%A6%BD%ED%99%94_%EC%88%98%EC%A4%80"
  },
  {
      "name": "트랜잭션 동시성 제어",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%EB%8F%99%EC%8B%9C%EC%84%B1_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "트랜잭션 로킹",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%EB%A1%9C%ED%82%B9"
  },
  {
      "name": "트랜잭션 병행제어",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%EB%B3%91%ED%96%89%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "트랜잭션 직렬성",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%EC%A7%81%EB%A0%AC%EC%84%B1"
  },
  {
      "name": "트랜잭션 특성",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%9E%AD%EC%85%98_%ED%8A%B9%EC%84%B1"
  },
  {
      "name": "트랜젝션",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9E%9C%EC%A0%9D%EC%85%98"
  },
  {
      "name": "트러스트존",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9F%AC%EC%8A%A4%ED%8A%B8%EC%A1%B4"
  },
  {
      "name": "트럭 플래투닝",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%9F%AD_%ED%94%8C%EB%9E%98%ED%88%AC%EB%8B%9D"
  },
  {
      "name": "트로이 목마",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%A1%9C%EC%9D%B4_%EB%AA%A9%EB%A7%88"
  },
  {
      "name": "트롤리 딜레마",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%A1%A4%EB%A6%AC_%EB%94%9C%EB%A0%88%EB%A7%88"
  },
  {
      "name": "트롤리 문제",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%A1%A4%EB%A6%AC_%EB%AC%B8%EC%A0%9C"
  },
  {
      "name": "트리",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%A6%AC"
  },
  {
      "name": "트리누",
      "url": "https://itwiki.kr/w/%ED%8A%B8%EB%A6%AC%EB%88%84"
  },
  {
      "name": "특성 공학",
      "url": "https://itwiki.kr/w/%ED%8A%B9%EC%84%B1_%EA%B3%B5%ED%95%99"
  },
  {
      "name": "티어드롭 공격",
      "url": "https://itwiki.kr/w/%ED%8B%B0%EC%96%B4%EB%93%9C%EB%A1%AD_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "팀 오렐리",
      "url": "https://itwiki.kr/w/%ED%8C%80_%EC%98%A4%EB%A0%90%EB%A6%AC"
  },
  {
      "name": "파밍",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EB%B0%8D"
  },
  {
      "name": "파스-타",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EC%8A%A4-%ED%83%80"
  },
  {
      "name": "파스타",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EC%8A%A4%ED%83%80"
  },
  {
      "name": "파워셸",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EC%9B%8C%EC%85%B8"
  },
  {
      "name": "파이버 채널",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EC%9D%B4%EB%B2%84_%EC%B1%84%EB%84%90"
  },
  {
      "name": "파이썬 pandas",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EC%9D%B4%EC%8D%AC_pandas"
  },
  {
      "name": "파일 업로드 공격",
      "url": "https://itwiki.kr/w/%ED%8C%8C%EC%9D%BC_%EC%97%85%EB%A1%9C%EB%93%9C_%EA%B3%B5%EA%B2%A9"
  },
  {
      "name": "파킨슨 법칙",
      "url": "https://itwiki.kr/w/%ED%8C%8C%ED%82%A8%EC%8A%A8_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "파킨슨의 법칙",
      "url": "https://itwiki.kr/w/%ED%8C%8C%ED%82%A8%EC%8A%A8%EC%9D%98_%EB%B2%95%EC%B9%99"
  },
  {
      "name": "파티셔닝",
      "url": "https://itwiki.kr/w/%ED%8C%8C%ED%8B%B0%EC%85%94%EB%8B%9D"
  },
  {
      "name": "패리티",
      "url": "https://itwiki.kr/w/%ED%8C%A8%EB%A6%AC%ED%8B%B0"
  },
  {
      "name": "패리티 체크",
      "url": "https://itwiki.kr/w/%ED%8C%A8%EB%A6%AC%ED%8B%B0_%EC%B2%B4%ED%81%AC"
  }
]);
_itwiki = _itwiki.concat([
  {
      "name": "패스워드",
      "url": "https://itwiki.kr/w/%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C"
  },
  {
      "name": "패킷",
      "url": "https://itwiki.kr/w/%ED%8C%A8%ED%82%B7"
  },
  {
      "name": "패킷 스위칭",
      "url": "https://itwiki.kr/w/%ED%8C%A8%ED%82%B7_%EC%8A%A4%EC%9C%84%EC%B9%AD"
  },
  {
      "name": "팩스",
      "url": "https://itwiki.kr/w/%ED%8C%A9%EC%8A%A4"
  },
  {
      "name": "퍼블릭 블록체인",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EB%B8%94%EB%A6%AD_%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "퍼셉트론",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EC%85%89%ED%8A%B8%EB%A1%A0"
  },
  {
      "name": "퍼저",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EC%A0%80"
  },
  {
      "name": "퍼즈 테스트",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EC%A6%88_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "퍼징",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EC%A7%95"
  },
  {
      "name": "퍼징 도구",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EC%A7%95_%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "퍼징도구",
      "url": "https://itwiki.kr/w/%ED%8D%BC%EC%A7%95%EB%8F%84%EA%B5%AC"
  },
  {
      "name": "펑션 포인트",
      "url": "https://itwiki.kr/w/%ED%8E%91%EC%85%98_%ED%8F%AC%EC%9D%B8%ED%8A%B8"
  },
  {
      "name": "페이스텔 구조",
      "url": "https://itwiki.kr/w/%ED%8E%98%EC%9D%B4%EC%8A%A4%ED%85%94_%EA%B5%AC%EC%A1%B0"
  },
  {
      "name": "페이지 교체",
      "url": "https://itwiki.kr/w/%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%90%EC%B2%B4"
  },
  {
      "name": "페트야",
      "url": "https://itwiki.kr/w/%ED%8E%98%ED%8A%B8%EC%95%BC"
  },
  {
      "name": "평균 반환 시간",
      "url": "https://itwiki.kr/w/%ED%8F%89%EA%B7%A0_%EB%B0%98%ED%99%98_%EC%8B%9C%EA%B0%84"
  },
  {
      "name": "평균 반환시간",
      "url": "https://itwiki.kr/w/%ED%8F%89%EA%B7%A0_%EB%B0%98%ED%99%98%EC%8B%9C%EA%B0%84"
  },
  {
      "name": "포괄적 데이터전략(일본)",
      "url": "https://itwiki.kr/w/%ED%8F%AC%EA%B4%84%EC%A0%81_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A0%84%EB%9E%B5(%EC%9D%BC%EB%B3%B8)"
  },
  {
      "name": "포그 컴퓨팅",
      "url": "https://itwiki.kr/w/%ED%8F%AC%EA%B7%B8_%EC%BB%B4%ED%93%A8%ED%8C%85"
  },
  {
      "name": "포렌식",
      "url": "https://itwiki.kr/w/%ED%8F%AC%EB%A0%8C%EC%8B%9D"
  },
  {
      "name": "포맷 스트링",
      "url": "https://itwiki.kr/w/%ED%8F%AC%EB%A7%B7_%EC%8A%A4%ED%8A%B8%EB%A7%81"
  },
  {
      "name": "포트 번호",
      "url": "https://itwiki.kr/w/%ED%8F%AC%ED%8A%B8_%EB%B2%88%ED%98%B8"
  },
  {
      "name": "포트 스캐닝",
      "url": "https://itwiki.kr/w/%ED%8F%AC%ED%8A%B8_%EC%8A%A4%EC%BA%90%EB%8B%9D"
  },
  {
      "name": "포트 스캔",
      "url": "https://itwiki.kr/w/%ED%8F%AC%ED%8A%B8_%EC%8A%A4%EC%BA%94"
  },
  {
      "name": "포트스캔",
      "url": "https://itwiki.kr/w/%ED%8F%AC%ED%8A%B8%EC%8A%A4%EC%BA%94"
  },
  {
      "name": "포트폴리오",
      "url": "https://itwiki.kr/w/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4"
  },
  {
      "name": "폭포수 모델",
      "url": "https://itwiki.kr/w/%ED%8F%AD%ED%8F%AC%EC%88%98_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "폭포수 모형",
      "url": "https://itwiki.kr/w/%ED%8F%AD%ED%8F%AC%EC%88%98_%EB%AA%A8%ED%98%95"
  },
  {
      "name": "표본",
      "url": "https://itwiki.kr/w/%ED%91%9C%EB%B3%B8"
  },
  {
      "name": "표본 추출",
      "url": "https://itwiki.kr/w/%ED%91%9C%EB%B3%B8_%EC%B6%94%EC%B6%9C"
  },
  {
      "name": "표본추출",
      "url": "https://itwiki.kr/w/%ED%91%9C%EB%B3%B8%EC%B6%94%EC%B6%9C"
  },
  {
      "name": "표준",
      "url": "https://itwiki.kr/w/%ED%91%9C%EC%A4%80"
  },
  {
      "name": "표준화 단체",
      "url": "https://itwiki.kr/w/%ED%91%9C%EC%A4%80%ED%99%94_%EB%8B%A8%EC%B2%B4"
  },
  {
      "name": "품질 비용",
      "url": "https://itwiki.kr/w/%ED%92%88%EC%A7%88_%EB%B9%84%EC%9A%A9"
  },
  {
      "name": "품질성능 평가",
      "url": "https://itwiki.kr/w/%ED%92%88%EC%A7%88%EC%84%B1%EB%8A%A5_%ED%8F%89%EA%B0%80"
  },
  {
      "name": "퓨 샷 러닝",
      "url": "https://itwiki.kr/w/%ED%93%A8_%EC%83%B7_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "퓨샷 러닝",
      "url": "https://itwiki.kr/w/%ED%93%A8%EC%83%B7_%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "퓨샷러닝",
      "url": "https://itwiki.kr/w/%ED%93%A8%EC%83%B7%EB%9F%AC%EB%8B%9D"
  },
  {
      "name": "프라이버시",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B2%84%EC%8B%9C"
  },
  {
      "name": "프라이버시의 역설",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B2%84%EC%8B%9C%EC%9D%98_%EC%97%AD%EC%84%A4"
  },
  {
      "name": "프라이빗 블록체인",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%9D%BC%EC%9D%B4%EB%B9%97_%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8"
  },
  {
      "name": "프레이밍 효과",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A0%88%EC%9D%B4%EB%B0%8D_%ED%9A%A8%EA%B3%BC"
  },
  {
      "name": "프레임워크",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC"
  },
  {
      "name": "프로그래밍 언어",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4"
  },
  {
      "name": "프로덕트 오너",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8_%EC%98%A4%EB%84%88"
  },
  {
      "name": "프로세스",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "프로세스 간 통신",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EA%B0%84_%ED%86%B5%EC%8B%A0"
  },
  {
      "name": "프로세스 마이닝",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EB%A7%88%EC%9D%B4%EB%8B%9D"
  },
  {
      "name": "프로세스 메모리 영역",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EB%A9%94%EB%AA%A8%EB%A6%AC_%EC%98%81%EC%97%AD"
  },
  {
      "name": "프로세스 상태",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%83%81%ED%83%9C"
  },
  {
      "name": "프로세스 상태전이도",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%83%81%ED%83%9C%EC%A0%84%EC%9D%B4%EB%8F%84"
  },
  {
      "name": "프로세스 스케줄링",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81"
  },
  {
      "name": "프로세스 스케쥴링",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%8A%A4%EC%BC%80%EC%A5%B4%EB%A7%81"
  },
  {
      "name": "프로세스 재설계",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%9E%AC%EC%84%A4%EA%B3%84"
  },
  {
      "name": "프로세스 제어 블록",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%A0%9C%EC%96%B4_%EB%B8%94%EB%A1%9D"
  },
  {
      "name": "프로세스 주소 영역",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%A3%BC%EC%86%8C_%EC%98%81%EC%97%AD"
  },
  {
      "name": "프로세스 혁신",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%ED%98%81%EC%8B%A0"
  },
  {
      "name": "프로젝트",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
  },
  {
      "name": "프로젝트 관리",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "프로젝트 관리 프로세스",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EA%B4%80%EB%A6%AC_%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4"
  },
  {
      "name": "프로젝트 매니저",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%A7%A4%EB%8B%88%EC%A0%80"
  },
  {
      "name": "프로젝트 범위 관리",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EB%B2%94%EC%9C%84_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "프로젝트 생명주기",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0"
  },
  {
      "name": "프로젝트 운영 환경",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%9A%B4%EC%98%81_%ED%99%98%EA%B2%BD"
  },
  {
      "name": "프로젝트 이해관계자",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90"
  },
  {
      "name": "프로젝트 이해관계자 관리",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%9D%B4%ED%95%B4%EA%B4%80%EA%B3%84%EC%9E%90_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "프로젝트 일정 관리",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%9D%BC%EC%A0%95_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "프로젝트 일정 단축",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%9D%BC%EC%A0%95_%EB%8B%A8%EC%B6%95"
  },
  {
      "name": "프로젝트 자원 최적화",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%9E%90%EC%9B%90_%EC%B5%9C%EC%A0%81%ED%99%94"
  },
  {
      "name": "프로젝트 통합 관리",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%ED%86%B5%ED%95%A9_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "프로크루스테스의 침대",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%ED%81%AC%EB%A3%A8%EC%8A%A4%ED%85%8C%EC%8A%A4%EC%9D%98_%EC%B9%A8%EB%8C%80"
  },
  {
      "name": "프로토콜",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "프로토타이핑 모델",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9D%B4%ED%95%91_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "프로토타입 모델",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "프록시 서버",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A1%9D%EC%8B%9C_%EC%84%9C%EB%B2%84"
  },
  {
      "name": "프리크라임",
      "url": "https://itwiki.kr/w/%ED%94%84%EB%A6%AC%ED%81%AC%EB%9D%BC%EC%9E%84"
  },
  {
      "name": "플래그",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%9E%98%EA%B7%B8"
  },
  {
      "name": "플래닝 포커",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%9E%98%EB%8B%9D_%ED%8F%AC%EC%BB%A4"
  },
  {
      "name": "플랫폼",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%9E%AB%ED%8F%BC"
  },
  {
      "name": "플러그 앤 플레이",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%9F%AC%EA%B7%B8_%EC%95%A4_%ED%94%8C%EB%A0%88%EC%9D%B4"
  },
  {
      "name": "플럼",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%9F%BC"
  },
  {
      "name": "플로와 플로우",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%A1%9C%EC%99%80_%ED%94%8C%EB%A1%9C%EC%9A%B0"
  },
  {
      "name": "플로이드-와샬 알고리즘",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C-%EC%99%80%EC%83%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "플립플롭",
      "url": "https://itwiki.kr/w/%ED%94%8C%EB%A6%BD%ED%94%8C%EB%A1%AD"
  },
  {
      "name": "피그",
      "url": "https://itwiki.kr/w/%ED%94%BC%EA%B7%B8"
  },
  {
      "name": "피보나치 수열 소스코드",
      "url": "https://itwiki.kr/w/%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98_%EC%88%98%EC%97%B4_%EC%86%8C%EC%8A%A4%EC%BD%94%EB%93%9C"
  },
  {
      "name": "피싱",
      "url": "https://itwiki.kr/w/%ED%94%BC%EC%8B%B1"
  },
  {
      "name": "피어슨 상관계수",
      "url": "https://itwiki.kr/w/%ED%94%BC%EC%96%B4%EC%8A%A8_%EC%83%81%EA%B4%80%EA%B3%84%EC%88%98"
  },
  {
      "name": "픽셀",
      "url": "https://itwiki.kr/w/%ED%94%BD%EC%85%80"
  },
  {
      "name": "핀테크",
      "url": "https://itwiki.kr/w/%ED%95%80%ED%85%8C%ED%81%AC"
  },
  {
      "name": "필요문서",
      "url": "https://itwiki.kr/w/%ED%95%84%EC%9A%94%EB%AC%B8%EC%84%9C"
  },
  {
      "name": "핑거프린팅",
      "url": "https://itwiki.kr/w/%ED%95%91%EA%B1%B0%ED%94%84%EB%A6%B0%ED%8C%85"
  },
  {
      "name": "하둡",
      "url": "https://itwiki.kr/w/%ED%95%98%EB%91%A1"
  },
  {
      "name": "하둡 분산 파일 시스템",
      "url": "https://itwiki.kr/w/%ED%95%98%EB%91%A1_%EB%B6%84%EC%82%B0_%ED%8C%8C%EC%9D%BC_%EC%8B%9C%EC%8A%A4%ED%85%9C"
  },
  {
      "name": "하위 최적화",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9C%84_%EC%B5%9C%EC%A0%81%ED%99%94"
  },
  {
      "name": "하이브",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9D%B4%EB%B8%8C"
  },
  {
      "name": "하이브리드 클라우드",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C_%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C"
  },
  {
      "name": "하이퍼 파라미터",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9D%B4%ED%8D%BC_%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0"
  },
  {
      "name": "하이퍼레저",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%A0%88%EC%A0%80"
  },
  {
      "name": "하이퍼바이저",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%B0%94%EC%9D%B4%EC%A0%80"
  },
  {
      "name": "하이퍼파라미터",
      "url": "https://itwiki.kr/w/%ED%95%98%EC%9D%B4%ED%8D%BC%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0"
  },
  {
      "name": "하트 블리드",
      "url": "https://itwiki.kr/w/%ED%95%98%ED%8A%B8_%EB%B8%94%EB%A6%AC%EB%93%9C"
  },
  {
      "name": "하트블리드",
      "url": "https://itwiki.kr/w/%ED%95%98%ED%8A%B8%EB%B8%94%EB%A6%AC%EB%93%9C"
  },
  {
      "name": "학생 증후군",
      "url": "https://itwiki.kr/w/%ED%95%99%EC%83%9D_%EC%A6%9D%ED%9B%84%EA%B5%B0"
  },
  {
      "name": "한국과학기술단체총연합회",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%EA%B3%BC%ED%95%99%EA%B8%B0%EC%88%A0%EB%8B%A8%EC%B2%B4%EC%B4%9D%EC%97%B0%ED%95%A9%ED%9A%8C"
  },
  {
      "name": "한국데이터산업진흥원",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%82%B0%EC%97%85%EC%A7%84%ED%9D%A5%EC%9B%90"
  },
  {
      "name": "한국인터넷진흥원",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%EC%9D%B8%ED%84%B0%EB%84%B7%EC%A7%84%ED%9D%A5%EC%9B%90"
  },
  {
      "name": "한국전자통신연구원",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%EC%A0%84%EC%9E%90%ED%86%B5%EC%8B%A0%EC%97%B0%EA%B5%AC%EC%9B%90"
  },
  {
      "name": "한국정보통신기술협회",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EA%B8%B0%EC%88%A0%ED%98%91%ED%9A%8C"
  },
  {
      "name": "한국정보화진흥원",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%EC%A0%95%EB%B3%B4%ED%99%94%EC%A7%84%ED%9D%A5%EC%9B%90"
  },
  {
      "name": "한국판 뉴딜",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%ED%8C%90_%EB%89%B4%EB%94%9C"
  },
  {
      "name": "한국판 뉴딜 추진 계획",
      "url": "https://itwiki.kr/w/%ED%95%9C%EA%B5%AD%ED%8C%90_%EB%89%B4%EB%94%9C_%EC%B6%94%EC%A7%84_%EA%B3%84%ED%9A%8D"
  },
  {
      "name": "함수 종속",
      "url": "https://itwiki.kr/w/%ED%95%A8%EC%88%98_%EC%A2%85%EC%86%8D"
  },
  {
      "name": "함수적 종속성",
      "url": "https://itwiki.kr/w/%ED%95%A8%EC%88%98%EC%A0%81_%EC%A2%85%EC%86%8D%EC%84%B1"
  },
  {
      "name": "합의",
      "url": "https://itwiki.kr/w/%ED%95%A9%EC%9D%98"
  },
  {
      "name": "합의 알고리즘",
      "url": "https://itwiki.kr/w/%ED%95%A9%EC%9D%98_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"
  },
  {
      "name": "해밍 코드",
      "url": "https://itwiki.kr/w/%ED%95%B4%EB%B0%8D_%EC%BD%94%EB%93%9C"
  },
  {
      "name": "해밍코드",
      "url": "https://itwiki.kr/w/%ED%95%B4%EB%B0%8D%EC%BD%94%EB%93%9C"
  },
  {
      "name": "해석력",
      "url": "https://itwiki.kr/w/%ED%95%B4%EC%84%9D%EB%A0%A5"
  },
  {
      "name": "해시",
      "url": "https://itwiki.kr/w/%ED%95%B4%EC%8B%9C"
  },
  {
      "name": "해시함수",
      "url": "https://itwiki.kr/w/%ED%95%B4%EC%8B%9C%ED%95%A8%EC%88%98"
  },
  {
      "name": "해커톤",
      "url": "https://itwiki.kr/w/%ED%95%B4%EC%BB%A4%ED%86%A4"
  },
  {
      "name": "해킹",
      "url": "https://itwiki.kr/w/%ED%95%B4%ED%82%B9"
  },
  {
      "name": "핵심 성공 요인",
      "url": "https://itwiki.kr/w/%ED%95%B5%EC%8B%AC_%EC%84%B1%EA%B3%B5_%EC%9A%94%EC%9D%B8"
  },
  {
      "name": "핸드 오버",
      "url": "https://itwiki.kr/w/%ED%95%B8%EB%93%9C_%EC%98%A4%EB%B2%84"
  },
  {
      "name": "핸드 오프",
      "url": "https://itwiki.kr/w/%ED%95%B8%EB%93%9C_%EC%98%A4%ED%94%84"
  },
  {
      "name": "핸드오버",
      "url": "https://itwiki.kr/w/%ED%95%B8%EB%93%9C%EC%98%A4%EB%B2%84"
  },
  {
      "name": "핸드오프",
      "url": "https://itwiki.kr/w/%ED%95%B8%EB%93%9C%EC%98%A4%ED%94%84"
  },
  {
      "name": "허니팟",
      "url": "https://itwiki.kr/w/%ED%97%88%EB%8B%88%ED%8C%9F"
  },
  {
      "name": "허브",
      "url": "https://itwiki.kr/w/%ED%97%88%EB%B8%8C"
  },
  {
      "name": "허용적 라이선스",
      "url": "https://itwiki.kr/w/%ED%97%88%EC%9A%A9%EC%A0%81_%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4"
  },
  {
      "name": "허용적 라이센스",
      "url": "https://itwiki.kr/w/%ED%97%88%EC%9A%A9%EC%A0%81_%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4"
  },
  {
      "name": "헝가리안 표기법",
      "url": "https://itwiki.kr/w/%ED%97%9D%EA%B0%80%EB%A6%AC%EC%95%88_%ED%91%9C%EA%B8%B0%EB%B2%95"
  },
  {
      "name": "현대12핀 OBD",
      "url": "https://itwiki.kr/w/%ED%98%84%EB%8C%8012%ED%95%80_OBD"
  },
  {
      "name": "현저성 모델",
      "url": "https://itwiki.kr/w/%ED%98%84%EC%A0%80%EC%84%B1_%EB%AA%A8%EB%8D%B8"
  },
  {
      "name": "협업 필터링",
      "url": "https://itwiki.kr/w/%ED%98%91%EC%97%85_%ED%95%84%ED%84%B0%EB%A7%81"
  },
  {
      "name": "형상 관리",
      "url": "https://itwiki.kr/w/%ED%98%95%EC%83%81_%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "형상관리",
      "url": "https://itwiki.kr/w/%ED%98%95%EC%83%81%EA%B4%80%EB%A6%AC"
  },
  {
      "name": "형용사 모음",
      "url": "https://itwiki.kr/w/%ED%98%95%EC%9A%A9%EC%82%AC_%EB%AA%A8%EC%9D%8C"
  },
  {
      "name": "형태보존 암호화",
      "url": "https://itwiki.kr/w/%ED%98%95%ED%83%9C%EB%B3%B4%EC%A1%B4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "호스트 기반 IDS",
      "url": "https://itwiki.kr/w/%ED%98%B8%EC%8A%A4%ED%8A%B8_%EA%B8%B0%EB%B0%98_IDS"
  },
  {
      "name": "혹스",
      "url": "https://itwiki.kr/w/%ED%98%B9%EC%8A%A4"
  },
  {
      "name": "혼동 매트릭스",
      "url": "https://itwiki.kr/w/%ED%98%BC%EB%8F%99_%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4"
  },
  {
      "name": "혼동 행렬",
      "url": "https://itwiki.kr/w/%ED%98%BC%EB%8F%99_%ED%96%89%EB%A0%AC"
  },
  {
      "name": "홈페이지 변조",
      "url": "https://itwiki.kr/w/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_%EB%B3%80%EC%A1%B0"
  },
  {
      "name": "화상 회의",
      "url": "https://itwiki.kr/w/%ED%99%94%EC%83%81_%ED%9A%8C%EC%9D%98"
  },
  {
      "name": "화상회의",
      "url": "https://itwiki.kr/w/%ED%99%94%EC%83%81%ED%9A%8C%EC%9D%98"
  },
  {
      "name": "화이트박스 암호화",
      "url": "https://itwiki.kr/w/%ED%99%94%EC%9D%B4%ED%8A%B8%EB%B0%95%EC%8A%A4_%EC%95%94%ED%98%B8%ED%99%94"
  },
  {
      "name": "화이트박스 테스트",
      "url": "https://itwiki.kr/w/%ED%99%94%EC%9D%B4%ED%8A%B8%EB%B0%95%EC%8A%A4_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "확인과 검증",
      "url": "https://itwiki.kr/w/%ED%99%95%EC%9D%B8%EA%B3%BC_%EA%B2%80%EC%A6%9D"
  },
  {
      "name": "확장형 인증 프로토콜",
      "url": "https://itwiki.kr/w/%ED%99%95%EC%9E%A5%ED%98%95_%EC%9D%B8%EC%A6%9D_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C"
  },
  {
      "name": "활성화 함수",
      "url": "https://itwiki.kr/w/%ED%99%9C%EC%84%B1%ED%99%94_%ED%95%A8%EC%88%98"
  },
  {
      "name": "회귀",
      "url": "https://itwiki.kr/w/%ED%9A%8C%EA%B7%80"
  },
  {
      "name": "회귀 분석",
      "url": "https://itwiki.kr/w/%ED%9A%8C%EA%B7%80_%EB%B6%84%EC%84%9D"
  },
  {
      "name": "회귀 테스트",
      "url": "https://itwiki.kr/w/%ED%9A%8C%EA%B7%80_%ED%85%8C%EC%8A%A4%ED%8A%B8"
  },
  {
      "name": "후위식",
      "url": "https://itwiki.kr/w/%ED%9B%84%EC%9C%84%EC%8B%9D"
  },
  {
      "name": "흐름 제어",
      "url": "https://itwiki.kr/w/%ED%9D%90%EB%A6%84_%EC%A0%9C%EC%96%B4"
  },
  {
      "name": "힙",
      "url": "https://itwiki.kr/w/%ED%9E%99"
  },
  {
      "name": "힙 영역",
      "url": "https://itwiki.kr/w/%ED%9E%99_%EC%98%81%EC%97%AD"
  },
  {
      "name": "힙 정렬",
      "url": "https://itwiki.kr/w/%ED%9E%99_%EC%A0%95%EB%A0%AC"
  }
]);
// _itwiki.concat();
// _itwiki.concat();
// _itwiki.concat();
// _itwiki.concat();
// _itwiki.concat();
// _itwiki.concat();
// _itwiki.concat();

_itwiki = _itwiki.sort((a, b) => {
    // 내림차순
    if (a.name.length < b.name.length) {
        return 1;
    } else {
        return -1;
    }
});

if (module && module.exports) {
    exports._itwiki = _itwiki;
}
