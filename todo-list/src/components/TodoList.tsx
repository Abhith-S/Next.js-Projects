import React,{FC} from 'react'
interface IProp {
  task : string;
  duration : number;
}

const TodoList:FC<IProp> = ({task,duration}) => {
  return (
    <div>
      <span className='mr-8'>Task : {task}</span>
      <span>Duration : {duration}</span>
    </div>
  )
}

export default TodoList