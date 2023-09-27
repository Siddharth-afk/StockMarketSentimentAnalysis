from flask import Flask, redirect, url_for, request, render_template, jsonify
import pandas as pd
from textblob import TextBlob
import numpy as np
import re
import matplotlib.pyplot as plt
import emoji
import snscrape.modules.twitter as sntwitter

app = Flask(__name__)
 
""" #members api routes

@app.route("/members")
def members():
    return{"members": []} """

@app.route("/twitter", methods=['POST', 'GET'])
def test():
    posts = []
    data = request.json['data']
    for i, tweets in enumerate(sntwitter.TwitterSearchScraper(f"{data}").get_items()):
        if i > 10:
            break
        posts.append(tweets.content)

    df = pd.DataFrame([i for i in posts], columns = ["tweets"])

    def clean(text):
        text = emoji.demojize(text, delimiters=("", ""))
        text = re.sub(r'@[_a-zA-Z0-9]+',  '', text)
        text = re.sub(r'#', '', text)
        text = re.sub(r'RT[\s]+', '', text)
        text = re.sub(r'https?:\/\/\S+', '', text)

        return text
    
    df["tweets"] = df["tweets"].apply(clean)


    return(df.to_json())


if __name__ == "__main__":
    app.run(debug=True)