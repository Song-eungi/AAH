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
# print(indecies['Dr.Kwon 7요일 7색깔 단호박맛 쉐이크'])

def get_recommand(PRDUCT):
  idx =indecies[PRDUCT]

  sim_scores = list(enumerate(item_sim[idx]) )

  sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

  sim_scores = sim_scores[1:11]

  pr_indices =[i[0] for i in sim_scores]

  choice = []
  for i in range(10):
      choice.append(data['PRDUCT','MAIN_FNCTN'][pr_indices[i]])
    # 가장 유사한 10개 제목을 리턴합니다.
  # print('***영양제 추천 순위***')
  js=json.dumps(choice)
  print(js)
  # for i in range(10):
  #     print('  > ' + choice[i])

  
  # print(str(i+1) + ' : ' + choice[i])
  # for i in titles:
  #   print(i)
  

# movies = pickle.load(open('pr.pickle', 'rb'))
# cosine_sim = pickle.load(open('item_sim.pickle', 'rb'))

if __name__ == '__main__':
    get_recommand(sys.argv[1])





