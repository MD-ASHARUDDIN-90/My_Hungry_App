import NavBar from "../../Component/NavBar/NavBar";
import { data } from "../../Fixture/HelpDummyQuest";
import { GrAdd, GrSubtract } from 'react-icons/gr';
import { useState } from "react";
import style from './HelpPage.module.css'


export default function HelpPage() {
    const[list , setList] = useState(data)
    const handleClick = (x,i) => {
        if (!x.isClick) {
          x.isClick = true;
        } else {
          x.isClick = false;
        }
        setList([...list]);
    }
    return(
        <>
        <div>
      
        <NavBar />
        <div>
        <div className={style.main}>
        <h2>Help And Support</h2>
        <p>Let's take a step ahead and help you better.</p>
      { list.map((x, i) => (
        <>
          <div key={x.ans}>
            <div
              onClick={() => {
                handleClick(x,i);
              }}
              className={style.quest}
            >
              <h2 className={style.questSub}>
                Question ({i + 1}) : <span>{x.quest}</span>
              </h2>
              {x.isClick ? <GrSubtract className="icon"/> : <GrAdd className="icon" />}
            </div>
            {x.isClick ? <h3 className={style.ans}>{x.ans}</h3> : ''}
          </div>
        </>
      ))}
    </div>
        </div>
        </div>
        </>
    )
}