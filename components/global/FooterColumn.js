import Link from 'next/link';
import LinkRef from '../elements/LinkRef';

const FooterColumn = ({columnData, list, header, uid}) => {
    const {
        _uid,
        heading,
        navigationList
    } = columnData;
    return (
        <div id={_uid} data-name="footer-column" className="mb-4 sm:mb-2">
            {heading && <h4 className="mb-4 font-bold font-glacialBold">{heading}</h4>}
            {navigationList && (
                <ul className="flex sm:grid">
                    {navigationList.map((navigation, index) => {
                        return (
                            <li key={index} className={`px-1 ${index == 0 ? "pl-0" : ""} sm:px-0 `}>
                                <LinkRef link={navigation.link} className="underline font-glacialRegular">{navigation.label}</LinkRef>
                            </li>
                        )
                    })}
                </ul>
            )}
            
            
        </div>
    )
}

export default FooterColumn;