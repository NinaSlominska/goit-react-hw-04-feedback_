import PropTypes from 'prop-types';
import { Title } from "./Section.style"
export const Section = ({ title, children }) => {
    return (<Section><Title>{title}</Title>{children}</Section>)   
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};