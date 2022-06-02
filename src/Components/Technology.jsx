import React, { Component } from "react";
import TechnologyItems from "./TechnologyItems";

class Technology extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "Devhardware.com"
    },
    "author": "Gerald Hale",
    "title": "Passionate about gaming or the occasional one, the OnePlus 10R 5G is the MVP you just can't skip! - Dev Hardware",
    "description": "OnePlus is one of the most respected smartphone brands in the country. From the quality of the hardware used to its lag-free software optimization to its",
    "url": "https://www.devhardware.com/passionate-about-gaming-or-the-occasional-one-the-oneplus-10r-5g-is-the-mvp-you-just-cant-skip/",
    "urlToImage": "https://www.devhardware.com/wp-content/uploads/2022/05/Passionate-about-gaming-or-the-occasional-one-the-OnePlus-10R.jpg",
    "publishedAt": "2022-05-08T09:44:45Z",
    "content": "OnePlus is one of the most respected smartphone brands in the country. From the quality of the hardware used to its lag-free software optimization to its price hype, the brand understands the pulse o… [+6292 chars]"
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
    "name": "Sportskeeda"
    },
    "author": "Brandon Moore",
    "title": "How to get Goldmask’s Armor Set in Elden Ring - Sportskeeda",
    "description": "Goldmask's Armor Set has good stats, regardless of how little it covers the player in Elden Ring.",
    "url": "https://www.sportskeeda.com/esports/how-get-goldmask-s-armor-set-elden-ring",
    "urlToImage": "https://staticg.sportskeeda.com/editor/2022/05/913b1-16519409691423-1920.jpg",
    "publishedAt": "2022-05-08T08:23:26Z",
    "content": "Goldmask's Armor Set has good stats, regardless of how little it covers the player in Elden Ring.\r\nThe set doesn't leave much to the imagination as it contains just a mask, some rags over the shoulde… [+2728 chars]"
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
    "name": "The Indian Express"
    },
    "author": "Tech Desk",
    "title": "Apple, Google and Microsoft expand FIDO standard support for passwordless sign-ins - The Indian Express",
    "description": "According to the FIDO Alliance, this new approach will protect against phishing, making sign-ins more secure when compared to passwords and legacy multi-factor authentication technologies such as OTPs",
    "url": "https://indianexpress.com/article/technology/tech-news-technology/apple-google-and-microsoft-expand-fido-standard-support-for-passwordless-sign-ins-7906391/",
    "urlToImage": "https://images.indianexpress.com/2022/05/Apple-google-microsoft-google-FIDO-alliance-featured.jpg",
    "publishedAt": "2022-05-08T08:14:53Z",
    "content": "Apple, Google and Microsoft have announced plans to expand support for a common passwordless sign-in standard created by the FIDO Alliance and the World Wide Web Consortium. The FIDO Alliance is an o… [+1780 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Siasat Daily"
    },
    "author": "IANS",
    "title": "iOS 15.5 to reintroduce Apple Music API for 3rd-party apps - The Siasat Daily",
    "description": "San Francisco: Tech giant Apple, which disabled the ability to change the playback speed in third-party apps using the Apple Music API and its content with iOS 15.4, has now decided to reintroduce that feature with iOS 15.5. The word comes from Apple develope…",
    "url": "https://www.siasat.com/ios-15-5-to-reintroduce-apple-music-api-for-3rd-party-apps-2322738/",
    "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2021/11/apple-music.jpg",
    "publishedAt": "2022-05-08T08:08:00Z",
    "content": "San Francisco: Tech giant Apple, which disabled the ability to change the playback speed in third-party apps using the Apple Music API and its content with iOS 15.4, has now decided to reintroduce th… [+1028 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Asianetnews.com"
    },
    "author": "Team Newsable",
    "title": "Here's why Apple has agreed to pay $20 million as compensation to iPhone 4S users - Asianet Newsable ",
    "description": "According to reports, the case against Apple was launched in December 2015 by a group of iPhone 4S users from New York and New Jersey. This isn't the first time Apple has been accused of intentionally slowing down iPhones.",
    "url": "https://newsable.asianetnews.com/technology/here-s-why-apple-has-agreed-to-pay-usd-20-million-as-compensation-to-iphone-4s-users-gcw-rbk0m5",
    "urlToImage": "https://static-ai.asianetnews.com/images/01g2f6pavdn5rzjx75j1cqhbcn/600--18-_1200x630xt.jpg",
    "publishedAt": "2022-05-08T07:54:05Z",
    "content": "According to reports, the case against Apple was launched in December 2015 by a group of iPhone 4S users from New York and New Jersey. This isn't the first time Apple has been accused of intentionall… [+2190 chars]"
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
    "id": null,
    "name": "Notebookcheck.net"
    },
    "author": "Ricci Rox",
    "title": "iPhone 14 Pro: Leak reveals complete specs and increased pricing of Apple's smaller Pro model - Notebookcheck.net",
    "description": "A new leak has now provided insight into Apple's upcoming flagship smartphone, the iPhone 14 Pro. While the phone will get the new 48 MP camera, it appears buyers will bear the cost of that, with a price bump versus last year's model seemingly on the cards.",
    "url": "https://www.notebookcheck.net/iPhone-14-Pro-Leak-reveals-complete-specs-and-increased-pricing-of-Apple-s-smaller-Pro-model.617725.0.html",
    "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_13_pro_trusted_reviews_7.jpeg",
    "publishedAt": "2022-05-08T07:37:38Z",
    "content": "After providing comprehensive details of the upcoming iPhone 14 Max days ago, tipster @Shadow_Leak has now set his sights on the iPhone 14 Pro, revealing major details of the flagship well ahead of l… [+1131 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Newstracklive.com"
    },
    "author": "Laxman Chaurasiya",
    "title": "Big news for smartphone users, Vivos new mobile is going to be launched on this day - News Track English",
    "description": "In today's time, almost all of us are going to have a smartphone. If your smartphone is a bit outdated or you are engaged in looking for a new phone we have a piece of good news for you. Vivo is going to introduce a new smartphone, the Vivo Y75 4G, in India t…",
    "url": "https://english.newstracklive.com/news/big-news-for-smartphone-users-vivos-new-mobile-is-going-to-be-launched-on-this-day-sc84-nu901-ta322-1227560-1.html",
    "urlToImage": "https://media.newstrack.in/uploads/latest-news/world-news/May/10/big_thumb/Vivo_609905cb01919.jpg",
    "publishedAt": "2022-05-08T07:13:13Z",
    "content": "In today's time, almost all of us are going to have a smartphone. If your smartphone is a bit outdated or you are engaged in looking for a new phone we have a piece of good news for you. Vivo is goin… [+1375 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "India Today"
    },
    "author": null,
    "title": "Garena Free Fire Redeem MAX Codes for May 08, 2022: How to redeem the codes - India Today",
    "description": "Here is all you need to know about the new active codes for the list of New Garena Free Fire Redeem MAX codes and steps to redeem them.",
    "url": "https://www.indiatoday.in/information/story/garena-free-fire-redeem-max-codes-for-may-08-2022-how-to-redeem-the-codes-1946809-2022-05-08",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/mobile-phone-5922635_1920-647x363.jpeg?f8Ya41J537RP7EHwdOyaNXKOL2XpI733",
    "publishedAt": "2022-05-08T06:48:13Z",
    "content": null
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "ET Telecom",
    "title": "Google Assistant can now auto-update breached passwords - ETTelecom",
    "description": "According to Android Police, last year, Google had announced that it would be introducing a feature in Chrome for Android that would allow Assistant to help users change stolen passwords in a few taps.",
    "url": "https://telecom.economictimes.indiatimes.com/news/google-assistant-can-now-auto-update-breached-passwords/91413112",
    "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-91413112,imgsize-285196,width-1200,height-628,overlay-ettelecom/google-assistant-can-now-auto-update-breached-passwords.jpg",
    "publishedAt": "2022-05-08T05:38:00Z",
    "content": "San Francisco: Tech giantGoogle's virtual assistant software application Assistant can now warn users when they need to change their password, and can even help them change it.According to Android Po… [+1320 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "ET Telecom",
    "title": "Amazon stops selling e-books on Android app amid new Google Play policy - ETTelecom",
    "description": "According to a report by ArsTechnica, users planning to buy ebooks on the Amazon app on Android are directed to a new screen that says 'Why can't I buy on the app?'",
    "url": "https://telecom.economictimes.indiatimes.com/news/amazon-stops-selling-e-books-on-android-app-amid-new-google-play-policy/91412957",
    "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-91412957,imgsize-17514,width-1200,height-628,overlay-ettelecom/amazon-stops-selling-e-books-on-android-app-amid-new-google-play-policy.jpg",
    "publishedAt": "2022-05-08T05:30:00Z",
    "content": "San Francisco: As Google prepares to require all app developers on Play Store to comply with its new billing policy, Amazon is turning off digital book purchases via its Android app.According to a re… [+1207 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "India.com"
    },
    "author": null,
    "title": "iPhone 13 price further drops on Amazon, Flipkart; best time to upgrade? - Zee News",
    "description": "Apple iPhone 13 is available at just Rs Rs 52,300 on Flipkart. Read how you can buy the latest flagship device at such an attractive price.",
    "url": "https://zeenews.india.com/photos/business/iphone-13-price-further-drops-on-amazon-flipkart-best-time-to-upgrade-smartphone-2461362",
    "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/05/08/1040135-untitled-design-88.jpg",
    "publishedAt": "2022-05-08T05:23:31Z",
    "content": "New Delhi: Apple iPhone 13 has received a massive price cut on Amazon and Flipkart as the e-commerce giants enter the last few days of the ongoing online sales. The price of the flagship smartphone, … [+229 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SocialNews.XYZ"
    },
    "author": null,
    "title": "Samsung Galaxy Book Go targets students, office goers in hybrid normal - Social News XYZ",
    "description": "By Vivek Singh Chauhan New Delhi, May 8 (SocialNews.XYZ) In a bid to make headways in the highly-competitive laptop market in the country dominated by the likes of HP, Lenovo and Dell, tech giant Samsung... - Social News XYZ",
    "url": "https://www.socialnews.xyz/2022/05/08/samsung-galaxy-book-go-targets-students-office-goers-in-hybrid-normal/",
    "urlToImage": "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/05/08/72854ce0ce61dfaefb1aa22541c1b48d.jpg?fit=1500%2C1500&quality=80&zoom=1&ssl=1",
    "publishedAt": "2022-05-08T05:21:33Z",
    "content": "Home » General » Study » Samsung Galaxy Book Go targets students, office goers in hybrid normal\r\nBy Vivek Singh Chauhan\r\nNew Delhi, May 8 (SocialNews.XYZ) In a bid to make headways in the highly-comp… [+2189 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "Anuj Bhatia",
    "title": "5 biggest mistakes to avoid while buying a smartphone - The Indian Express",
    "description": "Smartphone buying can be a tiresome process for many. Here are the five mistakes to avoid while buying a smartphone.",
    "url": "https://indianexpress.com/article/technology/mobile-tabs/5-biggest-mistakes-to-avoid-while-buying-a-smartphone-7906162/",
    "urlToImage": "https://images.indianexpress.com/2022/05/5-mistakes-to-avoid-purchasing-smartphone-featured.jpg",
    "publishedAt": "2022-05-08T05:17:27Z",
    "content": "On a recent trip to a mall, I overheard someone saying, I wish I had chosen a phone with a better selfie camera. The geek in me wanted to have a quick chat with the person but I controlled my emotion… [+4413 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Zee Business"
    },
    "author": "ANI",
    "title": "Newly launched Vivo T1 Pro goes on sale in India - check specifications and prices - Zee Business",
    "description": "Vivo T1 Pro, launched a few days ago, is now available through the official website of Flipkart, and retail stores nationwide.",
    "url": "https://www.zeebiz.com/technology/news-newly-launched-vivo-t1-pro-available-to-purchase-in-india-check-specifications-and-prices-184258",
    "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2022/05/08/181834-vivo-t1-pro-twitter.jpg",
    "publishedAt": "2022-05-08T05:12:30Z",
    "content": "Vivo T1 Pro, launched a few days ago, is now available through the official website of Flipkart, and retail stores nationwide.\r\nAvailable in Turbo Cyan and Turbo Black colours, the T1 Pro has two sto… [+752 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deccan Herald"
    },
    "author": "DH Web Desk",
    "title": "Gadgets Weekly: Sony Bravia X75K 4K TV, Garmin Vívomove Sport watch and more - Deccan Herald",
    "description": "Technology companies such as Sony, Vivo, Garmin, Motorola, and JBL, among others launched a new line of smartphones, smart TVs, earphones, and more this week (May 2-8). DH's Gadgets Weekly edition lists the latest prominent personal technology products to kee…",
    "url": "https://www.deccanherald.com/business/technology/gadgets-weekly-sony-bravia-x75k-4k-tv-garmin-v-vomove-sport-watch-and-more-1107033.html",
    "urlToImage": "https://www.deccanherald.com/sites/dh/files/articleimages/2022/05/08/sony-bravia-x75k-4k-ultra-hd-led-tv-cs-2-1107033-1651971604.jpg",
    "publishedAt": "2022-05-08T00:46:04Z",
    "content": "Technology companies such as Sony, Vivo, Garmin, Motorola, and JBL, among others launched a new line of smartphones, smart TVs, earphones, and more this week (May 2-8).\r\nDH's Gadgets Weekly edition l… [+8340 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Bollyinside.com"
    },
    "author": null,
    "title": "Best Samsung true Wireless Earbuds of 2022 May - BollyInside",
    "description": "This list is about the Best Samsung true Wireless Earbuds. We will try our best so that you understand this list Best Samsung true Wireless Earbuds. I",
    "url": "https://www.bollyinside.com/articles/best-samsung-true-wireless-earbuds/",
    "urlToImage": "https://www.bollyinside.com/articles/wp-content/uploads/sites/4/2022/05/Best-Samsung-true-Wireless-Earbuds.jpg",
    "publishedAt": "2022-05-07T23:44:29Z",
    "content": "This list is about the Best Samsung true Wireless Earbuds. We will try our best so that you understand this list Best Samsung true Wireless Earbuds. I hope you like this list Best Samsung true Wirele… [+6058 chars]"
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
      <div className="container my-3">
        <div className="bollywoodAdBox"> Advertistement</div>
        <h3 className="smallHeading">Latest Tech News</h3>


        <div className="row">
        {this.state.articles.map((element) =>{
            return  <div className="col-md-4"   key={element.url}>
            <TechnologyItems 
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        })}   
        </div>
      </div>
    );
  }
}
export default Technology;

