import React from 'react';
import './questionform.css'
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style = {
    marginRight: 20,
  };


export default class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            isHidden:true,
            input:""
        }
    }
    showNext(){
        this.setState({
            isHidden: false
        })
    }
    handleChange=(e)=> {    
        this.setState({     
            input: e.target.value   
        }) 
    }

    empty(){
        this.setState({
            input:""
        })
    }

    hideButton(){
        this.setState({
            isHidden:true
        })
    }

    onSubmit(input) {
        
    }

    render() {
       
    return (
        <div className="question-form">
            <div className='image'>
                <img className="meme-pics" src={this.props.propQuestion.img_url} alt="meme"/>
            </div>
            <form 
                onSubmit={(event) =>{ 
                    event.preventDefault()
                    this.props.onSubmit(event.target.answer.value)}}
                className="form">
                <TextField 
                    hintText="name this meme"
                    floatingLabelText="Name"
                    /><br />
                <input type="text" 
                    name="answer" 
                    id="answer" 
                    value={this.state.input} onChange={(e)=>{this.handleChange(e)}} placeholder="name this meme"/>
                <FlatButton label="submit" 
                    mini={true} 
                    onClick={()=>this.showNext()} 
                    type="submit"/>
                {/* <FloatingActionButton style={style} 
                    mini={true} 
                    onClick={()=>this.showNext()} 
                    type="submit">
                    <ContentAdd />
                </FloatingActionButton> */}
            </form>
            <br/>
            <br/>
            {this.state.isHidden ?  "" : <RaisedButton label="NEXT" primary={true} style={style} onClick={()=>{this.props.proploadNext();this.empty();this.hideButton();}}/>}
            
        </div>

    )
    }
}


//**** state for isHidden = true
//onClick for + button changing isHidden = false
//next if this.state === idHidden, show button 