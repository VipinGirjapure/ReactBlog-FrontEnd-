import React, { Component } from "react";
// import { NewsItems } from "./NewsItems";
import HomeItems from "./HomeItems";

class Home extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "DNA India"
    },
    "author": null,
    "title": "Scientists reveal retinal cell mapping could promote accurate therapies for blindness - DNA India",
    "description": "Scientists reveal retinal cell mapping could promote accurate therapies for blindness - Researchers have identified discrete differences between the cells that make up retinal tissue and the findings can help in developing targeted therapies to treat various …",
    "url": "https://www.dnaindia.com/india/video-scientists-reveal-retinal-cell-mapping-could-promote-accurate-therapies-for-blindness-2951419",
    "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/08/1761962-1652004909-00000003.jpg",
    "publishedAt": "2022-05-08T10:15:10Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "In Delhi Clashes, Court Blasts Police For \"Utter Failure\" To Stop March - NDTV",
    "description": "The bail of eight people allegedly involved in the violence in Jahangirpuri has been rejected by a court in Delhi, which said their release may affect witnesses. The accused are well-known local criminals and hence no witnesses will come forward.",
    "url": "https://www.ndtv.com/india-news/in-delhi-clashes-court-blasts-police-for-utter-failure-to-stop-march-2956520",
    "urlToImage": "https://c.ndtvimg.com/2022-04/oqenpoik_delhi-police-generic-jahangirpuri-ani_625x300_26_April_22.jpg",
    "publishedAt": "2022-05-08T10:05:30Z",
    "content": "New Delhi: The bail of eight people allegedly involved in the recent communal clashes at Delhi's Jahangirpuri has been rejected by a local court, which said the accused are well-known local criminals… [+2192 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "Shruti Tomar",
    "title": "Indore fire that killed 7 started by man over a breakup, arrested: Cops - Hindustan Times",
    "description": "The fire in the Indore building claimed seven lives and injured nine others on Saturday. Police arrested the accused on Saturday night from Lohamandi.",
    "url": "https://www.hindustantimes.com/cities/bhopal-news/rejected-lover-behind-indore-fire-that-killed-7-arrested-101652002705655.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/eb0c78ee-ceb1-11ec-aa8a-3e772098118b_1652003598007.jpg",
    "publishedAt": "2022-05-08T09:38:25Z",
    "content": "BHOPAL: A 28-year-old man, who allegedly set on fire the building in Indore that claimed seven lives and injured nine others on Saturday, has been arrested, the Madhya Pradesh police said on Sunday. … [+2130 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Realme GT NEO 3, Infinix Hot 11 2022, and more: Check TOP 5 new phones on sale on Flipkart - HT Tech",
    "description": "Want a recently launched smartphone? What can be better than grabbing it on sale! Check out the top 5 recently launched smartphones available on sale on Flipkart. From Realme GT NEO 3, Infinix Hot 11 2022, and more- Check offer details here.",
    "url": "https://tech.hindustantimes.com/photos/realme-gt-neo-3-infinix-hot-11-2022-and-more-check-top-5-new-phones-on-sale-on-flipkart-71652001404305.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/08/1600x900/1_1651644758902_1652001499527.jpg",
    "publishedAt": "2022-05-08T09:23:58Z",
    "content": "Top SectionsExplore Tech\r\n Copyright © HT Media Limited All rights reserved."
    },
    {
    "source": {
    "id": null,
    "name": "India.com"
    },
    "author": "IANS",
    "title": "NASA Likely to Launch Artemis 1 Moon Rocket in August - India.com",
    "description": "Artemis 1, was earlier scheduled to launch in late May 2022.",
    "url": "https://www.india.com/science/nasa-likely-to-launch-artemis-1-moon-rocket-in-august-5380516/",
    "urlToImage": "https://static.india.com/wp-content/uploads/2022/05/4df5585edbeee5b1cbb757019f7dd4ba.jpg",
    "publishedAt": "2022-05-08T08:56:21Z",
    "content": "Washington: NASA has yet again delayed its Artemis 1 moon rocket launch and now the US space agency is planning it for August, the media reported. Artemis 1, was earlier scheduled to launch in late M… [+2337 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WION"
    },
    "author": "WION Web Team",
    "title": "Argentina detects eight cases of severe hepatitis of unknown origin in children - WION",
    "description": "Eight cases of severe hepatitis of an unknown origin have been detected in children in the Argentinian city of Santa Fe.",
    "url": "https://www.wionews.com/world/argentina-detects-eight-cases-of-severe-hepatitis-of-unknown-origin-in-children-477309",
    "urlToImage": "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/05/08/260654-untitled-design-14.png",
    "publishedAt": "2022-05-08T08:47:34Z",
    "content": "Eight cases of severe hepatitis of an unknown origin have been detected in children in the Argentinian city of Santa Fe.\r\nThe country's ministry of health has denied that it is an outbreak and report… [+1831 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "Express Web Desk",
    "title": "Tajinder Bagga arrest Live Updates: Bagga thanks Punjab HC for protection from arrest, says law still works in India - The Indian Express",
    "description": "Tajinder Bagga arrest Live Updates: In the wake of BJP leader Tajinder Pal Singh Bagga expressing fear about his safety, the Delhi Police on Saturday said it will make necessary security arrangements for him.",
    "url": "https://indianexpress.com/article/cities/delhi/delhi-news-live-updates-tajinder-bagga-arrest-bjp-aap-kejriwal-7906161/",
    "urlToImage": "https://images.indianexpress.com/2022/05/Bagga-6.jpg",
    "publishedAt": "2022-05-08T08:18:50Z",
    "content": "A member of the RSS since his teenage days who also calls himself a Bhagat Singh follower, Tajinder Pal Singh Bagga, the BJP leader who was arrested by the Punjab Police on Friday, first came to the … [+691 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "Moneycontrol News",
    "title": "LIC IPO: Issue subscribed 1.72 times on Day 5, policyholders 4.84 times, retail 1.52 times, Employee 3.67... - Moneycontrol",
    "description": "LIC IPO: RBI has recommended all bank branches designated to handle ASBA applications to be kept open to public on Sunday, May 8,2022 and bids will be accepted between 10am to 7pm.",
    "url": "https://www.moneycontrol.com/news/business/markets/lic-ipo-day-5-open-for-subscription-on-sunday-too-issue-subscribed-1-66-times-till-now-8470551.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/LIC-IPO-3-770x433.jpg",
    "publishedAt": "2022-05-08T08:17:59Z",
    "content": "May 08, 2022 / 01:47 PM IST\r\nAshika Research View on LIC IPO:\r\nGoing ahead, LIC will likely to strengthen its omni-channel distribution network for individual products and increase its productivity.\r… [+501 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "International Business Times, India Edition"
    },
    "author": "Sami Khan",
    "title": "Apple top ML exec resigns. Reason: Company's return to office policy [details] - IBTimes India",
    "description": "Ian Goodfellow reportedly sent an email to the staff, citing Apple's return to office policy as the reason for his departure. \"I believe strongly that more flexibility would have been the best policy for my team,\" he said.",
    "url": "https://www.ibtimes.co.in/apple-top-ml-exec-resigns-reason-companys-return-office-policy-details-848251",
    "urlToImage": "https://data1.ibtimes.co.in/en/full/693699/apple.jpg",
    "publishedAt": "2022-05-08T08:14:56Z",
    "content": "How tech giants oppose Russia's invasion, support Ukraine\r\nApple started calling its employees back to offices on April 11 in a phased manner, but the decision hasn't faired well with some of its emp… [+2355 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SportsCafe"
    },
    "author": "SportsCafe Desk",
    "title": "County Championship 2022 | Twitter reacts as Cheteshwar Pujara unleashes a stunning shot for maximum - SportsCafe",
    "description": "Cheteshwar Pujara has been on a roll in the ongoing County Championship 2022 scoring 672 runs from seven innings at 134.40 so far. Pujara once again showed his className in the tournament smashing a majestic upper-cut on delivery outside off to deposit Shaheen Af…",
    "url": "https://sportscafe.in/cricket/articles/2022/may/08/county-championship-2022-twitter-reacts-as-cheteshwar-pujara-unleashes-a-stunning-shot-for-maximum",
    "urlToImage": "https://cdn-images.spcafe.in/img/es3-cfill-w800-h418/articles/Cricket_1/cheteshwar_pujara_sussex_cricket.jpg",
    "publishedAt": "2022-05-08T08:08:59Z",
    "content": "After being dropped from the Indian Test squad and having a disappointing Ranji Trophy campaign, Cheteshwar Pujara is on a roll in the County Championship. Pujara is scoring a plethora of runs and is… [+150 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": "Press Trust of India",
    "title": "Delhi Capitals Players Forced Into Isolation After Net Bowler Tests Positive For Covid: Report - NDTV Sports",
    "description": "Delhi Capitals players were once again forced into isolation in the ongoing IPL-15 after a net bowler of the franchise tested positive for COVID-19.",
    "url": "https://sports.ndtv.com/ipl-2022/delhi-capitals-players-forced-into-isolation-after-net-bowler-tests-positive-for-covid-19-report-2956232",
    "urlToImage": "https://c.ndtvimg.com/2022-05/8mkqsve_delhi-capitals-bcciipl_625x300_06_May_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
    "publishedAt": "2022-05-08T08:08:09Z",
    "content": "Delhi Capitals players were once again forced into isolation in the ongoing IPL-15 after a net bowler of the franchise tested positive for COVID-19. \"One net bowler tested positive today morning in t… [+1074 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Entertainment Desk",
    "title": "Mother's Day: Kareena Kapoor shares pool pic with sons Taimur and Jeh - Hindustan Times",
    "description": "Bollywood celebrities took to social media to celebrate Mother's Day. Kareena Kapoor, Gauri Khan, Janhvi Kapoor, Ananya Panday, Yami Gautam, Kunal Kemmu, Navya Naveli Nanda and more shared wishes for their moms and kids.",
    "url": "https://www.hindustantimes.com/entertainment/bollywood/mothers-day-kareena-kapoor-shares-pic-with-taimur-and-jeh-gauri-khan-misses-all-the-drama-see-more-celeb-wishes-101651991859347.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/gauri_1651996771837_1651996790969.jpg",
    "publishedAt": "2022-05-08T08:00:16Z",
    "content": "As the world celebrates Mother's Day on Sunday, May 8, Bollywood celebrities have taken to social media to mark the occasion. Kareena Kapoor, Gauri Khan, Janhvi Kapoor, Ananya Panday were among those… [+4637 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "Vallabh Ozarkar",
    "title": "Navneet Rana attacks Thackeray, dares Maharashtra CM to contest elections against her - The Indian Express",
    "description": "Mumbai News: ‘If reciting Hanuman Chalisa is a crime, I am willing to stay in jail for 14 years,’ says Amravati MP",
    "url": "https://indianexpress.com/article/cities/mumbai/navneet-rana-attacks-thackeray-dares-maharashtra-cm-to-contest-elections-against-her-7906390/",
    "urlToImage": "https://images.indianexpress.com/2022/05/NAVNEET.jpg",
    "publishedAt": "2022-05-08T07:59:43Z",
    "content": "After being discharged from hospital on Sunday, Independent MP Navneet Rana launched a scathing attack on Maharashtra Chief Minister Uddhav Thackeray, accusing him of misusing his power, and alleged … [+1998 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "'Khalistan' Flags Draped Over Himachal Assembly Gates, Graffiti On Walls - NDTV",
    "description": "Himachal Pradesh Chief Minister Jairam Thakur has ordered an investigation after flags of \"Khalistan\" were found draped over the gates and boundary wall of the Himachal Pradesh Legislative Assembly in Dharamshala this morning.",
    "url": "https://www.ndtv.com/india-news/khalistan-flags-draped-over-himachal-assembly-gates-grafitti-on-walls-2956189",
    "urlToImage": "https://c.ndtvimg.com/2022-05/ds448gik_khalistan-flags-himachal-_625x300_08_May_22.jpg",
    "publishedAt": "2022-05-08T07:54:48Z",
    "content": "Jairam Thakur said the culprits took advantage of the police deployment inside the Assembly campus.\r\nChandigarh: Himachal Pradesh Chief Minister Jairam Thakur has ordered an investigation after flags… [+2439 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Moneycontrol"
    },
    "author": "PTI",
    "title": "Government may infuse Rs 3,000-5,000 crore additional capital in three PSU general insurers - Moneycontrol",
    "description": "The capital infusion would help improve the financial health of the general insurance firms — National Insurance Company Limited, Oriental Insurance Company Limited and United India Insurance Company.",
    "url": "https://www.moneycontrol.com/news/business/government-may-infuse-rs-3000-5000-crore-additional-capital-in-three-psu-general-insurers-8471491.html",
    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/inr_rupee_indian-rupee-770x433.jpg",
    "publishedAt": "2022-05-08T07:46:51Z",
    "content": "The government may infuse Rs 3,000-5,000 crore additional capital in the three public sector general insurance companies based on their performance and requirement during the year, sources said. The … [+2584 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Amazon Summer Sale 2022: Last Day To Get Pressure Cookers From Top Brands For Up To 30% Off - NDTV",
    "description": "Choose from the best pressure cookers to add to your kitchen life from the exclusive list below!",
    "url": "https://www.ndtv.com/shopping/amazon-summer-sale-2022-last-day-to-get-pressure-cookers-from-top-brands-for-up-to-30-off-2956266",
    "urlToImage": "https://c.ndtvimg.com/2022-03/frv6utbg_pressure-cooker_625x300_28_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675?ver-20220429.02",
    "publishedAt": "2022-05-08T07:46:45Z",
    "content": "With only a few hours left to go, Amazon's Summer Sale is coming to an end today (on May 8, 2022). The amazing deals and discounts are all about to run out, with kitchen essentials being sold at half… [+2408 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Cricketaddictor.com"
    },
    "author": "More by Vicky Singh",
    "title": "SRH vs RCB Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 - Cricket Addictor",
    "description": "SRH vs RCB Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 SunRisers Hyderabad vs Royal Challengers Bangalore Dream11 Prediction Today Match 2022",
    "url": "https://cricketaddictor.com/fantasy-cricket/srh-vs-rcb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-tata-ipl-2022/",
    "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/05/2-1-3.png",
    "publishedAt": "2022-05-08T07:46:14Z",
    "content": "SRH vs RCB Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Tata IPL 2022 match between Sunrisers Hyderabad and Royal Challengers Bangalore. They wil… [+6075 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Central"
    },
    "author": "Jay Bonggolto",
    "title": "WhatsApp emoji reactions are finally getting a wider rollout - Android Central",
    "description": "The messaging app's bigger file sharing limit and larger group chats are also going live for everyone.",
    "url": "https://www.androidcentral.com/apps-software/whatsapp-emoji-reactions-are-finally-getting-a-wider-rollout",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/ogyRmyjeeT5wpsDLPxMBbK-1200-80.jpg",
    "publishedAt": "2022-05-08T07:46:11Z",
    "content": "<ul><li>WhatsApp has begun rolling out emoji reactions for everyone.</li><li>The messaging app's bigger size limit for file sharing is now available to all users.</li><li>Users are also starting to g… [+2002 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Is this what a black hole sounds like? NASA releases audio from Chandra X-ray observatory - The Financial Express",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiZ2h0dHBzOi8vd3d3LmZpbmFuY2lhbGV4cHJlc3MuY29tL2xpZmVzdHlsZS9zY2llbmNlL25hc2EtYmxhY2staG9sZS1zb25pZmljYXRpb24tcGVyc2V1cy1nYWxheHkvMjUxNjUyOC_SAQA?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-05-08T07:35:11Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "Swati Bhasin",
    "title": "Adar Poonawalla to Elon Musk on Tesla in India: 'Best investment you'll make…' - Hindustan Times",
    "description": "After a spell of uncertainity, Elon Musk last month was successful in clinching a $44 billion deal to buy Twitter. \n| Latest News India",
    "url": "https://www.hindustantimes.com/india-news/adar-poonawalla-to-elon-musk-on-tesla-in-india-best-investment-you-ll-make-101651994813199.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/08/1600x900/pjimage_(8)_(1)_1651995399930_1651995418375.jpg",
    "publishedAt": "2022-05-08T07:31:46Z",
    "content": "The Serum Institute of Indias Adar Poonawalla on Sunday reached out to the worlds richest person Elon Musk on Twitter as he made a suggestion to the Tesla boss on the best investment youll ever make.… [+2090 chars]"
    }
    ]
    

  constructor() {
    super();
    // console.log("Home Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
        <div>
        <header>
            {/* first image */}

             <a href="https://www.koimoi.com/?p=896815" target="_blank"> <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/05/box-office-kgf-chapter-2-hindi-rises-all-over-again-on-saturday-continues-to-build-on-its-record-total-001.jpg" alt="" className="firstImage" />
             </a>  
             <a href="https://www.koimoi.com/?p=896815"  className="firstImageText" target="_blank">KGF Chapter 2 Box Office Day 24 (Hindi): Yash Starrer Rises All Over Again On Saturday, Continues To Build On Its Record Total</a>  

{/* second image */}
             <a href="https://indianexpress.com/article/technology/mobile-tabs/5-biggest-mistakes-to-avoid-while-buying-a-smartphone-7906162/" target="_blank"><img src="https://images.indianexpress.com/2022/05/5-mistakes-to-avoid-purchasing-smartphone-featured.jpg" className="secondImage"  />  </a> 

            <a href="https://indianexpress.com/article/technology/mobile-tabs/5-biggest-mistakes-to-avoid-while-buying-a-smartphone-7906162/"  target="_blank"> <span className="secondImageText">"5 biggest mistakes to avoid while buying a smartphone"</span> </a>  


             {/* Advertistement */}
             <img src="https://c8.alamy.com/comp/HACP4Y/mans-deep-clean-face-wash-ad-black-background-and-water-3d-illustration-HACP4Y.jpg" alt="" className="firstAdBox"/>
          
      <div className="container my-3">
         <h3 className="smallHeading">Latest News</h3>

        <div className="row">
        {this.state.articles.map((element) =>{
            return  <div className="col-md-4"   key={element.url}>
            <HomeItems 
          
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        })}   
        </div>
      </div>
              </header>

</div>

    );
  }
}
export default Home;








// import React from "react";
// import "../App.css"

// const Home = () => {

//     return (
//         <header>
//             <h1>Home</h1>
//             <img src="https://tse4.mm.bing.net/th?id=OIP.VwGqLcHxXBnNH9Ez4knJxwHaEo&pid=Api&P=0&w=293&h=183" alt="" className="firstImage" />
//            <span className="image">
//            <img src="https://tse4.mm.bing.net/th?id=OIP.VwGqLcHxXBnNH9Ez4knJxwHaEo&pid=Api&P=0&w=293&h=183" alt=""  className="Imag" />
//            </span>
//             <img src="https://tse4.mm.bing.net/th?id=OIP.VwGqLcHxXBnNH9Ez4knJxwHaEo&pid=Api&P=0&w=293&h=183" alt=""  className="" />
//         </header>
//     )
// }

// export default Home;