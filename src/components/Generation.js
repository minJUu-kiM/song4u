import '../styles/Generation.css';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import January2023 from './January2023';

const Generation = () => {
  let [toggle, setToggle] = useState(131);
   
  return(
    <div>
      <div className='GenerationRe'>
        <div className='Generation_Year'>
        <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2023
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(131)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(132)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(133)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(134)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(135)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(136)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(137)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(138)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(139)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(140)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(141)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(142)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2022
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(117)}>2022년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(118)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(119)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(120)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(121)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(122)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(123)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(124)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(125)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(126)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(127)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(128)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(129)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2021
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(104)}>2021년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(105)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(106)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(107)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(108)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(109)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(110)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(111)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(112)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(113)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(114)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(115)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(116)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2020
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(91)}>2020년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(92)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(93)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(94)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(95)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(96)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(97)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(98)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(99)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(100)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(101)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(102)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(103)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2019
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(78)}>2019년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(79)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(80)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(81)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(82)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(83)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(84)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(85)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(86)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(87)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(88)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(89)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(90)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2018
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(65)}>2018년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(66)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(67)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(68)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(69)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(70)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(71)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(72)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(73)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(74)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(75)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(76)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(77)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2017
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(52)}>2017년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(53)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(54)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(55)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(56)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(57)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(58)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(59)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(60)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(61)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(62)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(63)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(64)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2016
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(39)}>2016년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(40)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(41)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(42)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(43)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(44)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(45)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(46)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(47)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(48)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(49)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(50)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(51)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
     
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2015
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(26)}>2015년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(27)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(28)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(29)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(30)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(31)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(32)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(33)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(34)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(35)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(36)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(37)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(38)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2014
        </Dropdown.Toggle>
        <Dropdown.Menu> 
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(13)}>2014년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(14)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(15)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(16)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(17)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(18)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(19)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(20)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(21)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(22)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(23)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(24)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(25)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle className='Generation_Year_Choice'>
          2013
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(0)}>2013년</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => setToggle(1)}>1월</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => setToggle(2)}>2월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(3)}>3월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(4)}>4월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(5)}>5월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(6)}>6월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(7)}>7월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(8)}>8월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(9)}>9월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(10)}>10월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(11)}>11월</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => setToggle(12)}>12월</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className='Generation_Content'>
      {toggle === 0 ? <div className='Generation_Content'>2013년</div> : null}
      {toggle === 1 ? <div className='Generation_Content'>2013년 1월</div> : null}
      {toggle === 2 ? <div className='Generation_Content'>2013년 2월</div> : null}
      {toggle === 3 ? <div className='Generation_Content'>2013년 3월</div> : null}
      {toggle === 4 ? <div className='Generation_Content'>2013년 4월</div> : null}
      {toggle === 5 ? <div className='Generation_Content'>2013년 5월</div> : null}
      {toggle === 6 ? <div className='Generation_Content'>2013년 6월</div> : null}
      {toggle === 7 ? <div className='Generation_Content'>2013년 7월</div> : null}
      {toggle === 8 ? <div className='Generation_Content'>2013년 8월</div> : null}
      {toggle === 9 ? <div className='Generation_Content'>2013년 9월</div> : null}
      {toggle === 10 ? <div className='Generation_Content'>2013년 10월</div> : null}
      {toggle === 11 ? <div className='Generation_Content'>2013년 11월</div> : null}
      {toggle === 12 ? <div className='Generation_Content'>2013년 12월</div> : null}
      {toggle === 13 ? <div className='Generation_Content'>2014년</div> : null}
      {toggle === 14 ? <div className='Generation_Content'>2014년 1월</div> : null}
      {toggle === 15 ? <div className='Generation_Content'>2014년 2월</div> : null}
      {toggle === 16 ? <div className='Generation_Content'>2014년 3월</div> : null}
      {toggle === 17 ? <div className='Generation_Content'>2014년 4월</div> : null}
      {toggle === 18 ? <div className='Generation_Content'>2014년 5월</div> : null}
      {toggle === 19 ? <div className='Generation_Content'>2014년 6월</div> : null}
      {toggle === 20 ? <div className='Generation_Content'>2014년 7월</div> : null}
      {toggle === 21 ? <div className='Generation_Content'>2014년 8월</div> : null}
      {toggle === 22 ? <div className='Generation_Content'>2014년 9월</div> : null}
      {toggle === 23 ? <div className='Generation_Content'>2014년 10월</div> : null}
      {toggle === 24 ? <div className='Generation_Content'>2014년 11월</div> : null}
      {toggle === 25 ? <div className='Generation_Content'>2014년 12월</div> : null}
      {toggle === 26 ? <div className='Generation_Content'>2015년</div> : null}
      {toggle === 27 ? <div className='Generation_Content'>2015년 1월</div> : null}
      {toggle === 28 ? <div className='Generation_Content'>2015년 2월</div> : null}
      {toggle === 29 ? <div className='Generation_Content'>2015년 3월</div> : null}
      {toggle === 30 ? <div className='Generation_Content'>2015년 4월</div> : null}
      {toggle === 31 ? <div className='Generation_Content'>2015년 5월</div> : null}
      {toggle === 32 ? <div className='Generation_Content'>2015년 6월</div> : null}
      {toggle === 33 ? <div className='Generation_Content'>2015년 7월</div> : null}
      {toggle === 34 ? <div className='Generation_Content'>2015년 8월</div> : null}
      {toggle === 35 ? <div className='Generation_Content'>2015년 9월</div> : null}
      {toggle === 36 ? <div className='Generation_Content'>2015년 10월</div> : null}
      {toggle === 37 ? <div className='Generation_Content'>2015년 11월</div> : null}
      {toggle === 38 ? <div className='Generation_Content'>2015년 12월</div> : null}
      {toggle === 39 ? <div className='Generation_Content'>2016년</div> : null}
      {toggle === 40 ? <div className='Generation_Content'>2016년 1월</div> : null}
      {toggle === 41 ? <div className='Generation_Content'>2016년 2월</div> : null}
      {toggle === 42 ? <div className='Generation_Content'>2016년 3월</div> : null}
      {toggle === 43 ? <div className='Generation_Content'>2016년 4월</div> : null}
      {toggle === 44 ? <div className='Generation_Content'>2016년 5월</div> : null}
      {toggle === 45 ? <div className='Generation_Content'>2016년 6월</div> : null}
      {toggle === 46 ? <div className='Generation_Content'>2016년 7월</div> : null}
      {toggle === 47 ? <div className='Generation_Content'>2016년 8월</div> : null}
      {toggle === 48 ? <div className='Generation_Content'>2016년 9월</div> : null}
      {toggle === 49 ? <div className='Generation_Content'>2016년 10월</div> : null}
      {toggle === 50 ? <div className='Generation_Content'>2016년 11월</div> : null}
      {toggle === 51 ? <div className='Generation_Content'>2016년 12월</div> : null}
      {toggle === 52 ? <div className='Generation_Content'>2017년</div> : null}
      {toggle === 53 ? <div className='Generation_Content'>2017년 1월</div> : null}
      {toggle === 54 ? <div className='Generation_Content'>2017년 2월</div> : null}
      {toggle === 55 ? <div className='Generation_Content'>2017년 3월</div> : null}
      {toggle === 56 ? <div className='Generation_Content'>2017년 4월</div> : null}
      {toggle === 57 ? <div className='Generation_Content'>2017년 5월</div> : null}
      {toggle === 58 ? <div className='Generation_Content'>2017년 6월</div> : null}
      {toggle === 59 ? <div className='Generation_Content'>2017년 7월</div> : null}
      {toggle === 60 ? <div className='Generation_Content'>2017년 8월</div> : null}
      {toggle === 61 ? <div className='Generation_Content'>2017년 9월</div> : null}
      {toggle === 62 ? <div className='Generation_Content'>2017년 10월</div> : null}
      {toggle === 63 ? <div className='Generation_Content'>2017년 11월</div> : null}
      {toggle === 64 ? <div className='Generation_Content'>2017년 12월</div> : null}
      {toggle === 65 ? <div className='Generation_Content'>2018년</div> : null}
      {toggle === 66 ? <div className='Generation_Content'>2018년 1월</div> : null}
      {toggle === 67 ? <div className='Generation_Content'>2018년 2월</div> : null}
      {toggle === 68 ? <div className='Generation_Content'>2018년 3월</div> : null}
      {toggle === 69 ? <div className='Generation_Content'>2018년 4월</div> : null}
      {toggle === 70 ? <div className='Generation_Content'>2018년 5월</div> : null}
      {toggle === 71 ? <div className='Generation_Content'>2018년 6월</div> : null}
      {toggle === 72 ? <div className='Generation_Content'>2018년 7월</div> : null}
      {toggle === 73 ? <div className='Generation_Content'>2018년 8월</div> : null}
      {toggle === 74 ? <div className='Generation_Content'>2018년 9월</div> : null}
      {toggle === 75 ? <div className='Generation_Content'>2018년 10월</div> : null}
      {toggle === 76 ? <div className='Generation_Content'>2018년 11월</div> : null}
      {toggle === 77 ? <div className='Generation_Content'>2018년 12월</div> : null}
      {toggle === 78 ? <div className='Generation_Content'>2019년</div> : null}
      {toggle === 79 ? <div className='Generation_Content'>2019년 1월</div> : null}
      {toggle === 80 ? <div className='Generation_Content'>2019년 2월</div> : null}
      {toggle === 81 ? <div className='Generation_Content'>2019년 3월</div> : null}
      {toggle === 82 ? <div className='Generation_Content'>2019년 4월</div> : null}
      {toggle === 83 ? <div className='Generation_Content'>2019년 5월</div> : null}
      {toggle === 84 ? <div className='Generation_Content'>2019년 6월</div> : null}
      {toggle === 85 ? <div className='Generation_Content'>2019년 7월</div> : null}
      {toggle === 86 ? <div className='Generation_Content'>2019년 8월</div> : null}
      {toggle === 87 ? <div className='Generation_Content'>2019년 9월</div> : null}
      {toggle === 88 ? <div className='Generation_Content'>2019년 10월</div> : null}
      {toggle === 89 ? <div className='Generation_Content'>2019년 11월</div> : null}
      {toggle === 90 ? <div className='Generation_Content'>2019년 12월</div> : null}
      {toggle === 91 ? <div className='Generation_Content'>2020년</div> : null}
      {toggle === 92 ? <div className='Generation_Content'>2020년 1월</div> : null}
      {toggle === 93 ? <div className='Generation_Content'>2020년 2월</div> : null}
      {toggle === 94 ? <div className='Generation_Content'>2020년 3월</div> : null}
      {toggle === 95 ? <div className='Generation_Content'>2020년 4월</div> : null}
      {toggle === 96 ? <div className='Generation_Content'>2020년 5월</div> : null}
      {toggle === 97 ? <div className='Generation_Content'>2020년 6월</div> : null}
      {toggle === 98 ? <div className='Generation_Content'>2020년 7월</div> : null}
      {toggle === 99 ? <div className='Generation_Content'>2020년 8월</div> : null}
      {toggle === 100 ? <div className='Generation_Content'>2020년 9월</div> : null}
      {toggle === 101 ? <div className='Generation_Content'>2020년 10월</div> : null}
      {toggle === 102 ? <div className='Generation_Content'>2020년 11월</div> : null}
      {toggle === 103 ? <div className='Generation_Content'>2020년 12월</div> : null}
      {toggle === 104 ? <div className='Generation_Content'>2021년</div> : null}
      {toggle === 105 ? <div className='Generation_Content'>2021년 1월</div> : null}
      {toggle === 106 ? <div className='Generation_Content'>2021년 2월</div> : null}
      {toggle === 107 ? <div className='Generation_Content'>2021년 3월</div> : null}
      {toggle === 108 ? <div className='Generation_Content'>2021년 4월</div> : null}
      {toggle === 109 ? <div className='Generation_Content'>2021년 5월</div> : null}
      {toggle === 110 ? <div className='Generation_Content'>2021년 6월</div> : null}
      {toggle === 111 ? <div className='Generation_Content'>2021년 7월</div> : null}
      {toggle === 112 ? <div className='Generation_Content'>2021년 8월</div> : null}
      {toggle === 113 ? <div className='Generation_Content'>2021년 9월</div> : null}
      {toggle === 114 ? <div className='Generation_Content'>2021년 10월</div> : null}
      {toggle === 115 ? <div className='Generation_Content'>2021년 11월</div> : null}
      {toggle === 116 ? <div className='Generation_Content'>2021년 12월</div> : null}
      {toggle === 117 ? <div className='Generation_Content'>2022년</div> : null}
      {toggle === 118 ? <div className='Generation_Content'>2022년 1월</div> : null}
      {toggle === 119 ? <div className='Generation_Content'>2022년 2월</div> : null}
      {toggle === 120 ? <div className='Generation_Content'>2022년 3월</div> : null}
      {toggle === 121 ? <div className='Generation_Content'>2022년 4월</div> : null}
      {toggle === 122 ? <div className='Generation_Content'>2022년 5월</div> : null}
      {toggle === 123 ? <div className='Generation_Content'>2022년 6월</div> : null}
      {toggle === 124 ? <div className='Generation_Content'>2022년 7월</div> : null}
      {toggle === 125 ? <div className='Generation_Content'>2022년 8월</div> : null}
      {toggle === 126 ? <div className='Generation_Content'>2022년 9월</div> : null}
      {toggle === 127 ? <div className='Generation_Content'>2022년 10월</div> : null}
      {toggle === 128 ? <div className='Generation_Content'>2022년 11월</div> : null}
      {toggle === 129 ? <div className='Generation_Content'>2022년 12월</div> : null}
      {toggle === 130 ? <div className='Generation_Content'>2023년</div> : null}
      {toggle === 131 ? <div className='Generation_Content'><January2023/></div> : null}
      {toggle === 132 ? <div className='Generation_Content'>2023년 2월</div> : null}
      {toggle === 133 ? <div className='Generation_Content'>2023년 3월</div> : null}
      {toggle === 134 ? <div className='Generation_Content'>2023년 4월</div> : null}
      {toggle === 135 ? <div className='Generation_Content'>2023년 5월</div> : null}
      {toggle === 136 ? <div className='Generation_Content'>2023년 6월</div> : null}
      {toggle === 137 ? <div className='Generation_Content'>2023년 7월</div> : null}
      {toggle === 138 ? <div className='Generation_Content'>2023년 8월</div> : null}
      {toggle === 139 ? <div className='Generation_Content'>2023년 9월</div> : null}
      {toggle === 140 ? <div className='Generation_Content'>2023년 10월</div> : null}
      {toggle === 141 ? <div className='Generation_Content'>2023년 11월</div> : null}
      {toggle === 142 ? <div className='Generation_Content'>2023년 12월</div> : null}
      </div>
    </div>
    </div>
  )
}

export default Generation;