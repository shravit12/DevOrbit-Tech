const newsData = [
  {
    "id": "1",
    "category": "AI",
    "title": "UK to host talks with 35 countries on reopening Strait of Hormuz - Reuters",
    "desc": "UK to host talks with 35 countries on reopening Strait of Hormuz Reuters UK to host talks on plan to reopen Strait of Hormuz BBC Foreign Secretary Misri represents India at U.K.-hosted meet on Strait of Hormuz The Hindu India To Join 35 Countries' Effort To Reopen Strait Of Hormuz: Centre NDTV Britain to host 35 countries for strait of Hormuz talks, says Starmer The Guardian...",
    "date": "6:48 PM"
  },
  {
    "id": "2",
    "category": "General",
    "title": "Parliament Budget Session highlights: Both Houses adjourned; Budget Session to reconvene on April 16 - The Hindu",
    "desc": "Parliament Budget Session highlights: Both Houses adjourned; Budget Session to reconvene on April 16 The Hindu Parliament to reconvene in three weeks to pass women’s reservation bill: Rijiju in Rajya Sabha Deccan Herald 'Sine die or later?': Congress seeks clarity on RS adjournment; Nadda says govt will revert The New Indian Express 'For a very important bill': Parliament to reconvene on April 16; what’s on cards The Times of India Govt signals plan to roll out women’s reservation, Oppn asks ‘why ahead of state elections’ ThePrint...",
    "date": "7:14 PM"
  },
  {
    "id": "3",
    "category": "General",
    "title": "Eight Muslim-majority countries condemn Israel's new death penalty law - Reuters",
    "desc": "Eight Muslim-majority countries condemn Israel's new death penalty law Reuters ‘This is an apartheid regime’: Critics decry Israel’s new death penalty law Al Jazeera Eight Muslim-majority countries condemn Israel’s new death penalty law The Times of Israel Video: Israel Minister Drinks, Celebrates Death Penalty Law For Palestinians NDTV Fact Check: Execution of a Palestinian prisoner by Israel? No, here are the facts India Today...",
    "date": "3:45 PM"
  },
  {
    "id": "4",
    "category": "AI",
    "title": "Stock Market Highlights 2 April 2026: Sensex ends 185 pts higher at 73,319, Nifty regains 22,700 after strong rupee rally - thehindubusinessline.com",
    "desc": "Stock Market Highlights 2 April 2026: Sensex ends 185 pts higher at 73,319, Nifty regains 22,700 after strong rupee rally thehindubusinessline.com Markets end in green: Sensex jumps 1,750 pts from day's low, Nifty reclaims 22,700; key factors behind... moneycontrol.com Stock Market Highlights: Markets End In Green After Sensex Started Day 1,400 Points Lower NDTV Sensex Today | Nifty 50 | Stock Market Live Updates: Sensex settles 185 pts higher, Nifty above 22,700; I... economictimes.com Top gainers and losers, April 2: HCL Tech jumps 3%, Asian Paints, Eicher Motors down 2%; check list Upstox...",
    "date": "4:50 PM"
  },
  {
    "id": "5",
    "category": "AI",
    "title": "Oracle employee laid off after 34 years says layoffs may be driven by algorithm: ‘Quite a shock’ | Hindustan Times - Hindustan Times",
    "desc": "Oracle employee laid off after 34 years says layoffs may be driven by algorithm: ‘Quite a shock’ | Hindustan Times Hindustan Times Oracle layoffs: In a first, the 6 AM email that laid off 10,000+ employees did not come from HR The Times of India Oracle cutting thousands in latest layoff round as company continues to ramp AI spending CNBC ‘Rs 20K for insurance, garden leave, ex-gratia’: Oracle's India employees reveal their severance... moneycontrol.com \"Opportunity To Slow Down and Reflect\": Oracle Employee's Graceful Layoff Post Wins Internet NDTV...",
    "date": "6:06 PM"
  },
  {
    "id": "6",
    "category": "AI",
    "title": "Google to offer more than double storage with AI Pro subscription - The Times of India",
    "desc": "Google to offer more than double storage with AI Pro subscription The Times of India Google One boosts AI Pro to 5TB at $19.99 NewsBytes Google Dramatically Upgrades Storage in Google AI Pro Thurrott.com Google's $20 per month AI Pro plan just got a big storage boost Engadget Google Expands AI Pro Plan Storage to 5TB at No Extra Cost thehansindia.com...",
    "date": "4:45 PM"
  },
  {
    "id": "7",
    "category": "AI",
    "title": "Ramayana teaser highlights: Ranbir Kapoor's Lord Rama glimpse gets mixed reactions from fans, praise from industry | Bollywood - Hindustan Times",
    "desc": "Ramayana teaser highlights: Ranbir Kapoor's Lord Rama glimpse gets mixed reactions from fans, praise from industry | Bollywood Hindustan Times Ranbir Kapoor's absence from the 'Ramayana' event Mumbai to launch the first look of Rama raises eyebrows, leaves fans disappointed The Times of India Ramayana Teaser Breakdown: Ranbir As Rama, Big Reveals, And Who Is Missing NDTV ‘Not up to the hype’: Ranbir Kapoor’s ‘Ramayana’ teaser leaves fans disappointed over ‘obvious’ AI use Telegraph India ‘Ramayana’ Rama glimpse: Ranbir Kapoor holds sway as the Lord in Nitesh Tiwari’s magnum opus The Hindu...",
    "date": "4:39 PM"
  },
  {
    "id": "8",
    "category": "General",
    "title": "'Dhurandhar: The Revenge' box office collection day 15 [LIVE]: Ranveer Singh, Rakesh Bedi film eyes Rs 95 - The Times of India",
    "desc": "'Dhurandhar: The Revenge' box office collection day 15 [LIVE]: Ranveer Singh, Rakesh Bedi film eyes Rs 95 The Times of India 5 reasons why Dhurandhar 2 dethroning Dangal sounds good for Indian cinema India Today Ranveer Singh-starrer ‘Dhurandhar 2’ inches towards Rs 1500-crore mark Telegraph India Dhurandhar 2 Total Collection Till April 2: Rs 1,500 Crore Not Too Far For Ranveer Singh Film NDTV Dhurandhar 2 Worldwide Box Office Collection Day 14 LIVE: Ranveer Singh’s film eyes Rs 1500 cr mark, crosses Rs 10 cr mark on Thursday The Indian Express...",
    "date": "3:15 PM"
  },
  {
    "id": "9",
    "category": "General",
    "title": "'Grossly Vulgar, Obscene': Delhi High Court Orders Immediate Take Down Of 'Volume 1' Song By Honey Singh, ... - Live Law",
    "desc": "'Grossly Vulgar, Obscene': Delhi High Court Orders Immediate Take Down Of 'Volume 1' Song By Honey Singh, ... Live Law Deeply vulgar: Delhi HC orders blanket ban on Honey Singh and Badshah's song 'Volume 1' Bar and Bench Delhi HC orders removal of 2006 Badshah-Honey Singh ‘Mafia Mundeer’ song citing vulgar, derogatory lyrics The Indian Express 'Rare case where court is shocked to its absolute core': Delhi HC orders Honey Singh, Badshah to take down Volume 1 song Hindustan Times 20 years after release, Delhi High Court directs removal of 'vulgar & derogatory' song by Yo Yo Honey Singh, Badshah Deccan Herald...",
    "date": "3:37 PM"
  },
  {
    "id": "10",
    "category": "AI",
    "title": "Pakistani cop Aslam's wife praises Sanjay Dutt's performance in 'Dhurandhar': 'For a moment, it felt like - The Times of India",
    "desc": "Pakistani cop Aslam's wife praises Sanjay Dutt's performance in 'Dhurandhar': 'For a moment, it felt like The Times of India 'Felt Like Aslam For A Moment': SP's Wife Praises Sanjay Dutt In Dhurandhar 2 NDTV Real Chaudhry Aslam’s wife Naureen praises Sanjay Dutt's performance in Dhurandhar 2, says, \"they... moneycontrol.com SP Chaudhary Aslam’s Wife Praises Sanjay Dutt Gulte Dhurandhar 2 vs reality: Wife recalls Chaudhry Aslam’s final moments India Today...",
    "date": "3:48 PM"
  },
  {
    "id": "11",
    "category": "General",
    "title": "IPL 2026: Match 6, KKR vs SRH Match Prediction – Who will win today’s IPL match between KKR vs SRH? - CricTracker",
    "desc": "IPL 2026: Match 6, KKR vs SRH Match Prediction – Who will win today’s IPL match between KKR vs SRH? CricTracker Kolkata Knight Riders vs Sunrisers Hyderabad, 6th Match, Indian Premier League 2026 - Commentary Cricbuzz KKR vs SRH Live Score, IPL 2026: Travis Head departs after fiery knock; Abhishek Sharma, Ishan Kishan in charge The Times of India Shivang Kumar debuts for SRH; unchanged KKR bowl ESPNcricinfo Kolkata Knight Riders vs Sunrisers Hyderabad Live Score: Match 6 of Indian Premier League, 2026 to start at 07:30 PM Hindustan Times...",
    "date": "7:30 PM"
  },
  {
    "id": "12",
    "category": "AI",
    "title": "Nuwan Thushara files lawsuit against SLC for IPL NOC - ESPNcricinfo",
    "desc": "Nuwan Thushara files lawsuit against SLC for IPL NOC ESPNcricinfo IPL 2026: After snub, RCB star heads to court to secure playing rights The Times of India Sri Lanka's Thushara seeks court intervention to play in IPL The Hindu RCB pacer Nuwan Thushara files case against Sri Lanka Cricket after NOC denied, steps away from national team: Report Hindustan Times RCB pacer Nuwan Thushara sues Sri Lanka Cricket over IPL 2026 participation; What has happened exactly? Explained Mint...",
    "date": "6:19 PM"
  },
  {
    "id": "13",
    "category": "General",
    "title": "Fortis Delhi gastroenterologist shares 3 food combinations to improve gut health, immunity and energy level | Health - Hindustan Times",
    "desc": "Fortis Delhi gastroenterologist shares 3 food combinations to improve gut health, immunity and energy level | Health Hindustan Times From Scalp To Stomach: 7 Surprising Signs Your Gut Is Out Of Balance doctor.ndtv.com What is the Gut Microbiome? Local Experts Share Tips for Better Gut Health Palm Springs Life Health experts say good gut health starts with what we eat ABC30 Fresno The 9 best foods for your gut (and the 5 worst) The Times...",
    "date": "2:40 PM"
  },
  {
    "id": "14",
    "category": "General",
    "title": "Urinary Metabolites Identify Bladder Cancer and Predict Recurrence - EMJ",
    "desc": "Urinary Metabolites Identify Bladder Cancer and Predict Recurrence EMJ...",
    "date": "5:32 PM"
  }
];

export default newsData;