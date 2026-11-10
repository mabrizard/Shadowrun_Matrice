/* =====================================================================
   CONTENU DE LA CAMPAGNE — « Les Échos du Nid Oublié » (Shadowrun, 2078)
   Le moteur (index.html) ne contient aucun texte de campagne :
   tout ce qui change d'une partie à l'autre est ici.
   ===================================================================== */

const CONFIG = {
  era: 2078,                       /* époque en jeu de cette console */
  storageKey: "bor9",              /* clé de mémorisation dans le navigateur (ne pas changer : garde la progression) */
  pageTitle: "JackPoint v5.78 — BOREALIS-9",
  brandTitle: "JACKPOINT v5.78",
  brandSub: "AZTECHNOLOGY HOST ID : BOREALIS-9 · NŒUD SÉCURISÉ",
  hostId: "BOREALIS-9",
  startLines: ["JACKPOINT"],
  startButton: "[ ACCÉDER AU JACKPOINT ]",
  gaugeTrace: "FIREWALL / TRACE",
  gaugeLevels: "BRUTEFORCE (NIVEAUX)",
  searchPlaceholder: "⌕ Recherche : Marshall, Orichalque, Givre, Janus, Ruche…",
  searchChips: ["Marshall", "Orichalque", "Givre", "Janus", "Ruche"],
  accessDenied: "ACCÈS REFUSÉ — SIGHASH OBLIGATOIRE",
  lockdownTitle: "⚠ LOCKDOWN ⚠",
  lockdownIdle: "TRACE COMPLÈTE — IC NOIRE DÉPLOYÉE",
  lockdownText: "TRACE COMPLÈTE — IC NOIRE DÉPLOYÉE — REDÉMARRAGE DANS {s}s",
  voice: {
    t50: "Tentative d'intrusion détectée.",
    t75: "Trace en cours. Contre-mesures activées.",
    lock: "Intrusion détectée. Contre-mesures déployées."
  },
  stampText: "ULTRA-CONFIDENTIEL",   /* tampon affiché sur les fichiers de ce niveau et au-dessus */
  stampFrom: 2,
  prompt: "decker@borealis",
  banner: ["JACKPOINT v5.78 — AZTECHNOLOGY HOST ID : BOREALIS-9",
           "Connexion au nœud sécurisé établie. Tapez 'help' pour les commandes.\n"],
  feedTab: "☰ JACKPOINT",
  feedTitle: "JACKPOINT // SHADOWTALK (FEED PUBLIC)",
  feedSub: "Accès libre · Niveau 0 · Les posts sont anonymes, non vérifiés, et probablement surveillés.",
  feedSearchPlaceholder: "⌕ Rechercher dans le forum : Plan 9, Orichalque, Aztlan…"
};

/* ============ CONFIGURATION — remplacez ces URLs par vos images (DALL-E, etc.) ============ */
/* Placez les images dans le même dossier que index.html (ou mettez une URL complète).
   Si un fichier est introuvable, un placeholder s'affiche automatiquement. */
const IMAGES = {
  logo: "logo_borealis.jpg",     // Logo Aztechnology / Projet Borealis (en-tête)
  site: "chantier_borealis.jpg", // Visuel du chantier Borealis (rapport géologique)
  obelisque: "obelisque_janus.jpg", // Obélisque d'Orichalque — dossier JANUS
  marshall: "marshall_badge.jpg",// Badge / carte d'accès du Dr Marshall
  ruche: "dossier_ruche.jpg",    // La Ruche — dossier JANUS
  aurora: "aurora_logo.jpg",     // Logo Aurora Crest — traceur financier
  givre: "mr_givre.jpg",         // Portrait de Mr Givre — traceur financier
  labo: "laboratoire_marshall.jpg" // Laboratoire souterrain — dossier Marshall
};
/* ========================================================================================= */

const CODES = {1:"NURI", 2:"JANUS-7000", 3:"GHOST-DENVER", 4:"MARSHALL-2078"};
const LEVEL_NAMES = {0:"PUBLIC",1:"NIVEAU 1",2:"NIVEAU 2",3:"FICHIER OMBRE",4:"NIVEAU 4"};

