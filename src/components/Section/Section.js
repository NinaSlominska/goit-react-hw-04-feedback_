import PropTypes from 'prop-types';
import { Title,SectionStyled } from "./Section.style"
export const Section = ({ title, children }) => {
    return (<SectionStyled><Title>{title}</Title>{children}</SectionStyled>)   
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};