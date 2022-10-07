/* eslint-disable */ // 경고창 제거기능

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; //변수(post)에 있는 데이터를 잠시 보관한다.

  // state 사용법
  // 1.imprt { useState }
  // 2. useState(보관할 자료)
  // 3.let[작명, 작명]
  let [글제목,b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); // array 자료형식
  // a는 state에 보관했던 자료 나옴(작명시 직관적인게 좋음)
  // b는 state 변경 도와주는 함수

  // Q. 왜 state 문법 써야하나?
  // -> 일반 변수는 갑자기 변경되면 html에 자동으로 반영x
  // -> state는 갑자기 변경되면 state 쓰던 html은 자동 리랜더링 됨.

  // Q. state 언제 써야하나?
  // -> 변동시 자동으로 html에 반영되게 만들고 싶으면 state 사용.(자주 변경될거 같은 html부분)

// JSX문법1. class 넣을땐 className
// JSX문법2. 변수 꽂을땐 {변수명}
// JSX문법3. style={{이름:'값'}}

  let [따봉, 따봉변경] = useState(0);

  // state 변경하는 법 (등호로 변경금지)

  let [여자, 여자변경] = useState('여자 코트 추천')

  function 함수(){ // 긴 코드를 한 단어로 묶어주는 문법
    console.log(1);
  }

// 1. onClick 쓰는법. onClick={}안에 함수 넣어야함.
// 2. state 변경하는 법. -> 항상 state 변경함수 쓰기-> 새로운 변경함수(새로운state)

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize: '16px'}}>블로그임</h4>
         {/*오브젝트형 자료형식. style 넣을땐 stle={{스타일명:'값'}}    */}
      </div>
      <div className="list">
        <h4>{글제목[0]} <span onClick={ () => {따봉변경(따봉+1)} }>👍</span> {따봉} </h4> 
        {/* onClick={}안엔 함수이름을 넣어야함. 함수 만드는 문법도 바로 가능onClick={ function(){ console.log(1)} }*/}
        {/* () => { 함수 } 함수 만드는 문법. */}
        <p>2월 17일 발행</p>
      </div>

      <button>글수정</button>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>블로그</h4>
    </div>
  );
}

export default App;
