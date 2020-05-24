import React from 'react'
class Header extends  React.Component{
  render(){
      return(
        <header style={{    display: 'grid',
        gridTemplateColumns: 'repeat(12,minmax(2em,auto))',
        gridAutoRows:' minmax(2em,auto)'}}>
            <h1 
            style={{
                fontSize: '3rem',
                width: '8em',
                lineHeight: '1.5em',
                margin:'1.5em 0 0 1.5em ',
                letterSpacing:'0.1em' ,
                gridRow: '1',
                gridColumn: '1/7',
                justifySelf: 'center',
                alignSelf: 'center',
                fontWeight: '300',
                color: '#F8F2F2',
                animation:'appearimg  1s linear forwards'
            }}
            >weather forcasting</h1>
            <img 
            style={{ margin :'1.5em 1.5em 0 0',
                width: '22em',
                gridRow: '1',
                gridColumn: '7/13',
                justifySelf: 'center',
                alignSelf: 'end'}}
            src="./img/main image 1.svg" alt=""/>
        </header>
      )
  }
}

export default Header;