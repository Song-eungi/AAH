from turtle import title
import pandas as pd 
import numpy as np 
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from traitlets.traitlets import enum
import sys
import pickle
import json
df = pd.read_csv("C:/Users/USER/Downloads/dff.csv", thousands=',',encoding='utf-8')
data = pd.read_csv("C:/Users/USER/Downloads/data (1).csv", thousands=',',encoding='utf-8')
item_sim_df = pd.read_csv("C:/Users/USER/Downloads/item_sim_df.csv", thousands=',',encoding='utf-8')
tfidv_df = pd.read_csv("C:/Users/USER/Downloads/tfidv_df.csv", thousands=',',encoding='utf-8')
item_sim = cosine_similarity(tfidv_df, tfidv_df)
indecies = pd.Series(data.index, index=data['PRDUCT']).drop_duplicates()

def get_recommand(PRDUCT):
  idx =indecies[PRDUCT]

  sim_scores = list(enumerate(item_sim[idx]) )

  sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

  sim_scores = sim_scores[1:11]

  pr_indices =[i[0] for i in sim_scores]

  choice = []
  for i in range(10):
      choice.append(data['PRDUCT'][pr_indices[i]])

    # 가장 유사한 10개 제목을 리턴합니다.
  js=json.dumps(choice)
  print(js)

if __name__ == '__main__':
    get_recommand(sys.argv[1])





