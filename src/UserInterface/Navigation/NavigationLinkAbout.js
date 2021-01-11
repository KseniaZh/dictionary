import React from 'react';
import { connect, useSelector} from "react-redux";

const NavigationLinkAbout = props => {

    const about = props.aboutLink;
    const flagHaveDescription = useSelector(state => state.stateFlagsAll.haveDescriptionAll);

    const Description = () => 
                                <div>
                                    <h1>{about.h}</h1>
                                    <p><span className={about.span0} aria-hidden="true"></span>{about.p1}</p>

                                    <h2>{about.ul1}</h2>
                                    <p><span className={about.span11} aria-hidden="true"></span> {about.l11} </p>
                                    <p><span className={about.span12} aria-hidden="true"></span> {about.l12}</p>
                                    <p><span className={about.span13} aria-hidden="true"></span> {about.l13}</p>

                                    <h2>{about.ul2}</h2>
                                    <p><span className={about.span21} aria-hidden="true"></span> {about.l21}</p>
                                    <p><span className={about.span22} aria-hidden="true"></span> {about.l22}</p>
                                    <p><span className={about.span23} aria-hidden="true"></span> {about.l23}</p>
                                </div>

    return (
        
        < div className = { props.classname }>
            {
                flagHaveDescription == true ?
                    <Description />
                    : null
            }
        </div>

        
    )
}

export default connect()(NavigationLinkAbout)