const FILES = [
 {id:"geo", dir:"/root/PROJECT_BOREALIS", name:"geologie_rainier.txt", level:0,
  title:"Rapport géologique — Mont Rainier", kw:["rainier","geologie","forage","basalte","aztechnology"],
  summary:"Aztechnology Mining Dept. — relevés de forage, strates et anomalies.",
  img:"site",
  text:`## Aztechnology Mining Dept. — Rapport officiel GEO-RAI-0412
Classification : PUBLIC / SÉCURITÉ BASSE · Site : Mont Rainier, secteur nord-est (Chantier BOREALIS)

## Résumé exécutif
Le programme de forage exploratoire BOREALIS a atteint la cote -2 140 m. La structure basaltique du Mont Rainier présente une stratification inhabituellement régulière, incompatible avec un refroidissement magmatique naturel.

## Relevés principaux
- Cote atteinte : -2 140 m, progression moyenne 11 m/jour
- Température de paroi : 61 °C (+9 °C par rapport aux modèles)
- Conductivité sismique : anomalies périodiques à intervalles de 43 secondes
- Présence de cavités vitrifiées, d'origine indéterminée

## Remarques
Le département recommande la poursuite des opérations. Les écarts de mesure sont attribués à des « effets de résonance locaux ». Aucune incidence environnementale notable n'est à signaler.`},
 {id:"news", dir:"/root/PROJECT_BOREALIS", name:"actus_seattle_2078.txt", level:0,
  title:"Fil d'actualité — Seattle 2078", kw:["seattle","dunkelzahn","nan","corpo","actualites","news"],
  summary:"Flux d'infos : Dunkelzahn, tensions NAN, mouvements des corpos.",
  text:`## Flux d'actualité — Seattle / Redmond / Puyallup
Agrégé par le nœud public BOREALIS-9.

- 07:12 — Les héritages de Dunkelzahn continuent d'alimenter les commissions d'enquête ; plusieurs corpos réclament un nouveau gel des actifs.
- 08:40 — Tensions aux frontières des NAN : un convoi de ravitaillement retardé près de Tacoma.
- 09:05 — Éruption mineure signalée dans la région du Cascade ; l'AGS minimise l'événement.
- 10:30 — Aztechnology annonce une « initiative énergétique responsable » dans la zone du Rainier.
- 11:18 — Saeder-Krupp et Renraku se positionnent sur le marché des courtiers matriciels.
- 12:02 — Les rumeurs de mouvements shadowrun sur les docks de Seattle augmentent la pression policière.

## Note
Flux public, non vérifié. Toute corrélation avec des opérations internes est fortuite.`},
 {id:"meteo", dir:"/root/PROJECT_BOREALIS", name:"meteo_securite_chantier.txt", level:0,
  title:"Relevés météo & flux de sécurité", kw:["meteo","securite","chantier","borealis","givre","camera"],
  summary:"Conditions météo et statut des flux caméras du chantier.",
  text:`## Relevés météo — Chantier BOREALIS
- Température extérieure : -6 °C, vent 38 km/h
- Visibilité : 400 m, risque de givre sur les installations d'altitude
- Plafond nuageux bas, précipitations neige-pluie probables

## Flux de sécurité
- CAM-01 Portail principal : ACTIF
- CAM-04 Puits de forage : ACTIF (latence élevée)
- CAM-07 Baraquements : HORS LIGNE (maintenance)
- CAM-09 Galerie sud : ACTIF — interférences récurrentes à 03:00

## Consigne
Les équipes de nuit ne doivent pas rester seules sur le niveau -3. Rapporter toute perception sonore anormale au superviseur.`},
 {id:"medpub", dir:"/logs/medical", name:"public_report.txt", level:1,
  title:"Rapport médical — Chantier BOREALIS", kw:["marshall","nuri","medical","migraine","demence","givre","murmures","rapport"],
  summary:"Service médical : migraines des équipes de forage, demande d'arrêt des travaux.",
  img:"marshall",
  text:`## Dr Nuri Marshall — Notes cliniques confidentielles
Service médical Aztechnology · Chantier BOREALIS

## Constat
Depuis la cote -1 800 m, les équipes de forage présentent des migraines chroniques, résistantes aux analgésiques standards. Les troubles apparaissent surtout la nuit, par vagues.

## Symptômes rapportés
- Hallucinations auditives : « des murmures dans le basalte »
- Insomnies sévères, cauchemars partagés par plusieurs travailleurs
- Trois cas de démence soudaine en moins de dix jours
- Réaction anormale aux implants datajack : parasites dans la perception AR

## Observations
Aucun agent pathogène ou toxique détecté. Les analyses astrales internes ont été refusées par la direction. Le Dr Marshall estime que l'origine du mal est « dans la roche ».

## Note personnelle
« Je demande l'arrêt des forages. Ma requête a été classée sans suite. »`},
 {id:"marshall", dir:"/logs/medical", name:"marshall_classified.txt", level:4,
  title:"Journal de recherche — Dr Nuri Marshall", kw:["marshall","nuri","cuves","cobayes","sujets","dni","magie du sang","hate","haine","horreur","voix","ruche","reine","orichalque","janus","secteur -3","sas"],
  summary:"Journal confidentiel de la Direction scientifique BOREALIS / JANUS.",
  img:"labo",
  text:`## JOURNAL DE RECHERCHE — DIRECTION SCIENTIFIQUE BOREALIS / JANUS
Dr Nuri Marshall · Accès : Direction uniquement · Copie interdite

## ENTRÉE 1 — 2078-01-14 · 09:12
Phase d'asservissement lancée sur le Secteur -3. Sujets #042 à #089 (48 sujets, SINless enlevés dans les Barrens de Redmond) transférés en cuves de bio-confinement. Aucune réclamation à prévoir.
Protocole : implant DNI, puce de bridage et rituel de Magie du Sang d'Aztlan, afin de lier chaque hôte à un Esprit Insecte larvaire. Les rituels sont conduits par l'équipe du Sang ; je me contente de calibrer.
- Puces de bridage : réponse nominale sur 48 sujets sur 48
- Signal de commande unique, émis depuis le serveur central BOREALIS-9
- Hôtes viables à J+6 : 34 sur 48, perte jugée acceptable
La docilité des hôtes est remarquable. La Direction veut une armée d'élite obéissante ; je suis en train de la lui fournir.

## ENTRÉE 2 — 2078-03-02 · 22:40 · COTE -1 800 m
La foreuse a percuté le Pilier d'Orichalque. Structure confirmée, gravures d'origine non humaine, lisibles depuis le puits.
Surcharge magique sur les cuves du Secteur -3 dès l'impact : trois cuves en dépassement.
- Bio-moniteurs : ondes delta incohérentes sur 31 sujets, mais synchrones entre elles, ce qui est impossible sans lien
- Parasites auditifs dans les connexions AR/DNI de l'équipe médicale ; les filtres sont inefficaces
- Migraines chez les techniciens de forage : le rapport médical public reste en circulation, il sert de couverture
Hypothèse de travail : résonance entre la matrice d'Orichalque et les rituels de sang. La demande d'arrêt contenue dans le rapport public est une formalité. Les forages continuent.

## ENTRÉE 3 — 2078-03-19 · 03:07 · RUPTURE DU PROTOCOLE JANUS
Les puces d'asservissement sautent une à une. Depuis 02:40, 29 des 34 hôtes ne répondent plus au serveur central. Les cuves n'obéissent plus à aucune commande d'Aztechnology.
Je n'entends plus le signal central. J'entends autre chose, directement dans mon implant oculaire et mon DNI : douze voix grincantes, simultanées. Elles ne se contredisent jamais.
La Reine ne pond plus des soldats. Elle pond des récepteurs. Ce n'est plus notre armée, c'est une antenne, et ce qui écoute au bout s'appelle Hate.
- Sas de bio-confinement du Secteur -3 : ouverture automatique si l'alimentation chute
- Canaux DNI de toute l'équipe compromis : NE PAS reconnecter les implants
- Service de sécurité non informé
## NOTE PERSONNELLE
« Elles veulent que je déverrouille le secteur -3. Elles sont patientes. La Haine est pure. Je ne suis pas malade. Je ne suis pas malade. Je ne suis pas ma »
[ENREGISTREMENT INTERROMPU — SAISIE MANUELLE DÉTECTÉE SUR LE CODE D'AUTORISATION DU SECTEUR -3]`},
 {id:"vlog", dir:"/logs/medical", name:"journal_video_0319.vid", level:4,
  title:"Journal vidéo — Dr Nuri Marshall · 19 mars 2078", kw:["marshall","nuri","video","vidéo","journal","enregistrement","cuves","reine","antenne","voix","pilier","secteur -3","sas"],
  summary:"Dernier enregistrement de la caméra MED-03, Secteur -3. Flux vidéo dégradé.",
  video:"journal_video_0319.mp4",
  text:`## ENREGISTREMENT CAM MED-03 — SECTEUR -3
2078-03-19 · 03:07 · Durée : 00:33 · Flux vidéo dégradé, piste audio récupérée
## TRANSCRIPTION AUTOMATIQUE
« Journal du docteur Marshall, 19 mars. Je croyais fabriquer une armée obéissante. Je me trompais. Depuis que la foreuse a touché le Pilier, les cuves ne nous répondent plus. La Reine ne pond pas des soldats. Elle pond une antenne. Et quelque chose écoute. Douze voix. Elles connaissent mon nom. Si vous trouvez cet enregistrement, ne descendez pas au secteur -3. »
[ENREGISTREMENT INTERROMPU]`},
 {id:"janus", dir:"/classified/JANUS", name:"projet_janus.txt", level:2,
  title:"PROJET JANUS — Ultra-confidentiel", kw:["janus","orichalque","magie du sang","ruche","drain","quatrieme monde","matrice de sorts"],
  summary:"Le véritable but du forage BOREALIS.",
  img:["obelisque","ruche"],
  text:`## PROJET JANUS — ULTRA-CONFIDENTIEL AZTECHNOLOGY
Accès restreint : Conseil d'administration & Direction BOREALIS

## Objectif réel
Le forage ne vise aucune ressource minière. Il a pour but d'atteindre et d'étudier des structures d'Orichalque datant du Quatrième Monde, enfouies sous le Mont Rainier.

## Programme
- Analyse des matrices d'Orichalque et de leur résonance avec la Magie du Sang
- Fabrication de Matrices de Sorts capables de neutraliser le Drain magique
- Test de réplication sur sujets volontaires (dossier « Ruche » — accès Direction)

## Incidents
La structure semble répondre à la présence humaine. Les murmures rapportés par le personnel coïncident avec les pics d'activité de la matrice. Le phénomène « Ruche » est considéré comme un effet secondaire acceptable.

## Directive
Toute fuite sera traitée au niveau Corporate. Poursuivre le forage jusqu'à contact.`},
 {id:"ghost", dir:"/classified/GHOST", name:"transaction_tracer.txt", level:3,
  title:"Traceur de transaction financière", kw:["ghost","denver","ghostwalker","salish-shidhe","banque","contrat","paiement"],
  summary:"Origine du paiement du contrat de Shadowrun initial.",
  img:["aurora","givre"],
  text:`## TRACEUR DE TRANSACTION — FICHIER OMBRE
Statut : FUITE / HORS PÉRIMÈTRE AZTECHNOLOGY

## Résultat de la trace
Le paiement du contrat initial transite par une banque écran enregistrée à Seattle, mais ses fonds proviennent d'un établissement du Salish-Shidhe, lui-même relié à Denver.

## Chaîne de transfert
- Compte source : holding « Aurora Crest » (Denver)
- Relais : banque écran salish-shidhe, trois rebonds
- Destinataire : compte tampon du Johnson (alias « Mr Givre »)

## Conclusion
Le commanditaire final est lié au Territoire du Grand Dragon Ghostwalker. L'équipe a été payée pour s'attaquer à BOREALIS par un tiers qui n'est pas Aztechnology.`}
];

