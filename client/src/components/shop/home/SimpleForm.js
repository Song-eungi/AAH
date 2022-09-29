import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';


//////  고쳐야 할 부분  ////////////
//////  1. import link 변경하기 ////
//////  2. url 바뀌는지 확인 해야됨

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: '안녕하세요. AAH 챗봇입니다.',
            trigger: '2',
          },
    
          {
            id: '2',
            message: '무엇을 도와드릴까요?',
            trigger:'choice',
          },
          {
            id:'choice',
            options: [
              { 
                value: 1,
                label: '영양제 카테고리',
                trigger: 'category'
              },
              { 
                value: 2,
                label: '주문 내역',
                trigger: 'orderpage-msg'
              },
              { 
                value: 3, 
                label: '나의 정보 수정', 
                trigger: 'profile-msg' 
              },
            ],
          },
          ///////// 카테고리 선택시   //////////////
          {
            id:'category',
            message: '도움이 필요한 카테고리를 고르세요',
            trigger : 'category-list'
          },
          {
            id:'category-list',
            options: [
              { 
                value: 1,
                label: '장',
                component:<a href='/products/category/6321ac9dbcaa9f0f9066f9c5'> <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAVvE3%2FbtrNgbg6qnX%2FMLadkLiEnfOOeffu6djoV1%2Fimg.png" className='w-12 h-12'></img></a>,
                end:true,
              },
              { 
                value: 2,
                label: '다이어트',
                component:<a href='/products/category/6321ac80bcaa9f0f9066f9c1'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F07eXw%2FbtrNmzUkJNw%2F5fcUv5QBBuqhHQMnekAU60%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
              { 
                value: 3,
                label: '혈압',
                component:<a href='/products/category/6321ac70bcaa9f0f9066f9bd'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc6ch86%2FbtrNmyA7T2y%2FXPs8wbqwONQENztJDaM2z0%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
              { 
                value: 4,
                label: '혈당',
                component:<a href='/products/category/6321ac63bcaa9f0f9066f9b9'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkCCV9%2FbtrNhhajFIQ%2FZI1PAaoXKhuYziKruAkeP1%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
              { 
                value: 5,
                label: '눈',
                component:<a href='/products/category/6321ac48bcaa9f0f9066f9b1'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGZj8o%2FbtrNjpSBnju%2FlPjIBcAW41lzVfX775cTR0%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
              { 
                value: 6,
                label: '수면',
                component:<a href='/products/category/6321ac63bcaa9f0f9066f9b9'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcMFgyb%2FbtrNjp58Hbz%2FMbZYK4qzGJGrKps1XYT46K%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
              { 
                value: 7,
                label: '간',
                component:<a href='/products/category/6321ac2dbcaa9f0f9066f9ad'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOAs8s%2FbtrNj92Th3k%2Fn3OCqKIyMOgusyzkqTclTk%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
              { 
                value: 8,
                label: '뼈',
                component:<a href='/products/category/6321ac1dbcaa9f0f9066f9a9'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbOxyft%2FbtrNlRgwc4o%2Fpm1rCEu2BnB7C7tldNnkj0%2Fimg.png" className="w-12 h-12"></img></a>,
                end:true,
              },
            ],
          },
          ///////// 각 카테고리 선택시   //////////////
          /// 만들까 말까....
          // {
          //   id:'orderpage-msg',
          //   message: '도움이 필요한 카테고리를 고르세요',
          //   trigger : 'category-list'
          // },
          // {
          //   id:'category-list',
          //   options: [
          //     { 
          //       value: 1,
          //       // label: '장',
          //       component:<a href='/products/category/6321ac9dbcaa9f0f9066f9c5'> <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAVvE3%2FbtrNgbg6qnX%2FMLadkLiEnfOOeffu6djoV1%2Fimg.png" className='w-12 h-12'></img></a>,
          //       end:true,
          //     },
          //     { 
          //       value: 2,
          //       // label: '다이어트',
          //       component:<a href='/products/category/6321ac80bcaa9f0f9066f9c1'><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F07eXw%2FbtrNmzUkJNw%2F5fcUv5QBBuqhHQMnekAU60%2Fimg.png" className="w-12 h-12"></img></a>,
          //       end:true,
          //     },

          ///////// 주문 내역 선택시   //////////////
          {
            id:'orderpage-msg',
            // message: '주문 내역 페이지로 이동합니다.',
            component:<a href='/user/orders'><p className='chatp'>ORDER</p></a>,
            end:true,
          },
          ///////// 정보 수정 선택시   //////////////
          {
            id:'profile-msg',
            // message: '정보 수정 페이지로 이동합니다.',
            component:<a href='/user/setting'><p className='chatp'>MODIFY</p></a>,
            end:true,
          },
          /////////   종료   //////////////
          {
            id: 'end-msg',
            message: '종료',
            end:true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;