import { ReactComponent as Buy } from './buy.svg';
import { ReactComponent as Cash } from './cash.svg';
import { ReactComponent as Room } from './room.svg';
import { ReactComponent as Mortgage } from './mortgage.svg';
import { ReactComponent as Grade } from './grade.svg';
import { ReactComponent as Low } from './low.svg';
import { useState } from 'react';

function Main(){
 

  return(
    <div className="container">
      <div className="main-bcg">
        <div className="main-info">
          <h1>Купить квартиру <br/> в Мурманске</h1>
          <div className=""></div>
        </div>
        <div className="main-nav">
          <ul>
            <li>
              <Buy/>
              Купить</li>
            <li>
              <Cash/>
              Продать</li>
            <li><Room/>Снять</li>
            <li><Mortgage/>Ипотека</li>
            <li><Grade/>Оценка</li>
            <li><Low/>Юридические услуги</li>
          </ul>
        </div>
        
      </div>
     
     

      

    </div>
  )
}

export default Main;