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
            {/* {heading && <h4 className="mb-4 font-bold font-glacialBold">{heading}</h4>} */}
            {navigationList && (
                <ul className="flex sm:grid">
                    {navigationList.map((navigation, index) => {

                        const slug = navigation?.link?.story?.full_slug == 'home' ? '/' : "/" + navigation?.link?.story?.full_slug;
                        
                        if(slug != '/undefined') {
                        const navItem = {
                            url: slug,
                            anchor: navigation.link?.anchor ? `#${navigation.link.anchor}` : "",
                            label: navigation.label
                        }
                        
                        return (
                            <li key={index} className={`px-1 ${index == 0 ? "pl-0" : ""} sm:px-0 `}>
                                <Link href={navItem.url + navItem.anchor} className="text-md font-semibold leading-6 text-gray-900 font-glacialBold">
                                    {navItem.label}
                                </Link>
                            </li>
                        )
                        }


                        return (
                            <li key={index} className={`px-1 ${index == 0 ? "pl-0" : ""} sm:px-0 `}>
                                <LinkRef link={navigation.link} className="underline font-glacialBold font-bold">{navigation.label}</LinkRef>
                            </li>
                        )
                    })}
                </ul>
            )}
            
            
        </div>
    )
}

export default FooterColumn;