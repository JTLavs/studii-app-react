export function toggle(){
    this.setState({isOpen: !this.setState.isOpen})
}
export function updateMenuState(isOpen){
    this.setState({isOpen: isOpen})
}
export function onMenuItemSelected(item){
    this.setState({isOpen: false, selectedItem: item})
    this.props.navigator.replace({ id: item });
}