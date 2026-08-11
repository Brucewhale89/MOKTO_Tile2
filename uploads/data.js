// html_pages/shop_view_*.html (벳센타일 실제 상품 페이지) 기준 전량 재구성.
// row = [idx, name, price, imgPath, size, spec, color, origin, pcsOverride, m2Override]
const _SPEC_BY_SIZE = {
  "300X300": [16, 1.44], "300X600": [8, 1.44], "600X600": [4, 1.44],
  "600X1200": [2, 1.44], "800X800": [3, 1.92], "900X900": [2, 1.62],
  "1200X1200": [2, 2.88], "400X800": [4, 1.28], "450X900": [3, 1.215],
  "200X230": [20, 0.7], "200X200": [37, 1.48], "75X150": [88, 1],
};

const _ROWS = [
  // ── 600X1200 포세린 (무광) ─────────────────────────────
  [103, "BT-PD126119 (ENZO)", 39000, "20221111/f91a86382b40d.jpg", "600X1200", "포세린 (무광)", "블랙", "중국"],
  [104, "BT-PD126113 (ENZO)", 39000, "20221109/d91b864375120.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [105, "BT-PD126112 (ENZO)", 39000, "20221114/6e143cd4a9bdf.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [106, "BT-PD126110 (ENZO)", 39000, "20221114/2123ea6b6b6b4.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "중국"],
  [107, "BT-61203", 37000, "20221109/2f32f37011e28.png", "600X1200", "포세린 (무광)", "라이트 그레이", "베트남"],
  [108, "BT-61202", 37000, "20221109/e9099502dce3b.png", "600X1200", "포세린 (무광)", "베이지", "베트남"],
  [110, "BT-61200M", 50000, "20221109/bde26a6b2384b.jpg", "600X1200", "포세린 (무광)", "화이트", "베트남", 3, 2.16],
  [21, "BT-REG 12", 46000, "20221013/3a85f7736e13d.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [22, "BT-BALTIMORE 12BK", 27000, "20221013/6524478ed422c.jpg", "600X1200", "포세린 (무광)", "블랙", "중국"],
  [23, "BT-BALTIMORE 12G", 27000, "20221013/8b91ea130f5ab.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [24, "BT-BALTIMORE 12LG", 27000, "20221013/59603428da239.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "중국"],
  [25, "BT-BALTIMORE 12IV", 27000, "20240208/58b18879ddac8.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [40, "BT-612.6879 (CEMENTARO12 DARK)", 26000, "20221024/09df0a8ba3b92.jpg", "600X1200", "포세린 (무광)", "다크 그레이", "중국"],
  [41, "BT-612.6880 (CEMENTARO12 SILVER)", 26000, "20221024/5eb122900e1b8.jpg", "600X1200", "포세린 (무광)", "실버", "중국"],
  [174, "BT-612.3252 (MODERN CONCRETE SILVER)", 35000, "20221222/e64e8fa5a152a.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "베트남"],
  [175, "BT-612.3253 (RIVER ROCK EARTH)", 35000, "20221222/a34ec634c62c4.jpg", "600X1200", "포세린 (무광)", "브라운", "베트남"],
  [176, "BT-612.3254 (RIVER ROCK SAND)", 35000, "20221222/b767489e740db.jpg", "600X1200", "포세린 (무광)", "브라운", "베트남"],
  [177, "BT-612.3257 (LIMESTONE 2.0 SMOKE)", 35000, "20221222/d91bcb2bf4f7f.jpg", "600X1200", "포세린 (무광)", "그레이", "베트남"],
  [178, "BT-612.3256 (LIMESTONE 2.0 GRIS)", 35000, "20221222/a5709766efc2b.jpg", "600X1200", "포세린 (무광)", "아이보리", "베트남"],
  [180, "BT-REG 52", 48000, "20230110/2bbb1df9271a2.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "중국"],
  [181, "BT-REG 51", 48000, "20230111/4af5e1fd28d51.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [207, "BT-ROMA 11", 32000, "20230522/5ee62964a2309.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "중국"],
  [208, "BT-DN 12601M (DOMINANT WH)", 41000, "20230525/b618e9ee28e57.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [210, "BT-MD 12603M (VOLCANIC BLACK)", 41184, "20230525/d46c12f7a3627.jpg", "600X1200", "포세린 (무광)", "블랙", "중국"],
  [211, "BT-MD 12602M (MOSS GREEN)", 41184, "20230525/36295baf29cdd.jpg", "600X1200", "포세린 (무광)", "카키", "중국"],
  [212, "BT-MD 12601M (SAND WHITE)", 41184, "20230525/a3b55c8318cd4.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [229, "TRAVERTINO LUCE", 39600, "20230831/1d7a92fd0c448.jpg", "600X1200", "포세린 (무광)", "베이지", "중국"],
  [230, "TRAVERTINO LUNA", 39600, "20230831/331967ce1166d.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [231, "TRAVERTINO SOLE", 39600, "20230831/a073dbcc5d114.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [233, "BT-IN12601", 39000, "20231027/40c0bf5df2265.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [234, "BT-PEACE 12BK", 26000, "20231219/0847a74100b72.jpg", "600X1200", "포세린 (무광)", "블랙", "베트남"],
  [235, "BT-PEACE 12GR", 26000, "20231219/b5fe9085de707.jpg", "600X1200", "포세린 (무광)", "그레이", "베트남"],
  [236, "BT-PEACE 12WH", 26000, "20231219/53c9632234da8.jpg", "600X1200", "포세린 (무광)", "화이트", "베트남"],
  [237, "BT-PEACE 12IV", 26000, "20231219/51f3a9bee4789.jpg", "600X1200", "포세린 (무광)", "아이보리", "베트남"],
  [250, "BT-612004 (ARE 612 GRIGIO)", 27000, "20260210/b58dcf608a7fb.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [251, "BT-612003 (ARE 612 BIANCO)", 27000, "20240215/af369f74d6c9e.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [252, "BT-612002 (ARE 612 ALMOND)", 27000, "20240216/d8499818ad7de.jpg", "600X1200", "포세린 (무광)", "브라운", "중국"],
  [253, "BT-612001 (ARE 612 CREAM)", 27000, "20240215/5f7e4af6f397e.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [284, "BT-PD 126253 (VANTAGE)", 39000, "20240712/b7000e417a742.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [285, "BT-PD 126252 (VANTAGE)", 39000, "20240712/b09d54622c799.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [286, "BT-PD 126251 (VANTAGE)", 39000, "20240712/9fb263ce1882a.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "중국"],
  [319, "BT-PD 126262 (META STONE)", 39000, "20241120/cbbf4e9bd948f.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [320, "BT-PD 126261 (META STONE)", 39000, "20241120/89548a4a778af.jpg", "600X1200", "포세린 (무광)", "라이트 그레이", "중국"],
  [326, "CLOUD 12 GR", 28000, "20241205/a9ebc142a06cd.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [327, "CLOUD 12 WH", 28000, "20241205/eb94188e2e6ca.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [328, "CLOUD 12 WG", 28000, "20241205/5c4a61d9dcf0c.jpg", "600X1200", "포세린 (무광)", "웜 그레이", "중국"],
  [329, "CLOUD 12 IV", 28000, "20241205/8d60ed993fc1e.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [349, "BT-612017 (FOR 612 GRAPHITE)", 29000, "20250624/21662179d21c9.jpg", "600X1200", "포세린 (무광)", "블랙", "중국"],
  [350, "BT-612016 (FOR 612 GRIGIO)", 29000, "20250624/71488ae8c5f5f.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [351, "BT-612015 (FOR 612 BIANCO)", 29000, "20250624/23515f34562d3.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [352, "BT-612014 (FOR 612 SABBIA)", 29000, "20250626/161779e6bf596.jpg", "600X1200", "포세린 (무광)", "베이지", "중국"],
  [353, "BT-612013 (FOR 612 CREAM)", 29000, "20250625/c544205dc418c.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [359, "BT-PD 126259 (VANTAGE)", 39000, "20250702/77e5bf615e409.jpg", "600X1200", "포세린 (무광)", "블랙", "중국"],
  [361, "BT-PD 126313 (Q-STONE ALPACA)", 39000, "20250808/e267ad0f51ae4.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [362, "BT-PD 126315 (Q-STONE MOON)", 39000, "20250808/c4179d0a3230c.jpg", "600X1200", "포세린 (무광)", "베이지", "중국"],
  [363, "BT-PD 126312 (Q-STONE CASHMERE)", 39000, "20250808/fc4ce983082c2.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [364, "BT-PD 126311 (Q-STONE COTTON)", 39000, "20250808/12b0fc26ce05a.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [379, "LV-CAMELLIA 12 CREMA", 30000, "20250923/2b64a499b6f4a.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [380, "LV-CAMELLIA 12 BIANCO", 30000, "20250923/9e6e4cd50c3ed.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [383, "BT-PD 126222 (DREAMY CREAM)", 39000, "20251024/fa276803ccccc.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [384, "BT-PD 126221 (DREAMY WHITE)", 39000, "20251024/2967070a52c79.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [394, "LV-JASMINE 12 BIANCO", 26000, "20251211/b7ce3cf292725.jpg", "600X1200", "포세린 (무광)", "화이트", "중국"],
  [395, "LV-JASMINE 12 CREMA", 26000, "20251211/bb6c0ddc6cc00.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [387, "M122046 (RIVERWOOD MOCCA)", 32000, "20251029/1eaaef081eeda.jpg", "600X1200", "포세린 (무광)", "브라운", "중국"],
  [388, "M122045 (RIVERWOOD EIGER)", 32000, "20251029/58c77b13dacb2.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [389, "M122044 (RIVERWOOD VINTAGE)", 32000, "20251029/676ece84b44a2.jpg", "600X1200", "포세린 (무광)", "브라운", "중국"],
  [390, "M122043 (RIVERWOOD PURE)", 32000, "20251029/a2bd60a30e305.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],
  [391, "M122042 (RIVERWOOD FOSSIL)", 32000, "20251029/af0537c0533d9.jpg", "600X1200", "포세린 (무광)", "그레이", "중국"],
  [392, "M122041 (RIVERWOOD LIMED)", 32000, "20251029/f8ca72e7715b2.jpg", "600X1200", "포세린 (무광)", "아이보리", "중국"],

  // ── 600X1200 폴리싱 (유광) ─────────────────────────────
  [272, "MYSTERIOUS (612.8203)", 32000, "20240711/3436a768015f2.jpg", "600X1200", "폴리싱 (유광)", "블랙", "베트남"],
  [273, "NILE (612.0230)", 32000, "20240711/a663b1b27bf39.jpg", "600X1200", "폴리싱 (유광)", "청녹", "베트남"],
  [274, "MANDALA BLACK (612.1214)", 32000, "20240711/ae6d5408f8608.jpg", "600X1200", "폴리싱 (유광)", "블랙", "베트남"],
  [275, "AZUL (612.1213)", 32000, "20240713/c8a92ba450657.jpg", "600X1200", "폴리싱 (유광)", "블루", "베트남"],
  [276, "PIETRA MIX GRAPHITE (612.1210)", 32000, "20240711/89ac5405880b0.jpg", "600X1200", "폴리싱 (유광)", "블랙", "베트남"],
  [277, "PIETRA MIX WHITE (612.1211)", 32000, "20240711/3f59f56946297.jpg", "600X1200", "폴리싱 (유광)", "화이트", "베트남"],
  [278, "LA PLATA SMOKE (612.8205)", 32000, "20240711/466c0a2eb6847.jpg", "600X1200", "폴리싱 (유광)", "그레이", "베트남"],
  [279, "LA PLATA SKY (612.8206)", 32000, "20240711/ec9acf22ef351.jpg", "600X1200", "폴리싱 (유광)", "라이트 그레이", "베트남"],
  [280, "CANYON BLEND (612.3216)", 32000, "20240711/fbeb236d60882.jpg", "600X1200", "폴리싱 (유광)", "네이비", "베트남"],
  [281, "CANYON WHITE (612.1209)", 32000, "20240711/9b71170348d63.jpg", "600X1200", "폴리싱 (유광)", "라이트 그레이", "베트남"],
  [282, "ALBA OFF-WHITE (612.1212)", 32000, "20240711/ca80ac3ed88fa.jpg", "600X1200", "폴리싱 (유광)", "화이트", "베트남"],
  [283, "WINSLOW SEAL (612.3215)", 32000, "20240711/547342c72e0e2.jpg", "600X1200", "폴리싱 (유광)", "그레이", "베트남"],

  // ── 600X600 포세린 (무광) ──────────────────────────────
  [2, "BT-66J03", 15048, "20221011/9b3fcdcf0fd19.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [11, "BT-BALTIMORE 66BK", 19000, "20221012/9ad19a58c37cc.jpg", "600X600", "포세린 (무광)", "블랙", "중국"],
  [12, "BT-BALTIMORE 66G", 19000, "20221012/68d93a5966dd1.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [13, "BT-BALTIMORE 66LG", 19000, "20221012/a99861ab53856.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [14, "BT-BALTIMORE 66IV", 19000, "20240207/4819fac53d50b.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [17, "BT-F65072", 16632, "20221013/1a4a69dc00a93.jpg", "600X600", "포세린 (무광)", "다크 그레이", "중국"],
  [146, "BT-PD6119 (ENZO)", 25000, "20221123/7e8e7bce97519.jpg", "600X600", "포세린 (무광)", "블랙", "중국"],
  [147, "BT-PD6113 (ENZO)", 25000, "20221123/23d7e74818f1a.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [148, "BT-PD6112 (ENZO)", 25000, "20221123/c2a1bc8332241.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [149, "BT-PD6110 (ENZO)", 25000, "20221123/bebd5252cba72.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [150, "BT-REG22", 32000, "20221123/8cf018fec1373.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [151, "BT-REG21", 32000, "20221123/d23669ee53842.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [152, "BT-REG24", 31680, "20221123/26447fd805800.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [153, "BT-REG23", 31680, "20221123/d2e6da935042e.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [162, "BT-KERASIN GLAM CREMA", 27000, "20221125/8dd877cf898d9.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [164, "BT-FLEX WOOD", 20000, "20221125/b436c5d379fad.jpg", "600X600", "포세린 (무광)", "브라운", "중국"],
  [167, "BT-SUPREME GREY", 19000, "20221128/f7cf429e16a37.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [168, "BT-SUPREME BEIGE", 19000, "20240126/1ec9af6046ae3.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [169, "BT-SUPREME WHITE", 19000, "20240128/332d83e4491b9.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [171, "BT-C6176 CRETE G", 23760, "20250507/7eddd565e0e9c.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [173, "BT-C6171 CRETE LG", 23760, "20221128/6bc4d4dcbc3a0.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [184, "BT-PEACE 66 BK", 18000, "20230131/616edc7793a42.jpg", "600X600", "포세린 (무광)", "블랙", "베트남"],
  [185, "BT-PEACE 66 GR", 18000, "20230131/1dc915884dded.jpg", "600X600", "포세린 (무광)", "그레이", "베트남"],
  [186, "BT-PEACE 66 WH", 18000, "20230131/d6dafeb6effdc.jpg", "600X600", "포세린 (무광)", "화이트", "베트남"],
  [187, "BT-PEACE 66 IV", 18000, "20230131/830979c39b36c.jpg", "600X600", "포세린 (무광)", "아이보리", "베트남"],
  [209, "BT-DN 6001M (DOMINANT WH)", 28500, "20230525/40774629ae434.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [213, "BT-MD 6003M (VOLCANIC BLACK)", 28512, "20230525/7bba27acbb971.jpg", "600X600", "포세린 (무광)", "블랙", "중국"],
  [214, "BT-MD 6002M (MOSS GREEN)", 28512, "20230525/be93a2e661708.jpg", "600X600", "포세린 (무광)", "그린", "중국"],
  [215, "BT-MD 6001M (SAND WHITE)", 28512, "20230525/cda398cea7641.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [216, "EDGE-REUS WH", 17500, "20230628/6734d5e336899.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [217, "EDGE-REUS IV", 17500, "20230628/e0299ae6f5a8f.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [218, "EDGE-PISA GR", 17500, "20230724/154bd09d92d01.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [219, "EDGE-PISA LG", 17500, "20230724/1e7bc04b62dc8.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [220, "EDGE-PISA IV", 17500, "20230724/2d59f00ccf291.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [221, "EDGE-LATINA DG", 15840, "20230726/c0b33b90db8cb.jpg", "600X600", "포세린 (무광)", "다크 그레이", "중국"],
  [222, "EDGE-LATINA GR", 15840, "20230726/27bdc3b8095bf.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [223, "EDGE-LATINA LG", 15840, "20230726/70c254214bfd1.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [224, "EDGE-LATINA WH", 15840, "20230726/11b1445bf0a02.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [232, "BT-IN6001", 28000, "20231027/69f20cc1e4b19.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [242, "BT-66004 (ARE 66 GRIGIO)", 18000, "20240206/fec9069030eb7.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [243, "BT-66003 (ARE 66 BIANCO)", 18000, "20240206/0f407eaa9352c.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [244, "BT-66002 (ARE 66 ALMOND)", 18000, "20240206/a6f6d90517edd.jpg", "600X600", "포세린 (무광)", "브라운", "중국"],
  [245, "BT-66001 (ARE 66 CREAM)", 18000, "20240206/7cea622651993.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [268, "ALPHA 604", 14000, "20240710/4b17b253ee90f.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [270, "ALPHA 602", 14000, "20240716/11515e3b6289d.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [271, "ALPHA 601", 14000, "20240716/6e612f4e9551b.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [342, "ALPHA 605", 14000, "20250514/25e6cf0f9241a.jpg", "600X600", "포세린 (무광)", "블랙", "중국"],
  [287, "BT-PD 6253 (VANTAGE)", 25000, "20240712/bdd9bfa19ad7a.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [288, "BT-PD 6252 (VANTAGE)", 25000, "20240712/7b45009525990.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [289, "BT-PD 6251 (VANTAGE)", 25000, "20240712/422dfdb7f7f92.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [321, "BT-PD 6262 (META STONE)", 25000, "20241120/a8dc24f9ced67.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [322, "BT-PD 6261 (META STONE)", 25000, "20241120/f4538670d3a57.jpg", "600X600", "포세린 (무광)", "라이트 그레이", "중국"],
  [330, "CLOUD 66 GR", 20000, "20241205/8580dec40e805.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [331, "CLOUD 66 WH", 20000, "20241205/c97f6046c84a7.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [332, "CLOUD 66 WG", 20000, "20241205/a8743485ed887.jpg", "600X600", "포세린 (무광)", "웜 그레이", "중국"],
  [333, "CLOUD 66 IV", 20000, "20241205/c63f447e82189.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [354, "BT-66017 (FOR 66 GRAPHITE)", 20000, "20250616/164c2b549497b.jpg", "600X600", "포세린 (무광)", "블랙", "중국"],
  [355, "BT-66016 (FOR 66 GRIGIO)", 20000, "20250616/ba46cbe77076e.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [356, "BT-66015 (FOR 66 BIANCO)", 20000, "20250616/5319451622913.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [357, "BT-66014 (FOR 66 SABBIA)", 20000, "20250626/c3787cd48f916.jpg", "600X600", "포세린 (무광)", "베이지", "중국"],
  [358, "BT-66013 (FOR 66 CREAM)", 20000, "20250616/78439ecddc96a.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [360, "BT-PD 6259 (VANTAGE)", 25000, "20250702/78ca9ca9ffaf8.jpg", "600X600", "포세린 (무광)", "블랙", "중국"],
  [365, "BT-PD 6315 (Q-STONE MOON)", 25000, "20250808/6f1ca9d0fcdf8.jpg", "600X600", "포세린 (무광)", "베이지", "중국"],
  [366, "BT-PD 6313 (Q-STONE ALPACA)", 25000, "20250808/ba15c1a42e638.jpg", "600X600", "포세린 (무광)", "그레이", "중국"],
  [367, "BT-PD 6312 (Q-STONE CASHMERE)", 25000, "20250808/10815c615c089.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [368, "BT-PD 6311 (Q-STONE COTTON)", 25000, "20250808/3bd3f0941dd24.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [381, "LV-CAMELLIA 66 CREMA", 22000, "20250923/25a2de66548f1.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [382, "LV-CAMELLIA 66 BIANCO", 22000, "20250923/c5683b8c07f71.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [385, "BT-PD 6222 (DREAMY CREAM)", 25000, "20251024/7b99138f95e67.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],
  [386, "BT-PD 6221 (DREAMY WHITE)", 25000, "20251024/4184d1d63b478.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [393, "LV-JASMINE 66 BIANCO", 18000, "20251211/661d18ecdf906.jpg", "600X600", "포세린 (무광)", "화이트", "중국"],
  [396, "LV-JASMINE 66 CREMA", 18000, "20251211/e04d4f1e62191.jpg", "600X600", "포세린 (무광)", "아이보리", "중국"],

  // ── 600X600 유약 폴리싱 (유광) ─────────────────────────
  [159, "BT-PIETRA GREY", 27000, "20221125/0311e39ee5dcf.jpg", "600X600", "유약 폴리싱 (유광)", "그레이", "중국"],
  [163, "BT-GLAM CREMA", 27000, "20221212/8f97369f72ea8.jpg", "600X600", "유약 폴리싱 (유광)", "아이보리", "중국"],

  // ── 800X800 포세린 (무광) ──────────────────────────────
  [196, "BT-PEACE SHADOW (88BK)", 38000, "20230410/ed34442f466f9.jpg", "800X800", "포세린 (무광)", "블랙", "베트남"],
  [197, "BT-PEACE GRANITE (88GR)", 38000, "20230410/21a0e28dfc221.jpg", "800X800", "포세린 (무광)", "그레이", "베트남"],
  [198, "BT-PEACE BIANCO (88WH)", 38000, "20230410/a6fabbd5caf36.jpg", "800X800", "포세린 (무광)", "화이트", "베트남"],
  [199, "BT-PEACE CREAM (88IV)", 38000, "20230410/579f1f52a3ae0.jpg", "800X800", "포세린 (무광)", "아이보리", "베트남"],
  [254, "BT-88004 (ARE 88 GRIGIO)", 32000, "20240520/854395c0df439.jpg", "800X800", "포세린 (무광)", "그레이", "중국"],
  [255, "BT-88003 (ARE 88 BIANCO)", 32000, "20240520/4d82c2d918b86.jpg", "800X800", "포세린 (무광)", "화이트", "중국"],
  [256, "BT-88002 (ARE 88 ALMOND)", 32000, "20240521/24163cff2abb7.jpg", "800X800", "포세린 (무광)", "브라운", "중국"],
  [257, "BT-88001 (ARE 88 CREAM)", 32000, "20240520/83349528efecc.jpg", "800X800", "포세린 (무광)", "아이보리", "중국"],
  [397, "LV-IRIS 88 CREMA", 32000, "20251229/aa1d2fbce093c.jpg", "800X800", "포세린 (무광)", "아이보리", "중국"],
  [398, "LV-IRIS 88 BIANCO", 32000, "20251229/44f3d3ab0b970.jpg", "800X800", "포세린 (무광)", "화이트", "중국"],

  // ── 900X900 포세린 (무광) ──────────────────────────────
  [28, "BT-PD 9119 (ENZO)", 45000, "20221015/3d19806439b0b.jpg", "900X900", "포세린 (무광)", "블랙", "중국"],
  [29, "BT-PD 9113 (ENZO)", 45000, "20221015/b7c5a3fb837fc.jpg", "900X900", "포세린 (무광)", "그레이", "중국"],
  [30, "BT-PD 9112 (ENZO)", 45000, "20221014/9192e10db9ccc.jpg", "900X900", "포세린 (무광)", "아이보리", "중국"],
  [31, "BT-PD 9111 (ENZO)", 45000, "20221015/146835ba773f1.jpg", "900X900", "포세린 (무광)", "라이트 그레이", "중국"],

  // ── 1200X1200 포세린 (무광) ────────────────────────────
  [258, "BT-PD 1212113 (ENZO)", 100000, "20240530/d21dd0a45dd5a.jpg", "1200X1200", "포세린 (무광)", "그레이", "중국"],
  [259, "BT-PD 1212112 (ENZO)", 100000, "20240530/4b31d42a76741.jpg", "1200X1200", "포세린 (무광)", "아이보리", "중국"],
  [260, "BT-PD 1212111 (ENZO)", 100000, "20240530/af55ffc79224b.jpg", "1200X1200", "포세린 (무광)", "라이트 그레이", "중국"],

  // ── 400X800 / 450X900 포세린 (무광) ────────────────────
  [32, "BT-BALTIMORE 48DG", 21120, "20221015/63bcc2d9c6b36.jpg", "400X800", "포세린 (무광)", "다크 그레이", "중국"],
  [34, "BT-BALTIMORE 48IV", 21120, "20221014/054488e0d0d89.jpg", "400X800", "포세린 (무광)", "아이보리", "중국"],
  [38, "BT-POCKER 48 BLANCO", 22528, "20221024/ae3fcbb2958ee.jpg", "400X800", "포세린 (무광)", "화이트", "중국"],
  [26, "BT-4592", 22000, "20221014/384621470688b.jpg", "450X900", "포세린 (무광)", "다크 그레이", "중국"],
  [27, "BT-4591", 22000, "20221014/2caae7f9e3eca.jpg", "450X900", "포세린 (무광)", "라이트 그레이", "중국"],

  // ── 300X600 벽 타일 (도기질) ───────────────────────────
  [115, "BT-CANCUN 3602", 12500, "20221114/a4a6c844a06da.jpg", "300X600", "벽 타일 (도기질) / 무광", "그레이", "중국"],
  [120, "BT-SKW 7272", 14000, "20221114/d625337120724.jpg", "300X600", "벽 타일 (도기질) / 슈가", "네이비", "중국"],
  [128, "BT-TERRAZO BIANCO", 12500, "20221121/8638375146ccc.jpg", "300X600", "벽 타일 (도기질) / 무광", "화이트", "중국"],
  [129, "BT-BTM 36 LG", 13000, "20230623/f88785fa8ff0c.jpg", "300X600", "벽 타일 (도기질) / 무광", "라이트 그레이", "중국"],
  [130, "BT-BTM 36 IV", 13000, "20221121/428849f970aa0.jpg", "300X600", "벽 타일 (도기질) / 무광", "아이보리", "중국"],
  [135, "BT-4362M", 21000, "20221121/8ca846d9c20e0.jpg", "300X600", "벽 타일 (도기질) / 무광", "아이보리", "국산"],
  [144, "BT-ELIM SILVER", 12000, "20221122/e3a84730268b0.jpg", "300X600", "벽 타일 (도기질) / 무광", "라이트 그레이", "중국"],
  [145, "BT-ELIM GOLD", 12000, "20221122/f52fc6d21ab3b.jpg", "300X600", "벽 타일 (도기질) / 무광", "아이보리", "중국"],
  [238, "BT-36001 (ARE 36 CREAM)", 13500, "20240201/660d1d30f1152.jpg", "300X600", "벽타일/도기질 (무광)", "아이보리", "중국"],
  [239, "BT-36002 (ARE 36 ALMOND)", 13500, "20240201/aed09ad8ec748.jpg", "300X600", "벽타일/도기질 (무광)", "브라운", "중국"],
  [240, "BT-36003 (ARE 36 BIANCO)", 13500, "20240201/41bbb5e7c9203.jpg", "300X600", "벽타일/도기질 (무광)", "화이트", "중국"],
  [241, "BT-36004 (ARE 36 GRIGIO)", 13500, "20240201/7e450f2a4ca32.jpg", "300X600", "벽타일/도기질 (무광)", "그레이", "중국"],
  [323, "BT-PD 3613 (ENZO)", 13000, "20241127/30d76c87ad4d2.jpg", "300X600", "벽타일/도기질 (무광)", "그레이", "중국"],
  [324, "BT-PD 3612 (ENZO)", 13000, "20241127/3cfb4a6a72d56.jpg", "300X600", "벽타일/도기질 (무광)", "아이보리", "중국"],
  [325, "BT-PD 3610 (ENZO)", 13000, "20241127/4718a594a8ac2.jpg", "300X600", "벽타일/도기질 (무광)", "화이트", "중국"],
  [374, "BT-36017 (FOR 36 GRAPHITE)", 13500, "20250811/90a72d0956483.jpg", "300X600", "벽타일/도기질 (무광)", "블랙", "중국"],
  [375, "BT-36016 (FOR 36 GRIGIO)", 13500, "20250811/eede63ea4bbff.jpg", "300X600", "벽타일/도기질 (무광)", "그레이", "중국"],
  [376, "BT-36015 (FOR 36 BIANCO)", 13500, "20250811/b994aa8135fb2.jpg", "300X600", "벽타일/도기질 (무광)", "화이트", "중국"],
  [377, "BT-36014 (FOR 36 SABBIA)", 13500, "20250811/6500b3e2279c8.jpg", "300X600", "벽타일/도기질 (무광)", "베이지", "중국"],
  [378, "BT-36013 (FOR 36 CREAM)", 13500, "20250811/d536ae3f276cb.jpg", "300X600", "벽타일/도기질 (무광)", "아이보리", "중국"],

  // ── 300X300 바닥 타일 (자기질 / 무광) ──────────────────
  [124, "BT-D02", 10500, "20221125/dffa7b97a1464.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "그레이", "중국"],
  [125, "BT-V02", 10000, "20221123/efb96c801bcce.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "그레이", "중국"],
  [126, "BT-D01", 10500, "20221121/9d95cad0c905e.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "중국"],
  [127, "BT-V01", 10000, "20221121/57a04ecf06d99.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "중국"],
  [138, "BT-PD3112", 17000, "20221121/9f89f7ba7d7ee.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "국산"],
  [246, "BT-33004 (ARE 33 GRIGIO)", 11500, "20240214/293fd0880b3f5.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "그레이", "중국"],
  [247, "BT-33003 (ARE 33 BIANCO)", 11500, "20240214/fb8d0091a9f14.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "화이트", "중국"],
  [248, "BT-33002 (ARE 33 ALMOND)", 11500, "20240214/7e19509d4e18a.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "브라운", "중국"],
  [249, "BT-33001 (ARE 33 CREAM)", 11500, "20240214/919df25e0228d.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "중국"],
  [334, "BT-BTM 33 IV", 13500, "20241206/8f6df15c389c9.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "중국"],
  [335, "BT-BTM 33 LG", 13500, "20241206/6e76f29962532.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "라이트 그레이", "중국"],
  [346, "PD 3313 (ENZO)", 13500, "20250604/f0edcea6ec17b.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "그레이", "중국"],
  [347, "PD 3312 (ENZO)", 13500, "20250604/f38031cc5498e.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "중국"],
  [348, "PD 3310 (ENZO)", 13500, "20250604/e288e21a1915e.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "라이트 그레이", "중국"],
  [369, "BT-33017 (FOR 33 GRAPHITE)", 11500, "20250811/5d0c532ebfd67.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "블랙", "중국"],
  [370, "BT-33016 (FOR 33 GRIGIO)", 11500, "20250811/31ea9eecaa456.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "그레이", "중국"],
  [371, "BT-33015 (FOR 33 BIANCO)", 11500, "20250811/0675c47b6c1f3.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "화이트", "중국"],
  [372, "BT-33014 (FOR 33 SABBIA)", 11500, "20250811/a242819db5479.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "베이지", "중국"],
  [373, "BT-33013 (FOR 33 CREAM)", 11500, "20250811/ad94472c79964.jpg", "300X300", "바닥 타일 (자기질 / 무광)", "아이보리", "중국"],

  // ── 200X200 / 200X230 소형 ─────────────────────────────
  [183, "$12", 19000, "20230110/528c6ce417eeb.jpg", "200X200", "바닥타일 (자기질/패턴)", "라이트 그레이", "국산"],
  [290, "BT 26-5", 3000, "20250327/f31daaa612c26.png", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국"],
  [291, "BT 26-3", 3000, "20250530/579b29a7fee68.png", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국"],
  [294, "BT-HP001", 3000, "20250530/d4e1dc3390004.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국"],
  [295, "BT-009", 3000, "20240913/bcc0c913dfb97.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국"],
  [296, "BT-A003", 3000, "20250530/98df5165d455e.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국"],
  [297, "BT-A007", 3000, "20250530/c982a636bfe46.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국"],
  [298, "TFBT-478", 5000, "20241018/5d72237c0807e.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [299, "TFBT-309", 5000, "20241026/ebaa00982e230.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [300, "TFBT-303", 5000, "20241015/1ced352dc7cb7.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [301, "TFBT-302", 5000, "20241022/5eb43132f467c.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [302, "TFBT-249", 5000, "20241026/e2bea0bb8c0af.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [303, "TFBT-900", 5000, "20241026/d45154806d057.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [304, "TFBT-800", 5000, "20241026/0df24c188fecd.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],
  [305, "TFBT-200", 5000, "20240913/b3eca68de6810.jpg", "200X230", "바닥 타일 (자기질 / 무광)", "패턴", "중국", 29, 1],

  // ── 75X150 브릭 / 기타 ─────────────────────────────────
  [344, "BRICK CLASSIC NUT", 5000, "20250530/eaa69f887f38a.jpg", "75X150", "포세린 (무광)", "브라운", "중국"],
  [345, "BRICK CLASSIC GOLD", 5000, "20250530/1b082053e2595.jpg", "75X150", "포세린 (무광)", "아이보리", "중국"],
  [306, "ANGEL HAIR SHADOW", 5000, "20250111/6bab1cdab9348.jpg", "300X300", "모자이크", "그레이", "중국"],
  [307, "ANGEL HAIR GREY", 5000, "20250111/6c1da3e6319c5.jpg", "300X300", "모자이크", "그레이", "중국"],
  [308, "ANGEL HAIR CREAM", 5000, "20250530/ffd8614697436.jpg", "300X300", "모자이크", "아이보리", "중국"],
  [343, "VMR 01", 5000, "20250530/cc369fdbe14ab.jpg", "300X300", "모자이크", "아이보리", "중국"],
  [200, "BT-SY4905", 8000, "20230411/7bb70798231d2.jpg", "300X300", "모자이크", "화이트", "중국"],
  [202, "BT-49LS05", 8000, "20230411/c418e5491f62d.jpg", "300X300", "모자이크", "화이트", "중국"],
  [205, "BT-49FN04", 8000, "20230411/f16d4973b7513.jpg", "300X300", "모자이크", "화이트", "중국"],
  [206, "BT-49BY101P", 8000, "20230411/bcf8d64c8fd87.jpg", "300X300", "모자이크", "화이트", "중국"],

  // ── 부자재 / 선반 / 블록 ───────────────────────────────
  [311, "ARE-GRIGIO STRAIGHT SHELF", 30000, "20241027/dd1a1808a15fe.jpg", "선반", "코너 선반", "그레이", "중국", 1, 1],
  [312, "ARE-BIANCO STRAIGHT SHELF", 30000, "20241022/33d604216e3ee.jpg", "선반", "코너 선반", "화이트", "중국", 1, 1],
  [313, "ARE-ALMOND STRAIGHT SHELF", 30000, "20241024/79156e00de339.jpg", "선반", "코너 선반", "브라운", "중국", 1, 1],
  [317, "ARE-ALMOND CORNER SHELF", 30000, "20241024/c17720f41eefc.jpg", "선반", "코너 선반", "브라운", "중국", 1, 1],
  [336, "HI BLOCK 30T", 14000, "20250324/13eefa58028f4.png", "블록", "하이블록", "화이트", "국산", 1, 1],
  [337, "HI BLOCK 50T", 20000, "20250324/8741af2546fad.png", "블록", "하이블록", "화이트", "국산", 1, 1],
  [338, "HI BLOCK 80T", 28000, "20250502/632989b80f1a0.png", "블록", "하이블록", "화이트", "국산", 1, 1],
  [341, "HI BLOCK 80T with SLOT", 32000, "20250502/b8a34eaf1fa1b.png", "블록", "하이블록", "화이트", "국산", 1, 1],
];

// 갤러리: idx → 이미지 해시 목록 (원본 상품페이지 이미지 순서 그대로)
const _CDN = "https://cdn-optimized.imweb.me/upload/S2022100791d92227b708f/";
const _GAL = {
  2: "c4882ff402701,646ef4507c202,3b00f72951504,d925e1d45845d,0b7a136fe9a29,a27e34f1839b4,6c6ec1a725f23,a4f87effe4ac8,fdcc5c412e996",
  11: "b08d70f0c992f,2ea044cc5236c,6f4846393c277,295d16b0079ed,89a1e4e6c0019",
  12: "5502079974bc6,f5fbedcfb3f32,809e244e5b8df,07547b4cb9b9b,fae648d9c0af2",
  13: "ae378ae7f709a,ecbf15ed11824,6f4a7ebe1ae61,398d7e42fdbd3,43712092b2e40",
  14: "7076fe5608641,b365eb6e7d32b,76309357e528b,8ff9e9dcab4c7,c393d81e1c323",
  17: "c05c58811ebe7,72812ada017c4,e442fe64bb4f2,8119880034db8",
  167: "39b6475f89501,01debf7aceec3,98467acee5507,dd2e02256f5b4,e1c3fd69c31a6,48c64ef5b2155",
  168: "4b89dab70b021,f68ade9f81149,93f5589396c7e,104e5c6f1a733,a4c1bd05a6833,1676739c66508",
  169: "404e10cd0847d,82d3ff914bc0a,e5f55f645bc1d,177beacb003b5,cd9c51fef7d5a,a4dc616db489a",
  171: "c92fc07e90755,8c30957702f2e,83d9c6c03575b,6a67388bd86b1,a8ef057b64b6e,f300aee2ee24f,ff18fb365b0cf,99d1cae06aaee,78a270dd90372,f82931c6c597f,233f16dc8b783",
  173: "ccba9d7832176,8693df512da11,aee7e0d8aff1c,bdb0cd9190f3d,3bda44545158f,c0c97861a4939,d88bd99f227e8,58b3438b0a322,323c2e7a40ca5,615f8e1371f4f,da22b94a7b63d,2967793c8dcc6",
  209: "77f88b479c1c5,9366fd6b35256,419c387ee8417,1f288454ddc56,1d2f95453fbe4,8944c8584dda3,f9fa429974009,e8076373b9634,d94420df4e1ed,7c8538e93bfeb,36e7c4c2d34f0,6ba287f37c039,110b3855e349d,b915e594c58dd,59000c0d14ca9,e235ed8045859,421121ff1a2e6,976564e443278,713abecfb9817,ae98f4e1ac0f3,d86706e902e0f,f2866458fe334,92ec8468232ae,013f36d827752",
  216: "7ac1491feb616,f429edcf53afa,9a6a2eefa58d3,cfacf24d96b3c,bc91e0f7d280d,3b966eb47cbbf,ae493a194fbee,7d863dfe0c8fc,6cdfefd35613e",
  217: "647070ee9e1ac,b2ddc5a37b007,77d41620bafcf,d628309018316,1e7012d0436aa,7c9aa27053eb7,744196a0af8bd,114f2c91d7f10,c760c9309e12f",
  218: "37493a69197d5,c6c9c5a328a0d,e53b159bca426,5f445888de09b,2421b21adeee2,9467344ac2436,8a76083242563,63ccb03f06a13,5a5905130ff2f",
  219: "939cc0810e6a2,7636fbd01ce9c,76e136182339d,d6beeefc56261,2f5e74eebb8ae,3b322e3020982,3db4334fab45d,74a8b6839cdb0,8ab53b0ba3223",
  220: "179ebb8c226a0,18be1336330bc,a398796c40895",
  221: "9d4c6ce15817e,ef351dfa1403d,a87fa31c1c923,d7040ee4b50fb,88ab552309c82,135fa9d2147e2,dc1db4275439f,6a87aa22da3bf,3663a82239eb8",
  222: "7a7cdf5846e71,50628314a325a,f08b1a4907571,ceef7d8e713d4,741fc77e016bc,edab788665d50,20662f177e50e,72c83c59432ac,2545f735a1ae5",
  223: "76b929b1ad2c5,87931d257b96f,79041f165d1b3,160ece2e2ed96,9eaa2d85d6c75,709e30d1e76c6,2369577f5fca7,49b63845a069c,93578d3487c2a",
  224: "2c847adf4a94e,2898a0ba0a646,9347179beb217,fff6d86ce63fc,5789bf9391f61,d8794f9aa5fee,4581d99f1da34,1201b8bac5e70,e87a4d85c6a21",
  232: "0b76541c3bb09,7a353da43fe30,23c9d9c0a873c,1f92aa4f87700,9e3e28da4d884,8862915b4267e,c884646eb158b,76cc225327815,f7694d511f6cb,7aee66279bcd3,c689883e6ca7e,f947954ba4f75,b396a985f7c47,9f413e73c72c3,a2b8f157c5de8,e341a06a0bc2c,5fe105de102c3,d850481107705,bc47b21b70454,9157550047f80,775db3f4d4809,9a4cfabaa7fa8,c5aeee0a1ba14,9810147b1d524",
  242: "998354f4cbab6,36f123cfb27ed,669619874b14d,95235f556ff28,2a41113a2479a,3f9f0e7d5aa7c,367d78126148d,dab609f1a77fe",
  243: "b7536b6476731,29b84b874cc4a,59f140c179d69,eecf0c312665d,96caf574244d1,2f1d26a9cf7bb,8ebba4aee4dec,fae01eb7b6172",
  244: "3dafab511da05,0cc7160e1dcd1,650d096d525b9,97f008f220353,6980f9de7f505,c1341fecd67e9,e9b27f3f13b45,b5189192ba074",
  245: "0132ff44e5cd3,a3102d74fe84e,dc314eee2d2ff,af6778d55f897,c4ac48a9f3aac,b5691e1f499d8,c7602f5149bdf,56b53ef422c36",
  268: "405444657c354,e972af5a25b2e,f00729c2ca3dd,682cf2af5dd81,21210c8b26ab2,c6a43e203874f,3c311dcd23dee,f78428be5ed1d,f9be72a6c9c6e,b2c194115cd0a,2080f5f0b31f3,4635ce9023214",
  270: "7baacc88790e4,ca0d2ab996895,958f20895ad7a,1f1f5ec90bac7,4e8648179e9f1,566111b3881f5,7e8606fed0118,dc95a0ac46a30,80a559e71b8d7,466fb2b4232fb,99229de12f3d9,d5db15f1bd4ca",
  271: "4dd80cda2c08a,f94b41d6ef1e9,cba36efec34d8,2b924aa80bf6c,2959728cf2a0e,1ad03e0ef0132,785a9789bf665,de59a8319742a,9ac8f99e48304,88fa3f89413e5,252ec890e1f0b,45c7f9ed72b80",
};

// 공개 모델명(더미): ST-{시리즈명}-{색상2자}[중복시 닉네임2자 또는 00~]
// 시리즈명은 사이즈×재질×광도 조합별로 고정 배정되는 열대/지역감 단어 (예: 모마, 토스카나).
// 괄호 안 문구는 실제 모델명이 아니라 타일 닉네임이므로 모델코드 산출에서는 제외한다.
const _SERIES_WORDS = [
  "모마", "토스카나", "세비야", "프로방스", "볼로냐", "팔레르모", "나폴리", "발렌시아",
  "안달루시아", "베로나", "마르세유", "타호마", "리오마", "마요르카", "코르시카", "사르데냐",
  "그라나다", "리스본", "포르토", "발디로사", "카프리", "아말피", "몬테로소", "친퀘테레",
];
const _seriesHash = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
};
const _seriesName = (size, material, finish) => {
  const key = `${size}|${material || ""}|${finish || ""}`;
  return _SERIES_WORDS[_seriesHash(key) % _SERIES_WORDS.length];
};
const _COLOR_CODE = {
  "화이트": "WH", "블랙": "BK", "그레이": "GR", "라이트 그레이": "LG", "다크 그레이": "DG",
  "웜 그레이": "WG", "아이보리": "IV", "베이지": "BG", "브라운": "BR", "카키": "KH",
  "실버": "SV", "블루": "BL", "네이비": "NV", "청녹": "TL", "그린": "GN", "패턴": "PT",
};
const _colorCode = (color) => {
  const base = color.replace(/\s*\([^)]*\)/, "").trim();
  return _COLOR_CODE[base] || base.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase() || "XX";
};
const _nickname2 = (name) => {
  const m = name.match(/\(([^)]+)\)/);
  if (!m) return "";
  const alpha = (m[1].match(/[A-Za-z]{2,}/) || [""])[0];
  return alpha.slice(0, 2).toUpperCase();
};


// 실제 시공사진 (idx → 로컬 경로)
const _INSTALLED_LOCAL = {
  2: "uploads/installed/bt-66j03.jpg",
  11: "uploads/installed/bt-baltimore-66bk.jpg",
  12: "uploads/installed/bt-baltimore-66g.jpg",
  13: "uploads/installed/bt-baltimore-66lg.jpg",
  14: "uploads/installed/bt-baltimore-66iv.jpg",
  17: "uploads/installed/bt-f65072.jpg",
  146: "uploads/installed/bt-pd6119.jpg",
  147: "uploads/installed/bt-pd6113.jpg",
  148: "uploads/installed/bt-pd6112.jpg",
  149: "uploads/installed/bt-pd6110.jpg",
  150: "uploads/installed/bt-reg22.jpg",
  151: "uploads/installed/bt-reg21.jpg",
  153: "uploads/installed/bt-reg23.jpg",
  162: "uploads/installed/bt-kerasin-glam-crema.jpg",
  167: "uploads/installed/bt-supreme-grey.jpg",
  169: "uploads/installed/bt-supreme-white.jpg",
  171: "uploads/installed/bt-c6176-crete-g.jpg",
  173: "uploads/installed/bt-c6171-crete-lg.jpg",
  184: "uploads/installed/bt-peace-66-bk.jpg",
  185: "uploads/installed/bt-peace-66-gr.jpg",
  186: "uploads/installed/bt-peace-66-wh.jpg",
  187: "uploads/installed/bt-peace-66-iv.jpg",
  209: "uploads/installed/bt-dn-6001m.jpg",
  213: "uploads/installed/bt-md-6003m.jpg",
  214: "uploads/installed/bt-md-6002m.jpg",
  215: "uploads/installed/bt-md-6001m.jpg",
  216: "uploads/installed/edge-reus-wh.jpg",
  217: "uploads/installed/edge-reus-iv.jpg",
  218: "uploads/installed/edge-pisa-gr.jpg",
  219: "uploads/installed/edge-pisa-lg.jpg",
  220: "uploads/installed/edge-pisa-iv.jpg",
  221: "uploads/installed/edge-latina-dg.jpg",
  222: "uploads/installed/edge-latina-gr.jpg",
  223: "uploads/installed/edge-latina-lg.jpg",
  224: "uploads/installed/edge-latina-wh.jpg",
  232: "uploads/installed/bt-in6001.jpg",
  242: "uploads/installed/bt-66004.jpg",
  243: "uploads/installed/bt-66003.jpg",
  244: "uploads/installed/bt-66002.jpg",
  245: "uploads/installed/bt-66001.jpg",
  268: "uploads/installed/alpha-604.jpg",
  270: "uploads/installed/alpha-602.jpg",
  271: "uploads/installed/alpha-601.jpg",
  342: "uploads/installed/alpha-605.jpg",
  287: "uploads/installed/bt-pd-6253.jpg",
  288: "uploads/installed/bt-pd-6252.jpg",
  289: "uploads/installed/bt-pd-6251.jpg",
  321: "uploads/installed/bt-pd-6262.jpg",
  322: "uploads/installed/bt-pd-6261.jpg",
  330: "uploads/installed/cloud-66-gr.jpg",
  331: "uploads/installed/cloud-66-wh.jpg",
  332: "uploads/installed/cloud-66-wg.jpg",
  333: "uploads/installed/cloud-66-iv.jpg",
  354: "uploads/installed/bt-66017.jpg",
  355: "uploads/installed/bt-66016.jpg",
  356: "uploads/installed/bt-66015.jpg",
  357: "uploads/installed/bt-66014.jpg",
  358: "uploads/installed/bt-66013.jpg",
  360: "uploads/installed/bt-pd-6259.jpg",
  365: "uploads/installed/bt-pd-6315.jpg",
  366: "uploads/installed/bt-pd-6313.jpg",
  367: "uploads/installed/bt-pd-6312.jpg",
  368: "uploads/installed/bt-pd-6311.jpg",
  381: "uploads/installed/lv-camellia-66-crema.jpg",
  385: "uploads/installed/bt-pd-6222.jpg",
  386: "uploads/installed/bt-pd-6221.jpg",
  159: "uploads/installed/bt-pietra-grey.jpg",
};

const _slug = (n) => n.toLowerCase().replace(/[()]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// 판매수: 제품명 기반 결정론적 해시 (30~520박스). 실제 판매 데이터 연동 전까지의 기준값.
const _sales = (n) => {
  let h = 0;
  for (let i = 0; i < n.length; i++) h = (h * 31 + n.charCodeAt(i)) >>> 0;
  return 30 + (h % 491);
};

const _ALL_INSTALLED = [
  "uploads/installed/alpha-601.jpg",
  "uploads/installed/alpha-602.jpg",
  "uploads/installed/alpha-604.jpg",
  "uploads/installed/alpha-605.jpg",
  "uploads/installed/bt-66001.jpg",
  "uploads/installed/bt-66002.jpg",
  "uploads/installed/bt-66003.jpg",
  "uploads/installed/bt-66004.jpg",
  "uploads/installed/bt-66013.jpg",
  "uploads/installed/bt-66014.jpg",
  "uploads/installed/bt-66015.jpg",
  "uploads/installed/bt-66016.jpg",
  "uploads/installed/bt-66017.jpg",
  "uploads/installed/bt-baltimore-66bk.jpg",
  "uploads/installed/bt-baltimore-66g.jpg",
  "uploads/installed/bt-baltimore-66iv.jpg",
  "uploads/installed/bt-baltimore-66lg.jpg",
  "uploads/installed/bt-c6171-crete-lg.jpg",
  "uploads/installed/bt-c6176-crete-g.jpg",
  "uploads/installed/bt-dn-6001m.jpg",
  "uploads/installed/bt-f65072.jpg",
  "uploads/installed/bt-in6001.jpg",
  "uploads/installed/bt-kerasin-glam-crema.jpg",
  "uploads/installed/bt-md-6001m.jpg",
  "uploads/installed/bt-md-6002m.jpg",
  "uploads/installed/bt-md-6003m.jpg",
  "uploads/installed/bt-pd-6221.jpg",
  "uploads/installed/bt-pd-6222.jpg",
  "uploads/installed/bt-pd-6251.jpg",
  "uploads/installed/bt-pd-6252.jpg",
  "uploads/installed/bt-pd-6253.jpg",
  "uploads/installed/bt-pd-6259.jpg",
  "uploads/installed/bt-pd-6261.jpg",
  "uploads/installed/bt-pd-6262.jpg",
  "uploads/installed/bt-pd-6311.jpg",
  "uploads/installed/bt-pd-6312.jpg",
  "uploads/installed/bt-pd-6313.jpg",
  "uploads/installed/bt-pd-6315.jpg",
  "uploads/installed/bt-pd6110.jpg",
  "uploads/installed/bt-pd6112.jpg",
  "uploads/installed/bt-pd6113.jpg",
  "uploads/installed/bt-pd6119.jpg",
  "uploads/installed/bt-peace-66-bk.jpg",
  "uploads/installed/bt-peace-66-gr.jpg",
  "uploads/installed/bt-peace-66-iv.jpg",
  "uploads/installed/bt-peace-66-wh.jpg",
  "uploads/installed/bt-pietra-grey.jpg",
  "uploads/installed/bt-reg21.jpg",
  "uploads/installed/bt-reg22.jpg",
  "uploads/installed/bt-reg23.jpg",
  "uploads/installed/bt-supreme-grey.jpg",
  "uploads/installed/bt-supreme-white.jpg",
  "uploads/installed/cloud-66-gr.jpg",
  "uploads/installed/cloud-66-iv.jpg",
  "uploads/installed/cloud-66-wg.jpg",
  "uploads/installed/cloud-66-wh.jpg",
  "uploads/installed/edge-latina-dg.jpg",
  "uploads/installed/edge-latina-gr.jpg",
  "uploads/installed/edge-latina-lg.jpg",
  "uploads/installed/edge-latina-wh.jpg",
  "uploads/installed/edge-pisa-gr.jpg",
  "uploads/installed/edge-pisa-iv.jpg",
  "uploads/installed/edge-pisa-lg.jpg",
  "uploads/installed/edge-reus-iv.jpg",
  "uploads/installed/lv-camellia-66-crema.jpg",
];

const PRODUCTS = _ROWS.map(([idx, name, price, img, size, spec, color, origin, pcsO, m2O]) => {
  const [pcs, m2] = _SPEC_BY_SIZE[size] || [pcsO || 1, m2O || 1];
  const pcsPerBox = pcsO || pcs;
  const coverageM2PerBox = m2O || m2;
  const finish = /유광|폴리싱/.test(spec) ? "유광" : "무광";
  const material = /도기질/.test(spec) ? "도기질" : /자기질/.test(spec) ? "자기질"
    : /포세린/.test(spec) ? "포세린" : spec.split(" ")[0];
  const url = "https://cdn.imweb.me/thumbnail/" + img;
  const gal = _GAL[idx] ? _GAL[idx].split(",").map((h) => _CDN + h + ".jpg?w=750") : null;
  return {
    id: _slug(name), idx, code: name.split(" (")[0], name,
    publicName: `ST-${_seriesName(size, material, finish)}-${_colorCode(color)}`,
    price,
    img: gal ? gal[0] : url, gallery: gal || [url],
    siteInstalledImg: _INSTALLED_LOCAL[idx] || (gal && gal.length > 3 ? gal[gal.length - 1] : null),
    size: size.replace("X", " X "), material, finish, spec,
    color, origin: origin === "미기재" ? "중국산" : origin,
    pcsPerBox, coverageM2PerBox, sales: _sales(name), salesBoxes: _sales(name),
    installedImg: _INSTALLED_LOCAL[idx] || (gal && gal.length > 3 ? gal[gal.length - 1] : null),
    areaLabel: `1BOX = ${pcsPerBox}pcs = ${coverageM2PerBox}㎡`,
    _nick: _nickname2(name),
  };
});

// 더미 모델명 중복 해소: 닉네임 2자 우선, 그래도 겹치면 00부터 번호 부여
(() => {
  const seen = {};
  PRODUCTS.forEach(p => { (seen[p.publicName] = seen[p.publicName] || []).push(p); });
  Object.values(seen).forEach(group => {
    if (group.length < 2) return;
    const used = new Set();
    group.forEach(p => {
      let suffix = p._nick && !used.has(p._nick) ? p._nick : "";
      if (!suffix) { let n = 0; while (used.has(String(n).padStart(2, "0"))) n++; suffix = String(n).padStart(2, "0"); }
      used.add(suffix);
      p.publicName = `${p.publicName}-${suffix}`;
    });
  });
  PRODUCTS.forEach(p => { delete p._nick; });
})();
