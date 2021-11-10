import React from 'react';
import FooterNav from '../componets/footer-nav';

const withFooter= (WrappedComponent) =>{

 
  return class WithLoader extends React.Component {
    constructor(props){
      super(props)
    }
  
    render(){
      return <><WrappedComponent {...this.props} />
                  <FooterNav { ...this.props } />
             </>
    }
  }
}

export default withFooter;
