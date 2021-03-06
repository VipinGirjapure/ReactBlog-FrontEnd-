import React, { Component } from "react";
import HollywoodItems from "./HollywoodItems";

class Hollywood extends Component {
  articles =  [
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "Sam Hunt Divorce from Pregnant Wife Called Off - TMZ",
    "description": "Sam Hunt is no longer getting divorced from his pregnant wife.",
    "url": "https://www.tmz.com/2022/05/08/sam-hunt-divorce-called-off-pregnant-wife/",
    "urlToImage": "https://imagez.tmz.com/image/95/16by9/2022/05/06/9559b1959aa94b11a9ce7e084b8a459b_xl.jpg",
    "publishedAt": "2022-05-08T08:00:00Z",
    "content": "Sam Huntand his wife called off their divorce and all signs point to reconciliation.\r\nAccording to new legal docs, obtained by TMZ, Sam's wife, Hannah Lee Fowler, asked the court to dismiss the divor… [+1189 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Marco della Cava, USA TODAY",
    "title": "'SNL' riffs on Roe v. Wade, abortion with Benedict Cumberbatch opening - USA TODAY",
    "description": "'SNL' dove into the leaked Supreme Court decision on Roe v. Wade and abortion rights as Benedict Cumberbatch hosted.",
    "url": "https://www.usatoday.com/story/entertainment/tv/2022/05/08/snl-cold-open-features-benedict-cumberbatch-tackling-roe-v-wade/9695231002/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2022/05/03/USAT/cf1a292e-ab30-43ee-a9e2-e018f09b307f-Doctor_Strange_2_exclusive.jpg?auto=webp&crop=3037,1708,x529,y0&format=pjpg&width=1200",
    "publishedAt": "2022-05-08T05:37:31Z",
    "content": "Little surprise \"Saturday Night Live\" kicked off its Mother's Day episode by tackling one of the biggest news stories of the year: the leaked Supreme Court draft opinion suggesting it is poised to ov… [+1430 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Deadline"
    },
    "author": "Matt Grobar",
    "title": "‘SNL’: Benedict Cumberbatch Jokes About Being “Beat By Will Smith” At Oscars, Pays Mother’s Day Tribute To Mother And Wife In Opening Monologue - Deadline",
    "description": "Benedict Cumberbatch tonight made his second appearance as host of SNL, alluding in his opening monologue to his new film Doctor Strange in the Multiverse of Madness, which hit theaters in the U.S. on Friday. “I am thrilled to be back hosting Saturday Night L…",
    "url": "https://deadline.com/2022/05/snl-benedict-cumberbatch-talks-doctor-strange-in-opening-monologue-1235018654/",
    "urlToImage": "https://deadline.com/wp-content/uploads/2022/05/Image-2-e1651981361288.jpeg?w=1024",
    "publishedAt": "2022-05-08T04:11:00Z",
    "content": "Benedict Cumberbatch tonight made his second appearance as host ofSNL, alluding in his opening monologue to his new film Doctor Strange in the Multiverse of Madness, which hit theaters in the U.S. on… [+3428 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Mail"
    },
    "author": "Sonia Horon",
    "title": "Britney Spears gives a peek at her WEDDING VEIL ahead of nuptials to fiancé Sam Asghari - Daily Mail",
    "description": "Britney Spears decided to give fans a sneak peek at her wedding veil ahead of her upcoming nuptials to fiance Sam Asghari.",
    "url": "https://www.dailymail.co.uk/tvshowbiz/article-10793791/Britney-Spears-gives-peek-WEDDING-VEIL-ahead-nuptials-fianc-Sam-Asghari.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/08/04/57540927-0-image-a-102_1651980413219.jpg",
    "publishedAt": "2022-05-08T03:48:57Z",
    "content": "Britney Spears decided to give fans a sneak peek at her wedding veil ahead of her upcoming nuptials to fiance Sam Asghari.\r\nThe princess of pop, 40, took to her Instagram on Saturday to share an ador… [+7500 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hollywood Reporter"
    },
    "author": "Ryan Gajewski",
    "title": "David Letterman Pokes Fun at Dave Chappelle Attack: “How Many of You Would Like to Hit Me?” - Hollywood Reporter",
    "description": "David Letterman took the stage for a Netflix Is a Joke Festival event Friday and appeared to respond to the recent attack on Dave Chappelle at the Hollywood Bowl. Letterman hosted a live comedy show from the Fonda Theatre in Los Angeles that also featured fel…",
    "url": "https://www.hollywoodreporter.com/tv/tv-news/david-letterman-netflix-dave-chappelle-attack-1235142736/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/GettyImages-666008918.jpg?w=1024",
    "publishedAt": "2022-05-08T03:27:24Z",
    "content": "David Letterman took the stage for a Netflix Is a Joke Festival event Friday and appeared to respond to the recent attack on Dave Chappelle at the Hollywood Bowl.\r\nLetterman hosted a live comedy show… [+1982 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Mail"
    },
    "author": "Deirdre Simonds",
    "title": "Amy Schumer cancels Netflix is a Joke Festival performance after testing positive for COVID-19 - Daily Mail",
    "description": "Amy Schumer was forced to cancel her performance at the 2022 Netflix Is A Joke Festival just hours before she was scheduled to hit the stage after testing positive for COVID-19.",
    "url": "https://www.dailymail.co.uk/tvshowbiz/article-10793779/Amy-Schumer-cancels-Netflix-Joke-Festival-performance-testing-positive-COVID-19.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/08/03/57539595-0-image-a-9_1651975502933.jpg",
    "publishedAt": "2022-05-08T02:15:26Z",
    "content": "Amy Schumer was forced to cancel her performance at the 2022 Netflix Is A Joke Festival just hours before she was scheduled to hit the stage after testing positive for COVID-19.\r\nThe 40-year-old stan… [+2364 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YourTango"
    },
    "author": "Ruby Miranda",
    "title": "The 3 Zodiac Signs With Rough Horoscopes The Week Of May 9 - 15, 2022 - YourTango",
    "description": "Rough horoscopes happen, and for Gemini, Libra, and Pisces the week of May 9 -15, 2022 gets hit the hardest.",
    "url": "https://www.yourtango.com/2022350547/zodiac-signs-rough-horoscopes-week-may-9-15-2022",
    "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-rough-horoscopes-may-9-15-2022.png?itok=6CYKDLET",
    "publishedAt": "2022-05-08T02:02:35Z",
    "content": "While this week doesn't promise a complete negativity overhaul, there will be moments here and there, for some of us, where we just wish it would all STOP.\r\nThis isn't the kind of week we thought we'… [+5003 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Mail"
    },
    "author": "Kevin Kayhart",
    "title": "Priscilla Presley was brought to TEARS after learning Lisa Marie 'loved' new Elvis biopic - Daily Mail",
    "description": "The King of Rock and Roll's only child, Lisa Marie Presley, is giving director Baz Luhrmann's new Elvis biopic her seal of approval.",
    "url": "https://www.dailymail.co.uk/tvshowbiz/article-10793639/Priscilla-Presley-brought-TEARS-learning-Lisa-Marie-loved-new-Elvis-biopic.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/08/02/57539081-0-image-a-50_1651973444547.jpg",
    "publishedAt": "2022-05-08T01:51:47Z",
    "content": "The King of Rock and Roll's only child, Lisa Marie Presley, is giving director Baz Luhrmann's new Elvis biopic her seal of approval.\r\nIn an Instagram post on Friday, the rock icon's ex-wife Priscilla… [+4037 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Bill Friskics-Warren",
    "title": "Mickey Gilley, Country Star Whose Club Inspired ‘Urban Cowboy,’ Dies at 86 - The New York Times",
    "description": "Mr. Gilley, who had more than 30 chart-topping records, owned a Texas nightclub that was behind a country music revival.",
    "url": "https://www.nytimes.com/2022/05/07/arts/music/mickey-gilley-dead.html",
    "urlToImage": "https://static01.nyt.com/images/2022/05/07/multimedia/07gilley-01/07gilley-01-facebookJumbo.jpg",
    "publishedAt": "2022-05-08T01:50:08Z",
    "content": "Mickey Leroy Gilley was born on March 9, 1936, in Natchez, Miss., to Irene (Lewis) and Arthur Gilley. Raised in nearby Ferriday, La., he grew up singing gospel harmonies with his cousins Mr. Swaggart… [+1697 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HuffPost"
    },
    "author": "Mary Papenfuss",
    "title": "Watch Pete Davidson Joke About Kanye West Pulling A 'Mrs. Doubtfire' To See His Kids - HuffPost",
    "description": "“I come home one day and they’re like, this is the new housekeeper,\" Davidson imagines in a stand-up performance at the Netflix Is A Joke Festival.",
    "url": "https://www.huffpost.com/entry/pete-davidson-kim-kardashian-kanye-west-mrs-doubtfire-comedy_n_62770386e4b0b7c8f0850737",
    "urlToImage": "https://img.huffingtonpost.com/asset/627712e9260000f9278a7e68.jpeg?cache=IYexNguuQ5&ops=1778_1000",
    "publishedAt": "2022-05-08T01:42:49Z",
    "content": "Comedian Pete Davidson fired off a couple of jokes at Kanye Wests expense in a stand-up routine last week, including hoping the rapper would show up as Mrs. Doubtfire to see his four children with Ki… [+1561 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TrekMovie"
    },
    "author": null,
    "title": "Patrick Stewart Says 'Star Trek: Picard' Season 3 TNG Reunion Isn't A Walk Down Memory Lane - TrekMovie",
    "description": "The showrunner has also shared a video from the first day of production on season 3.",
    "url": "https://trekmovie.com/2022/05/07/patrick-stewart-says-star-trek-picard-season-3-tng-reunion-isnt-a-walk-down-memory-lane/",
    "urlToImage": "https://trekmovie.com/wp-content/uploads/2022/05/pic-s3-picricker-head.jpg",
    "publishedAt": "2022-05-08T01:11:43Z",
    "content": "Season three of Star Trek: Picard is bringing back the main cast of Star Trek: The Next Generation for what promises to be a “proper sendoff.” Little is known about the upcoming season, but now star … [+4436 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Dove Cameron Brings Edgy Glamour to the Red Carpet at GLAAD Media Awards 2022 - Yahoo Life",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiT2h0dHBzOi8vd3d3LnlhaG9vLmNvbS9saWZlc3R5bGUvZG92ZS1jYW1lcm9uLWJyaW5ncy1lZGd5LWdsYW1vdXItMDAwODAyNTY3Lmh0bWzSAVdodHRwczovL3d3dy55YWhvby5jb20vYW1waHRtbC9saWZlc3R5bGUvZG92ZS1jYW1lcm9uLWJyaW5ncy1lZGd5LWdsYW1vdXItMDAwODAyNTY3Lmh0bWw?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-05-08T00:45:44Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Entertainment Tonight"
    },
    "author": "Miguel A. Melendez‍",
    "title": "Anna Nicole Smith's Daughter Dannielynn Channels Her Inner Janet Jackson at Kentucky Derby Gala - Entertainment Tonight",
    "description": "Birkhead revealed Dannielynn wore an outfit that once belonged to the 'Rhythm Nation' singer.",
    "url": "https://www.etonline.com/anna-nicole-smiths-daughter-dannielynn-channels-her-inner-janet-jackson-at-kentucky-derby-gala",
    "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2022-05/GettyImages-1395855898.jpg?h=199d8c1f&itok=IZM9yZVH",
    "publishedAt": "2022-05-07T23:14:31Z",
    "content": "It doesn't get any cooler than this -- Dannielynn Birkhead got to meet Janet Jackson at a gala for the 148th annual Kentucky Derby while wearing the exact same outfit the singer once wore to the exac… [+1712 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Why Sophie Turner REFUSED Kendall Jenner's Post-Met Gala Invite - E! News",
    "description": "Sophie Turner tells Jimmy Fallon about turning down a Met Gala afterparty invite from Kendall Jenner. Watch the Game of Thrones alum relive the moment on The...",
    "url": "https://www.youtube.com/watch?v=ToAShVKEX5E",
    "urlToImage": "https://i.ytimg.com/vi/ToAShVKEX5E/maxresdefault.jpg",
    "publishedAt": "2022-05-07T22:49:39Z",
    "content": null
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "New HBO Max Drama is Certified Fresh on Rotten Tomatoes - ComicBook.com",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiZGh0dHBzOi8vY29taWNib29rLmNvbS90di1zaG93cy9uZXdzL25ldy1oYm8tbWF4LWRyYW1hLXRoZS1zdGFpcmNhc2UtY2VydGlmaWVkLWZyZXNoLXJvdHRlbi10b21hdG9lcy_SAQA?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-05-07T22:37:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "The A.V. Club"
    },
    "author": "William Hughes",
    "title": "R.I.P. legendary comics artist George Pérez - The A.V. Club",
    "description": "Known for New Teen Titans, Crisis On Infinite Earths, Wonder Woman, and more, Pérez was one of the most influential artists in comics history",
    "url": "https://www.avclub.com/rip-george-perez-legendary-comics-artist-1848896215",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eb0bf658402ae1f6633a9d2bde77eeb0.jpg",
    "publishedAt": "2022-05-07T22:27:00Z",
    "content": "George Pérez has died. A legendary comics artist and writer whose work defined the looks of many of both DC and Marvels biggest comics from the mid-70s onward, Pérez was celebrated for runs on Avenge… [+4408 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "Eminem's Music as Hard-Hitting as Any Metal, Rock & Roll HOF CEO Says - TMZ",
    "description": "The HOF CEO's comments about Eminem and heavy metal have sparked a fierce debate about the alternative rock genre, and whether certain artists are given priority over others based on nothing more than mainstream popularity.",
    "url": "https://www.tmz.com/2022/05/07/eminem-music-hard-hitting-metal-rock-and-roll-hof-ceo/",
    "urlToImage": "https://imagez.tmz.com/image/c0/16by9/2022/05/07/c0d0d880cde24ef89588a9c6879ec05d_xl.jpg",
    "publishedAt": "2022-05-07T22:08:00Z",
    "content": "Eminem packs just as much of a punch as any heavy metal band out there -- at least that's what the guy who runs the Rock &amp; Roll HOF says ... which isn't going over so well.\r\nGreg Harris -- the CE… [+2163 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YourTango"
    },
    "author": "Ruby Miranda",
    "title": "Each Zodiac Sign's Horoscope For The Week Of May 9 - 15, 2022 - YourTango",
    "description": "Each zodiac sign's horoscope for the week of Monday, May 9, 2022, to May 15, 2022, is here an astrology forecast during Mercury retrograde.",
    "url": "https://www.yourtango.com/2022350602/each-zodiac-signs-horoscope-week-may-9-15-2022",
    "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-horoscope-week-may-9-15-2022.jpg?itok=PwTD59A1",
    "publishedAt": "2022-05-07T22:05:05Z",
    "content": "Welcome to each zodiac sign's horoscope for the week of Monday, May 9 to Sunday, May 15, 2022 during Mercury retrograde.\r\nSo what's in store for each zodiac sign this week, according to astrology?\r\nT… [+7678 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TheWrap"
    },
    "author": "Andi Ortiz",
    "title": "Moon Knight Star May Calamawy Talks Becoming Scarlet Scarab - TheWrap",
    "description": "The actress also tells TheWrap where she hopes Layla El-Faouly will fit in with the women of the MCU",
    "url": "http://www.thewrap.com/moon-knight-scarlet-scarab-layla-may-calamawy-interview/",
    "urlToImage": "https://www.thewrap.com/wp-content/uploads/2022/05/Layla.jpg",
    "publishedAt": "2022-05-07T21:30:10Z",
    "content": "WARNING: Major spoilers ahead for “Moon Knight” on Disney+\r\n“Doctor Strange in the Multiverse of Madness” isn’t the only Marvel property that introduced fans to a new hero this week. Over on the seas… [+12916 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Daily Mail"
    },
    "author": "Peter Sheridan",
    "title": "Netflix anger at the Sussexes' interviews with its TV rivals - Daily Mail",
    "description": "The MoS understands there was 'a real sense of annoyance' when Prince Harry last month revealed details of his meeting with the Queen at Windsor Castle during an interview with NBC.",
    "url": "https://www.dailymail.co.uk/news/article-10793047/Netflix-anger-Sussexes-interviews-TV-rivals.html",
    "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/07/20/57530589-0-image-a-38_1651951717959.jpg",
    "publishedAt": "2022-05-07T21:10:46Z",
    "content": "Netflix chiefs are said to be exasperated by the decision of the Duke and Duchess of Sussex to give bombshell interviews to rival television networks despite having a multi-million-dollar deal with t… [+2669 chars]"
    }
    ]
    

  constructor() {
    super();
    // console.logs Hollywood Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
         <div className="bollywoodAdBox"> Advertistement</div>
         <h3 className="smallHeading">Latest Hollywood News</h3>


        <div className="row">
        {this.state.articles.map((element) =>{
            return  <div className="col-md-4"   key={element.url}>
            <HollywoodItems 
          
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
export default Hollywood;