const HANDLES = {
 "Seattle_News_Bot":["SN","#00e5ff"],"Slamm-0!":["S0","#ff2d4a"],"Bull":["BU","#ff9900"],"Clockwork":["CW","#9aa7b5"],
 "Netcat":["NC","#00ff66"],"Puck":["PK","#00e5ff"],"Plan 9":["P9","#ff4df2"],"FastJack":["FJ","#00ff66"],
 "Glitch":["GL","#00e5ff"],"Kestrel":["KS","#ff9900"],"Haze":["HZ","#9aa7b5"],
 "WallStreet_Runner":["WS","#ff9900"],"Lyran":["LY","#ff4df2"],"Winterhawk":["WH","#00e5ff"],"Denver_Insider":["DI","#ff2d4a"],
 "Sprawl_Walker":["SW","#9aa7b5"],"Snopes":["SP","#00ff66"],"Frosty":["FR","#00e5ff"],"StreetDoc_Gonzo":["SG","#ff9900"],
 "Neoncowboy":["NK","#ff4df2"],"Scrappy_Ork":["SO","#ff2d4a"],"Rurik_D":["RD","#00ff66"]
};
const THREADS = [
 {tag:"NEWS SEATTLE", title:"Renforcement des patrouilles de Knight Errant à Redmond",
  who:"Seattle_News_Bot", ts:"18 Oct 2078 - 04:12:09",
  text:"Le préfet de police de Knight Errant annonce une augmentation de 15 % des patrouilles de drones Aerie au-dessus des Barrens de Redmond suite à une série de disparitions inexpliquées.",
  re:[["Slamm-0!","Des disparitions inexpliquées ? Laissez-moi rire. Ça fait dix ans que des SINless s'évaporent sans que KE ne bouge le petit doigt. Cherchez plutôt quelle corpo ramasse les poubelles ce mois-ci."],
      ["Bull","Garde tes théories pour toi, gamin. Mais si vous traînez du côté du Touristville, gardez votre comlink en mode silencieux et vos armes chargées."],
      ["Clockwork","Si ces abrutis de SINless apprenaient à s'acheter une sécurité décente au lieu de se plaindre, on n'aurait pas ce débat."]]},
 {tag:"MATRICE & TECH", title:"Surcharges de données sur la grille UCAS",
  who:"Netcat", ts:"19 Oct 2078 - 11:45:22",
  text:"Des variations anormales de bruit de fond magico-matriciel sont enregistrées depuis 72 h autour de la chaîne des Cascades. Les nœuds de routage d'Ares et d'Aztechnology tournent à 140 % de charge.",
  re:[["Puck","Ce n'est pas un bug réseau classique. Les paquets de données ont des signatures d'atténuation qui ressemblent à de la résonance d'orichalque."],
      ["Plan 9","C'est les Dragons ! Je vous l'avais dit ! Dunkelzahn n'est pas mort au Watergate, son esprit est coincé dans le sous-réseau du Mont Rainier et il essaie d'envoyer un fax à Ghostwalker !"],
      ["FastJack","Plan 9, va prendre tes médicaments. Puck, garde un œil sur les logs d'Aztlan. S'ils augmentent la bande passante, c'est qu'ils creusent quelque chose."]]},
 {tag:"RUMORS & JOBS", title:"Météo pourrie et périmètres fermés au Mont Rainier",
  who:"Glitch", ts:"20 Oct 2078 - 02:00:15",
  text:"Avis aux contrebandiers et riggers de la zone : Aztechnology et le Conseil du Salish ont fermé les accès routiers au sud du secteur Rainier. Prétexte officiel : « glissement de terrain et risques géothermiques ».",
  re:[["Kestrel","Laisse-moi deviner : le périmètre est surveillé par des gardes armés en armure de combat Aztlan ? Pour un glissement de terrain, ils ont sorti les hélicoptères d'attaque."],
      ["Haze","Si quelqu'un cherche un contrat là-bas, révisez votre latin et prévoyez des munitions perforantes. L'air pue le mana vicié à dix kilomètres."]]},
 {tag:"ÉCONOMIE NOIRE", title:"Flambée des cours de l'Orichalque à la Bourse de Tacoma",
  who:"WallStreet_Runner", ts:"20 Oct 2078 - 08:30:11",
  text:"Le gramme d'Orichalque brut a pris +34 % en une semaine sur les marchés gris de Seattle. Les vendeurs de composants arcaniques de Téléstra et du quartier elfe de Tarislar sont en rupture de stock totale.",
  re:[["Lyran","Une hausse pareille ne s'explique pas par la demande des initiés locaux. Quelqu'un est en train de constituer un stock stratégique à l'échelle industrielle."],
      ["Winterhawk","Ou alors, une mégacorporation prépare un rituel de stabilisation de grande ampleur. Et quand les corps achètent de l'Orichalque en masse, ce n'est jamais pour fabriquer des bijoux de famille."],
      ["Slamm-0!","Moi qui voulais juste m'acheter une amulette contre les maux de tête... Je vais devoir payer en reins ?"]]},
 {tag:"MATÉRIEL & CYBER", title:"Mise à jour firmware Transys Avalon v8.4 : À ÉVITER !",
  who:"Netcat", ts:"20 Oct 2078 - 10:14:55",
  text:"Alerte à tous les technomanciens et deckers : la dernière mise à jour de sécurité des comlinks Transys Avalon installe un démon d'arrière-plan qui scanne les signatures d'ASPS (Aura Sensory Processing Systems).",
  re:[["Clockwork","Encore un coup des paranoïaques d'Evo. Si vous utilisiez du matériel Mil-Spec renforcé comme des pros au lieu de vos jouets pour civils, vous n'auriez pas ce problème."],
      ["Puck","Le code de cette MàJ contient des lignes de compilation marquées « BOREALIS_PATCH_09 ». Ça ne vient pas de Transys, ça a été injecté depuis un nœud relais d'Aztlan."],
      ["FastJack","Bien vu Puck. Bloquez le port 8088 sur vos grilles d'accès et repassez en protocole filaire si vous approchez du secteur sud."]]},
 {tag:"SÉCURITÉ & TENSION", title:"Froideur diplomatique entre Denver et Aztlan",
  who:"Denver_Insider", ts:"20 Oct 2078 - 12:05:40",
  text:"Les représentants du Conseil de Denver ont annulé trois sommets commerciaux avec les émissaires d'Aztlan ce matin. Des mouvements de troupes de la Garde du Traité sont signalés le long du secteur nord.",
  re:[["Haze","Le Grand Dragon Blanc ne déplace pas ses pions pour rien. Si Denver ferme ses frontières aux diplomates d'Aztechnology, c'est que les Lézards ont senti une odeur qui ne leur plaît pas."],
      ["Bull","Ça sent la poudre sur la frontière du Salish. Si vous avez des runs d'extraction prévus entre Denver et Seattle, doublez votre tarif d'aussi sec."]]},
 {tag:"URBAN LORE", title:"Les « Enfants Disparus » du Métro Volcanique",
  who:"Sprawl_Walker", ts:"20 Oct 2078 - 13:22:18",
  text:"Légende urbaine ou réalité ? Des squatteurs des tunnels abandonnés sous Puyallup affirment avoir entendu des comptines antiques chantées en chœur dans les conduits de ventilation géothermiques...",
  re:[["Snopes","Faux. C'est juste un phénomène de résonance acoustique dû à la vapeur des sous-sols volcaniques qui fait vibrer les vieilles tuyauteries."],
      ["Plan 9","Mais oui, c'est ça ! Des tuyauteries qui chantent en dialecte pré-chamanique ! Ouvrez les yeux, c'est la preuve que les esprits du 4e Monde essaient de nous passer un coup de comlink !"],
      ["Kestrel","Légende ou pas, trois gangs de gangers orques ont déserté ces galeries la semaine dernière. Ils avaient l'air terrifiés."]]},
 {tag:"ARCHÉOLOGIE & OCCULTE", title:"Vente aux enchères d'artefacts d'alliage inconnu à Tacoma",
  who:"Lyran", ts:"20 Oct 2078 - 14:02:11",
  text:"La maison de vente d'Orting met aux enchères un lot de métaux antiques exhumés dans le Salish. La fiche technique parle d'un alliage d'orichalque à structure mnémonique. La Fondation Draco a déjà posé un droit de préemption.",
  re:[["Frosty","Si la Fondation est sur le coup, c'est que la datation remonte à avant le Premier Éveil. Évitez d'enchérir si vous ne voulez pas avoir les avocats de Dunky sur le dos."],
      ["Plan 9","Encore du matos scellé d'avant le Châtiment ! Je vous parie 100 nuyens que la signature d'alliage correspond aux structures sous le Rainier !"],
      ["Winterhawk","Plan 9, la ferme. Mais sur la datation, il n'a pas tout à fait tort. Si ces pièces sortent de terre maintenant, c'est que quelqu'un a brisé un confinement."]]},
 {tag:"RUE & DROGUES", title:"La « Poussière d'Ambre » sur les marchés noirs de Puyallup",
  who:"StreetDoc_Gonzo", ts:"20 Oct 2078 - 14:15:30",
  text:"Une nouvelle substance alchimique fait des ravages chez les puces-addicts des Barrens : « l'Ambre ». Les usagers rapportent des hallucinations collectives étrangement précises (« des souvenirs de gamin enfermé dans une caverne sous un volcan »).",
  re:[["Neoncowboy","Encore de la cochonnerie alchimique coupée aux stéroïdes. N'y touchez pas, ça vous grille les synapses en 48 h."],
      ["Puck","Ce ne sont pas des molécules synthétiques ordinaires. La signature psychique sur la Matrice ressemble à une fuite de paquets de données provenant du nœud BOREALIS..."]]},
 {tag:"PETITES ANNONCES", title:"Vente d'un Datapad Aztlan « Trouvé dans le Rainier »",
  who:"Scrappy_Ork", ts:"20 Oct 2078 - 14:35:00",
  text:"Vends datapad blindé Aztechnology récupéré dans un conteneur au sud du Mont Rainier. Bloqué sur un écran d'accueil crypté BOREALIS-9. Prix : 500 ¥ ou échange contre du matos de rigger.",
  re:[["Slamm-0!","500 nuyens pour une brique verrouillée par Aztlan ? Tu veux qu'un commando Firewatch ou Jaguar débarque chez toi à 3h du matin ?"],
      ["Rurik_D","Je te le prends à 350 ¥ si tu me le déposes dans une boîte morte sécurisée à Downtown. Ne touche à rien d'autre dessus."]]}
];

