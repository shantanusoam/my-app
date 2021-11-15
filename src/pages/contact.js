import React, {useState} from 'react';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';




const Contac = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
    <div style={{margin:"20px"}}>
    <ContactSection></ContactSection>
    <MapSection></MapSection>
    </div>
      
    </>
      
    
  )
};
class Contact extends React.Component {
  
  componentDidMount() {
    document.title = "BigRig Contact"
  }
  
  render() {
    const PageComponent = this.props.component

    return (
      <Contac />
    )
  }
}

export default Contact;
