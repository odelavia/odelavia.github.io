import React, { Component } from 'react';

class OptionsDropDown extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }

    this.toggleList = this.toggleList.bind(this);
  }
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  static getDerivedStateFromProps(nextProps){
    const count = nextProps.list.filter((location) => location.selected ).length;
    console.log(count)
    if(count === 0){
      return {headerTitle: nextProps.title}
    }
    else if(count === 1){
      return {headerTitle: `${count} ${nextProps.titleHelper}`}
    }
    else if(count > 1){
      return {headerTitle: `${count} ${nextProps.titleHelper}s`}
    }
  }
  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <div name="angle-up" size="2x"/>
              : <div name="angle-down" size="2x"/>
            }
        </div>
        {listOpen && <ul className="dd-list">
          {list.map((item) => (
            <li className="dd-list-item" key={item.title} onClick={() => this.props.toggleItem(item.id, item.key)}>{item.title} {item.selected && <div name="check"/>}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default OptionsDropDown;