/* Chaque fil a son propre tag : on les regroupe en 5 catégories pour filtrer */
const CATS=[
 ["ACTU & POLITIQUE",["NEWS SEATTLE","SÉCURITÉ & TENSION"]],
 ["MATRICE & TECH",["MATRICE & TECH","MATÉRIEL & CYBER"]],
 ["MARCHÉS",["ÉCONOMIE NOIRE","PETITES ANNONCES"]],
 ["RUE & RUMEURS",["RUE & DROGUES","URBAN LORE","RUMORS & JOBS"]],
 ["OCCULTE",["ARCHÉOLOGIE & OCCULTE"]]
];

/* Dossiers du terminal */
const DIRS=["/root/PROJECT_BOREALIS","/logs/medical","/classified/JANUS","/classified/GHOST"];

/* ---- Archives reprises d'époques antérieures (générées par build.py) ---- */
FILES.push(...[
 {
  "id": "a2054_news",
  "dir": "/archives/2054",
  "name": "fil_actu_seattle_2054.txt",
  "level": 0,
  "title": "RTG-Seattle — Newsfeed public",
  "kw": [
   "actualite",
   "seattle",
   "lone star",
   "barrens",
   "tacoma",
   "news"
  ],
  "summary": "Flux d'actualité de mai à octobre 2054 : Confrérie, mégacorpos, frontières, gangs.",
  "text": "## RTG-Seattle // Newsfeed matriciel public — flux continu\nMise à jour : octobre 2054\n\n## 12 octobre — Social / caritatif\nLa Confrérie Universelle inaugure un nouveau centre d'accueil et de repas chauds à Tacoma. Le porte-parole salue une « victoire contre l'isolement des SINless ». Les autorités locales félicitent l'initiative caritative face à la pauvreté des Barrens.\n\n## 28 septembre — Corporatif / mégacorpos\nRenraku et les Big Ten renforcent leurs infrastructures dans le centre-ville de Seattle. Des rumeurs font état de mouvements de sécurité accrus autour de l'Arcologie Renraku.\n\n## 14 août — Sécurité / frontières\nPoste-frontière de Salish-Shidhe : la patrouille frontalière et les drones de surveillance signalent une hausse des tentatives de contrebande. Lone Star met en garde contre les passeurs clandestins (« Coyotes ») opérant entre les Nations amérindiennes et Seattle.\n\n## 2 juillet — Ombres & gangs\nNuit de tensions à Redmond : des heurts éclatent entre les Crimson Crush et des milices locales. La police corporatiste délimite un périmètre de sécurité autour des axes principaux.\n\n## 19 mai — Environnement / Redmond\nLe service d'inspection sanitaire confirme des émanations toxiques persistantes dans la zone de Glow City (Redmond), attribuées aux séquelles de la fusion partielle de Trojan-Satsop.",
  "archive": 2054
 },
 {
  "id": "a2054_meteo",
  "dir": "/archives/2054",
  "name": "releves_meteo_seattle_2054.txt",
  "level": 0,
  "title": "Météo-Net Seattle — octobre 2054",
  "kw": [
   "meteo",
   "pluie",
   "acide",
   "brouillard",
   "temperature"
  ],
  "summary": "Relevés en temps réel : pluie acide, AQI 285, prévisions par districts.",
  "text": "## Météo-Net Seattle // Relevés en temps réel — octobre 2054\n\n## Conditions générales\n- Ciel : couverture nuageuse dense, cendres de combustion et smog ambiant\n- Précipitations : pluie acide intermittente (pH 3,8)\n- Température moyenne : 12 °C à 15 °C\n- Risque sanitaire : hypothermie rapide en cas de vêtements humides prolongés\n\n## Indices environnementaux\n- Indice de pollution de l'air (AQI) : 285 / 500 — alerte élevée\n- Recommandation : respirateur ou masque filtrant conseillé hors des dômes corporatifs\n- Rayonnement UV-A : modéré (atténué par les nuages et la pollution)\n\n## Prévisions par districts\n- Downtown / Renton : bruine acide légère, systèmes de neutralisation chimique actifs\n- Redmond / Puyallup : averses acides corrosives, accumulation de boues toxiques\n- Puget Sound / front de mer : vents froids du Pacifique, brume épaisse, humidité 98 %",
  "archive": 2054
 },
 {
  "id": "a2054_global",
  "dir": "/archives/2054",
  "name": "depeches_politiques_2054.txt",
  "level": 0,
  "title": "RTG-Global — Politique & diplomatie (2054)",
  "kw": [
   "ucas",
   "elections",
   "tir tairngire",
   "denver",
   "aztlan",
   "ghostwalker",
   "foret-noire",
   "politique"
  ],
  "summary": "Dépêches politiques : UCAS, Tír Tairngire, Denver, Europe.",
  "text": "## RTG-Global // Dépêches politiques & diplomatie — 2054\n\n## 8 novembre — UCAS / élections anticipées\nTensions à Washington D.C. : la crise économique et le débat sur le statut des SINless pèsent sur l'administration UCAS. Les instituts de sondage prévoient une campagne électorale particulièrement agitée pour la présidence.\n\n## 22 septembre — Tír Tairngire / isolationnisme\nLe Conseil des Princes du Tír Tairngire (la nation elfique au sud de Seattle) renforce les patrouilles magiques et le confinement à sa frontière. Les autorités dénoncent la hausse du trafic de puces BTL et du braconnage de réactifs.\n\n## 11 août — Denver / conflit de territoire\nAztlan et la Cour corporatiste s'affrontent indirectement dans la ville divisée de Denver. Le Grand Dragon Ghostwalker maintient une neutralité armée, mais la sécurité des secteurs ex-américains a été doublée.\n\n## 15 mai — EAA / république troll de la Forêt-Noire\nEn Europe, la république troll de la Forêt-Noire intensifie ses échanges diplomatiques avec le duché de Pomorya. Des milices orks réclament une représentation politique accrue dans les montagnes du Sud.",
  "archive": 2054
 },
 {
  "id": "a2054_matrixtech",
  "dir": "/archives/2054",
  "name": "matrix_tech_news_2054.txt",
  "level": 0,
  "title": "Matrix-Tech News — Composants & cybernétique",
  "kw": [
   "fuchi",
   "cyber-5",
   "renraku",
   "arcologie",
   "ares",
   "btl",
   "yamatetsu",
   "cyberdeck"
  ],
  "summary": "Guerre des composants : Fuchi, Renraku, Ares, alerte BTL.",
  "text": "## Matrix-Tech News // Guerre des composants & cybernétique\n\n## 19 octobre — Fuchi Industrial / leader du decking\nFuchi annonce la sortie prochaine du cyberdeck « Fuchi Cyber-5 », promettant une mémoire vive augmentée à 12 MP et une architecture de processeur optimisée contre la GLACE noire. La valeur boursière de Fuchi s'envole.\n\n## 3 septembre — Renraku Arcology / inauguration prochaine (2055)\nLe chantier géant de l'Arcologie Renraku de Seattle touche à sa fin. Ce complexe autonome de 300 étages est présenté comme le joyau technologique du XXIe siècle, prévu pour accueillir plus de 90 000 résidents corporatistes dès début 2055.\n\n## 14 juin — Ares Macrotechnology / défense & armement\nAres dévoile sa nouvelle gamme de puces réflexes câblées et d'armures de sécurité tactiques. Des contrats d'équipement exclusifs ont été signés avec plusieurs polices privées nord-américaines.\n\n## 2 avril — BTL & bioware / alerte sanitaire\nLa corporation Yamatetsu met en garde contre la circulation de puces « Better-Than-Life » (BTL) de contrebande survoltées au fil de carbone, provoquant des grilles synaptiques fatales.",
  "archive": 2054
 },
 {
  "id": "a2054_tridpop",
  "dir": "/archives/2054",
  "name": "trideo_pop_medias_2054.txt",
  "level": 0,
  "title": "Tridéo-Pop — Spectacles, célébrités & Wyrm Talk",
  "kw": [
   "dunkelzahn",
   "wyrm talk",
   "simsense",
   "horizon",
   "urban brawl",
   "media"
  ],
  "summary": "Médias, simsense, célébrités et culte du dragon.",
  "text": "## Tridéo-Pop // Spectacles, célébrités & culte du dragon\n\n## 30 octobre — Média / Wyrm Talk en direct\nLe Grand Dragon Dunkelzahn bat des records d'audience mondiaux lors du dernier épisode de son émission Wyrm Talk. Interrogé sur la politique humaine, le dragon est resté énigmatique : « La métahumanité prépare son avenir, mais ignore encore la nature des tempêtes à venir. »\n\n## 12 août — Simsense / sensation du box-office\nLe dernier film en simsense immersif d'Horizon enregistre plus de 50 millions de téléchargements sur la Matrice en 48 heures. Le retour haptique haute définition s'impose comme le nouveau standard.\n\n## 21 mai — Sport / Urban Brawl\nLe championnat mondial d'Urban Brawl s'ouvre à Néo-Tokyo sous de fortes tensions. Les équipes corporatistes rivales promettent un niveau de violence inédit pour cette saison 2054-2055.",
  "archive": 2054
 },
 {
  "id": "a2054_shadowland",
  "dir": "/archives/2054",
  "name": "shadowland_bbs_2054.txt",
  "level": 0,
  "title": "Shadowland BBS — Fil clandestin (2054)",
  "kw": [
   "shadowland",
   "fastjack",
   "captain lazer",
   "grrl",
   "firewatch",
   "orichalque",
   "vans noirs",
   "sinless"
  ],
  "summary": "Rumeurs des ombres : Firewatch, vans noirs, orichalque.",
  "text": "## Shadowland BBS // Fil clandestin — accès décrypté (2054)\n\n## Fastjack\nDes mouvements de fonds anormaux ont été détectés entre Detroit et Chicago. Ares semble rapatrier ses équipes d'extraction d'élite « Firewatch ». Quelqu'un sait ce qu'ils ont trouvé dans l'Illinois ?\n\n## Captain Lazer\nSi vous runnez à Tacoma ou Redmond, évitez les patrouilles non identifiées. Des vans noirs sans logo embarquent des SINless en pleine nuit. Ce ne sont pas des flics de Lone Star, leurs armes n'ont pas de marquage.\n\n## /dev/grrl\nLa rumeur dit qu'un gros lot d'orichalque brut a été sorti clandestinement du Tír Tairngire. Les chasseurs de talismans sont sur les dents.",
  "archive": 2054
 },
 {
  "id": "a2054_journal",
  "dir": "/archives/2054",
  "name": "journal_interne_benevole.txt",
  "level": 0,
  "title": "Journal d'Elena_M — bénévole santé",
  "kw": [
   "elena",
   "journal",
   "gabriel",
   "darryl",
   "ruche"
  ],
  "summary": "Confrérie Universelle, chapitre #42 — fichier personnel d'une bénévole qui commence à comprendre.",
  "text": "## CONFRÉRIE UNIVERSELLE — CHAPITRE #42\n## FICHIER PERSONNEL — NE PAS COPIER\nPropriétaire : Elena_M@UB-Net-Tacoma (bénévole santé) · Dernière modification : 28 octobre 2054\n\n## 3 octobre\nUne autre bonne journée au chapitre. Plus de 400 repas chauds ce soir. Le Frère Gabriel est incroyable, son calme inspire tout le monde. Les gens arrivent cassés par la rue, et en quelques jours ici, ils retrouvent le sourire.\n\n## 19 octobre\nJe ne trouve plus Darryl, le jeune homme de Puyallup que j'aidais à soigner. Le Frère Gabriel dit qu'il a été transféré dans notre clinique centrale de Boston... Mais ses affaires sont encore dans son casier. Même son blouson de cuir auquel il tenait tant.\n\n## 26 octobre\nIl se passe des choses anormales la nuit. Je suis restée tard pour classer des dossiers médicaux. Des bruits venant du monte-charge du sous-sol : un grattement métallique rythmé, comme des pattes ou des mandibules contre le béton. Et cette odeur d'insecticide et de phéromones sucrées qui prend à la gorge.\n\n## 28 octobre\nJ'ai croisé le Frère Gabriel ce matin. Je lui ai parlé de Darryl. Il n'a PAS CLIGNÉ DES YEUX UNE SEULE FOIS en trois minutes. Ses pupilles étaient d'un noir fixe, presque vitreux. Voix monotone : « Ne te tracasse pas, Elena. Nous trouverons bientôt une place pour toi dans la Ruche. »\n\nJe range mes affaires ce soir. Je ne reviens plus jamais ici.",
  "archive": 2054
 }
]);
DIRS.push(...["/archives/2054"]);
