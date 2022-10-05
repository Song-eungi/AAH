from turtle import title
import pandas as pd 
import numpy as np 
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from traitlets.traitlets import enum
import sys
import pickle
df = pd.read_csv("C:/Users/USER/Downloads/dff.csv", thousands=',',encoding='utf-8')
data = pd.read_csv("C:/Users/USER/Downloads/data (1).csv", thousands=',',encoding='utf-8')
item_sim_df = pd.read_csv("C:/Users/USER/Downloads/item_sim_df.csv", thousands=',',encoding='utf-8')
tfidv_df = pd.read_csv("C:/Users/USER/Downloads/tfidv_df.csv", thousands=',',encoding='utf-8')


item_sim = cosine_similarity(tfidv_df, tfidv_df)

indecies = pd.Series(data.index, index=data['PRDUCT']).drop_duplicates()
# print(indecies['Dr.Kwon 7요일 7색깔 단호박맛 쉐이크'])


def get_recommand(PRDUCT):
  idx = movies[movies['PRDUCT'] == PRDUCT].index[0]

  sim_scores = list(enumerate(item_sim[idx]) )

  sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

  sim_scores = sim_scores[1:11]

  pr_indices =[i[0] for i in sim_scores]

  titles=[]
  for i in pr_indices:
    # id = movies['PRDUCT'].iloc[i]
    titles.append(movies['PRDUCT'].iloc[i])
  print(titles)

  



movies = pickle.load(open('pr.pickle', 'rb'))
cosine_sim = pickle.load(open('item_sim.pickle', 'rb'))

if __name__ == '__main__':
    get_recommand(sys.argv[1])



