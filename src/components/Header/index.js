import PropTypes from 'prop-types';

export default function Header({ title, subtitle, content }) {
    return (
        <header className="header">
            <h1 className="header__title">
            {title}
            </h1>
            <h2 className="header__subtitle">
            {subtitle}
            </h2>
            <p className="header__content">
            {content}
            </p>
        </header>
    );
    }

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};
