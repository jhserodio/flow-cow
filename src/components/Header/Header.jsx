// @flow
import React from 'react';
import './Header.css';

const Header = (props: { className: string }) =>
    <div className={`${props.className} cowHeader`}>
        <svg id="icon-cow" viewBox="0 0 32 32">
            <path d="M12.807 12.966c-0.694 0-1.259 0.571-1.259 1.275s0.565 1.276 1.259 1.276c0.695 0 1.26-0.571 1.26-1.276s-0.565-1.275-1.26-1.275z"></path>
            <path d="M19.183 12.956c-0.701 0-1.269 0.575-1.269 1.285s0.568 1.285 1.269 1.285c0.7 0 1.268-0.575 1.268-1.285s-0.568-1.285-1.268-1.285z"></path>
            <path d="M13.983 23.47c-0.546 0-0.99 0.449-0.99 1.003s0.444 1.004 0.99 1.004c0.547 0 0.991-0.449 0.991-1.004s-0.444-1.003-0.991-1.003z"></path>
            <path d="M18.009 25.485c0.551 0 0.998-0.453 0.998-1.011s-0.447-1.011-0.998-1.011c-0.551 0-0.999 0.453-0.999 1.011s0.447 1.011 0.999 1.011z"></path>
            <path d="M31.193 6.993l-0.349-0.784-0.818 0.259c-2.343 0.743-5.075 1.6-6.281 1.978-0.409-0.331-0.869-0.621-1.377-0.87-0.284-0.139-0.576-0.261-0.873-0.369 0.373-0.866 0.744-2.224 0.744-4.209h-1.919c0 1.568-0.268 2.613-0.492 3.214-0.074 0.199-0.149 0.362-0.216 0.494-1.318-0.242-2.604-0.283-3.612-0.283s-2.294 0.041-3.612 0.283c-0.067-0.132-0.142-0.296-0.216-0.494-0.225-0.601-0.492-1.646-0.492-3.214h-1.919c0 1.985 0.37 3.344 0.744 4.209-0.296 0.108-0.588 0.23-0.873 0.369-0.508 0.248-0.968 0.539-1.377 0.87-1.206-0.378-3.938-1.235-6.281-1.978l-0.818-0.259-0.349 0.784c-0.45 1.013-0.807 2.5 0.049 3.833 1.090 1.697 3.576 2.22 5.035 2.381-0.019 0.248-0.030 0.502-0.030 0.761 0 2.309 0.532 3.726 1.206 5.52 0.224 0.598 0.457 1.216 0.697 1.938 0.624 1.876 1.379 3.81 2.664 5.25 1.396 1.564 3.219 2.325 5.572 2.325s4.176-0.76 5.572-2.325c1.285-1.44 2.040-3.374 2.664-5.25 0.24-0.723 0.473-1.34 0.697-1.938 0.674-1.794 1.206-3.211 1.206-5.52 0-0.26-0.011-0.513-0.030-0.761 1.458-0.161 3.944-0.684 5.035-2.381 0.856-1.333 0.499-2.82 0.049-3.833zM6.265 11.315c-1.211-0.122-3.148-0.519-3.795-1.526-0.247-0.384-0.252-0.827-0.18-1.208 1.664 0.526 3.398 1.071 4.575 1.44-0.245 0.4-0.445 0.831-0.601 1.293zM16 27.083c-2.817 0-4.306-1.318-5.462-3.795 1.289-1.107 3.317-1.778 5.462-1.778s4.173 0.67 5.462 1.778c-1.156 2.477-2.645 3.795-5.462 3.795zM23.137 18.814c-0.22 0.586-0.47 1.25-0.721 2.007-0.070 0.209-0.14 0.413-0.21 0.612-1.618-1.169-3.836-1.841-6.206-1.841s-4.588 0.672-6.206 1.841c-0.070-0.2-0.14-0.403-0.21-0.612-0.252-0.757-0.501-1.421-0.721-2.007-0.629-1.674-1.084-2.884-1.084-4.845 0-2.255 0.882-3.782 2.695-4.668 1.319-0.645 3.127-0.958 5.525-0.958s4.206 0.313 5.525 0.958c1.814 0.887 2.695 2.414 2.695 4.668 0 1.961-0.454 3.171-1.084 4.845zM29.53 9.787c-0.642 1.003-2.583 1.402-3.796 1.526-0.156-0.462-0.356-0.893-0.601-1.292 1.177-0.369 2.912-0.914 4.575-1.44 0.072 0.381 0.067 0.822-0.179 1.206z"></path>
        </svg>
        <h1>Flow cow</h1>
    </div>

export default Header;
