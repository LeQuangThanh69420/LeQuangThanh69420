const food = [
    { name: "Dango", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/385800/0d745610042652682cfa26770c6829eee38747a3.png", from: "NEKOPARA Vol. 0"},
    { name: "Usagi", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/385800/aa66177551b799e52bd4cd4596949180d9a645dd.png", from: "NEKOPARA Vol. 0"},
    { name: "Taiyaki", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/385800/d97d3fc850616fbd397ef1eb9f7e96377abc36f3.png", from: "NEKOPARA Vol. 0"},
    { name: "Sakura Mochi", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/385800/3a7540397a9b5e2d259ab241f04986b4a7b73c09.png", from: "NEKOPARA Vol. 0"},
    { name: "Daifuku", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/385800/7c9b3e8b2a73eb1b999774fa3e4a2b1c192d0162.png", from: "NEKOPARA Vol. 0"},
    { name: "Anmitsu", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/385800/d14760743726d400a01cd3dbb69a7d7f45a778b8.png", from: "NEKOPARA Vol. 0"},
    { name: "Biscuit", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333600/7c35a57c6f1902b9ee2ee8eb41bb87fdaa5db65e.png", from: "NEKOPARA Vol. 1"},
    { name: "Doughnut", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333600/157442d15af338b7dc434eabc9240fd940467163.png", from: "NEKOPARA Vol. 1"},
    { name: "Cupcake", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333600/5dc81c56032f7e850683a7df2f18889037ef9d00.png", from: "NEKOPARA Vol. 1"},
    { name: "Swiss roll", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333600/5a16e04ec059790092873f98390f771445034552.png", from: "NEKOPARA Vol. 1"},
    { name: "Fruit cake", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333600/c70ab489811c70d4550afff55d075143269262b3.png", from: "NEKOPARA Vol. 1"},
    { name: "Chocolate cake", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/333600/ae84b508660aadaf7038337d84f76397b804a73a.png", from: "NEKOPARA Vol. 1"},
    { name: "Macaron", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/420110/805f525e92abd159ff839fe79ca77b0ee80da8a8.png", from: "NEKOPARA Vol. 2"},
    { name: "Cream Puff", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/420110/a4bf6207cb8fbb9f1d92f8e49bde3b0530697291.png", from: "NEKOPARA Vol. 2"},
    { name: "Waffle", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/420110/94302edd123b1d91fa6b31d1cee297395af1e222.png", from: "NEKOPARA Vol. 2"},
    { name: "Eclair", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/420110/41ace1472aa043d8dcd7587a2194dfd1aa2441fa.png", from: "NEKOPARA Vol. 2"},
    { name: "Tart", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/420110/184048b1e480843046d5b64822cf33d0634a1efe.png", from: "NEKOPARA Vol. 2"},
    { name: "Charlotte", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/420110/198f7166ab55483084f002d428be98e1e8968f58.png", from: "NEKOPARA Vol. 2"},
    { name: "Madeleine", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/602520/48178ca90c9332b0bb1ee8488772f976dec85b7f.png", from: "NEKOPARA Vol. 3"},
    { name: "Baumkuchen", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/602520/f27a7e33c0192b9cc371e18950be117b2862d580.png", from: "NEKOPARA Vol. 3"},
    { name: "Custard Pudding", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/602520/d59405d902e672f219b0e15931104679b3ad7585.png", from: "NEKOPARA Vol. 3"},
    { name: "Mont Blanc", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/602520/42094df958c8578a003325be10ff13ad4d9a887c.png", from: "NEKOPARA Vol. 3"},
    { name: "Tiramisu", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/602520/e03db3b0442fe515bd17240c2bdbff97ea18e79f.png", from: "NEKOPARA Vol. 3"},
    { name: "Heart Cake", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/602520/0a03cf1ed17612f548c0b338af5bfff40e0e9c04.png", from: "NEKOPARA Vol. 3"},
    { name: "Guimauve", url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/dc70932515a4eafad72bb97a312d333260885c1a.png", from: "NEKOPARA Vol. 4"},
    { name: "Canele", url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/c87a27d481f4900643c38718136bbfa216a5f9f2.png", from: "NEKOPARA Vol. 4"},
    { name: "Tarte tatin", url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/85deb2cc455c4f086959eca8e23d8752065f6391.png", from: "NEKOPARA Vol. 4"},
    { name: "Religieuses", url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/21ddaa0b17b13593e75f5bbe26d3b47b676e1492.png", from: "NEKOPARA Vol. 4"},
    { name: "Millefeuille", url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/483d76abc1c7fe64a7e9a82774c061b29197ff95.png", from: "NEKOPARA Vol. 4"},
    { name: "Galette des rois", url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1406990/7a95a12c87876505d3421702aec63b3a164fc95b.png", from: "NEKOPARA Vol. 4"},
    { name: "Candy cane", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/899970/dad15273c8ca8e354553335122980a02e79d53f8.png", from: "NEKOPARA Extra"},
    { name: "Ginger cookie", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/899970/7d16933e7ffb3e003e63c83dea4d7d05bf494bac.png", from: "NEKOPARA Extra"},
    { name: "Stollen", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/899970/251c3476ec1ae36d1480525c3eb44f0af2003c3a.png", from: "NEKOPARA Extra"},
    { name: "Yule log", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/899970/eedf3aec6bc094c20a7cdd7caa5b5e553ccab43e.png", from: "NEKOPARA Extra"},
    { name: "Hexenhaus", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/899970/e5a3904035580fd55efad7372dd645cad788e893.png", from: "NEKOPARA Extra"},
    { name: "Christmas cake", url: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/899970/61e6bb8e68a4210774300735259369b978d6c565.png", from: "NEKOPARA Extra"},
]