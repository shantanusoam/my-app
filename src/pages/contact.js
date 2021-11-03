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
      <ContactSection></ContactSection>
    <MapSection></MapSection>
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
