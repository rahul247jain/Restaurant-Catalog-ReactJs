import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay
  ,CardText,CardBody,CardTitle, ListGroup, ListGroupItem} from 'reactstrap';
  
class DishDetail extends Component{
  constructor(props){
    super(props);
    this.renderComments = this.renderComments.bind(this);
    this.renderDish = this.renderDish.bind(this);
  }

  renderDish(dish){
      if(dish!=null){
             return(
               <div class="row">
               <div className="col-12 col-md-5 m-1">
                   <Card>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                     <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                     </CardBody>
                   </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                {this.renderComments(dish.comments)}
                </div>
                </div>
             );}
      else {
        return(
          <div></div>
        );}
   }

   renderComments(dishcomment){
     const display = dishcomment.map((mycom) => {
     return (
    <div>
       <li key={mycom.id}>{mycom.comment}
       <p> -- {mycom.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short',
        day: '2-digit'}).format(new Date(Date.parse(mycom.date)))} </p></li>
    </div>
    );
     });
     return(
          <div>
             <h4>Comments</h4>
             <ul className="list-unstyled">{display}</ul>

          </div>
        );
     }


  render(){
    return(
      <div>
      <div className="row">
        {
          this.renderDish(this.props.dish)
        }
        </div>
      </div>
    );
  }
}
export default DishDetail;