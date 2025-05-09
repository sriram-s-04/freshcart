import React from 'react'
import { Card } from 'react-bootstrap';

const Arr = () => {

    let colors=['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

    let students=[
        {name:'John', age:10},
    {name:'Jane', age:12},
    {name:'Jim', age:14},   
    {name:'Jack', age:16},
    {name:'Jill', age:18}
]

     return (
    <div>

        {
            colors.map((clr)=><button style={{backgroundColor:clr, fontSize:'20px'}}>{clr} button</button>)
        }
        {
            students.map((stu)=><Card>
                <Card.Body style={{backgroundColor:'lightblue', fontSize:'20px'}}>
                    <Card.Title>{stu.name}</Card.Title>
                    <Card.Text>{stu.age}</Card.Text>
                </Card.Body>
            </Card>)
        }



    </div>
  )
}

export default Arr