const newsData = [
  {
    "id": "1",
    "category": "General",
    "title": "US President Donald Trump’s address on Iran war: Key quotes - The Hindu",
    "desc": "US President Donald Trump’s address on Iran war: Key quotes The Hindu \"Will Bring Iran Back To Stone Ages\": Trump Says US To Hit \"Extremely Hard\" NDTV Trump’s primetime speech on Iran war: Key takeaways Al Jazeera Trump says US military objectives in Iran ‘nearing completion’ AP News Exclusive | Trump Tells Aides He’s Willing to End War Without Reopening Hormuz WSJ...",
    "date": "7:51 AM"
  },
  {
    "id": "2",
    "category": "General",
    "title": "Magnitude 7.4 quake hits off Indonesia’s Ternate, tsunami warning lifted - Al Jazeera",
    "desc": "Magnitude 7.4 quake hits off Indonesia’s Ternate, tsunami warning lifted Al Jazeera Magnitude 7.4 earthquake hits off Indonesia, killing one BBC 1 dead as 7.6-magnitude quake hits eastern Indonesia, tsunami warning lifted news.cgtn.com 7.4 magnitude earthquake hits Indonesia The Times of India 1 dead after 7.6-magnitude earthquake hits Indonesia, triggers tsunami waves India Today...",
    "date": "8:27 AM"
  },
  {
    "id": "3",
    "category": "AI",
    "title": "India waives customs duty on key petrochemicals amid US–Iran conflict. Full list | India News - Hindustan Times",
    "desc": "India waives customs duty on key petrochemicals amid US–Iran conflict. Full list | India News Hindustan Times West Asia crisis: Government exempts critical petrochemical products from customs duty The Hindu Government waives customs duty on key petrochemical imports amid West Asia war India Today Centre grants full customs duty exemption on critical petrochemical products amid Middle East crisis: Check list The Times of India India cuts petrochemical import duty till June 30 as West Asia war disrupts supply chains Firstpost...",
    "date": "10:52 AM"
  },
  {
    "id": "4",
    "category": "General",
    "title": "BREAKING| Supreme Court Slams West Bengal Officials Over Attack On Judges During SIR Duty, Directs Use... - Live Law",
    "desc": "BREAKING| Supreme Court Slams West Bengal Officials Over Attack On Judges During SIR Duty, Directs Use... Live Law \"Was Monitoring Till 2 AM\": Chief Justice Raps Bengal Over Hostage Incident NDTV Holding SIR judicial officers hostage in Bengal a ‘calculated attempt’ to disrupt elections: Supreme Court The Hindu 'Complete breakdown of law & order in Bengal': SC after judicial officers were held hostage for hours over SIR deletion The Times of India Most polarised State: Supreme Court orders deployment of central forces to protect judges on SIR duty in West Bengal Bar and Bench...",
    "date": "11:24 AM"
  },
  {
    "id": "5",
    "category": "General",
    "title": "India's defence exports hit record high of Rs 38,424 crore in FY26: 'Impressive success story' - Moneycontrol.com",
    "desc": "India's defence exports hit record high of Rs 38,424 crore in FY26: 'Impressive success story' Moneycontrol.com India's defence exports hit record ₹38,424 crore in FY 25-26 The Hindu India’s defence exports rocket to Rs 38,424 cr in FY26, up by 63%. US remains top destination ThePrint India Defence Exports Hit Record ₹38,424 Cr: Rajnath Singh Deccan Chronicle India’s arms exports jump 63% to record Rs 38,424 crore The New Indian Express...",
    "date": "10:12 AM"
  },
  {
    "id": "6",
    "category": "General",
    "title": "‘Powerful’, ‘U-shaped’ jet streams: Experts say cold, stormy Western Disturbance coming up to shake North, West India | India News - Hindustan Times",
    "desc": "‘Powerful’, ‘U-shaped’ jet streams: Experts say cold, stormy Western Disturbance coming up to shake North, West India | India News Hindustan Times Fresh western disturbance brings rain, snow to parts of northern India Daily Excelsior Week Long Rain-Snow Over Northern Mountains: Hailstorm At Few Places Skymet Weather March rainfall in Punjab deficient by 25 per cent, but wet spell to continue till April 6 Tribune India Watch: Heavy rain, hailstorm hits Haryana, Orange alert for Delhi-NCR MSN...",
    "date": "9:49 AM"
  },
  {
    "id": "7",
    "category": "AI",
    "title": "Did Obama give $1.7 billion ‘in cash’ to Iran? Trump makes big claim in primetime speech | Hindustan Times - Hindustan Times",
    "desc": "Did Obama give $1.7 billion ‘in cash’ to Iran? Trump makes big claim in primetime speech | Hindustan Times Hindustan Times \"Iran Was Laughing At Us\": Trump On Obama Signing Nuclear Deal NDTV Harsanyi: Trump's Iran deal must be nothing like Obama's The Detroit News Did Obama send $1.7 billion in cash to Iran as Trump claims? Firstpost Assessing The Joint Comprehensive Plan of Action Iran Deal: Its Provisions, Verification Results and Political Support Center for International Policy...",
    "date": "6:53 AM"
  },
  {
    "id": "8",
    "category": "General",
    "title": "Stock market today: NSE Nifty50 tumbles 2%, BSE Sensex sinks over 1,300 points as Trump's speech on Iran - The Times of India",
    "desc": "Stock market today: NSE Nifty50 tumbles 2%, BSE Sensex sinks over 1,300 points as Trump's speech on Iran The Times of India Investors Lose Rs 10 Lakh Crore In An Hour. Here's Why Markets Crashed NDTV Stock markets decline 2% in early trade amid rising tensions in West Asia, surge in crude oil price The Hindu Sensex crashes 1,500 points: Why is the stock market down today? India Today Opening Bell : Benchmarks likely to make gap-down opening amid foreign fund outflows Investment Guru...",
    "date": "9:38 AM"
  },
  {
    "id": "9",
    "category": "General",
    "title": "Oil Prices Surge 6% as Trump Signals Prolonged Iran Conflict - OilPrice.com",
    "desc": "Oil Prices Surge 6% as Trump Signals Prolonged Iran Conflict OilPrice.com US-Iran War Live Updates: Trump's Iran Speech Rattles Markets, Fuels Fresh Fears Of Prolonged War NDTV Live updates: Iran war news, oil prices surge on Trump’s vow to hit Iran ‘extremely hard’ CNN Oil prices surge, Sensex tanks: Aftermath of Trump's warning to hit Iran ‘extremely hard’ Hindustan Times No cheer for markets as Asian Indices fall after Trump fails to give timeline for end of war ANI News...",
    "date": "10:05 AM"
  },
  {
    "id": "10",
    "category": "AI",
    "title": "RBI's forex war explained: How a $149 billion crackdown is stopping speculators from tanking the rupee - The Economic Times",
    "desc": "RBI's forex war explained: How a $149 billion crackdown is stopping speculators from tanking the rupee The Economic Times Biggest Surge In 12.5 Years: How RBI Is Saving Rupee From Iran War Jitters NDTV HDFC Bank, ICICI Bank, SBI and other banking stocks fall up to 4% as RBI tightens Forex rules Upstox Rupee posts biggest gain in 12 years after RBI tightens currency curbs Moneycontrol.com Rupee rebounds from record low; gains 1.6% to 93.19 against U.S. dollar The Hindu...",
    "date": "10:23 AM"
  },
  {
    "id": "11",
    "category": "AI",
    "title": "Dollar gains as Trump sets no clear Iran ceasefire timeline in speech By Reuters - Investing.com",
    "desc": "Dollar gains as Trump sets no clear Iran ceasefire timeline in speech By Reuters Investing.com Dollar gains as Trump vows more strikes on Iran reuters.com CNBC Daily Open: All eyes on Trump address as markets rise on ceasefire hopes CNBC Asian markets today: Kospi, Nikkei 225 reverse gains, fall up to 3% after Donald Trump's address on Iran war Mint Trump has no good options in Iran—here are 5 of them ahead of his speech to the nation tonight Fortune...",
    "date": "9:41 AM"
  },
  {
    "id": "12",
    "category": "General",
    "title": "Ramayana teaser live updates: Ranbir Kapoor's Lord Rama glimpse gets mixed reactions for 'cartoonish VFX’ | Bollywood - Hindustan Times",
    "desc": "Ramayana teaser live updates: Ranbir Kapoor's Lord Rama glimpse gets mixed reactions for 'cartoonish VFX’ | Bollywood Hindustan Times 'Ramayana' Teaser: Ranbir Kapoor debuts as Lord Rama in EPIC first glimpse - WATCH The Times of India ‘Ramayana’ Rama glimpse: Ranbir Kapoor holds sway as the Lord in Nitesh Tiwari’s magnum opus The Hindu Alia Bhatt calls Ramayana glimpse out of this world, praises Ranbir Kapoor India Today Ramayana teaser celeb review: Karan Johar, Siddharth Anand in awe of Ranbir Kapoor as Lord Ram Hindustan Times...",
    "date": "12:09 PM"
  },
  {
    "id": "13",
    "category": "General",
    "title": "‘Dhurandhar: The Revenge’ box office collection day 14: Ranveer Singh, Rakesh Bedi and Sanjay Dutt's film - The Times of India",
    "desc": "‘Dhurandhar: The Revenge’ box office collection day 14: Ranveer Singh, Rakesh Bedi and Sanjay Dutt's film The Times of India 5 reasons why Dhurandhar 2 dethroning Dangal sounds good for Indian cinema India Today Dhurandhar 2 Box Office Collection Day 13: Film On The Verge Of Entering Rs 900 Crore Club In India NDTV Dhurandhar 2 box office collection day 14: Ranveer Singh film refuses to slow down, crosses ₹915 crore Hindustan Times Dhurandhar 2 Unlikely to Beat Pushpa 2 & Baahubali 2? Gulte...",
    "date": "10:40 AM"
  },
  {
    "id": "14",
    "category": "AI",
    "title": "IPL 2026: DC troll LSG after win as KL Rahul golden duck sparks staircase jibe war - The Times of India",
    "desc": "IPL 2026: DC troll LSG after win as KL Rahul golden duck sparks staircase jibe war The Times of India Mohammed Shami scripts IPL history, sets big record despite LSG defeat The Times of India Lucknow Super Giants vs Delhi Capitals, 5th Match, Indian Premier League 2026 - Player Highlights Cricbuzz 1st Time In IPL History: Ignored India Pacer Mohammed Shami Scripts Massive Record With KL Rahul's Wicket NDTV Sports IPL 2026: Shami shows spark but LSG suffer six wicket defeat The New Indian Express...",
    "date": "8:09 AM"
  },
  {
    "id": "15",
    "category": "General",
    "title": "Artemis II astronauts manually pilot Orion: Nasa video shows spacecraft heading towards Moon - The Times of India",
    "desc": "Artemis II astronauts manually pilot Orion: Nasa video shows spacecraft heading towards Moon The Times of India NASA Astronauts Reach Safe Orbit In Historic Moon Mission NDTV 'Remember standing on those grounds': Astronaut Shubhanshu Shukla recalls Moon journey, hails Artemis II launch The Times of India NASA Artemis II launch: Astronauts reach orbit on historic mission to moon and back The Hindu NASA successfully launches historic Artemis II moon mission Al Jazeera...",
    "date": "9:43 AM"
  },
  {
    "id": "16",
    "category": "General",
    "title": "There's a bit of toilet trouble on NASA's Artemis 2 mission to the moon - Space",
    "desc": "There's a bit of toilet trouble on NASA's Artemis 2 mission to the moon Space Moon mission: Artemis II crew report issue with Orion spacecraft toilet; NASA troubleshoots The Times of India Artemis II Flight Update: Crew and Ground Teams Successfully Troubleshoot Orion’s Toilet NASA (.gov) No More Bags! The Artemis II Crew Can Now Poop In Style With This New Upgrade | Explainers News News18 The Artemis II Toilet Had a Problem The New York Times...",
    "date": "9:06 AM"
  },
  {
    "id": "17",
    "category": "General",
    "title": "The Medical Minute: Latest Parkinson’s Disease Treatments Help Patients Stay Active Longer | Newswise - Newswise",
    "desc": "The Medical Minute: Latest Parkinson’s Disease Treatments Help Patients Stay Active Longer | Newswise Newswise Parkinson's Awareness Month: How Technology Is Revolutionising Parkinson's Care NDTV Beyond Medication: How Surgical Interventions For Parkinson's Disease Are Improving Quality Of Life NDTV...",
    "date": "7:20 AM"
  }
];

export default newsData;