import React, { Component } from 'react'

export default class Todolist extends Component {

    state= {
        users:[]
    }

    componentDidMount(){
        fetch('http://localhost:5000/user', {mode:'cors'})
        .then(res =>{
            const users = res.data

            this.setState = [users]

            console.log(users)
        })
        .catch(err =>{
            console.log(err);
        })
    }


  render() {

    const users = this.state

    
    return (

        <div>

            {
                users.map( item =>{
                    <li key={item.id}>{item.title}</li>
                })
            }
        </div>

        


        
    )
  }
}
