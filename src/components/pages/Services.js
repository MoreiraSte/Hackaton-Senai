import React, {useState, useEffect} from 'react';
import '../../App.css';

export default function Services() {
  const [data, setData] = useState()


  useEffect({
      database = [],
      database.onSnapshot.query((data)=>{
      const vetor = []
      data.forEach(object => {
        vetor.push({...object, id: object.id})
      });
      setData(vetor)
    })
  }, [])

  return (
    <div className='services'>
      <div className='cardsFirst'>

       

        <div className='cards'>
        {
          data.map((object) => {
            <div className='card1'>
              <img className='img_robot1' src={object.image} alt='robot' />
              <button className='butt'>{object.name}</button>
            </div>
          })
        }
          {/* <div className='card1'>
            <img className='img_robot1' src='/images/img_card1.png' alt='robot' />
            <button className='butt'>robo 1</button>
          </div>
          <div className='card2'>
            <img className='img_robot2' src='/images/img_card2.png' alt='robot' />
            <button className='butt'>robo 2</button>
          </div>
          <div className='card3'>
            <img className='img_robot1' src='/images/img_card3.png' alt='robot' />
            <button className='butt'>robo 3</button>
          </div> */}
        </div>

        <div className='cards'>
        {
          data.map((object) => {
            <div className='card1'>
              <img className='img_robot1' src={object.iamge} alt='robot' />
              <button className='butt'>{object.name}</button>
            </div>
          })
        }
          {/* <div className='card1'>
            <img className='img_robot1' src='/images/img_card4.png' alt='robot' />
            <button className='butt'>robo 4</button>
          </div>
          <div className='card2'>
            <img className='img_robot1' src='/images/img_card5.png' alt='robot' />
            <button className='butt'>robo 5</button>
          </div>
          <div className='card3'>
            <img className='img_robot1' src='/images/img_card6.png' alt='robot' />
            <button className='butt'>robo 6</button>
          </div> */}
        </div>

      </div>
    </div>
  );
}
