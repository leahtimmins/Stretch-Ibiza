import Link from 'next/link';

const TabItem = ({blok}) => {
    const {
        _uid,
        link,
        label,
    } = blok;

    const slug = link?.story?.full_slug == 'home' ? '/' : "/" + link?.story?.full_slug;
    const anchor = link?.anchor != '' ? `#${link.anchor}` : "";

    return (
       <div id="tab-item" className="mt-6 max-w-[150px] sm:max-w-[180px] mx-auto text-center text-2xl sm:text-3xl text-glacialBold font-extrabold">
            <Link href={`${slug}${anchor}`} title={label} >{label}</Link>
       </div>
    )
}

export default TabItem;