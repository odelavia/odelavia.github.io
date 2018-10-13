import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterType } from '../../actions/searchbar';

class OptionsDropDown extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }

    this.toggleList = this.toggleList.bind(this);
    // this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this)
    this.lowercaseFirstLetter = this.lowercaseFirstLetter.bind(this)
  }
  // handleClickOutside(){
  //   this.setState({
  //     listOpen: false
  //   })
  // }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  static capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  lowercaseFirstLetter(string) {
    return string[0].toLowerCase() + string.slice(1);
  }

  static getDerivedStateFromProps(nextProps){
    const count = nextProps.list.filter((searchFilter) => searchFilter.selected ).length;
    const newHeaderTitle = OptionsDropDown.capitalizeFirstLetter(nextProps.list.filter((searchFilter) => searchFilter.selected)[0].title)
    return {headerTitle: `${newHeaderTitle}`}
  }

  componentDidUpdate(){
    this.props.dispatch(setFilterType(this.lowercaseFirstLetter(this.state.headerTitle)))
    console.log(this.props.filterType)
  }
  render(){
    const {list} = this.props;
    const {listOpen, headerTitle} = this.state;
    const { capitalizeFirstLetter } = OptionsDropDown;
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
            <li className="dd-list-item" key={item.title} onClick={() => this.props.toggleItem(item.id, item.key)}>{capitalizeFirstLetter(item.title)} {item.selected && <div name="check"/>}</li>
          ))}
        </ul>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.searchbar.filter,
    filterType: state.searchbar.type,
  }
}

export default connect(mapStateToProps)(OptionsDropDown);