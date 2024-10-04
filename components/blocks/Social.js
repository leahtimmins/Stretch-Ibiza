import LinkRef from "../elements/LinkRef";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/vimeo';
import 'react-social-icons/youtube';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';
import 'react-social-icons/tiktok';
import 'react-social-icons/pinterest';
import 'react-social-icons/snapchat';
import 'react-social-icons/twitter';



const Social = ({socialData}) => {
    return (
        <div className="mb-4 sm:mb-2">
            <h4 className="mb-4 font-semibold">Social</h4>
            <ul className="flex">
                {socialData.map((social, index) => {
                    return (
                        <li key={index} className={`m-1 ${index == 0 ? "ml-0" : ""}`}>
                            <LinkRef link={social.link} className="underline capitalize inline-block">
                                <span className="sr-only">{social.name}</span>
                                <SocialIcon url={`www.${social.name}.com`} as="span" />
                            </LinkRef>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Social;