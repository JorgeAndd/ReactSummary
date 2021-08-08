interface BackdropProps {
  onClick(): any;
}

function Backdrop(props: BackdropProps) {
  return <div className='backdrop' onClick={props.onClick}/>;
}

export default Backdrop;