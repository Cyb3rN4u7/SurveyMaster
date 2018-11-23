import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/index';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component{


  logout(){
    this.props.logoutUser(); 
  }

    renderContent(){
      switch(this.props.auth){
        case null:
          return;
        case false:
          return <li><a href="/auth/google">Login with Google</a></li>;
        default:
          return [
            <li key={1}><Payments /></li>,
            <li key={2}>Credits :  {this.props.auth.credits}</li>,  
            <li key={3} onClick={()=>this.logout()}><Link to={'/'} style={{color: '#fff'}} >Log out {this.props.auth.firstName}?</Link></li>
        ];
      }
    }

    render(){
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to={this.props.auth ? '/surveys' : '/'} 
              className="brand-logo left"><i style={{fontSize: '1.3em'}} className="material-icons white-text left" >mail_outline</i></Link>
              <ul id="nav-mobile" className="right">
                { this.renderContent() }
              </ul>
            </div>
          </nav>
        )
    }
}

function mapStateToProps({auth}){
//  console.log('auth',auth);
  return {
    auth
  }
}

export default connect(mapStateToProps,{logoutUser})(Header);