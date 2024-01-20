#import the libraries
import feedparser
import pymongo

#connect the database
myclient = pymongo.MongoClient("mongodb://mongo_db:27017/")
mydb = myclient["CyberWebsite"]
mycol = mydb["Articles"]

#define articles as empty array
articles = []

#function to get news articles from google news
class googleNewsFeedScraper:
    def __init__(self, query):
        self.query = query

    def scrape_google_news_feed(self):
        rss_url = f'https://news.google.com/rss/search?q={self.query}&hl=en-US&gl=US&ceid=US:en'
        feed = feedparser.parse(rss_url)

        if feed.entries:
            for entry in feed.entries:
                title = entry.title
                link = entry.link
                pubdate = entry.published
                source = entry.source
                newsarticle = {
                    'title': title,
                    'link': link,
                    'pubdate': pubdate,
                    'source': source
                    }
                articles.append(newsarticle)
        else:
            print("Nothing Found!")

if __name__ == "__main__":
    query = 'cyber'
    scraper = googleNewsFeedScraper(query)
    scraper.scrape_google_news_feed()
    

#save the articles in mongodb
x = mycol.insert_many(articles)