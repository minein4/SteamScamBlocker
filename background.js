// Hello source code looker what are you doing around here looking at my bad code,
var host = "https://valve.uk.nf/blocked";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host };
         
    },
    {
        urls: [
                "*://*.csgostore.net/*",
                "*://*.tf2doppler.com/*",
                "*://*.cslotus.com/*",
                "*://*.tf2speed.com/*",
                "*://*.tf2results.com/*",
                "*://*.tf2aura.com/*",
                "*://*.tf2indigo.com/*",
                "*://*.ad-payment.com/*",
                "*://*.tf2begin.com/*",
                "*://*.advertingsites.com/*",
                "*://*.tf2vibes.com/*",
                "*://*.tf2edge.com/*",
                "*://*.tf2blizzardy.com/*",
                "*://*.tf2snipers.com/*",
                "*://*.tf2stan.com/*",
                "*://*.tf2creed.com/*",
                "*://*.tf2gliss.com/*",
                "*://*.tf2north.com/*",
                "*://*.rust-favorite.com/*",
                "*://*.tf2carbon.com/*",
                "*://*.tf2bear.com/*",
                "*://*.tf2root.com/*",
                "*://*.tf2room.com/*",
                "*://*.tf2scroll.com/*",
                "*://*.tf2elevation.com/*",
                "*://*.tf2foundry.com/*",
                "*://*.csmortal.com/*",
                "*://*.tf2pit.com/*",
                "*://*.csmortral.com/*",
                "*://*.tf2catalyst.com/*",
                "*://*.tf2sensor.com/*",
                "*://*.tf2fund.com/*",
                "*://*.csgomortal.com/*",
                "*://*.tf2atlant.com/*",
                "*://*.tf2shooter.com/*",
                "*://*.csgosession.com/*",
                "*://*.tf2noir.com/*",
                "*://*.tf2land.com/*",
                "*://*.tf2space.com/*",
                "*://*.tf2session.com/*",
                "*://*.tf2visuals.com/*",
                "*://*.tf2bit.com/*",
                "*://*.tf2fang.com/*",
                "*://*.tf2sunset.com/*",
                "*://*.tf2save.com/*",
                "*://*.tf2machine.com/*",
                "*://*.tf2dragon.com/*",
                "*://*.tf2grand.com/*",
                "*://*.tf2example.com/*",
                "*://*.tf2gunner.com/*",
                "*://*.tf2harmony.com/*",
                "*://*.tf2aid.com/*",
                "*://*.tf2bunch.com/*",
                "*://*.tf2brace.com/*",
                "*://*.tf2glow.com/*",
                "*://*.tf2fair.com/*",
                "*://*.tf2woods.com/*",
                "*://*.in-gamestore-pay.com/*",
                "*://*.tf2amber.com/*",
                "*://*.tf2style.com/*",
                "*://*.tf2steep.com/*",
                "*://*.tf2dash.com/*",
                "*://*.tf2atom.com/*",
                "*://*.tf2masters.com/*",
                "*://*.steamcommunitus.com/*",
                "*://*.pix-zero.org.ru/*",
                "*://*.go-lex.org.ru/*",
                "*://*.discord-gi.com/*",
                "*://*.dincord.com/*",
                "*://*.diszord.com/*",
                "*://*.keydropcs.com/*",
                "*://*.twitch-facepunche.com/*",
                "*://*.discbrd.com/*",
                "*://*.discord-newyear.com/*",
                "*://*.dtscord.com/*",
                "*://*.discgrd.com/*",
                "*://*.newyear-discord.com/*",
                "*://*.discojd.com/*",
                "*://*.discor3.com/*",
                "*://*.discordnewyear.com /*",
                "*://*.discordlapp.com/*",
                "*://*.discord-epicgames.com/*",
                "*://*.discyrd.com/*",
                "*://*.discbrdapp.com/*",
                "*://*.disccrdapp.com/*",
                "*://*.discerdapp.com/*",
                "*://*.discgrdapp.com/*",
                "*://*.dischrdapp.com/*",
                "*://*.gool-lex.org.ru/*",
                "*://*.discrrdapp.com/*",
                "*://*.tf2azure.com/*",
                "*://*.rusty-raid.com/*",
                "*://*.tf2snowstorm.com/*",
                "*://*.tf2avalanche.com/*",
                "*://*.rusty-black.com/*",
                "*://*.rusty-dream.com/*",
                "*://*.tf2freezing.com/*",
                "*://*.rusty-bets.com/*",
                "*://*.tf2skill.com/*",
                "*://*.tf2holiday.com/*",
                "*://*.tf2glint.com/*",
                "*://*.tf2enchantment.com/*",
                "*://*.tf2christmas.com/*",
                "*://*.tf2tale.com/*",
                "*://*.tf2assault.com/*",
                "*://*.tf2neon.com/*",
                "*://*.rusty-win.com/*",
                "*://*.tf2embrace.com/*",
                "*://*.tf2mile.com/*",
                "*://*.rusty-sky.com/*",
                "*://*.tf2fractal.com/*",
                "*://*.tf2haze.com/*",
                "*://*.tf2landscape.com/*",
                "*://*.mlglobby-tournaments.com/*",
                "*://*.tf2saona.com/*",
                "*://*.tf2unexpected.com/*",
                "*://*.tf2rival.com/*",
                "*://*.tf2sensation.com/*",
                "*://*.tf2versality.com/*",
                "*://*.tf2shinoni.com/*",
                "*://*.tf2trophy.com/*",
                "*://*.tf2nimbus.com/*",
                "*://*.tf2charm.com/*",
                "*://*.tf2princess.com/*",
                "*://*.tf2ability.com/*",
                "*://*.tf2genuine.com/*",
                "*://*.tf2pearl.com/*",
                "*://*.tf2jackpots.com/*",
                "*://*.rusty-stars.com/*",
                "*://*.tf2impressive.com/*",
                "*://*.tf2vista.com/*",
                "*://*.tf2participation.com/*",
                "*://*.tf2unity.com/*",
                "*://*.globby-tournaments.com/*",
                "*://*.tf2majestic.com/*",
                "*://*.tf2modern.com/*",
                "*://*.tf2runway.com/*",
                "*://*.tf2phantom.com/*",
                "*://*.tf2forester.com/*",
                "*://*.tf2exquisite.com/*",
                "*://*.rusty-blade.com/*",
                "*://*.tf2quality.com/*",
                "*://*.tf2definitive.com/*",
                "*://*.tf2perfect.com/*",
                "*://*.tf2neutron.com/*",
                "*://*.rusty-castle.com/*",
                "*://*.tf2petal.com/*",
                "*://*.rusty-loot.com/*",
                "*://*.tf2stellify.com/*",
                "*://*.tf2drops.com/*",
                "*://*.tf2storm.com/*",
                "*://*.tf2moonwake.com/*",
                "*://*.rusty-drops.com/*",
                "*://*.tf2stelliferous.com/*",
                "*://*.rusty-luck.com/*",
                "*://*.tf2beyblade.com/*",
                "*://*.rusty-pots.com/*",
                "*://*.tf2cristal.com/*",
                "*://*.tf2.bet/*",
                "*://*.trade.skin/*",
                "*://*.tf2.win/*",
                "*://*.evo-gameclubs.com/*",
                "*://*.evo-gameclub.com/*",
                "*://*.evo-monstrcups.com/*",
                "*://*.evo-monstrcup.com/*",
                "*://*.evo-monsterscup.com/*",
                "*://*.evo-monsterscups.com/*",
                "*://*.evo-monstercups.com/*",
                "*://*.evo-monstercup.com/*",
                "*://*.evo-wariorscup.com/*",
                "*://*.evo-warriorscup.com/*",
                "*://*.evo-wariorcup.com/*",
                "*://*.evo-warriorcups.com/*",
                "*://*.evo-warriorcup.com/*",
                "*://*.evo-stormscups.com/*",
                "*://*.evo-stormscup.com/*",
                "*://*.evostormcup.com/*",
                "*://*.evo-mysticsleague.com/*",
                "*://*.evo-stormcups.com/*",
                "*://*.evo-mysticleague.com/*",
                "*://*.evo-mysticleagues.com/*",
                "*://*.evo-stormcup.com/*",
                "*://*.evoearlycup.com/*",
                "*://*.evo-earlyscup.com/*",
                "*://*.evo-earlycup.com/*",
                "*://*.evo-earlycups.com/*",
                "*://*.evojusticecup.com/*",
                "*://*.evo-juicycups.com/*",
                "*://*.evo-justicecups.com/*",
                "*://*.evo-justicecup.com/*",
                "*://*.evo-battlesleague.com/*",
                "*://*.evo-battleleagues.com/*",
                "*://*.evo-battleleague.com/*",
                "*://*.evo-batleleague.com/*",
                "*://*.evo-shadowscup.com/*",
                "*://*.evo-shadowcups.com/*",
                "*://*.evo-shadowcup.com/*",
                "*://*.evo-legionscup.com/*",
                "*://*.evo-amazingcups.com/*",
                "*://*.evo-amazingcup.com/*",
                "*://*.evolegioncup.com/*",
                "*://*.evo-legioncup.com/*",
                "*://*.evo-legioncups.com/*",
                "*://*.evo-gamestarts.com/*",
                "*://*.evo-gamestart.com/*",
                "*://*.evo-gamerstart.com/*",
                "*://*.evo-revengescup.com/*",
                "*://*.evo-revengecups.com/*",
                "*://*.evo-revengecup.com/*",
                "*://*.evo-legendcup.com/*",
                "*://*.evo-esentialcup.com/*",
                "*://*.evo-legendscup.com/*",
                "*://*.evo-essentialcups.com/*",
                "*://*.evo-essentialcup.com/*",
                "*://*.evo-goldencages.com/*",
                "*://*.evo-goldencage.com/*",
                "*://*.evo-gamestars.com/*",
                "*://*.evo-gamestar.com/*",
                "*://*.evo-revolutioncups.com/*",
                "*://*.evo-empirescups.com/*",
                "*://*.evo-revolutioncup.com/*",
                "*://*.evo-empirescup.com/*",
                "*://*.evo-empirecups.com/*",
                "*://*.evo-empirecup.com/*",
                "*://*.evo-twinscup.com/*",
                "*://*.evo-twincup.com/*",
                "*://*.evohypercups.com/*",
                "*://*.evo-hypercups.com/*",
                "*://*.evo-hypercup.com/*",
                "*://*.evo-lightcup.com/*",
                "*://*.evo-cyberarea.com/*",
                "*://*.evo-cybercups.com/*",
                "*://*.evo-edgegamers.com/*",
                "*://*.evo-edgegamer.com/*",
                "*://*.evothundercups.com/*",
                "*://*.evothundercup.com/*",
                "*://*.evo-thundercups.com/*",
                "*://*.evo-hellgamer.com/*",
                "*://*.evo-thundercup.com/*",
                "*://*.evo-ringmasters.com/*",
                "*://*.evo-ringmaster.com/*",
                "*://*.evo-hellgamers.com/*",
                "*://*.evo-heroescup.com/*",
                "*://*.evo-royalcup.com/*",
                "*://*.evo-elitecup.com/*",
                "*://*.eve-avengerscup.com/*",
                "*://*.evo-avengerscup.com/*",
                "*://*.evo-gamecup.com/*",
                "*://*.evo-silvercup.com/*",
                "*://*.evo-goldencup.com/*",
                "*://*.evo-powercup.com/*",
                "*://*.evo-darkcup.com/*",
                "*://*.evo-thunderleague.com/*",
                "*://*.evo-ambercup.com/*",
                "*://*.evo-vanillazone.com/*",
                "*://*.tf2reaper.com/*",
                "*://*.dnorket.com/*",
                "*://*.rust-tve.com/*",
                "*://*.eflowgames.com/*",   
                "*://*.epowergames.com/*",  
                "*://*.erageleague.com/*",  
                "*://*.eragecup.com/*", 
                "*://*.eflowranked.com/*",  
                "*://*.eflowcups.com/*",
                "*://*.nise-gell.org.ru/*",
                "*://*.tf2easy.com/*",
                "*://*.tf2hunt.com/*",
                "*://*.tf2blaze.com/*",
                "*://*.tf2snowflake.com/*",
                "*://*.evo-playerclub.com/*",
                "*://*.login-playerclub.com/*",
                "*://*.steamcomnmunlty.com/*",
                "*://*.steammcommunlty.com/*",
                "*://*.steeamcomnmunity.com/*",
                "*://*.staemmcommunity.com/*",
                "*://*.dliscordglift-nitro.com/*",
                "*://*.dlscordgift-nitro.com/*",
                "*://*.discordgift-nitro.com/*",
                "*://*.stearrrcommunity.com/*",
                "*://*.stearnrcommunity.com/*",
                "*://*.steamcomnmunlity.com/*",
                "*://*.students-bodies.com/*",
                "*://*.evo-gamesclub.com/*",
                "*://*.evo-gameclubs.com/*",
                "*://*.evo-gameclub.com/*",
                "*://*.evo-monstrcups.com/*",
                "*://*.evo-monstrcup.com/*",
                "*://*.evo-monsterscup.com/*",
                "*://*.evo-monsterscups.com/*",
                "*://*.evo-monstercups.com/*",
                "*://*.evo-monstercup.com/*",
                "*://*.evo-wariorscup.com/*",
                "*://*.evo-warriorscup.com/*",
                "*://*.evo-wariorcup.com/*",
                "*://*.evo-warriorcups.com/*",
                "*://*.evo-warriorcup.com/*",
                "*://*.evo-stormscups.com/*",
                "*://*.evo-stormscup.com/*",
                "*://*.evostormcup.com/*",
                "*://*.evo-mysticsleague.com/*",
                "*://*.evo-stormcups.com/*",
                "*://*.evo-mysticleague.com/*",
                "*://*.evo-mysticleagues.com/*",
                "*://*.evo-stormcup.com/*",
                "*://*.evoearlycup.com/*",
                "*://*.evo-earlyscup.com/*",
                "*://*.evo-earlycup.com/*",
                "*://*.evo-earlycups.com/*",
                "*://*.evojusticecup.com/*",
                "*://*.evo-juicycups.com/*",
                "*://*.evo-justicecups.com/*",
                "*://*.evo-justicecup.com/*",
                "*://*.batleleagues.com/*",
                "*://*.evo-battlesleague.com/*",
                "*://*.evo-battleleagues.com/*",
                "*://*.evo-battleleague.com/*",
                "*://*.evo-batleleague.com/*",
                "*://*.evo-shadowscup.com/*",
                "*://*.evo-shadowcups.com/*",
                "*://*.evo-shadowcup.com/*",
                "*://*.evo-legionscup.com/*",
                "*://*.evo-amazingcups.com/*",
                "*://*.evo-amazingcup.com/*",
                "*://*.evolegioncup.com/*",
                "*://*.evo-legioncup.com/*",
                "*://*.evo-legioncups.com/*",
                "*://*.evo-gamestarts.com/*",
                "*://*.evo-gamestart.com/*",
                "*://*.evo-gamerstart.com/*",
                "*://*.evo-revengescup.com/*",
                "*://*.evo-revengecups.com/*",
                "*://*.evo-revengecup.com/*",
                "*://*.evo-legendcup.com/*",
                "*://*.evo-esentialcup.com/*",
                "*://*.evo-legendscup.com/*",
                "*://*.evo-essentialcups.com/*",
                "*://*.evo-essentialcup.com/*",
                "*://*.evo-goldencages.com/*",
                "*://*.evo-goldencage.com/*",
                "*://*.evo-gamestars.com/*",
                "*://*.evo-gamestar.com/*",
                "*://*.evo-revolutioncups.com/*",
                "*://*.evo-empirescups.com/*",
                "*://*.evo-revolutioncup.com/*",
                "*://*.evo-empirescup.com/*",
                "*://*.evo-empirecups.com/*",
                "*://*.evo-empirecup.com/*",
                "*://*.evo-twinscup.com/*",
                "*://*.evo-twincup.com/*",
                "*://*.evohypercups.com/*",
                "*://*.evo-hypercups.com/*",
                "*://*.evo-hypercup.com/*",
                "*://*.evo-lightcups.com/*",
                "*://*.evo-lightcup.com/*",
                "*://*.evo-cyberarena.com/*",
                "*://*.evo-cyberarea.com/*",
                "*://*.evo-cybercup.com/*",
                "*://*.evo-cybercups.com/*",
                "*://*.evo-blackwonder.com/*",
                "*://*.evo-diamondcup.com/*",
                "*://*.evo-edgegamers.com/*",
                "*://*.evo-edgegamer.com/*",
                "*://*.evothundercups.com/*",
                "*://*.evothundercup.com/*",
                "*://*.evo-thundercups.com/*",
                "*://*.evo-hellgamer.com/*",
                "*://*.evo-thundercup.com/*",
                "*://*.evo-ringmasters.com/*",
                "*://*.evo-ringmaster.com/*",
                "*://*.evo-hellgamers.com/*",
                "*://*.evo-heroescup.com/*",
                "*://*.evo-royalcup.com/*",
                "*://*.evo-elitecup.com/*",
                "*://*.eve-avengerscup.com/*",
                "*://*.evo-avengerscup.com/*",
                "*://*.evo-gamecup.com/*",
                "*://*.evo-silvercup.com/*",
                "*://*.evo-goldencup.com/*",
                "*://*.evo-powercup.com/*",
                "*://*.evo-darkcup.com/*",
                "*://*.evo-thunderleague.com/*",
                "*://*.affixsports.com/*",
                "*://*.affixsport.net/*",
                "*://*.cyber-cups.com/*",
                "*://*.cyber-cups.net/*",
                "*://*.d2battle.net/*",
                "*://*.d2start.net/*",
                "*://*.cybercups.net/*",
                "*://*.affixsports.net/*",
                "*://*.csgo-workshop.net/*",
                "*://*.facecups.net/*",
                

                
                 
    ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);

var wings = "https://valve.uk.nf/blocked/tf2wings";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: wings };
         
    },
    {
        urls: [
                "*://*.tf2wings.com/*"
    ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);


