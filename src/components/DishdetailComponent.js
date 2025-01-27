import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state = {    
        }      
    }
    renderComments(comments){
        if(comments == null){
            return(<div></div>);
        }
        const cmnts = comments.map((comment)=>{
            return (
                <li key={comment.id}>
                    <p>"{comment.comment}"</p>                  
                    <p>@{comment.author}</p>

                </li>
            )
        })
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }

    renderDish(dish){
        if(dish != null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src ={this.props.dish.image} alt ={this.props.dish.name} /> 
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }else{
            return(<div></div>)
        }
    }
render(){
    const dish = this.props.dish;
    if(dish == null){
        return(<div></div>)
    }
    const dishItem = this.renderDish(dish)
    const commentItem = this.renderComments(dish.comments)

    return(
        <div className='row'>
            {dishItem}
            {commentItem}
        </div>
    );
}
}
export default Dishdetail;